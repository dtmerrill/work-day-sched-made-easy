//  1 - header date information from moment
//  2 - hours container information
//  3 - function to tie moment time to calendar
//  4 - reporting from local storage

//  1 - date/time information from moment
var currentDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(currentDate);

var currentHour = moment().format("H");
console.log(currentHour)

//  2 - hours container information
var timeBlockHours = $("#timeBlock")

const times = ["8:00 AM","9:00 AM", "10:00 AM","11:00 AM", "12:00 PM","1:00 PM", "2:00 PM","3:00 PM", "4:00 PM","5:00 PM","6:00 PM"];
showTimeBlockHours();

function showTimeBlockHours(){ 
   for (let i = 0; i < times.length; i++) {

  var textField =  localStorage.getItem(i+11) 
if (textField === null) {

timeBlockHours.append(`
<div class="row " id="row + ${i+11}">
<div class="col-md-2"> ${times[i]}</div>
<textarea id="${i+11}"class="time-row col-md-9"></textarea>
<button class="col-md-1 btn saveBtn">save</button>
</div>
`)

}else{
    containerEl.append(`
<div class="row " id="row + ${i+11}">
<div class="col-md-2"> ${times[i]}</div>
<textarea id="${i+11}"class="time-row col-md-9">
${localStorage.getItem(i+11)}</textarea>
<button class="col-md-1 btn saveBtn">save</button>
`)
}}}


// function verifyCurrent(){
//     //get current date and time

//   // var currentHr = parseInt(moment().format("HH"));
//     //loop over each time block
//     $(".time-block").each(function(){   
//         //query parent, will give us access to the children

    
//         var currentHourBlock = parseInt($(this).attr("id").split("r")[1]);
//         console.log(currentHourBlock)
       
//         //check IF time block is in past, present, or future
//         if (currentHour > currentHourBlock){
//             $(this).addClass("past");
//             $(this).removeClass("future");
//             $(this).removeClass("present")
//         }
//         else if (currentHour === CurrentHourBlock){
//             $(this).removeClass("past");
//             $(this).addClass("present");
//             $(this).removeClass("future");
//         }
//         else {
//             $(this).removeClass("present");
//             $(this).removeClass("past");
//             $(this).addClass("future");
//         }
//     })    
// }
// verifyCurrent();