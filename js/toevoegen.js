var toevoegenoptie = 0;
//asideTrigger.addEventListener("onclick", asideChange);

function toevoegenChange(){

if (toevoegenoptie == 0){

    document.getElementById("toevoegenstap2").classList.remove("toevoegennormaal");
    document.getElementById("groep").classList.remove("groepuitbreidenterug");
    document.getElementById("toevoegenstap2").classList.add("toevoegenactive");
    document.getElementById("groep").classList.add("groepuitbreiden");
    console.log("groepuitbreiden toegevoegd")
    toevoegenoptie = 1;
    console.log("optie is nu " + toevoegenoptie);
}

else if (toevoegenoptie == 1){
    document.getElementById("groep").classList.remove("groepuitbreiden");
    document.getElementById("groep").classList.remove("groepuitbreidenterug");
    document.getElementById("toevoegenstap2").classList.remove("toevoegenactive");
    document.getElementById("toevoegenstap2").classList.add("toevoegennormaal");
    toevoegenoptie = 0;
    console.log("optie is nu " + toevoegenoptie);
}
}
document.getElementById("toevoegen").addEventListener("click", toevoegenChange);




function vorigeChange(){
    document.getElementById("groep").classList.add("groepuitbreidenterug");
    document.getElementById("groep").classList.remove("groepuitbreiden");
    document.getElementById("toevoegenstap2").classList.add("toevoegennormaal");
    document.getElementById("toevoegenstap2").classList.remove("toevoegenactive");
    console.log("groepuitbreiden verwijdert")
}

document.getElementById("vorige").addEventListener("click", vorigeChange);
