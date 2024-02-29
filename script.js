const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancarFaixa = document.getElementById('proxima-faixa');
const numeroCapitulo = document.getElementById('capitulo');
const botaoVoltarFaixa = document.getElementById('faixa-anterior');
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function trocarNumeroCapitulo() {
    numeroCapitulo.innerText = "Capítulo " + capituloAtual;
}

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-fill');
    botaoPlayPause.classList.add('bi-pause-fill');
}
function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-fill');
    botaoPlayPause.classList.add('bi-play-fill');
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa()
        taTocando = 0;
    }

}

function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

   // audioCapitulo.src = "./books/dom-casmurro/1.mp3";
   audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
   tocarFaixa();
   taTocando = 1;
   trocarNumeroCapitulo();
}
function voltarFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNumeroCapitulo();
}

botaoPlayPause.addEventListener('click', tocarOuPausar); 
botaoAvancarFaixa.addEventListener('click', proximaFaixa);
botaoVoltarFaixa.addEventListener('click', voltarFaixa);