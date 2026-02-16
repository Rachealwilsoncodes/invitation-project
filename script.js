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
   pu: [
"p1.png.jpg","p2.png.JPG","p3.png.JPG","p4.png.jpg","p5.png.jpg","p6.png.jpg","p7.png.jpg","p8.png.jpg","p9.png.jpg","p10.png.jpeg",
"p11.png.jpeg","p12.png.jpeg","p13.png.jpeg","p14.png.jpeg","p15.png.jpeg","p16.png.jpeg","p17.png.jpeg","p18.png.jpeg","p19.png.jpeg","p20.png.jpeg",
"p21.png.jpeg","p22.png.jpeg","p23.png.jpeg","p24.png.jpeg","p25.png.jpeg","p26.png.jpeg","p27.png.jpeg","p28.png.jpeg","p29.png.jpeg","p30.png.jpeg",
"p31.png.jpeg","p32.png.jpeg","p33.png.jpeg"
],

degree: [
"d1.png.JPG","d2.png.JPG","d3.png.JPG","d4.png.JPG","d5.png.jpeg","d6.png.jpeg","d7.png.jpeg","d8.png.jpeg","d9.png.jpeg","d10.png.jpeg",
"d11.png.jpeg","d12.png.jpeg","d13.png.jpeg","d14.png.jpeg","d15.png.jpeg","d16.png.jpeg","d17.png.jpeg","d18.png.jpeg","d19.png.jpeg","d20.png.jpeg",
"d21.png.jpeg","d22.png.jpeg","d23.png.jpeg"
], staff: ["staff1.jpg", "staff2.jpg"]};

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
