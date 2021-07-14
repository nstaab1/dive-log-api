module.exports = {
  // operation's method
  get: {
    tags: ['Dive Profile operations'], // operation's tag.
    description: 'Get a diver profile by ID', // operation's desc.
    operationId: 'getDiverProfile', // unique operation id
    parameters: [
      {
        name: 'id', // name of the param
        in: 'path', // location of the param
        schema: {
          type: 'number', // data model of the param
        },
        required: true, // Mandatory param
        description: 'Diver Profile ID', // param desc.
      },
    ],
    responses: {
      200: {
        description: 'Diver Profile Found', // response desc.
        content: {
          // content-type
          'application/json': {
            schema: {
              $ref: '#/components/schemas/DiverProfile', // todo data model
            },
          },
        },
      },
      404: {
        description: 'Diver Profile not found', // response desc.
        content: {
          // content-type
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error', // error data model
            },
          },
        },
      },
    },
  },
  delete: {
    tags: ['Dive Profile operations'],
    description: 'Remove a diver profile',
    parameters: [
      {
        name: 'id', // name of the param
        in: 'path', // location of the param
        schema: {
          type: 'number', // data model of the param
        },
        required: true, // Mandatory param
        description: 'Diver Profile ID', // param desc.
      },
    ],
    operationId: 'deleteDiverProfile',
    responses: {
      200: {
        description: 'Response is the updated Diver Profile',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ServerSuccess',
            },
          },
        },
      },
      400: {
        description: 'Error deleting diver profile.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
          },
        },
      },
      500: {
        description: 'Server Error deleting Diver Profiles',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ServerError',
            },
          },
        },
      },
    },
  },
};
