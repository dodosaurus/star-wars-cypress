// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("api", ({ ...options }) => {
  //creating the custom report window
  const doc = cy.state("document");
  const win = cy.state("window");
  let container = doc.querySelector(".container");
  if (!container) {
    container = doc.createElement("div");
    container.className = "container";
    doc.body.appendChild(container);
  }

  //cy.request
  cy.request({ ...options }).then(object => {
    options.map(returnedField => {
        container.innerHTML +=
    '<div class="cy-api">\n' +
    '<div>\n' +
    `<b>${returnedField}</b>\n` +
    '<pre class="cy-api-pre">' +
    returnedField +
    '\n</pre></div>'
    })
  });
});
