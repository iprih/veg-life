define({ "api": [
  {
    "type": "get",
    "url": "/estabelecimentos",
    "title": "",
    "name": "GetEstabelecimentos",
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
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Internal",
            "description": "<p>Server Error.</p>"
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
    "type": "post",
    "url": "/estabelecimentos",
    "title": "",
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
    "version": "0.0.0",
    "filename": "src/routes/estabelecimentosRoutes.js",
    "groupTitle": "PostEstabelecimentos",
    "name": "PostEstabelecimentos"
  }
] });
