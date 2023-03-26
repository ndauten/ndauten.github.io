// Got from: https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  //clock.style.display = 'block';
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

// Set schedule: first date is drop@moms and the end is pickup
const schedule = [
  ['March 17 2023 8:00:00 GMT-0600','March 30 2023 18:00:00 GMT-0600'],
  ['April 6 2023 8:00:00 GMT-0600','April 10 2023 18:00:00 GMT-0600'],
  ['April 10 2023 8:00:00 GMT-0600','April 14 2023 18:00:00 GMT-0600'],
  ['April 17 2023 8:00:00 GMT-0600','April 20 2023 18:00:00 GMT-0600'],
  ['April 24 2023 8:00:00 GMT-0600','May 5 2023 18:00:00 GMT-0600'],
  ['May 8 2023 8:00:00 GMT-0600','May 19 2023 18:00:00 GMT-0600'],
  ['May 22 2023 8:00:00 GMT-0600','June 2 2023 18:00:00 GMT-0600']
];

// iterate over each element in the schedule
for (var i=0; i<schedule.length; i++) {
  var startDate = schedule[i][0];
  var endDate = schedule[i][1];

  // put dates in milliseconds for easy comparisons
  var startMs = Date.parse(startDate);
  var endMs = Date.parse(endDate);
  var currentMs = Date.parse(new Date());

  // if current date is between start and end dates, display clock
  if (endMs > currentMs && currentMs >= startMs ) {
	initializeClock('clockdiv', endDate);
  }
}

/*
schedule.forEach(([startDate, endDate]) => {
  // put dates in milliseconds for easy comparisons
  const startMs = Date.parse(startDate);
  const endMs = Date.parse(endDate);
  const currentMs = Date.parse(new Date());

  // if current date is between start and end dates, display clock
  if (endMs > currentMs && currentMs >= startMs ) {
    initializeClock('clockdiv', endDate);
  }
}*/