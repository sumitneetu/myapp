 GlobalCircle.directive('topheader', function() {
     var directive = {};
     directive.restrict = 'E';
     directive.template = "<header class='bar bar-subheader item-input-inset' name='cm-search-bar'>\
      \<div class='col-20 '  ng-click='goToPage(1)' ng-class='{active: 1 == selectedIndex}'>HOME</div>\
      \<div class='col-20' ng-click='goToPage(2)' ng-class='{active: 2 == selectedIndex}'>Connections</div>\
      \<div class='col-20' ng-click='goToPage(3)' ng-class='{active: 3 == selectedIndex}'>Message</div>\
      \<div class='col-20' ng-click='goToPage(4)'>Notifications</div>\
      \<div class='col-20' ng-click='goToPage(5)'>Me</div>\
   \</header>";
     directive.scope = {};
     directive.controller = function($scope, $scope, $state) {
         $scope.goToPage = function(val) {
             $scope.selectedIndex = 0;
             if (val == 1) {
                 $state.go('tabs.mainhome');
                 $scope.selectedIndex = 1;

             } else if (val == 2) {
                 $state.go('tabs.connection');
                 $scope.selectedIndex = 2;
             } else if (val == 3) {
                 $scope.selectedIndex = 3;
                 $state.go('tabs.message');
             } else if (val == 4) {
                 $scope.selectedIndex = 4;
                 $state.go('tabs.notification');
             } else if (val == 5) {
                 $scope.selectedIndex = 5;
                 $state.go('tabs.profile');
             }
         }
     };
     directive.link = function($scope, element, attribute) {};
     directive.compile = function(element, attributes) {

     }
     return directive;
 });

 GlobalCircle.directive('watchChange', function() {
     return {
         scope: {
             onchange: '&watchChange'
         },
         link: function(scope, element, attrs) {
             element.on('input', function() {
                 scope.$apply(function() {
                     scope.onchange();
                 });
             });
         }
     };
 });
 GlobalCircle.directive('suggestionConnect', function() {
     var directive = {};
     directive.restrict = 'E';
     directive.template = "<div class='suggenstion'>\
				 <div class='item item-text-wrap row peopleNowList' ng-repeat='suggestion in cdata'>\
					<div class='peoplemayImg' ><img src='img/youmay-img.jpg' alt=''></div>\
					<div class='peoplemayName'>\
						<strong>Abayomi</strong>\
						<span>Executive at kodak</span>Phoenix, Arizona</div>\
					<div class='peoplIcon'ng-click='addConnection()'><img src='img/check.png' alt=''></div>\
				 </div>\
            </div>";
     directive.scope = {};
     directive.controller = function($scope, $state, HomeService, $http, GlobalStorage, apiURL) {


         $scope.homedata = GlobalStorage.getGlocalStorage('HomeData');
         $scope.potentialcontacts = $scope.homedata.potentialcontacts;
         $scope.cdata = {};
         for (var i = 0; i < 3; i++) {
             var item = $scope.potentialcontacts[Math.floor(Math.random() * $scope.potentialcontacts.length)];
             $scope.cdata[i] = item;

         }
         $scope.addConnection = function() {}
     };
     directive.link = function($scope, element, attribute) {

     };
     directive.compile = function(element, attributes) {}
     return directive;
 });
 GlobalCircle.directive('uiShowPassword', [
     function() {

         return {
             restrict: 'A',
             scope: true,
             link: function(scope, elem, attrs) {
                 var btnShowPass = angular.element('<button class="button button-clear"><i class="ion-eye"></i></button>'),
                     elemType = elem.attr('type');

                 // this hack is needed because Ionic prevents browser click event
                 // from elements inside label with input
                 btnShowPass.on('mousedown', function(evt) {
                     (elem.attr('type') === elemType) ?
                     elem.attr('type', 'text'): elem.attr('type', elemType);
                     btnShowPass.toggleClass('button-positive');
                     //prevent input field focus
                     evt.stopPropagation();
                 });

                 btnShowPass.on('touchend', function(evt) {
                     var syntheticClick = new Event('mousedown');
                     evt.currentTarget.dispatchEvent(syntheticClick);

                     //stop to block ionic default event
                     evt.stopPropagation();
                 });

                 if (elem.attr('type') === 'password') {
                     elem.after(btnShowPass);
                 }
             }
         };
     }
 ]);
