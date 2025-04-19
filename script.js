// Ketikan Teks Dinamis (Typed.js)
const typed = new Typed('#typed', {
    strings: ['whoami', 'anansutiawan', 'hack portfolio', 'hack system'],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true,
});

// Suara Matrix (Hujan Kode)
const matrixSound = new Audio('https://freesound.org/data/previews/100/100981_1234256-lq.mp3');
matrixSound.loop = true;
matrixSound.volume = 0.3;
document.addEventListener('click', () => matrixSound.play(), { once: true });

// Suara Hack System
const hackSound = new Audio('https://freesound.org/data/previews/320/320073_5260872-lq.mp3');
hackSound.volume = 0.5;

// Terminal Interaktif
const input = document.getElementById('terminal-input');
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = input.value.toLowerCase().trim();
        input.value = '';
        switch (command) {
            case 'help':
                alert('Available commands: help, portfolio, about, contact, hack system');
                break;
            case 'portfolio':
                document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
                break;
            case 'about':
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contact':
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                break;
            case 'hack system':
                hackSound.play();
                document.body.classList.add('hack-shake');
                setTimeout(() => document.body.classList.remove('hack-shake'), 500);
                alert('System breached! Accessing core: Web3 protocols, bug bounty exploits, Android WebRTC streams.');
                break;
            default:
                alert('Command not found. Try: help, portfolio, about, contact, hack system');
        }
    }
});

// Partikel Kode
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.char = ['0', '1', '{', '}', ';', '>', '<'][Math.floor(Math.random() * 7)];
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -=
