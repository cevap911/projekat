'use strict';

let elementi = {
     button: getElementById("showMoreBtn"),
     text: getElementById("showMore"),
     grayEffect: getElementById("grayScale"),
     blurEffect: getElementById("Blur"),
     opacityEffect: getElementById("Opacity"),
     naslov1: getElementById("naslov1"),
     naslov2: getElementById("naslov2"),
     naslov3: getElementById("naslov3"),
     naslov4: getElementById("naslov4"),
     naslovPocetna: getElementById("naslov-pocetna"),
     skromnost: getElementById("skromnost"),
     komunikacija: getElementById("komunikacija"),
     strast: getElementById("strast"),
     ime: getElementById("name"),
     prezime: getElementById("lastname"),
     email: getElementById("email")
     
}
let korisnik = [];

function getElementById(id) {
    return(document.getElementById(id));
}


function ShowMore(){

if(!elementi.text.style.display || elementi.text.style.display == "none" ){
    elementi.text.style.display = "block";
    elementi.button.value = "Prikaži manje";
    elementi.text.style.display.transition = "1s ease";
}
else {
    elementi.text.style.display = "none";
    elementi.button.value = "Prikaži više";
    }
}
window.setInterval(GrayPhoto, 1000);
function GrayPhoto(){
    elementi.grayEffect.style.filter == "grayscale(0%)";
    elementi.grayEffect.style.transition = "0.5s ease";

    if(elementi.grayEffect.style.filter == "grayscale(0%)"){
        elementi.grayEffect.style.filter = "grayscale(100%)";
        
    }
    else {
        elementi.grayEffect.style.filter = "grayscale(0%)";
    }

}


window.setInterval(BlurPhoto, 1500);
function BlurPhoto(){
    elementi.blurEffect.style.filter == "blur(0px)";
    elementi.blurEffect.style.transition = "0.5s ease";

    if(elementi.blurEffect.style.filter == "blur(0px)"){
        elementi.blurEffect.style.filter = "blur(5px)";
        
    }
    else {
        elementi.blurEffect.style.filter = "blur(0px)";
    }

}

window.setInterval(OpacityPhoto, 1000);
function OpacityPhoto(){
    elementi.opacityEffect.style.filter == "opacity(1)";
    elementi.opacityEffect.style.transition = "1s linear";

    if(elementi.opacityEffect.style.filter == "opacity(1)"){
        elementi.opacityEffect.style.filter = "opacity(0)";
        
    }
    else {
        elementi.opacityEffect.style.filter = "opacity(1)";
    }

}

function Naslov1_boja(){
    elementi.naslov1.style.color == "white";

    if(elementi.naslov1.style.color == "white"){
        elementi.naslov1.style.color = "black";
    }
    else{
        elementi.naslov1.style.color = "white"
    }
}

function Naslov2_boja(){
    elementi.naslov2.style.color == "white";

    if(elementi.naslov2.style.color == "black"){
        elementi.naslov2.style.color = "white";
    }
    else{
        elementi.naslov2.style.color = "black";
    }
}


function Naslov4_notallowed(){
    elementi.naslov4.style.cursor = "not-allowed";
}

function skromnost(){
    elementi.skromnost.style.transform = "scale(1.5)";
    elementi.skromnost.style.transition = "0.3s ease";
}
function skromnost_out(){
    elementi.skromnost.style.transform = "scale(1)";
}
function komunikacija(){
    elementi.komunikacija.style.transform = "scale(1.5)";
    elementi.komunikacija.style.transition = "0.3s ease";
}
function komunikacija_out(){
    elementi.komunikacija.style.transform = "scale(1)";
}
function strast(){
    elementi.strast.style.transform = "scale(1.5)";
    elementi.strast.style.transition = "0.3s ease";
}
function strast_out(){
    elementi.strast.style.transform = "scale(1)";
}

window.setInterval(NaslovScale, 1000);
function NaslovScale(){

    elementi.naslovPocetna.style.transform == "scale(1)";
    elementi.naslovPocetna.style.transition = "0.5s ease";

    if(elementi.naslovPocetna.style.transform == "scale(1)"){
        elementi.naslovPocetna.style.transform = "scale(1.5)";
        
    }
    else {
        elementi.naslovPocetna.style.transform = "scale(1)";
    }

}
function potvrdi() {
    try{
    if(elementi.ime.value == ""){
        alert("Molimo Vas unesite Vase ime");
    }
    else if(elementi.prezime.value == ""){
        alert("Molimo vas unesite Vase prezime");
    }
    else if(elementi.email.value == ""){
        alert("Molimo Vas unesite Vas email")
    }
}
    catch (error){
        alert(error.message);
    }


    data = {
        ime: ime.value,
        prezime: prezime.value,
        email: email.value,
    };

    const myJSON = JSON.stringify(data);
    korisnik.push(myJSON);
}