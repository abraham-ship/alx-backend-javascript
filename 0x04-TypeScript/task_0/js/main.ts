interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 23,
	location: 'Ontario',
}

const student2: Student = {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 23,
        location: 'New York',
}

const studentsList: Student[] = [student1, student2];
