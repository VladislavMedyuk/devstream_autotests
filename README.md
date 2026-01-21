# devstrem_autotests

Automated end-to-end tests for [Automation Exercise](http://automationexercise.com) using **Playwright** and **TypeScript**.

This repository demonstrates a clean and scalable test automation architecture using:
- Page Object Model
- Reusable flows
- Custom fixtures
- Centralized locators

---

## Table of Contents

- Installation
- Setup
- Running Tests
- Project Structure
- Test Cases

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/devstrem_autotests.git
cd devstrem_autotests
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

---

## Setup

### Requirements

- Node.js **v18+**
- npm **v9+**

### Notes

- No environment variables are required
- Test users are generated dynamically using **faker**
- Tests are fully isolated and idempotent

---

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test src/tests/login_user.spec.ts
```

### Run a single test by name

```bash
npx playwright test -g "Test Case 16: Place Order: Login before Checkout"
```

### View HTML report

```bash
npx playwright show-report
```

---

## Project Structure

```
devstrem_autotests/
├─ src/
│  ├─ pages/             # Page Objects
│  ├─ flows/             # Business flows (register, login, checkout, etc.)
│  ├─ fixtures/          # Custom Playwright fixtures
│  ├─ locators/          # Centralized locators
│  ├─ types/             # TypeScript types
│  └─ tests/             # Test specs
├─ package.json
├─ tsconfig.json
└─ README.md
```

---

## Test Cases

### Test Case 1: Register User

1. Launch browser
2. Navigate to url `http://automationexercise.com`
3. Verify that home page is visible successfully
4. Click on `Signup / Login` button
5. Verify `New User Signup!` is visible
6. Enter name and email address
7. Click `Signup` button
8. Verify that `ENTER ACCOUNT INFORMATION` is visible
9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox `Sign up for our newsletter!`
11. Select checkbox `Receive special offers from our partners!`
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click `Create Account` button
14. Verify that `ACCOUNT CREATED!` is visible
15. Click `Continue` button
16. Verify that `Logged in as username` is visible
17. Click `Delete Account` button
18. Verify that `ACCOUNT DELETED!` is visible and click `Continue` button

---

### Test Case 2: Login User with Correct Email and Password

1. Launch browser
2. Navigate to url `http://automationexercise.com`
3. Verify that home page is visible successfully
4. Click on `Signup / Login` button
5. Verify `Login to your account` is visible
6. Enter correct email address and password
7. Click `Login` button
8. Verify that `Logged in as username` is visible
9. Click `Delete Account` button
10. Verify that `ACCOUNT DELETED!` is visible

---

### Test Case 16: Place Order: Login before Checkout

1. Launch browser
2. Navigate to url `http://automationexercise.com`
3. Verify that home page is visible successfully
4. Click `Signup / Login` button
5. Fill email, password and click `Login` button
6. Verify `Logged in as username` at top
7. Add products to cart
8. Click `Cart` button
9. Verify that cart page is displayed
10. Click `Proceed To Checkout`
11. Verify Address Details and Review Your Order
12. Enter description in comment text area and click `Place Order`
13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
14. Click `Pay and Confirm Order` button
15. Verify success message `Your order has been placed successfully!`
16. Click `Delete Account` button
17. Verify `ACCOUNT DELETED!` and click `Continue` button

---

## Additional Notes

- Tests run headless by default
- Screenshots and videos are captured automatically on failure
- The project follows Playwright best practices and clean architecture principles

---

Happy testing 🚀

