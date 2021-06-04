// Издания
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.stateValue = 100;
    this.type = null;
  }

  set state(state) {
    if(state <   0) {
      this.stateValue = 0; 
    } else {
      if(state > 100) {
        this.stateValue = 100; 
      } else {
        this.stateValue = state; 
      }
    }
    
  }

  get state() {
    return this.stateValue;
  }

  fix() {
    let fixedState = this.stateValue * 1.5;
    if(fixedState > 100) {
      fixedState = 100;
    }
    this.stateValue = fixedState;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Библиотека
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.stateThreshold = 30;
  }

  addBook(book) {
    if(book.state > this.stateThreshold) {
      this.books.push(book);
    } else {
      console.log(`Библиотека "${this.name}" принимает только издания с состоянием лучше ${this.stateThreshold}%`)
    }
  }

  findBookBy(type, value) {
    const foundBook = this.books.find(book => book[type] === value);
    if(foundBook !== undefined) {
      return foundBook;
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex(book => book.name === bookName);
    const givenBook = this.books[bookIndex];
    this.books.splice(bookIndex, 1);

    if(givenBook !== undefined) {
      return givenBook;
    } else {
      return null;
    }
  }
}

// Журнал успеваемости
class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }
  
  getName() {
    return this.name;
  }

  addMark(subject, mark) {
    if(mark >= 1 && mark <= 5) {
      if(!(subject in this.marks)) {
        this.marks[subject] = [];
      }
      this.marks[subject].push(mark);
    } else {
      console.log(`Ошибка, оценка должна быть числом от 1 до 5`);
    }
  }

  getAverageBySubject(subject) {
    if(subject in this.marks) {
      let sum = 0;
      for(let mark of this.marks[subject]) {
        sum += mark;
      }
      let avg = sum/this.marks[subject].length;
      avg = Number(avg.toFixed(2));
      console.log(`Средний балл по предмету geometry ${avg}`);
      return avg;
    } else {
      console.log(`Несуществующий предмет`);
    }
  }

  getAverage() {
    let count = 0;
    let sum = 0;
    for(let subject in this.marks) {
      sum += this.getAverageBySubject(subject);
      count++;
    }
    if(count > 0) {
      let avg = sum/count;
      avg = Number(avg.toFixed(2));
      console.log(`Средний балл по всем предметам ${avg}`);
      return avg;
    } else {
      console.log("Нет ни одной оценки");
      return null;
    }
  }
  
  exclude(reason) {
    if(this.getAverage() !== null){ 
      delete this.marks;
    }
    console.log(`Студент ${this.name} ${reason}`);
    this.excluded = reason;
  }  
}
