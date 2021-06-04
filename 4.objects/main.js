let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1); 

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')
console.log(student2);

let student3 = new Student("Ivan", "male", 36);
student3.setSubject("Algebra");
student3.addMarks(3, 5, 4);
console.log(student3);
console.log(student3.getAverage());
