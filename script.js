
const messages = {
  degree: `To our Degree Batch —

You may look grown and ready for the world,
but to us, you are still little kids in elder form —
serious outside, soft and innocent at heart.

We warmly invite you to join us for the Annual Day celebration.
Come, relive your laughter,
create one more memory,
and make the day special with your presence.

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
forever our echo.`,
  pinv: ' We warmly invite you to the Annual Day celebration.
Come, make some more noise,
create one last beautiful memory,
and let your echoes fill the campus once again.

We’ll be waiting for you.'
};

function startApp() {
  document.getElementById("roleSelect").classList.remove("hidden");
}

function chooseRole(role) {

  document.getElementById("roleSelect").classList.add("hidden");
  document.getElementById("gallerySection").classList.remove("hidden");

  const touchBtn = document.getElementById("touchBtn");
  const typeElement = document.getElementById("galleryMessage");
if (typeElement) {
  typeElement.textContent = "";
}

  // Show Touch Me only for PU
  if (role === "pu") {
     startTypewriter(messages.pinv,"galleryMessage");
    touchBtn.style.display = "block";
  } else {
    touchBtn.style.display = "none";
  }

  // Load Images
  let gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  let images = {
    pu: ["p1.png.jpg","p2.png.JPG","p3.png.JPG","p4.png.jpg","p5.png.jpg","p6.png.jpg","p7.png.jpg","p8.png.jpg","p9.png.jpg","p10.png.jpeg",
"p11.png.jpeg","p12.png.jpeg","p13.png.jpeg","p14.png.jpeg","p15.png.jpeg","p16.png.jpeg","p17.png.jpeg","p18.png.jpeg","p19.png.jpeg","p20.png.jpeg",
"p21.png.jpeg","p22.png.jpeg","p23.png.jpeg","p24.png.jpeg","p25.png.jpeg","p26.png.jpeg","p27.png.jpeg","p28.png.jpeg","p29.png.jpeg","p30.png.jpeg",
"p31.png.jpeg","p32.png.jpeg","p33.png.jpeg"],
    degree: ["d1.png.JPG","d2.png.JPG","d3.png.JPG","d4.png.JPG","d5.png.jpeg","d6.png.jpeg","d7.png.jpeg","d8.png.jpeg","d9.png.jpeg","d10.png.jpeg",
"d11.png.jpeg","d12.png.jpeg","d13.png.jpeg","d14.png.jpeg","d15.png.jpeg","d16.png.jpeg","d17.png.jpeg","d18.png.jpeg","d19.png.jpeg","d20.png.jpeg",
"d21.png.jpeg","d22.png.jpeg","d23.png.jpeg","d24.jpeg","d25.jpeg","d23.jpeg","d24.jpeg","d25.jpeg","d26.jpeg"]};

  images[role].forEach(file => {
    let img = document.createElement("img");
    img.src = "images/" + file;
    img.onclick = () => openFull(img);
    gallery.appendChild(img);
  });

  // Degree auto message
  if (role === "degree") {
    startTypewriter(messages.degree,"galleryMessage");
  }
    if (role === "staff") {
    startTypewriter(messages.staff,"galleryMessage");
  }
}

function startTypewriter(text, elementId) {

  if (!text) return;   // 🔥 prevents crash if text is missing

  const element = document.getElementById(elementId);
  element.textContent = "";
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, 35);
    }
  }
  type();
}

function openInvitation() {
  document.getElementById("gallerySection").classList.add("hidden");
  document.getElementById("invitationPage").classList.remove("hidden");

  const left = document.querySelector(".left-curtain");
  const right = document.querySelector(".right-curtain");

  setTimeout(() => {
    left.style.transform = "translateX(-100%)";
    right.style.transform = "translateX(100%)";
  }, 300);

  setTimeout(() => {
    startTypewriter(messages.puFinal, "finalMessage");
  }, 2000);
}

function goBack() {
  document.getElementById("gallerySection").classList.add("hidden");
  document.getElementById("roleSelect").classList.remove("hidden");
}

function openFull(img) {
  document.getElementById("fullImg").src = img.src;
  document.getElementById("full").style.display = "block";
}

function closeFull() {
  document.getElementById("full").style.display = "none";
}
