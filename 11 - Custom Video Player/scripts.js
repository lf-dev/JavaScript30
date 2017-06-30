const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');
const progressBar = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');

/* Build functions */

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangesUpdate() {
  video[this.name] = this.value;
}

function handleProgess() {
  const percent = (video.currentTime/video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up events*/

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgess);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach( button => button.addEventListener('click', skip));
ranges.forEach( range => range.addEventListener('change', handleRangesUpdate));
ranges.forEach( range => range.addEventListener('mousemove', handleRangesUpdate));

progress.addEventListener('click', scrub);
