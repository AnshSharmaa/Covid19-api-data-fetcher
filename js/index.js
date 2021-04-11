
// this function takes the inputs and validates the date difference if all is right then it calls the api call function
function check() {
    var name = document.getElementById("country").value;
    var sdate = document.getElementById("startdate").value;
    var edate = document.getElementById("endtdate").value;
    if (sdate > edate) {
        alert("Start date is ahead of end date");
        return;
    } else {
        apicall(name, sdate, edate);
    }
}

// this function calls the api with the input data and if the data is found it calls the separate function
function apicall(name, sdate, edate) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            separate(res);
        }
    };
    xhttp.open("GET", `https://api.covid19api.com/country/${name}?from=${sdate}T00:00:00Z&to=${edate}T00:00:00Zeg:-`, true);
    xhttp.send();
}

// this function breaks each result and sends it to the build function
function separate(res) {
    //console.log(JSON.parse(res));
    JSON.parse(res).forEach(e => {
        build(e);
    });
}

// this function takes each result, extracts the relevant data and sends it to the html
function build(e) {
    //console.log(e);
    //div recieves all the results
    var main = document.getElementById("result");
    //ndiv houses result of a day
    var ndiv = document.createElement("div");
    ndiv.classList.add("ndiv");
    ndiv.innerHTML = `<span>Confirmed: ${e.Confirmed}</span><span>Deaths: ${e.Deaths}</span><span>Active: ${e.Active}</span>`
    main.appendChild(ndiv);

}