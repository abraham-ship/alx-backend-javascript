export default class HolbertonCourse {
	constructor(name, length, students) {
		this._name = name;
		this._length = length;
		this._students = students;
	}

	get name() {
		return this._name;
	}
	set name(newName) {
		if (typeof newName === 'string')
			this._name = newName;
		else
			throw TypeError('Name must be a String');
	}
	get length() {
		return this._length;
	}
	set length(newLength) {
		if (typeof newLength === 'number')
			this._length = newLength;
		else
			throw TypeError('length must be a Number');
	}
	get students() {
		return this._students;
	}
	set students(newStudent) {
		if (!Array.isArray(value))
			throw TypeError('students must be an Array');
		if (value.some((student) => typeof student !== 'string'))
			throw TypeError('students must be an Array of Strings');
			        
		this._students = newStudent;
	}
}
