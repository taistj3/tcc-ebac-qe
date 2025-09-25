#language: pt

Funcionalidade: Endereços
Como cliente da EBAC-SHOP
Quero visualizar, cadastrar e editar meus endereços de entrega e cobrança
Para agilizar compras futuras

Contexto:
Dado que eu esteja logado na página de Endereços

Cenário: preencher campos obrigatórios
Quando eu cadastrar um novo endereço preenchendo todos os campos obrigatórios
Então deve exibir mensagem de sucesso "Endereço cadastrado com sucesso"

Cenário: preencher campos obrigatórios
Quando eu cadastrar um novo endereço sem preencher os campos obrigatórios
Então deve exibir mensagem de erro "Campos obrigatórios não preenchidos"

Cenário: editar endereço existente
Quando eu editar um endereço existente preenchendo todos os campos obrigatórios
Então deve exibir mensagem de sucesso "Endereço atualizado com sucesso"

Cenário: visualizar endereço cadastrado no checkout
Quando eu acessar a página de checkout
Então deve exibir o endereço cadastrado