// angularpp.js
angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchName   = '';     // set the default search/filter term
  
  var searchTerm = $scope.searchName;

  // create the list of sushi rolls 
  $scope.sushi = [
    { url: 'http://rahulshinde.github.io/prototype-3/', name: 'Exercise 1', description: 'An exercise in contained three dimensional symbolic systems. Viewer is placed external to the virtual environment. Scale between objects is fixed but can fluctuate in relation to the user.', tags: 'Three.js, 3D, web-experiments' },
    { url: '2.html', name: 'Exercise 2', description: 'The color red is very enjoyable.', tags: 'color' },
    { url: '3.html', name: 'Exercise 3', description: 'The color green is nice but I wish it was a bit brighter.', tags: 'color' },
    { url: 'http://rahulshinde.github.io/prototype-3/', name: 'Exercise 4', description: 'An exercise in contained three dimensional symbolic systems. Viewer is placed external to the virtual environment. Scale between objects is fixed but can fluctuate in relation to the user.', tags: 'Three.js, 3D, web-experiments' },
    { url: 'http://rahulshinde.github.io/prototype-3/', name: 'Exercise 5', description: 'An exercise in contained three dimensional symbolic systems. Viewer is placed external to the virtual environment. Scale between objects is fixed but can fluctuate in relation to the user.', tags: 'Three.js, 3D, web-experiments' },
    { url: '3.html', name: 'Exercise 6', description: 'The color green is nice but I wish it was a bit brighter.', tags: 'color' },
  ];

  //add images using api
  console.log(searchTerm);

});