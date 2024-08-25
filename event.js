let paragraphy = document.body.children[0];

function myParagraphy() {
    paragraphy.textContent = 'clicked';
    console.log('paragraphy clicked');
}
paragraphy.addEventListener('click', myParagraphy);

//input addeventslisterner
let inputElement = document.querySelector('input');

function retrieveElement(event){
    // let inputValue = inputElement.value;
    let inputValue = event.target.value;
    //let inputValue = event.data;
    console.log(inputValue);
    //console.log(event);
}

inputElement.addEventListener('input', retrieveElement)





















