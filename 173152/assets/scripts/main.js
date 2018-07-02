'use strict';

let getStatus = function(e) {
  let status = navigator.onLine ? 'online' : 'offline';
  let b = document.getElementsByTagName('body')[0];
  b.className = '';
  b.classList.add(status);
}

window.addEventListener('online', getStatus);
window.addEventListener('offline', getStatus);
getStatus({ type: 'ready' });

// in-view.js
inView('.fade')
    .on('enter', el => {
      el.classList.add("is-fade");
    })
    .on('exit', el => {
      el.classList.remove("is-fade");
    })
