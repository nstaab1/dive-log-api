module.exports = {
    get:{
        tags: ['Dive Certification operations'],
        description: "Get Diver Certifications by user",
        operationId: 'getDiverCertifications',
        parameters:[
            {
                name: "id", // name of the param
                in: "path", // location of the param
                schema: {
                  type: "number", // data model of the param
                },
                required: true, // Mandatory param
                description: "Diver Profile ID", // param desc.
              },
        ],
        responses:{
            200:{
                description:"Diver Certifications found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/DiverCertifications'
                        }
                    }
                }
            },
            404:{
                description:"Diver Certifications for users not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error'
                        }
                    }
                }
            },
            500:{
                description:"Server Error retrieving Diver Certifications",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error'
                        }
                    }
                }
            }
        }
    }
}