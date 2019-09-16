
var showInput = document.getElementById("showtheinput");



showInput.onclick = () => {
    var theFirst = document.getElementById("firstname");
    var theSecond = document.getElementById("lastname");
    var theJob = document.getElementById("jobtitle");
    var theComments = document.getElementById("comments");

   document.getElementById("dataContainer").innerHTML=`First name: ${theFirst.value}<br>
                 Last Name : ${theSecond.value} <br>  
                 Job : ${theJob.value} <br>
                 Comment : ${theComments.value}`



}