import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const KEY = 'videoplayer-current-time';

let currentTime = {
  duration: 0,
  percent: 0,
  seconds: 0,
};

const { duration, percent, seconds } = currentTime;

player.on('play', function () {
  //   preventDefault();
  console.log('played the video!');

  player.on('timeupdate', function (evt) {
    console.log(evt);
    localStorage.setItem(KEY, JSON.stringify(evt));
  });
});

// console.log(currentTime);

getCurrentTime();

function getCurrentTime() {
  const time = JSON.parse(localStorage.getItem(KEY));
  currentTime = time;
  return currentTime;
}
console.log(getCurrentTime());

player
  .setCurrentTime(currentTime.seconds)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
