// /// <reference types="cypress" />
// import React from "react";
// import { mount } from "@cypress/react";
// import {UserCard} from  '../../components/Users/UserCard';

// const mockUsers = {
//   "firstName": "Orville",
//   "lastName": "Kohler",
//   "address": "766 Blick Harbors\nNew Rosie, OH 92693-0883",
//   "email": "Gregg.Cassin@yahoo.com",
//   "phone": "142-776-5571"
// }


//   describe('UserCard page', () => {
//           beforeEach(() => {
//             mount(
//               <UserCard userInfo={mockUsers}/>)
//           });
//       it('renders user-card for each user record', () => {
//         cy.get('[data-test=user-card]').find('div').should('have.text', 'Orville');
//         cy.get('[data-test=user-card]').find('div').should('have.text', 'Kohler');
//       });
//       it('renders user-card for each user record', () => {
//         cy.get('[data-test=user-info]').find('div').should('have.text', '766 Blick Harbors\nNew Rosie, OH 92693-0883');
//         cy.get('[data-test=user-info]').find('div').should('have.text', 'Gregg.Cassin@yahoo.com');
//         cy.get('[data-test=user-info]').find('div').should('have.text', '142-776-5571');
//       });
//     });

