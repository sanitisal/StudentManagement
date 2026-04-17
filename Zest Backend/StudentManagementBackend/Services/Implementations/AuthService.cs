using StudentManagementBackend.DTOs;
using StudentManagementBackend.Models;
using StudentManagementBackend.Repositories.Interfaces;
using StudentManagementBackend.Services.Interfaces;
using BCrypt.Net;

using BCrypt.Net;

public class AuthService : IAuthService
{
    private readonly IUserRepository _userRepo;
    private readonly ITokenService _tokenService;

    public AuthService(IUserRepository userRepo, ITokenService tokenService)
    {
        _userRepo = userRepo;
        _tokenService = tokenService;
    }

    public async Task Register(RegisterDTO dto)
    {
        var exists = await _userRepo.GetByUsername(dto.Username);
        if (exists != null) throw new Exception("User exists");

        var user = new User
        {
            Username = dto.Username,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password)
        };

        await _userRepo.Add(user);
    }

    public async Task<string> Login(LoginDTO dto)
    {
        var user = await _userRepo.GetByUsername(dto.Username);

        if (user == null || !BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash))
            throw new Exception("Invalid credentials");

        return _tokenService.GenerateToken(dto.Username);
    }
}
