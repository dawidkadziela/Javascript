document.addEventListener("DOMContentLoaded", function(){



    var gallery = document.querySelectorAll('#gallery img');
    var hideButton = document.querySelector('#hideButton');
    var showButton = document.querySelector('#showButton');
    var input = document.querySelector('#tagInput');
    
    
    hideButton.addEventListener('click',function (event) {
        var clean = input.value = '';
        for(var i = 0; i < gallery.length; i++) {
            gallery[i].style.display = "inline-block";
        }
    })
    
    showButton.addEventListener('click',function (event) {
        for(var i = 0; i < gallery.length; i++){
            var ty = gallery[i].dataset.tag;
            if (ty.indexOf(input.value) > -1) {
                gallery[i].style.display = "inline-block";
            } else {
                gallery[i].classList.add('invisible')
            }
        }
    })
     
    
    });