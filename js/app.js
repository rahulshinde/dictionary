// angularpp.js
angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'fish'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
    { url: 'https://www.google.com/', name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
    { url: 'https://www.google.com/', name: 'Philly', fish: 'Tuna', tastiness: 4 },
    { url: 'https://www.google.com/', name: 'Tiger', fish: 'Eel', tastiness: 7 },
    { url: 'https://www.google.com/', name: 'Rainbow', fish: 'Variety', tastiness: 6 }
  ];
  
});