module.exports = {
    get:{
        tags: ['Dive Certification operations'],
        description: "Get all Diver Certifications",
        operationId: 'getDiverCertifications',
        parameters:[],
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