var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
    card.addEventListener('click', ()=>{
        card.classList.toggle('is-flipped');
    });
});