const images = [
"p1.png.jpg","p2.png.JPG","p3.png.JPG","p4.png.jpg","p5.png.jpg","p6.png.jpg",
"p7.png.jpg","p8.png.jpg","p9.png.jpg","p10.png.jpeg",
"p11.png.jpeg","p12.png.jpeg","p13.png.jpeg","p14.png.jpeg","p15.png.jpeg",
"p16.png.jpeg","p17.png.jpeg","p18.png.jpeg","p19.png.jpeg","p20.png.jpeg",
"p21.png.jpeg","p22.png.jpeg","p23.png.jpeg","p24.png.jpeg","p25.png.jpeg",
"p26.png.jpeg","p27.png.jpeg","p28.png.jpeg","p29.png.jpeg","p30.png.jpeg",
"p31.png.jpeg","p32.png.jpeg","p33.png.jpeg"
];

const text = `You were never the silent batch —
you filled every corridor with echoes,
every classroom with life,
every ordinary day with something unforgettable.

Yes, you made noise…
but that very noise will now echo inside our hearts forever.

On days when our hearts were heavy,
your laughter lightened us.

Once our students,
forever our echo.

We warmly invite you to the Annual Day celebration.
Come, make some more noise,
create one last beautiful memory,
and let your echoes fill the campus once again.

We’ll be waiting for you.`;


document.addEventListener("DOMContentLoaded", () => {

const gallery = document.getElementById("gallery");
const message = document.getElementById("message");

images.forEach(file=>{
const img=document.createElement("img");
img.src="images/"+file;

img.onclick=()=>openFull(img);

gallery.appendChild(img);
});

typeWriter(text,message);

});


function typeWriter(text,element){

let i=0;

function typing(){
if(i<text.length){
element.textContent+=text.charAt(i);
i++;
setTimeout(typing,30);
}
}

typing();

}


function openFull(img){

const full=document.getElementById("full");
const fullImg=document.getElementById("fullImg");

fullImg.src=img.src;
full.classList.remove("hidden");

full.onclick=()=>full.classList.add("hidden");

}
