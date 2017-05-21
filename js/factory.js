var timeout = 380000;

app.factory('Authenticate', function($http, apiURL) {
    return {
        registerUser: function(user) {
			var cname="";
			if(user.usertype==2){
				cname=user.companyname;
			}
			var userdata={
					'username': user.username,
                    'firstname': user.firstname,
                    'lastname': user.lastname,
                    'email': user.email,
					'country': user.country_name,
                    'password': user.password,
                    'usertype': user.usertype,
					'company_name':cname
                };
				console.log(userdata);
            var req = {
                method: 'POST',
                url: apiURL + 'register',
                timeout: timeout,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                data: this.toParams(userdata),
            }
            return $http(req).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        },
        login: function(user) {
			var udata={
                    'username': user.email,
                    'password': user.password
                };
				console.log(udata);
            var req = {
                method: 'POST',
                url: apiURL + 'login',
                timeout: timeout,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                data: this.toParams(udata),
            }
            return $http(req).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        },
        forgetPassword: function(user) {
            var req = {
                method: 'POST',
                url: apiURL + 'Webservice_User/forgotPassword',
                timeout: timeout,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                data: this.toParams({
                    'email': user.email
                }),
            }
            return $http(req).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        },
        getCountry: function() {
            return $http.get(apiURL + "getcountrylist", {
                timeout: timeout
            }).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        },
        getIndustries: function() {
            return $http.get(apiURL + "Webservice_ProProfile/industryType", {
                timeout: timeout
            }).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        },
        toParams: function(obj) {
            var p = [];
            for (var key in obj) {
                p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
        },
        getState: function(cid) {
            var req = {
                method: 'POST',
                url: apiURL + 'Webservice_User/state',
                timeout: timeout,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                data: this.toParams({
                    'cid': cid
                }),
            }
            return $http(req).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        }
    }
});

app.factory('HomeService', function($http,apiURL) {
  return {
  getCategories:function() {
            return $http.get(apiURL+"getCategories", {
                timeout: timeout
            }).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
    },
	getProfileData: function(userid){
		var req = {
		  method: 'POST',
		  url: apiURL+'Webservice_ProProfile/profile',
		  headers: {
		    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
		  },
		  data: this.toParams({'userid':userid}),
		}
		return $http(req).then(function(response){
			return response;
		});
    },
	addConnection: function(userid, friendid){
	    return $http.get(apiURL+"Webservice_ProProfile/addconnection?userid="+userid+"&friendid="+friendid).then(function(response){
	        return response;
      });
    },
    toParams:function(obj) {
      var p = [];
     for (var key in obj) {
        p.push(key + '=' + encodeURIComponent(obj[key]));
      }
     return p.join('&');
    }
  }
});


app.factory('JobService', function($http, apiURL) {
    return {
		getJobsByCategories:function(data) {
            return $http.get(apiURL+"getAllJobList?cat_id="+data.cat_id+"&page="+data.page+"&pagesize="+data.pagesize, {
                timeout: timeout
            }).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
    },
	getJobsDetail:function(job_id) {
            return $http.get(apiURL+"getJobDetail?job_id="+job_id, {
                timeout: timeout
            }).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
    },
	prepareProposal:function(job_id) {
            return $http.get(apiURL+"getJobDetail?job_id="+job_id, {
                timeout: timeout
            }).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
    },
	getMyJobs:function(user_id) {
            return $http.get(apiURL+"getUserAllJobList?user_id="+user_id, {
                timeout: timeout
            }).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
    },
	
        GetPager:function(totalItems, currentPage, pageSize) {
            // default to first page
            currentPage = currentPage || 1;

            // default page size is 10
            pageSize = pageSize || 5;

            // calculate total pages
            var totalPages = Math.ceil(totalItems / pageSize);

            var startPage, endPage;
            if (totalPages <= 10) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            } else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                } else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                } else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }

            // calculate start and end item indexes
            var startIndex = (currentPage - 1) * pageSize;
            var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

            // create an array of pages to ng-repeat in the pager control
            var pages = _.range(startPage, endPage + 1);

            // return object with all pager properties required by the view
            return {
                totalItems: totalItems,
                currentPage: currentPage,
                pageSize: pageSize,
                totalPages: totalPages,
                startPage: startPage,
                endPage: endPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: pages
            };
        },
        toParams: function(obj) {
            var p = [];
            for (var key in obj) {
                p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
        }
    }
});
