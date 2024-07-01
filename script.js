import {Canvas, Filtre, Enfosquir, Grisos, Negatiu, FlipHoritzontal} from "./clases.js";
window.onload = function() {

    let select_img1 = false; let select_img2 = false; let select_img3 = false;
    let select_img4 = false; let select_img5 = false; let select_img6 = false;

    let body = document.getElementById("body");

    let header = document.createElement("header");
    body.appendChild(header);
    let btn_div = document.createElement("div");
    header.appendChild(btn_div);
    /*let btn1 = document.createElement("button"); // OSCURECER
    btn1.setAttribute("id","btn1");
    btn1.setAttribute("class","btn");
    btn_div.appendChild(btn1);*/
    let btn2 = document.createElement("button"); // MODO BLANCO NEGRO
    btn2.setAttribute("id","btn2");
    btn2.setAttribute("class","btn");
    btn2.setAttribute("value","grayscale");
    btn_div.appendChild(btn2);
    let btn3 = document.createElement("button"); // INVERTIR COLOR
    btn3.setAttribute("id","btn3");
    btn3.setAttribute("class","btn");
    btn_div.appendChild(btn3);
    let btn4 = document.createElement("button"); // INVERTIR IMAGEN (MODO ESPEJO)
    btn4.setAttribute("id","btn4");
    btn4.setAttribute("class","btn");
    btn_div.appendChild(btn4);
    let btn5 = document.createElement("button"); // BORRAR CANVAS (LOS 2 CANVAS)
    btn5.setAttribute("id","btn5");
    btn5.setAttribute("class","btn");
    btn_div.appendChild(btn5);
    let btn6 = document.createElement("button"); // DESCARGAR
    btn6.setAttribute("id","btn6");
    btn6.setAttribute("class","btn");
    btn_div.appendChild(btn6);

    let text = document.createElement("p");
    text.innerText = "Bienvenido, primero selecciona una imagen y aplica un filtro";
    header.appendChild(text);

    let main = document.createElement("main");
    main.setAttribute("id","main");
    body.appendChild(main);

    let footer = document.createElement("footer");
    footer.setAttribute("id","footer");
    body.appendChild(footer);

    let img1 = document.createElement("img");
    let img1_src = "img/tvr.jpeg";
    img1.setAttribute("id","img");
    img1.setAttribute("src",img1_src);
    footer.appendChild(img1);
    img1.addEventListener("click",() => {
        cambiaImagen(img1_src);
        select_img1 = true; select_img2 = false; select_img3 = false;
        select_img4 = false; select_img5 = false; select_img6 = false;
    });

    let img2 = document.createElement("img");
    let img2_src = "img/Xpeng_P7.jpeg";
    img2.setAttribute("id","img");
    img2.setAttribute("src",img2_src);
    footer.appendChild(img2);
    img2.addEventListener("click",() => {
        cambiaImagen(img2_src);
        select_img1 = false; select_img2 = true; select_img3 = false;
        select_img4 = false; select_img5 = false; select_img6 = false;
    });

    let img3 = document.createElement("img");
    let img3_src = "img/Cupra_UrbanRebel.jpeg";
    img3.setAttribute("id","img");
    img3.setAttribute("src",img3_src);
    footer.appendChild(img3);
    img3.addEventListener("click",() => {
        cambiaImagen(img3_src);
        select_img1 = false; select_img2 = false; select_img3 = true;
        select_img4 = false; select_img5 = false; select_img6 = false;
    });

    let img4 = document.createElement("img");
    let img4_src = "img/AventadorJ.jpeg";
    img4.setAttribute("id","img");
    img4.setAttribute("src",img4_src);
    footer.appendChild(img4);
    img4.addEventListener("click",() => {
        cambiaImagen(img4_src);
        select_img1 = false; select_img2 = false; select_img3 = false;
        select_img4 = true; select_img5 = false; select_img6 = false;
    });

    let img5 = document.createElement("img");
    let img5_src = "img/Sentra_Nismo.jpeg";
    img5.setAttribute("id","img");
    img5.setAttribute("src",img5_src);
    footer.appendChild(img5);
    img5.addEventListener("click",() => {
        cambiaImagen(img5_src);
        select_img1 = false; select_img2 = false; select_img3 = false;
        select_img4 = false; select_img5 = true; select_img6 = false;
    });

    let img6 = document.createElement("img");
    let img6_src = "img/599xx_Evo.jpeg";
    img6.setAttribute("id","img");
    img6.setAttribute("src",img6_src);
    footer.appendChild(img6);
    img6.addEventListener("click",() => {
        cambiaImagen(img6_src);
        select_img1 = false; select_img2 = false; select_img3 = false;
        select_img4 = false; select_img5 = false; select_img6 = true;
    });

    // Filtre enfosquir BTN
    /*btn1.addEventListener("click", () => {
        if (!document.getElementById("canvas")) {
            // Control d'error
            alert("Primero selecciona una imagen para poder aplicar un filtro");
        } else {
            insertaCanvas2();

            if (document.getElementById("enfosquir_range")) {
                document.getElementById("enfosquir_div").remove();
            } else {
                let div_range = document.createElement("div");
                div_range.setAttribute("class","w100");
                div_range.setAttribute("id","enfosquir_div");
                main.appendChild(div_range);
                let range = document.createElement("input");
                range.setAttribute("type","range");
                range.setAttribute("id","enfosquir_range");
                div_range.appendChild(range);
            }

            let imgButton2;
            if (select_img1 == true) imgButton2 = img1_src; if (select_img2 == true) imgButton2 = img2_src; if (select_img3 == true) imgButton2 = img3_src;
            if (select_img4 == true) imgButton2 = img4_src; if (select_img5 == true) imgButton2 = img5_src; if (select_img6 == true) imgButton2 = img6_src;

            let filtre = new Enfosquir(document.getElementById("canvas2"));
            // Seleccionar la imatge al segon canvas i aplicar el filtre corresponent
            filtre.transforma(document.getElementById("enfosquir_range").value, imgButton2);

            text.innerText = "Filtro oscurecer";
        }
    });*/

    // Filtre blanc i negre BTN
    btn2.addEventListener("click", () => {
        if (!document.getElementById("canvas")) {
            // Control d'error
            alert("Primero selecciona una imagen para poder aplicar un filtro");
        } else {
            insertaCanvas2();
            if (document.getElementById("enfosquir_range")) {
                document.getElementById("enfosquir_div").remove();
            }

            let imgButton2;
            if (select_img1 == true) imgButton2 = img1_src; if (select_img2 == true) imgButton2 = img2_src; if (select_img3 == true) imgButton2 = img3_src;
            if (select_img4 == true) imgButton2 = img4_src; if (select_img5 == true) imgButton2 = img5_src; if (select_img6 == true) imgButton2 = img6_src;

            let filtre = new Grisos(document.getElementById("canvas2"));
            // Seleccionar la imatge al segon canvas i aplicar el filtre corresponent
            filtre.transforma(imgButton2);

            text.innerText = "Filtro blanco y negro";
        }
    });

    // Filtre negatiu BTN
    btn3.addEventListener("click", () => {
        if (!document.getElementById("canvas")) {
            // Control d'error
            alert("Primero selecciona una imagen para poder aplicar un filtro");
        } else {
            insertaCanvas2();
            if (document.getElementById("enfosquir_range")) {
                document.getElementById("enfosquir_range").remove();
            }

            let imgButton2;
            if (select_img1 == true) imgButton2 = img1_src; if (select_img2 == true) imgButton2 = img2_src; if (select_img3 == true) imgButton2 = img3_src;
            if (select_img4 == true) imgButton2 = img4_src; if (select_img5 == true) imgButton2 = img5_src; if (select_img6 == true) imgButton2 = img6_src;

            let filtre = new Negatiu(document.getElementById("canvas2"));
            // Primero selecciona una imagen para poder aplicar un filtro
            filtre.transforma(imgButton2);

            text.innerText = "Filtro negativo";
        }
    });

    // Filtre invertir horizontalment BTN
    btn4.addEventListener("click", () => {
        if (!document.getElementById("canvas")) {
            // Control d'error
            alert("Primero selecciona una imagen para poder aplicar un filtro");
        } else {
            insertaCanvas2();
            if (document.getElementById("enfosquir_range")) {
                document.getElementById("enfosquir_div").remove();
            }

            let imgButton2;
            if (select_img1 == true) imgButton2 = img1_src; if (select_img2 == true) imgButton2 = img2_src; if (select_img3 == true) imgButton2 = img3_src;
            if (select_img4 == true) imgButton2 = img4_src; if (select_img5 == true) imgButton2 = img5_src; if (select_img6 == true) imgButton2 = img6_src;

            let filtre = new FlipHoritzontal(document.getElementById("canvas2"));
            // Seleccionar la imatge al segon canvas i aplicar el filtre corresponent
            filtre.transforma(imgButton2);

            text.innerText = "Filtro invertir horizontalmente";
        }
    });

    // Esborrar canvas BTN
    btn5.addEventListener("click", () => {
        if (!document.getElementById("canvas")) {
            // Control d'error
            alert("Primero selecciona una imagen para poder aplicar un filtro");
        } else {
            deleteCanvas();
            if (document.getElementById("enfosquir_range")) {
                document.getElementById("enfosquir_div").remove();
            }

            text.innerText = "Borrar canvas";
        }
    });

    // Descarregar canvas BTN
    btn6.addEventListener("click", () => {
        if (!document.getElementById("canvas")) {
            // Control d'error
            alert("Primero selecciona una imagen para poder aplicar un filtro");
        } else if (!document.getElementById("canvas2")) {
            // Control d'error
            alert("Primero selecciona un filtro para poder descargar el canvas");
        } else {
            descargaImagen();
            text.innerText = "Descargar canvas";
        }
    });

}

// Insertar i/o cambiar el primer canvas
function cambiaImagen(imgButton) {
    if (document.getElementById("canvas")) {
        document.getElementById("canvas").remove();
        if (document.getElementById("canvas2")) {
            document.getElementById("canvas2").remove();
        }
    }
    let canvas = new Canvas(undefined,{id:"canvas",width:"640px",height:"360px"});
    canvas.createElement();
    canvas.printElement({parentId:"main",position:"beforeend"});

    let ctx = canvas.crearContext("canvas");
    canvas.dibuixarImatge(ctx, imgButton);
}

// Insertar el segon canvas (sense imatge i filtres)
function insertaCanvas2() {
    if (document.getElementById("canvas2")) {
        document.getElementById("canvas2").remove();
    }
    let canvas2 = new Canvas(undefined,{id:"canvas2",width:"640px",height:"360px"});
    canvas2.createElement();
    canvas2.printElement({parentId:"main",position:"beforeend"});
}

// Eliminar el primer canvas i el segon només si existeix
function deleteCanvas() {
    if (document.getElementById("canvas")) {
        document.getElementById("canvas").remove();
        if (document.getElementById("canvas2")) {
            document.getElementById("canvas2").remove();
        }
    }
}

// Descarregar el segon canvas amb filtres (imatge a base64)
function descargaImagen() {
    let canvas2 = document.getElementById("canvas2");
    let canvas2URL = canvas2.toDataURL();
    window.open(canvas2URL,"_self");
}