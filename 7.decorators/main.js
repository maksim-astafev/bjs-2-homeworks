// Задача 1. Усовершенствуйте кэширующий декоратор
const addThree = (a, b, c) => (a + b + c); 
const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); 
upgradedAddThree(1, 2, 3); 
upgradedAddThree(2, 2, 3); 
upgradedAddThree(3, 2, 3); 
upgradedAddThree(4, 2, 3); 
upgradedAddThree(5, 2, 3); 
upgradedAddThree(6, 2, 3); 
upgradedAddThree(1, 2, 3); 

// Задача 2. Фильтрация и преобразование массива
const sendSignal = (number) => console.log(`Сигнал ${number} отправлен`); 
const upgradedSendSignal = debounceDecoratorNew(sendSignal,2000);
setTimeout(() => upgradedSendSignal(1)); // Сигнал отправлен
setTimeout(() => upgradedSendSignal(2),300); // проигнорировано
setTimeout(() => upgradedSendSignal(3),900); // проигнорировано
setTimeout(() => upgradedSendSignal(4),1200); // проигнорировано
setTimeout(() => upgradedSendSignal(5),2300); // Сигнал отправлен
setTimeout(() => upgradedSendSignal(6),4400); // Сигнал отправлен
setTimeout(() => upgradedSendSignal(7),4500); // проигнорировано

// Задача 3. Усовершенствуйте debounceDecoratorNew
const upgradedSendSignal2 = debounceDecorator2(sendSignal,2000);
setTimeout(() => upgradedSendSignal2(1)); // Сигнал отправлен
setTimeout(() => upgradedSendSignal2(2),300); // проигнорировано
setTimeout(() => upgradedSendSignal2(3),900); // проигнорировано
setTimeout(() => upgradedSendSignal2(4),1200); // проигнорировано
setTimeout(() => upgradedSendSignal2(5),2300); // Сигнал отправлен
setTimeout(() => upgradedSendSignal2(6),4400); // Сигнал отправлен
setTimeout(() => upgradedSendSignal2(7),4500); // проигнорировано

setTimeout(() => console.log(`Насчитано ${upgradedSendSignal2.count} вызовов upgradedSendSignal2`),5000);