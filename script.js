document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const iconBar = document.querySelector('.icon-bar');
    
    rightArrow.addEventListener('click', () => {
        iconBar.classList.remove('show');
        leftArrow.style.display = 'flex';
        rightArrow.style.display = 'none';
    });
    leftArrow.addEventListener('click', () => {
        iconBar.classList.add('show');
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'flex';
    });

});