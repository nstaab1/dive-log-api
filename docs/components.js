module.exports = {
  components: {
    schemas: {
      DiverProfile: {
        type: 'object', // data type
        properties: {
          id: {
            type: 'string', // data-type
            description: 'ID of a diver profile', // desc
            example: 'aa64d775-fb3d-41da-9c5d-8eb211280abf', // example of an id
          },
          username: {
            type: 'string', // data-type
            description: 'Username for a diver profile', // desc
            example: 'nstaab1', // example of an id
          },
          isActive: {
            type: 'boolean', // data-type
            description: 'is the diver profile active', // desc
            example: 'true', // example of an id
          },
          firstName: {
            type: 'string', // data-type
            description: "Diver's First Name", // desc
            example: 'John', // example of a title
          },
          lastName: {
            type: 'string', // data-type
            description: "Diver's Last Name", // desc
            example: 'Smith', // example of a title
          },
          certifications: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/DiverCertification',
            },
          },
          phone: {
            type: 'number',
            description: "Diver's phone number", // desc
            example: '1234567890', // example of a title
          },
          email: {
            type: 'string',
            description: "Diver's email address", // desc
            example: 'diver@gmail.com', // example of a title
          },
          bio: {
            type: 'string',
            description: "Diver's bio information", // desc
            example: 'I like to dive with turtles in reefs.', // example of a title
          },
        },
      },
      DiverProfiles: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/DiverProfile',
        },
      },
      // Todo input model
      DiverCertification: {
        type: 'object',
        properties: {
          id: {
            type: 'number', // data-type
            description: 'ID of a diver certification', // desc
            example: '123424', // example of an id
          },
          name: {
            type: 'string', // data-type
            description: 'Name of dive certification', // desc
            example: 'Junior Scuba Diver', // example of a title
          },
          description: {
            type: 'string', // data-type
            description: 'Description of dive certification', // desc
            example: 'Entry level certification for a diver.', // example of a title
          },
        },
      },
      JSONPatchArray: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/JsonPatchObject',
        },
      },
      JsonPatchObject: {
        type: 'object',
        properties: {
          op: {
            type: 'string', // data-type
            description:
              'The operation request on the object property. Example("add","remove","replace")',
            example: 'replace', // example of an id
          },
          path: {
            type: 'string', // data-type
            description: 'The object property you are modifing', // desc
            example: '/firstName', // example of a title
          },
          value: {
            type: 'string', // data-type
            description: 'The value you would like the object property to be', // desc
            example: 'John', // example of a title
          },
        },
      },
      DiverCertifications: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/DiverCertification',
        },
      },
      Error: {
        type: 'object', // data type
        properties: {
          message: {
            type: 'string', // data type
            description: 'Error message', // desc
            example: 'Not found', // example of an error message
          },
          internal_code: {
            type: 'number', // data type
            description: 'Error internal code', // desc
            example: '404', // example of an error internal code
          },
        },
      },
      ServerError: {
        type: 'object', // data type
        properties: {
          message: {
            type: 'string', // data type
            description: 'Error message', // desc
            example: 'The Server had an issue handling the request', // example of an error message
          },
          internal_code: {
            type: 'number', // data type
            description: 'Error internal code', // desc
            example: '500', // example of an error internal code
          },
        },
      },
      ServerSuccess: {
        type: 'object', // data type
        properties: {
          message: {
            type: 'string', // data type
            description: 'Complete operation', // desc
            example: 'Diver Profile successfully deleted', // example of an error message
          },
          internal_code: {
            type: 'number', // data type
            description: 'internal code', // desc
            example: '200', // example of an error internal code
          },
        },
      },
    },
  },
};
