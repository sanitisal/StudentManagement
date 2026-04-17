using StudentManagementBackend.DTOs;
using StudentManagementBackend.Models;

namespace StudentManagementBackend.Services.Interfaces
{
    public interface IStudentService
    {
        Task<List<Student>> GetAll();
        Task Add(StudentDTO dto);
        Task Update(int id, StudentDTO dto);
        Task Delete(int id);
    }

}
