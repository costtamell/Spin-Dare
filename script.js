// Desafios por nível
const niveis = {
    facil: [
    "Faça um coração com as mãos ❤️",
    "Conte seu doce favorito 🍬",
    "Dê um sorriso gigante 😁",
    "Imite um gato 😺",
    "Fale um elogio para alguém 🌟",
    "Dance por 5 segundos 💃"
    ],
    medio: [
    "Cante um pedacinho de música 🎤",
    "Imite alguém da sala 😂",
    "Faça uma pose engraçada 🤪",
    "Conte uma verdade sobre você 🤫",
    "Faça 5 polichinelos 🤸",
    "Fale uma curiosidade sua 👀"
    ],
    dificil: [
    "Dança por 15 segundos 👯",
    "Conte um mico seu 😳",
    "Fale algo que nunca contou 😶",
    "Imite um famoso 😂",
    "Fale 3 verdades e 1 mentira 🤔",
    "Deixe alguém escolher seu desafio 😈"
    ]
    };
    
    let nivelAtual = "facil";
    
    // Montar roda
    function montarRoda() {
    const wheel = document.getElementById("wheel");
    wheel.innerHTML = "";
    
    niveis[nivelAtual].forEach((texto, i) => {
    const slice = document.createElement("div");
    slice.className = `slice s${i + 1}`;
    slice.innerHTML = texto;
    wheel.appendChild(slice);
    });
    }
    
    montarRoda();
    
    // Trocar nível
    function mudarNivel(nivel, btn) {
    nivelAtual = nivel;
    
    document.querySelectorAll(".level-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    montarRoda();
    document.getElementById("resultado").innerHTML = "";
    }
    
    // Gira a roda
    function girar() {
    const wheel = document.getElementById("wheel");
    const resultado = document.getElementById("resultado");
    const arrow = document.getElementById("arrow");
    const sound = document.getElementById("spinSound");
    
    resultado.innerHTML = "";
    
    // Ativar animação da seta
    arrow.classList.add("spin-anim");
    
    
    // Gira entre 1080 e 2160 graus
    let randomDegrees = 1080 + Math.floor(Math.random() * 1080);
    wheel.style.transform = `rotate(${randomDegrees}deg)`;
    
    setTimeout(() => {
    const index = Math.floor(((randomDegrees % 360) / 60));
    resultado.innerHTML = "🔎 Desafio: <b>" + niveis[nivelAtual][index] + "</b>";
    
    // Parar animação da seta
    arrow.classList.remove("spin-anim");
    }, 3000);
    }
    