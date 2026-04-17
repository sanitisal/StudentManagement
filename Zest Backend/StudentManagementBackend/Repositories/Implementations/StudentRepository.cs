using Microsoft.EntityFrameworkCore;
using StudentManagementBackend.Data;
using StudentManagementBackend.Models;
using StudentManagementBackend.Repositories.Interfaces;

namespace StudentManagementBackend.Repositories.Implementations
{
    public class StudentRepository : IStudentRepository
    {
        private readonly AppDbContext _context;

        public StudentRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Student>> GetAll() =>
            await _context.Students.ToListAsync();

        public async Task<Student> GetById(int id) =>
            await _context.Students.FindAsync(id);

        public async Task Add(Student s)
        {
            await _context.Students.AddAsync(s);
            await _context.SaveChangesAsync();
        }

        public async Task Update(Student s)
        {
            _context.Students.Update(s);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(Student s)
        {
            _context.Students.Remove(s);
            await _context.SaveChangesAsync();
        }
    }
}
