using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using StudentApplication.Migrations;
using StudentApplication.Model;
using System.Data;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace StudentApplication.Repository
{
    public class StudentRepository : IStudentRepository
    {
        protected readonly IConfiguration Configuration;
        private readonly DbContextClass _dbContext;

        public StudentRepository(DbContextClass dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            Configuration = configuration;

        }

        public async Task<int> DeleteStudentAsync(int studentId)
        {
            using (SqlConnection connection = new SqlConnection(Configuration.GetConnectionString("DefaultSQLConnection")))
            {
                var cmd = new SqlCommand("dbo.DeleteStudentByID", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                connection.Open();
                cmd.Parameters.AddWithValue("@StudentId", studentId);

                int rowsAffected = await cmd.ExecuteNonQueryAsync();

                return rowsAffected;
            }
        }


        //    //return await Task.Run(() => _dbContext.Database.ExecuteSqlInterpolatedAsync($"DeleteStudentByID {StudentId}"));
        //  //  }


        public async  Task<IEnumerable<Student>> GetStudentByIdAsync(int StudentId)
        {
         


                var param = new SqlParameter("@StudentId", StudentId);

            var studentDetails = await Task.Run(() => _dbContext.students
                            .FromSqlRaw(@"exec GetStudentByID @StudentId", param).ToListAsync());

            return studentDetails;

        }

        //public Task<List<Student>> GetStudentListAsync()
        //{
        //    throw new NotImplementedException();
        //}

        //public async Task<List<Student>> GetStudentListAsync()
        //{
        //    return await _dbContext.students.FromSqlRaw<Student>("GetStudentList").ToListAsync();

        //}

        //public async Task<List<Student>> GetStudentListAsync()
        //{
        //    List<Student> studentlist = new List<Student>();
        //    using (SqlConnection connection = new SqlConnection(Configuration.GetConnectionString("DefaultSQLConnection")))
        //    {
        //        using (SqlCommand cmd = new SqlCommand())
        //        {
        //            cmd.Connection = connection;
        //            cmd.CommandText = "dbo.GetStudentList";
        //            cmd.CommandType = CommandType.StoredProcedure;
        //            connection.Open();
        //            using (SqlDataReader dataReader = await cmd.ExecuteReaderAsync())
        //            {
        //                while (await dataReader.ReadAsync())
        //                {
        //                    Student section = new Student();
        //                    section.StudentId = dataReader.GetInt32(dataReader.GetOrdinal("StudentId"));
        //                    section.RollNo = dataReader.GetInt32(dataReader.GetOrdinal("RollNo"));
        //                   section.Name = dataReader.GetString(dataReader.GetOrdinal("Name"));
        //                    section.Mark = dataReader.GetInt32(dataReader.GetOrdinal("Mark"));
        //                    section.Course = dataReader.GetString(dataReader.GetOrdinal("Course"));
        //                    studentlist.Add(section);
        //                }

        //                dataReader.Close();
        //            }
        //            cmd.Dispose();
        //            connection.CloseConnection();
        //        }

        //    }

        //    return studentlist;
        //}

        public async Task<List<Student>> GetStudentListAsync()
        {
            List<Student> studentList = new List<Student>();
            using (SqlConnection connection = new SqlConnection(Configuration.GetConnectionString("DefaultSQLConnection")))
            {
                using (SqlCommand cmd = new SqlCommand("dbo.GetStudentList", connection))
                {//sqlcommand -what type of interaction you want to perform with a database
                    cmd.CommandType = CommandType.StoredProcedure;
                    await connection.OpenAsync();
                    //is called to asynchronously open the database connection.
                    using (SqlDataReader dataReader = await cmd.ExecuteReaderAsync())
                    {
                        while (await dataReader.ReadAsync())
                        {
                            Student student = new Student();
                         //retrieves the value of the "StudentId" column from the datareader 
                            student.StudentId = dataReader.GetInt32(dataReader.GetOrdinal("StudentId"));
                            student.RollNo = dataReader.GetInt32(dataReader.GetOrdinal("RollNo"));
                            student.Name = dataReader.GetString(dataReader.GetOrdinal("Name"));
                            //student.Mark = dataReader.GetInt32(dataReader.GetOrdinal("Mark"));
                            student.Mark = dataReader.GetDecimal(dataReader.GetOrdinal("Mark"));
                            student.Course = dataReader.GetString(dataReader.GetOrdinal("Course"));
                            student.City = dataReader.GetString(dataReader.GetOrdinal("City"));
                            student.Color = dataReader.GetString(dataReader.GetOrdinal("Color"));

                            studentList.Add(student);
                        }
                    }
                }
            }

            return studentList;
        }

        //public async Task<int> AddStudentAsync(Student student)
        //{
        //    List<Student> studentList = new List<Student>();
        //    using (SqlConnection connection = new SqlConnection(Configuration.GetConnectionString("DefaultSQLConnection")))
        //    {
        //        using (SqlCommand cmd = new SqlCommand("dbo.AddNewStudent", connection))
        //        {
        //            cmd.CommandType = CommandType.StoredProcedure;
        //            //  await connection.OpenAsync();
        //            cmd.Parameters.Add(new SqlParameter("@RollNo", student.RollNo));
        //            cmd.Parameters.Add(new SqlParameter("@Name", student.Name));
        //            cmd.Parameters.Add(new SqlParameter("@Mark", student.Mark));
        //            cmd.Parameters.Add(new SqlParameter("@Course", student.Course));
        //            cmd.Parameters.Add(new SqlParameter("@City", student.City));

        //            connection.Open();
        //            await cmd.ExecuteNonQueryAsync();

        //            cmd.Dispose();
        //            connection.Close();

        //        }

        //    }
        //    return student;

        //}

        public async Task<int> AddStudentAsync(Student student)
        {
            using (SqlConnection connection = new SqlConnection(Configuration.GetConnectionString("DefaultSQLConnection")))
            {
                using (SqlCommand cmd = new SqlCommand("dbo.AddNewStudent", connection))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@RollNo", student.RollNo));
                    cmd.Parameters.Add(new SqlParameter("@Name", student.Name));
                    cmd.Parameters.Add(new SqlParameter("@Mark", student.Mark));
                    cmd.Parameters.Add(new SqlParameter("@Course", student.Course));
                    cmd.Parameters.Add(new SqlParameter("@City", student.City));
                    cmd.Parameters.Add(new SqlParameter("@Color", student.Color));

                    await connection.OpenAsync();
                    int rowsAffected = await cmd.ExecuteNonQueryAsync();

                    return rowsAffected;
                }
            }
        }

        public async Task<int> UpdateStudentAsync(Student student)
        {

            using (SqlConnection connection = new SqlConnection(Configuration.GetConnectionString("DefaultSQLConnection")))
            {
                using (SqlCommand cmd = new SqlCommand("dbo.UpdateStudent", connection))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@StudentId", student.StudentId));
                    cmd.Parameters.Add(new SqlParameter("@RollNo", student.RollNo));
                    cmd.Parameters.Add(new SqlParameter("@name", student.Name));
                    cmd.Parameters.Add(new SqlParameter("@Mark", student.Mark));
                    cmd.Parameters.Add(new SqlParameter("@Course", student.Course));
                    cmd.Parameters.Add(new SqlParameter("@City", student.City));
                    cmd.Parameters.Add(new SqlParameter("@Color", student.Color));

                    await connection.OpenAsync();
                    int rowsAffected = await cmd.ExecuteNonQueryAsync();

                    return rowsAffected;

                }
            }

                //    var parameter = new List<SqlParameter>();
                //    parameter.Add(new SqlParameter("@StudentId", student.StudentId));
                //    parameter.Add(new SqlParameter("@RollNo", student.RollNo));
                //    parameter.Add(new SqlParameter("@name", student.Name));
                //    parameter.Add(new SqlParameter("@Mark", student.Mark));
                //    parameter.Add(new SqlParameter("@Course", student.Course));

                //    var result = await Task.Run(() => _dbContext.Database
                //    .ExecuteSqlRawAsync(@"exec UpdateStudent @StudentId, @RollNo, @name, @Mark, @Course", parameter.ToArray()));
                //    return result;
                //}


            }
        }

}

