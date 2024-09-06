let navButton = document.getElementById('bars')
let navList = document.querySelector('.navbar .list')
bars.addEventListener('click' ,function(){
    navList.classList.toggle('slide')
})

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");


    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "next-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
}
window.addEventListener("load", initSlider);
