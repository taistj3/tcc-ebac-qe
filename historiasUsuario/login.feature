        #language: pt

        Funcionalidade: login na plataforma
        Como cliente da EBAC-SHOP
        Quero fazer o login (autenticação) na plataforma
        Para visualizar meus pedidos

        Contexto:
        Dado que eu esteja na tela de login

        Cenário: login na plataforma
        Quando eu inserir e-mail e senha válidos
        Então sistema deve redirecionar para tela de checkout

        Cenário: login na plataforma
        Quando eu inserir um dos campos inválidos
        Então deve exibir mensagem de alerta "Usuário ou senha inválidos"

        Cenário: login na plataforma
        Quando eu inserir um dos campos inválidos por 3 vezes
        Então deve travar o login por 15 minutos


        Esquema do Cenário: login na plataforma
        Quando eu inserir <Email> e <Senha> válidos
        Então deve exibir <resultado> redirecionando para checkout

        Examples:
            | Email           | Senha     | Resultado                    |
            | joaosilva@gmail | 123teste  | Redirecionar                 |
            | joao@gmail      | 123teste  | "Usuário ou senha inválidos" |
            | joaosilva@gmail | 1234teste | "Usuário ou senha inválidos" |
