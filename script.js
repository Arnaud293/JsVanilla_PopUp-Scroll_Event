
const nav = document.querySelector('nav');
const popUp = document.querySelector('.pop-up')

let scrollPosition = 0;

window.addEventListener('scroll', () => {
    if(window.scrollY > scrollPosition){
        nav.style.height = 50 + 'px';
        imgImprovise.style.opacity = 1;
    }
    else{
        nav.style.height = 80 + 'px';
        imgImprovise.style.opacity = 0;
    }

   scrollPosition = window.scrollY;
})

window.addEventListener('scroll', () => {
    if (window.scrollY >= 850 ){
        popUp.style.transform = 'translateX(0px)'
        popUp.style.opacity = 1;
    }
})

closeBtn.addEventListener('click', () => {
    popUp.style.display = 'none';
})

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
