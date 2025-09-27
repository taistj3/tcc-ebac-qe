const request = require('supertest');
const Ajv = require('ajv');
const url = ('http://lojaebac.ebaconline.art.br/wp-json');

const cupomSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: { type: "number" },
      code: { type: "string" },
      amount: { type: "string" },
      discount_type: { type: "string" },
      description: { type: "string" },
      date_created: { type: "string" },
      date_modified: { type: "string" }
    },
    required: ["id", "code", "amount", "discount_type", "description", "date_created", "date_modified"]
  }
};
const cupomSchemaSingle = {
  type: "object",
  properties: {
    id: { type: "number" },
    code: { type: "string" },
    amount: { type: "string" },
    discount_type: { type: "string" },
    description: { type: "string" },
    date_created: { type: "string" },
    date_modified: { type: "string" }
  },
  required: ["id", "code", "amount", "discount_type", "description", "date_created", "date_modified"]
};

describe('Contrato da API de Cupons', () => {

  it('Deve validar o contrato da listagem de cupons', async() => {
    const ajv = new Ajv();
    const validate = ajv.compile(cupomSchemaSingle);
    const res = await request(url)
      .get('/wc/v3/coupons')
      .auth('admin_ebac ', '@admin!&b@c!2022')
      .expect(200);
    const valid = validate(res.body);
    if (!valid) {
      console.log(validate.errors);
    }  
    expect(valid).toBe(true);
  });
  it('Deve validar o contrato do cupom cadastrado', async() => {
    const ajv = new Ajv();
    const validate = ajv.compile(cupomSchema.items);
    const codigoCumpom = `teste${Math.floor(Math.random() * 10000)}`;
    const res = await request(url)
        .post('/wc/v3/coupons')
        .auth('admin_ebac', '@admin!&b@c!2022')
        .send({
            code: codigoCumpom,
            amount: '10.00',
            discount_type: 'fixed_product',
            description: 'Cupom de teste'
        })
        .expect(201);
    const valid = validate(res.body);
    if (!valid) {
      console.log(validate.errors);
    }  
    expect(valid).toBe(true);
    });
});