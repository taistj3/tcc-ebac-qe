#language: pt

Funcionalidade: Meus Pedidos
Como cliente da EBAC-SHOP
Quero visualizar meus pedidos realizados
Para acompanhar o status e detalhes da compra

Contexto:
Dado que eu esteja logado na página de Pedidos

Cenário: exibir lista de pedidos
Dado que eu esteja logado na página Minha Conta
Quando eu acessar a seção "Pedidos"
Então deve exibir uma lista de todos os meus pedidos realizados

Cenário: status do pedido
Quando eu navegar pela lista de pedidos
Então deve exibir o status atual de cada pedido (ex: Processando, Enviado, Concluído)

Cenário: exibir detalhes do pedido
Quando eu clicar em um pedido específico na lista
Então deve exibir os detalhes completos do pedido, incluindo itens comprados, quantidades, preços e data da compra

Cenário: mensagem de pedido inexistente
Quando não houver pedidos realizados
Então deve exibir a mensagem “Nenhum pedido foi feito ainda”.