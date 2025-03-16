

  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".hidden");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hide"); 
          } else {
            entry.target.classList.remove("show");
            entry.target.classList.add("hide"); 
          }
        });
      },
      { threshold: 0.7 }
    );
  
    sections.forEach((section) => observer.observe(section));

    
    const radioButtons = document.querySelectorAll('.radio-wrapper a');
    radioButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            const target = this.getAttribute('href'); 
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' }); 
        });
    });
});




function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}
