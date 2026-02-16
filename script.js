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
   pu: ["p1.png","p2.png","p3.png","p4.png","p5.png","p6.png","p7.png","p8.png","p9.png","p10.png",
"p11.png","p12.png","p13.png","p14.png","p15.png","p16.png","p17.png","p18.png","p19.png","p20.png",
"p21.png","p22.png","p23.png","p24.png","p25.png","p26.png","p27.png","p28.png","p29.png","p30.png",
"p31.png","p32.png","p33.png"], degree: ["d1.png","d2.png","d3.png","d4.png","d5.png","d6.png","d7.png","d8.png","d9.png","d10.png",
"d11.png","d12.png","d13.png","d14.png","d15.png","d16.png","d17.png","d18.png","d19.png","d20.png",
"d21.png","d22.png","d23.png"], staff: ["staff1.jpg", "staff2.jpg"]};

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
