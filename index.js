const containerNews = document.querySelector(".news-p");
const containerLastNews = document.querySelector(".last-news-box")
const buttonLoad = document.querySelector(".btn-load") 
const categoriesContainer =  document.querySelector(".categories")
const categoryList = document.querySelectorAll(".category")
const labelSeeLater = document.querySelector(".see-later-label")
const seeLaterMenu = document.querySelector(".fav-news-container")
const menuBtn = document.querySelector(".toggle-menu")
const navBarList = document.querySelector(".nav-list")
const heroNewsVideo = document.querySelector(".news-info-box")
const title = document.querySelector(".hero-title") 
const paragraph = document.querySelector(".hero-paragraph")
const video = document.querySelector(".videoChange")
const nextBtn = document.querySelector(".next")
const backBtn = document.querySelector(".back")

const createNewsTemplate = (news) => {
    let {id, newsImg, title, footer, category} = news;

    return `
    <div class="news-box">
    <img src=${newsImg}>
    <div class="news-box-info">
        <h4>${title}</h4>
        <p>${footer}</p>
            <div class="news-options">
                <button class="btn btn-see-more btn-news">Ver más</button>
                <button 
                    class="btn btn-add-notice btn-news"
                    data-id="${id}" 
                    data-title=${title} 
                    data-newsImg=${newsImg} 
                    data-footer=${category}>
                        +
                    </button>    
            </div>
    </div>
</div>
    `;
};

const templateLastNews = (lastNews) => {
    let {id, newsImg, title, category} = lastNews;
    return `
    <div class="last-news">
        <img src=${newsImg}>
            <div class="last-news-info">
                <button 
                    class="btn btn-add-notice"
                    data-id="${id}" 
                    data-title=${title} 
                    data-newsImg=${newsImg} 
                    data-footer=${category}>
                        +
                    </button>
                <h4>${title}</h4>
            </div>
    </div>
    `
}

const renderLastNews = (lastNewsList) => {
    containerLastNews.innerHTML=lastNewsList.map(templateLastNews).slice(0, 3).join("")
}

const renderNews = (newsList) => {
    containerNews.innerHTML+=newsList.map(createNewsTemplate).join("");
};

const lastIndex = () => {
    return appState.indexNews === appState.limitNews - 1;
}

const loadNews = () => {
    appState.indexNews += 1
    let {news, indexNews} = appState;
    renderNews(news[indexNews]);
    if (lastIndex()) {
        buttonLoad.classList.add("hidden")
    }
}

const isBtnInactive = (element) => {
    return(
        element.classList.contains("category") && element.classList.contains("active")
    )  
}

const changeBtnState = (selectedCategory) => {
    const categories = [...categoryList]
    categories.forEach((categoryBtn)=>{
        if(categoryBtn.dataset.category !== selectedCategory){
            categoryBtn.classList.remove("active");
            buttonLoad.classList.add("hidden");
            return;
        }
        categoryBtn.classList.add("active");
    })
}

const changeFilter = (btn) => {
    appState.activeFilter = btn.dataset.category
    changeBtnState(appState.activeFilter);
}

const filterNews = () => {
    const filteredNews =  newsData.filter((news) => {
        return news.category === appState.activeFilter;
    })
    renderNews(filteredNews);
}

const applyFilter = ({target}) => {
    if (isBtnInactive(target)){
        return
    }

    changeFilter(target)

    containerNews.innerHTML = "";
    if(appState.activeFilter){
        filterNews();
        appState.indexNews = 0;
        btnHidden();
        return;
    }
    renderNews(appState.news[0]);
}

const toggleSeeLater = () => {
    seeLaterMenu.classList.toggle("open-menu")
    if (navBarList.classList.contains("open-menu")){
        navBarList.classList.remove("open-menu");
        return
    }
}

const toggleNav = () => {
        navBarList.classList.toggle("open-menu")
    if (seeLaterMenu.classList.contains("open-label")){
        seeLaterMenu.classList.remove("open-label");
        return
    }
}

let actualIndex = newsDataVideo[0].videoId;

const changeHero  = () => {
    title.textContent = newsDataVideo[actualIndex].titleVideo
    paragraph.textContent = newsDataVideo[actualIndex].footerVideo 
    video.src = newsDataVideo[actualIndex].newsVideo
    video.load();
}

const backElement = () => {
    actualIndex = (actualIndex -1 + newsDataVideo.length) % newsDataVideo.length;
    changeHero()
}

const nextElement = () => {
    actualIndex = (actualIndex + 1) % newsDataVideo.length;
    changeHero();
}

changeHero();

const init = () => {
    renderNews(appState.news[appState.indexNews]);
    renderLastNews(newsData);
    buttonLoad.addEventListener("click", loadNews);
    categoriesContainer.addEventListener("click", applyFilter);
    labelSeeLater.addEventListener("click", toggleSeeLater);  
    menuBtn.addEventListener("click", toggleNav);
    nextBtn.addEventListener("click", nextElement);
    backBtn.addEventListener("click", backElement);
};

init();