
angular.module('flapperNews', []).controller('PostsCtrl', ['$scope','$stateParams','posts','post',function($scope, $stateParams, posts){

	$scope.post = post;
$scope.addComment = function(){
  if($scope.body === '') { return; }
  posts.addComment(post.id, {
    body: $scope.body,
    author: 'user',
  }).success(function(comment) {
    $scope.post.comments.push(comment);
  });
  $scope.body = '';
};

}]);;