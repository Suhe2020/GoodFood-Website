window.addEventListener('scroll', function(){
    const hr = document.querySelector('header');
    hr.classList.toggle("sticky", window.scrollY > 0);
});