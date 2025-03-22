const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})

const readMoreBtns = document.querySelectorAll('.view-more a');
const detailedDescs = document.querySelectorAll('.detailed-description');

// Add a click event listener to each Read More button
readMoreBtns.forEach((btn, index) => {
    btn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Toggle the display of the corresponding detailed description
        detailedDescs[index].style.display = (detailedDescs[index].style.display === 'none' || detailedDescs[index].style.display === '') ? 'block' : 'none';

        // Change button text based on display status
        if (detailedDescs[index].style.display === 'block') {
            btn.textContent = 'Read Less';
        } else {
            btn.textContent = 'Read More';
        }
    });
});

// Assuming your "Full Project" buttons have a class name "btn"
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn1');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.getAttribute('href');
            window.open(url, '_blank');
        });
    });
});


function togglePDF(pdfId) {
    var pdfEmbed = document.getElementById(pdfId);
    if (pdfEmbed.style.display === "none") {
        pdfEmbed.style.display = "block";
    } else {
        pdfEmbed.style.display = "none";
    }
}
