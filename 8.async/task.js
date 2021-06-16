class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
    this.time = "time";
    this.callback = "callback";
    this.id = "id";
    this.loopId = null;
    this.loopInterval = 1000;
  }

  addClock(alarmTime, alarmAction, alarmId) {
    if(alarmId === undefined) {
      throw new Error("Новый будильник необходимо добавлять с указанием его №");
    } else {
      if(this.alarmCollection.find(alarm => alarm[this.id] === alarmId)) {
        console.error(`Будильник №${alarmId} уже существует, добавление нового с таким же № не возможно`);
        return false;
      }
    }
    this.alarmCollection.push({[this.time]: alarmTime, [this.callback]: alarmAction, [this.id]: alarmId});
    return true;
  }

  removeClock(alarmId) {
    const oldLength = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(item => item[this.id] !== alarmId);
    if(this.alarmCollection.length === oldLength) {
      console.warn(`Будильник №${alarmId} не найден`);
      return false;
    } else {
      console.log(`Будильник №${alarmId} удалён`);
      return true;
    }
  }

  getCurrentFormattedTime() {
    const now = new Date();
    return this.getFormattedTime(now.getTime());
  }

  start() {
    function checkClock(alarm) {
      if(alarm[this.time] === this.getCurrentFormattedTime()) {
        alarm[this.callback]();
      }
    }
    checkClock = checkClock.bind(this);

    if(this.loopId === null) {
      this.loopId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm)), this.loopInterval);
    }
  }

  stop() {
    if(this.loopId !== null) {
      clearInterval(this.loopId);
      this.loopId = null;

      console.log("Все будильники остановлены");
    }
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];

    console.log("Все будильники удалены");
  }

  printAlarms() {
    const num = this.alarmCollection.length;
    if(num > 0) {
      console.log(`Список всех установленных будильников в количестве ${num}: `);
      this.alarmCollection.forEach(alarm => console.log(`Будильник №${alarm[this.id]} установлен на ${alarm[this.time]}`));
    } else {
      console.log(`Список установленных будильников пуст`);
    }
  }

  safeAddClock(fn) {
    return function (ptr, ...args) {
      let result;
      try {
        result = fn.call(ptr, ...args);
      } catch(err) {
        console.error(err);
      }
      return result;
    }
  }
 
  getFormattedTime(dateTime) {
    const dateObj = new Date(dateTime);
    let minutes = dateObj.getMinutes();
    if(minutes < 10) {
      minutes = "0" + minutes;
    }
    let hours = dateObj.getHours();
    if(hours < 10) {
      hours = "0" + hours;
    }
    return  hours + ":" + minutes;
  }
}