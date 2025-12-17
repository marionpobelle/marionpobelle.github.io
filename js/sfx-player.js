const allAudios = document.querySelectorAll('audio');

function playSound(audioId) {
    allAudios.forEach(audioElement => {
        audioElement.stop();
        audioElement.currentTime = 0;
    });
    const audio = document.getElementById(audioId);
    audio.volume = 0.5;
    audio.play();
}