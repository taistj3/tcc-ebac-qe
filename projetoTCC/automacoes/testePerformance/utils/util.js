import { SharedArray } from 'k6/data';

const users = new SharedArray('users', function () {
    return JSON.parse(open('../data/users.json'));
});

export default class Utils {
    static getBaseUrl() {
        return 'http://lojaebac.ebaconline.art.br/wp-json/';
    }
    static getUser(role) {
        return users.find(user => user.role === role);
    }
}
