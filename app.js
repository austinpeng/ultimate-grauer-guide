var app = angular.module("app", ["firebase"]);

$("#newMsg").keypress(function (event) {
 var key = event.which;
 if (key == 13) {
    angular.element($(".main")).scope().addMsg($("#newMsg").val());
    $("#newMsg").val('');
    var chat = document.getElementById("chatList")
    setTimeout(function() {chat.scrollTop = chat.scrollHeight;}, 500);
    return false;  
 }
});   

$(".overlay").click(function() {
	$(".alert").fadeOut(500);
	$(".overlay").fadeOut(500);
})

$(".alert .close-button").click(function() {
	$(".alert").fadeOut(500);
	$(".overlay").fadeOut(500);
})

$(".changeUsername").click(function() {
	var u = "";
	while (u == "" || u.toUpperCase() == "GRAUER")  {
		if (u.toUpperCase() == "GRAUER") {
			alert("Sorry, that username is reserved. Please choose another.");
		}
		var u = prompt("What would you like your username to be?");
	}
	angular.element($(".main")).scope().changeUsername(u);
})