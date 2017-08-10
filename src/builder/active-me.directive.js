angular.module('mwFormBuilder')
    .directive('wdActiveMe', function($timeout, $parse) {
        return {
            link: function(scope, element, attrs) {
                $timeout(function() {
                    elementID = element[0].id;
                    parentElement = element[0].parentElement;
                    labelElement = parentElement.querySelector('label[for="' + elementID + '"]') || parentElement.querySelector('label');
                    jElement = angular.element(element);

                    if (jElement.val().length > 0 || jElement.attr('placeholder') !== undefined || jElement[0].validity.badInput === true) {
                        angular.element(labelElement).addClass('active')
                    } else {
                        angular.element(labelElement).removeClass('active')
                    }
                });
            }
        };
    })

