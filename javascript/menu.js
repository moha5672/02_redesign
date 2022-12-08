const pictureGrid = document.querySelector(".picture__grid");
const observer = new IntersectionObserver((entries) => {
  pictureGrid.classList.toggle("vertical-fade", entries[0].isIntersecting);
});

observer.observe(pictureGrid);
