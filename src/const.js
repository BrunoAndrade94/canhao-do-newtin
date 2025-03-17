const WIDTH = 950;
const HEIGHT = 850;
const MEIO_WIDTH = WIDTH / 2;
const MEIO_HEIGHT = HEIGHT / 2;

const TO_FIXED = 3;

const FATOR_GRAVIDADE = 120;
const FATOR_VELOCIDADE = 0.05;
const FATOR_ANGULO = 0.05;
const FATOR_TRAJETORIA_FUTURA = 0.5;

const GRAVIDADE = 5400; // CONSTANTE GRAVITACIONAL

let gravidadeAtual = GRAVIDADE;
let velocidadeAtual = 0;
let anguloCanhao = 0.0;

const TERRA_RAIO = 200;
const PROJETIL_RAIO = 7;
const PROJETIL_VELOCIDADE_INICIAL = 5.01;

let projetilVelocidadeInicial = PROJETIL_VELOCIDADE_INICIAL;

let botaoAtirar, botaoResetar;
let botaoIncrementoAngulo, botaoDecrementoAngulo;
let botaoIncrementoGravidade, botaoDecrementoGravidade;
let botaoIncrementoVelocidade, botaoDecrementoVelocidade;

let terra;
let canhao;
let projetil;
