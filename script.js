var i = 0;
var txt = " Data Science and Psychology"; 
var speed = 80;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById('typewriter').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            document.getElementById('typewriter').innerHTML = ""; 
            i = 0;
            typeWriter();
        }, 1000);
    }
}
typeWriter();