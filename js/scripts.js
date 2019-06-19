// 1: Set the text of the <h1> element
const myH1 = document.getElementsByTagName('h1')
myH1[0].textContent = "Bucket List"
// 2: Set the color of the <h1> to a different color

myH1[0].style.color = 'blue'

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const desc = document.querySelector('.desc')
desc.innerHTML = "stuff thats <strong>text</strong>"
// 4: Set the class of the <ul> to 'list'
const ulClass = document.querySelector('ul')
ulClass.className = "list"
// 5: Create a new list item and add it to the <ul>




const item = document.createElement('li')
item.innerHTML = '<input>Surfing'
ulClass.appendChild(item);


// 6: Change all <input> elements from text fields to checkboxes


// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const ex = document.querySelector(".div")
