window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar'); 

    if (window.innerWidth > 768) {
        if (window.scrollY > 120) {
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
            navbar.style.width = '100%';
            navbar.style.background = '#333'; 
            navbar.style.borderRadius = '0'; 
            navbar.style.zIndex = '1000'; 
        } else {
            navbar.style.position = 'relative';
            navbar.style.top = 'auto';
            navbar.style.width = 'auto';
            navbar.style.background = 'transparent';
            navbar.style.borderRadius = '0'; 
            navbar.style.zIndex = 'auto'; 
        }
    }
});
