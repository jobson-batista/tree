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
            version: "1.0.0"
        },
        paths: {
            "/api/users" : {
                get: {
                    tags: [
                        "Users"
                    ],
                    description: "Retorna todos os usuários cadastrados no banco de dados.",
                    responses: {
                        "200": {
                            description: "[OK] Usuários listados com sucesso.",
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
                            in: "path",
                            description: "Primeiro nome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "lastName",
                            in: "path",
                            description: "Sobrenome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "email",
                            in: "path",
                            description: "Email do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "password",
                            in: "path",
                            description: "Senha do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "lastName",
                            in: "path",
                            description: "Sobrenome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "isAdmin",
                            in: "path",
                            description: "Privilégios de administrador.",
                            required: true,
                            schema: {
                                type: "boolean"
                            }
                        },
                        {
                            name: "phoneNumber",
                            in: "path",
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
                    responses: {
                        "200": {
                            description: "[OK] Usuário retornado com sucesso!",
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
                            in: "path",
                            description: "Primeiro nome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "lastName",
                            in: "path",
                            description: "Sobrenome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "email",
                            in: "path",
                            description: "Email do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "password",
                            in: "path",
                            description: "Senha do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "lastName",
                            in: "path",
                            description: "Sobrenome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "isAdmin",
                            in: "path",
                            description: "Privilégios de administrador.",
                            required: true,
                            schema: {
                                type: "boolean"
                            }
                        },
                        {
                            name: "phoneNumber",
                            in: "path",
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
                            in: "path",
                            description: "Título da vaga de emprego.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "description",
                            in: "path",
                            description: "Descrição da vaga de emprego.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "contactEmail",
                            in: "path",
                            description: "Email de contato da organização.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "qty",
                            in: "path",
                            description: "Quantidade de vagas.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "type",
                            in: "path",
                            description: "Tipo de emprego: Estágio ou Contrato",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "salary",
                            in: "path",
                            description: "Valor do salário.",
                            required: true,
                            schema: {
                                type: "float"
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
                            name: "title",
                            in: "path",
                            description: "Título da vaga de emprego.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "description",
                            in: "path",
                            description: "Descrição da vaga de emprego.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "contactEmail",
                            in: "path",
                            description: "Email de contato da organização.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "qty",
                            in: "path",
                            description: "Quantidade de vagas.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "type",
                            in: "path",
                            description: "Tipo de emprego: Estágio ou Contrato",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "salary",
                            in: "path",
                            description: "Valor do salário.",
                            required: true,
                            schema: {
                                type: "float"
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
                        "Users"
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
                            name: "firstName",
                            in: "path",
                            description: "Primeiro nome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "lastName",
                            in: "path",
                            description: "Sobrenome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "email",
                            in: "path",
                            description: "Email do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "password",
                            in: "path",
                            description: "Senha do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "lastName",
                            in: "path",
                            description: "Sobrenome do usuário.",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        },
                        {
                            name: "isAdmin",
                            in: "path",
                            description: "Privilégios de administrador.",
                            required: true,
                            schema: {
                                type: "boolean"
                            }
                        },
                        {
                            name: "phoneNumber",
                            in: "path",
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
            "/api/events/{id}" : {
                tags: [
                    "Events"
                ]
            }
        }
    },
    // ['.routes/*.js']
    apis: ["app.js"]
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);