const request = require('supertest');
const url = ('http://lojaebac.ebaconline.art.br/wp-json')


describe('API de Cupons', () => {

    it('Deve listar cupons cadastrados', async () => {
        const res = await request(url)
            .get('/wc/v3/coupons')
            .auth('admin_ebac ', '@admin!&b@c!2022')
            .expect(200);
        expect(Array.isArray(res.body)).toBe(true)
        if (res.body.length > 0) {
            expect(res.body[0]).toHaveProperty('id');
            expect(res.body[0]).toHaveProperty('code');
        }
    })
    it('Deve cadastrar um cupom', async () => {
        const codigoCumpom = `teste${Math.floor(Math.random() * 10000)}`;
        const res = await request('http://lojaebac.ebaconline.art.br/wp-json')
            .post('/wc/v3/coupons')
            .auth('admin_ebac', '@admin!&b@c!2022')
            .send({
                code: codigoCumpom,
                amount: '10.00',
                discount_type: 'fixed_product',
                description: 'Cupom de teste'
            })
            .expect(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('code', codigoCumpom);
    })
});