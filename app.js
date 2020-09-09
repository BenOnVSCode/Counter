//Variables,
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const overButton = document.querySelector('#over');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
var count = -1 ;
var minutesNew = 0 ;
var newHours = 0 ;
//Events,



//Functions,
function ChangeSeconds() {
    count++ ; 
    seconds.innerHTML = count ;
    if (count < 10 ) {
        seconds.innerHTML = '0' + count ;
    }
    if (count > 60 ) {
        minutesNew++ ;
        minutes.innerHTML = minutesNew + ' :' ;
        count = 0 ;
        if ( minutesNew < 10 ) {
            minutes.innerHTML = '0' + minutesNew + ' :' ;
        }
        if (minutesNew > 60 ) {
            newHours++ ;
            hours.innerHTML = newHours + ' :' ;
            minutesNew = 0 ;
        }
        if ( newHours < 10 ) {
            hours.innerHTML = '0' + newHours + ' :' ;
        }
    }
}

function stop() {
    count-- ;
    minutesNew-- ;
    newHours-- ;
}
function begin(){
    ChangeSeconds();
    setTimeout(begin, 1000, ChangeSeconds);
    
}
function final(){
    stop();
    setTimeout(final, 1000, stop);
}
function over() {
    count = 0;
    minutesNew = 0;
    newHours = 0;
    seconds.innerHTML = count + '0'; 
    minutes.innerHTML = minutesNew + '0 : ' ; 
    newHours.innerHTML = newHours + '0 : ' ;
}
