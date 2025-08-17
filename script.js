// Handle password login
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const password = document.getElementById("password").value;

      if (password === "170506") {
        localStorage.setItem("unlocked", "true");
        window.location.href = "home.html";
      } else {
        document.getElementById("error").innerText =
          "❌ Wrong key 💔 Try again!";
      }
    });
  }

  // Music toggle (for all pages)
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("toggleMusic");

  // Check initial state from localStorage
  const musicState = localStorage.getItem("musicState");
  if (musicState === "playing") {
    music.play().catch(() => {
      console.log("Autoplay blocked, waiting for user interaction.");
    });
    btn.textContent = "🔊 Pause Music";
  } else {
    music.pause();
    btn.textContent = "▶️ Play Music";
  }

  // Handle the button click
  btn.onclick = () => {
    if (music.paused) {
      music.play();
      btn.textContent = "🔊 Pause Music";
      localStorage.setItem("musicState", "playing");
    } else {
      music.pause();
      btn.textContent = "▶️ Play Music";
      localStorage.setItem("musicState", "paused");
    }
  };
});