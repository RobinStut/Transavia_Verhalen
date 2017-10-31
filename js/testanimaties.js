console.log("Test");

//Aside!
var downloadoptie = 0;
//asideTrigger.addEventListener("onclick", asideChange);

function downloadChange(){

if (downloadoptie == 0){
    document.getElementById("download").classList.add("download");
    document.getElementById("boekenkast").classList.add("popup");
    console.log("download toegevoegd");
    console.log("popup toegevoegd");
    downloadoptie = 1;
    console.log("optie is nu " + downloadoptie);
}

else if (downloadoptie == 1){
    document.getElementById("download").classList.remove("download");
    document.getElementById("boekenkast").classList.remove("popup");
    downloadoptie = 0;
    console.log("optie is nu " + downloadoptie);
}
}

document.getElementById("download").addEventListener("click", downloadChange);

//Beoordeling

console.log("Test");

//Aside!
var beoordeeloptie = 0;
//asideTrigger.addEventListener("onclick", asideChange);

function beoordeelChange(){

if (beoordeeloptie == 0){
    document.getElementById("aantalsterren").classList.add("beoordeelOpen");
    console.log("beoordeling toegevoegd");
    beoordeeloptie = 1;
    console.log("optie is nu " + beoordeeloptie);
}

else if (beoordeeloptie == 1){
    document.getElementById("aantalsterren").classList.remove("beoordeelOpen");
    beoordeeloptie = 0;
    console.log("optie is nu " + beoordeeloptie);
}
}

document.getElementById("beoordeel").addEventListener("click", beoordeelChange);
