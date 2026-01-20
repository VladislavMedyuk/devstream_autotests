import { faker } from '@faker-js/faker';
import { User } from '@src/types/user';

export function generateUser(): User {
  return {
    name: faker.person.firstName(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password({ length: 10 }),

    title: faker.helpers.arrayElement(['Mr', 'Mrs']),

    dob: {
      day: String(faker.number.int({ min: 1, max: 28 })),
      month: String(faker.number.int({ min: 1, max: 12 })),
      year: String(faker.number.int({ min: 1970, max: 2000 })),
    },

    address: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      company: faker.company.name(),
      address1: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      country: 'Canada',
      state: faker.location.state(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      mobile: faker.phone.number(),
    },

    payment: {
      nameOnCard: `${faker.person.firstName()} ${faker.person.lastName()}`,
      cardNumber: faker.number.int({ min: 4_000_000_000_000_000, max: 4_999_999_999_999_999 }),
      cvc: faker.number.int({ min: 100, max: 999 }),
      expiryMonth: faker.number.int({ min: 1, max: 12 }),
      expiryYear: faker.number.int({ min: 2026, max: 2035 }),
    },
  };
}
export { User };

