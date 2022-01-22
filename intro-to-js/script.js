window.onload = function() {
    // start
    let starterDiv = document.getElementById('starter-div');
    let firstHeading = document.createElement('h2');
    firstHeading.innerText = 'This is an H2 created with JS';
    firstHeading.classList.add('js-header');

    starterDiv.appendChild(firstHeading);
// append headings under the relevant code for readability.

    let secondHeading = document.createElement('h2');
    secondHeading.innerText = 'This is another H2 element created with JS. Help meeee'
    secondHeading.classList.add('js-header');
    secondHeading.id = 'second-h2';

    starterDiv.appendChild(secondHeading);
    // end
}


function showName(){
    console.log('showName');
    // ^can be viewed on inspect > console> to make sure function is working
    // start
    let name = document.getElementById('name').value;

    document.getElementById('greeting-text').innerText = 'Hi ' + name;
    // end
}

function changeColour(colour) {
    // start
    document.body.style.backgroundColor = colour;
    // end
}

function resetColour() {
    document.body.style.backgroundColor = '#FCE166';
}

function toggleLightbulb() {
    // start
    let lightbulb = document.getElementById('light');
    lightbulb.classList.toggle("on");
    // ^^to toggle whenever button is clicked
    console.log(lightbulb);
    // ^everytime you click will show in console log.

    // end
}
