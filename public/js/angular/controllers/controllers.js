

angular.module("myApp", []).controller("memoria", function($scope,$timeout,$interval) {

  iniciaJogo();

  function iniciaJogo(){

    var n = Math.floor(Math.random()*7);
    if(n == 0){
      return sorteia();
    }else{
       $scope.imagem ="public/img/"+n+".png";
     }
 }

  $scope.jogo = function(){

    var n = Math.floor(Math.random()*7);
    if(n == 0){
      iniciaJogo();
    }else{
       $scope.imagem ="public/img/"+n+".png";
     }

  }

});
