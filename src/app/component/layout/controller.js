var app = angular.module('app');

app.controller('layoutCtrl', [
    '$scope',
    '$state',
    'gettextCatalog',

    function ($scope, $state, gettextCatalog) {
        $scope.searchForPlayer = function(name) {
            if (!name || name.trim().length == 0) {
                return;
            }

            $state.go('app.search', { name: name });
        };

        $scope.languages = {
            de: 'Deutsch',
            en: 'English',
            es: 'Español',
            fr: 'Français',
            it: 'Italiano',
            'pt-br': 'Português (Brasil)',
            ja: '日本語'
        };

        $scope.currentLanguage = function() {
            return gettextCatalog.getCurrentLanguage();
        }
    }
]);
