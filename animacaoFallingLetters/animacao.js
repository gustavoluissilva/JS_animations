const buttons = document.querySelectorAll(".ce-link-slot");

buttons.forEach((btn) => {
  const text = btn.innerText;
  btn.innerHTML = "";
  text.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.innerText = letter;
    span.setAttribute("data-letter", letter);
    if (letter === " ") span.style.marginRight = "0.3em";
    span.style.setProperty("--i", index);
    span.classList.add("letter");
    btn.appendChild(span);

    btn.addEventListener("mouseenter", () => {
      if (btn.classList.contains("animando")) return;
      btn.classList.add("animando");

      const totalLetras = text.length;
      const animacaoDuracao = 600;
      const delay = 70;
      const totalTime = animacaoDuracao + delay * totalLetras;

      setTimeout(() => {
        btn.classList.remove("animando");
      }, totalTime);
    });
  });
});
