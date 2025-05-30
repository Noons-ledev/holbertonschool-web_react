interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: "John",
  lastName: "Marston",
  age: 30,
  location: "Blackwater"
};

const student2: Student = {
  firstName: "Niko",
  lastName: "Bellic",
  age: 31,
  location: "Liberty City"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tablebody = document.createElement("tablebody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const name = document.createElement("td");
  name.textContent = student.firstName;

  const location = document.createElement("td");
  location.textContent = student.location;

  row.appendChild(name);
  row.appendChild(location);
  tablebody.appendChild(row);
});

table.appendChild(tablebody);
document.body.appendChild(table);