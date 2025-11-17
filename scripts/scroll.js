const divSobre = document.querySelector('.sobre .txt-sobre');
const divBadge = document.querySelector('.sobre .badge');
const divPortfolio = document.querySelector(".portfolio-grid");
const pPortfolio = document.querySelector(".portfolio p.port-desc");
const portDesc = document.querySelector(".port-desc");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);

             if (entry.target === divPortfolio) {
               entry.target.addEventListener(
                 "animationend",
                 () => {
                   portDesc.classList.add("animate");
                 },
                 { once: true }
               ); 
             }
        }


    });
});

observer.observe(divBadge);
observer.observe(divSobre);
observer.observe(divPortfolio);