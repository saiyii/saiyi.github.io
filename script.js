document.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector(".intro");
    const content = document.querySelector(".content");

    intro.addEventListener("click", () => {
        intro.style.opacity = "0";
        setTimeout(() => {
            intro.style.display = "none";
            content.style.display = "block";
            setTimeout(() => {
                content.style.opacity = "1";
            }, 100);
        }, 1000);
    });
});
