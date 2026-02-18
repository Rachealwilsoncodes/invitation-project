const messages = {
  degree: `You may look grown and ready for the world,
but to us, you are still little kids in elder form —
serious outside, soft and innocent at heart.

We warmly invite you to join us for the Annual Day celebration.
Come, relive your laughter,
create one more memory,
and make the day special with your presence.

We’ll be waiting. 💫`,

We’ll be waiting.`,

  puFinal: `You were never the silent batch —
you filled every corridor with echoes,
every classroom with life,
every ordinary day with something unforgettable.

Yes, you made noise…
but that very noise
will now echo inside our hearts forever.

On days when our hearts were heavy,
you didn’t know it —
but your laughter lightened us,
your mischief healed us,
your presence gave us strength.

You were not just students in a register,
you were energy, chaos, joy, and warmth.

As you step into the world beyond these gates,
carry your loud dreams proudly.
And remember —
your teachers will miss the noise
more than the silence.

Once our students,
forever our echo.
  
  We warmly invite you to the Annual Day celebration.
Come, make some more noise,
create one last beautiful memory,
and let your echoes fill the campus once again.

We’ll be waiting for you.`
};

document.addEventListener("DOMContentLoaded", () => {

  const popup = document.getElementById("popup");
  const roleSelect = document.getElementById("roleSelect");
  const gallerySection = document.getElementById("gallerySection");
  const invitationPage = document.getElementById("invitationPage");

  const startBtn = document.getElementById("startBtn");
  const touchBtn = document.getElementById("touchBtn");
  const homeBtn = document.getElementById("homeBtn");

  const gallery = document.getElementById("gallery");
  const galleryMessage = document.getElementById("galleryMessage");
  const finalMessage = document.getElementById("finalMessage");

  const roleButtons = document.querySelectorAll("[data-role]");

  // Start App
  startBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    roleSelect.classList.remove("hidden");
  });

  // Role Selection
  roleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const role = btn.dataset.role;

      roleSelect.classList.add("hidden");
      gallerySection.classList.remove("hidden");

      gallery.innerHTML = "";
      galleryMessage.textContent = "";
      touchBtn.classList.add("hidden");

      const images = {
        pu: ["p1.png.jpg","p2.png.JPG","p3.png.JPG","p4.png.jpg","p5.png.jpg","p6.png.jpg","p7.png.jpg","p8.png.jpg","p9.png.jpg","p10.png.jpeg",
"p11.png.jpeg","p12.png.jpeg","p13.png.jpeg","p14.png.jpeg","p15.png.jpeg","p16.png.jpeg","p17.png.jpeg","p18.png.jpeg","p19.png.jpeg","p20.png.jpeg",
"p21.png.jpeg","p22.png.jpeg","p23.png.jpeg","p24.png.jpeg","p25.png.jpeg","p26.png.jpeg","p27.png.jpeg","p28.png.jpeg","p29.png.jpeg","p30.png.jpeg",
"p31.png.jpeg","p32.png.jpeg","p33.png.jpeg"
],
        degree: ["d1.png.JPG","d2.png.JPG","d3.png.JPG","d4.png.JPG","d5.png.jpeg","d6.png.jpeg","d7.png.jpeg","d8.png.jpeg","d9.png.jpeg","d10.png.jpeg",
"d11.png.jpeg","d12.png.jpeg","d13.png.jpeg","d14.png.jpeg","d15.png.jpeg","d16.png.jpeg","d17.png.jpeg","d18.png.jpeg","d19.png.jpeg","d20.png.jpeg",
"d21.png.jpeg","d22.png.jpeg","d23.png.jpeg","d24.jpeg","d25.jpeg","d23.jpeg"]
      };

      if (images[role]) {
        images[role].forEach(file => {
          const img = document.createElement("img");
          img.src = "images/" + file;
          img.onclick = () => openFull(img);
          gallery.appendChild(img);
        });
      }

      if (role === "pu") {
        touchBtn.classList.remove("hidden");
      }

      if (role === "degree") {
        startTypewriter(messages.degree, galleryMessage);
      }
    });
  });

  // Touch Button
  touchBtn.addEventListener("click", () => {
    gallerySection.classList.add("hidden");
    invitationPage.classList.remove("hidden");

    setTimeout(() => {
      startTypewriter(messages.puFinal, finalMessage);
    }, 1500);
  });

  // Home Button
  homeBtn.addEventListener("click", () => {
    gallerySection.classList.add("hidden");
    roleSelect.classList.remove("hidden");
  });

});

// Typewriter
function startTypewriter(text, element) {
  element.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 30);
    }
  }

  type();
}

// Fullscreen Image
function openFull(img) {
  const full = document.getElementById("full");
  const fullImg = document.getElementById("fullImg");

  fullImg.src = img.src;
  full.classList.remove("hidden");

  full.onclick = () => full.classList.add("hidden");
}
