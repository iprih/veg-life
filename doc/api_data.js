define({ "api": [
  {
    "type": "delete",
    "url": "/estabelecimentos/:cnpj",
    "title": "",
    "name": "Exclus_o_do_Estabelecimento",
    "group": "DeleteEstabelecimentos",
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
            "field": "Mensagem",
            "description": "<p>de sucesso ao excluir um estabelecimento</p>"
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
    "groupTitle": "DeleteEstabelecimentos"
  },
  {
    "type": "get",
    "url": "/estabelecimentos",
    "title": "",
    "name": "Estabelecimentos_Cadastrados",
    "group": "GetEstabelecimentos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>estabelecimentos cadastrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{    \n\"nomeEstabelecimento\": \"Teste\",\n\"cnpj\": 123456,\n\"categoria\": \"Teste\",\n\"tipoNegocio\": \"Teste\",\n\"email\": \"Teste\",\n\"endereco\": \"Teste\",\n\"numero\": \"Teste\",\n\"cidade\": \"Teste\",\n\"uf\": \"Teste\",\n\"cep\": 0800,\n\"diaSemana\": \"Teste\",\n\"horario\": \"Teste\"\n}]",
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
    "groupTitle": "GetEstabelecimentos"
  },
  {
    "type": "get",
    "url": "/estabelecimentos/:categoria",
    "title": "",
    "name": "Estabelecimentos_por_Categoria",
    "group": "GetEstabelecimentos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Categoria",
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
            "description": "<p>Estabelecimentos por Categoria: Vegano, Ovolactovegetariano ou Lactovegetariano.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{    \n\"nomeEstabelecimento\": \"Teste\",\n\"categoria\": \"Teste\",\n\"tipoNegocio\": \"Teste\",\n\"email\": \"Teste\",\n\"bairro\": \"Teste\",\n\"diaSemana\": \"Teste\",\n\"horario\": \"Teste\"\n}]",
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
    "groupTitle": "GetEstabelecimentos"
  },
  {
    "type": "post",
    "url": "/estabelecimentos",
    "title": "",
    "name": "Cadastro_de_Estabelecimentos",
    "group": "PostEstabelecimentos",
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
            "field": "diaSemana",
            "description": "<p>Dias de atendimento do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "horario",
            "description": "<p>Horario de atendimento do estabelecimento</p>"
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
    "groupTitle": "PostEstabelecimentos"
  },
  {
    "type": "put",
    "url": "/estabelecimentos/:cnpj",
    "title": "",
    "name": "Atualiza__o_de_dados_do_Estabelecimento",
    "group": "PutEstabelecimentos",
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
            "field": "diaSemana",
            "description": "<p>Dias de atendimento do estabelecimento</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "horario",
            "description": "<p>Horario de atendimento do estabelecimento</p>"
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
    "groupTitle": "PutEstabelecimentos"
  }
] });
