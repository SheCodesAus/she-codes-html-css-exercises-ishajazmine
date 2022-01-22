window.onload = function() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // start
    let keyboard = document.getElementById('keyboard');


    // end

    alphabet.forEach(letter => {
        // start
        let keyButton = document.createElement('input');
        keyButton.type = 'button';
        keyButton.value = letter;
        keyButton.addEventListener('click', event => {
            console.log(event)
            highlightLetter(event.target.id)
        })
        keyButton.classList.add('key');
        keyButton.id = letter;
        keyboard.appendChild(keyButton);
        // end
    });
}

// start
document.addEventListener('keydown', event => {
    highlightLetter(event.key)
})
// ^^^^ connects it to keyboard. 

// end


function highlightLetter(letter){
    // start
    console.log(letter)
    let output = document.getElementById('output-text');
    output.innerText = output.innerText + letter;

    // ^^displays letter
    let key = document.getElementById(letter);
    key.classList.toggle('selected');

    // creating a toggle 
    setTimeout(function() {
        key.classList.toggle('selected');
    }, 150);
    // when doing toggle. after x milliseconds we want to turn off the list - so briefly highlights

    // end
}

