const wrap = document.querySelector(".embla");
const viewPort = wrap.querySelector(".embla__viewport");
const dots = document.querySelector(".embla__dots");
const embla = EmblaCarousel(viewPort, { loop: false });
const dotsArray = generateDotBtns(dots, embla);
const setSelectedDotBtn = selectDotBtn(dotsArray, embla);
setupDotBtns(dotsArray, embla);
embla.on("select", setSelectedDotBtn);
embla.on("init", setSelectedDotBtn);

function setupDotBtns(dotsArray, embla) {
    dotsArray.forEach((dotNode, i) => {
        dotNode.addEventListener("click", () => embla.scrollTo(i), false);
    });
};

function generateDotBtns(dots, embla) {
    const template = document.getElementById("embla-dot-template").innerHTML;
    dots.innerHTML = embla.scrollSnapList().reduce(acc => acc + template, "");
    return [].slice.call(dots.querySelectorAll(".embla__dot"));
};

function selectDotBtn(dotsArray, embla) {
    return () => {
        const previous = embla.previousScrollSnap();
        const selected = embla.selectedScrollSnap();
        dotsArray[previous].classList.remove("is-selected");
        dotsArray[selected].classList.add("is-selected");
    }
};
