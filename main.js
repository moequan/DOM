console.log("Hello");

var greetingObj = document.getElementById("greeting")

greetingObj.innerHTML = ("Hello World");
var sayMyNameObj = document.getElementById("saymyname");

sayMyNameObj.onclick = function () {
    // alert("Uhh yeah, click me :)")
    var myNameObj = document.getElementById("myname");
    var theDateObj = document.getElementById("thedate");

    theDateObj.innerHTML = `Hallo ${myNameObj.value}, today is ${getDayName()[0]} only ${getDayName()[1]} days until weekend`

    var exampleObj = document.getElementsByClassName("example");

    exampleObj[0].innerHTML="backend";

    var exampleSelectorObj = document.querySelector(".example");

    exampleSelectorObj.style.backgroundColor="red";

    function getDayName() {
        var weekDays = ["monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        //current Date
        var date = new Date();

        //current day 
        var day = date.getDay();
        var arr = [weekDays[day - 1], 5 - day]
        return arr;
    }
    getDayName();
};