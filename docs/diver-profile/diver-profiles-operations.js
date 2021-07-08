module.exports = {
    get:{
        tags: ['Dive Profile operations'],
        description: "Get all Diver Profiles",
        operationId: 'getDiverProfiles',
        parameters:[],
        responses:{
            200:{
                description:"Diver Profiles found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/DiverProfiles'
                        }
                    }
                }
            },
            500:{
                description:"Server Error retrieving Diver Profiles",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error'
                        }
                    }
                }
            }
        }
    },
    post:{
        tags: ['Dive Profile operations'],
        description: "Post a new diver profile",
        operationId: 'postDiverProfile',
        // parameters:[],
        requestBody: {
            content:{
                'application/json':{
                    schema:{
                        $ref:'#/components/schemas/DiverProfile'
                    }
                }
            }
        },
        responses:{
            200:{
                description:"Diver Profiles created",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/DiverProfile'
                        }
                    }
                }
            },
            400:{
                description:"Error creating new diver profile, such as the diver profile ID already exists.",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error'
                        }
                    }
                }
            },
            500:{
                description:"Server Error adding Diver Profiles",
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