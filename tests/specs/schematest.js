require([ ],
    function() {
        'use strict';
        var validatorOptions = {
            noEmptyArrays: true,
            noEmptyStrings: true,
            noTypeless: true
        };
        var validator = new ZSchema(validatorOptions);

        validator.setRemoteReference("http://json-schema.org/draft-04/schema#", draft4);

        function reportSchemaErrors(validator){
            var errors = validator.getLastErrors();
            errors.forEach(function(listItem){
                console.error("Schema error:", listItem.code, listItem.message, listItem.path);
            })
        }

        describe("schema test", function() {
            it("schema should pass", function() {
                var jsonSample = {
                    "address": {
                        "streetAddress": "21 2nd Street",
                        "city": "New York"
                    },
                    "phoneNumber": [
                        {
                            "location": "home",
                            "code": 44
                        }
                    ]
                };

                var schemaTestResult = validator.validate(jsonSample, jsonSchema);
                if(!schemaTestResult){
                    reportSchemaErrors(validator);
                }
                expect(schemaTestResult).toBeTruthy();
            });
        });
    }
);