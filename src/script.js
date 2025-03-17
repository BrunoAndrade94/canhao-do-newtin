function setup() {
  createCanvas(WIDTH, HEIGHT);

  funcCriarObjetos();
  funcCriarBotoes();
}

function draw() {
  background(44);

  terra.desenhar();

  projetil.desenhar();
  projetil.contarOrbitas();
  projetil.mover();

  canhao.desenhar();

  botaoAtirar.desenhar();
  botaoResetar.desenhar();
  botaoIncrementoGravidade.desenhar();
  botaoDecrementoGravidade.desenhar();
  botaoIncrementoVelocidade.desenhar();
  botaoDecrementoVelocidade.desenhar();
  botaoIncrementoAngulo.desenhar();
  botaoDecrementoAngulo.desenhar();

  PainelDeInformacoes();
}

function mousePressed() {
  funcBotoesClicar();
}

function keyReleased() {}
