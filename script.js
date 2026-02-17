let clickSound = new Audio("music/click.mp3");

const messages = {
  degree: `To the Degree Batch —
Your journey was calm,
your strength was silent,
but your impact was powerful.

Wishing you success beyond these walls.`,

  puFinal: `You were never the silent batch —
you filled every corridor with echoes,
every classroom with life,
every ordinary day with something unforgettable.

Once our students,
forever our echo.`
};

function startApp() {
  clickSound.play();
  document.getElementById("popup").style.display = "none";
  document.getElementById("roleSelect").classList.remove("hidden");
}

function chooseRole(role) {

  document.getElementById("roleSelect").classList.add("hidden");
  document.getElementById("gallerySection").classList.remove("hidden");

  const touchBtn = document.getElementById("touchBtn");
  const galleryMessage = document.getElementById("galleryMessage");
  galleryMessage.textContent = "";

  // Show Touch Me only for PU
  if (role === "pu") {
    touchBtn.style.display = "block";
  } else {
    touchBtn.style.display = "none";
  }

  // Load Images
  let gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  let images = {
    pu: ["p1.png.jpg","p2.png.JPG"],
    degree: ["d1.png.JPG","d2.png.JPG"],
    staff: ["staff1.jpg","staff2.jpg"]
  };

  images[role].forEach(file => {
    let img = document.createElement("img");
    img.src = "images/" + file;
    img.onclick = () => openFull(img);
    gallery.appendChild(img);
  });

  // Degree auto message
  if (role === "degree") {
    startTypewriter(messages.degree, "galleryMessage");
  }
}

function startTypewriter(text, elementId) {
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
