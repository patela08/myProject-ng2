(function iife(){
    var xhttp,current_page,totalOptions,records_per_page;
    xhttp = new XMLHttpRequest();
    current_page = 1;
    records_per_page = 2;
    document.getElementById("optionSelected").addEventListener("change",optionChanged);
    function optionChanged(){
        console.log(this.selectedIndex );

        console.log(totalOptions);
        records_per_page = totalOptions.options[totalOptions.selectedIndex].text;
        console.log(records_per_page);
    }
    

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            dynamicTable(xhttp.response);
        }
    };
    xhttp.open("GET", "./api/users-data.json", true);
    xhttp.send();
    function dynamicTable(dataTodisplay){
        var data = JSON.parse(dataTodisplay);
        var result = '';
        data.forEach(function (value,index){
            result += "<tr><td data-label='name'>"+ value.name +
                            "</td><td data-label='email'>"+value.email+
                            "</td><td data-label='phonenumber'>"+value.phone+
                            "</td><td data-label='city'>"+ value.address.city +
                            "</td><td data-label='website'>"+ value.website +
                            "</td></tr>"
        });
        document.getElementById("dataToDisplay").innerHTML = result;
        console.log(result);
    }


    // function numPages()
    // {
    //     return Math.ceil(objJson.length / records_per_page);
    // }

    // window.onload = function() {
    //     changePage(1);
    // };
}());
