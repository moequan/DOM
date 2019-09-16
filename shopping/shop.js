//local Storage vs Session Storage
//Local storage: It keeps store the user information data without expiration date this data will not be deleted when user closed the browser windows it will be available for day, week, month and year.
//Session Storage: It is same like local storage date except it will delete all data when browser windows closed by a web user.
//set the value in local storage object
//localStorage.setItem("dci","Web Developer");
console.log(localStorage.getItem("dci"));
//localStorage.removeItem("dci");
//localStorage.clear();
sessionStorage.setItem("classroom","FbW15");
console.log(sessionStorage.getItem("classroom"));