const newsData = [
    {
        id:1,
        newsImg:"./assets/news/1.jpeg",
        identifier: "Intel3Politics",
        title:"Intel tiene un plan para volver a liderar la industria de los chips.",
        footer:"Intel prevé tener preparado el nodo Intel 3 para iniciar la fabricación durante el segundo semestre de este año, así como empezar la producción de chips en el nodo Intel 20A (2 nm) durante la primera mitad de 2024.",
        category:"politics",
    },
    {
        id:2,
        newsImg:"./assets/news/2.jpeg",
        identifier: "EuropaPolitics",
        title:"Europa se prepara para protegerse de China: su plan pasa por elaborar su Estrategia de Seguridad Económica",
        footer:"EEUU no es el único país que mira hacia China con recelo. Europa en conjunto está haciendo lo mismo.",
        category:"politics"
    },
    {
        id:3,
        newsImg:"./assets/news/3.jpeg",
        identifier: "SamsungOLED",
        title:"Samsung OLED S95C, análisis: el del año pasado era muy bueno y este QD-OLED no es mejor. Es mucho mejor",
        footer:"El módulo One Connect le da el impulso que necesita para aferrarse a la gama prémium",
        category:"new-products",
    },
    {
        id:4,
        newsImg:"./assets/news/4.jpeg",
        identifier: "MicronPolitics",
        title:"La estrategia del mayor fabricante de memorias de EEUU refleja lo cara que puede salir la enemistad con China",
        footer:"Micron Technology, el mayor fabricante estadounidense de chips de memoria DRAM, ha confirmado que invertirá 600 millones de dólares en la actualización de la planta de empaquetado de circuitos integrados que tiene en Xian (China).",
        category:"politics",
    },
    {
        id:5,
        newsImg:"./assets/news/5.jpeg",
        identifier: "IntelPolitics",
        title:"Intel recibirá la subvención que ha pedido para su fabrica de chips, aunque no le saldrá gratis.",
        footer:"Esta semana arrancó con un movimiento inesperado: Intel había pedido al Gobierno de Alemania que incrementase la subvención que habían pactado inicialmente para poner en marcha la fábrica de chips de Magdeburgo.",
        category:"politics",
    },
    {
        id:6,
        newsImg:"./assets/news/6.jpg",
        identifier: "LOLEsports",
        title:"League of Legends hace vibrar a DreamHack Valencia",
        footer:"La primera de las dos jornadas de Superliga en DreamHack nos dejó espectaculares duelos, aunque uno de ellos brilló sobre el resto.",
        category:"esports",
    },
    {
        id:7,
        newsImg:"./assets/news/7.jpeg",
        identifier: "ArgentinaEsports",
        title:"Argentina vivió su gran fiesta del CSGO en el Movistar Arena: Bestia campeón y triunfo de Virtus.Pro ante 9z",
        footer:"La escena nacional llenó el Movistar Arena, en un evento inolvidable. El equipo de PapoMC se quedó con la FiReLEAGUE Argentina y se clasificó a las finales en Barcelona.",
        category:"esports",
    },
    {
        id:8,
        newsImg:"./assets/news/8.jpeg",
        identifier: "EEUUPolitics",
        title:"EEUU sigue asfixiando a China: sus nuevas sanciones arremeten contra los centros de supercomputación",
        footer:"En octubre de 2022 el Gobierno de EEUU publicó un documento en el que desarrolla con todo lujo de detalles su estrategia de seguridad nacional, y, como cabe esperar, China ocupa una posición central en ella.",
        category:"politics",
    },
    {
        id:9,
        newsImg:"./assets/news/9.jpeg",
        identifier: "NewPanasonic",
        title:"Los televisores OLED y LED de Panasonic para 2023, explicados: van a pelear armados con los mejores paneles OLED de LG",
        footer:"Esta propuesta incorpora uno de los nuevos paneles MLA equipados con tecnología de microlentes de LG, y, sobre el papel, sobresale por su capacidad máxima de entrega de brillo (1.500 nits en una ventana del 10%).",
        category:"new-products",
    },
    {
        id:10,
        newsImg:"./assets/news/10.jpeg",
        identifier: "ChinaPolitics",
        title:"La tensión con China sube de nivel: Países Bajos planea excluir a los estudiantes chinos de sus carreras tecnológicas",
        footer:"Durante las últimas décadas miles de estudiantes de postgrado chinos han completado su formación en algunas de las mejores universidades de Europa, Estados Unidos o Canadá. ",
        category:"politics",
    },
    {
        id:11,
        newsImg:"./assets/news/11.jpeg",
        identifier: "Intel2Politics",
        title:"La fábrica de Intel en Alemania se complica: la incertidumbre se cierne sobre el plan de Europa para los chips",
        footer:"El 15 de marzo de 2022 llegó una noticia muy esperada. Pat Gelsinger, el director general de Intel, anunció que su nueva megafactoría europea irá a parar a Magdeburgo, una ciudad del noreste de Alemania situada a unos 150 km de Berlín.",
        category:"politics",
    },
    {
        id:12,
        newsImg:"./assets/news/12.jpeg",
        identifier: "NewXboxS",
        title:"Xbox Series S catapulta su disco interno con un nuevo modelo: color negro y el doble de espacio de almacenaje",
        footer:"Xbox Series S catapulta su disco interno con un nuevo modelo: color negro y el doble de espacio de almacenaje.",
        category:"new-products",
    },
];

const newsDataVideo = [
    {
        videoId: 0,
        identifier: "SamsungSsd",
        newsVideo: "./assets/body/ssd-samsung.mp4",
        titleVideo: "Samsung alcanza los 13.000 MB/s con su nuevo SSD con PCIe 5.0: doblando en velocidad a los discos duros que se venden hoy en día",
        footerVideo:"La tecnología PCIe 5.0 ofrece un ancho de banda de hasta 32 GT/s, el doble de PCIe 4.0. Adicionalmente, la eficiencia del nuevo SSD se ha mejorado hasta los 608 MB/s por vatio, lo que supone un 30% de mejoría respecto a los SSD actuales con PCIe 4.0.",
    },
    {
        videoId: 1,
        identifier: "VisionPro",
        newsVideo: "./assets/body/apple-vision-pro.mp4",
        titleVideo: "Apple Vision Pro: la nueva era de Apple arranca con unas bestiales gafas de realidad mixta.",
        footerVideo: "Se acabaron los rumores. Apple ha presentado sus primeras gafas de realidad mixta, dispuesta a iniciar una nueva etapa en la compañía. Tras la apuesta de rivales como Meta con sus Quest Pro, con un ticket final de casi 2.000 euros en España, o rivales como OPPO pugnando por el desarrollo en realidad mixta, Apple inicia una nueva era en su gama de producto con las Apple Vision Pro.",
    },
    {
        videoId: 2,
        identifier: "SamsungS23",
        newsVideo: "./assets/body/s23-ultra.mp4",
        titleVideo: "El Samsung Galaxy S23+ es uno de los mejores teléfonos del mercado y su versión de 512 GB está más barata que nunca en Mi Electro",
        footerVideo: "Con un precio oficial en Mi Electro de 1.329 euros, este Galaxy S23+ cuenta ahora con un descuento de 230 euros que la deja en los actuales 1.099 euros con el envío totalmente gratuito.",
    }
];


const dividerNews = (size) => {

    let newsArray = [];

    for (let i = 0; i < newsData.length; i+=size) {
    
        newsArray.push(newsData.slice(i, i + size));
        
    };

    return newsArray;

}

const appState = {
    news: dividerNews(4),
    indexNews: 0,
    limitNews: dividerNews(4).length,
    activeFilter:null,
};