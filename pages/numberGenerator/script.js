function calculate() {
    min = parseInt(document.getElementById("min").value);
    max = parseInt(document.getElementById("max").value);
    if (min == "" || max == "") {
        alert("Entrez un nombre");
    }
    else if (min > max) {
        alert("Le minimum doit être inférieur au maximum");
    }
    else {
        document.getElementById("result").innerHTML = Math.floor(Math.random() * (max - min + 1) + min);
    }

}