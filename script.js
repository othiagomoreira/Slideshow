const containerSlider = document.querySelector('.slider');
const sliderWidth = document.querySelector('.slider--width');
const controles = document.querySelector('.slider--controls');
const totalSlides = document.querySelectorAll('.slider--item').length;

// Variavel de ambiente
let sliderAtual = 0;

// Calcula o width de cada slide dinamicamente
sliderWidth.style.width = `calc(100vw * ${totalSlides})`;

// Pega a altura do cantainer slider com a propriedade clientHeight e coloca no controles
controles.style.height = `${containerSlider.clientHeight}px`;


//Botões de avançar e voltar os slides

function goPrev() {
    sliderAtual--
    if(sliderAtual < 0) { //Para que fique em loop e quando estiver no ultiomo volte para o primeiro
        sliderAtual = totalSlides - 1;
    }

    updateMargin();
};

function goNext() {
    sliderAtual++
    if(sliderAtual > (totalSlides-1)) { //Se for maior que o ultimo slide, então volte para 0(primeiro)
        sliderAtual = 0
    };

    updateMargin()
};

//Baseado no sliderAtual irá calculadar um margin-left(negativo)
function updateMargin() {
    //Multiplica o slider atual pelo viewport do seu dispositivo
    let novaMargin = (sliderAtual * window.innerWidth);

    //Coloca o valor de novaMargin como um margin-left negativo
    sliderWidth.style.marginLeft = `-${novaMargin}px`; 
}

// Para que rode o slide automaticamente
setInterval(goNext, 5000); //Acione goNext a cada 5s