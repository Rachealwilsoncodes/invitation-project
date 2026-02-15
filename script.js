let clickSound = new Audio("music/click.mp3");

function startApp() {
  clickSound.play();
  document.getElementById("popup").style.display = "none";
  document.getElementById("roleSelect").classList.remove("hidden");
}

function chooseRole(role) {
  clickSound.play();

  document.getElementById("roleSelect").classList.add("hidden");
  document.getElementById("invitation").classList.remove("hidden");

  // 🎵 Role Based Music
  let music = {
    pu: "music/pu.mp3",
    degree: "music/degree.mp3",
    staff: "music/staff.mp3"
  };

  let bgm = new Audio(music[role]);
  bgm.loop = true;
  bgm.play();

  // 🖼 Load Images Based on Role
  let gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  let images = {
    pu: ["pu1.jpg", "pu2.jpg", "pu3.jpg"],
    degree: ["degree1.jpg", "degree2.jpg"],
    staff: ["staff1.jpg", "staff2.jpg"]
  };

  images[role].forEach(file => {
    let img = document.createElement("img");
    img.src = "images/" + file;
    img.onclick = () => openFull(img);
    gallery.appendChild(img);
  });

  // 📲 QR Code
  new QRCode(document.getElementById("qrcode"), {
    text: window.location.href,
    width: 160,
    height: 160
  });
}

function openFull(img) {
  document.getElementById("fullImg").src = img.src;
  document.getElementById("full").style.display = "block";
}

function closeFull() {
  document.getElementById("full").style.display = "none";
}

function addComment() {
  let name = document.getElementById("name").value;
  let text = document.getElementById("comment").value;

  if (!name || !text) return;

  let div = document.createElement("div");
  div.innerHTML = `<b>${name}</b>: ${text}`;
  document.getElementById("commentList").appendChild(div);

  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
}
