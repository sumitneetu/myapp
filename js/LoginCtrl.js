app.controller('LoginCtrl',function($rootScope, $scope,$location,Authenticate,$location,JobsStorage) {

$scope.firsttab=true;
$scope.secoundtab=false;

Authenticate.getCountry().then(function(response) { 
      if (response.status == 200) {
		  console.log(response);
				if (response.data.status) {
					$scope.countries
						console.log(response.data);
						$scope.countries=response.data.data;
						$scope.countries.push({id:0,countries_name:'Select Country'});
					}

                    } else {
                      $scope.result = 'success';
                      console.log("erroe in the form");
                    }
            });

$scope.isSubmitting = null;
$scope.registerTabs = function(tab) {
	if(tab=='first') {
		$scope.firsttab=true;
		$scope.secoundtab=false;
	}
	if(tab=='secound') {
		$scope.firsttab=false;
		$scope.secoundtab=true;
	}
}
$scope.buttonOption={
buttonDefaultText: 'Register Now',
buttonDefaultClass:'tg-btn',
buttonSubmittingText :'Loading....'
};
$scope.user={};
$scope.user.privacy=false;
$scope.user.country_name={id:0};

$scope.wuser={};
$scope.wuser.country_name={id:0};
$scope.isSSubmitting=null;
$scope.signUp = function(user) { 
console.log(user); 
 return false;
var usertype='';
if($scope.firsttab) {
	$scope.isSubmitting=true;
	user.usertype=1;
	if (!$scope.regularuser.$valid) {
	 return false;
  }
 }
if($scope.secoundtab) {
	$scope.isSSubmitting=true;
	user.usertype=2;
  if (!$scope.workuser.$valid) {
	 return false;
  }
 }
 
  Authenticate.registerUser(user).then(function(response) { 
      if (response.status == 200) {
		  
						if (response.data.status==1) {
							$scope.result = 'success';
							$location.path('success');
						}
						else {
							alert(response.data.message);
							$scope.result = 'success';
							$scope.isSubmitting=true;
							return false;
						}
                    } else {
                      $scope.result = 'success';
                      console.log("error in the form");
                    }
            });
}
$scope.resultdata=null;
$scope.signIn = function(user) {
		if (!$scope.loginuser.$valid) {
			return false;
		}
		$scope.isSSSubmitting=true;
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
        var userpattern = /^[a-zA-Z0-9_.]*$/
        if (user != undefined) {
            Authenticate.login(user).then(function(response) {
                $scope.resultdata='success';
                if (response.status == 200) {
                    if (response.data.status == 1) { 
                     JobsStorage.setGlocalStorage("userDetail",response.data.data);
					 JobsStorage.setGlocalStorage("token",response.data.token);
					 console.log(JobsStorage.getGlocalStorage("token"));
					 $location.path('');
                    } else {
                        $scope.one_login = false;
                    }
                } else {
                }
            });
            
        } else {
           console.log("error!");
        }
    };
$scope.luser={};
$scope.loginbuttonOption={
	buttonDefaultText: 'Login',
	buttonDefaultClass:'tg-btn',
	buttonSubmittingText :'Loading....'
};
$scope.isSSSubmitting=null;
$scope.submitForm = function() {

			// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {
				alert('our form is amazing');
			}

		};
		
$scope.validateUser = function(username) {
	console.log(username);
}
$scope.ChangeCountry = function(country) {
	console.log(country);
	$scope.user.country_name={id:country,countries_name:'Select Country'}
}
});