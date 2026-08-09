const frases = [
  "Respira, mi amor. Un paso a la vez. Yo estoy contigo.",
  "Eres fuerte incluso cuando sientes que no puedes más.",
  "No tienes que cargar el mundo sola. Aquí estoy para ti.",
  "Te amo en tus días brillantes y en tus días grises.",
  "Estoy orgulloso de ti, de tu corazón y de todo lo que sigues intentando.",
  "Siempre puedes contar conmigo. Para todo. Sin condiciones.",
  "Mi sueño es verte feliz, tranquila y segura de lo mucho que vales.",
  "Admiro muchas cosas de ti y siempre lo haré.",
  "Haces feliz a mi niño interior.",
  "Amo cada una de tus versiones así como Gumball a Penny."
];

const quoteText = document.querySelector("#quoteText");
const quoteButton = document.querySelector("#quoteButton");
const heartButton = document.querySelector("#heartButton");

quoteButton.addEventListener("click", () => {
  const current = quoteText.textContent;
  const nextOptions = frases.filter((frase) => frase !== current);
  const next = nextOptions[Math.floor(Math.random() * nextOptions.length)];

  quoteText.animate(
    [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(8px)" }
    ],
    { duration: 160, easing: "ease-out" }
  ).onfinish = () => {
    quoteText.textContent = next;
    quoteText.animate(
      [
        { opacity: 0, transform: "translateY(-8px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 220, easing: "ease-out" }
    );
  };
});

heartButton.addEventListener("click", (event) => {
  for (let i = 0; i < 9; i += 1) {
    const heart = document.createElement("span");
    heart.className = "tap-heart";
    heart.style.left = `${event.clientX + Math.random() * 90 - 45}px`;
    heart.style.top = `${event.clientY + Math.random() * 50 - 25}px`;
    heart.style.color = i % 2 === 0 ? "#d84f6f" : "#d99d42";
    heart.style.animationDelay = `${i * 35}ms`;
    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
});
