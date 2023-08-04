const containerNews = document.querySelector(".news-p");
const containerLastNews = document.querySelector(".last-news-box");
const buttonLoad = document.querySelector(".btn-load") ;
const categoriesContainer =  document.querySelector(".categories");
const categoryList = document.querySelectorAll(".category");
const labelSeeLater = document.querySelector(".see-later-label");
const seeLaterMenu = document.querySelector(".fav-news-section");
const menuBtn = document.querySelector(".toggle-menu");
const navBarList = document.querySelector(".nav-list");
const heroNewsVideo = document.querySelector(".news-info-box");
const title = document.querySelector(".hero-title") ;
const paragraph = document.querySelector(".hero-paragraph");
const video = document.querySelector(".videoChange");
const nextBtn = document.querySelector(".next");
const backBtn = document.querySelector(".back");
const newsFavContainer = document.querySelector(".fav-news-container");
const showModal = document.querySelector(".modal")
const checkNews = document.querySelector(".checkNews")
const newsCounter = document.querySelector(".see-later-counter")

//ERROR 

let newsFav = JSON.parse(localStorage.getItem("newsFav")) || [];

const dataNewsToLocalStorage = () => {
    localStorage.setItem("newsFav", JSON.stringify(newsFav));
}


const createNewsTemplate = (news) => {
    let {id, newsImg, identifier, footer, category, title} = news;

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
                        data-identifier=${identifier} 
                        data-newsImg=${newsImg} 
                        data-footer=${category}>
                        <i class="fa-regular fa-heart"></i>
                        </button>    
                </div>
        </div>
    </div>
    `;
};

const templateLastNews = (lastNews) => {
    let {id, newsImg, identifier, category, title} = lastNews;
    return `
    <div class="last-news">
        <img src=${newsImg}>
            <div class="last-news-info">
                <button 
                    class="btn btn-add-notice"
                    data-id="${id}" 
                    data-identifier=${identifier} 
                    data-newsImg=${newsImg} 
                    data-footer=${category}>
                        <i class="fa-regular fa-heart"></i>
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
    actualIndex = (actualIndex - 1 + newsDataVideo.length) % newsDataVideo.length;
    changeHero()
}

const nextElement = () => {
    actualIndex = (actualIndex + 1) % newsDataVideo.length;
    changeHero();
}

changeHero()

// NEWS FAV

const renderNewsFav = () => {
    if (!newsFav.length) {
        newsFavContainer.innerHTML = `<p class="pFavElement">No has agregado nada aún</p>`
        return;
    }
    newsFavContainer.innerHTML = newsFav.map(templateFavNews).join("")
}

const createNewsData = (news) => {
    const {id, newsImg, identifier, category, title} = news;
    return {id, newsImg, identifier, category, title};
} 

const templateFavNews = (createNewsData) => {
    const {id, newsImg, identifier, category, title} = createNewsData;
    return `
    <div class="fav-news-box">
            <img src=${newsImg}>
        <div class="fav-news-box-info">
            <h4>${title}</h4>
                <div class="fav-news-options">
                    <button class="btn btn-see-more btn-news">Ver más</button>
                    <button 
                    class="btn nav-btn 
                            btn-remove 
                            data-id=${id} 
                            data-identifier=${identifier}
                            data-category=${category} ">
                            <i class="fa-solid fa-check"></i>
                    </button>    
                </div>
        </div>
    </div>
    `
}

const existingNewFav = (newsId) => {
    return newsFav.find((item) => {
        return item.id === newsId
    })
}

const showSuccesModal = (msg) => {
    showModal.classList.add("active-modal");
    showModal.textContent =msg;
    setTimeout(() => {
        showModal.classList.remove("active-modal")
    }, 1500)
}

const renderNewsFavCounter = () => {
    newsCounter.textContent= newsFav.reduce((acc, val) => {
        return acc + val.quantity
    }, 0)
}

const createFavNews = (news) => {
    newsFav =[
        ...newsFav,
        {
            ...news,
            quantity: 1
        },
    ];
};

const disableBtn = (btn) => {
      if (!newsFav.length){
        btn.classList.add("disabled")
      } else {
        btn.classList.remove("disabled")
      }
}

 const updateFavNews = () => {
    dataNewsToLocalStorage();
    templateFavNews();
    disableBtn(checkNews);
    renderNewsFavCounter();
 }

const addNew = (e) => {
     if(!e.target.classList.contains("btn-news")) {
        return
     }
     const news = createNewsData(e.target.dataset);
     if (existingNewFav(news.id)) {
        showSuccesModal("Esta noticia ya esta en tu lista. 🚀")
     } else {
        createFavNews (news)
        showSuccesModal("Se ha agregado la noticia correctamente. ✅")
     } 

     updateFavNews()
}


const init = () => {
    renderNews(appState.news[appState.indexNews]);
    renderLastNews(newsData);
    buttonLoad.addEventListener("click", loadNews);
    categoriesContainer.addEventListener("click", applyFilter);
    labelSeeLater.addEventListener("click", toggleSeeLater);  
    menuBtn.addEventListener("click", toggleNav);
    nextBtn.addEventListener("click", nextElement);
    backBtn.addEventListener("click", backElement);
    document.addEventListener("DOMContentLoaded", renderNewsFav);
    containerNews.addEventListener("click", addNew);
    disableBtn(checkNews);
    renderNewsFavCounter()
};

init();