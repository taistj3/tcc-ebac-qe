#language: pt

Funcionalidade: minha conta
Como cliente da EBAC-SHOP
Quero acessar o painel Minha Conta
Para visualizar e gerenciar minhas informações pessoais, pedidos e endereços

Contexto:
Dado que eu esteja logado na página Minha Conta

Cenário: permitir apenas acesso autorizado
Dado que eu esteja na página inicial
Quando eu tentar acessar a página Minha Conta sem estar logado
Então devo ser redirecionado para a página de login

Cenário: exibir meu username e boas vindas
Quando eu acessar a página Minha Conta
Então deve exibir meu username e uma mensagem de boas-vindas

Cenário: exibir “Meus Pedidos”, “Endereços” e “Detalhes da Conta” no painel
Quando eu navegar pelo painel
Então devo ter acesso às seções "Meus Pedidos", "Endereços" e "Detalhes da Conta"

Cenário: função logout
Quando eu clicar em "Logout"
Então devo ser redirecionado para a página inicial
E minha sessão deve ser encerrada