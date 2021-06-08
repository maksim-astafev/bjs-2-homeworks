// Задача №1. Форматтер чисел
function parseCount(value) {
  const count = Number.parseInt(value);
  if(isNaN(count)) {
    throw new Error("Невалидное значение");
  } else {
    return count;
  }
}

function validateCount(value) {
  let result;
  try {
    result = parseCount(value);
  } catch(error) {
    return error;
  }
  return result;
}

// Задача №2. Треугольник
class Triangle {
  constructor (a, b, c) {
    if(arguments.length !== 3) {
      throw new Error("У треугольника должно быть три стороны");
    }
    
    if(!(b+c > a && a+c > b && a+b > c)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const p = this.getPerimeter() / 2;
    const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(S.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(error) {
    function erroredTriangle() {
      this.errorMessage = "Ошибка! Треугольник не существует";
    }

    erroredTriangle.prototype.getPerimeter = function () {
      return this.errorMessage;
    }

    erroredTriangle.prototype.getArea = function () {
      return this.errorMessage;
    }

    return new erroredTriangle;
  }
}