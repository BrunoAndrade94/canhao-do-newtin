function seColidiu(posX, posY, raio) {
  let distancia = dist(posX, posY, terra.posicao.x, terra.posicao.y);

  if (distancia <= TERRA_RAIO + raio) return true;
  else return false;
}
