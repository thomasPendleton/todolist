// let header = document.getElementById("header");
// let input = document.querySelector("input")
// let jello = document.getElementsByTagName("li")[1];
// let lis = document.getElementsByTagName("li");
// let list = document.querySelectorAll("li");
// let liClass = document.querySelector("li");

// console.log(liClass);
// console.log(liClass.getAttribute("random"));
// // changes random attribute to 1000 \/ 
// console.log(liClass.setAttribute("random", 1000));
// console.log(liClass.getAttribute("random"));
// console.log(list);
// console.log(jello.innerHTML);
// console.log(lis[3].innerText);

const button = document.querySelector("#enter")
const input = document.querySelector("#userinput")
const ul = document.querySelector("ul")
const li = document.querySelectorAll("li")
console.log(li)



button.addEventListener("click", function(){
    if(input.value.length > 0 ){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
});






// grab value from input

// if button is clicked send value to list

// if enter is pressed send value to list

// if input has no value dont send input value to list