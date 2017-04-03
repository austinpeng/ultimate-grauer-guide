app.controller('MainController', function($scope, $firebaseArray) {

	var chat = new Firebase("https://the-ultimate-grauer-guid-c3743.firebaseio.com/");
	$scope.chat = $firebaseArray(chat);
	$scope.username = "";
	$scope.alertMessage = "";
	$scope.currentTime;

	$scope.addMsg = function(msg) {
		var m = new Object();
		m.user = $scope.username;
		m.message = msg;
		m.time = $scope.getCurrentTime();
		$scope.chat.$add(m);
	}

	$scope.genRandUsername = function() {
		$.ajax({
		  url: 'https://randomuser.me/api/',
		  dataType: 'json',
		  success: function(data){
		    $scope.username = data.results[0].name.first + "." + data.results[0].name.last;
		  }
		});
	}

	$scope.changeUsername = function(newName) {
		$scope.$apply(function() {$scope.username = newName;});
	}

	$scope.getCurrentTime = function() {
		var d = new Date();
		var hour = d.getHours();
		var min = "0" + d.getMinutes();
		min = min.substring(min.length - 2, min.length);
		$scope.$apply(function() {
			if (hour == 0) {
				$scope.currentTime = "12:" + min + " AM";
			}
			else if (d.getHours() > 12) {
				$scope.currentTime = (hour - 12) + ":" + min + " PM";
			}
			else {
				$scope.currentTime = hour + ":" + min;
			}
		});
	}

	$scope.addAlert = function(alert) {
		$scope.$apply(function() {
			$scope.alertMessage = alert;
		})
	}
	
});