"use strict";

/*
FUNCTION
*/

function myCreateElement(htmlElement,className,htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText=htmlValue;
    element.addEventListener('click',function(){
        element.classList.add('change');
        console.log(htmlValue);
        alert(htmlValue);
    })
    return element;
}

function myAppendElement(containerElement,htmlElement){
    containerElement.append(htmlElement);
}

/*
MAIN
*/

const containerBoard = document.querySelector('.board');

const wrapper = document.getElementById('container');
const btn = document.getElementById('button');

btn.addEventListener('click',function(){
    wrapper.classList.add('show');
        
})

for(let i=1; i<=100;i++){
    const createdElement = myCreateElement('div','cell',i);
    myAppendElement(containerBoard,createdElement);
}
