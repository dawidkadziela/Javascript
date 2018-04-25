/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener("DOMContentLoaded", function(){

  var lis = document.querySelectorAll('.gallery li');
  var body = document.querySelector('body');

  for (var i = 0; i < lis.length; i++) {
      lis[i].addEventListener('click', function (event) {

          var url = this.firstElementChild.getAttribute('src');

          var div = document.createElement('div');
          div.classList.add('fullScreen');
          var img = document.createElement('img');
          img.setAttribute('src', url);
          var btn = document.createElement('button');
          btn.classList.add('close');
          btn.innerText = 'Close';

          div.appendChild(img);
          div.appendChild(btn);
          body.appendChild(div);

          btn.addEventListener('click', function (event) {
              div.parentElement.removeChild(div);
          })
      })
  }



});