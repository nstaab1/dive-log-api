module.exports = {
    get:{
        tags: ['Dive Certification operations'],
        description: "Get Diver Certifications by certification id",
        operationId: 'getDiverCertifications',
        parameters:[
            {
                name: "id", // name of the param
                in: "path", // location of the param
                schema: {
                  type: "number", // data model of the param
                },
                required: true, // Mandatory param
                description: "Dive certification ID", // param desc.
              },
        ],
        responses:{
            200:{
                description:"Diver Certification found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/DiverCertification'
                        }
                    }
                }
            },
            404:{
                description:"Diver Certification not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error'
                        }
                    }
                }
            },
            500:{
                description:"Server Error retrieving Diver Certification",
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