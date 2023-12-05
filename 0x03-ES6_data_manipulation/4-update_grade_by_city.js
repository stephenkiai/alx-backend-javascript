export default function updateStudentGradeByCity(students, city, newGrades) {
  // Using filter to get students in city
  const filteredStudents = students.filter((student) => student.location === city);

  // Using map to update grades
  const updatedStudents = filteredStudents.map((student) => {
    // Find corresponding grade for student in newGrades
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    // Use matching grade if found, otherwise, set grade to 'N/A'
    const grade = matchingGrade ? matchingGrade.grade : 'N/A';

    return { ...student, grade };
  });

  return updatedStudents;
}
