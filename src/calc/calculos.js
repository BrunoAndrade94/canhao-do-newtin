function calcVelocidade(angulo, velocidade) {
  return createVector(cos(angulo) * velocidade, sin(angulo) * velocidade);
}

function calcDistancia(corpoA, corpoB) {
  return dist(
    corpoA.posicao.x,
    corpoA.posicao.y,
    corpoB.posicao.x,
    corpoB.posicao.y
  );
}

function calcAnguloAtual(corpoA, corpoB) {
  return atan2(
    corpoA.posicao.y - corpoB.posicao.y,
    corpoA.posicao.x - corpoB.posicao.x
  );
}

function calcDirecaoDaGravidade(corpoA, corpoB) {
  return createVector(
    corpoB.posicao.x - corpoA.posicao.x,
    corpoB.posicao.y - corpoA.posicao.y
  );
}

function calcForcaDaGravidade(distancia) {
  return gravidadeAtual / (distancia * distancia);
}

function calcTrajetoriaFutura() {}
