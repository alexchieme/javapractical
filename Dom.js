 document.body.children[2].children[0].href ='https://google.com';

//let achor = document.getElementById('inner-html');
//achor.href ='https://google.com';
//let achor = document.querySelector('#inner-html').href ='https://academind.com';
//achor.href ='https://academind.com';
//let h1Element = document.body.firstElementChild;
//let h1Element = document.body.children[0]
//console.log(h1Element);
//innerhtml.textContent ='this text was changed by me';

//ADD AN ELEMENT
//1.create a new Element
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to google';
//2.get access to he new element that should 
//hold the new element.
let firstParagraphy = document.querySelector('p');
//3.insect the new element into the element content
firstParagraphy.append(newAnchorElement);

//DELETE AN ELEMENT
//1.selet the element that should removed
let firstH1Element = document.querySelector('h1');
//removes it
firstH1Element.remove();

//move Element
firstParagraphy.parentElement.append(firstParagraphy);

//innerHTML
firstParagraphy.innerHTML = 'hi!This is <strong>important!!!</strong>';












