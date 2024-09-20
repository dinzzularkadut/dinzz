window.onload = function() {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.style.animationDelay = Math.random() * 2 + 's';
    });
};
