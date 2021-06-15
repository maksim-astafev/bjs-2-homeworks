// Задача 1. Усовершенствуйте кэширующий декоратор
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(",");
    const found = cache.find(item => item[hash] !== undefined);
    if(found !== undefined) {
      console.log("Из кеша: ", found[hash]);
    } else {
      let result = func(...args);
      if(cache.length === 5) {
        cache.shift(1);
      }
      cache.push({[hash]: result});
      console.log("Вычисляем: " + result);
    }
  }
  return wrapper;
}

// Задача 2. Фильтрация и преобразование массива
function debounceDecoratorNew(originalFunction, delay) {
  let isDelayed = false;

  return function (...args) {
    // console.log(`новый вызов. Аргументы: ${args}.  Задержка: ${delay}.  Флаг: ${isDelayed}`);
    if(!isDelayed) {
      originalFunction(...args);
      isDelayed = true;
      setTimeout(() => {
        // console.log(`Вышло время моратория ${delay}. Значение флага: ${isDelayed}`);
        isDelayed = false;
      }, delay);
    }

  };
}

// Задача 3. Усовершенствуйте debounceDecoratorNew
function debounceDecorator2(originalFunction, delay) {
  let isDelayed = false;

  function wrapper(...args) {
    wrapper.count++;
    // console.log(`новый вызов. Аргументы: ${args}.  Задержка: ${delay}.  Счётчик: ${wrapper.count}`);
    if(!isDelayed) {
      originalFunction(...args);
      isDelayed = true;
      setTimeout(() => {
        isDelayed = false;
      }, delay);
    }
  };

  wrapper.count = 0;
  return wrapper;
}
