// initialize Tilt JS
VanillaTilt.init(
    document.querySelectorAll(".js-tilt"),{
        max: 25, 
        speed: 400,
    });

// Get the li elements
const sizes=document.querySelectorAll(".size");

// Add a click event to each
for(let i=0; i<sizes.length; i++){
    sizes[i].addEventListener("click", ()=>{
        // Remove active style from all
        for(let i=0; i<sizes.length; i++){
            sizes[i].classList.remove("active");
        }
        // add active style to the clicked one
        sizes[i].classList.toggle("active");
    });
}

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
};