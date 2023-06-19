import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const KEY = 'videoplayer-current-time';

let currentTime = {
  duration: 0,
  percent: 0,
  seconds: 0,
};

player.on('play', handlePlay);

function handlePlay() {
  player.on('timeupdate', throttle(handleTime, 1000));
  function handleTime(evt) {
    console.log(evt);
    localStorage.setItem(KEY, JSON.stringify(evt));
  }
}

getCurrentTime();

function getCurrentTime() {
  const time = JSON.parse(localStorage.getItem(KEY));
  currentTime = time;
  return currentTime;
}

player.setCurrentTime(currentTime.seconds);
