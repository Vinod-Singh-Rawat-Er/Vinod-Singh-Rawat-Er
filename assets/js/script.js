// toggle icon navbar

let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.nav');

// Set current year dynamically
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;
});


menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//  scroll section header 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        }
    });
    //  sticky header 
    let header = document.querySelector('header');
    var sticky = header.offsetTop;

    //header.classList.toggle('sticky', window.screenY > 100);
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
}

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;

  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    subject: form.subject.value,
    message: form.message.value
  };

  fetch("https://script.google.com/macros/s/AKfycbwF9oUs5YOMLCLWLk1pa464uECbFZSXJAP0a6ZOEaqq--TYqVlFUKhovfHIU8UM3Umn/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(result => {
    alert("Message sent successfully!");
    form.reset();
  })
  .catch(error => {
    alert("There was an error sending your message.");
    console.error("Error:", error);
  });
});
