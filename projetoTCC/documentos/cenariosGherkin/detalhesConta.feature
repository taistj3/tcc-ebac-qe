#language: pt

Funcionalidade: Detalhes da Conta
Como cliente da EBAC-SHOP
Quero atualizar meus dados pessoais e senha
Para manter meus dados atualizados e seguros

Contexto:
Dado que eu esteja logado na página Detalhes da Conta

Cenário: alterar dados pessoais
Quando alterar dados pessoais preenchendo todos os campos obrigatórios
Então deve salvar os dados com sucesso

Cenário: alterar senha
Quando eu fornecer a senha atual e a nova senha
E confirmar a nova senha    
Então deve alterar a senha com sucesso

Cenário: alterar senha com senha atual incorreta
Quando eu fornecer uma senha atual incorreta
Então deve exibir mensagem de erro "A senha atual está incorreta"

Cenário: mensagem de sucesso ao alterar dados pessoais
Quando eu alterar os dados pessoais
Então deve exibir mensagem de sucesso "Detalhes da conta atualizados com sucesso"