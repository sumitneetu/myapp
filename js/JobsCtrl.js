
app.controller('JobsCtrl',function($rootScope, $scope,$location,JobService,$routeParams) {
console.log("hello");
$scope.jobs={};
$scope.jobs.requiredfree=0;
console.log($routeParams.category_id);
      //  $scope.dummyItems = _.range(1, 15	1); // dummy array of items to be paged
        if($routeParams.category_id) {
				$scope.pager = {};
				$scope.setPage=function(page) {
					if (page < 1 || page > $scope.pager.totalPages) {
						return;
					}
					var jbdata={page:page,pagesize:5,cat_id:$routeParams.category_id};
					JobService.getJobsByCategories(jbdata).then(function(response) { 
					if (response.status == 200) {
							console.log(response); 
							if (response.data.status) {
								console.log(response.data.data);
								$scope.jobs=response.data.data;
								$scope.total=response.data.total;
								$scope.pager = JobService.GetPager($scope.total, page);
							}
							} else {
							  console.log("erroe in the form");
							}
					});
					
				}
				$scope.setPage(1);
		} else {
			$scope.jobs={};
			
		}
		$scope.freelancerFlag=false;
        $scope.getFreeLancer = function(value) {
			if(value==2) {
				$scope.freelancerFlag=true;
			} else {
				$scope.freelancerFlag=false;
			}
		}
        if($routeParams.job_id) {
			var job_id=$routeParams.job_id;
			JobService.getJobsDetail(job_id).then(function(response) { 
					if (response.status == 200) {
							console.log(response); 
							if (response.data.status) {
								$scope.jobDetail=response.data.data;
								console.log($scope.jobDetail);
							}
							} else {
							  console.log("erroe in the form");
							}
					});
		}
		if($routeParams.myjob) {
			var user_id=3;
			JobService.getMyJobs(user_id).then(function(response) { 
					if (response.status == 200) {
							console.log(response); 
							if (response.data.status) {
								$scope.myjobs=response.data.data;
								console.log($scope.myjobs);
							}
							} else {
							  console.log("erroe in the form");
							}
					});
		}
		
		
	
	$scope.sendProposal = function(job_id){
		$location.path('sendProposal/'+job_id);
	}
	


});