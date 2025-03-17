class Projetil {
  constructor() {
    this.meuConstrutor();
  }

  meuConstrutor() {
    this.posicao = createVector(canhao.posicao.x + 20, canhao.posicao.y);
    this.velocidade = calcVelocidade(this.angulo, this.velocidade);
    this.visivel = true;
    this.movendo = false;
    this.piscando = false;
    this.atirou = false;
    this.colidiu = false;

    this.trajetoriaPassada = [];
    this.trajetoriaFutura = [];
    this.numeroDeOrbitas = 0;
    this.angulo = 0;
    this.anguloInicial = calcAnguloAtual(this, terra);
    this.deslocamentoAngular = 0;

    this.raio = PROJETIL_RAIO;
    this.forcaGravidade = 0;
    this.forcaGravidadeMin = Infinity;
    this.forcaGravidadeMax = 0;

    this.piscarBolinha();
    canhao.resetar();

    // projetilVelocidadeInicial = PROJETIL_VELOCIDADE_INICIAL;
    // gravidadeAtual = GRAVIDADE;
  }

  desenhar() {
    if (!this.visivel) return;

    // let xProj = this.posicao.x + cos(canhao.angulo - 5) * this.raio; // Lado direito do canhão
    // let yProj = this.posicao.y + sin(canhao.angulo + 2.8) * this.raio;

    fill(243, 18, 18);
    noStroke();
    ellipse(this.posicao.x, this.posicao.y, this.raio * 2, this.raio * 2);

    this.desenharTrajetoriaPassada();
    this.desenharTrajetoriaFutura();
  }

  getVelocidadeAtual() {
    return this.velocidade.mag().toFixed(4);
  }

  aumentarVelocidade(fator = FATOR_VELOCIDADE) {
    projetilVelocidadeInicial += fator;

    if (!this.movendo) return;

    this.velocidade.add(this.velocidade.copy().normalize().mult(fator));
  }

  diminuirVelocidade(fator = FATOR_VELOCIDADE) {
    projetilVelocidadeInicial -= fator;

    if (!this.movendo) return;

    this.velocidade.sub(this.velocidade.copy().normalize().mult(fator));
  }

  desenharTrajetoriaFutura() {
    if (this.colidiu && !this.movendo) return;

    this.trajetoriaFutura = [];

    let passos = 300;
    let posSimulada = this.posicao.copy();
    let velSimulada = this.movendo
      ? this.velocidade.copy()
      : calcVelocidade(canhao.angulo, projetilVelocidadeInicial);

    let limiteTrajetoriaFutura = FATOR_TRAJETORIA_FUTURA;

    for (let i = 0; i < passos; i++) {
      let distancia = calcDistancia({ posicao: posSimulada }, terra);
      let forcaGravidade = calcForcaDaGravidade(distancia);
      let direcaoGravidade = calcDirecaoDaGravidade(
        { posicao: posSimulada },
        terra
      ).normalize();

      velSimulada.add(direcaoGravidade.mult(forcaGravidade));
      posSimulada.add(velSimulada);

      if (seColidiu(posSimulada.x, posSimulada.y, 0)) break;
      if (i / passos > limiteTrajetoriaFutura) break;

      this.trajetoriaFutura.push(posSimulada.copy());
    }

    stroke(0, 150, 255, 150); // Azul translúcido
    noFill(); // Azul translúcido
    beginShape();
    this.trajetoriaFutura.forEach((ponto) => vertex(ponto.x, ponto.y));
    endShape();
  }

  desenharTrajetoriaPassada() {
    this.trajetoriaPassada.forEach((ponto, i) => {
      fill(255, 255, 255, map(i, 0, this.trajetoriaPassada.length, 50, 200));
      ellipse(ponto.x, ponto.y, 2, 2);
    });
  }

  piscarBolinha() {
    this.piscando = true;

    let contador = 0;
    let intervalo = setInterval(() => {
      this.visivel = !this.visivel;
      contador++;

      if (contador >= 6) {
        clearInterval(intervalo);
        this.visivel = true;
        this.piscando = false;
      }
    }, 100);
  }

  resetar() {
    this.meuConstrutor();
  }

  mover() {
    if (!this.movendo) return;

    let distancia = calcDistancia(this, terra);

    if (this.forcaGravidade > this.forcaGravidadeMax) {
      this.forcaGravidadeMax = this.forcaGravidade;
    }

    if (
      this.forcaGravidade > 0 &&
      this.forcaGravidade < this.forcaGravidadeMin
    ) {
      this.forcaGravidadeMin = this.forcaGravidade;
    }

    this.forcaGravidade = gravidadeAtual / (distancia * distancia);

    let direcaoGravidade = calcDirecaoDaGravidade(this, terra);
    direcaoGravidade.normalize();

    this.velocidade.add(direcaoGravidade.mult(this.forcaGravidade));
    this.posicao.add(this.velocidade);
    this.trajetoriaPassada.push(this.posicao.copy());

    // this.funcTrajetoriaFuruta();

    if (seColidiu(this.posicao.x, this.posicao.y, this.raio)) this.colidir();
  }

  contarOrbitas() {
    if (!this.movendo) return;

    let anguloAtual = calcAnguloAtual(this, terra);
    let deltaAngulo = anguloAtual - this.anguloInicial;

    if (deltaAngulo > PI) deltaAngulo -= TWO_PI;
    if (deltaAngulo < -PI) deltaAngulo += TWO_PI;

    this.deslocamentoAngular += deltaAngulo;

    while (abs(this.deslocamentoAngular) >= TWO_PI) {
      this.numeroDeOrbitas++;
      this.deslocamentoAngular -= Math.sign(this.deslocamentoAngular) * TWO_PI;
    }

    this.anguloInicial = anguloAtual;
  }

  colidir() {
    this.movendo = false;
    this.colidiu = true;
    this.visivel = true;
  }

  atirar(angulo = canhao.angulo, velocidade = projetilVelocidadeInicial) {
    if (this.bateu || this.atirou) return;

    this.atirou = true;
    this.movendo = true;
    this.velocidade = calcVelocidade(angulo, velocidade);

    canhao.visivel = false;
  }
}
