function PainelDeInformacoes() {
  fill(205);
  textSize(30);
  textAlign(LEFT, TOP);
  text("CANHÃO DO NEWTIN", 30, 30);

  fill(205);
  textSize(16);
  textAlign(LEFT, TOP);
  text("ANGULO", 820, 610);

  fill(205);
  textSize(16);
  textAlign(LEFT, TOP);
  text("GRAVIDADE", 810, 680);

  fill(205);
  textSize(16);
  textAlign(LEFT, TOP);
  text("VELOCIDADE", 810, 750);

  fill(205);
  textSize(16);
  textAlign(LEFT, TOP);
  text("PROJETIL", 820, 455);

  // gravidade
  fill(205);
  textSize(16);
  textAlign(RIGHT, TOP);
  text("Gravidade: " + gravidadeAtual.toFixed(0), 900, 20);

  // FORÇA DA gravidade
  fill(205);
  textSize(16);
  textAlign(RIGHT, TOP);
  text(
    "Força da Gravidade Atual: " + projetil.forcaGravidade.toFixed(4),
    900,
    50
  );

  // FORÇA DA gravidade MIN
  fill(205);
  textSize(16);
  textAlign(RIGHT, TOP);
  text(
    projetil.forcaGravidadeMin === Infinity
      ? "Força da Gravidade Minima: 0.0000"
      : "Força da Gravidade Minima: " + projetil.forcaGravidadeMin.toFixed(4),
    900,
    80
  );

  // FORÇA DA gravidade MAX
  fill(205);
  textSize(16);
  textAlign(RIGHT, TOP);
  text(
    "Força da Gravidade Máxima: " + projetil.forcaGravidadeMax.toFixed(4),
    900,
    110
  );

  // VELOCIDADE DA BOLINHA
  fill(205);
  textSize(16);
  textAlign(RIGHT, TOP);
  text(
    "Velocidade Definida: " + projetilVelocidadeInicial.toFixed(4),
    900,
    140
  );

  // VELOCIDADE DA BOLINHA
  fill(205);
  textSize(16);
  textAlign(RIGHT, TOP);
  text("Velocidade Atual: " + projetil.getVelocidadeAtual(), 900, 170);

  fill(205);
  textSize(16);
  textAlign(RIGHT, TOP);
  text("Angulo Atual: " + canhao.angulo.toFixed(4), 900, 200);

  // gravidade
  fill(205);
  textSize(16);
  textAlign(RIGHT, TOP);
  text("Número de Órbitas: " + projetil.numeroDeOrbitas.toFixed(2), 900, 230);
}
