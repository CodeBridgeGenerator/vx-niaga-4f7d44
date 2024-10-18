
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.datatype.boolean(""),
email: faker.datatype.boolean(""),
password: faker.datatype.boolean(""),
is_email_verified: faker.datatype.boolean(""),
remember_token: faker.datatype.boolean(""),
email_verified_at: faker.datatype.boolean(""),

        };
        data = [...data, fake];
    }
    return data;
};
