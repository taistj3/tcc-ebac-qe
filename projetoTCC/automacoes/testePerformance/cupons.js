import { check, sleep, group } from 'k6';
import http from 'k6/http';
import Utils from './utils/util.js';

export const options = {
    stages: [
        { duration: '20s', target: 20 },  // Ramp-up: vai de 0 a 20 VUs em 20s
        { duration: '2m', target: 20 },   // Sustentado: mantém 20 VUs por 2 minutos
        { duration: '10s', target: 0 },   // Ramp-down (opcional): volta para 0 VUs
    ],
};

export default function () {
    const user = Utils.getUser('admin');

    group('Buscar cupons - GET /coupons', function () {
        const res = http.get(
            `${Utils.getBaseUrl()}wc/v3/coupons`,
            {
                headers: {
                    Authorization: user.auth,
                    'Content-Type': 'application/json',
                },
            }
        );

        check(res, { 'status 200': (r) => r.status === 200 });
    });

    group('Criar cupom - POST /coupons', function () {
        const payload = JSON.stringify({
            code: `CUPOM${Math.floor(Math.random() * 10000)}`,
            amount: '10.00',
            discount_type: 'fixed_product',
            description: 'Cupom de teste'
        });
        const res = http.post(`${Utils.getBaseUrl()}wc/v3/coupons`, payload, {
            headers: {
                Authorization: user.auth,
                'Content-Type': 'application/json',
            },
        })
        console.log(res.body);
        check(res, { 'status 201': (r) => r.status === 201 });
    });
    sleep(1);
}