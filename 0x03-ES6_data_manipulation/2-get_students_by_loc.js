export default function getStudentsByLocation(students, city) {
  // Using filter() to get students by location
  return students.filter((student) => student.location === city);
}
