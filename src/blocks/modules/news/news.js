const chunks = document.querySelectorAll(".news__chunk");
const moreNewsBtn = document.querySelector(".news__more-btn");

let newsPage = 0;
const handleNews = (event) => {
    const newsArr = Array.from(chunks);
    newsPage++;
    newsArr[newsPage].classList.add("news__chunk--active");
    if (!newsArr[newsPage + 1]) event.target.style.display = "none";
};

moreNewsBtn.addEventListener("click", handleNews);
