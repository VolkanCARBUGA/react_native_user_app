import { faker } from '@faker-js/faker';
 export const data = Array(100).fill(null).map((e) => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    avatar:faker.image.avatar(),
    online:faker.datatype.boolean(),
    email:faker.internet.email(),
    phone:faker.phone.number(),
    about:faker.lorem.sentence(),
    followers:faker.number.int({min:0,max:1000}),
    follow:faker.number.int({min:0,max:1000}),
 }));
