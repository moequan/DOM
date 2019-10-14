console.log("Target...");

let pTag = document.getElementById("pTag");
// let form = document.getElementById("form");

// form.onclick= (event) => {
//     console.log("form onclick..");

//     event.target.style.background ="yellow";

//     setTimeout(()=> {
//         alert("target= "+event.target.tagName + ", this= " + this);
//         event.target.style.backgroundColor = "";
//     },10);

// };

pTag.onclick = event => {
  console.log("p onclick ..");
  event.target.style.background = "yellow";
  console.log("inside p => " + event.target);
};
