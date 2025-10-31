function mostrarResposta(opcao) {
    const resultado = document.getElementById("resultado");
  
    if (opcao === 1) {
      resultado.textContent = "que legal";
    } else if (opcao === 2) {
      resultado.textContent = "ahhh, que peninha ";
    } else if (opcao === 3) {
      resultado.textContent = "vai atrás de um psicologo";
    } 
  }