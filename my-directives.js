angular.module('myDirectives', [])
  .directive('titleCaseDirective', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      priority: 1,
      link: function(scope, element, attrs) {
        if (attrs.type === 'radio' || attrs.type === 'checkbox') return;
        element.bind('keydown', function() {
          scope.$apply(function(){
            element.val(element.val().replace(/(^(.)| (.))/g, function(_, match){ return match.toUpperCase();}));
          })
        });
      }
    }
  });