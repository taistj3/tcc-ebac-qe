        #language: pt

        Funcionalidade: API de cupons
        Como admin da EBAC-SHOP 
        Quero criar um serviço de cupom 
        Para poder listar e cadastrar os cupons

        Contexto:
        Dado que estou autenticado na API com usuário "admin_ebac" e senha "@admin!&b@c!2022"
        E envio o cabeçalho "Authorization" com o valor "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"

        # Cenários GET
        Cenário: Listar todos os cupons cadastrados
        Quando envio uma requisição GET para "/wc/v3/coupons"
        Então o sistema deve retornar a lista de todos os cupons cadastrados

        Cenário: Listar um cupom pelo ID
        Quando envio uma requisição GET para "/wc/v3/coupons{id}"
        Então  o sistema deve retornar as informações do cupom correspondente
        
        # Cenários POST
        Cenário: Cadastrar cupom com dados obrigatórios
        Quando envio uma requisição POST para "/wc/v3/coupons" com o body:
        """
          {
            "code": "Ganhe10",
            "amount": "10.00",
            "discount_type": "fixed_product",
            "description": "Cupom de teste"
          }
        """
        Então o sistema deve cadastrar o cupom com sucesso

        Cenário: Não permitir cadastro de cupom com nome repetido
        Dado que já existe um cupom com o código "Ganhe10"
        Quando envio uma requisição POST para "/wc/v3/coupons" com o código "Ganhe10"
        Então o sistema deve retornar um erro informando que o código do cupom já existe
