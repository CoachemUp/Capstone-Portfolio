//Custom auto type 
var typed = new Typed(".auto-type", {
    strings: ["Designer", "Developer", "Freelancer", "Teacher", "Coach", "Dad"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true,
    underline: true
});




//Back to top button
let mybutton = document.getElementById("btn-back-to-top");





// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}



// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function functionPrint() {
    document.getElementById("nonPrintable").className += "noPrint";
    window.print();
}