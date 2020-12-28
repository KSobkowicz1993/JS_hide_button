'use strict';

// const btn1 = document.querySelector('#one');
// const btn2 = document.querySelector('#two');
// const btn3 = document.querySelector('#three');
// const btn4 = document.querySelector('#four');
// const btn5 = document.querySelector('#five');

// btn1.onclick = function(){
//     console.log('kliknięto przycisk');
//     btn1.style.visibility = "hidden";
// }
// btn2.onclick = function(){
//     console.log('kliknięto przycisk');
//     btn2.style.visibility = "hidden";
// }
// btn3.onclick = function(){
//     console.log('kliknięto przycisk');
//     btn3.style.visibility = "hidden";
// }
// btn4.onclick = function(){
//     console.log('kliknięto przycisk');
//     btn4.style.visibility = "hidden";
// }
// btn5.onclick = function(){
//     console.log('kliknięto przycisk');
// //     btn5.style.visibility = "hidden";
// }

const tab = document.querySelectorAll('button');

for (let i=0; i<tab.length; i++) {

    console.log(tab[i]);
    
    tab[i].addEventListener("click", () => {

        console.log("Kliknęłam button");
        tab[i].style.visibility = "hidden";

    });
}
  
  




