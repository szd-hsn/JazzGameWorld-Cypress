import { e2e } from '../../cypress.config';
import { createCanvasObject } from '../support/pages/createProject.page';
import { canvasPageElements } from "../support/elements/canvas.elements";
import { canvasPageObject } from '../support/pages/canvas.page';
import { projectPageElements } from '../support/elements/createProject.elements';
import { createProjectPageConstant } from '../support/constants/createProject';
describe('Canvas: Place items Individually on Canvas', () => {

    let projectName;
    beforeEach(() => {
        // cy.visit(e2e.baseUrl)
        // cy.login();
        cy.restoreLocalStorage();
        cy.viewport('macbook-15')
    })

    before(() => {
        cy.visit(e2e.baseUrl)
        // cy.visit('https://dev.app.planera.io/project/642e97870932aac926a21a7e/canvas')

        cy.loginDevPlanera();
        projectName = createProjectPageConstant.generateProjectName()
        createCanvasObject.createProject(projectName);
        cy.saveLocalStorage();
    })

    afterEach(() => {
        cy.saveLocalStorage();

    });

    after(() => {
        createCanvasObject.deleteProject(projectName);
        cy.logout();
    })

    it('TC1| Place Activity on Canvas via Coordinates, [Smoke-Test]', { scrollBehavior: false }, () => {
        const coordinatesData = {
            "activity1Coordinates": {
                "activityXAxis": 400,
                "activityYAxis": 100,
                "activityName": 'Activity-1'
            },
            "activity2Coordinates": {
                "activityXAxis": 600,
                "activityYAxis": 150,
                "activityName": 'Activity-2'
            }
        }
        // Place activities on Canvas
        canvasPageObject.createAnActity(coordinatesData.activity1Coordinates.activityXAxis,
            coordinatesData.activity1Coordinates.activityYAxis,
            coordinatesData.activity1Coordinates.activityName, 0, 2, 100)

        canvasPageObject.createAnActity(coordinatesData.activity2Coordinates.activityXAxis,
            coordinatesData.activity2Coordinates.activityYAxis,
            coordinatesData.activity2Coordinates.activityName, 1, 3, 100)
        cy.log('TC1 Completed')
        cy.get('[auto-id="sidebar-home-btn"]')
            .click()

    })

    it('TC2| Place a Start Milestone on Canvas via Coordinates, [Smoke-Test]', { scrollBehavior: false }, () => {
        cy.get('[auto-id="sidebar-home-btn"]')
            .click()
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get('.HomePage_mainProjectCardTitle__3TyeN')
            .contains('TestProjectAutomation')
            .click()
        const coordinatesData = {
            "startMilsteoneCoordinates": {
                "startMilestoneXAxis": 80,
                "startmilestoneYAxis": 80
            },
        }
        canvasPageObject.createAStartMilestone(coordinatesData.startMilsteoneCoordinates.startMilestoneXAxis,
            coordinatesData.startMilsteoneCoordinates.startmilestoneYAxis)

        cy.get('[auto-id="sidebar-home-btn"]')
            .click()
        cy.log('TC2 Completed')
    })

    it('TC3| Place an Activity on Canvas via Right Click, [Smoke-Test]',{ scrollBehavior: false }, () => {
        cy.log('TC2 Started')
        cy.get('[auto-id="sidebar-home-btn"]')
            .click({force: true})
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get('.HomePage_mainProjectCardTitle__3TyeN')
            .contains('TestProjectAutomation')
            .click()
        const coordinatesData = {
            "activity_RightClick_Coordinates": {
                "activityXAxis": 800,
                "activityYAxis": 100,
                "activityName": 'Activity-3'
            }
        }
        canvasPageObject.createAnActivityViaRightClick(coordinatesData.activity_RightClick_Coordinates.activityXAxis,
            coordinatesData.activity_RightClick_Coordinates.activityYAxis, coordinatesData.activity_RightClick_Coordinates.activityName, 2, 3, 100)
        cy.get('[auto-id="sidebar-home-btn"]')
            .click()
    })

    it('TC4| Place a Group on Canvas, [Smoke-Test]', { scrollBehavior: false }, () => {
        cy.log('TC3 Started')
        cy.get('.HomePage_mainProjectCardTitle__3TyeN')
            .contains('TestProjectAutomation')
            .click()

        const coordinatesData = {
            "groupCoordinates": {
                "groupXAxis": 800,
                "groupYAxis": 350,
                "groupName": 'Group-1'
            }
        }
        canvasPageObject.createAGroup(coordinatesData.groupCoordinates.groupXAxis,
            coordinatesData.groupCoordinates.groupYAxis,
            coordinatesData.groupCoordinates.groupName, 0)
        cy.get('[auto-id="sidebar-home-btn"]')
            .click()

    })

    it('TC5| Place an Interim Milestone on Canvas via Coordinates, [Smoke-Test]', { scrollBehavior: false }, () => {
        const coordinatesData = {
            "interimMilsteone2Coordinates": {
                "interimMilestoneXAxis": 300,
                "interimMilestoneYAxis": 400
            }
        }
        cy.get('[auto-id="sidebar-home-btn"]')
            .click()
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get('.HomePage_mainProjectCardTitle__3TyeN')
            .contains('TestProjectAutomation')
            .click()
        canvasPageObject.createAnInterimMilestone(coordinatesData.interimMilsteone2Coordinates.interimMilestoneXAxis,
            coordinatesData.interimMilsteone2Coordinates.interimMilestoneYAxis, 0)
        cy.get('[auto-id="sidebar-home-btn"]')
            .click()

    })

    it('TC6| Place an End Milestone on Canvas via Coordinates, [Smoke-Test]', { scrollBehavior: false }, () => {
        cy.get('[auto-id="sidebar-home-btn"]')
            .click()
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get('.HomePage_mainProjectCardTitle__3TyeN')
            .contains('TestProjectAutomation')
            .click()
        const coordinatesData = {
            "endMilsteoneCoordinates": {
                "endMilestoneXAxis": 300,
                "endMilestoneYAxis": 550
            }
        }
        canvasPageObject.createAnEndMilestone(coordinatesData.endMilsteoneCoordinates.endMilestoneXAxis,
            coordinatesData.endMilsteoneCoordinates.endMilestoneYAxis)
        cy.get(canvasPageElements.navigateToHomePage)
            .click()

    })

})

describe('Canvas: Place objects altogether on Canvas', () => {

    let projectName;
      
    beforeEach(() => {
        cy.visit(e2e.baseUrl)
        cy.loginDevPlanera()
        cy.wait(e2e.pageLoadTimeSmall)
        projectName = createProjectPageConstant.generateProjectName()
        createCanvasObject.createProject(projectName);

    })

    after(() => {
        createCanvasObject.deleteProject(projectName);
        cy.logout();
    })


    it("TC7| Place multiple items on Canvas, ", { scrollBehavior: false }, () => {

        // cy.intercept('https://rum.browser-intake-datadoghq.com/api/v2/*').as('myApiCall');
        // cy.wait('@myApiCall', { timeout: 6000000 });
        // cy.get('@myApiCall', { forceNetworkError: true })

        const dayjs = require('dayjs')
        let data = {}
        cy.fixture('testDataCanvas').then(function (jsonData) {
            data = jsonData
            const coordinatesData = {
                "activity1Coordinates": {
                    "activityXAxis": 550,
                    "activityYAxis": 180
                },
                "activity2Coordinates": {
                    "activityXAxis": 600,
                    "activityYAxis": 220
                },
                "activity3Coordinates": {
                    "activityXAxis": 320,
                    "activityYAxis": 320
                },
                "groupCoordinates": {
                    "groupXAxis": 800,
                    "groupYAxis": 400
                },
                "startMilsteoneCoordinates": {
                    "startMilestoneXAxis": 150,
                    "startmilestoneYAxis": 100
                },
                "interimMilsteone1Coordinates": {
                    "interimMilestoneXAxis": 350,
                    "interimMilestoneYAxis": 400
                },
                "interimMilsteone2Coordinates": {
                    "interimMilestoneXAxis": 730,
                    "interimMilestoneYAxis": 400
                },
                "endMilsteoneCoordinates": {
                    "endMilestoneXAxis": 300,
                    "endMilestoneYAxis": 600
                }
            }
            const elementData = data.useCaseCreateNetwork[0].inputData
            // Create a Start Milestone
            // Parameter: (x-axis, y-axis)
            canvasPageObject.createAStartMilestone(coordinatesData.startMilsteoneCoordinates.startMilestoneXAxis,
                coordinatesData.startMilsteoneCoordinates.startmilestoneYAxis)
            // Select Start Milestone Date
            let currentDate = dayjs().format('MM/DD/YYYY')
            cy.log('current date', currentDate, elementData.startMilestoneDate)
            canvasPageObject.selectDate(canvasPageElements.projectStartDateField, currentDate, elementData.startMilestoneDate)
            // Create an Activity 
            // Parameter: (x-axis, y-axis, Activity name, Activity Index, Activity Duration)
            canvasPageObject.createAnActity(coordinatesData.activity1Coordinates.activityXAxis,
                coordinatesData.activity1Coordinates.activityYAxis, 'Activity-1', 0, 2, 100)
            // Connect a Start-Milestone to an Activity
            // Parameter:  (Activity name)
            canvasPageObject.linkStartMilestoneToActivity('Activity-1')
            // Create an Activity 
            // Parameter: (x-axis, y-axis, Activity name, Activity Index, Activity Duration)
            canvasPageObject.createAnActity(coordinatesData.activity2Coordinates.activityXAxis,
                coordinatesData.activity2Coordinates.activityYAxis, 'Activity-2', 1, 3, 100)
            // Connect an Activity to Activity
            // Parameter:  (Activity name, Activity name)
            canvasPageObject.linkActivityToAnActivity('Activity-1', 'Activity-2')
            // Create an Activity via Right click
            // Parameter: (x-axis, y-axis, Activity name, Activity Index, Activity Duration)
            canvasPageObject.createAnActivityViaRightClick(coordinatesData.activity3Coordinates.activityXAxis,
                coordinatesData.activity3Coordinates.activityYAxis, 'Activity-3', 2, 4, 100)

            // Connect an Activity to Activity
            // Parameter:  (Activity name, Activity name)
            canvasPageObject.linkActivityToAnActivity('Activity-2', 'Activity-3')
            // Create a Group
            // Parameter: (x-axis, y-axis, Group name, Group Index)
            // canvasPageObject.createAGroup(coordinatesData.groupCoordinates.groupXAxis,
            //     coordinatesData.groupCoordinates.groupYAxis, 'Group-1',0)
            // Create an Interim Milestone
            // Parameter: (x-axis, y-axis, Interim-Milestone Index)
            canvasPageObject.createAnInterimMilestone(coordinatesData.interimMilsteone1Coordinates.interimMilestoneXAxis,
                coordinatesData.interimMilsteone1Coordinates.interimMilestoneYAxis, 0)
            // Connect an Activity to Interim-Milestone
            // Parameter:  (Activity name, Interim-Milestone Index)
            canvasPageObject.linkActivityToInterimMilestone('Activity-3', 0)

            // Create an Interim Milestone          
            // Parameter: (x-axis, y-axis, Interim-Milestone Index)
            canvasPageObject.createAnInterimMilestone(coordinatesData.interimMilsteone2Coordinates.interimMilestoneXAxis,
                coordinatesData.interimMilsteone2Coordinates.interimMilestoneYAxis, 1)
            // Connect Interim-Milestone to another Interim-Milestone
            // Parameter:  (Interim-Milestone's Index)
            canvasPageObject.linkInterimMilestoneToInterimMilestone(0, 1)
            // Create an End Milestone 
            // Parameter: (x-axis, y-axis)
            canvasPageObject.createAnEndMilestone(coordinatesData.endMilsteoneCoordinates.endMilestoneXAxis,
                coordinatesData.endMilsteoneCoordinates.endMilestoneYAxis)
            // canvasPageObject.selectDate(canvasPageElements.projectEndDateField, currentDate, elementData.endMilestoneDate)

            cy.get(canvasPageElements.runScheduleButtonEndMilestone)
                .click()
            // Connect Interim-Milestone to End-Milestone
            // Parameter:  (Interim-Milestone Index)
            canvasPageObject.linkInterimMilestoneToEndMilestone(1)
        })
    })
})

