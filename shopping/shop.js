//local Storage vs Session Storage
//Local storage: It keeps store the user information data without expiration date this data will not be deleted when user closed the browser windows it will be available for day, week, month and year.
//Session Storage: It is same like local storage date except it will delete all data when browser windows closed by a web user.
//set the value in local storage object
//localStorage.setItem("dci","Web Developer");
// console.log(localStorage.getItem("dci"));
// //localStorage.removeItem("dci");
// //localStorage.clear();
// sessionStorage.setItem("classroom","FbW15");
// console.log(sessionStorage.getItem("classroom"));

let addGiftObj = document.getElementById("addGift");

addGiftObj.onclick = () => {
    console.log(`Am I work ? ..`)

    let giftObj = document.getElementById("gift");
    let shoppingObj = document.getElementById("shoppingList");
    let newGiftObj = document.createElement("li")
    newGiftObj.innerHTML = giftObj.value;
    shoppingObj.appendChild(newGiftObj)
}


let removeLastGiftObj = document.getElementById("removeLastGift");

removeLastGiftObj.onclick = () => {

    let allGiftObj = document.querySelectorAll("#shoppingList > li");
    allGiftObj[allGiftObj.length - 1].remove()
}


let removeFirstGiftObj = document.getElementById("removeFirstGift")

removeFirstGiftObj.onclick = () => {

    let firstGift = document.querySelectorAll("#shoppingList > li");
    firstGift[0].remove()
}

let removeObj = document.getElementById("remove")

removeObj.onclick = () => {

    let allGiftObj = document.querySelectorAll("#shoppingList > li");
    let removeGiftObj = document.getElementById("gift")


    let found = false;

    for (i = 0; i < allGiftObj.length; i++) {

        let deleteGift = allGiftObj[i].innerHTML;

        if (removeGiftObj.value.toLowerCase() === deleteGift.toLowerCase()) {
            
            allGiftObj[i].remove();
            removeGiftObj = "";
            found = true;
            break;
        }
    }
    if (!found)
        alert(`Gift ${removeGiftObj.value} not found...`)
}