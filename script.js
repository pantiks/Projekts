function showTab(tabId) {
  const contents = document.querySelectorAll('.container');
  contents.forEach(block => {
    block.style.display = 'none';
  });

  const activeBlock = document.getElementById(tabId);
  activeBlock.style.display = 'block';
}

const sounds = {
    // ! Drum sounds !
    Q: [new Audio('Q_drum1.mp3')],
    W: [new Audio('W_drum1.mp3')],
    E: [new Audio('E_drum1.mp3')],
    A: [new Audio('A_drum1.mp3')],
    D: [new Audio('D_drum1.mp3'), new Audio('D_drum2.mp3')],
    R: [new Audio('R_drum1.mp3')],
    F: [new Audio('F_drum1.mp3'), new Audio('F_drum2.mp3')],
    S: [new Audio('S_drum2.mp3')],

    // ! Guitar sounds !
    Z: [new Audio('Z_guitar1.mp3')],
    X: [new Audio('X_guitar1.mp3')],
    C: [new Audio('C_guitar1.mp3')],
    V: [new Audio('V_guitar1.mp3')],
    B: [new Audio('B_guitar1.mp3')],
    N: [new Audio('N_guitar1.mp3')],
    M: [new Audio('M_guitar1.mp3')],
};

function hit(btn, key) {
    const list = sounds[key];
    if (list && list.length > 0) {
        const sound = list[Math.floor(Math.random() * list.length)];
        sound.currentTime = 0;
        sound.volume = 0.4;
        sound.play();
    }

    btn.classList.add('hit');
    setTimeout(() => btn.classList.remove('hit'), 150);
}

document.addEventListener('keydown', e => {
    if (e.repeat) return;
    const key = e.code.replace('Key', '');
    const btn = document.querySelector(`.btn[onclick*="'${key}'"]`);
    if (btn) hit(btn, key);
});
