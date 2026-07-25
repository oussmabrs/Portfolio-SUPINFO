// ===============================
// Portfolio SUPINFO - Oussama Barrhouss
// ===============================

// Message dans la console
console.log("Bienvenue sur le Portfolio de Oussama Barrhouss !");

// Animation du bouton principal
const bouton = document.querySelector(".btn");

if (bouton) {

    bouton.addEventListener("mouseenter", () => {
        bouton.style.transform = "scale(1.08)";
        bouton.style.transition = "0.3s";
    });

    bouton.addEventListener("mouseleave", () => {
        bouton.style.transform = "scale(1)";
    });

}

// Formulaire de contact
const formulaire = document.querySelector("form");

if (formulaire) {

    formulaire.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Merci ! Votre message a bien été envoyé.");

        formulaire.reset();

    });

}

// Animation des cartes
const cartes = document.querySelectorAll(".card");

cartes.forEach(function(carte){

    carte.addEventListener("mouseenter", function(){

        carte.style.transform = "translateY(-10px)";
        carte.style.transition = "0.3s";

    });

    carte.addEventListener("mouseleave", function(){

        carte.style.transform = "translateY(0px)";

    });

});

// Apparition des sections au défilement
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", function(){

    sections.forEach(function(section){

        const position = section.getBoundingClientRect().top;

        const hauteur = window.innerHeight;

        if(position < hauteur - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";
            section.style.transition = "1s";

        }

    });

});

// Préparation des animations
sections.forEach(function(section){

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";

});

// Message de bienvenue
window.onload = function(){

    console.log("Portfolio chargé avec succès.");

};