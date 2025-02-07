Essa API tem como tema o gerenciamento de uma lista de guitarras, possibilitando o gerenciamento das mesmas
Cada uma possui marca, cor, ponte e modelo

Para rodar o projeto utilize no terminal: npm i e npm start

Todos os comandos são utilizados na rota http://localhost:3333/guitarras
as requisições podem ser feitas no postman

Adicionar uma guitarra:
Utiliza o método POST e requer todos os parâmetros
Exemplo:
{
        "marca": "Gibson",
        "modelo": "Les Paul",
        "cor": "Sunburst",
        "ponte": "Tremolo"
}

Listar todas as guitarras:
Utiliza o método GET e não requer parâmetros

Listar uuma guitarra específica:
Utiliza o método GET, mas quando é passado um parâmetro de ID, apenas a guitarra com esse ID será listada
exemplo:
{
        "id": "1a60e442-4fc0-4c3d-b20f-aef44085a425",
}

Alterar uma guitarra:
Utiliza o método PUT e requer o parâmetro de ID, os outros parâmetros são opcionais e serão aplicados somente os especificados
exemplo:
{
        "id": "1a60e442-4fc0-4c3d-b20f-aef44085a425",
        "modelo": "Super Strato",
        "cor": "Azul"
}

Deletar uma guitarra:
Utiliza o método DELETE e requer o parâmetro de ID
exemplo:
{
        "id": "1a60e442-4fc0-4c3d-b20f-aef44085a425",
}