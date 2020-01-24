/// <reference path="./cypress.ts"/>

import getCy from './getCy';
export { cypressTag, useCypressTag, getCypressTag } from './tag';

Cypress.Commands.add('getCy', { prevSubject: false }, getCy);
