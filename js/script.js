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

// Timer 

var deadline = '2020-11-21';

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        var timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
            
        function updateClock() {
            var t = getTimeRemaining(endtime);

            function addZero(num){
                        if(num <= 9) {
                            return '0' + num;
                        } else return num;
                    }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);
});