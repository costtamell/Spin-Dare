let currentLevel = "facil";

const desafios = {
  facil: [
    "Conte uma curiosidade",
    "Mostre algo da galeria",
    "Fale seu emoji favorito",
    "Conte 5 segredos",
    "3 verdades e 1 mentira",
    "Conte algo engraçado"
  ],
  medio: [
    "Imite alguém",
    "Envie áudio cantando",
    "Mostre uma foto antiga",
    "Conte um mico",
    "Dance por 10s",
    "Mostre sua última conversa"
  ],
  dificil: [
    "Ligue para alguém",
    "Mostre seu histórico",
    "Algo que nunca contou",
    "Revele a crush",
    "Mostre a galeria por 5s",
    "Fale algo vergonhoso"
  ]
};

function setLevel(nivel) {
  currentLevel = nivel;
  document.getElementById("resultado").textContent = "---";
  gerarSetores();
}

function gerarSetores() {
  const wheel = document.getElementById("wheel");
  wheel.innerHTML = ""; 

  const lista = desafios[currentLevel];
  const angulo = 360 / lista.length;

  for (let i = 0; i < lista.length; i++) {
    const setor = document.createElement("div");
  
    // cria a fatia
    setor.style.transform = `rotate(${angulo * i}deg)`;
  
    // cor automática
    setor.style.background = `hsl(${i * 60}, 80%, 50%)`;
  
    // texto centralizado certinho
    setor.innerHTML = `
      <span style="
        transform: rotate(${angulo / 2}deg);
      ">
        ${lista[i]}
      </span>
    `;
  
    wheel.appendChild(setor);
  }
  
}

gerarSetores(); 

function spinWheel() {
  const wheel = document.getElementById("wheel");
  let randomRotation = Math.floor(3000 + Math.random() * 3000);

  wheel.style.transform = `rotate(${randomRotation}deg)`;

  let sectors = desafios[currentLevel].length;
  let angleSector = 360 / sectors;

  setTimeout(() => {
    let finalDegrees = randomRotation % 360;
    let index = Math.floor((360 - finalDegrees) / angleSector) % sectors;

    document.getElementById("resultado").textContent =
      desafios[currentLevel][index];
  }, 4000);
}
