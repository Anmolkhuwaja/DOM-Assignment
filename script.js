//Assignment 
//1. Select and Style Elements
//a. Selects an element by its ID and changes its background color to lightblue.  
//b. Selects all elements with the class name "highlight" and changes their font size to 20px.

// A)
const innerText = document.getElementById('idd');
    innerText.style.backgroundColor = "lightblue"
console.log(innerText.innerHTML);

// B)
const items = document.querySelectorAll('.highlight');
items.forEach((e) => {
    e.style.fontSize = "20px";
});



// 2. Create and Append Elements
//    a. Creates a new `<div>` element with the text "Hello, World!" and appends it to the body of the document.  
//    b. add a class name "new-div" to the created `<div>` and set its background color to yellow.

// A)
const create = document.createElement("div");
        create.innerHTML = "Hello, Worlds!"
        document.body.appendChild(create)
console.log(create);

// B)
const createNew = document.createElement("div");
        createNew.innerHTML = "JavaScript"
        createNew.className = "new-div"
        createNew.style.backgroundColor = "yellow"

        document.body.appendChild(createNew)
console.log(createNew);


// 3. Remove Elements
//    a. Removes an element with a specific ID from the DOM.

// A)
const createNew = document.createElement("div");
        createNew.innerHTML = "JavaScript"
        createNew.className = "new-div"
        createNew.style.backgroundColor = "yellow"

        document.body.appendChild(createNew)
console.log(createNew);
createNew.remove();