window.addEventListener("DOMContentLoaded", function () {

    "use strict";

var tab = document.querySelectorAll('.info-header-tab'),
    infoHeader = document.querySelector(".info-header"),
    infoTabContent = document.querySelectorAll('.info-tabcontent');

function hideContent(a) {
    for (var i = a; i < infoTabContent.length; i++) {
        infoTabContent[i].classList.remove('show');
        infoTabContent[i].classList.add('hide');
    }
}

hideContent(1);

function showContent(b) {
    if (infoTabContent[b].classList.contains('hide')) {
        infoTabContent[b].classList.remove('hide');
        infoTabContent[b].classList.add('show');
    }
}

infoHeader.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
        for (var i = 0; i < infoTabContent.length; i++) {
            if (target == tab[i]) {
                hideContent(0);
                showContent(i);
                break;
            } 
        }
    }
});


});
        


    




});