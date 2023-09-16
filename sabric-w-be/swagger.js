const documentation = {
  openapi: "3.0.0",
  info: {
    title: "Sabric App",
    version: "1.0.0",
    description: "Sabric - register and view users",
  },
  paths: {
    "/": {
      post: {
        tags: ["user"],
        summary: "Create a user account",
        description:
          "Create a user account with names, email, phone number and NID",
        produces: ["application/json"],
        requestBody: {
          description: "user info is to be entered into the system",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/userInput",
              },
            },
          },
        },
        responses: {
          201: {
            description: "user created successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Internal server error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/login": {
      post: {
        tags: ["user"],
        summary: "user login",
        description: "user can log into his/her account",
        produces: ["application/json"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/LoginInput",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Query OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    "/getAll": {
      get: {
        tags: ["user"],
        description: "Get all users",
        summary: "Get all users",
        produces: ["application/json"],
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          200: {
            description: "Query OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/updateUser": {
      put: {
        tags: ["user"],
        security: [
          {
            bearerAuth: [],
          },
        ],
        description: "Update a user account with names, email, and password",
        produces: ["application/json"],
        requestBody: {
          description: "user info is to be entered into the system",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/LoginInput",
              },
            },
          },
        },
        responses: {
          201: {
            description: "user created successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Internal server error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      userInput: {
        type: "object",
        properties: {
          username: {
            type: "string",
            example: "ruth",
          },
          email: {
            type: "string",
            example: "user2@gmail.com",
          },
          password: {
            type: "string",
            example: "User2At@2",
          },
        },
      },
      LoginInput: {
        type: "object",
        properties: {
          username: {
            type: "string",
            example: "Mic",
          },
          email: {
            type: "string",
            example: "kundamugishasarah@gmail.com",
          },
          password: {
            type: "string",
            example: "Love1#",
          },
        },
      },
    },
  },
};

export default documentation;
