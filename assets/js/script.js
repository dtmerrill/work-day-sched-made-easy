//  1 - header date information from moment
//  2 - hours container information and label tie to local storage
//  3 - Used "append" in the timeblock container based off the way the password elements appended in the first JS exercise. This loads the timeblock rows and save button
//  4 - Ties the timeblock colors to the current time test to give past/present/future states
//  5 - Save button stores text from timeblock in local storage

//  1 - date/time information from moment
var currentDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(currentDate);

var currentHour = moment().format("H");

//  2 - hours container information and label tie to local storage
var timeBlockHours = $("#timeBlock");
const tbHourLabel = ["8:00 AM","9:00 AM", "10:00 AM","11:00 AM", "12:00 PM","1:00 PM", "2:00 PM","3:00 PM", "4:00 PM","5:00 PM","6:00 PM"];
showTimeBlockHours();

function showTimeBlockHours() { 
   for (let i = 0; i < tbHourLabel.length; i++) {
    var tbHourField = localStorage.getItem(i+11);
    if (tbHourField === null) {

//  3 - Used "append" in the timeblock container based off the way the password elements appended in the first JS exercise.
//
//  Tried to get the color application in the timebox to work at the same time as the append. Gave up on that idea.
//
            //if (timeBlockHours.time > currentHour) {
            //     timeBlockHours.append(`
            // <div class="row-past " id="row-past + ${i+11}">
            // <div class="col-md-2"> ${tbHourLabel[i]}</div>
            // <textarea id="${i+11}"class="time-row col-md-9"></textarea>
            // <button class="col-md-1 btn saveBtn">save</button>
            // </div>
            // `);
            // } else if (timeBlockHours === currentHour) {
            //     timeBlockHours.append(`
            // <div class="row-present " id="row-present + ${i+11}">
            // <div class="col-md-2"> ${tbHourLabel[i]}</div>
            // <textarea id="${i+11}"class="time-row col-md-9"></textarea>
            // <button class="col-md-1 btn saveBtn">save</button>
            // </div>
            // `);
            // } else {
            //     timeBlockHours.append(`
            // <div class="row-future " id="row-future + ${i+11}">
            // <div class="col-md-2"> ${tbHourLabel[i]}</div>
            // <textarea id="${i+11}"class="time-row col-md-9"></textarea>
            // <button class="col-md-1 btn saveBtn">save</button>
            // </div>
            // `);
            // }}}

//  3 - (continued) Loads the timeblock rows and save button
    timeBlockHours.append (`
        <div class="row " id="row + ${i+11}">
        <div class="col-md-2"> ${tbHourLabel[i]}</div>
        <textarea id="${i+11}"class="time-row col-md-9"></textarea>
        <button class="col-md-1 btn saveBtn">save</button>
        </div>
        `);

    } else {
    timeBlockHours.append (`
        <div class="row " id="row + ${i+11}">
        <div class="col-md-2"> ${tbHourLabel[i]}</div>
        <textarea id="${i+11}"class="time-row col-md-9">
        ${localStorage.getItem(i+11)}</textarea>
        <button class="col-md-1 btn saveBtn">save</button>
        `);

}}}
//  4 - Ties the timeblock colors to the current time test to give past/present/future states
function updCurrentTimeblock(){
    var tbHourArr = [8,9,10,11,12,13,14,15,16,17,18];
        for (let i = 0; i < tbHourArr.length; i++) {

        if (tbHourArr[i] < parseInt(currentHour)) {
            document.getElementsByTagName('textarea')[i].classList.add("past")
}
        if (tbHourArr[i] == parseInt(currentHour)) {
            document.getElementsByTagName('textarea')[i].classList.add("present")
}
        if (tbHourArr[i] > parseInt(currentHour)) {
            document.getElementsByTagName('textarea')[i].classList.add("future")                   
}}}
updCurrentTimeblock();

//  5 - Save button stores text from timeblock in local storage

