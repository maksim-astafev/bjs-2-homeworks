function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let students = [];
students[0] = new Student("Петров Пётр Петрович", 1, 19);
students[1] = new Student("Иванов Иван Иванович", 1, 18);
students[2] = new Student("Михайлова Мария Михайловна", 0, 19);
students[3] = new Student("Алексеева Анастасия Алексеевна", 0, 18);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [];
  }
  
  this.marks.push(mark);
}

Student.prototype.addMarks = function (...marksList) {
  if(this.marks === undefined){ 
    this.marks = [];
  }
  
  marksList.forEach((mark) => this.addMark(mark));
}

Student.prototype.getAverage = function () {
  if(this.marks === undefined){ 
    return "Нет оценок";
  } else {
    let sum = 0;
    for(const mark of this.marks) {
      sum += mark;
    }

    return sum/this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  if(this.marks !== undefined){ 
    delete this.marks;
  }
  if(this.subject !== undefined){ 
    delete this.subject;
  }

  this.excluded = reason;
}