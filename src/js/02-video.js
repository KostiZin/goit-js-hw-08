import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const KEY = 'videoplayer-current-time';

let currentTime = JSON.parse(localStorage.getItem(KEY)) || {
  duration: 0,
  percent: 0,
  seconds: 0,
};

player.on('play', handlePlay);

function handlePlay() {
  player.on('timeupdate', throttle(handleTime, 1000));
  function handleTime(evt) {
    localStorage.setItem(KEY, JSON.stringify(evt));
  }
}

player.setCurrentTime(currentTime.seconds);
