
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {


        var response = JSON.parse(this.responseText);
        var list = response.list;
        var item = document.getElementById('item');
        for (var i = 0; i < list.length; i++) {
            item.innerHTML +="<tr>"+ "<td>" + list[i].SINo + "</td>" + "<td>" + list[i].Name + "</td>" + "<td>" + list[i].Quantity + "</td>" +
                "<td>" + list[i].Unit + "</td>" + "<td>" + list[i].Department + "</td>" + "<td>" + list[i].Notes + "</td>"+"</tr>";
        }

    }

}
xhttp.open("GET", "list.json", true);
xhttp.send();
