'use strict';
  // var scrollAnimationElmR = document.querySelectorAll('.sa');
let getStatus = function(e) {

  let status = navigator.onLine ? 'online' : 'offline';
  let b = document.getElementsByTagName('body')[0];
  b.className = '';
  b.classList.add(status);
   // for(var i = 0; i < scrollAnimationElmR.length; i++) {
   //   scrollAnimationElmR[i].classList.remove('show');
   // }

}

window.addEventListener('online', getStatus);
window.addEventListener('offline', getStatus);
getStatus({ type: 'ready' });
