//Selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

//Toggling navbar
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

//Filtering images
window.onload = () => {
  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name");
        if (filterImges == filterName || filterName == "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  };
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)");
  }
};

// Applying Lighbox functionality
const lightbox = document.querySelector(".lightbox");
const previewImg = lightbox.querySelector("img");
const closeIcon = lightbox.querySelector(".icon");
const shadow = document.querySelector(".shadow");

const preview = (element) => {
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src;
  previewImg.src = selectedPrevImg;
  lightbox.classList.add("show");
  shadow.classList.add("show");

  // Adding an event listener to the shadow element to close the lightbox
  shadow.addEventListener("click", () => {
    closeLightbox();
  });

  closeIcon.onclick = () => {
    closeLightbox();
  };
};

// Applying closing Lightbox closing option
const closeLightbox = () => {
  lightbox.classList.remove("show");
  shadow.classList.remove("show");
  document.querySelector("body").style.overflow = "auto";
};
