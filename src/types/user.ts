export type DOB = {
    day: string;
    month: string;
    year: string;
  };
  
export type Address = {
    firstName: string;
    lastName: string;
    company: string;
    address1: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobile: string;
  };

export type Payment = {
    nameOnCard: string;
    cardNumber: number;
    cvc: number;
    expiryMonth: number;
    expiryYear: number;
  };
  
export type User = {
    name: string;
    email: string;
    password: string;
    title: 'Mr' | 'Mrs';
    dob: DOB;
    address: Address;
    payment: Payment;
  };
  