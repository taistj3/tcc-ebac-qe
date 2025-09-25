#language: pt

Funcionalidade: adicionar produtos ao carrinho
Como cliente da EBAC-SHOP
Quero adicionar produtos no carrinho
Para realizar a compra dos itens

Contexto:
Dado que eu esteja na página de um produto

Cenário: adicionar produto ao carrinho
Quando eu selecionar todas as características do produto
E a quantidade se limitar a 10 ou menos
Então deve permitir adicionar ao carrinho

Cenário: limite de quantidade de 10 itens do mesmo produto
Quando eu selecionar 11 ou mais itens do mesmo produto
Então deve exibir mensagem de alerta "Limite de 10 itens por vez"

Cenário: não permitir valores acima de R$ 990,00
Dado que eu esteja na página do carrinho
Quando o valor total do carrinho ultrapassar R$ 990,00
Então deve exibir mensagem de alerta "Valor máximo do carrinho é R$ 990,00"

Cenário: aplicar cupom de 10% de desconto para compras entre R$ 200,00 e R$ 600,00
Dado que eu esteja na página do carrinho
Quando o valor total do carrinho for R$ 201,00
Então o sistema deve aplicar um cupom de 10% de desconto

Cenário: aplicar cupom de 15% de desconto para compras acima de R$ 600,00
Dado que eu esteja na página do carrinho
Quando o valor total do carrinho for de R$ 601,00
Então o sistema deve aplicar um cupom de 15% de desconto
