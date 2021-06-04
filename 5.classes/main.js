const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100


const picnic = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
console.log(picnic.author); //"Аркадий и Борис Стругацкие"
picnic.state = 10;
console.log(picnic.state); //10
picnic.fix();
console.log(picnic.state); //15


// Создайте библиотеку;
const library = new Library("Библиотека имени Ленина");

// Добавьте в библиотеку несколько печатных изданий различных типов;
library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

// Найдите книгу, изданную в 1919 году (создайте такую книгу при необходимости);
console.log(library.findBookBy("releaseDate", 1919)); // null
library.addBook(new DetectiveBook("Иванов Иван Иванович", "Интересный детектив", 1919, 200));
console.log(library.findBookBy("releaseDate", 1919).name); // null
console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

// Выдайте любую книгу;
console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 5
let givenBook = library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 4

// Испортите выданную книгу;
givenBook.state = 30;
library.addBook(givenBook);
console.log(`Состояние выданной книги "${givenBook.name}" до ремонта = ${givenBook.state}`);

// Почините выданную книгу;
givenBook.fix();
console.log(`Состояние выданной книги "${givenBook.name}" после ремонта = ${givenBook.state}`);
console.log("Количество книг до возврата: " + library.books.length); //Количество книг после выдачи: 4

// Попытайтесь добавить починенную книгу обратно в библиотеку.
library.addBook(givenBook);
console.log("Количество книг после возврата: " + library.books.length); //Количество книг после выдачи: 5


// * Задача №3. Журнал успеваемости
console.log("* Задача №3. Журнал успеваемости");
const student = new Student('Олег Никифоров');
student.addMark('algebra',5);
student.addMark('algebra',5);
student.addMark('geometry',5);
student.addMark('geometry',4);
student.addMark('geometry',6); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject('geometry'); // Средний балл по предмету geometry 4.5
student.getAverageBySubject('biology'); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude('Исключен за попытку подделать оценки');
