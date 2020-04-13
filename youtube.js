const moreBtn = document.querySelector('.moreBtn');
const title = document.querySelector('.TitleTitle');

moreBtn.addEventListener('click', function(){
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');

});

