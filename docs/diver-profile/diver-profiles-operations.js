module.exports = {
  get: {
    tags: ['Dive Profile operations'],
    description: 'Get all Diver Profiles',
    operationId: 'getDiverProfiles',
    responses: {
      200: {
        description: 'Diver Profiles found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/DiverProfiles',
            },
          },
        },
      },
      500: {
        description: 'Server Error retrieving Diver Profiles',
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
  post: {
    tags: ['Dive Profile operations'],
    description: 'Post a new diver profile',
    operationId: 'postDiverProfile',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/DiverProfile',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Diver Profiles created',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/DiverProfile',
            },
          },
        },
      },
      400: {
        description:
          'Error creating new diver profile, such as the diver profile ID already exists.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
          },
        },
      },
      500: {
        description: 'Server Error adding Diver Profiles',
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
  patch: {
    tags: ['Dive Profile operations'],
    description: 'Patch to update a diver profile',
    operationId: 'patchDiverProfile',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/JSONPatchArray',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Response is the updated Diver Profile',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/DiverProfile',
            },
          },
        },
      },
      400: {
        description:
          'Error creating updating diver profile. Not a valid JSON patch array',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
          },
        },
      },
      500: {
        description: 'Server Error adding Diver Profiles',
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
