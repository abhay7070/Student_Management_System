using StudentApplication.Model;

namespace StudentApplication.Repository
{
    public interface IStudentRepository
    {
        public Task<List<Student>> GetStudentListAsync();
        public Task<IEnumerable<Student>> GetStudentByIdAsync(int Id);
        public Task<int> AddStudentAsync(Student student);
        public Task<int> UpdateStudentAsync(Student student);
        public Task<int> DeleteStudentAsync(int  id);
       // void DeleteStudentAsync(int id);
    }
}
