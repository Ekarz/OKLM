define({ "api": [
  {
    "type": "delete",
    "url": "/categories/:id",
    "title": "Delete a category",
    "name": "DeleteOneCategory",
    "group": "Categories",
    "description": "<p>Supprime la catégorie correspondant à l'ID</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la catégorie à supprimer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 5a9e8ff745cff725146b83f3",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/categories/index.js",
    "groupTitle": "Categories",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/categories/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/categories",
    "title": "Get top level categories",
    "name": "GetFirstCategories",
    "group": "Categories",
    "description": "<p>Cette URL affiche un JSON contenant toutes les Catégories de la BDD qui n'ont pas de catégorie mère : ce sont donc les &quot;premières&quot; catégories, qui partent de la racine.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n {\n   \"_id\": \"5a9e8f301b310a244bc74210\",\n   \"name\": \"Catégorie 1\",\n   \"__v\": 0\n },\n {\n   \"_id\": \"5a9e8ff745cff725146b83f3\",\n   \"name\": \"Catégorie 2\",\n   \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/categories/index.js",
    "groupTitle": "Categories",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/categories"
      }
    ]
  },
  {
    "type": "get",
    "url": "/categories/:id",
    "title": "Get a category (and its children)",
    "name": "GetOneCategory",
    "group": "Categories",
    "description": "<p>Cette URL affiche un JSON contenant la catégorie correspondant à l'ID, et son contenu si cela est demandé dans le champ de query &quot;content&quot;</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la catégorie à afficher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>Query à mettre égal à &quot;all&quot; pour avoir également le contenu de la catégorie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 5a9e90288e165e255773b6aa",
          "type": "String"
        },
        {
          "title": "With Query :",
          "content": "id: 5a9e8ff745cff725146b83f3\ncontent: all",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n   \"_id\": \"5a9e90288e165e255773b6aa\",\n   \"name\": \"Catégorie 3\",\n   \"motherCategory\": \"5a9e8f301b310a244bc74210\",\n   \"__v\": 0\n}",
          "type": "json"
        },
        {
          "title": "With Query :",
          "content": "{\n  \"_id\": \"5a9e8ff745cff725146b83f3\",\n  \"name\": \"Catégorie 2\",\n  \"__v\": 0,\n  \"content\": {\n      \"categories\": [\n          {\n              \"_id\": \"5a9ea94a71e517367db42b14\",\n              \"name\": \"Catégorie 4\",\n              \"motherCategory\": \"5a9e8ff745cff725146b83f3\",\n              \"__v\": 0\n          },\n          {\n              \"_id\": \"5a9eb0cfcfd3993e22132b6a\",\n              \"name\": \"Catégorie 5\",\n              \"motherCategory\": \"5a9e8ff745cff725146b83f3\",\n              \"__v\": 0\n          }\n      ],\n      \"documents\": [\n          {\n              \"_id\": \"5a9eaefe3597423cb1c4376e\",\n              \"title\": \"Document dans une catégorie\",\n              \"uri\": \"g1categorie.fr\",\n              \"motherCategory\": \"5a9e8ff745cff725146b83f3\",\n              \"creationTime\": \"2018-03-06T15:08:46.039Z\",\n              \"__v\": 0\n          }\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/categories/index.js",
    "groupTitle": "Categories",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/categories/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/categories",
    "title": "Create a category",
    "name": "PostOneCategory",
    "group": "Categories",
    "description": "<p>Crée une catégorie et l'ajoute dans la BDD</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de la catégorie</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "motherCategory",
            "description": "<p>ID de la catégorie mère si elle existe</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Catégorie 3\",\n  \"motherCategory\": \"5a9e8f301b310a244bc74210\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"name\": \"Catégorie 3\",\n  \"motherCategory\": \"5a9e8f301b310a244bc74210\",\n  \"_id\": \"5a9e90288e165e255773b6aa\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/categories/index.js",
    "groupTitle": "Categories",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/categories"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/documents/:id",
    "title": "Delete a document",
    "name": "DeleteOneDocument",
    "group": "Documents",
    "description": "<p>Supprime le document correspondant à l'ID</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID du document à supprimer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 5a9e7dc7717a690c53650ab1",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/documents/index.js",
    "groupTitle": "Documents",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/documents/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/documents",
    "title": "Get all documents",
    "name": "GetAllDocuments",
    "group": "Documents",
    "description": "<p>Cette URL affiche un JSON contenant tous les Documents de la BDD</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n {\n   \"_id\": \"5a9e7dc7717a690c53650ab1\",\n   \"title\": \"Document avec URI\",\n   \"uri\": \"perdu.com\",\n   \"author\" : \"5a9ec0f0a03d0a1ae7d14deb\"\n   \"creationTime\": \"2018-03-06T11:38:47.160Z\",\n   \"__v\": 0\n },\n {\n   \"_id\": \"5a9e7e591817c20db4ef0e40\",\n   \"title\": \"Autre document\",\n   \"uri\": \"centralelille.fr\",\n   \"author\" : \"5a9ec0eca03d0a1ae7d14dea\"\n   \"creationTime\": \"2018-03-06T11:41:13.491Z\",\n   \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/documents/index.js",
    "groupTitle": "Documents",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/documents"
      }
    ]
  },
  {
    "type": "get",
    "url": "/documents/:id",
    "title": "Get a document",
    "name": "GetOneDocument",
    "group": "Documents",
    "description": "<p>Cette URL affiche un JSON contenant le document correspondant à l'ID</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID du document à afficher</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 5a9e7dc7717a690c53650ab1",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n   \"_id\": \"5a9e7dc7717a690c53650ab1\",\n   \"title\": \"Document avec URI\",\n   \"uri\": \"perdu.com\",\n   \"author\" : \"5a9ec0f0a03d0a1ae7d14deb\"\n   \"creationTime\": \"2018-03-06T11:38:47.160Z\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/documents/index.js",
    "groupTitle": "Documents",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/documents/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/documents",
    "title": "Create a document",
    "name": "PostOneDocument",
    "group": "Documents",
    "description": "<p>Crée un document et l'ajoute dans la BDD</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Titre du document</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Lien vers le document</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "motherCategory",
            "description": "<p>ID de la catégorie mère si elle existe</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>ID du propriétaire du document</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"title\": \"Document dans une catégorie\",\n \"uri\": \"g1categorie.fr\",\n \"motherCategory\": \"5a9e8ff745cff725146b83f3\"\n \"author\" : \"5a9ec0f0a03d0a1ae7d14deb\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"title\": \"Document dans une catégorie\",\n  \"uri\": \"g1categorie.fr\",\n  \"motherCategory\": \"5a9e8ff745cff725146b83f3\",\n  \"author\" : \"5a9ec0f0a03d0a1ae7d14deb\"\n  \"creationTime\": \"2018-03-06T15:08:46.039Z\",\n  \"_id\": \"5a9eaefe3597423cb1c4376e\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/documents/index.js",
    "groupTitle": "Documents",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/documents"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete a user",
    "name": "DeleteOneUser",
    "group": "Users",
    "description": "<p>Supprime l'user correspondant à l'ID</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de l'user à supprimer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 5a9e7dc7717a690c53650ab1",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/users/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/:id/documents",
    "title": "Get all documents of one user",
    "name": "GetAllDocumentsOfUser",
    "group": "Users",
    "description": "<p>Cette URL affiche un JSON contenant tous les Documents créés par un user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de l'user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 5a9ec0f0a03d0a1ae7d14deb",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n {\n   \"_id\": \"5a9e7dc7717a690c53650ab1\",\n   \"title\": \"Document avec URI\",\n   \"uri\": \"perdu.com\",\n   \"author\" : \"5a9ec0f0a03d0a1ae7d14deb\"\n   \"creationTime\": \"2018-03-06T11:38:47.160Z\",\n   \"__v\": 0\n },\n {\n   \"_id\": \"5a9e7e591817c20db4ef0e40\",\n   \"title\": \"Autre document\",\n   \"uri\": \"centralelille.fr\",\n   \"author\" : \"5a9ec0f0a03d0a1ae7d14deb\"\n   \"creationTime\": \"2018-03-06T11:41:13.491Z\",\n   \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/users/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/:id/documents"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get all users",
    "name": "GetAllUsers",
    "group": "Users",
    "description": "<p>Cette URL affiche un JSON contenant tous les users de la BDD</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n {\n   \"_id\": \"5a9e7dc7717a690c53650ab1\",\n   \"name\": \"Jean-Victor\",\n   \"creationTime\": \"2018-03-06T11:38:47.160Z\",\n   \"__v\": 0\n },\n {\n   \"_id\": \"5a9e7e591817c20db4ef0e40\",\n   \"name\": \"Philippe JailBreaklivet\",\n   \"creationTime\": \"2018-03-06T11:41:13.491Z\",\n   \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/users/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get a user",
    "name": "GetOneUser",
    "group": "Users",
    "description": "<p>Cette URL affiche un JSON contenant l'user correspondant à l'ID</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de l'user à afficher</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 5a9e7dc7717a690c53650ab1",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n   \"_id\": \"5a9e7dc7717a690c53650ab1\",\n   \"name\": \"Jean-Victor\",\n   \"creationTime\": \"2018-03-06T11:38:47.160Z\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/users/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/user/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create a user",
    "name": "PostOneUser",
    "group": "Users",
    "description": "<p>Crée un user et l'ajoute dans la BDD</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de l'user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"name\": \"Jean-Victor\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"name\": \"Jean-Victor\",\n  \"creationTime\": \"2018-03-06T15:08:46.039Z\",\n  \"_id\": \"5a9eaefe3597423cb1c4376e\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/resources/users/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users"
      }
    ]
  }
] });
