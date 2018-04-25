/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */


document.addEventListener("DOMContentLoaded", function(){

    var toolTips = document.querySelectorAll('.tooltip');

    for (var i = 0; i < toolTips.length; i++) {

        toolTips[i].addEventListener('mouseover', function (event) {
            var text = this.dataset.text;
            var newSpan = document.createElement('span');
            newSpan.classList.add('tooltipText');
            newSpan.innerText = text;

            this.appendChild(newSpan);

        });

        toolTips[i].addEventListener('mouseout', function (event) {
            var spanToDelete = this.firstElementChild;

            spanToDelete.parentElement.removeChild(spanToDelete);
        });

    }





});