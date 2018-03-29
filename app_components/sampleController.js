myApp.controller("sampleController", ['$scope', '$http', 'ngDialog', 'sampleService', function ($scope, $http, ngDialog, sampleService) {

    $scope.getsample = function () {
        //   console.log("hema");
        sampleService.getSampleData()
            .then(function (response, status) {
                // console.log(JSON.stringify(response));
                $scope.sampleDetails = response.data.sampleData;
                $scope.sample_details = [];
                index = 0;
                $scope.sampleDetails.forEach(function (element) {

                    var obj = {
                        id: index++,
                        dbId: element.id,
                        name: element.name,
                        near: element.near,
                        street: element.street,
                        city: element.City

                    }
                    $scope.sample_details.push(obj);

                })
                //  console.log($scope.sample_details);               

            })

    }
    $scope.addSample = function (value) {
        // console.log("message");
        //console.log(JSON.stringify(value));
        var sampleData = {
            name: $scope.value.name,
            id: $scope.value.id,
            city: $scope.value.city,
            near: $scope.value.near,
            street: $scope.value.street,

        }
        // console.log(sampleData);

        sampleService.setSample(sampleData)
            .then(function (data, status) {

                ngDialog.open({
                    template: '<p> Class Added successfully </p>',
                    plain: true
                });
                //$scope.value = [];

                $scope.getsample();
            }, function (error) {
                console.log(error);
            })

    }
    $scope.EditSample = function (sample, id) {

        console.log("messsage");
        // console.log(value)
        // $scope.sample = angular.copy($scope.sample_details[id]);
        // $scope.sampleId = $scope.sample.dbId;

        var sample_details = {
            name: sample.name,
            near: sample.near,
            city: sample.city,
            street: sample.street,

        }
        console.log(sample_details);

        $scope.addEditSample(sample_details, id);
    }
    $scope.addEditSample = function (sample_details, id) {
        sampleService.editSample(sample_details, id)
            .then(function (data, status) {

                $scope.editdata = [];
                $scope.getsample();
            }, function (error) {
                if (error) {
                    console.log(error);
                }
            })

        // $scope.getsample();
    }

    $scope.DeleteSample = function (value) {

        $scope.sampledata = angular.copy($scope.sample_details[value]);

        $scope.id = $scope.sampledata.id;

        sampleService.DeleteSample($scope.id)

            .then(function (data, status) {
                // ngDialog.open({
                //     template: '<p>Class is Deleted Successfully.</p>',
                //     plain: true
                // });
                $scope.editdata = [];
                $scope.getSample();
            }, function (error) {
                if (error) {
                    console.log(error);
                }
            })

    }

    $scope.getsample();

}])