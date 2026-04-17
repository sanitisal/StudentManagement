using Microsoft.AspNetCore.Mvc;
using StudentManagementBackend.DTOs;
using StudentManagementBackend.Services.Interfaces;

namespace StudentManagementBackend.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _auth;

        public AuthController(IAuthService auth)
        {
            _auth = auth;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDTO dto)
        {
            await _auth.Register(dto);
            return Ok("Registered");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDTO dto)
        {
            var token = await _auth.Login(dto);
            return Ok(new { token });
        }
    }
}
