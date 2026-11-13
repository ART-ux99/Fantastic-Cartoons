console.log("ayuda");
var novedades = [
    {
        titulo: "Locke & Key al infierno.",
        autor: "Joe Hill(guion)/ Grabriel Rodriguez(ilustraciones)",
        precio: 15.50,
        disponible: true,
        novedad: true,
        imagen: "media/imagenes/Terror1.webp",
        sinopsis: "Tras la Segunda Guerra Mundial, John Locke, un joven destrozado por la muerte de su madre, se suicida y acaba en el Infierno. Diez años después de su muerte su familia empieza a recibir cartas que parecen ser de el. Decidida a salvarlo, su hermana, Mary Locke, baja al Infierno para encontrar su alma desafiando toda clase de pruebas."
    },
    {   
        titulo: "Superman en el planeta Krypton.",
        autor: "John Byrne, Mike Mignola y Jerry Ordway",
        precio: 16.40,
        disponible: true,
        novedad: true,
        imagen: "media/imagenes/Accion1.jpg",
        sinopsis: "Superman regresa al pasado y a su planeta natal, Krypton, por un error en la linea temporal. Una vez allí descubrirá sus origenes y conocerá a personajes tan importantes como Jor-el, el cintífico que intentó salvar Krypton pero nadie escuchó."
    },
    {
       titulo: "Bluer than love.Volumen 4.",
        autor: "Kon Fukami",
        precio: 17.20,
        disponible: true,
        novedad: true,
        imagen: "media/imagenes/Manga1.jpeg",
        sinopsis: "Los clubes de literatura del Instituto Ichinomiya y del Instituto Futaba se unen para redactar una revista conjunta. Sakura, una joven estudiante que forma parte de esto va siempre acompañada de su amiga Takamine, quien acaba animandose a escribir debido a que le ayuda a expresar lo que siente. A medida que transcurre el tiempo Sakura y Takamine empezarán a convertirse en algo más que amigas." 
    },
    {
        titulo: "Los rios del pasado.",
        autor: "Stephen Desberg(guion) y Yannick Corboz(ilustraciones)",
        precio: 18.50,
        disponible: true,
        novedad: true,
        imagen: "media/imagenes/Europeo1.jpg",
        sinopsis: "Linn, una joven y escurridiza ladrona de guante blanco en París recibe el encargo de un hombre misterioso para robar un valioso medallón egipcio vinculado al Dios Atón del que supuestamente no existe ninguna imagen previa. Tras cumplir dicho encargo con facilidad su camino se cruzará con el de Lamia, una misteriosa arqueologa que también anda tras dicha pieza."
    },
    {
        titulo: "La boda de las luciernagas. Volumen 11.",
        autor: "Oreco Tachibana",
        precio: 19.40,
        disponible: false,
        novedad: true,
        imagen: "media/imagenes/Manga2.jpg",
        sinopsis: "Shinpei permanece recluido en el calabozo subterraneo de la residencia Okumura consumido y cegado por los celos debatiendo su mente entre la razón y el deseo de posesión. Mientras tanto, Satoko intenta seguir adelante con los planes de su compromiso junto a Misharu manteniendo la calma a pesar de la tensión y los sentimintos encontrados...pero ¿podrá conseguir ser feliz con su amado frente a los celos de Shinpei?"
    },
    {
        titulo: "Halloween.The Game Comic.",
        autor: "Alan Moore",
        precio: 20.00,
        disponible: true,
        novedad: true,
        imagen: "media/imagenes/Terror2.jpg",
        sinopsis: "Una interesante retrospectiva de la historia de Michael Mayers que se situa en el 30 de octubre de 1978, la noche en que comenzó todo."
    }
    
 ];

var catalogo = [
    {
        titulo: "La gran guia del manga.",
        tipo: "manga",
        precio: 7.00,
        disponible: false,
        imagen: "media/imagenes/Manga3.jpg"
    },
    {
        titulo: "Ekho, mundo espejo.",
        tipo: "europeo",
        precio: 10.30,
        disponible: true,
        imagen: "media/imagenes/Europeo2.png"
    },
    {
        titulo: "The Union.",
        tipo: "superheroes",
        precio: 7.70,
        disponible: true,
        imagen: "media/imagenes/Accion2.jpg"
    },
    {
        titulo: "Creepshow. Game over.",
        tipo: "terror",
        precio: 15.20,
        disponible: true,
        imagen: "media/imagenes/Terror3.jpg"
    },
    {
        titulo: "Luna de miel.",
        tipo: "europeo",
        precio: 14.80,
        disponible: false,
        imagen: "media/imagenes/Europeo3.jpg"
    },
    {
        titulo: "El ultimo detective.",
        tipo: "superheroes",
        precio: 16.50,
        disponible: true,
        imagen: "media/imagenes/Accion3.webp"
    },
    {
        titulo: "Beatiful things.",
        tipo: "manga",
        precio: 19.80,
        disponible: true,
        imagen: "media/imagenes/Manga4.jpg"
    },
    {
        titulo: "The Plot.",
        tipo: "terror",
        precio: 10.50,
        disponible: false,
        imagen: "media/imagenes/Terror4.webp"
    },
    {
        titulo: "After Midnight Skin. Volumen 6.",
        tipo: "manga",
        precio: 20.00,
        disponible: false,
        imagen: "media/imagenes/Manga5.webp"
    },
    {
        titulo: "Un oscuro manto.",
        tipo: "europeo",
        precio: 27.90,
        disponible: true,
        imagen: "media/imagenes/Europeo4.jpg"
    },
    {
        titulo: "Los campeones.",
        tipo: "superheroes",
        precio: 17.00,
        disponible: false,
        imagen: "media/imagenes/Accion4.jpg"
    },
    {
        titulo: "Explosión juvenil. Volumen 2.",
        tipo: "manga",
        precio: 28.00,
        disponible: false,
        imagen: "media/imagenes/Manga6.jpg"
    },
    {
        titulo: "Los muertos vivientes.",
        tipo: "terror",
        precio: 15.40,
        disponible: true,
        imagen: "media/imagenes/Terror5.webp"
    },
    {
        titulo: "Soy su silencio.",
        tipo: "europeo",
        precio: 30.00,
        disponible: true,
        imagen: "media/imagenes/Europeo5.jpg"
    },
    {
        titulo: "La noche del Gul.",
        tipo: "terror",
        precio: 25.40,
        disponible: true,
        imagen: "media/imagenes/Terror6.jpg"
    },
];

var merchandaising = [
    {
        titulo: "Taza de Batman.",
        precio: 3.00,
        disponible: true,
        novedad: true,
        imagen: "media/imagenes/Merchandaising.jpeg"
    },
    {
        titulo: "Llavero de Obelix.",
        precio: 3.40,
        disponible: false,
        novedad: true,
        imagen: "media/imagenes/Merchandising2.jpg"
    },
    {
        titulo: "Peluche de Alien.",
        precio: 15.60,
        disponible: true,
        novedad: true,
        imagen: "media/imagenes/Merchandising3.jpg"
    },
    {
        titulo: "Camiseta de Haikyu.",
        precio: 10.20,
        disponible: true,
        novedad: true,
        imagen: "media/imagenes/Merchandaising4.jpg"
    },
    {
        titulo: "Figura de Harley Queen y el Joker.",
        precio: 6.00,
        disponible: false,
        novedad: true,
        imagen: "media/imagenes/Merchandaising5.jpg"
    },
    {
        titulo: "Zapatillas Marvel.",
        precio: 20.00,
        disponible: false,
        novedad: true,
        imagen: "media/imagenes/Merchandaising6.jpg"
    },
];

function formatoPrecio(precio) {
    return precio.toFixed(2).replace(".", ",") + "€";
};

function crearTarjeta(producto, indice, conVerMas, clase) {
    var html = '<article class="tarjeta ' + clase + '">';

    html += '<div class="tarjeta-img">';                                    
    html += '<img src="' + producto.imagen + '" alt="' + producto.titulo + '" loading="lazy">';
    if (producto.novedad) {
        html += '<span class="badge">Novedad</span>';
    }
    html += '</div>';

    html += '<h3 class="tarjeta-titulo">' + producto.titulo + '</h3>';     

    if (producto.disponible) {
        html += '<p class="estado disponible">Disponible</p>';             
    } else {
        html += '<p class="estado agotado">Agotado</p>';                   
    }

    if (conVerMas) {
        html += '<button type="button" class="btn btn-vermas" data-indice="' + indice + '">Ver más</button>';  
    }

    var desactivado = producto.disponible ? "" : " disabled";
    html += '<button type="button" class="btn btn-carrito" aria-label="Añadir ' + producto.titulo + ' al carrito"' + desactivado + '>'; 
    html += '<i data-feather="shopping-cart"></i></button>';

    html += '<p class="tarjeta-precio">' + formatoPrecio(producto.precio) + '</p>';  
    html += '</article>';

    return html;
};

//SECCION NOVEDADES

function pintarNovedades() {
    var html = "";
    for(var i = 0; i < novedades.length; i++) {
        html += crearTarjeta(novedades[i], i, true, "");
    }
    document.querySelector("#nov-contenido").innerHTML = html;
    feather.replace();
};

//FILTROS CATALOGO

var filtroActivo = "todos";
var catalogoMin = 0;
var catalogoMax= 100;
var textoBusqueda = "";

function pintarCatalogo() {
    var html = "";
    for(var i = 0; i < catalogo.length; i++) {
        var comic = catalogo[i];
        var cumpleTipo = filtroActivo === "todos" || comic.tipo === filtroActivo;
        var cumplePrecio = comic.precio >= catalogoMin && comic.precio <= catalogoMax;
        var cumpleTexto = comic.titulo.toLowerCase().indexOf(textoBusqueda) !== -1;

        if(cumpleTipo && cumplePrecio && cumpleTexto) {
            html += crearTarjeta(comic, i, false, "");
        }
    };

    if(html === "") {
        html = '<p class="galeria-vacio">¡Ups! No hay cómics con estos filtros.</p>';
    };

    document.querySelector("#catalogo .galeria").innerHTML = html;
    feather.replace();

};

var filtros = document.querySelectorAll(".filtro_btn");

for(var k = 0; k < filtros.length; k++) {
    filtros[k].addEventListener("click", function() {
        filtroActivo = this.getAttribute("data-filtro");
        for(var j = 0; j < filtros.length; j++) {
            filtros [j].classList.remove("is-active");
        }
        this.classList.add("is-active");
        pintarCatalogo();
    });
};

//BUSCADOR

var buscador = document.querySelector(".buscador");
var buscadorInput = document.querySelector(".busquedas");

buscador.addEventListener("submit", function(evento) {
    evento.preventDefault();
    textoBusqueda = buscadorInput.value.trim().toLowerCase();
    pintarCatalogo();
    document.querySelector("#catalogo").scrollIntoView();
});

buscadorInput.addEventListener("input", function() {
    if(this.value === "") {
        textoBusqueda = "";
        pintarCatalogo();
    }
});

//FILTRO PRECIO

var merchMin = 0;
var merchMax = 100;
function pintarMerch() {
    var html = "";
    for(var i = 0; i < merchandaising.length; i++) {
        var producto = merchandaising[i];
        if(producto.precio >= merchMin && producto.precio <= merchMax) {
            html += crearTarjeta(producto, i, false, "tarjeta-merch");
        }
    }

    if (html === "") {
        html = '<p class="galeria-vacio">No hay productos en este rango de precio.</p>';
    }

    document.querySelector("#merch-contenido").innerHTML = html;
    feather.replace();
}

function prepararRango(idSeccion, productos, alCambiar){
    var seccion = document.getElementById(idSeccion);
    var inputs = seccion.querySelectorAll(".rango__input");
    var inputMin = inputs[0];
    var inputMax = inputs[1];
    var relleno = seccion.querySelector(".rango-relleno");
    var texto = seccion.querySelector(".precio-texto");
    var limiteMin = productos[0].precio;
    var limiteMax = productos[0].precio;

    for(var i = 1; i < productos.length; i++) {
        if(productos[i].precio < limiteMin) {
            limiteMin = productos[i].precio;
        }
        if(productos[i].precio > limiteMax) {
            limiteMax = productos[i].precio;
        }
    }

    limiteMin = Math.floor(limiteMin);
    limiteMax = Math.ceil(limiteMax);

    var total = limiteMax -limiteMin;
    inputMin.min = limiteMin;
    inputMin.max = limiteMax;
    inputMin.value = limiteMin;
    inputMax.min = limiteMin;
    inputMax.max = limiteMax;
    inputMax.value = limiteMax;

    function actualizar(evento) {
        var min = parseFloat(inputMin.value);
        var max = parseFloat(inputMax.value);
        if(min > max) {
            if(evento && evento.target === inputMin) {
                min = max;
                inputMin.value = min;
            } else {
                max = min;
                inputMax.value = max;
            }
        }
        inputMin.style.zIndex = (min > limiteMax - total * 0.1)? "2" : "1";

        var desde = (min - limiteMin) / total * 100;
        var hasta = (max - limiteMin) / total * 100;
        relleno.style.left = desde + "%";
        relleno.style.width = (hasta - desde) + "%";
        texto.textContent = formatoPrecio(min) + "-" + formatoPrecio(max);

        alCambiar(min, max);
    }
    inputMin.addEventListener("input", actualizar);
    inputMax.addEventListener("input", actualizar);

    actualizar();
}

prepararRango("catalogo", catalogo, function (min, max) {
    catalogoMin = min;
    catalogoMax = max;
    pintarCatalogo();
});

prepararRango("merchandaising", merchandaising, function (min, max) {
    merchMin = min;
    merchMax = max;
    pintarMerch();
});

pintarNovedades();