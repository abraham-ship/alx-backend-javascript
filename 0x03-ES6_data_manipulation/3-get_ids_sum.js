export default function getStudentIdsSum(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const studentId = studentList.map((student) => student.id);
  const sumId = studentId.reduce((previousValue,
    currentValue) => previousValue + currentValue, 0);

  return sumId;
}
