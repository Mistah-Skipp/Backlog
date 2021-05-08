const makeTable = (data) => {
    $("list").remove() // Remove existing table
    $("#noresults").hide()
    if (data.length === 0) {
        $("#noresults").show()
        $("#noresults").html("No results found")
        data = defaultdata;
    }

    $("#noresults").show()
    $("#noresults").html(data.length + " results found")
    var tabledata = "<table style='width: 100%'> <tr><th>Title</th><th>Active</th><th>Platform</th><th>Plan</th></tr>"
    data.map((x, id) => {
        tabledata += "<tr><td>" + x.title + "</td><td>" + x.active + "</td><td>" + x.platform + "</td><td>" + x.plan + "</td><td><i class='glyphicon glyphicon-user'></i><i class='glyphicon glyphicon-envelope'></i><i class='glyphicon glyphicon-music'></i><i class='glyphicon glyphicon-file'></i><i class='glyphicon glyphicon-trash'></i>"


    })
    tabledata += "</table>"
    console.log(tabledata)
    document.getElementById("list").innerHTML = tabledata
}

var defaultdata;
fetch('https://Backlog-Server.mistahskipp1.repl.co/data').then(response => response.json().then(data => { defaultdata = data; makeTable(data) }))


$.delete = function (url, data, callback, type) {
    if ($.isFunction(data)) {
        type = type || callback,
            callback = data,
            data = {}
    }
    return $.ajax({
        url: url,
        type: 'DELETE',
        success: callback,
        data: data,
        contentType: type
    });
}

$.put = function (url, data, callback, type) {
    if ($.isFunction(data)) {
        type = type || callback,
            callback = data,
            data = {}
    }

    return $.ajax({
        url: url,
        type: 'PUT',
        success: callback,
        data: data,
        contentType: type
    });
}

$("#submit").click(function () {
    var name = document.querySelector('#title').value
    var actv = document.querySelector('#active').value
    var pltfrm = document.querySelector('#platform').value
    var plant = document.querySelector('#plan').value

    //force name to start with capital, drop down the rest of the options
    //put code here to splice name and replace first lettter with capital equivalent
    var values = { title: name, active: actv, platform: pltfrm, plan: plant }
    console.log(values)
    window.location.href = window.location.href
    $.post("https://Backlog-Server.mistahskipp1.repl.co/send", values)
})


//styling table attempts

/*
var table = document.getElementById("list").innerHTML;
for (var i = 0, row; row = table.rows[i]; i++) {
    if(table.rows[i] != ""){
        //use row to access the row cell
        const style = document.createElement('completed');
        document.head.appendChild(style);
        style.sheet.insertRule(`
            .comp {
                color: white;
                background-color: black;
                font-style: italic;
            }
        `);

    }
   for (var j = 0, col; col = row.cells[j]; j++) {
     //use col to access the col cell
   }  
}


/*
const style = document.createElement('style');

// append to DOM
document.head.appendChild(style);


// insert CSS Rule
style.sheet.insertRule(`
    .pizza {
        color: white;
        background-color: blue;
        font-style: italic;
    }
`);
 */