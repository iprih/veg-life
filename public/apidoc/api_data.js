define({ "api": [
  {
    "type": "get",
    "url": "/estabelecimentos",
    "title": "",
    "name": "ListarEstabelecimentos",
    "group": "Estabelecimentos__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>Lista de Estabelecimentos</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/estabelecimentosRoutes.js",
    "groupTitle": "Estabelecimentos__"
  }
] });
