const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-left')
        } else {
            entry.target.classList.remove('show-left')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-left');
hiddenElements.forEach((el) => observer.observe(el));


const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-right')
        } else {
            entry.target.classList.remove('show-right')
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.hidden-right');
hiddenElements2.forEach((el) => observer2.observe(el));

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-fadein')
        } else {
            entry.target.classList.remove('show-fadein')
        }
    });
});

const hiddenElements3 = document.querySelectorAll('.hidden-fadein');
hiddenElements3.forEach((el) => observer3.observe(el));