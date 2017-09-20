app.controller('mainController', function ($scope) {
    $scope.termos = [];
    $scope.indice = [];
    $scope.readContent = function($fileContent){
      //pega o arquivo e divide por linhas
        $scope.content = $fileContent.split("\n");
      //pega cada linha salvando os termos
        for(var i=0; i < ($scope.content.length - 1); i++) {
          var term = ($scope.content[i].split(";")[1].substring(0,($scope.content[i].length-1))).split(", ");
          //pega cada termo e adiciona ao vetor principal
          for(var j=0; j< (term.length -1); j++) {
            if($scope.termos.indexOf(term[j])< 0){
                $scope.termos.push(term[j]);
            }
          }
        }
      //ordenando os termos encontrados
      $scope.termos.sort();
      //agora cria um objeto pra cada índice encontrado
        for(var i=0; i< $scope.termos.length; i++) {
          data = {
                "name":$scope.termos[i],
                "values":[]
            };
          //verifica quais fontes tem esse termo
          for(var j=0; j< ($scope.content.length-1); j++) {
            if($scope.content[j].indexOf($scope.termos[i])< 0){
                jornal = $scope.content[j].split(";")[0];
                data.values.push(jornal);
            }
          }
        //adiciona ao indice o objeto criado
          $scope.indice.push(data);
        }
    };
  });