#language: pt

Funcionalidade: catálogo de produtos
Como cliente da EBAC-SHOP
Quero visualizar o catálogo de produtos
Para escolher e adicionar itens ao meu carrinho

Contexto:
Dado que eu esteja na página de produtos

Cenário: visualizar produtos disponíveis
Quando eu navegar pelo catálogo de produtos
Então devo visualizar os produtos disponíveis

Cenário: buscar produtos por nome
Quando eu digitar "jacket" na barra de busca
E clicar no botão de busca
Então deve exibir os produtos correspondentes ao nome buscado

Cenário: filtrar produtos por categoria
Quando eu selecionar uma categoria específica
Então deve exibir apenas os produtos daquela categoria

Cenário: exibir detalhes do produto
Quando eu clicar em um produto específico
Então deve exibir os detalhes do produto, incluindo preço, descrição e imagens