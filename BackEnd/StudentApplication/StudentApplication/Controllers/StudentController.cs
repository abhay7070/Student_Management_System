using Microsoft.AspNetCore.Mvc;
using StudentApplication.Model;
using StudentApplication.Repository;

namespace StudentApplication.Controllers
{
    [Route("api/Student")]
    [ApiController]
    public class StudentController : Controller
    {
        private readonly IStudentRepository studentService;

        public StudentController(IStudentRepository studentService)
        {
            this.studentService = studentService;
        }

       // app.use(cors())
        [HttpGet("getstudentlist")]
        public async Task<List<Student>> GetStudentListAsync()
        {
            try
            {
                return await studentService.GetStudentListAsync();
            }
            catch
            {
                throw;
            }
        }

        [HttpPost("addstudent")]
        public async Task<IActionResult> AddProductAsync(Student student)
        {
            if (student == null)
            {
                return BadRequest();
            }

            try
            {
                var response = await studentService.AddStudentAsync(student);

                return Ok(response);
            }
            catch
            {
                throw;
            }
        }

        [HttpPut("updatestudent")]
        public async Task<IActionResult> UpdateProductAsync(Student student)
        {
            if (student == null)
            {
                return BadRequest();
            }

            try
            {
                var result = await studentService.UpdateStudentAsync(student);
                return Ok(result);
            }
            catch
            {
                throw;
            }
        }

        [HttpDelete("deletestudent")]
        public async Task<int> DeleteStudentAsync(int Id)
        {
            try
            {
                var response = await studentService.DeleteStudentAsync(Id);
                return response;
            }
            catch
            {
                throw;
            }
        }



        [HttpGet("getstudentbyid")]
        public async Task<IEnumerable<Student>> GetStudentByIdAsync(int Id)
        {
            try
            {
                var response = await studentService.GetStudentByIdAsync(Id);

                if (response == null)
                {
                    return null;
                }

                return response;
            }
            catch
            {
                throw;
            }
        }

    }
}
