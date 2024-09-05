import { BaseMethods } from '../../cypress-e2e/common/base';
import { baseSelectors } from '../../cypress-e2e/common/selectors';
import { Constants } from '../../cypress-e2e/fixtures/constants';
const basePage: BaseMethods = new BaseMethods();

const appsData = [
  {
    appName: Constants.commonConstantsData.biDirectional,
    appSubheader: Constants.commonConstantsData.commonCountAppNames.app1,
    app1Button: Constants.updatedConstantsData.commonAppWithButton.app1,
    app2Button: Constants.updatedConstantsData.commonAppWithButton.app2,
    host: 3001,
  },
  {
    appName: Constants.commonConstantsData.biDirectional,
    appSubheader: Constants.commonConstantsData.commonCountAppNames.app2,
    app1Button: Constants.updatedConstantsData.commonAppWithButton.app1,
    app2Button: Constants.updatedConstantsData.commonAppWithButton.app2,
    host: 3002,
  },
];

appsData.forEach(
  (property: {
    appName: string;
    appSubheader: string;
    app1Button: string;
    app2Button: string;
    host: number;
  }) => {
    describe('Bi Directional', () => {
      context(`Check ${property.appName} elements exists on the page`, () => {
        before(() => {
          cy.visit('http://localhost:' + property.host)
        });

        it(`Check App1 and App2 elements`, () => {
          if(property.host === 3001) {
            cy.contains('App 2 Button').should('exist');
          } else {
            cy.contains('App 1 Button').should('exist');
          }
        });
      });
    });
  },
);
