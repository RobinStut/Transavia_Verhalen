
//filter!
var filteroptie = 0;
//asideTrigger.addEventListener("onclick", asideChange);

function filterChange() {

if (filteroptie === 0) {
    document.getElementById("filter").classList.remove("inactive");
    document.getElementById("filter").classList.add("active");
    console.log("active toegevoegd")
    filteroptie = 1;
    console.log("filteroptie is nu " + filteroptie);
}

else if (filteroptie === 1) {
    document.getElementById("filter").classList.remove("active");
    document.getElementById("filter").classList.add("inactive");
    filteroptie = 0;
    console.log("filteroptie is nu " + inlogoptie);
}
}

document.getElementById("filtertrigger").addEventListener("click", filterChange);
