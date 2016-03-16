module.exports = ExampleDataService = ['AbstractDataService', function (AbstractDataService) {

    return {
        getTest: function (testVal) {
            return AbstractDataService.test(testVal).then(function (response) {
                console.log(response);
                return response;
            })
        },
    };
}];