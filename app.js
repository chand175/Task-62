let body = document.querySelector('body'); // first asses a body tag from html

let abox = document.createElement('div');// create a div in that body tag

let heading = document.createElement('h1');// creating ah1 tag in div

heading.innerHTML = "this is my h1 tag"; // geving a desired heading to h1 tag

body.appendChild(abox);// showing this div  tag in body tag


abox.appendChild(heading);// showing this heading in div tag

// console.log(abox);
abox.classList.add('heading1'); // giving the class name to the div tag
console.log(abox);

let para = document.createElement('p') // creating a paragraph in div 
para.textContent = " this is a paragraph" // giving a text in para tag

let heading1 = document.querySelector('.heading1')// assesing the class name
heading1.appendChild(para); // showing this para in div with using class name

heading1.addEventListener('click', () => { // using class name styling the para
    para.style.cssText = " color:blue ; font-size:50px "
})

