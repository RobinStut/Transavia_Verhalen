console.log("Test");

//Aside!
var asideKnop = document.getElementById("asideknop");
var asidecheck1 = document.getElementsByClassName("aside");
var optie = 0;
//asideTrigger.addEventListener("onclick", asideChange);

function asideChange() {

if (optie === 0) {
    document.getElementById("aside").classList.remove("normal");
    document.getElementById("aside").classList.add("aside");
    console.log("Aside toegevoegd");
    optie = 1;
    console.log("optie is nu " + optie);
}

else if (optie === 1) {
    document.getElementById("aside").classList.remove("aside");
    document.getElementById("aside").classList.add("normal");
    optie = 0;
    console.log("optie is nu " + optie);
}
}
document.getElementById("asideknop").addEventListener("click", asideChange);

var downloadoptie = 0;
//asideTrigger.addEventListener("onclick", asideChange);

function downloadChange() {

if (downloadoptie === 0) {
    document.getElementById("download").classList.add("download");
    document.getElementById("boekenkast").classList.add("popup");
    console.log("download toegevoegd");
    console.log("popup toegevoegd");
    downloadoptie = 1;
    console.log("optie is nu " + downloadoptie);
}

else if (downloadoptie === 1) {
    document.getElementById("download").classList.remove("download");
    document.getElementById("boekenkast").classList.remove("popup");
    downloadoptie = 0;
    console.log("optie is nu " + downloadoptie);
}
}

document.getElementById("download").addEventListener("click", downloadChange);




var beoordeeloptie = 0;

function beoordeelChange() {

if (beoordeeloptie === 0){
    document.getElementById("aantalsterren").classList.add("Open");
    console.log("beoordeling toegevoegd");
    beoordeeloptie = 1;
    console.log("optie is nu " + beoordeeloptie);
}

else if (beoordeeloptie === 1) {
    document.getElementById("aantalsterren").classList.remove("Open");
    beoordeeloptie = 0;
    console.log("optie is nu " + beoordeeloptie);
}
}

document.getElementById("beoordeel").addEventListener("click", beoordeelChange);

function starChange1() {
document.getElementById("star1").classList.add("stargekozen");
document.getElementById("star2").classList.remove("stargekozen");
document.getElementById("star3").classList.remove("stargekozen");
document.getElementById("star4").classList.remove("stargekozen");
document.getElementById("star5").classList.remove("stargekozen");
}

function starChange2() {
document.getElementById("star1").classList.add("stargekozen");
document.getElementById("star2").classList.add("stargekozen");
document.getElementById("star3").classList.remove("stargekozen");
document.getElementById("star4").classList.remove("stargekozen");
document.getElementById("star5").classList.remove("stargekozen");
}

function starChange3() {
document.getElementById("star1").classList.add("stargekozen");
document.getElementById("star2").classList.add("stargekozen");
document.getElementById("star3").classList.add("stargekozen");
document.getElementById("star4").classList.remove("stargekozen");
document.getElementById("star5").classList.remove("stargekozen");
}

function starChange4() {
document.getElementById("star1").classList.add("stargekozen");
document.getElementById("star2").classList.add("stargekozen");
document.getElementById("star3").classList.add("stargekozen");
document.getElementById("star4").classList.add("stargekozen");
document.getElementById("star5").classList.remove("stargekozen");
}

function starChange5() {
document.getElementById("star1").classList.add("stargekozen");
document.getElementById("star2").classList.add("stargekozen");
document.getElementById("star3").classList.add("stargekozen");
document.getElementById("star4").classList.add("stargekozen");
document.getElementById("star5").classList.add("stargekozen");
}

document.getElementById("star1").addEventListener("click", starChange1);
document.getElementById("star2").addEventListener("click", starChange2);
document.getElementById("star3").addEventListener("click", starChange3);
document.getElementById("star4").addEventListener("click", starChange4);
document.getElementById("star5").addEventListener("click", starChange5);





var recensieoptie = 0;

function recensieChange() {

if (recensieoptie === 0) {
    document.getElementById("recensieschrijven").classList.add("Open");
    console.log("beoordeling toegevoegd");
    recensieoptie = 1;
    console.log("optie is nu " + recensieoptie);
}

else if (recensieoptie === 1) {
    document.getElementById("recensieschrijven").classList.remove("Open");
    recensieoptie = 0;
    console.log("optie is nu " + recensieoptie);
}
}

document.getElementById("recensie").addEventListener("click", recensieChange);






console.log("Test");

//Aside!

var beoordelingoptie = 0;
//asideTrigger.addEventListener("onclick", asideChange);

function beoordelingChange() {

if (beoordelingoptie === 0) {
    document.getElementById("beoordeling").classList.remove("beoordelingnormal");
    document.getElementById("beoordeling").classList.add("beoordeling");
    console.log("beoordeling toegevoegd");
    beoordelingoptie = 1;
    console.log("optie is nu " + beoordelingoptie);
}

else if (beoordelingoptie === 1) {
    document.getElementById("beoordeling").classList.remove("beoordeling");
    document.getElementById("beoordeling").classList.add("beoordelingnormal");
    beoordelingoptie = 0;
    console.log("optie is nu " + beoordelingoptie);
}
}
document.getElementById("asideknop").addEventListener("click", beoordelingChange);
