const button = document.getElementById("btn");
const popup = document.querySelector(".popup");

button.addEventListener('click', function () {
    popup.classList.remove("hidden"); 

    setTimeout(()=>{
        popup.style.top = "30%"; 
        popup.style.transform = "scale(1)"; 
    })
});


const okbutton = document.getElementById("ok");

okbutton.addEventListener('click', function () {
    popup.style.top = "-30%";
    popup.style.transform = "scale(0.1)"; 
    setTimeout(() => {
        popup.classList.add("hidden"); 
    }, 400); 
});
