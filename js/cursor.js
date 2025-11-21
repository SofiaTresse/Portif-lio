document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("cursor");
  const cursorFollower = document.getElementById("cursorFollower");

  if (!cursor || !cursorFollower) return;

  // --- DESATIVAR CURSOR em telas pequenas ---
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    cursor.style.display = "none";
    cursorFollower.style.display = "none";

    // Remove qualquer posição anterior (evita bug)
    cursor.style.left = "-9999px";
    cursor.style.top = "-9999px";
    cursorFollower.style.left = "-9999px";
    cursorFollower.style.top = "-9999px";

    return; // Para o script AQUI
  }

  // --- MODO DESKTOP ---

  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    
    setTimeout(() => {
      cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }, 80);
  });

  const hoverTargets = document.querySelectorAll("a, button, .project-thumbnail");
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
      cursorFollower.classList.add("active");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
      cursorFollower.classList.remove("active");
    });
  });
});
