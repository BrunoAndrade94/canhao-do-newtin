class Botao {
  constructor(texto, posX, posY, largura, altura, acao) {
    this.texto = texto;
    this.posicao = createVector(posX, posY);
    this.largura = largura;
    this.altura = altura;
    this.acao = acao;

    this.cor = color(20, 20, 50);
    this.hover = false;
  }

  desenhar() {
    this.funcVerificarHover();

    if (this.hover) {
      fill(80, 0, 150);
      stroke(180, 0, 255);
      strokeWeight(3);
    } else {
      fill(this.cor);
      stroke(255);
      strokeWeight(1);
    }

    rect(this.posicao.x, this.posicao.y, this.largura, this.altura, 10);

    fill(255);
    noStroke();
    textSize(18);
    textAlign(CENTER, CENTER);
    text(
      this.texto,
      this.posicao.x + this.largura / 2,
      this.posicao.y + this.altura / 2
    );
  }

  clicar() {
    if (this.hover && this.acao) this.acao();
  }

  funcVerificarHover() {
    this.hover =
      mouseX > this.posicao.x &&
      mouseX < this.posicao.x + this.largura &&
      mouseY > this.posicao.y &&
      mouseY < this.posicao.y + this.altura;
  }
}
