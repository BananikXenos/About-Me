animateTitle();

function animateTitle(Title = "System.out.println(\"Hello, World!\")", delay = 300) {
    let counter = 0;
    let direction = true;
    aniTitle = setInterval(function () {
        if (counter == Title.length)
            direction = false;
        if (counter == false)
            direction = true;
        counter = (direction == true) ? ++counter : --counter;
        newtitle = (counter == 0) ? "*" : Title.slice(0, counter);
        document.title = newtitle;
    }, delay)
}

function copyToClipboard(text) {
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(text);
  
    /* Alert the copied text */
    alert("Copied to clipboard: " + text);
}