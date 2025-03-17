function funcCriarBotoes() {
  botaoAtirar = new Botao("Atirar", WIDTH - 150, HEIGHT - 370, 120, 40, () =>
    projetil.atirar()
  );

  botaoResetar = new Botao("Resetar", WIDTH - 150, HEIGHT - 320, 120, 40, () =>
    projetil.resetar()
  );

  botaoIncrementoGravidade = new Botao(
    "G+",
    WIDTH - 90,
    HEIGHT - 150,
    60,
    40,
    () => (gravidadeAtual += FATOR_GRAVIDADE)
  );

  botaoDecrementoGravidade = new Botao(
    "G-",
    WIDTH - 160,
    HEIGHT - 150,
    60,
    40,
    () => (gravidadeAtual -= FATOR_GRAVIDADE)
  );

  botaoIncrementoVelocidade = new Botao(
    "V+",
    WIDTH - 90,
    HEIGHT - 80,
    60,
    40,
    () => projetil.aumentarVelocidade()
  );

  botaoDecrementoVelocidade = new Botao(
    "V-",
    WIDTH - 160,
    HEIGHT - 80,
    60,
    40,
    () => projetil.diminuirVelocidade()
  );

  botaoIncrementoAngulo = new Botao(
    "A+",
    WIDTH - 90,
    HEIGHT - 220,
    60,
    40,
    () => {
      canhao.aumentarAngulo();
    }
  );

  botaoDecrementoAngulo = new Botao(
    "A-",
    WIDTH - 160,
    HEIGHT - 220,
    60,
    40,
    () => {
      canhao.diminuirAngulo();
    }
  );
}

function funcBotoesClicar() {
  botaoAtirar.clicar();
  botaoResetar.clicar();
  botaoIncrementoGravidade.clicar();
  botaoDecrementoGravidade.clicar();
  botaoIncrementoVelocidade.clicar();
  botaoDecrementoVelocidade.clicar();
  botaoIncrementoAngulo.clicar();
  botaoDecrementoAngulo.clicar();
}
