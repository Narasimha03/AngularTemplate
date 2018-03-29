myApp.factory('sampleService', ['$http', function ($http) {
    sampleService = {};

    sampleService.getSampleData = function () {
        console.log("hema");
        return $http({
            method: "GET",
            url: "http://localhost:8081/api/user"
        })
    }
    sampleService.setSample = function (datavalue) {
        return $http({
            method: "POST",
            url: "http://localhost:8081/api/user",
            data: $.param(datavalue),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
    }
    sampleService.editSample = function (datavalue, sampleId) {
        // console.log(sampleId);
        // console.log(datavalue);
        return $http({
            method: "PUT",
            url: "http://localhost:8081/api/user/" + sampleId,
            data: $.param(datavalue),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
    }
    sampleService.deleteSample = function (sampleId) {
        return $http({
            method: "DELETE",
            url: "http://localhost:8081/api/user/" + sampleId,

            // headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
    }
    return sampleService;
}])