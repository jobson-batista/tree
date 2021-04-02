import * as swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions: swaggerJsDoc.Options = {
    swaggerDefinition: {
        info: {
            title: 'API do projeto Tree',
            description: 'Documentação da API Tree.',
            contact: {
                name: "Suporte API Tree",
                email: "suporteapi@tree.dev.br",
                url: "https://tree.dev.br"
            },
            servers: [
                {
                    url: 'http://localhost:3333',
                    description: 'Servidor de Desenvolvimento.'
                }
            ],
            version: "0.1"
        },
        paths: {
            "/api/users": {
                get: {
                    tags: [
                        "Users"
                    ],
                    description: "Retorna todos os usuários cadastrados no banco de dados.",
                    responses: {
                        "302": {
                            description: "Usuários listados com sucesso.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "array"
                                   } 
                                }
                            }
                        },
                        // Não implementado no UserController.
                        "404": {
                            description: "[Not Found] Nenhum usuário encontrado.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "array"
                                   } 
                                }
                            }
                        }
                    }
                },
                post: {
                    tags: [
                        "Users"
                    ],
                    description: "Cria um usuário no banco de dados",
                    parameters: [
                        {
                            name: "firstName",
                            type: "string",
                            in: "body",
                            description: "Primeiro nome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "lastName",
                            type: "string",
                            in: "body",
                            description: "Sobrenome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "email",
                            type: "string",
                            in: "body",
                            description: "Email do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "password",
                            type: "string",
                            in: "body",
                            description: "Senha do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "lastName",
                            type: "string",
                            in: "body",
                            description: "Sobrenome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "isAdmin",
                            type: "boolean",
                            in: "body",
                            description: "Privilégios de administrador.",
                            required: false,
                            schema: {
                                type: "boolean"
                            }
                        },
                        {
                            name: "phoneNumber",
                            type: "string",
                            in: "body",
                            description: "Telefone para contato do usuário.",
                            required: false,
                            schema: {
                                type: "string"
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "[OK] Usuário criado com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "Objeto JSON"
                                   } 
                                }
                            }
                        },
                        // Ainda não implementado no UserController
                        "206": {
                            description: "[Partial Content] Algum atributo não recebido.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                }
            },
            "/api/users/{id}": {
                get: {
                    tags: [
                        "Users"
                    ],
                    description: "Retorna um usuário pelo id existente.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            type: "int",
                            description: "ID do emprego a ser buscado.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                    ],
                    responses: {
                        "200": {
                            description: "[OK] Usuário retornado com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "object",
                                       properties: {
                                           id: {
                                               type: "int"
                                           }
                                       }
                                   }
                                }
                            }
                        },
                        // Não implementado no UserController.
                        "404": {
                            description: "[Not Found] Nenhum usuário encontrado.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                },
                put: {
                    tags: [
                        "Users"
                    ],
                    description: "Altera os atributos pelo ID de um usuário existente.",
                    parameters: [
                        {
                            name: "firstName",
                            type: "string",
                            in: "body",
                            description: "Primeiro nome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "lastName",
                            type: "string",
                            in: "body",
                            description: "Sobrenome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "email",
                            type: "string",
                            in: "body",
                            description: "Email do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "password",
                            type: "string",
                            in: "body",
                            description: "Senha do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "lastName",
                            type: "string",
                            in: "body",
                            description: "Sobrenome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "isAdmin",
                            type: "boolean",
                            in: "body",
                            description: "Privilégios de administrador.",
                            required: false,
                            schema: {
                                type: "boolean"
                            }
                        },
                        {
                            name: "phoneNumber",
                            type: "string",
                            in: "body",
                            description: "Telefone para contato do usuário.",
                            required: false,
                            schema: {
                                type: "string"
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "[OK] Usuário atualizado com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        },
                        // Não implementado no UserController.
                        "206": {
                            description: "[Partial Content] Algum atributo não recebido.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                },
                delete: {
                    tags: [
                        "Users"
                    ],
                    description: "Remove um usuário existente pelo ID.",
                    responses: {
                        "200": {
                            description: "[OK] Usuário removido com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        },
                        // Não implementado no UserController.
                        "404": {
                            description: "[Not Found] Usuário não existe.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                }
            },
            "/api/jobs": {
                get: {
                    tags: [
                        "Jobs"
                    ],
                    description: "Retorna todos os empregos cadastrados no banco de dados.",
                    responses: {
                        "200": {
                            description: "[OK] Empregos listados com sucesso.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "array"
                                   } 
                                }
                            }
                        },
                        // Não implementado no JobController.
                        "404": {
                            description: "[Not Found] Nenhum emprego encontrado.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "array"
                                   } 
                                }
                            }
                        }
                    }
                },
                post: {
                    tags: [
                        "Jobs"
                    ],
                    description: "Cria um emprego no banco de dados",
                    parameters: [
                        {
                            name: "title",
                            type: "string",
                            in: "body",
                            description: "Título da vaga de emprego.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "description",
                            type: "string",
                            in: "body",
                            description: "Descrição da vaga de emprego.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "contactEmail",
                            type: "string",
                            in: "body",
                            description: "Email de contato da organização.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "qty",
                            type: "int",
                            in: "body",
                            description: "Quantidade de vagas.",
                            required: true,
                            schema: {
                                type: "int"
                            }
                        },
                        {
                            name: "type",
                            type: "string",
                            in: "body",
                            description: "Tipo de emprego: Estágio ou Contrato",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "salary",
                            type: "float",
                            in: "body",
                            description: "Valor do salário.",
                            required: true,
                            schema: {
                                type: "float"
                            }
                        },
                        {
                            name: "address",
                            type: "object",
                            in: "body",
                            description: "Endereço da vaga de emprego.",
                            required: false,
                            schema: {
                                type: "object"
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "[OK] Emprego criado com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        },
                        // Ainda não implementado no UserController
                        "206": {
                            description: "[Partial Content] Algum atributo não recebido.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                }
            },
            "/api/jobs/{id}": {
                get: {
                    tags: [
                        "Jobs"
                    ],
                    description: "Retorna um emprego pelo id existente.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            type: "int",
                            description: "ID do emprego a ser buscado.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                    ],
                    responses: {
                        "200": {
                            description: "[OK] Emprego retornado com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        },
                        // Não implementado no UserController.
                        "404": {
                            description: "[Not Found] Nenhum emprego encontrado.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                },
                put: {
                    tags: [
                        "Jobs"
                    ],
                    description: "Edita um emprego no banco de dados",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            type: "int",
                            description: "ID do emprego a ser buscado.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "title",
                            type: "string",
                            in: "body",
                            description: "Título da vaga de emprego.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "description",
                            type: "string",
                            in: "body",
                            description: "Descrição da vaga de emprego.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "contactEmail",
                            type: "string",
                            in: "body",
                            description: "Email de contato da organização.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "qty",
                            type: "int",
                            in: "body",
                            description: "Quantidade de vagas.",
                            required: true,
                            schema: {
                                type: "int"
                            }
                        },
                        {
                            name: "type",
                            type: "string",
                            in: "body",
                            description: "Tipo de emprego: Estágio ou Contrato",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "salary",
                            type: "float",
                            in: "body",
                            description: "Valor do salário.",
                            required: true,
                            schema: {
                                type: "float"
                            }
                        },
                        {
                            name: "address",
                            type: "object",
                            in: "body",
                            description: "Endereço da vaga de emprego.",
                            required: false,
                            schema: {
                                type: "object"
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "[OK] Emprego alterado com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        },
                        // Ainda não implementado no UserController
                        "206": {
                            description: "[Partial Content] Algum atributo não recebido.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                },
                delete: {
                    tags: [
                        "Jobs"
                    ],
                    description: "Remove um emprego pelo id existente.",
                    responses: {
                        "200": {
                            description: "[OK] Emprego removido!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        },
                        // Não implementado no UserController.
                        "404": {
                            description: "[Not Found] Nenhum emprego encontrado.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                }
            },
            "/api/events": {
                get: {
                    tags: [
                        "Events"
                    ],
                    description: "Retorna eventos cadastrados no banco de dados.",
                    responses: {
                        "200": {
                            description: "[OK] Eventos listados com sucesso.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "array"
                                   } 
                                }
                            }
                        },
                        // Não implementado no UserController.
                        "404": {
                            description: "[Not Found] Nenhum evento encontrado.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "array"
                                   } 
                                }
                            }
                        }
                    }
                },
                post: {
                    tags: [
                        "Events"
                    ],
                    description: "Cria um evento no banco de dados",
                    parameters: [
                        {
                            name: "title",
                            type: "string",
                            in: "body",
                            description: "Título do evento.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "description",
                            type: "string",
                            in: "body",
                            description: "Descrição detalhada do evento.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "email",
                            type: "string",
                            in: "body",
                            description: "Email do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "password",
                            type: "string",
                            in: "body",
                            description: "Senha do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "lastName",
                            type: "string",
                            in: "body",
                            description: "Sobrenome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "isAdmin",
                            type: "boolean",
                            in: "body",
                            description: "Privilégios de administrador.",
                            required: true,
                            schema: {
                                type: "boolean"
                            }
                        },
                        {
                            name: "phoneNumber",
                            type: "string",
                            in: "body",
                            description: "Telefone para contato do usuário.",
                            required: false,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "address",
                            in: "body",
                            description: "Endereço físico do evento.",
                            require: false,
                            schemas: {
                                properties: {
                                    publicArea: {
                                        type: "string"
                                    },
                                    number: {
                                        type: "string"
                                    },
                                    complement: {
                                        type: "string"
                                    },
                                    zipCode: {
                                        type: "string"
                                    },
                                    state: {
                                        type: "string"
                                    },
                                    district: {
                                        type: "string"
                                    }
                                }
                            },
                            type: "object"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "[OK] Usuário criado com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "Objeto JSON"
                                   } 
                                }
                            }
                        },
                        // Ainda não implementado no UserController
                        "206": {
                            description: "[Partial Content] Algum atributo não recebido.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                }
            },
            "/api/events/{id}" : {
                get: {
                    tags: [
                        "Events"
                    ],
                    description: "Retorna um evento pelo id existente.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            type: "int",
                            description: "ID do evento a ser buscado.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                    ],
                    responses: {
                        "200": {
                            description: "[OK] Evento retornado com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        },
                        // Não implementado no UserController.
                        "404": {
                            description: "[Not Found] Nenhum evento encontrado.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                },
                put: {
                    tags: [
                        "Events"
                    ],
                    description: "Atualiza um evento no banco de dados",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            type: "int",
                            description: "ID do evento a ser buscado.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "title",
                            type: "string",
                            in: "body",
                            description: "Título do evento.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "description",
                            type: "string",
                            in: "body",
                            description: "Descrição detalhada do evento.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "email",
                            type: "string",
                            in: "body",
                            description: "Email do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "password",
                            type: "string",
                            in: "body",
                            description: "Senha do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "lastName",
                            type: "string",
                            in: "body",
                            description: "Sobrenome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "isAdmin",
                            type: "boolean",
                            in: "body",
                            description: "Privilégios de administrador.",
                            required: true,
                            schema: {
                                type: "boolean"
                            }
                        },
                        {
                            name: "phoneNumber",
                            type: "string",
                            in: "body",
                            description: "Telefone para contato do usuário.",
                            required: false,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "address",
                            in: "body",
                            description: "Endereço físico do evento.",
                            require: false,
                            schemas: {
                                properties: {
                                    publicArea: {
                                        type: "string"
                                    },
                                    number: {
                                        type: "string"
                                    },
                                    complement: {
                                        type: "string"
                                    },
                                    zipCode: {
                                        type: "string"
                                    },
                                    state: {
                                        type: "string"
                                    },
                                    district: {
                                        type: "string"
                                    }
                                }
                            },
                            type: "object"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "[OK] Usuário criado com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "Objeto JSON"
                                   } 
                                }
                            }
                        },
                        // Ainda não implementado no UserController
                        "206": {
                            description: "[Partial Content] Algum atributo não recebido.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                },
                delete: {
                    tags: [
                        "Events"
                    ],
                    description: "Remove um evento existente pelo id.",
                    responses: {
                        "200": {
                            description: "[OK] Evento removido!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        },
                        // Não implementado no UserController.
                        "404": {
                            description: "[Not Found] Nenhum evento encontrado.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                }
            },
            "/api/specializations": {
                get: {
                    tags: [
                        "Specializations"
                    ],
                    description: "Retorna pós-graduações cadastradas no banco de dados.",
                    responses: {
                        "200": {
                            description: "[OK] Pós-graduações listadas com sucesso.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "array"
                                   } 
                                }
                            }
                        },
                        // Não implementado no UserController.
                        "404": {
                            description: "[Not Found] Nenhuma pós-graduação encontrada.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "array"
                                   } 
                                }
                            }
                        }
                    }
                },
                post: {
                    tags: [
                        "Specializations"
                    ],
                    description: "Cria uma pós-graduação no banco de dados",
                    parameters: [
                        {
                            name: "title",
                            type: "string",
                            in: "body",
                            description: "Título da pós-graduação.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "description",
                            type: "string",
                            in: "body",
                            description: "Descrição detalhada da pós-graduação.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "startDate",
                            type: "date",
                            in: "body",
                            description: "Data de início da vaga de pós-graduação.",
                            required: true,
                            schema: {
                                type: "date"
                            }
                        },
                        {
                            name: "endDate",
                            type: "date",
                            in: "body",
                            description: "Data de termínio da vaga de pós-graduação.",
                            required: true,
                            schema: {
                                type: "date"
                            }
                        },
                        {
                            name: "contactEmail",
                            type: "string",
                            in: "body",
                            description: "Email para contato da vaga de pós-graduação",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "qty",
                            type: "int",
                            in: "body",
                            description: "Quantidade de vagas para a pós-graduação.",
                            required: true,
                            schema: {
                                type: "int"
                            }
                        },
                        {
                            name: "address",
                            in: "body",
                            type: "object",
                            description: "Endereço físico do evento.",
                            require: false,
                            schemas: {
                                type: "object"
                            },
                        }
                    ],
                    responses: {
                        "200": {
                            description: "[OK] Pós-graduação criada com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "Objeto JSON"
                                   } 
                                }
                            }
                        },
                        // Ainda não implementado no UserController
                        "206": {
                            description: "[Partial Content] Algum atributo não recebido.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                }
            },
            "/api/specializations/{id}": {
                get: {
                    tags: [
                        "Specializations"
                    ],
                    description: "Retorna uma pós-graduação pelo id existente.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            type: "int",
                            description: "ID da pós-graduação a ser buscada.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                    ],
                    responses: {
                        "200": {
                            description: "[OK] Pós-graduação retornada com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        },
                        // Não implementado no UserController.
                        "404": {
                            description: "[Not Found] Nenhuma pós-graduação encontrada.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                },
                put: {
                    tags: [
                        "Specializations"
                    ],
                    description: "Atualiza uma pós-graduação no banco de dados",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            type: "int",
                            description: "ID da pós-graduaçõ a ser buscada.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "title",
                            type: "string",
                            in: "body",
                            description: "Título da pós-graduação.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "description",
                            type: "string",
                            in: "body",
                            description: "Descrição detalhada da pós-graduação.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "startDate",
                            type: "date",
                            in: "body",
                            description: "Data de início da vaga de pós-graduação.",
                            required: true,
                            schema: {
                                type: "date"
                            }
                        },
                        {
                            name: "endDate",
                            type: "date",
                            in: "body",
                            description: "Data de termínio da vaga de pós-graduação.",
                            required: true,
                            schema: {
                                type: "date"
                            }
                        },
                        {
                            name: "contactEmail",
                            type: "string",
                            in: "body",
                            description: "Email para contato da vaga de pós-graduação",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "qty",
                            type: "int",
                            in: "body",
                            description: "Quantidade de vagas para a pós-graduação.",
                            required: true,
                            schema: {
                                type: "int"
                            }
                        },
                        {
                            name: "address",
                            in: "body",
                            description: "Endereço físico do evento.",
                            required: false,
                            schema: {
                                type: "object"
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "[OK] Pós-graduação atualizada com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "object"
                                   } 
                                }
                            }
                        },
                        // Ainda não implementado no UserController
                        "206": {
                            description: "[Partial Content] Algum atributo não recebido.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                },
                delete: {
                    tags: [
                        "Specializations"
                    ],
                    description: "Remove uma pós-graduação existente pelo id.",
                    responses: {
                        "200": {
                            description: "[OK] Pós-graduação removida com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        },
                        // Não implementado no UserController.
                        "404": {
                            description: "[Not Found] Nenhuma pós-graduação encontrada.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                }
            },
            "/api/address": {
                get: {
                    tags: [
                        "Address"
                    ],
                    description: "Retorna endereços cadastrados no banco de dados.",
                    responses: {
                        "200": {
                            description: "[OK] Endereços listados com sucesso.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "array"
                                   } 
                                }
                            }
                        },
                        // Não implementado no UserController.
                        "404": {
                            description: "[Not Found] Nenhum endereço encontrado.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "array"
                                   } 
                                }
                            }
                        }
                    }
                },
                post: {
                    tags: [
                        "Address"
                    ],
                    description: "Cria um endereço no banco de dados",
                    parameters: [
                        {
                            name: "publicArea",
                            type: "string",
                            in: "body",
                            description: "Logradouro do endereço. ",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "number",
                            type: "string",
                            in: "body",
                            description: "Número do endereço.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "complement",
                            type: "string",
                            in: "body",
                            description: "Complemento do endereço.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "zipCode",
                            type: "int",
                            in: "body",
                            description: "CEP do endereço.",
                            required: true,
                            schema: {
                                type: "int"
                            }
                        },
                        {
                            name: "state",
                            type: "string",
                            in: "body",
                            description: "Estado do endereço.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "district",
                            type: "string",
                            in: "body",
                            description: "Bairro do endereço.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "city",
                            in: "body",
                            type: "string",
                            description: "Cidade do endereço.",
                            require: false,
                            schemas: {
                                type: "string"
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "[OK] Endereço criado com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "object"
                                   } 
                                }
                            }
                        },
                        // Ainda não implementado no UserController
                        "206": {
                            description: "[Partial Content] Algum atributo não recebido.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "object"
                                   } 
                                }
                            }
                        }
                    }
                }
            },
            "/api/address/{id}": {
                get: {
                    tags: [
                        "Address"
                    ],
                    description: "Retorna um endereço pelo id existente.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            type: "int",
                            description: "ID do endereço a ser buscada.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                    ],
                    responses: {
                        "200": {
                            description: "[OK] Endereço retornado com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        },
                        // Não implementado no UserController.
                        "404": {
                            description: "[Not Found] Nenhum endereço encontrado.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "json"
                                   } 
                                }
                            }
                        }
                    }
                },
                put: {
                    tags: [
                        "Address"
                    ],
                    description: "Cria um endereço no banco de dados",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            type: "int",
                            description: "ID do endereço a ser buscado.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "publicArea",
                            type: "string",
                            in: "body",
                            description: "Logradouro do endereço. ",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "number",
                            type: "string",
                            in: "body",
                            description: "Número do endereço.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "complement",
                            type: "string",
                            in: "body",
                            description: "Complemento do endereço.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "zipCode",
                            type: "int",
                            in: "body",
                            description: "CEP do endereço.",
                            required: true,
                            schema: {
                                type: "int"
                            }
                        },
                        {
                            name: "state",
                            type: "string",
                            in: "body",
                            description: "Estado do endereço.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "district",
                            type: "string",
                            in: "body",
                            description: "Bairro do endereço.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "city",
                            in: "body",
                            type: "string",
                            description: "Cidade do endereço.",
                            require: false,
                            schemas: {
                                type: "string"
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "[OK] Endereço criado com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "object"
                                   } 
                                }
                            }
                        },
                        // Ainda não implementado no UserController
                        "206": {
                            description: "[Partial Content] Algum atributo não recebido.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "object"
                                   } 
                                }
                            }
                        }
                    }
                },
                delete: {
                    tags: [
                        "Address"
                    ],
                    description: "Remove um endereço existente pelo id.",
                    responses: {
                        "200": {
                            description: "[OK] Endereço removido com sucesso!",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "object"
                                   } 
                                }
                            }
                        },
                        // Não implementado no UserController.
                        "404": {
                            description: "[Not Found] Nenhum endereço encontrado.",
                            content: {
                                "application/json": {
                                   schema: {
                                       type: "object"
                                   } 
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    // ['.routes/*.js']
    apis: ["app.js"]
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);