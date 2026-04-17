using StudentManagementBackend.Models;

namespace StudentManagementBackend.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetByUsername(string username);
        Task Add(User user);
    }
}
