const { test, expect } = require('@playwright/test');
const emailField = 'input id="7rmgo47v5”';
const emailFieldError = 'wb-control-error data-test-id="7rmgo47v5';
const firstNameField = 'input id=“etayxa5rg”';
const invalidEmail = "mbio_test" + getTime() + "gmail.com";

test.describe('When inputing an invalid email', () => {
  test('an error message is shown', async ({ page }) => {

    // Fill in the Email field with an invalid email value.
    await emailField.fill(invalidEmail);

    // Tap outside of the Email field to trigger error message.
    await firstNameField.press();

    // Assert the correct error message is rendered.
    await expect(page.(emailFieldError)).toBeVisible();
    await expect(page.(emailFieldError)).toHaveText('Please enter a valid email address using a minimum of six characters.');
  });
});