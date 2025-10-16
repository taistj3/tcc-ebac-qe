# Projeto Final - Engenharia de Qualidade de Software

Este projeto faz parte do **Trabalho de Conclusão de Curso (TCC)** do curso de **Engenharia de Qualidade de Software - EBAC**.  
O sistema utilizado como base de testes é o **Ebac Shop (e-commerce)**.

---

## 📂 Estrutura do Projeto

projeto.tcc/
├── automações/
│ ├── testeUI/ → Testes de interface (UI) com Cypress
│ ├── testeMobile/ → Testes mobile com Appium + WebdriverIO
│ ├── testeAPI/ → Testes de API e contrato com SuperTest + Jest
│ └── testePerformance/ → Testes de performance com K6
│
└── documentos/
├── historias-usuarios.docx → Documento com todas as informações do trabalho
├── historias/ → 8 histórias de usuário
├── cenarios/ → Cenários descritos em Gherkin
└── casos-de-teste/ → Casos de teste derivados dos cenários

---

## 🧪 Tipos de Testes

- **Testes de UI (E2E):**  
  Desenvolvidos com [Cypress](https://www.cypress.io/).  
  ⚙️ **Integrados com GitHub Actions** para execução contínua.

- **Testes Mobile:**  
  Criados com [Appium](https://appium.io/) e [WebdriverIO](https://webdriver.io/).

- **Testes de API e Contrato:**  
  Utilizando [SuperTest](https://www.npmjs.com/package/supertest) e [Jest](https://jestjs.io/).

- **Testes de Performance:**  
  Construídos com [K6](https://k6.io/).

---

## 📑 Documentação

Na pasta **documentos**, estão disponíveis:
- 📖 **Histórias de usuário (8 histórias)**  
- 📝 **Cenários de testes escritos em Gherkin**  
- ✅ **Casos de teste detalhados para cada cenário**

Além disso, há o arquivo **ProjetoTCC.docx** reunindo todas as informações do trabalho.

---

## 📊 Relatórios de Testes

Todos os testes são documentados com relatórios para melhor rastreabilidade:

- **[Allure Report](https://allurereport.org/):** utilizado para geração de relatórios interativos e detalhados.  
- **[Jest Report](https://www.npmjs.com/package/jest-html-reporters):** aplicado aos testes em Jest para visualização clara dos resultados.

---

## 🚀 Integração Contínua

- **GitHub Actions:** configurado para rodar os testes de UI com Cypress de forma automatizada.

---

## 📌 Observações

Este projeto reúne, de forma prática, diferentes tipos de testes aplicados a um e-commerce:  
- UI  
- Mobile  
- API e Contrato  
- Performance  

Servindo como demonstração completa das práticas de **QA em Engenharia de Qualidade de Software**.