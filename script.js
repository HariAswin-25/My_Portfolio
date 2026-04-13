// const images = document.querySelectorAll(".img");

// window.addEventListener("scroll", () => {
//   let scrollY = window.scrollY;

//   images.forEach((img, index) => {
//     let speed = (index + 1) * 0.05;
//     img.style.transform += ` translateY(${scrollY * speed}px)`;
//   });
// });


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});