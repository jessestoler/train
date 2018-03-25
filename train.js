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
      var fifth = moment().add(4, 'd').format("ddd MMMM D");
      var first = moment().format("ddd MMMM D");
      var fourth = moment().add(3, 'd').format("ddd MMMM D");
      var saved = database.ref("Saved");
      var second = moment().add(1, 'd').format("ddd MMMM D");
      var seventh = moment().add(6, 'd').format("ddd MMMM D");
      var sixth = moment().add(5, 'd').format("ddd MMMM D");
      var third = moment().add(2, 'd').format("ddd MMMM D");
      
      schedule();

    
      $("#dayOne").html(first);
      $("#dayTwo").html(second);
      $("#dayThree").html(third);
      $("#dayFour").html(fourth);
      $("#dayFive").html(fifth);
      $("#daySix").html(sixth);
      $("#daySeven").html(seventh);
      $("#dayOne").attr("data-option", first);
      $("#dayTwo").attr("data-option", second);
      $("#dayThree").attr("data-option", third);
      $("#dayFour").attr("data-option", fourth);
      $("#dayFive").attr("data-option", fifth);
      $("#daySix").attr("data-option", sixth);
      $("#daySeven").attr("data-option", seventh);
      
      
$("#day").on("click", dayList);
$("#done").on("click", gather);
$("#done").on("click", refresh);
$("#done").on("click", schedule);
$("#hour").on("click", hourList);
$("#minute").on("click", minuteList);
$(".seven").on("click", daySelection);
$(".sixty").on("click", minuteSelection);
$(".twentyfour").on("click", hourSelection);

function current() {
    var present = moment().format('MMMM Do YYYY, h:mm a');
    $("#rightNow").html(present);
}

setInterval(current, 1000);

function dayList() {
   
    $("#dayOptions").css("display", "block");
    }

function daySelection() {
        var dayChoice = $(this).attr("data-option");
        $("#dayInput").val(dayChoice);
        $("#dayOptions").css("display", "none");
        }


function gather() {

            if ($("#trainName").val() == "" || $("#destination").val() == "" || $("#hourInput").val() == "" || $("#frequency").val() == "" || isNaN($("#frequency").val()) || $("#minuteInput").val() == "") {
                alert("Please fill in every field to continue");
            }
            
            else{
            var arrival = $("#dayInput").val() + " 2018, " + $("#hourInput").val() + ":" + $("#minuteInput").val();
            var future = moment(arrival).fromNow();
            var db = saved.push();
            
            
            db.set({
                name: $("#trainName").val(), 
                destination: $("#destination").val(),
                frequency: $("#frequency").val(),
                time: arrival,
                next: future
              });
            
            }
            
            }

function hourList() {
   
                $("#hourOptions").css("display", "block");
                }

function hourSelection() {
                    var hourChoice = $(this).attr("data-option");
                    $("#hourInput").val(hourChoice);
                    $("#hourOptions").css("display", "none");
                    
                }

function minuteList() {
                    $("#minuteOptions").css("display", "block");
                }
                
                
                
function minuteSelection() {
                    
                    var minuteChoice = $(this).attr("data-option");
                    $("#minuteInput").val(minuteChoice);
                    $("#minuteOptions").css("display", "none");
                }



function refresh() {
    $(".stored").remove();
}

function schedule() {

    var al = saved.orderByKey();
   
    al.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        
        
          var key = childSnapshot.key;
        var childData = childSnapshot.val();
        var b = $("<div class='info row stored'>");
          var c = $("<div class='info row stored'>");
      var d = $("<div class='info row stored'>");
      var e = $("<div class='info row stored'>");
      var f = $("<div class='info row stored'>");
      $("#ahn").append(b);
  $("#deuh").append(c);
  $("#twah").append(d);
  $("#katr").append(e);
  $("#sank").append(f);
        b.html(childData.name);
        c.html(childData.destination);
        d.html(childData.frequency);
        e.html(childData.time);
        f.html(childData.next);
       });
      
    });

}

});