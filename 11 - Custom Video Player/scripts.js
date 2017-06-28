const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');

/* Build functions */

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

/* Hook up events*/

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
