console.log("ayuda");
var novedades = [
    {
        titulo: "Titulo",
        autor: "Autor",
        precio: 32,
        disponible: true,
        novedad: true,
        imagen: "../media/",
        sinopsis: "Sinopsis"
    },
    {   
        titulo: "Titulo",
        autor: "Autor",
        precio: 32,
        disponible: true,
        novedad: true,
        imagen: "",
        sinopsis: "Sinopsis"
    },
    {
       titulo: "Titulo",
        autor: "Autor",
        precio: 32,
        disponible: true,
        novedad: true,
        imagen: "",
        sinopsis: "Sinopsis" 
    },
    {
        titulo: "Titulo",
        autor: "Autor",
        precio: 32,
        disponible: true,
        novedad: true,
        imagen: "",
        sinopsis: "Sinopsis"
    },
    {
        titulo: "Titulo",
        autor: "Autor",
        precio: 32,
        disponible: true,
        novedad: true,
        imagen: "",
        sinopsis: "Sinopsis"
    },
    {
        titulo: "Titulo",
        autor: "Autor",
        precio: 32,
        disponible: true,
        novedad: true,
        imagen: "",
        sinopsis: "Sinopsis"
    }
    
 ];

var catalogo = [
    {
        titulo: "Titulo",
        tipo: "Manga",
        precio: 27,
        disponible: true,
        img: "../media"
    },
    {
        titulo: "Titulo",
        tipo: "Manga",
        precio: 27,
        disponible: true,
        img: "../media"
    },
    {
        titulo: "Titulo",
        tipo: "Manga",
        precio: 27,
        disponible: true,
        img: "../media"
    },
    {
        titulo: "Titulo",
        tipo: "Manga",
        precio: 27,
        disponible: true,
        img: "../media"
    },
    {
        titulo: "Titulo",
        tipo: "Manga",
        precio: 27,
        disponible: true,
        img: "../media"
    },
    {
        titulo: "Titulo",
        tipo: "Manga",
        precio: 27,
        disponible: true,
        img: "../media"
    },
    {
        titulo: "Titulo",
        tipo: "Manga",
        precio: 27,
        disponible: true,
        img: "../media"
    },
    {
        titulo: "Titulo",
        tipo: "Manga",
        precio: 27,
        disponible: true,
        img: "../media"
    },
    {
        titulo: "Titulo",
        tipo: "Manga",
        precio: 27,
        disponible: true,
        img: "../media"
    },
    {
        titulo: "Titulo",
        tipo: "Manga",
        precio: 27,
        disponible: true,
        img: "../media"
    },
    {
        titulo: "Titulo",
        tipo: "Manga",
        precio: 27,
        disponible: true,
        img: "../media"
    },
    {
        titulo: "Titulo",
        tipo: "Manga",
        precio: 27,
        disponible: true,
        img: "../media"
    },
    {
        titulo: "Titulo",
        tipo: "Manga",
        precio: 27,
        disponible: true,
        img: "../media"
    },
    {
        titulo: "Titulo",
        tipo: "Manga",
        precio: 27,
        disponible: true,
        img: "../media"
    },
    {
        titulo: "Titulo",
        tipo: "Manga",
        precio: 27,
        disponible: true,
        img: "../media"
    },
];

var merchandaising = [
    {
        titulo: "Titulo",
        precio: 16,
        disponible: false,
        novedad: true,
        imagen: "../media"
    },
    {
        titulo: "Titulo",
        precio: 16,
        disponible: false,
        novedad: true,
        imagen: "../media"
    },
    {
        titulo: "Titulo",
        precio: 16,
        disponible: false,
        novedad: true,
        imagen: "../media"
    },
    {
        titulo: "Titulo",
        precio: 16,
        disponible: false,
        novedad: true,
        imagen: "../media"
    },
    {
        titulo: "Titulo",
        precio: 16,
        disponible: false,
        novedad: true,
        imagen: "../media"
    },
    {
        titulo: "Titulo",
        precio: 16,
        disponible: false,
        novedad: true,
        imagen: "../media"
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
};
