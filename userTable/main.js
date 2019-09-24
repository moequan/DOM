console.log("Testing...")

//Objects of Divs

let userClick = document.getElementById("user-click");
let commentsClick = document.getElementById("comments-click")
let addUserClick = document.getElementById("add-user-click");
let addCommentsClick = document.getElementById("add-comments-click")

let tableUsers = document.getElementById("table-users");
let tableComments = document.getElementById("table-comments");
let addUsers = document.getElementById("add-user");
let addComments = document.getElementById("add-comments");

//Display settings

tableUsers.style.display = "block";
tableComments.style.display = "none";
addUsers.style.display = "none";
addComments.style.display = "none";

//onclick functions




userClick.onclick = () => {

    tableUsers.style.display = "block";
    tableComments.style.display = "none";
    addUsers.style.display = "none";
    addComments.style.display = "none";
};

commentsClick.onclick = () => {

    tableComments.style.display = "block";
    tableUsers.style.display = "none";
    addComments.style.display = "none";
    addUsers.style.display = "none";
};

addUserClick.onclick = () => {

    addUsers.style.display = "block";
    tableUsers.style.display = "none";
    tableComments.style.display = "none";
    addComments.style.display = "none";
};

addCommentsClick.onclick = () => {

    addComments.style.display = "block";
    tableComments.style.display = "none";
    tableUsers.style.display = "none";
    addUsers.style.display = "none";
};