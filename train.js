$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyA7X-__gDDcWBNbh9tuyPAQrj_cmP9o10I",
        authDomain: "train-7ebeb.firebaseapp.com",
        databaseURL: "https://train-7ebeb.firebaseio.com",
        projectId: "train-7ebeb",
        storageBucket: "train-7ebeb.appspot.com",
        messagingSenderId: "894944058013"
      };
      firebase.initializeApp(config);
      var database = firebase.database();
      var saved = database.ref("Saved");

      
      var envy = moment().format("ddd MMMM D");
      var gluttony = moment().add(1, 'd').format("ddd MMMM D");
      var greed = moment().add(2, 'd').format("ddd MMMM D");
      var lust = moment().add(3, 'd').format("ddd MMMM D");
      var pride = moment().add(4, 'd').format("ddd MMMM D");
      var sloth = moment().add(5, 'd').format("ddd MMMM D");
      var wrath = moment().add(6, 'd').format("ddd MMMM D");
      
      
      $("#dayOne").html(envy);
      $("#dayTwo").html(gluttony);
      $("#dayThree").html(greed);
      $("#dayFour").html(lust);
      $("#dayFive").html(pride);
      $("#daySix").html(sloth);
      $("#daySeven").html(wrath);
      $("#dayOne").attr("data-option", envy);
      $("#dayTwo").attr("data-option", gluttony);
      $("#dayThree").attr("data-option", greed);
      $("#dayFour").attr("data-option", lust);
      $("#dayFive").attr("data-option", pride);
      $("#daySix").attr("data-option", sloth);
      $("#daySeven").attr("data-option", wrath);
      
      

$("#done").on("click", a);
$("#hour").on("click", black);
$("#minute").on("click", hunting);

$(".twentyfour").on("click", faust);
$(".sixty").on("click", lotus);

$(".seven").on("click", hand);
$("#day").on("click", glove);

function sinclair() {
    var bad = moment().format('MMMM Do YYYY, h:mm a');
    $("#ultraviolence").html(bad);
}

setInterval(sinclair, 1000);

function hunting() {
    $("#minuteOptions").css("display", "block");
}



function lotus() {
    
    var flower = $(this).attr("data-option");
    $("#minuteInput").val(flower);
    $("#minuteOptions").css("display", "none");
}

function hand() {
    var smiths = $(this).attr("data-option");
    $("#dayInput").val(smiths);
    $("#dayOptions").css("display", "none");
    
    
    
    
}

function glove() {
   
    $("#dayOptions").css("display", "block");
    
    
    
}

function faust() {
    var arp = $(this).attr("data-option");
    $("#hourInput").val(arp);
    $("#hourOptions").css("display", "none");
    
    
    
    
}

function black() {
   
    $("#hourOptions").css("display", "block");
    
    
    
}

function a() {


if ($("#trainName").val() == "" || $("#destination").val() == "" || $("#hourInput").val() == "" || isNaN($("#frequency").val()) || $("#minuteInput").val() == "") {
    alert("Please fill in every field to continue");
}
else{
var b = $("<div class='info row'>");
var c = $("<div class='info row'>");
var d = $("<div class='info row'>");
var e = $("<div class='info row'>");
var f = $("<div class='info row'>");

var knives = $("#dayInput").val() + " 2018, " + $("#hourInput").val() + ":" + $("#minuteInput").val();
var scatterbrain = moment(knives).fromNow();
var fb = saved.push();

$("#funny").append(b);
$("#piano").append(c);
$("#cache").append(d);
$("#white").append(e);
$("#amour").append(f);
b.html($("#trainName").val());
c.html($("#destination").val());
d.html($("#frequency").val());
e.html(knives);

f.html(scatterbrain);



fb.set({
    name: $("#trainName").val(), 
    destination: $("#destination").val(),
    frequency: $("#frequency").val(),
    time: knives
  });
 


}



}



});