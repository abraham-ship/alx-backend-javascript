export default function getStudentsByLocation(getListStudents, city) {
  if (!Array.isArray(getListStudents) || typeof city !== 'string') {
    return [];
  }
  return getListStudents.filter((student) => student.location === city);
}
