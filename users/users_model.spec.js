const db = require('../database/db-config');
const userModel = require('./users-model');

beforeAll(async () => {
    await db.seed.run()
})

describe('userModel', () => {
    test('find', async () => {
        const res = await userModel.find()
        expect(res.length).toBe(3)
        expect(res[0].email).toBe('don@email.com')
    })
    test('findBy', async () => {
        const res = await userModel.findBy({lastName: 'Wizard'});
        expect(res[0].firstName).toBe('Don');
        expect(res[0].email).toBe('don@email.com')
    })
    test('add', async () => {
        const res = await userModel.add({
                firstName: 'Jane',
                lastName: 'Doe',
                email: 'jane@gmail.com'
            });
        expect(res.length).toBe(1);
    })
    test('findByEmail', async () => {
        const res = await userModel.findByEmail('rose@gmail.com');
        expect(res.firstName).toBe('Rose');
        expect(res.lastName).toBe('Jones');
    })
})