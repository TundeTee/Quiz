const wrapper = document.querySelector(".trendingwrapper");
const box = document.querySelectorAll(".box")

box.forEach((boxs,index)=>{
 boxs.addEventListener("click", () => {
  wrapper.style.transform=`translateX(${-100 * index}vw)`;
 });
});

const wordDisplay = document.querySelector('.word-overlay');
const originalHTML = wordDisplay.innerHTML;

wordDisplay.addEventListener('click', () => {
  if (wordDisplay.innerHTML === originalHTML) {
    wordDisplay.innerHTML = `<marquee loop="-1" scrollamount="5">Add <sup>1000</sup> to cart.... Our Odogwu</marquee>`;
  } else {
    wordDisplay.innerHTML = originalHTML;
  }
});

const picture = document.querySelector('.trendingwrapper');

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-bar');
const cancel = document.querySelector('.cancel');
if(menu){
 menu.addEventListener("click",()=> {
  nav.classList.add('active');
 });

}
if(cancel){
 cancel.addEventListener("click",()=> {
  nav.classList.remove('active');
 });
}