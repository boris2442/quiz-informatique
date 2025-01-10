const sr=ScrollReveal({
    origin:"top",
    duration:1500,
    reset:true,
    distance:"30px"
})
sr.reveal(".footer-text, .contact, .bd, .quizprog, .quiz, .about, .accueil, .reseaux", {interval:200});

// chargement de la page

window.onload = function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.loader').style.transition='5s ease-out'
  };
  
  