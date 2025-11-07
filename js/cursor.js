document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("cursor");
  const cursorFollower = document.getElementById("cursorFollower");

  if (!cursor || !cursorFollower) return;

  document.addEventListener("mousemove", (e) => {
    // Cursor principal segue instantaneamente
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    // Follower com pequeno atraso para suavidade
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px";
      cursorFollower.style.top = e.clientY + "px";
    }, 80);
  });

  // Efeito ao passar por links, botões etc.
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
