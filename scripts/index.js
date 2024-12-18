document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".w320-images__item");
    const btn = document.querySelector(".w320-images__btn");

    let currentIndex = 1;

    function showNextBlock () {
        if (currentIndex < items.length) {
            items[currentIndex].style.display = "block";
            currentIndex++;
        }

        if (currentIndex === items.length) {
            btn.style.disabled = true;
        }
    }

    items.forEach((item, index) => {
        if (index !== 0) {
          item.style.display = "none"; 
        }
    });

     btn.addEventListener("click", showNextBlock);
});