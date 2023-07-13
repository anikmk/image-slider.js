const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
const arrowIcon = document.querySelectorAll(".wrapper i");


let isDragStart=false,prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcon.forEach(icon => {
        icon.addEventListener("click", ()=>{
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        })
})
const dragStart = (e)=>{
    //updating global variable
    isDragStart=true;
    prevPageX=e.pageX
    prevScrollLeft=carousel.scrollLeft
}
const dragging = (e)=>{
    if(!isDragStart) return;
    e.preventDefault();
    let possitionDff = e.pageX - prevPageX
    carousel.scrollLeft= prevScrollLeft - possitionDff
}
const dragStop = ()=>{
    isDragStart=false
}
carousel.addEventListener("mousemove",dragging)//first Listener
carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mouseup",dragStop)