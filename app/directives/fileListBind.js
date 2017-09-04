 app.directive("filelistBind", function() {
    return function( scope, elm, attrs ) {
    elm.bind("change", function( evt ) {
      //console.log( evt );
      scope.$apply(function( scope ) {
        scope[ attrs.name ] = evt.target.files;
      });
    });
  };
    
});