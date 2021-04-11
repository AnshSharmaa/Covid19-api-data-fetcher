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

function apicall(name, sdate, edate) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            display(res);
        }
    };
    xhttp.open("GET", `https://api.covid19api.com/country/${name}?from=${sdate}T00:00:00Z&to=${edate}T00:00:00Zeg:-`, true);
    xhttp.send();
}

function display(res){
    console.log(JSON.parse(res));
}