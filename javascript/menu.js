const pictureGrid = document.querySelector(".gallery");
const observer = new IntersectionObserver((entries) => {
  pictureGrid.classList.toggle("vertical-fade", entries[0].isIntersecting);
});

observer.observe(pictureGrid);
