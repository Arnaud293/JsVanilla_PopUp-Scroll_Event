
const nav = document.querySelector('nav');

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


// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
