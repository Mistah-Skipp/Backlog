console.log("editTable.js loaded");
//Delete Entry
$('#bot').on('click', '#deleteEnt', function () {
    //$(this).closest("tr").toggleClass("dbug");
    var thisRow = $(this).closest("tr");
    var title = thisRow.find("#tEdit").text();
    //console.log(title + " == gameName");
    var doDelete = confirm("Delete: " + title);

    if (doDelete == true) {
        alert("Deleting: " + title);
        var $row = $(this).closest("tr")
        $tds = $row.find("td:nth-child(1)");
        $.each($tds, function () {
            var id = $(this).text()
            var values = { getremoved: id }
            console.log(values);
            $.delete("https://Backlog-Server.mistahskipp.repl.co/delete", values)
            window.location.href = window.location.href
        });
    } else {
        alert("not deleting: " + title);
    }
})

$('#bot').on('click','#sEdit',function(){
    $(this).closest("td").toggleClass("dbug");
    console.log(thisStatus);
    

    var thisStatus = $(this).closest("td").find("#sEdit").text();


})

/* 
for editing entries
--use edit tags as clickables to edit, idealy dropdown to swap other than notes & title
for deleting rows from the table
--make an alert asking if you really wanna delete an entry
*/

/*for editing options, make it trigger of onclick of the edit tags
tEdit == title ,sEdit == status edit
plEdit == platform, pnEdit == plan, nEdit == notes
*/

/*
make edit button in bot left of #top, on click it allows editing
-shows del button, enables dropdowns
-

 */
