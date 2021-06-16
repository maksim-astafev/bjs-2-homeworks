function testCase() {
  const alarms = new AlarmClock();
  const safeAddClock = alarms.safeAddClock.call(alarms, alarms.addClock);
  
  console.log(`Текущее время ${alarms.getCurrentFormattedTime()}`);
  
  const now = new Date();
  const time1 = now.getTime() + 1000 * 60 * 1;
  const time2 = now.getTime() + 1000 * 60 * 2;
  const time3 = now.getTime() + 1000 * 60 * 3;

  safeAddClock(alarms, alarms.getFormattedTime(time1), () => console.log("Пора вставать!"), 1);
  safeAddClock(alarms, alarms.getFormattedTime(time3), () => console.log("Уже точно пора вставать!"), 2);
  safeAddClock(alarms, alarms.getFormattedTime(time2), () => console.log("Срочно вставай, а то проспишь!"), 3);
  safeAddClock(alarms, alarms.getFormattedTime(time1), () => console.log("Пора умываться"));
  safeAddClock(alarms, alarms.getFormattedTime(time1), () => console.log("Для надёжности ещё один будильник 1"), 1);
  alarms.printAlarms();

  alarms.removeClock(4);
  alarms.removeClock(2);
  alarms.printAlarms();

  alarms.start();

  setTimeout(() => alarms.removeClock(1), 1000 * 60 * 1 + 5000);
  setTimeout(() => alarms.stop(), 1000 * 60 * 2 + 2000);
  setTimeout(() => alarms.printAlarms(), 1000 * 60 * 2 + 3000);
  setTimeout(() => alarms.clearAlarms(), 1000 * 60 * 2 + 4000);
  setTimeout(() => alarms.printAlarms(), 1000 * 60 * 2 + 5000);
}

testCase();