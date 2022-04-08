// DOM Events Exercise

//1a
const button1 = document.querySelector(`#one`);

//1b
button1.addEventListener(`click`, () =>{
    alert(`You clicked the first button! Congrats!`);
});

//2a
const h3 = document.querySelector(`h3`);

//2b
h3.addEventListener(`mouseover`, () => {
    alert("You hovered over the h3 element! Congrats!");
});

//3a
const form = document.querySelector(`form`);


form.addEventListener(`submit`, () => {
    const entry = form.elements.entry.value;
    alert(`${entry}`);
});

// B O N U S

//4a
const darkMode = document.querySelector(`#dm`);
const body = document.querySelector(`body`);

//4b
darkMode.addEventListener(`click`, () =>{
    body.classList.toggle(`dark-mode`);
});

//5a
const times = document.querySelector(`#times`);
let click = 0;

//5b
times.onclick = () =>{
    click++;
    if(click <= 2){
        alert("You clicked the last button! Congrats!");

    } else if (click === 3){
        alert("OH NO! This button is NOT going to work anymore");
        
    } else{
        times.disabled = true;
    
    }

};