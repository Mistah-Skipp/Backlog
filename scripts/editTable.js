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

//ENTRY EDIT
$('#bot').on('click','#tEdit',function(){
    $("#bot").children().remove();
    //remove table
    var gameEdit = $(this).closest("tr").find("#tEdit").text();
   $("#bot").append(gameEdit);
   
   /* $("#bot").append("<form><table><tr>"+
    "<th><label for=\"gameName\"> Game Name: </label></th>"+
    "<th><label for=\"status\"> Status: </label></th>"+
    "<th><label for=\"gplat\"> Plan: </label></th>"+
    "<th><label for=\"gplan\"> Platform: </label></th>"+
    "<th><label for=\"gnote\"> Notes: </label></th></tr><tr>"+
    "<th>"+gameEdit+
    "</th><th>status</th><th>plan</th><th>plat</th><th>notes</th>"+
     "</table> </form>");*/
    /*<form>
            <table>
                <tr><!--Title Row -->
                    <th><label for="gameName"> Game Name: </label></th>
                    <th><label for="status"> Status: </label></th>
                    <th><label for="gplat"> Platform: </label></th>
                    <th><label for="gplan"> Plan: </label></th>
                    <th><label for "gnote"> Notes: </label></th>
                </tr>
                <tr>
        <!--Game Name -->
                    <td><input type="text" id="gameName" value=""></td>
        <!--Game Status -->
                    <td><select id="status">
                    <option value="Installed">Installed </option>
                    <option value="Not Installed">Not Installed </option>
                    <option value="Not Bought">Not Bought </option>
                    <option value="Completed">Completed </option>
                    </select>
                    </td>
        <!--Game Platform -->
                    <td>
                    <select id="gplat">
                        <option value="PC">PC </option>
                        <option value="PS4">PS4 </option>
                        <option value="Switch">Switch </option>
                    </select>
                    </td>
        <!--Game Plan -->
                    <td>
                        <select id="gplan">
                            <option value="Casual">Casual </option>
                            <option value="Casual/Max%">Casual/Max% </option>
                            <option value="Casual/100%">Casual/100% </option>
                            <option value="Max%">Max% </option>
                            <option value="Max%/100%">Max%/100% </option>
                            <option value="100%">100% </option>
                        </select>
                    </td>
        <!--NOTES ENTRY -->
                    <td><input type="text" id="gnote" value=""></td>
                </tr>
            </table>
            <button type="submit" id="editSubmit">Submit </button>
        </form><!--Form to get info for DB -->    */
    
    //ON editSubmit send new data to db and change it 
    
   /* var dbName = document.querySelector('#gameName').value;
    var dbStatus = document.querySelector('#status').value;
    var dbPlat = document.querySelector('#gplat').value;
    var dbPlan = document.querySelector('#gplan').value;
    var dbNote = document.querySelector('#gnote').value;


    var dataVal = { title: dbName, status: dbStatus, platform: dbPlat, plan: dbPlan , notes: dbNote};
    //console.log(dataVal);
    console.log("data logged");
    window.location.href = window.location.href
    if(dbName == ""){
        alert("Enter Game Name");
    }else{
        if(true)
        {$.post("https://Backlog-Server.mistahskipp.repl.co/send", dataVal);}
    }*/
})

    
 //del table, draw only the one selected
 //display form for updating info



 /*DBUG LINES
    var thisStatus = $(this).closest("tr").find("#sEdit").text();
    var thisTitle = $(this).closest("tr").find("#tEdit").text();
    var thisPlat = $(this).closest("tr").find("#plEdit").text();
    var thisPlan  = $(this).closest("tr").find("#pnEdit").text();
    var thisNote = $(this).closest("tr").find("#nEdit").text();

    $(this).closest("td").toggleClass("dbug");
    var dataEnt = {thisTitle, thisStatus, thisPlat, thisPlan, thisNote}
    console.log(dataEnt);
*/
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



PLAN FOR POPUP
-fuck the dropdown concept
-popup window that on click shows
    -all info about that entry
    -a form that shows what you want to change based on div clicked
        --i.e clicking on sEdit shows all status options
    -cancel button to not edit/ accidental clicks
        --hopefully remove l8tr with edit button
-prompt() instead of open()?
 
 */
