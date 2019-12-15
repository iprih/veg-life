define({ "api": [
  {
    "type": "delete",
    "url": "/estabelecimentos/:cnpj",
    "title": "Exclusao de estabelecimento",
    "name": "DeleteEstabelecimento",
    "group": "Estabelecimentos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "CNPJ",
            "description": "<p>CNPJ do estabelecimento</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>Mensagem de sucesso ao excluir um estabelecimento</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n{ message: 'Estabelecimento removido com sucesso!' }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Não localizamos o Estabelecimento para exclusão!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estabelecimentosRoutes.js",
    "groupTitle": "Estabelecimentos"
  },
  {
    "type": "get",
    "url": "/estabelecimentos/:cnpj",
    "title": "Retorno de estabelecimentos por cnpj",
    "name": "GetByCNPJ",
    "group": "Estabelecimentos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "CNPJ",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>Informacoes dos Estabelecimentos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{    \n\"nomeEstabelecimento\": \"Teste\",\n\"cnpj\": 123456,\n\"categoria\": \"Teste\",\n\"tipoNegocio\": \"Teste\",\n\"email\": \"Teste\",\n\"endereco\": \"Teste\",\n\"numero\": \"Teste\",\n\"bairro\": \"teste\",\n\"cidade\": \"Teste\",\n\"uf\": \"Teste\",\n\"cep\": 0800,\n\"diasAtendimento\": \"Teste\",\n\"horariosAtendimento\": \"Teste\"\n\"telefone\": \"teste\",\n\"delivery\": \"teste\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estabelecimentosRoutes.js",
    "groupTitle": "Estabelecimentos"
  },
  {
    "type": "get",
    "url": "/estabelecimentos/:categoria/categoria",
    "title": "Retorno de estabelecimentos por categoria",
    "name": "GetByCategoria",
    "group": "Estabelecimentos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Categoria",
            "description": "<p>Vegano, Ovolactovegetariano ou Lactovegetariano</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>Informacoes dos Estabelecimentos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{    \n\"nomeEstabelecimento\": \"Teste\",\n\"tipoNegocio\": \"Teste\",\n\"bairro\": \"Teste\",\n\"telefone\": \"1234\"\n\"diasAtendimento\": \"Teste\",\n\"horariosAtendimento\": \"Teste\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Não localizamos a categoria solicitada!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estabelecimentosRoutes.js",
    "groupTitle": "Estabelecimentos"
  },
  {
    "type": "get",
    "url": "/estabelecimentos/:tipoNegocio/negocio",
    "title": "Retorno de estabelecimentos por negocio",
    "name": "GetByTipoNegocio",
    "group": "Estabelecimentos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Restaurante",
            "description": "<p>, Pizzaria, Bares-Lanchonetes, Mercado, Loja</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>Informacoes dos Estabelecimentos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{    \n\"nomeEstabelecimento\": \"Teste\",\n\"categoria\": \"Teste\",\n\"bairro\": \"Teste\",\n\"telefone\": \"1234\"\n\"diasAtendimento\": \"Teste\",\n\"horariosAtendimento\": \"Teste\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Não localizamos o tipo de negocio solicitado!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estabelecimentosRoutes.js",
    "groupTitle": "Estabelecimentos"
  },
  {
    "type": "get",
    "url": "/estabelecimentos",
    "title": "Retorno de estabelecimentos",
    "name": "GetCadastrados",
    "group": "Estabelecimentos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>estabelecimentos cadastrados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{    \n\"nomeEstabelecimento\": \"Teste\",\n\"cnpj\": 123456,\n\"categoria\": \"Teste\",\n\"tipoNegocio\": \"Teste\",\n\"email\": \"Teste\",\n\"endereco\": \"Teste\",\n\"numero\": \"Teste\",\n\"bairro\": \"teste\",\n\"cidade\": \"Teste\",\n\"uf\": \"Teste\",\n\"cep\": 0800,\n\"diasAtendimento\": \"Teste\",\n\"horariosAtendimento\": \"Teste\"\n\"telefone\": \"teste\",\n\"delivery\": \"teste\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "serverError",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estabelecimentosRoutes.js",
    "groupTitle": "Estabelecimentos"
  },
  {
    "type": "put",
    "url": "/estabelecimentos/:cnpj",
    "title": "Atualizacao de estabelecimento",
    "name": "PutEstabelecimento",
    "group": "Estabelecimentos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "CNPJ",
            "description": "<p>CNPJ do estabelecimento</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nomeEstabelecimento",
            "description": "<p>Nome do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "cnpj",
            "description": "<p>Cnpj</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Vegano, Ovolactovegetariano ou Lactovegetariano</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "tipoNegocio",
            "description": "<p>Restaurante, Bar-Lanchonete ou Pizzaria</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco",
            "description": "<p>Endereço do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "numero",
            "description": "<p>Número do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "bairro",
            "description": "<p>Bairro do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "cidade",
            "description": "<p>Cidade</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "uf",
            "description": "<p>UF</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "cep",
            "description": "<p>CEP do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "diasAtendimento",
            "description": "<p>Dias de atendimento do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "horariosAtendimento",
            "description": "<p>Horario de atendimento do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "Telefone",
            "description": "<p>Telefone de atendimento com ddd</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "delivery",
            "description": "<p>Delivery Sim ou Nao</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Mensagem",
            "description": "<p>de sucesso ao alterar dados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n{ mensagem: \"Estabelecimento atualizado com sucesso!\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Não localizamos o Estabelecimento para atualizar!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estabelecimentosRoutes.js",
    "groupTitle": "Estabelecimentos"
  },
  {
    "type": "post",
    "url": "/estabelecimentos",
    "title": "Criação de estabelecimento",
    "name": "PutEstabelecimentos",
    "group": "Estabelecimentos",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nomeEstabelecimento",
            "description": "<p>Nome do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "cnpj",
            "description": "<p>Cnpj</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Vegano, Ovolactovegetariano ou Lactovegetariano</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "tipoNegocio",
            "description": "<p>Restaurante, Bar-Lanchonete ou Pizzaria</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco",
            "description": "<p>Endereço do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "numero",
            "description": "<p>Número do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "bairro",
            "description": "<p>Bairro do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "cidade",
            "description": "<p>Cidade</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "uf",
            "description": "<p>UF</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "cep",
            "description": "<p>CEP do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "diasAtendimento",
            "description": "<p>Dias de atendimento do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "horariosAtendimento",
            "description": "<p>Horario de atendimento do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "Telefone",
            "description": "<p>Telefone de atendimento com ddd</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "delivery",
            "description": "<p>Delivery Sim ou Nao</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created\n{\n    status: true,\n    mensagem: \"Estabelecimento cadastrado com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "serverError",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estabelecimentosRoutes.js",
    "groupTitle": "Estabelecimentos"
  }
] });
