describe('Автотест', function () {

  it('Длинный автотест', function () {
     cy.visit('https://sh3910517.c.had.su/');
     cy.contains('БРОММС Двухместная кровать').should('be.visible');
     cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
     cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
     cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
     cy.get('[href="https://sh3910517.c.had.su"]').click();
     cy.contains('КЛЛАРИОН Низкий столик').should('be.visible');
     cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title').click();
     cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
     cy.wait(5000)
     cy.get('.woocommerce-mini-cart__buttons > [href="https://sh3910517.c.had.su/cart/"]').click();
     cy.get('.checkout-button').click();
     cy.contains('БРОММС Двухместная кровать').should('be.visible');
     cy.contains('КЛЛАРИОН Низкий столик').should('be.visible');
     cy.get('#billing_first_name').type('Игорь');
     cy.get('#billing_last_name').type('Ковалев');
     cy.get('#billing_address_1').type('Набережная Академика Туполева');
     cy.get('#billing_city').type('Москва');
     cy.get('#billing_state').type('ЦАО');
     cy.get('#billing_postcode').type('123456');
     cy.get('#billing_phone').type('8916666666');
     cy.get('#billing_email').type('kolobok@gmail.ru');
     cy.get('#place_order').click();


  })


})