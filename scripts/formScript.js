console.log("index.js loaded");

$("#submit").click(function (){
    var dbName = document.querySelector('#gameName').value;
    var dbStatus = document.querySelector('#status').value;
    var dbPlat = document.querySelector('#gplat').value;
    var dbPlan = document.querySelector('#gplan').value;
    
    var dataVal = { gameName: dbName , status: dbStatus , gplat: dbPlat , gplan: dbPlan };
    console.log(dataVal);
    console.log("data logged");
    window.location.href=window.location.href

});//submit button function
