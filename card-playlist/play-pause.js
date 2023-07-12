function toggleplayButton() {
    const playButton1 = document.getElementById('playButton-1');
    const playButton2 = document.getElementById('playButton-2');
    const playButton3 = document.getElementById('playButton-3');
    const playButton4 = document.getElementById('playButton-4');
    const playButton5 = document.getElementById('playButton-5');
    const playButton6 = document.getElementById('playButton-6');

    playButton1.addEventListener('click', () => {
        if (playButton1.classList.contains('fa-pause')) {
            playButton1.classList.remove('fa-pause');
            playButton1.classList.add('fa-play');
        } else {
            playButton1.classList.remove('fa-play');
            playButton1.classList.add('fa-pause');
        }
    });
    
    playButton2.addEventListener('click', () => {
        if (playButton2.classList.contains('fa-pause')) {
            playButton2.classList.remove('fa-pause');
            playButton2.classList.add('fa-play');
        } else {
            playButton2.classList.remove('fa-play');
            playButton2.classList.add('fa-pause');
        }
    });

    playButton3.addEventListener('click', () => {
        if (playButton3.classList.contains('fa-pause')) {
            playButton3.classList.remove('fa-pause');
            playButton3.classList.add('fa-play');
        } else {
            playButton3.classList.remove('fa-play');
            playButton3.classList.add('fa-pause');
        }
    });

    playButton4.addEventListener('click', () => {
        if (playButton4.classList.contains('fa-pause')) {
            playButton4.classList.remove('fa-pause');
            playButton4.classList.add('fa-play');
        } else {
            playButton4.classList.remove('fa-play');
            playButton4.classList.add('fa-pause');
        }
    });

    playButton5.addEventListener('click', () => {
        if (playButton5.classList.contains('fa-pause')) {
            playButton5.classList.remove('fa-pause');
            playButton5.classList.add('fa-play');
        } else {
            playButton5.classList.remove('fa-play');
            playButton5.classList.add('fa-pause');
        }
    });

    playButton6.addEventListener('click', () => {
        if (playButton6.classList.contains('fa-pause')) {
            playButton6.classList.remove('fa-pause');
            playButton6.classList.add('fa-play');
        } else {
            playButton6.classList.remove('fa-play');
            playButton6.classList.add('fa-pause');
        }
    });
}
toggleplayButton();

