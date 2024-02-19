function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()


var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})



function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./plane/image00001.png
  ./plane/image00002.png
  ./plane/image00003.png
  ./plane/image00004.png
  ./plane/image00005.png
  ./plane/image00006.png
  ./plane/image00007.png
  ./plane/image00008.png
  ./plane/image00009.png
  ./plane/image00010.png
  ./plane/image00011.png
  ./plane/image00012.png
  ./plane/image00013.png
  ./plane/image00014.png
  ./plane/image00015.png
  ./plane/image00016.png
  ./plane/image00017.png
  ./plane/image00018.png
  ./plane/image00019.png
  ./plane/image00020.png
  ./plane/image00021.png
  ./plane/image00022.png
  ./plane/image00023.png
  ./plane/image00024.png
  ./plane/image00025.png
  ./plane/image00026.png
  ./plane/image00027.png
  ./plane/image00028.png
  ./plane/image00029.png
  ./plane/image00030.png
  ./plane/image00031.png
  ./plane/image00032.png
  ./plane/image00033.png
  ./plane/image00034.png
  ./plane/image00035.png
  ./plane/image00036.png
  ./plane/image00037.png
  ./plane/image00038.png
  ./plane/image00039.png
  ./plane/image00040.png
  ./plane/image00041.png
  ./plane/image00042.png
  ./plane/image00043.png
  ./plane/image00044.png
  ./plane/image00045.png
  ./plane/image00046.png
  ./plane/image00047.png
  ./plane/image00048.png
  ./plane/image00049.png
  ./plane/image00050.png
  ./plane/image00051.png
  ./plane/image00052.png
  ./plane/image00053.png
  ./plane/image00054.png
  ./plane/image00055.png
  ./plane/image00056.png
  ./plane/image00057.png
  ./plane/image00058.png
  ./plane/image00059.png
  ./plane/image00060.png
  ./plane/image00061.png
  ./plane/image00062.png
  ./plane/image00063.png
  ./plane/image00064.png
  ./plane/image00065.png
  ./plane/image00066.png
  ./plane/image00067.png
  ./plane/image00068.png
  ./plane/image00069.png
  ./plane/image00070.png
  ./plane/image00071.png
  ./plane/image00072.png
  ./plane/image00073.png
  ./plane/image00074.png
  ./plane/image00075.png
  ./plane/image00076.png
  ./plane/image00077.png
  ./plane/image00078.png
  ./plane/image00079.png
  ./plane/image00080.png
  ./plane/image00081.png
  ./plane/image00082.png
  ./plane/image00083.png
  ./plane/image00084.png
  ./plane/image00085.png
  ./plane/image00086.png
  ./plane/image00087.png
  ./plane/image00088.png
  ./plane/image00089.png
  ./plane/image00090.png
  ./plane/image00091.png
  ./plane/image00092.png
  ./plane/image00093.png
  ./plane/image00094.png
  ./plane/image00095.png
  ./plane/image00096.png
  ./plane/image00097.png
  ./plane/image00098.png
  ./plane/image00099.png
  ./plane/image00100.png
  ./plane/image00101.png
  ./plane/image00102.png
  ./plane/image00103.png
  ./plane/image00104.png
  ./plane/image00105.png
  ./plane/image00106.png
  ./plane/image00107.png
  ./plane/image00108.png
  ./plane/image00109.png
  ./plane/image00110.png
  ./plane/image00111.png
  ./plane/image00112.png
  ./plane/image00113.png
  ./plane/image00114.png
  ./plane/image00115.png
  ./plane/image00116.png
  ./plane/image00117.png
  ./plane/image00118.png
  ./plane/image00119.png
  ./plane/image00120.png
  ./plane/image00121.png
  ./plane/image00122.png
  ./plane/image00123.png
  ./plane/image00124.png
  ./plane/image00125.png
  ./plane/image00126.png
  ./plane/image00127.png
  ./plane/image00128.png
  ./plane/image00129.png
  ./plane/image00130.png
  ./plane/image00131.png
  ./plane/image00132.png
  ./plane/image00133.png
  ./plane/image00134.png
  ./plane/image00135.png
  ./plane/image00136.png
  ./plane/image00137.png
  ./plane/image00138.png
  ./plane/image00139.png
  ./plane/image00140.png
  ./plane/image00141.png
  ./plane/image00142.png
  ./plane/image00143.png
  ./plane/image00144.png
  ./plane/image00145.png
  ./plane/image00146.png
  ./plane/image00147.png
  ./plane/image00148.png
  ./plane/image00149.png
  ./plane/image00150.png
  ./plane/image00151.png
  ./plane/image00152.png
  ./plane/image00153.png
  ./plane/image00154.png
  ./plane/image00155.png
  ./plane/image00156.png
  ./plane/image00157.png
  ./plane/image00158.png
  ./plane/image00159.png
  ./plane/image00160.png
  ./plane/image00161.png
  ./plane/image00162.png
  ./plane/image00163.png
  ./plane/image00164.png
  ./plane/image00165.png
  ./plane/image00166.png
  ./plane/image00167.png
  ./plane/image00168.png
  ./plane/image00169.png
  ./plane/image00170.png
  ./plane/image00171.png
  ./plane/image00172.png
  ./plane/image00173.png
  ./plane/image00174.png
  ./plane/image00175.png
  ./plane/image00176.png
  ./plane/image00177.png
  ./plane/image00178.png
  ./plane/image00179.png
  ./plane/image00180.png
  ./plane/image00181.png
  ./plane/image00182.png
  ./plane/image00183.png
  ./plane/image00184.png
  ./plane/image00185.png
  ./plane/image00186.png
  ./plane/image00187.png
  ./plane/image00188.png
  ./plane/image00189.png
  ./plane/image00190.png
  ./plane/image00191.png
  ./plane/image00192.png
  ./plane/image00193.png
  ./plane/image00194.png
  ./plane/image00195.png
  ./plane/image00196.png
  ./plane/image00197.png
  ./plane/image00198.png
  ./plane/image00199.png
  ./plane/image00200.png
  ./plane/image00201.png
  ./plane/image00202.png
  ./plane/image00203.png
  ./plane/image00204.png
  ./plane/image00205.png
  ./plane/image00206.png
  ./plane/image00207.png
  ./plane/image00208.png
  ./plane/image00209.png
  ./plane/image00210.png
  ./plane/image00211.png
  ./plane/image00212.png
  ./plane/image00213.png
  ./plane/image00214.png
  ./plane/image00215.png
  ./plane/image00216.png
  ./plane/image00217.png
  ./plane/image00218.png
  ./plane/image00219.png
  ./plane/image00220.png
  ./plane/image00221.png
  ./plane/image00222.png
  ./plane/image00223.png
  ./plane/image00224.png
  ./plane/image00225.png
  ./plane/image00226.png
  ./plane/image00227.png
  ./plane/image00228.png
  ./plane/image00229.png
  ./plane/image00230.png
  ./plane/image00231.png
  ./plane/image00232.png
  ./plane/image00233.png
  ./plane/image00234.png
  ./plane/image00235.png
  ./plane/image00236.png

  
       
 `;
  return data.split("\n")[index];
}

const frameCount = 236;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()






var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})







function canvas1(){
  const canvas = document.querySelector("#page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./metaverse/image00151.png
./metaverse/image00152.png
./metaverse/image00153.png
./metaverse/image00154.png
./metaverse/image00155.png
./metaverse/image00156.png
./metaverse/image00157.png
./metaverse/image00158.png
./metaverse/image00159.png
./metaverse/image00160.png
./metaverse/image00161.png
./metaverse/image00162.png
./metaverse/image00163.png
./metaverse/image00164.png
./metaverse/image00165.png
./metaverse/image00166.png
./metaverse/image00167.png
./metaverse/image00168.png
./metaverse/image00169.png
./metaverse/image00170.png
./metaverse/image00171.png
./metaverse/image00172.png
./metaverse/image00173.png
./metaverse/image00174.png
./metaverse/image00175.png
./metaverse/image00176.png
./metaverse/image00177.png
./metaverse/image00178.png
./metaverse/image00179.png
./metaverse/image00180.png
./metaverse/image00181.png
./metaverse/image00182.png
./metaverse/image00183.png
./metaverse/image00184.png
./metaverse/image00185.png
./metaverse/image00186.png
./metaverse/image00187.png
./metaverse/image00188.png
./metaverse/image00189.png
./metaverse/image00190.png
./metaverse/image00191.png
./metaverse/image00192.png
./metaverse/image00193.png
./metaverse/image00194.png
./metaverse/image00195.png
./metaverse/image00196.png
./metaverse/image00197.png
./metaverse/image00198.png
./metaverse/image00199.png
./metaverse/image00200.png
./metaverse/image00201.png
./metaverse/image00202.png
./metaverse/image00203.png
./metaverse/image00204.png
./metaverse/image00205.png
./metaverse/image00206.png
./metaverse/image00207.png
./metaverse/image00208.png
./metaverse/image00209.png
./metaverse/image00210.png
./metaverse/image00211.png
./metaverse/image00212.png
./metaverse/image00213.png
./metaverse/image00214.png
./metaverse/image00215.png
./metaverse/image00216.png
./metaverse/image00217.png
./metaverse/image00218.png
./metaverse/image00219.png
./metaverse/image00220.png
./metaverse/image00221.png
./metaverse/image00222.png
./metaverse/image00223.png
./metaverse/image00224.png
./metaverse/image00225.png
./metaverse/image00226.png
./metaverse/image00227.png
./metaverse/image00228.png
./metaverse/image00229.png
./metaverse/image00230.png
./metaverse/image00231.png
./metaverse/image00232.png
./metaverse/image00233.png
./metaverse/image00234.png
./metaverse/image00235.png
./metaverse/image00236.png
./metaverse/image00237.png
./metaverse/image00238.png
./metaverse/image00239.png
./metaverse/image00240.png
./metaverse/image00241.png
./metaverse/image00242.png
./metaverse/image00243.png
./metaverse/image00244.png
./metaverse/image00245.png
./metaverse/image00246.png
./metaverse/image00247.png
./metaverse/image00248.png
./metaverse/image00249.png
./metaverse/image00250.png
./metaverse/image00251.png
./metaverse/image00252.png
./metaverse/image00253.png
./metaverse/image00254.png
./metaverse/image00255.png
./metaverse/image00256.png
./metaverse/image00257.png
./metaverse/image00258.png
./metaverse/image00259.png
./metaverse/image00260.png
./metaverse/image00261.png
./metaverse/image00262.png
./metaverse/image00263.png
./metaverse/image00264.png
./metaverse/image00265.png
./metaverse/image00266.png
./metaverse/image00267.png
./metaverse/image00268.png
./metaverse/image00269.png
./metaverse/image00270.png
./metaverse/image00271.png
./metaverse/image00272.png
./metaverse/image00273.png
`;
return data.split("\n")[index];
}

const frameCount = 123;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page5`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page5",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas1()




var clutter = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span",{
  scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})






function canvas2(){
  const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `

https://thisismagma.com/assets/home/lore/seq/1.webp?2
https://thisismagma.com/assets/home/lore/seq/2.webp?2
https://thisismagma.com/assets/home/lore/seq/3.webp?2
https://thisismagma.com/assets/home/lore/seq/4.webp?2
https://thisismagma.com/assets/home/lore/seq/5.webp?2
https://thisismagma.com/assets/home/lore/seq/6.webp?2
https://thisismagma.com/assets/home/lore/seq/7.webp?2
https://thisismagma.com/assets/home/lore/seq/8.webp?2
https://thisismagma.com/assets/home/lore/seq/9.webp?2
https://thisismagma.com/assets/home/lore/seq/10.webp?2
https://thisismagma.com/assets/home/lore/seq/11.webp?2
https://thisismagma.com/assets/home/lore/seq/12.webp?2
https://thisismagma.com/assets/home/lore/seq/13.webp?2
https://thisismagma.com/assets/home/lore/seq/14.webp?2
https://thisismagma.com/assets/home/lore/seq/15.webp?2
https://thisismagma.com/assets/home/lore/seq/16.webp?2
https://thisismagma.com/assets/home/lore/seq/17.webp?2
https://thisismagma.com/assets/home/lore/seq/18.webp?2
https://thisismagma.com/assets/home/lore/seq/19.webp?2
https://thisismagma.com/assets/home/lore/seq/20.webp?2
https://thisismagma.com/assets/home/lore/seq/21.webp?2
https://thisismagma.com/assets/home/lore/seq/22.webp?2
https://thisismagma.com/assets/home/lore/seq/23.webp?2
https://thisismagma.com/assets/home/lore/seq/24.webp?2
https://thisismagma.com/assets/home/lore/seq/25.webp?2
https://thisismagma.com/assets/home/lore/seq/26.webp?2
https://thisismagma.com/assets/home/lore/seq/27.webp?2
https://thisismagma.com/assets/home/lore/seq/28.webp?2
https://thisismagma.com/assets/home/lore/seq/29.webp?2
https://thisismagma.com/assets/home/lore/seq/30.webp?2
https://thisismagma.com/assets/home/lore/seq/31.webp?2
https://thisismagma.com/assets/home/lore/seq/32.webp?2
https://thisismagma.com/assets/home/lore/seq/33.webp?2
https://thisismagma.com/assets/home/lore/seq/34.webp?2
https://thisismagma.com/assets/home/lore/seq/35.webp?2
https://thisismagma.com/assets/home/lore/seq/36.webp?2
https://thisismagma.com/assets/home/lore/seq/37.webp?2
https://thisismagma.com/assets/home/lore/seq/38.webp?2
https://thisismagma.com/assets/home/lore/seq/39.webp?2
https://thisismagma.com/assets/home/lore/seq/40.webp?2
https://thisismagma.com/assets/home/lore/seq/41.webp?2
https://thisismagma.com/assets/home/lore/seq/42.webp?2
https://thisismagma.com/assets/home/lore/seq/43.webp?2
https://thisismagma.com/assets/home/lore/seq/44.webp?2
https://thisismagma.com/assets/home/lore/seq/45.webp?2
https://thisismagma.com/assets/home/lore/seq/46.webp?2
https://thisismagma.com/assets/home/lore/seq/47.webp?2
https://thisismagma.com/assets/home/lore/seq/48.webp?2
https://thisismagma.com/assets/home/lore/seq/49.webp?2
https://thisismagma.com/assets/home/lore/seq/50.webp?2
https://thisismagma.com/assets/home/lore/seq/51.webp?2
https://thisismagma.com/assets/home/lore/seq/52.webp?2
https://thisismagma.com/assets/home/lore/seq/53.webp?2
https://thisismagma.com/assets/home/lore/seq/54.webp?2
https://thisismagma.com/assets/home/lore/seq/55.webp?2
https://thisismagma.com/assets/home/lore/seq/56.webp?2
https://thisismagma.com/assets/home/lore/seq/57.webp?2
https://thisismagma.com/assets/home/lore/seq/58.webp?2
https://thisismagma.com/assets/home/lore/seq/59.webp?2
https://thisismagma.com/assets/home/lore/seq/60.webp?2
https://thisismagma.com/assets/home/lore/seq/61.webp?2
https://thisismagma.com/assets/home/lore/seq/62.webp?2
https://thisismagma.com/assets/home/lore/seq/63.webp?2
https://thisismagma.com/assets/home/lore/seq/64.webp?2
https://thisismagma.com/assets/home/lore/seq/65.webp?2
https://thisismagma.com/assets/home/lore/seq/66.webp?2
https://thisismagma.com/assets/home/lore/seq/67.webp?2
https://thisismagma.com/assets/home/lore/seq/68.webp?2
https://thisismagma.com/assets/home/lore/seq/69.webp?2
https://thisismagma.com/assets/home/lore/seq/70.webp?2
https://thisismagma.com/assets/home/lore/seq/71.webp?2
https://thisismagma.com/assets/home/lore/seq/72.webp?2
https://thisismagma.com/assets/home/lore/seq/73.webp?2
https://thisismagma.com/assets/home/lore/seq/74.webp?2
https://thisismagma.com/assets/home/lore/seq/75.webp?2
https://thisismagma.com/assets/home/lore/seq/76.webp?2
https://thisismagma.com/assets/home/lore/seq/77.webp?2
https://thisismagma.com/assets/home/lore/seq/78.webp?2
https://thisismagma.com/assets/home/lore/seq/79.webp?2
https://thisismagma.com/assets/home/lore/seq/80.webp?2
https://thisismagma.com/assets/home/lore/seq/81.webp?2
https://thisismagma.com/assets/home/lore/seq/82.webp?2
https://thisismagma.com/assets/home/lore/seq/83.webp?2
https://thisismagma.com/assets/home/lore/seq/84.webp?2
https://thisismagma.com/assets/home/lore/seq/85.webp?2
https://thisismagma.com/assets/home/lore/seq/86.webp?2
https://thisismagma.com/assets/home/lore/seq/87.webp?2
https://thisismagma.com/assets/home/lore/seq/88.webp?2
https://thisismagma.com/assets/home/lore/seq/89.webp?2
https://thisismagma.com/assets/home/lore/seq/90.webp?2
https://thisismagma.com/assets/home/lore/seq/91.webp?2
https://thisismagma.com/assets/home/lore/seq/92.webp?2
https://thisismagma.com/assets/home/lore/seq/93.webp?2
https://thisismagma.com/assets/home/lore/seq/94.webp?2
https://thisismagma.com/assets/home/lore/seq/95.webp?2
https://thisismagma.com/assets/home/lore/seq/96.webp?2
https://thisismagma.com/assets/home/lore/seq/97.webp?2
https://thisismagma.com/assets/home/lore/seq/98.webp?2
https://thisismagma.com/assets/home/lore/seq/99.webp?2
https://thisismagma.com/assets/home/lore/seq/100.webp?2
https://thisismagma.com/assets/home/lore/seq/101.webp?2
https://thisismagma.com/assets/home/lore/seq/102.webp?2
https://thisismagma.com/assets/home/lore/seq/103.webp?2
https://thisismagma.com/assets/home/lore/seq/104.webp?2
https://thisismagma.com/assets/home/lore/seq/105.webp?2
https://thisismagma.com/assets/home/lore/seq/106.webp?2
https://thisismagma.com/assets/home/lore/seq/107.webp?2
https://thisismagma.com/assets/home/lore/seq/108.webp?2
https://thisismagma.com/assets/home/lore/seq/109.webp?2
https://thisismagma.com/assets/home/lore/seq/110.webp?2
https://thisismagma.com/assets/home/lore/seq/111.webp?2
https://thisismagma.com/assets/home/lore/seq/112.webp?2
https://thisismagma.com/assets/home/lore/seq/113.webp?2
https://thisismagma.com/assets/home/lore/seq/114.webp?2
https://thisismagma.com/assets/home/lore/seq/115.webp?2
https://thisismagma.com/assets/home/lore/seq/116.webp?2
https://thisismagma.com/assets/home/lore/seq/117.webp?2
https://thisismagma.com/assets/home/lore/seq/118.webp?2
https://thisismagma.com/assets/home/lore/seq/119.webp?2
https://thisismagma.com/assets/home/lore/seq/120.webp?2
https://thisismagma.com/assets/home/lore/seq/121.webp?2
https://thisismagma.com/assets/home/lore/seq/122.webp?2
https://thisismagma.com/assets/home/lore/seq/123.webp?2
https://thisismagma.com/assets/home/lore/seq/124.webp?2
https://thisismagma.com/assets/home/lore/seq/125.webp?2
https://thisismagma.com/assets/home/lore/seq/126.webp?2
https://thisismagma.com/assets/home/lore/seq/127.webp?2
https://thisismagma.com/assets/home/lore/seq/128.webp?2
https://thisismagma.com/assets/home/lore/seq/129.webp?2
https://thisismagma.com/assets/home/lore/seq/130.webp?2
https://thisismagma.com/assets/home/lore/seq/131.webp?2
https://thisismagma.com/assets/home/lore/seq/132.webp?2
https://thisismagma.com/assets/home/lore/seq/133.webp?2
https://thisismagma.com/assets/home/lore/seq/134.webp?2
https://thisismagma.com/assets/home/lore/seq/135.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2

`;
return data.split("\n")[index];
}

const frameCount = 136;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page7`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page7",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas2()



gsap.to(".page7-cir",{
  scrollTrigger:{
    trigger:`.page7-cir`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  scale:1.5
})



gsap.to(".page7-cir-inner",{
  scrollTrigger:{
    trigger:`.page7-cir-inner`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  backgroundColor : `#0a3bce91`,
})

        function addToWallet() {
           

            web3.currentProvider.sendAsync({
              method: 'wallet_watchAsset',
              params: {
                  'type': 'ERC20',
                  'options': {
                      'address': '0xFbDCc7D3C5E7c0B9cc59397B67eC514dEe45CfE9',
                      'symbol': 'SYB',
                      'decimals': '18',
                      'image': src='https://syberium.net/images/kopl.png',
                  },
              },
              id: Math.round(Math.random() * 100000)
          }, function (err, data) {
              if (!err) {
                  if (data.result) {
                      console.log('Token added');
                      Swal.fire({
 title: 'Syberium Added',
 icon: 'success',
 html: 'Syberium added to your wallet.',
 showCloseButton: true,
 showCancelButton: true,
 focusConfirm: false,
 reverseButtons: true,
 focusCancel: true,
 cancelButtonText: 'Exit',
 })
                  } else {
                      console.log(data);
                      console.log('Some error');
                  }
              } else {
                  console.log(err.message);
              }
          });
 }

    function copyLink() {

        var referralInput = document.getElementById("address-syb");

        referralInput.select();
        referralInput.setSelectionRange(0, 99999);

        document.execCommand("copy");

        referralInput.setSelectionRange(0, 0);

        Swal.fire("Link copied to clipboard!");
    }
