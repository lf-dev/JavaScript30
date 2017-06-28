const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');

/* Build functions */

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;

}

/* Hook up events*/

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
