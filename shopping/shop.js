//local Storage vs Session Storage

//Local storage: It keeps store the user information data without expiration date this data will not be deleted when user closed the browser windows it will be available for day, week, month and year.

//Session Storage: It is same like local storage date except it will delete all data when browser windows closed by a web user.

//set the value in local storage object
//localStorage.setItem("dci","Web Developer");

//console.log(localStorage.getItem("dci"));

//localStorage.removeItem("dci");
//localStorage.clear();

// sessionStorage.setItem("classroom","FbW15");
// console.log(sessionStorage.getItem("classroom"));

//after doing all the step except the sum then we can add the basket array 

   
   let basket = [];
   //textbox object
   let giftObj = document.getElementById("gift");
   console.log(giftObj.value);
   //add gift button click
   let addGiftObj = document.getElementById('addGift');
   //für enter statt add to basket
   giftObj.addEventListener("keyup", function (e) {
       e.preventDefault();                                             //?????????????????????        ​
       if (e.keyCode === 13) {
           addGiftObj.onclick();
       }
   });
   let totalSumShow = document.createElement('div');
   let message = document.createElement('div');
   addGiftObj.onclick = () => {
       console.log('addGift button clicked...');
       //Task 1
       if (giftObj.value.length < 3) {
           // alert('Type in at least 3 characters');
          
           message.innerHTML = "Type in at least 3 characters";
           giftObj.insertAdjacentElement("beforebegin", message).style.color = "red";
           return;
       }
       if (giftObj.value.length >= 3) {
           // alert('Type in at least 3 characters');
           message.remove()
       }
       
       //add item name and price to the basket array
       let price = 5 + Math.floor(Math.random() * 95);
       console.log(`The price is ${price}`);
       basket.push({
           name: giftObj.value,
           price: price
       });
       console.log(basket);                                        //mit `The basket is ${basket}` funktioniert es nicht
       //we can also store this way but it will not more clear
       //basket.push([giftObj.value, price]);
       //add element
       let shoppingObj = document.getElementById('shoppingList');
       let newGiftObj = document.createElement('li');
       // newGiftObj.innerHTML = giftObj.value;                    brauchen wir jetzt nicht mehr, da nächste Zeile
       //Task 2: Show price near by item name
       newGiftObj.insertAdjacentHTML('beforeend', `<span>${giftObj.value}</span> , <span> price: ${price}</span>`)
       shoppingObj.appendChild(newGiftObj);
       //after adding, clear the textbox
       giftObj.value = '';
       let totalSum = basket.reduce((total, currentValue) => {
           total += currentValue.price;
           return total;
       }, 0);
       
       // let totalSumShow = document.createElement('div');               hier darf es nicht stehen, da es bei jedem Mal ein neues div erstellt; also vor der Funktion onclick oben
       totalSumShow.innerHTML = `The total price for ${basket.length} items is ${totalSum}`;
       shoppingObj.insertAdjacentElement("afterend", totalSumShow);
   }
   //remove last gift button click
   let removeLastGiftObj = document.getElementById('removeLastGift');
   removeLastGiftObj.onclick = () => {
       console.log("removeLastGiftObj...");
       let allGiftObj = document.querySelectorAll('#shoppingList > li');
       console.log(allGiftObj);
       console.log(allGiftObj[allGiftObj.length - 1]);
       allGiftObj[allGiftObj.length - 1].remove();
       //we have to also remove last item from the basket array
       basket.pop();
       console.log(basket);
   }
   //remove first gift button click
   let removeFirstGiftObj = document.getElementById('removeFirstGift');
   removeFirstGiftObj.onclick = () => {
       console.log('removeFirstGift...');
       let allGiftObj = document.querySelectorAll('#shoppingList > li');
       allGiftObj[0].remove();
       //we have to also remove first item from the basket array
       basket.shift();
       console.log(basket);
   }
   //remove a particular item from the basket
   let removeObj = document.getElementById('remove');
   removeObj.onclick = () => {
       console.log('remove...');
       let allGiftObj = document.querySelectorAll('#shoppingList > li');
       let textboxGiftObj = document.getElementById('gift');
       console.log(`Item entered in the textbox ==> ${textboxGiftObj.value}`);
       let notFound = true;
       for (let i = 0; i < allGiftObj.length; i++) {
           // let deleteGift = allGiftObj[i].innerHTML;                    brauchen wir jetzt nicht mehr, da Task 2
           //Task 2: case 1
           // let deleteGift = allGiftObj[i].firstChild.innerText;         ????????????????
           //Task 2: case 1
           let deleteGift = allGiftObj[i].getElementsByTagName('SPAN')[0].innerHTML;       //[0]?????? wozu braucht man noch innerHTML??????
           console.log(`Item from the list ==> ${deleteGift}`);
           if (textboxGiftObj.value.trim().toLowerCase() === deleteGift.trim().toLocaleLowerCase()) {
               allGiftObj[i].remove();
               textboxGiftObj.value = '';
               notFound = false;
               //remove particular item from the basket array which we have entered in the textbox
               basket.splice(i, 1);
               console.log(basket);
               break;
           }
       }
       if (notFound)
           alert(`Gift ${textboxGiftObj.value} not found!`);
   }
   //sum of the all item price
   let shoppingObj = document.getElementById('shoppingList');
   let sumObj = document.getElementById('sum');
   sumObj.onclick = () => {
       console.log('Sum ...');
       let totalSum = basket.reduce((total, currentValue) => {
           total += currentValue.price;
           return total;
       }, 0);
      
       totalSumShow.innerHTML = `The total price for ${basket.length} items is ${totalSum}`;
       shoppingObj.insertAdjacentElement("afterend", totalSumShow);
       // alert(`Total sum: ${totalSum}`);
   }
 
   
   
   
   

/* Above Shopping List Overview */
/*
add the following functionality to your shopping list:
1) after an item has been put on the list, the textbox should be cleared. when adding an item, only items that have at least 3 characters can be added. otherwise, an error alert appears.
2) when clicking on the remove first button, the first item should be removed from the list
3) same as 2) for the last item
4) when clicking on the “remove” button, all items with the value of the textbox will be removed
Basket:
1) When adding a new item to the shopping list, add
   a new item to the basket array. Each item consists
   of a name and a price. Think of how you can represent
   this in a proper way.
   The price is a random value between 5 and 100. The
   price is not a string, it is a number. Only integers,
   no float.
2) When removing the last or first item, also remove
   the last or first item in the basket array.
3) When removing a specific item, also remove the specific
   item in the array.
4) When the user presses the sum-Button, the total basket
   value will be alerted to the user.
*/

//Task : 
//1. only items that have at least 3 characters can be added. otherwise, an error alert appears.
//2. Show price near by item name

//After completing task 1 & 2
//3. Show message at the top of textbox instead of the alert when user enter less than 3 characters as item name and also make textbox boarder red.
//4. When click on then Sum button then show sum of the total price and also show total item count at the bottom of the shopping list.
//5. if you have already shown total sum and total item count while adding new item then also need to update total sum and total item count.






