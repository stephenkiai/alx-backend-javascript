export default function getListStudentIds(students) {
  // Check if input is an array
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map((student) => student.id);
}
