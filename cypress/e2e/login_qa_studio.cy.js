describe('Форма логина и пароля', function () {

  it('1.1.Позитивный кейс авторизации', function () {
     cy.visit('https://login.qa.studio/');
     cy.get('#mail').type('german@dolnikov.ru')
     cy.get('#pass').type('iLoveqastudio1')
     cy.get('#loginButton').click();
     cy.contains('Авторизация прошла успешно').should('be.visible');
     cy.get('#exitMessageButton').should('be.visible');
  })
  it('1.2. Проверка логики восстановления пароля', function () {
      cy.reload();
      cy.visit('https://login.qa.studio/');
      cy.get('#forgotEmailButton').click();
      cy.get('#mailForgot').type('german@dolnikov.ru')
      cy.get('#restoreEmailButton').click();
      cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  })
  it('1.3. Негативный кейс авторизации (неверный пароль)', function () {
      cy.reload();
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru')
      cy.get('#pass').type('iLoveqastudio2')
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет').should('be.visible');
      cy.get('#exitMessageButton').should('be.visible');
  })
  it('1.4. Негативный кейс авторизации (неверный логин)', function () {
      cy.reload();
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.com')
      cy.get('#pass').type('iLoveqastudio1')
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет').should('be.visible');
      cy.get('#exitMessageButton').should('be.visible');
  })
  it('1.5. Негативный кейс валидации (без @)', function () {
      cy.reload();
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('germandolnikov.ru')
      cy.get('#pass').type('iLoveqastudio1')
      cy.get('#loginButton').click();
      cy.contains('Нужно исправить проблему валидации').should('be.visible');
      cy.get('#exitMessageButton').should('be.visible');
  })
  it('1.6. Проверка на привидение к строчным буквам в логине', function () {
      cy.reload();
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('GerMan@Dolnikov.com')
      cy.get('#pass').type('iLoveqastudio1')
      cy.contains('germandolnikov.ru').should('be.visible');
  })

})