window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

document.querySelectorAll('.work-sample').forEach(item => {
    item.addEventListener('click', function() {
        // Code to open a modal with more details about the work sample
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Validate form fields
    // Prevent form submission if validation fails
    event.preventDefault();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

const loadMoreBtn = document.getElementById('load-more');
let visibleItems = 3;

loadMoreBtn.addEventListener('click', function() {
    const allItems = document.querySelectorAll('.work-sample');
    for (let i = visibleItems; i < visibleItems + 3; i++) {
        if (allItems[i]) {
            allItems[i].style.display = 'block';
        }
    }
    visibleItems += 3;
    // Hide the button if all items are visible
    if (visibleItems >= allItems.length) {
        loadMoreBtn.style.display = 'none';
    }
});
