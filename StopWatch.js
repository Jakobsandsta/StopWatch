const minutes = document.getElementById("minute"); // Gets all the values of the <p id="minute"> 
const seconds = document.getElementById("second"); // Gets all the values of the <p id="second"> 
const milliseconds = document.getElementById("millisecond");

var started_counting= false

const start_button = document.getElementById("start");


function start() {
    started_counting = true // tells counting() to start counting
    start_button.innerText = "STOP" //changes the innerText on <p id=seconds>
    start_button.setAttribute("onclick", "stop()")
    start_button.style.backgroundColor = "rgb(248, 78, 62)"

    document.getElementById("clear").disabled = true; // clear button stops working

}
function stop() {
    started_counting = false // tells counting() to stop
    start_button.innerText = "START"
    start_button.style.backgroundColor = "rgb(62, 248, 124)"
    start_button.setAttribute("onclick", "start()") 
    

    document.getElementById("clear").disabled = false; // clear button is operational

    
}

var count_minutes = 0 // variable for the amount of minutes gone
var count_seconds = 0 // variable for the amount of seconds gone

function Clear() { // resets webpage and minutes/second variable
    minutes.textContent = "00"
    seconds.textContent = "00"
    count_minutes = 0;
    count_seconds = 0;

    
}
setInterval(function counting() {
    if (started_counting === true) { // checks when supposed count starts and when to stop
        count_seconds += 1 // counts the seconds

        if (count_seconds === 60) { // checks when to + minute with 1
            count_minutes += 1
            
            count_seconds = 0 // resets seconds
            minutes.innerText = count_minutes

        }
        if (count_minutes < 10) { // puts a zero infront of number
            minutes.innerText = "0" + count_minutes
        } else {
            minutes.innerText = count_minutes
        }
        if (count_seconds < 10) { // puts a zero infront of number
            seconds.innerText = "0" + count_seconds
        } else {
            seconds.innerText = count_seconds
        }

        

    }
    
   
    


}, 1000)
