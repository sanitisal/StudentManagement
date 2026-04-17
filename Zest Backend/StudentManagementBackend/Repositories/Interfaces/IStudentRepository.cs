using StudentManagementBackend.Models;

namespace StudentManagementBackend.Repositories.Interfaces
{
    public interface IStudentRepository
    {
        Task<List<Student>> GetAll();
        Task<Student> GetById(int id);
        Task Add(Student s);
        Task Update(Student s);
        Task Delete(Student s);
    }
}
