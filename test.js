console.log("Hello World")


function myfun(){
    document.getElementById("demo").innerHTML="Hello JavaScript"
}

// 3 Browser specific functions to interact with visitors.
let myname = prompt("What is your name?");
let confirmation = confirm("Do you want to become a Software Engineer?");
if (confirmation == true) {
    alert(`Nice ${myname}! All the Best for future`) 
} else {
    alert("Software Engineering has a very good future you can think about it.")
}

////
console.log(1);
setTimeout(()=>{Promise.resolve().then(()=>console.log(2));});
Promise.resolve().then(()=>console.log(3));
setTimeout(() => console.log(4));
Promise.reject().catch(()=>console.log(5));
setTimeout(() => console.log(6));
console.log(7);