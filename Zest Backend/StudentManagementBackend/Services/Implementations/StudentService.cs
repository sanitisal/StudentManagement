using StudentManagementBackend.DTOs;
using StudentManagementBackend.Models;
using StudentManagementBackend.Repositories.Interfaces;
using StudentManagementBackend.Services.Interfaces;

namespace StudentManagementBackend.Services.Implementations
{
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository _repo;

        public StudentService(IStudentRepository repo)
        {
            _repo = repo;
        }

        public async Task<List<Student>> GetAll() => await _repo.GetAll();

        public async Task Add(StudentDTO dto)
        {
            var s = new Student
            {
                Name = dto.Name,
                Email = dto.Email,
                Age = dto.Age,
                Course = dto.Course
            };

            await _repo.Add(s);
        }

        public async Task Update(int id, StudentDTO dto)
        {
            var s = await _repo.GetById(id);
            if (s == null) throw new Exception("Not found");

            s.Name = dto.Name;
            s.Email = dto.Email;
            s.Age = dto.Age;
            s.Course = dto.Course;

            await _repo.Update(s);
        }

        public async Task Delete(int id)
        {
            var s = await _repo.GetById(id);
            if (s == null) throw new Exception("Not found");

            await _repo.Delete(s);
        }
    }
}
