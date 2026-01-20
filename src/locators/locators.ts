export const HomePageLocators = {
    signupLoginLink: 'Signup / Login',
    cartLink: 'Cart',
    logoutLink: 'Logout',
    deleteAccountLink: 'Delete Account',
    loggedInAsText: 'Logged in as',
    deletedaccount: 'Account Deleted!',
    continueButton: '[data-qa="continue-button"]',
    firstProductAddToCart: 'a[data-product-id="1"]',
    continueShoppingButton: 'Continue Shopping',
  };
  
  export const SignupPageLocators = {
    loginFormTitle: 'Login to your account',
    newUserSignupTitle: 'New User Signup!',
    enterAccountInfoTitle: 'Enter Account Information',
  
    loginEmail: '[data-qa="login-email"]',
    loginPassword: '[data-qa="login-password"]',
    loginButton: '[data-qa="login-button"]',
  
    signupName: '[data-qa="signup-name"]',
    signupEmail: '[data-qa="signup-email"]',
    signupButton: '[data-qa="signup-button"]',
  
    genderMr: '#id_gender1',
    genderMrs: '#id_gender2',
    password: '#password',
  
    days: '#days',
    months: '#months',
    years: '#years',
  
    newsletter: '#newsletter',
    optin: '#optin',
  
    firstName: '#first_name',
    lastName: '#last_name',
    company: '#company',
    address1: '#address1',
    address2: '#address2',
    country: '#country',
    state: '#state',
    city: '#city',
    zipcode: '#zipcode',
    mobile: '#mobile_number',
  
    createAccountButton: '[data-qa="create-account"]',
    accountCreatedText: 'Account Created!',
    continueButton: '[data-qa="continue-button"]',
  };
  
  export const CartPageLocators = {
    title: 'Shopping Cart',
    proceedToCheckoutButton: 'Proceed To Checkout',
  };
  
  export const CheckoutPageLocators = {
    addressDetailsTitle: 'Address Details',
    reviewOrderTitle: 'Review Your Order',
    commentTextarea: 'textarea[name="message"]',
    placeOrderLink: 'Place Order',
  
    nameOnCard: '[data-qa="name-on-card"]',
    cardNumber: '[data-qa="card-number"]',
    cvc: '[data-qa="cvc"]',
    expiryMonth: '[data-qa="expiry-month"]',
    expiryYear: '[data-qa="expiry-year"]',
  
    confirmOrderButton: 'Pay and Confirm Order',
    orderPlacedText: '[data-qa="order-placed"]',
  };
  