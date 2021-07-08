module.exports = {
    // operation's method
    get: {
      tags: ['Dive Profile operations'], // operation's tag.
      description: "Get a diver profile by ID", // operation's desc.
      operationId: "getDiverProfile", // unique operation id
      parameters: [
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
      responses: {
        200: {
          description: "Diver Profile Found", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/DiverProfile", // todo data model
              },
            },
          },
        },
        404: {
          description: "Diver Profile not found", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error", // error data model
              },
            },
          },
        },
      },
    },
    
  };