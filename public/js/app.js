(function() {
  var app = angular.module('comments', []);
	
  app.controller('UsersController', function(){
    this.data = usersData;
  });
	
  
  app.controller('LoginController', function(){
		this.login = "";
		this.pass = "";
		this.logOn = false;
		this.logOff = true;
	  
	    this.loginAction = function(){
		  if(this.login == "admin" && this.pass == "admin"){
			  this.logOn = true;
		  }
	   };
	  
	   this.exit = function(){
		  this.logOff = true;
		  this.logOn = false;
		  $rootScope.loglog = false;
	   }
	  
	 
  });  
  
  app.directive("login", function() {
    return {
      restrict: "E",
      templateUrl: "login.html",
    };
  });
  
  app.directive("comments", function() {
    return {
      restrict: "E",
      templateUrl: "comments.html",
      controller: function($scope){	
		
	  this.display = false;
	  this.commentList = usersData[0].comments
	  this.newComment = "";
	  	  
	  
	  this.sendComment = function(){
		  if(this.newComment === ""){
			  return false;
		  }
		  
		  this.commentList.push(this.newComment);
		  
		  
	  };
	  
	  this.deleteComment = function(comment){
		  
		  for(i = 0; i < this.commentList.length; i++){
			  if(comment === this.commentList[i]){
				  this.commentList.splice(i, 1);
			  }
		  }
		  
		}
	  },  
      controllerAs: "comments"
    };
  });
  
  
  
    var usersData = [
  
	  {
		id:01,
		login:"admin",
		pass:"admin",
		comments:["Linda foto", "muito legal","foto top", "Alto Astral"]
	  },
	  
	  {
		id:02,
		comments:["bla bla foto", "blaoi io"]
	  }
	  

  
  ];
  
})();


