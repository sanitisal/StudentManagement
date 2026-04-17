using StudentManagementBackend.DTOs;

namespace StudentManagementBackend.Services.Interfaces
{
    public interface IAuthService
    {
        Task Register(RegisterDTO dto);
        Task<string> Login(LoginDTO dto);
    }
}
