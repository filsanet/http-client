var app = angular.module('app');

app.controller('layoutCtrl', [
    '$scope',
    '$state',
    '$stateParams',
    'gettextCatalog',

    function ($scope, $state, $stateParams, gettextCatalog) {
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

        $scope.changeLanguage = function(lang) {
            $state.go($state.current.name, _.extend($stateParams, {locale: lang}));
        };

        $scope.currentLanguage = function() {
            return gettextCatalog.getCurrentLanguage();
        }
    }
]);
