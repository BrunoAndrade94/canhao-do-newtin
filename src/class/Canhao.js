class Canhao {
  constructor() {
    this.meuConstrutor();
  }

  meuConstrutor() {
    this._posicao = createVector(MEIO_WIDTH, MEIO_HEIGHT - TERRA_RAIO - 30);
    this.largura = 40;
    this.altura = 18;
    this._angulo = anguloCanhao;
    this._visivel = true;
  }

  desenhar() {
    if (!this.visivel) return;

    fill(169, 169, 169);
    push();
    translate(this.posicao.x, this.posicao.y + this.altura / 20 - 2);

    beginShape();
    vertex(-this.largura / 3, this.altura / 2 + 22);
    vertex(this.largura / 3, this.altura / 2 + 22);
    vertex(0, this.altura / 2);
    endShape(CLOSE);
    pop();

    fill(140, 85, 18);
    noStroke();
    push();
    translate(this.posicao.x, this.posicao.y);
    rotate(this.angulo);

    rect(-this.largura / 2, -this.altura / 2 + 2, this.largura, this.altura);

    pop();
  }

  set angulo(set) {
    this._angulo = (set + TWO_PI) % TWO_PI;
  }

  get angulo() {
    return this._angulo;
  }

  set visivel(set) {
    this._visivel = set;
  }

  get visivel() {
    return this._visivel;
  }

  set posicao(set) {
    this._posicao = set;
  }

  get posicao() {
    return this._posicao;
  }

  aumentarAngulo(fator = FATOR_ANGULO) {
    this._angulo += fator;
  }

  diminuirAngulo(fator = FATOR_ANGULO) {
    this._angulo -= fator;
  }

  resetar() {
    this.meuConstrutor();
  }
}
