# Visitekaartje. 

## :pencil2: Beschrijving!

Dit is de repository van mijn visitekaartje.

<img src="https://user-images.githubusercontent.com/43402897/191816442-3756aad8-ef3d-4f4f-94d1-36a3198ec34e.png" width="500">

## :mag: Kenmerken

:page_facing_up: HTML

Voor de layout maak ik gebruik van: 

  `<main>`
  `<section>` 
  
:art: CSS

Een belangrijk css onderdeel zijn de background crosses:

```
.crossesMain{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 40%;
}
  
.cross{
    width: 33%;
    margin: auto;
    color: white;
    text-align: center;
    background: red;
    height: 200px;
    position: relative;
    width: 40px;
    transform: rotate(45deg);
    cursor: pointer;
}
  
.cross:after {
    background: red;
    content: "";
    height: 40px;
    left: -80px;
    position: absolute;
    top: 80px;
    width: 200px;
    transform: rotate(0deg);
}
```
:loop: JavaScript

Een belangrijk stukje JavaScript is de code voor het omdraaien van de cards. Dit gebeurt middels een `classList.toggle`.

```
var infoCard = document.querySelector('.info');

infoCard.addEventListener('click', ()=>{
    infoCard.classList.toggle('is-flipped');
});
```


## 🔴 Live versie

De live versie van dit project kunt u hieronder vinden:

https://tristan.student.fdnd.nl/
