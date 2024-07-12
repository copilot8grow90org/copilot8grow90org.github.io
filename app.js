let startSong = ()=>{

  const defaults_heart = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  };

  confetti({
    ...defaults_heart,
    particleCount: 50,
    scalar: 2,
  });

  confetti({
    ...defaults_heart,
    particleCount: 25,
    scalar: 3,
  });

  confetti({
    ...defaults_heart,
    particleCount: 10,
    scalar: 4,
  });
  let audio = document.getElementById('myAudio');
  audio.play().catch(function(error) {
    console.log('Autoplay was prevented:', error);
  });
  const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 1050);
}


$(document).ready(function() {
  $('#getStartedModal').modal('show');
});

