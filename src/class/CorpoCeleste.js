class CorpoCeleste {
  constructor() {
    this.raio = TERRA_RAIO;
    this.posicao = createVector(MEIO_WIDTH, MEIO_HEIGHT);
  }

  desenhar() {
    fill(0, 100, 244);
    noStroke();
    ellipse(this.posicao.x, this.posicao.y, this.raio * 2, this.raio * 2);
  }
}
