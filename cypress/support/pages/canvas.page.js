import { objCreateProject } from '../pages/createProject.page';
import { canvasPageElements } from "../elements/canvas.elements";
import { tablePageElements } from '../elements/table.elements';
import { } from "../commands"
import { e2e } from '../../../cypress.config';
import { empty } from 'check-more-types';
class CreateCanvas {

    createAnActity(x, y, activityName, activityOrder, activityDuration, monkeyWait) {

        // let monkeyWait = Cypress.env('wait')
        cy.wait(monkeyWait)
        cy.log('Place an Activity test Initiated')
        // Assert and click Activity Icon 
        cy.get(canvasPageElements.activityIcon)
            .should('be.visible')
            .click()
        cy.wait(monkeyWait)
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.canvasBasePage)
            .click(x, y)
        cy.wait(e2e.pageLoadTimeSmall)
        cy.wait(monkeyWait)
        //  Get the Activity and type activity name
        cy.get(canvasPageElements.activityNode)
            .eq(activityOrder)
            .dblclick()
            .clear()
            .type(activityName)
        cy.wait(monkeyWait)
        cy.get(canvasPageElements.canvasBasePage)
            .click(120, 120)
        cy.wait(monkeyWait)
        cy.get(canvasPageElements.activityNode)
            .eq(activityOrder)
            .contains(activityName)
            .should('be.visible')
        cy.wait(e2e.pageLoadTimeSmall)
        // cy.get(canvasPageElements.activityNode)
        //     .contains(activityName)
        //     .parent()
        //     .children(canvasPageElements.activityDuration)
        //     .dblclick()
        cy.get(canvasPageElements.activityNode)
            .contains(activityName)
            .parent().then(($parent) => {
                cy.wrap($parent)
                    .find('[data-testid="node-duration"]')
                    .dblclick()
            });

        cy.wait(monkeyWait)
        cy.get(canvasPageElements.activityDuration_Input)
            .should('be.visible')
            .clear().type(activityDuration)


    }

    createAnActivityViaRightClick(x, y, activityName, activityOrder, activityDuration) {

        // cy.get('div.MuiSnackbar-root div.MuiAlert-message', { timeout: e2e.maxTimeout }).should('not.exist')
        cy.log('Place an Activity test: via Right click- Initiated')
        // Right click on the canvas to look for Activity option
        cy.get(canvasPageElements.canvasBasePage)
            .rightclick(x, y)
        // Assert and click Activity Option    
        cy.get(canvasPageElements.canvasRightClickMenuAddActivity)
            .should('be.visible')
            .click()
        cy.get('div.MuiSnackbar-root div.MuiAlert-message')
            .should('not.exist')
        cy.get(canvasPageElements.activityNode)
            .eq(activityOrder)
            .type(activityName)
        cy.get(canvasPageElements.canvasBasePage)
            .click(730, 90)

        cy.get(canvasPageElements.activityNode)
            .eq(activityOrder)
            .contains(activityName)
            .should('be.visible')
        // cy.get(canvasPageElements.activityNode)
        //     .contains(activityName)
        //     .parent()
        //     .children(canvasPageElements.activityDuration)
        //     .dblclick()
        cy.get(canvasPageElements.activityNode)
            .contains(activityName)
            .parent().then(($parent) => {
                cy.wrap($parent)
                    .find('[data-testid="node-duration"]')
                    .dblclick()
            });
        cy.get(canvasPageElements.activityDuration_Input)
            .should('be.visible')
            .clear().type(activityDuration)

    }

    createAGroup(x, y, GroupName, groupOrder) {
        let monkeyWait = Cypress.env('wait')
        // cy.wait(monkeyWait)
        cy.log('Place a Group test Initiated')
        // Assert and click Group Icon 
        cy.get(canvasPageElements.groupIcon).click()
        // cy.wait(monkeyWait)
        cy.get('div.MuiSnackbar-root div.MuiAlert-message')
            .should('not.exist')
        cy.get(canvasPageElements.canvasBasePage)
            .click(x, y)

        // cy.wait(monkeyWait)
        // Type in Group name
        cy.get(canvasPageElements.newGroupEditName)
            .type(GroupName)
        // cy.get('.mainProjectTitle')
        //     .click()
        // cy.wait(monkeyWait)
        cy.get('div.MuiSnackbar-root div.MuiAlert-message')
            .should('not.exist')
        cy.get(canvasPageElements.groupNodeName)
            // .eq(groupOrder)
            .contains(GroupName)
            .should('be.visible')
        // cy.wait(monkeyWait)
        cy.get(canvasPageElements.canvasBasePage)
            .click(50, 50)
        cy.log('Place a Group test completed')
    }

    createAStartMilestone(x, y) {
        cy.log('Place a Start Milestone test Initiated')
        cy.log(x, y)
        // Assert and click Milestone Icon 
        cy.wait(1000)
        cy.get(canvasPageElements.milestoneIcon)
            .should('be.visible')
            // .realHover('mouse')
            .click()
        cy.wait(1000)
        // Assert and click Start Milestone Icon     
        cy.get(canvasPageElements.startMilestone)
            .should('be.visible')
            .click({ force: true })
        cy.get(canvasPageElements.canvasBasePage).click(x, y)
        // Assert Start Milestone  
        cy.get(canvasPageElements.startMilestoneNode)
            .should('be.visible')
        cy.log('Place a Group test completed')
    }

    createAnInterimMilestone(x, y, milestoneOrder) {
        cy.log('Place an Interim Milestone test Initiated')
        // Assert and click Milestone Icon   
        cy.get(canvasPageElements.milestoneIcon)
            .should('be.visible')
            .click()
        // Assert and click Interim Milestone Icon   
        cy.get(canvasPageElements.interimMilestone)
            .should('be.visible')
            .click()
        cy.get(canvasPageElements.canvasBasePage)
            .click(x, y)

        cy.get('[auto-id="milestoneInterim-node"] .MilestoneNode_dateTitle__pUiML').first()
            .click()
        // Assert Interim Milestone  
        cy.get(canvasPageElements.interimMilestoneNode)
            .eq(milestoneOrder)
            .should('be.visible')

        cy.log('Place an Interim Milestone test completed')

        // cy.get('[auto-id="milestoneInterim-node"] .NodeName_nodeNameWrap__1su_Z  ')
        //     .dblclick()
        //     .clear()
        //     .type('Interim Milestone')
        cy.wait(e2e.pageLoadTimeSmall)


    }

    createAnEndMilestone(x, y) {
        cy.log('Place an End Milestone test Initiated')
        // Assert and click Milestone Icon   
        cy.get(canvasPageElements.milestoneIcon)
            .should('be.visible')
            .click()
        // Assert and click Start Milestone Icon   
        cy.get(canvasPageElements.endMilestone)
            .should('be.visible')
            .click()
        cy.get(canvasPageElements.canvasBasePage)
            .click(x, y)
        // Assert End Milestone  
        cy.get(canvasPageElements.endMilestoneNode)
            .should('be.visible')
        cy.log('Place an End Milestone test completed')
    }

    selectDate(projectDate, currentDate, desiredDate) {
        cy.log('inside Select date method')

        cy.get(projectDate).click()
        cy.log('project date field click')
        // cy.get('button')
        //     .contains('Clear Selection')
        //     .click()
        // cy.log('clear selection')
        cy.get(projectDate).click()
        cy.log('project date field click')
        cy.get('button')
        //  Select Desired Year
        // cy.wait(500)
        cy.get(canvasPageElements.selectCalenderYear_chevronIcon).last()
            .click({ force: true })
        cy.log('Calander Year icon found')
        cy.log("Select Date method started")
        // cy.log("Select Date method",currentDate)
        let currentDateList = currentDate.split('/')
        let currentMonthValue = currentDateList[0]
        let currentDateValue = currentDateList[1]
        let currentYearValue = currentDateList[2]

        let desiredDateList = desiredDate.split('/')
        let desiredMonthValue = parseInt(desiredDateList[0])
        let desiredDateValue = parseInt(desiredDateList[1])
        let desiredYearValue = parseInt(desiredDateList[2])
        cy.log('Calender Opened')
        //   Select Desired Month
        let desiredYear = desiredYearValue;
        cy.get(canvasPageElements.selectYearPicker)
            .contains(desiredYear, { matchCase: true })
            .click()
        const allMonths = {
            "1": "January",
            "2": "February",
            "3": "March",
            "4": "April",
            "5": "May",
            "6": "June",
            "7": "July",
            "8": "August",
            "9": "September",
            "10": "October",
            "11": "November",
            "12": "December",
        };

        const monthKeys = Object.keys(allMonths)
        cy.log('months keys', monthKeys)
        cy.log('current month', currentMonthValue)
        // const currentMonth = monthKeys[currentMonthValue].length-1
        // cy.log('current month ',currentMonth)

        // AAAAA
        // let currentMonth = currentMonthValue;
        // let currentMonth = current_month;

        let currentMonthIndex = parseInt(currentMonthValue);
        // let currentMonthIndex =  allMonths[currentMonthValue]xxxxxxxxxxxxxxx
        // cy.log('currentMonthIndex name: ', currentMonthIndex)
        const desiredMonthIndex = parseInt(desiredMonthValue);
        // const desiredMonth = desired_month;

        // const desiredMonthIndex = allMonths.indexOf(desiredMonth);
        // const desiredMonthIndex = allMonths[desiredMonth]xxxxxxxxxxxxxxx
        // cy.log('desiredMonthIndex', allMonths.indexOf(desiredMonth))
        // cy.log('desiredMonthIndex', allMonths[desiredMonth])xxxxxxxxxx
        let desiredMonthAppeared = desiredMonthIndex === currentMonthIndex;
        let breakCount = 0;
        while (!desiredMonthAppeared) {
            cy.log('inside desired month while loop')
            cy.log('desiredMonthAppeared name:', desiredMonthAppeared)
            if (desiredMonthIndex < currentMonthIndex) {
                // click previous
                cy.get('[title=\'Previous month\']').click()
                currentMonthIndex--;
                cy.log("currentMonthIndex : ", currentMonthIndex);
                cy.log("desiredMonthInde: ", desiredMonthIndex)
            } else {
                // click next
                cy.get('[title=\'Next month\']').click()

                currentMonthIndex++;
                cy.log("currentMonthIndex : ", currentMonthIndex);
                cy.log("desiredMonthInde: ", desiredMonthIndex)
            }

            desiredMonthAppeared = desiredMonthIndex === currentMonthIndex;
            cy.log('desiredMonthAppeared name:', desiredMonthAppeared)

            breakCount++;
            if (breakCount > monthKeys.length || desiredMonthAppeared) {
                // if somehow this goes in infinite loop, we need to handle that
                break;
            }
        }

        if (desiredMonthAppeared) {
            // you are on the desired month
            cy.log('you are on the desired month', desiredMonthAppeared)
            // cy.get('.MuiCalendarPicker-root')
            cy.get('.MuiPickersDay-dayWithMargin')
                .contains(desiredDateValue, { matchCase: true }).click()
            // cy.contains(desiredDate).click()

        }
        if (projectDate !== 'button[aria-label="Choose date"]') {
            cy.get('button')
                .contains('Save')
                .should('be.visible')
                .click()
        }
    }

    linkStartMilestoneToActivity(sourceActivity) {

        cy.get(canvasPageElements.startMilestoneNode)
            .click('right')
        cy.wait(e2e.pageLoadTimeSmall)

        cy.get(canvasPageElements.activityNode)
            .contains(sourceActivity)
            .parent()
            .parent()
            .click('right')
        cy.wait(e2e.pageLoadTimeSmall)
    }

    LinkActivityToAnEndMilestone(sourceActivity) {

        cy.get(canvasPageElements.activityNode)
            .contains(sourceActivity)
            .parent()
            .parent()
            .click('right')
        // cy.wait(e2e.pageLoadTimeSmall)
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.endMilestoneNode)
            .click('left')


    }

    linkActivityToAnActivity(sourceActivity, destinationActivity) {
        cy.get(canvasPageElements.activityNode)
            .contains(sourceActivity)
            .parent()
            .parent()
            .click('right')
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.activityNode)
            .contains(destinationActivity)
            .parent()
            .parent()
            .click('center')
    }

    linkActivityToInterimMilestone(sourceActivity, destinationInterimMilestoneIndex) {
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.activityNode)
            .contains(sourceActivity)
            .parent()
            .parent()
            .click('right')

        cy.wait(e2e.pageLoadTimeSmall)
        // cy.get(canvasPageElements.interimMilestoneNode)
        cy.get('[auto-id="milestoneInterim-node"]')
            .eq(destinationInterimMilestoneIndex)
            .click('left')

        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.errorToast)
            .should('not.exist')
        // cy.get('222').click()
    }

    linkInterimMilestoneToInterimMilestone(sourceInterimMilestoneIndex, destinationInterimMilestoneIndex) {
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.interimMilestoneNode)
            .eq(sourceInterimMilestoneIndex)
            .click('right')

        cy.get('[auto-id="milestoneInterim-node"]')
            .eq(destinationInterimMilestoneIndex)
            .click('left')

        cy.get(canvasPageElements.errorToast)
            .should('not.exist')


    }

    linkInterimMilestoneToEndMilestone(sourceInterimMilestoneIndex) {

        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.interimMilestoneNode)
            .eq(sourceInterimMilestoneIndex)
            .click('right')
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.endMilestoneNode)
            .click('left')

    }

    linkStartMilestoneToInterimMilestone(destinationInterimMilestoneIndex) {
        cy.get(canvasPageElements.startMilestoneNode)
            .click('right')
        cy.wait(e2e.pageLoadTimeSmall)

        cy.get('[auto-id="milestoneInterim-node"]')
            .eq(destinationInterimMilestoneIndex)
            .click('left')

        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.errorToast)
            .should('not.exist')

    }

    linkInterimMilestoneToActivity(destinationInterimMilestoneIndex, sourceActivity) {
        cy.get('[auto-id="milestoneInterim-node"]')
            .eq(destinationInterimMilestoneIndex)
            .click('right')
        cy.wait(e2e.pageLoadTimeSmall)

        cy.get(canvasPageElements.activityNode)
            .contains(sourceActivity)
            .parent()
            .parent()
            .click('left')

    }

    LinkActivityToEndMilestoneInsideAGroup(groupName, activityName, xAxis, yAxis) {
        // Expand group
        cy.get('.groupNode')
            .contains(groupName).parent().parent().parent()
            .get('[auto-id="group-node-expand-btn"]')
            .should('be.visible')
            .click()
        cy.get('[auto-id="mini-project-header"]')
            .contains(groupName)
            .should('be.visible')
        cy.log('User is landed inside', groupName)
        // this.zoomSet('100%')
        cy.get(canvasPageElements.canvasGrpBasePage)
            .should('be.visible')

        cy.get(canvasPageElements.activityNode)
            .contains(activityName)
            .parent().parent()
            .should('be.visible')
            .click('right')
        cy.wait(e2e.pageLoadTimeSmall)
        // Click on coordinates to open Combo Search
        cy.get(canvasPageElements.canvasBasePage)
            // cy.get('body')
            .click(xAxis, yAxis)
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get('.createNodeMenu')
            .contains('Connect to Existing')
            .should('be.visible')
            .click()
        cy.get('[auto-id="auto-combo-search-field"]').click().type("End Milestone")
        cy.get('div.auto-milestoneEnd').first().realHover('mouse')
        // cy.get('[auto-id="combo-search-connect-btn"]')
        cy.get('[auto-id*="combo-multiple-relation-search-connect-btn-"]')
            .should('be.visible').click()
        // Click on Add button on Combo search box
        cy.get('.comboFooter .smallAddBtn')
            .click()
        // Assert Connection with End Milestone is created 
        cy.get('.RelationshipInfo_elementWraper__3GSgB')
            .contains('End Milestone')
            .should('be.visible')
    }

    monkeyInAction(expectedDuration, zoom, initStartTime) {
        // cy.log('Start Monkey time is ',performance.now())
        var desiredExeTimeMs = expectedDuration + initStartTime
        let zoomVal = zoom
        cy.get(canvasPageElements.groupIcon).then(() => {
            const coordinatesData = {
                "activity1Coordinates": {
                    "activityXAxis": 400,
                    "activityYAxis": 100
                },
                "activity2Coordinates": {
                    "activityXAxis": 600,
                    "activityYAxis": 150
                },
                "activity3Coordinates": {
                    "activityXAxis": 730,
                    "activityYAxis": 100
                },
                "GroupCoordinates": {
                    "groupXAxis": 800,
                    "groupYAxis": 400
                },
                "startMilsteoneCoordinates": {
                    "startMilestoneXAxis": 80,
                    "startMilestoneYAxis": 80
                },
                "interimMilsteone1Coordinates": {
                    "interimMilestoneXAxis": 750,
                    "interimMilestoneYAxis": 230
                },
                "interimMilsteone2Coordinates": {
                    "interimMilestoneXAxis": 300,
                    "interimMilestoneYAxis": 400
                },
                "endMilsteoneCoordinates": {
                    "endMilestoneXAxis": 300,
                    "endMilestoneYAxis": 550
                }
            }

            // Set Zoom level
            cy.log('zoooomVal', zoomVal)
            canvasPageObject.zoomSet(zoomVal)

            cy.get(canvasPageElements.canvasGrpBasePage)
                .should('be.visible')
            // Create Activity on canvas
            canvasPageObject.createAnActity(coordinatesData.activity1Coordinates.activityXAxis,
                coordinatesData.activity1Coordinates.activityYAxis, 'Activity-1', 0, 2, 100)


            canvasPageObject.createAnActity(coordinatesData.activity2Coordinates.activityXAxis,
                coordinatesData.activity2Coordinates.activityYAxis, 'Activity-2', 1, 3, 100)

            // Link Activities
            canvasPageObject.linkActivityToAnActivity('Activity-1', 'Activity-2')
            // Activity creation via Right click
            canvasPageObject.createAnActivityViaRightClick(coordinatesData.activity3Coordinates.activityXAxis,
                coordinatesData.activity3Coordinates.activityYAxis, 'Activity-3', 2, 4, 100)
            // Link Activities
            canvasPageObject.linkActivityToAnActivity('Activity-2', 'Activity-3')

            // Create Interim Milestone
            canvasPageObject.createAnInterimMilestone(coordinatesData.interimMilsteone1Coordinates.interimMilestoneXAxis,
                coordinatesData.interimMilsteone1Coordinates.interimMilestoneYAxis, 0)

            // Link Activity to Interim Milestone
            canvasPageObject.linkActivityToInterimMilestone('Activity-3', 0)


            cy.get('[auto-id="error-toast"]')
                .should('not.exist')

            // Create Interim Milestone
            canvasPageObject.createAnInterimMilestone(coordinatesData.interimMilsteone2Coordinates.interimMilestoneXAxis,
                coordinatesData.interimMilsteone2Coordinates.interimMilestoneYAxis, 1)
            // Link Interim Milestones
            canvasPageObject.linkInterimMilestoneToInterimMilestone(0, 1)

            // Delete activities

            cy.get(canvasPageElements.activityNode)
                .contains('Activity-1')
                .click()
                .type('{del}')


            cy.get(canvasPageElements.activityNode)
                .contains('Activity-2')
                .click()
                .type('{del}')


            cy.get(canvasPageElements.activityNode)
                .contains('Activity-3')
                .click()
                .type('{del}')

            // Delete Interim Milestones

            cy.get(canvasPageElements.interimMilestoneNode)
                .eq(1)
                .click()
                .type('{del}')

            cy.get(canvasPageElements.interimMilestoneNode)
                .eq(0)
                .click()
                .type('{del}')

            cy.log('inside: ', performance.now())
            if (performance.now() - initStartTime > desiredExeTimeMs) {
                // break;
            } else {
                this.monkeyInAction(desiredExeTimeMs, zoomVal, 0)
            }
        })
    }

    zoomSet(val) {
        cy.get('.toolText').then(($val) => {
            const zoomText = $val.text()
            // cy.log('zoomText',zoomText)
            // cy.log('INT zoomText',parseInt(zoomText))
            // cy.log('zoom desired val',val)
            // cy.log('INT zoom desired val',parseInt(val))
            // let zoom_slipt = zoomText.split('%')
            // let exp_val=zoom_slipt[0]
            cy.log('Value of $VAL is:', $val.text()) // showing the current value of web element 
            // cy.log(val)
            if (parseInt(zoomText) <= parseInt(val)) {
                // break;
            } else {
                // cy.get(canvasPageElements.canvasBasePage).should('be.visible').click(1,1)
                cy.get('[id="canvasTop"]')
                    .type('{command}', { release: false })
                    .trigger("wheel", { deltaY: 6.7 }) //div.react-flow__pane    div.react-flow__renderer
                // cy.get('div.react-flow__pane').trigger("wheel", {deltaY: 6.7}) //, { wheelDeltaX: 100, deltaY: -66.666666, wheelDelta: 120, wheelDelta: 120, wheelDeltaX: 0, wheelDeltaY: 120, bubbles: true}
                this.zoomSet(val)
            }
        })
    }

    updateAtivityDuration(activityName, activityDuration) {
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.activityNode)
            .contains(activityName)
            .parent()
            // .find(canvasPageElements.activityDuration)
            .find('[data-testid="node-duration"]')
            .dblclick()
        cy.wait(e2e.pageLoadTimeSmall)

        cy.get(canvasPageElements.activityDuration_Input)
            // .as('durationFeild')
            .click()
            // cy.get('@durationFeild')
            // .click()
            .clear()
            .type(activityDuration)

    }

    loadProject(projectTitle) {
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get('.projectCreateButton').should('be.visible')
        cy.log('Loading the Project')
        cy.get('.projectsList >.mainProjectCardPreview>.HomePage_mainProjectCardHeader__18-mD>.HomePage_mainProjectCardTitle__3TyeN').contains(projectTitle).click()
        cy.wait(e2e.pageLoadTimeSmall)

    }

    runCPM() {
        cy.wait(22000) // wait added as per discussion in PRD-9969
        cy.get(canvasPageElements.runScheduleInTable).click()
        cy.wait(e2e.pageLoadTimeMedium)
        cy.get(canvasPageElements.runSchedulePopupContainer).should('be.visible')
        cy.get(canvasPageElements.closeCPMModal).click()
    }

    expandGroup(groupName) {
        cy.log('inside test method')
        cy.get(canvasPageElements.groupNodeName)
            .contains(groupName)
            .parentsUntil(canvasPageElements.groupNodeClass)
            .find(canvasPageElements.newGrpExpandIcon)
            .click()

    }

    getNodeId(nodeTitle, nodeType) {
        return new Promise((resolve, reject) => {
            cy.get('.react-flow__node').contains(nodeTitle)
                .then(($el) => {
                    let NodeParent = null;
                    if (nodeType === 'Start Milestone' || nodeType === 'End Milestone' || nodeType === 'Interim Milestone') {
                        NodeParent = $el.parent().parent().parent().parent();
                    } else if (nodeType === 'Start Milestone outside WBS' || nodeType === 'End Milestone outside WBS' || nodeType === 'Interim Milestone outside WBS' || nodeType === 'Activity outside WBS') {
                        // cy.log($el);     //PLZ DON'T REMOVE THIS COMMNENTED LINE
                        NodeParent = $el.parent().parent().parent().parent().parent().parent().parent();
                        // cy.log('here the parent node is:', NodeParent);   //PLZ DON'T REMOVE THIS COMMNENTED LINE
                    } else if (nodeType === 'Group') {
                        NodeParent = $el.parent().parent().parent();
                    } else if (nodeType === 'Activity') {
                        NodeParent = $el.parent().parent();
                    } else if (nodeType === 'Stub') {
                        NodeParent = $el.parent().parent().parent().parent().parent().parent().parent();
                    }
                    if (NodeParent) {
                        let NodeId = NodeParent.attr('id');
                        cy.log(nodeTitle + ' ID of the Node is:', NodeId);
                        resolve({ NodeId, nodeTitle });
                    } else {
                        reject('Node not found');
                    }
                });
        });
    }

    verifyNodeStartDate(nodeTitle, nodeType, startDate) {
        return cy.wrap(this.getNodeId(nodeTitle, nodeType)).then((Result) => {
            let nodeId = Result.NodeId
            let selector = `[id="${nodeId}"]`
            cy.get(selector)
                .find('.nodeDates .nodeStartDate')
                // .should('have.text', startDate)
                .should('contain', startDate)
        })
    }

    verifyNodeEndDate(nodeTitle, nodeType, endDate) {
        return cy.wrap(this.getNodeId(nodeTitle, nodeType)).then((Result) => {
            let nodeId = Result.NodeId
            let selector = `[id="${nodeId}"]`
            cy.get(selector)
                // .find('.nodeDates .nodeEndDate')
                .find('.nodeDates')
                // .should('have.text', endDate)
                .should('contain', endDate)
        })
    }

    verifyTFValue(nodeTitle, nodeType, value) {
        return cy.wrap(this.getNodeId(nodeTitle, nodeType)).then((Result) => {
            let TFNodeId = Result.NodeId;
            cy.log(Result.name);
            cy.log('TF NodeID is:', TFNodeId);
            let selector = '[id="' + TFNodeId + '"]';
            if (nodeType === "Interim Milestone" || nodeType === "End Milestone") {
                cy.get(selector).children('.MilestoneNode_statusPill__1IKe6').should('contain', value);
            } else {
                // cy.get(selector).find('.totalFloat').should('contain', value);
                // cy.get(selector).find('.NodeTotalFloat_floatValue__qDKp4').should('contain', value);
                // cy.get(selector).find('.NodeTotalFloat_totalFloat__3GXoW').should('contain', value);
                cy.get(selector).find('.NodeTotalFloat_selected__3zUyZ').should('contain', value);

            }
        });
    }

    verifyStubsTitle(nodeTitle, nodeType, stubTitle) {
        return cy.wrap(this.getNodeId(nodeTitle, nodeType)).then((Result) => {
            let nodeId = Result.NodeId
            let selector = `[id="${nodeId}"]`
            cy.get(selector).find('.RelationshipInfo_elementGroup__2QvZk>div>.MuiTypography-body1').should('have.text', stubTitle)
        })
    }

    verifyRelationshipLink(node1, node1Type, node2, node2Type, relationshipType) {
        if (node1Type == 'Group' || node2Type == 'Group') {
            return cy.wrap(this.getNodeId(node1, node1Type)).then((firstResult) => {
                let firstNodeId = firstResult.NodeId
                const modifiedFirstNodeId = firstNodeId.replace('group-header--', '');
                cy.log(node1, firstNodeId);
                return cy.wrap(this.getNodeId(node2, node2Type)).then((secondResult) => {
                    let secondNodeId = secondResult.NodeId
                    const modifiedSecondNodeId = secondNodeId.replace('group-header--', '');
                    cy.log(node2, modifiedSecondNodeId);

                    let linkId = '[id="' + modifiedSecondNodeId + '=>' + modifiedFirstNodeId + '=>' + relationshipType + '"]'
                    cy.log('linkId', linkId)
                    cy.get(linkId).parent().should('be.visible')

                })
            })
        } else {
            cy.wrap(this.getNodeId(node1, node1Type)).then((firstResult) => {
                let firstNodeId = firstResult.NodeId;
                cy.log(node1, firstNodeId);

                cy.wrap(this.getNodeId(node2, node2Type)).then((secondResult) => {
                    let secondNodeId = secondResult.NodeId;
                    cy.log(node2, secondNodeId);
                    let linkId = null
                    let firstNodeIdSplit = null
                    let secondNodeIdSplit = null
                    cy.log('Node Types outside the condional check as:', node1Type, node2Type)

                    let node1Flag = node1Type.includes('outside WBS')
                    let node2Flag = node2Type.includes('outside WBS')

                    if (node1Flag && !node2Flag) {
                        cy.log('Passing node1 as TRUE and node2 as FALSE in terms of outside WBS')
                        firstNodeIdSplit = firstNodeId.split('->');
                        linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeIdSplit[1] + '"]'
                        cy.get(linkId).parent().should('be.visible')
                    }
                    else if (!node1Flag && node2Flag) {
                        cy.log('Passing node1 as False and node2 as TRUE in terms of outside WBS')
                        secondNodeIdSplit = secondNodeId.split('->');
                        linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeIdSplit[1] + '=>' + firstNodeId + '"]'
                        cy.get(linkId).parent().should('be.visible')
                    }
                    else if (node1Flag && node2Flag) {
                        cy.log('Passing node1 as TRUE and node2 as TRUE in terms of outside WBS')
                        firstNodeIdSplit = firstNodeId.split('->');
                        secondNodeIdSplit = secondNodeId.split('->');
                        linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeIdSplit[1] + '=>' + firstNodeIdSplit[1] + '"]'
                        cy.get(linkId).parent().should('be.visible')
                    }
                    else if (node1Type == 'Interim Milestone' && node2Type == 'Interim Milestone') {
                        let firstNodeId;
                        let secondNodeId;

                        cy.get(canvasPageElements.interimMilestoneNode)
                            .eq(0)
                            .then((node1) => {
                                firstNodeId = node1.attr('id');
                            })
                        cy.get(canvasPageElements.interimMilestoneNode)
                            .eq(1)
                            .then((node2) => {
                                secondNodeId = node2.attr('id');
                            })
                            .then(() => {
                                // The IDs are now assigned, you can use them here
                                console.log("First Node ID:", firstNodeId);
                                console.log("Second Node ID:", secondNodeId);
                                cy.log("First Node ID:", firstNodeId);
                                cy.log("Second Node ID:", secondNodeId);

                                let linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeId + '"]'
                                cy.log('linkId', linkId)
                                cy.log('We are in the Interim Milestone block')
                                cy.wait(e2e.pageLoadTimeSmall)
                                cy.get(linkId).parent().should('be.visible')
                            });
                    }
                    else {
                        cy.log('Passing node1 as FALSE and node2 as FALSE in terms of outside WBS')
                        linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeId + '"]'
                        cy.log('linkId', linkId)
                        cy.get(linkId).parent().should('be.visible')

                    }
                });
            });
        }
    }

    changeRelationship(To) {
        cy.get('.GroupConnector_connectorContextMenu__XtBW_ > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').should('be.visible').click()
        if (To === 'FS') {
            cy.get('[data-value="FS"]').should('be.visible').click()
            cy.get(canvasPageElements.canvasBasePage).click(100, 100)
        }
        if (To === 'SS') {
            cy.get('[data-value="SS"]').should('be.visible').click()
            cy.get(canvasPageElements.canvasBasePage).click(100, 100)
        }
        if (To === 'FF') {
            cy.get('[data-value="FF"]').should('be.visible').click()
            cy.get(canvasPageElements.canvasBasePage).click(100, 100)
        }
    }

    clickOnLinkLine(node1, node1Type, node2, node2Type, relationshipType) {
        if (node1Type == 'Interim Milestone' && node2Type == 'Interim Milestone') {
            let firstNodeId;
            let secondNodeId;

            cy.get(canvasPageElements.interimMilestoneNode)
                .eq(0)
                .then((node1) => {
                    firstNodeId = node1.attr('id');
                })
            cy.get(canvasPageElements.interimMilestoneNode)
                .eq(1)
                .then((node2) => {
                    secondNodeId = node2.attr('id');
                })
                .then(() => {
                    // The IDs are now assigned, you can use them here
                    console.log("First Node ID:", firstNodeId);
                    console.log("Second Node ID:", secondNodeId);
                    cy.log("First Node ID:", firstNodeId);
                    cy.log("Second Node ID:", secondNodeId);

                    let linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeId + '"]'
                    cy.log('linkId', linkId)
                    cy.log('We are in the Interim Milestone block')
                    cy.wait(e2e.pageLoadTimeSmall)
                    cy.get(linkId).parent().should('be.visible').click()
                });
        } else if (node1Type == 'Stub') {
            return cy.wrap(this.getNodeId(node1, node1Type)).then((firstResult) => {
                let firstNodeId = firstResult.NodeId
                cy.log(node1, firstNodeId);
                let firstNodeIdSplit = firstNodeId.split('->');
                cy.log(node1, firstNodeIdSplit);
                return cy.wrap(this.getNodeId(node2, node2Type)).then((secondResult) => {
                    let secondNodeId = secondResult.NodeId
                    cy.log(node2, secondNodeId);

                    let linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeIdSplit[1] + '"]'
                    cy.log('linkId', linkId)
                    cy.wait(e2e.pageLoadTimeSmall)
                    cy.get(linkId).parent().should('be.visible').click()
                })
            })
        } else if (node2Type == 'Stub') {
            return cy.wrap(this.getNodeId(node1, node1Type)).then((firstResult) => {
                let firstNodeId = firstResult.NodeId
                cy.log(node1, firstNodeId);
                return cy.wrap(this.getNodeId(node2, node2Type)).then((secondResult) => {
                    let secondNodeId = secondResult.NodeId
                    cy.log(node2, secondNodeId);
                    let SecNodeIdSplit = secondNodeId.split('->');
                    cy.log(node1, SecNodeIdSplit);

                    let linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + SecNodeIdSplit[1] + '=>' + firstNodeId + '"]'
                    cy.log('linkId', linkId)
                    cy.wait(e2e.pageLoadTimeSmall)
                    cy.get(linkId).parent().should('be.visible').click()
                })
            })
        }
        else {
            return cy.wrap(this.getNodeId(node1, node1Type)).then((firstResult) => {
                let firstNodeId = firstResult.NodeId
                cy.log(node1, firstNodeId);

                return cy.wrap(this.getNodeId(node2, node2Type)).then((secondResult) => {
                    let secondNodeId = secondResult.NodeId
                    cy.log(node2, secondNodeId);

                    let linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeId + '"]'
                    cy.log('linkId', linkId)
                    cy.wait(e2e.pageLoadTimeSmall)
                    cy.get(linkId).parent().should('be.visible').click()

                })
            })
        }
    }
    clickOnLinkLineWithGroup(node1, node1Type, node2, node2Type, relationshipType, clickOn) {
        return cy.wrap(this.getNodeId(node1, node1Type)).then((firstResult) => {
            let firstNodeId = firstResult.NodeId
            const modifiedFirstNodeId = firstNodeId.replace('group-header--', '');
            cy.log(node1, firstNodeId);
            return cy.wrap(this.getNodeId(node2, node2Type)).then((secondResult) => {
                let secondNodeId = secondResult.NodeId
                const modifiedSecondNodeId = secondNodeId.replace('group-header--', '');
                cy.log(node2, modifiedSecondNodeId);

                let linkId = '[id="' + modifiedSecondNodeId + '=>' + modifiedFirstNodeId + '=>' + relationshipType + '"]'
                cy.log('linkId', linkId)
                cy.wait(e2e.pageLoadTimeSmall)
                if (clickOn == 'right') {
                    cy.get(linkId).parent().should('be.visible').click('right')
                } else if (clickOn == 'left') {
                    cy.get(linkId).parent().should('be.visible').click('left')
                } else if (clickOn == 'bottom') {
                    cy.get(linkId).parent().should('be.visible').click('bottom')
                } else if (clickOn == 'top') {
                    cy.get(linkId).parent().should('be.visible').click('top')
                } else {
                    cy.get(linkId).parent().should('be.visible').click()
                }
            })
        })
    }
    clickOnLinkLineOfInterimToInterimMilestone(relationshipType) {
        let firstNodeId;
        let secondNodeId;

        cy.get(canvasPageElements.interimMilestoneNode)
            .eq(0)
            .then((node1) => {
                firstNodeId = node1.attr('id');
            })
            .then(() => {
                return cy.get(canvasPageElements.interimMilestoneNode).eq(1);
            })
            .then((node2) => {
                secondNodeId = node2.attr('id');
            })
            .then(() => {
                // The IDs are now assigned, you can use them here
                console.log("First Node ID:", firstNodeId);
                console.log("S econd Node ID:", secondNodeId);

                let linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeId + '"]'
                cy.log('linkId', linkId)
                cy.wait(e2e.pageLoadTimeSmall)

                cy.get(linkId).parent().should('be.visible').click()
            });
    }
    shiftClickOnLinkLine(node1, node1Type, node2, node2Type, relationshipType) {
        if (node1Type == 'Interim Milestone' && node2Type == 'Interim Milestone') {
            let firstNodeId;
            let secondNodeId;

            cy.get(canvasPageElements.interimMilestoneNode)
                .eq(0)
                .then((node1) => {
                    firstNodeId = node1.attr('id');
                })
            cy.get(canvasPageElements.interimMilestoneNode)
                .eq(1)
                .then((node2) => {
                    secondNodeId = node2.attr('id');
                })
                .then(() => {
                    // The IDs are now assigned, you can use them here
                    console.log("First Node ID:", firstNodeId);
                    console.log("Second Node ID:", secondNodeId);
                    cy.log("First Node ID:", firstNodeId);
                    cy.log("Second Node ID:", secondNodeId);

                    let linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeId + '"]'
                    cy.log('linkId', linkId)
                    cy.log('We are in the Interim Milestone block')
                    cy.wait(e2e.pageLoadTimeSmall)
                    cy.get(linkId).parent().should('be.visible').click({ shiftKey: true })

                });
        } else if (node1Type == 'Stub') {
            return cy.wrap(this.getNodeId(node1, node1Type)).then((firstResult) => {
                let firstNodeId = firstResult.NodeId
                cy.log(node1, firstNodeId);
                let firstNodeIdSplit = firstNodeId.split('->');
                cy.log(node1, firstNodeIdSplit);
                return cy.wrap(this.getNodeId(node2, node2Type)).then((secondResult) => {
                    let secondNodeId = secondResult.NodeId
                    cy.log(node2, secondNodeId);

                    let linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeIdSplit[1] + '"]'
                    cy.log('linkId', linkId)
                    cy.wait(e2e.pageLoadTimeSmall)
                    cy.get(linkId).parent().should('be.visible').click({ shiftKey: true })
                })
            })
        }
        else {
            return cy.wrap(this.getNodeId(node1, node1Type)).then((firstResult) => {
                let firstNodeId = firstResult.NodeId
                cy.log(node1, firstNodeId);

                return cy.wrap(this.getNodeId(node2, node2Type)).then((secondResult) => {
                    let secondNodeId = secondResult.NodeId
                    cy.log(node2, secondNodeId);

                    let linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeId + '"]'
                    cy.log('linkId', linkId)
                    cy.wait(e2e.pageLoadTimeSmall)
                    cy.get(linkId).parent().should('be.visible').click({ shiftKey: true })

                })
            })
        }
    }
    shiftClickOnLinkLineWithGroup(node1, node1Type, node2, node2Type, relationshipType, clickOn) {
        return cy.wrap(this.getNodeId(node1, node1Type)).then((firstResult) => {
            let firstNodeId = firstResult.NodeId
            const modifiedFirstNodeId = firstNodeId.replace('group-header--', '');
            cy.log(node1, firstNodeId);
            return cy.wrap(this.getNodeId(node2, node2Type)).then((secondResult) => {
                let secondNodeId = secondResult.NodeId
                const modifiedSecondNodeId = secondNodeId.replace('group-header--', '');
                cy.log(node2, modifiedSecondNodeId);

                let linkId = '[id="' + modifiedSecondNodeId + '=>' + modifiedFirstNodeId + '=>' + relationshipType + '"]'
                cy.log('linkId', linkId)
                cy.wait(e2e.pageLoadTimeSmall)
                if (clickOn == 'right') {
                    cy.get(linkId).parent().should('be.visible').click('right', { shiftKey: true })
                } else if (clickOn == 'left') {
                    cy.get(linkId).parent().should('be.visible').click('left', { shiftKey: true })
                } else if (clickOn == 'bottom') {
                    cy.get(linkId).parent().should('be.visible').click('bottom', { shiftKey: true })
                } else if (clickOn == 'top') {
                    cy.get(linkId).parent().should('be.visible').click('top', { shiftKey: true })
                } else {
                    cy.get(linkId).parent().should('be.visible').click({ shiftKey: true })
                }
            })
        })
    }
    shiftClickOnLinkLineOfInterimToInterimMilestone(relationshipType) {
        let firstNodeId;
        let secondNodeId;

        cy.get(canvasPageElements.interimMilestoneNode)
            .eq(0)
            .then((node1) => {
                firstNodeId = node1.attr('id');
            })
            .then(() => {
                return cy.get(canvasPageElements.interimMilestoneNode).eq(1);
            })
            .then((node2) => {
                secondNodeId = node2.attr('id');
            })
            .then(() => {
                // The IDs are now assigned, you can use them here
                console.log("First Node ID:", firstNodeId);
                console.log("S econd Node ID:", secondNodeId);

                let linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeId + '"]'
                cy.log('linkId', linkId)
                cy.wait(e2e.pageLoadTimeSmall)

                cy.get(linkId).parent().should('be.visible').click({ shiftKey: true })
            });
    }

    verifyLag(node1, node1Type, node2, node2Type, relationshipType, value) {
        return cy.wrap(this.getNodeId(node1, node1Type)).then((firstResult) => {
            let firstNodeId = firstResult.NodeId
            cy.log(node1, firstNodeId);
            return cy.wrap(this.getNodeId(node2, node2Type)).then((secondResult) => {
                let secondNodeId = secondResult.NodeId
                cy.log(node2, secondNodeId);

                let linkId = null
                let firstNodeIdSplit = null
                let secondNodeIdSplit = null
                cy.log('Node Types outside the condional check as:', node1Type, node2Type)

                let node1Flag = node1Type.includes('outside WBS')
                let node2Flag = node2Type.includes('outside WBS')

                if (node1Flag && !node2Flag) {
                    cy.log('Passing node1 as TRUE and node2 as FALSE in terms of outside WBS')
                    firstNodeIdSplit = firstNodeId.split('->');
                    linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeIdSplit[1] + '"]'
                }
                else if (!node1Flag && node2Flag) {
                    cy.log('Passing node1 as False and node2 as TRUE in terms of outside WBS')
                    secondNodeIdSplit = secondNodeId.split('->');
                    linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeIdSplit[1] + '=>' + firstNodeId + '"]'
                }
                else if (node1Flag && node2Flag) {
                    cy.log('Passing node1 as TRUE and node2 as TRUE in terms of outside WBS')
                    firstNodeIdSplit = firstNodeId.split('->');
                    secondNodeIdSplit = secondNodeId.split('->');
                    linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeIdSplit[1] + '=>' + firstNodeIdSplit[1] + '"]'
                }
                else {
                    cy.log('Passing node1 as FALSE and node2 as FALSE in terms of outside WBS')
                    linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeId + '"]'
                }

                // let linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeId + '"]'

                cy.log('linkId', linkId)
                cy.get(linkId).parent().find('.edgeLagText.react-flow__edge-clickable-child').should('be.visible').should('have.text', value)
            })
        })
    }

    updateLag(value) {
        cy.get('.GroupConnector_nodeLag__u9wM0').click()
        cy.get('.DurationInput_InputField__1LD_E').should('be.visible').clear().type(value).type('{enter}')
        cy.wait(1000)
        cy.get(canvasPageElements.canvasBasePage).click(100, 100)
        cy.wait(1500)
    }

    verifyGroupHeaderInfo(groupName, startDate, endDate) {
        cy.log('Group Name=' + groupName + ', Start Date=' + startDate + ', End Date=' + endDate)
        if (groupName != empty && startDate != empty && endDate != empty) {
            let startDateValue = startDate + 'to'
            let endDateValue = 'to' + endDate
            cy.log(startDateValue, endDateValue)
            cy.get('.canvasHeaderNameWrapper').should('be.visible').should('have.text', groupName)
            // cy.get('.CanvasHeader_groupDates__2iDJ2').then(($el) => {
            //     let abc= $el.text()
            // cy.log('ABC='+abc)
            // })
            cy.get('.CanvasHeader_groupDates__2iDJ2').eq(0).should('contain', startDateValue)
            cy.get('.CanvasHeader_groupDates__2iDJ2').eq(0).should('contain', endDateValue)
        }
    }

    setConstraints(nodeTitle, nodeType, constriantOption, desiredDate) {
        const dayjs = require('dayjs')
        let constraintPreText = null
        let datePicker = null

        cy.wrap(this.getNodeId(nodeTitle, nodeType)).then((firstResult) => {
            let nodeId = firstResult.NodeId;
            cy.log(nodeTitle, nodeId);
            let selector = `[id="${nodeId}"]`
            let constraintMenu = '.MilestoneNode_menuItemText__2GOUR'

            cy.get(selector).find(constraintMenu).then(($el) => {
                constraintPreText = $el.text()
                cy.log('Constraint Pre Text Value', constraintPreText)
                if (constraintPreText === 'No Constraints' && constriantOption === 'No Constraints') {
                    cy.log('Scenario no 1')
                }
                else if (constraintPreText != 'No Constraints' && constriantOption === 'No Constraints') {
                    cy.log('Scenario no 2')
                    cy.get(selector).find(constraintMenu).click()
                    cy.get('[data-value="NO_CONSTRAINTS"]').should('be.visible').click()
                    cy.get(canvasPageElements.canvasBasePage).click(150, 150)
                }
                else if (constraintPreText === 'No Constraints' && constriantOption != 'No Constraints') {
                    cy.log('Scenario no 3')
                    cy.get(selector).find(constraintMenu).click()
                    if (constriantOption === 'Start On or After') {
                        cy.get('[data-value="START_ON_OR_AFTER"]').should('be.visible').click()
                        cy.get(canvasPageElements.canvasBasePage).click(100, 100)
                    }
                    else if (constriantOption === 'Finish On or Before' || constriantOption === 'Finish On') {
                        cy.get('[data-value="FINISH_ON_OR_BEFORE"]').should('be.visible').click()
                        cy.get(canvasPageElements.canvasBasePage).click(100, 100)
                    }
                    datePicker = selector + ' div.MilestoneNode_milestoneContent__3M9km div.MilestoneNode_col2__4KQqs input.MuiInputBase-input'
                    return cy.wrap(this.selectDate(datePicker, dayjs().format('MM/DD/YYYY'), desiredDate))
                }
                // pre constraint date clearence 
                else if (constraintPreText != 'No Constraints' && constriantOption != 'No Constraints') {
                    cy.log('Scenario no 4')
                    // cy.get('div.react-flow__node-milestoneEnd .MuiInputBase-inputAdornedEnd').click()
                    cy.get(selector).find('.MuiInputBase-colorPrimary.MuiInputBase-formControl').should('be.visible').click()
                    cy.wait(e2e.pageLoadTimeSmall)
                    cy.get('button').contains('Clear Selection').click()

                    cy.log('Constraint Selection Cleared')
                    cy.get(selector).find(constraintMenu).should('be.visible').click()
                    if (cy.get('.MuiPopover-paper')) {
                        if (constriantOption === 'Start On or After') {
                            cy.get('[data-value="START_ON_OR_AFTER"]').should('be.visible').click()
                            cy.get(canvasPageElements.canvasBasePage).click(100, 100)
                        }
                        else if (constriantOption === 'Finish On or Before' || constriantOption === 'Finish On') {
                            cy.get('[data-value="FINISH_ON_OR_BEFORE"]').should('be.visible').click()
                            cy.get(canvasPageElements.canvasBasePage).click(100, 100)
                        }
                        datePicker = selector + ' div.MilestoneNode_milestoneContent__3M9km div.MilestoneNode_col2__4KQqs input.MuiInputBase-input'
                        return cy.wrap(this.selectDate(datePicker, dayjs().format('MM/DD/YYYY'), desiredDate))
                    }
                }
            })

        })
    }

    moveIntoGroup(groupTitle) {
        return cy.wrap(this.getNodeId(groupTitle, 'Group')).then((Result) => {
            let selector = '[id="' + Result.NodeId + '"]'
            cy.get(selector).find('.GroupNodeHeader_expand__37NYg').should("be.visible").click()
            cy.wait(2000)
        })
    }

    enableTotalFloatToggelButton() {
        cy.get('[auto-id="canvas-bottom-toolbar-dates"]').click()
        cy.wait(e2e.pageLoadTimeSmall)
        // cy.get('.switchWrapCanvas')
        //     .contains('Show Total Float')
        //     .parentsUntil('.switch')
        //     .find('[type="checkbox"]')
        //     .check({ force: true })
        cy.get('[id="demo-simple-select"]').click()
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get('.canvasSettingsFormFieldItem').contains('Total Float').click()
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get('.MuiBackdrop-root').eq(0).click(100, 300)
        cy.wait(e2e.pageLoadTimeSmall)
    }

    verifyTableData(prePath) {
        // <<<<<<< Table data verification >>>>>>>

        cy.log('Table Verification method initiated')
        const tableVerification = (rowIndex, rowData) => {
            cy.log('inside tableVerification', rowIndex, rowData)
            // Expand group if it is not expanded
            cy.get(`[row-index=${rowIndex}]`).then($row => {
                if ($row.find(tablePageElements.expandGroupIcon).length) {
                    $row.find(tablePageElements.expandGroupChevronIcon).click()
                    cy.log('Group is expanded')
                    cy.wait(100)
                }
            })
            const elementRow = cy.get(`[row-index=${rowIndex}]`)
            const elementColumn = elementRow.find('[col-id="name"]')
            cy.log("Name Column Verification")
            // elementColumn.should('contain', rowData["name"])
            // elementColumn.scrollIntoView()
            cy.wait(500)
            const columnKeys = Object.keys(rowData)
            // iterate based on columns of a canvas rows- element fetched from JSON
            for (let j = 0; j < columnKeys.length; j++) {
                const clName = columnKeys[j]
                const xpath = `[col-id=${clName}]`
                cy.log("xpath: ", xpath)
                if (clName == "type") {
                    continue
                }
                else {
                    const rowNodeSelector = `[row-index=${rowIndex}]`;
                    const assertColumn = cy.get(rowNodeSelector).find(xpath)
                    assertColumn.scrollIntoView()
                    cy.get(rowNodeSelector).find(xpath).should('contain', rowData[clName])
                }
            }
        }
        let index = 1
        let elementData = prePath
        // let elementData = prePath.outputTableData
        // iterate based on canvas rows- element fetched from JSON
        cy.log("Table length:", elementData.length)
        for (let i = 0; i < elementData.length; i++) {
            cy.log('dataKeys', elementData[i])
            // ToDO: Get rowIndex dynamically - by searching via its name 
            tableVerification(index, elementData[i])
            index++
            cy.wait(e2e.pageLoadTimeSmall)
            // Scroll left to the start
            cy.get(tablePageElements.columnsParentClassForScroll).first().scrollTo('left')
        }
    }

    verifyNewTableData(prePath) {

        let tableTypes = ['build', 'resources', 'codes', 'updates', 'cpmData']
        let elementData

        cy.log('Table Verification method initiated')
        const tableVerification = (rowIndex, rowData) => {
            cy.log('inside tableVerification', rowIndex, rowData)
            // Expand group if it is not expanded
            cy.get(`[row-index=${rowIndex}]`).then($row => {
                if ($row.find(tablePageElements.expandGroupIcon).length) {
                    $row.find(tablePageElements.expandGroupChevronIcon).click()
                    cy.log('Group is expanded')
                    cy.wait(100)
                }
            })
            const elementRow = cy.get(`[row-index=${rowIndex}]`)
            const elementColumn = elementRow.find('[col-id="name"]')
            cy.log("Name Column Verification", elementColumn)
            cy.get(canvasPageElements.parentProjectHeaderTtile)
                .click()
            cy.wait(500)
            const columnKeys = Object.keys(rowData)

            // iterate based on columns of a canvas rows- element fetched from JSON
            for (let j = 0; j < columnKeys.length; j++) {
                const clName = columnKeys[j]
                const xpath = `[col-id="${clName}"]`
                cy.log("xpath: ", xpath)

                if (clName == "type") {
                    continue
                } else if (clName == "jobType") {

                    canvasPageObject.getColIdValue('Job Type').then((colIdValue) => {
                        const xpath = `[col-id="${colIdValue}"]`
                        cy.log("xpath: ", xpath)
                        const rowNodeSelector = `[row-index=${rowIndex}]`;
                        cy.get(rowNodeSelector).find(xpath).should('contain', rowData[clName]) // assertion
                        cy.log('rowNodeSelector', rowNodeSelector)
                        cy.log('xpath', xpath)
                        cy.log('rowData[clName]', rowData[clName])
                    });
                } else if (clName == "location") {

                    canvasPageObject.getColIdValue('Location').then((colIdValue) => {
                        const xpath = `[col-id="${colIdValue}"]`
                        cy.log("xpath: ", xpath)
                        const rowNodeSelector = `[row-index=${rowIndex}]`;
                        cy.get(rowNodeSelector).find(xpath).should('contain', rowData[clName]) // assertion
                        cy.log('rowNodeSelector', rowNodeSelector)
                        cy.log('xpath', xpath)
                        cy.log('rowData[clName]', rowData[clName])
                    });
                }
                else {
                    const clName = columnKeys[j]
                    const xpath = `[col-id="${clName}"]`
                    cy.log("xpath: ", xpath)
                    const rowNodeSelector = `[row-index=${rowIndex}]`;
                    if (clName == "percentComplete") {
                        cy.get(tablePageElements.columnsParentClassForScroll).first()
                            .scrollTo('right')
                    }
                    cy.get(rowNodeSelector).find(xpath).should('contain', rowData[clName]) // assertion
                    cy.log('rowNodeSelector', rowNodeSelector)
                    cy.log('xpath', xpath)
                    cy.log('rowData[clName]', rowData[clName])
                }
            }
        }
        // iterate based on canvas rows- element fetched from JSON
        for (let k = 0; k < tableTypes.length; k++) {
            if (k == 0) {
                elementData = prePath.build
                cy.log(elementData)
            } else if (k == 1) {
                cy.get('.tablLabel').contains('Resources').parent().click()
                elementData = prePath.resources
            }
            else if (k == 2) {
                cy.get('.tablLabel').contains('Codes').parent().click()
                elementData = prePath.codes
            }
            else if (k == 3) {
                cy.get('.tablLabel').contains('Updates').parent().click()
                elementData = prePath.updates
            } else if (k == 4) {
                cy.get('.tablLabel').contains('CPM Data').parent().click()
                elementData = prePath.cpmData
            }
            for (const [index, data] of elementData.entries()) {

                cy.log('elementData', elementData)
                cy.log('dataKeys', data)
                cy.log('JSON.stringify(data)', JSON.stringify(data))
                // JSON.stringify(data)
                cy.log('data Keys', Object.keys(data))
                cy.log('values', Object.values(data))
                tableVerification(index + 1, data)

                cy.wait(e2e.pageLoadTimeSmall)
                // Scroll left to the start
                if (k == 3)
                    cy.get(tablePageElements.columnsParentClassForScroll).first()
                        .scrollTo('left')
            }
        }
    }

    getColIdValue(givenText) {
        return cy.get('.headerName').then(($elements) => {
            let colIdValue;
            $elements.each((index, $el) => {
                const elementText = $el.textContent.trim();

                // Check if the text matches the given text
                if (elementText === givenText) {
                    // If there's a match, navigate to its parent element and retrieve the "col-id" value
                    colIdValue = Cypress.$($el).parent().parent().attr('col-id');
                    // Now you have the "col-id" value, you can use it as desired.
                    return false; // Break the each loop once we find the matching element
                }
            });
            return colIdValue;
        });
    }

    findAndReplace(element, find, replace) {
        cy.get('div').contains(element).parent().parent().last()     // right click on the element
            .should('be.visible')
            .rightclick({ force: true })
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.contextualMenu).contains('More')   // click on the 'More' Option
            .should('be.visible')
            .realHover('mouse')
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.contextualMenu)                    // click on the 'Find and Replace' Option
            .last().contains('Find and Replace')
            .should('be.visible')
            .click()
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.findActivityInput)                 // Enter the element name to Find
            .first()
            .click()
            .type(find)
        cy.get(canvasPageElements.findActivityInput)                 // Enter the name to replace those elements current name 
            .last()
            .click()
            .type(replace)
        cy.xpath(canvasPageElements.renameBtn)                       // Click on the Rename Button
            .click()
    }

    LinkActivityToAnyAcitivityInsideAGroup(groupName, activityName, sideName, xAxis, yAxis) {
        // Expand group
        // cy.get('.groupNode')
        //     .contains(groupName).parent().parent().parent()
        //     .get('[auto-id="group-node-expand-btn"]')
        //     .should('be.visible')
        //     .click()
        cy.get('[auto-id="mini-project-header"]')
            .contains(groupName)
            .should('be.visible')
        cy.log('User is landed inside', groupName)
        // this.zoomSet('100%')
        cy.get(canvasPageElements.canvasGrpBasePage)
            .should('be.visible')

        cy.get(canvasPageElements.activityNode)
            .contains(activityName)
            .parent().parent()
            .should('be.visible')
            .click(sideName)
        cy.wait(e2e.pageLoadTimeSmall)
        // Click on coordinates to open Combo Search
        cy.get(canvasPageElements.canvasBasePage)
            // cy.get('body')
            .click(xAxis, yAxis)
        cy.wait(e2e.pageLoadTimeSmall)
        // cy.get('.createNodeMenu')
        //     .contains('Connect to Existing')
        //     .should('be.visible')
        //     .click()
        // cy.get('[auto-id="auto-combo-search-field"]').click().type("End Milestone")
        // cy.get('div.auto-milestoneEnd').first().realHover('mouse')
        // // cy.get('[auto-id="combo-search-connect-btn"]')
        // cy.get('[auto-id*="combo-multiple-relation-search-connect-btn-"]')
        //     .should('be.visible').click()
        // // Click on Add button on Combo search box
        // cy.get('.comboFooter .smallAddBtn')
        //     .click()
        // // Assert Connection with End Milestone is created 
        // cy.get('.RelationshipInfo_elementWraper__3GSgB')
        //     .contains('End Milestone')
        //     .should('be.visible')
    }

    createAStub(nodeTitle) {
        // function to create a stub
        cy.get('.createNodeMenu')
            .contains('Connect to Existing')
            .should('be.visible')
            .click()
        cy.get('[auto-id="auto-combo-search-field"]').click().type(nodeTitle)
        cy.get('li[tabindex="-1"]').last().realHover('mouse')
        cy.get('.ComboSearch_checkBoxSquare__2kW5E')
            .should('be.visible').click()
        // Click on Add button on Combo search box
        cy.get('.smallAddBtn')
            .click()
        // Assert Connection with End Milestone is created 
        cy.get('.RelationshipInfo_elementWraper__3GSgB')
            .contains(nodeTitle)
            .should('be.visible')
    }

    verifyColorOfConnection(node1, node1Type, node2, node2Type, relationshipType, color) {
        if (node1Type == 'Interim Milestone' && node2Type == 'Interim Milestone') {
            let firstNodeId;
            let secondNodeId;

            cy.get(canvasPageElements.interimMilestoneNode)
                .eq(0)
                .then((node1) => {
                    firstNodeId = node1.attr('id');
                })
            cy.get(canvasPageElements.interimMilestoneNode)
                .eq(1)
                .then((node2) => {
                    secondNodeId = node2.attr('id');
                })
                .then(() => {
                    // The IDs are now assigned, you can use them here
                    console.log("First Node ID:", firstNodeId);
                    console.log("Second Node ID:", secondNodeId);
                    cy.log("First Node ID:", firstNodeId);
                    cy.log("Second Node ID:", secondNodeId);

                    let linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeId + '"]'
                    cy.log('linkId', linkId)
                    cy.log('We are in the Interim Milestone block')
                    cy.wait(e2e.pageLoadTimeSmall)

                    // asert the color of connection
                    cy.get(linkId)
                        .and('have.attr', 'style')
                        .and('include', color)
                });
        } else if (node1Type == 'Stub') {
            return cy.wrap(this.getNodeId(node1, node1Type)).then((firstResult) => {
                let firstNodeId = firstResult.NodeId
                cy.log(node1, firstNodeId);
                let firstNodeIdSplit = firstNodeId.split('->');
                cy.log(node1, firstNodeIdSplit);
                return cy.wrap(this.getNodeId(node2, node2Type)).then((secondResult) => {
                    let secondNodeId = secondResult.NodeId
                    cy.log(node2, secondNodeId);

                    let linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeIdSplit[1] + '"]'
                    cy.log('linkId', linkId)
                    cy.wait(e2e.pageLoadTimeSmall)

                    // asert the color of connection
                    cy.get(linkId)
                        .and('have.attr', 'style')
                        .and('include', color)
                })
            })
        } else if (node2Type == 'Stub') {
            return cy.wrap(this.getNodeId(node1, node1Type)).then((firstResult) => {
                let firstNodeId = firstResult.NodeId
                cy.log(node1, firstNodeId);
                return cy.wrap(this.getNodeId(node2, node2Type)).then((secondResult) => {
                    let secondNodeId = secondResult.NodeId
                    cy.log(node2, secondNodeId);
                    let SecNodeIdSplit = secondNodeId.split('->');
                    cy.log(node1, SecNodeIdSplit);

                    let linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + SecNodeIdSplit[1] + '=>' + firstNodeId + '"]'
                    cy.log('linkId', linkId)
                    cy.wait(e2e.pageLoadTimeSmall)
                    // asert the color of connection
                    cy.get(linkId)
                        .and('have.attr', 'style')
                        .and('include', color)
                })
            })
        }

        else {
            return cy.wrap(this.getNodeId(node1, node1Type)).then((firstResult) => {
                let firstNodeId = firstResult.NodeId
                cy.log(node1, firstNodeId);

                return cy.wrap(this.getNodeId(node2, node2Type)).then((secondResult) => {
                    let secondNodeId = secondResult.NodeId
                    cy.log(node2, secondNodeId);

                    let linkId = '[id="' + secondNodeId + '=>' + firstNodeId + '=>' + relationshipType + '=>' + secondNodeId + '=>' + firstNodeId + '"]'
                    cy.log('linkId', linkId)
                    cy.wait(e2e.pageLoadTimeSmall)

                    // asert the color of connection
                    cy.get(linkId)
                        .and('have.attr', 'style')
                        .and('include', color)
                })
            })
        }
    }

    verifyColorOfConnectionWithGroup(node1, node1Type, node2, node2Type, relationshipType, color) {
        return cy.wrap(this.getNodeId(node1, node1Type)).then((firstResult) => {
            let firstNodeId = firstResult.NodeId
            const modifiedFirstNodeId = firstNodeId.replace('group-header--', '');
            cy.log(node1, firstNodeId);


            return cy.wrap(this.getNodeId(node2, node2Type)).then((secondResult) => {
                let secondNodeId = secondResult.NodeId
                const modifiedSecondNodeId = secondNodeId.replace('group-header--', '');
                cy.log(node2, modifiedSecondNodeId);

                let linkId = '[id="' + modifiedSecondNodeId + '=>' + modifiedFirstNodeId + '=>' + relationshipType + '"]'
                cy.log('linkId', linkId)
                cy.wait(e2e.pageLoadTimeSmall)

                // asert the color of connection
                cy.get(linkId)
                    .and('have.attr', 'style')
                    .and('include', color)

            })
        })
    }
    connectActivityWithEndMilestone(activityTitle) {
        // make successor dor the Activity
        cy.get(canvasPageElements.activityNode)
            .contains(activityTitle)
            .parent()
            .parent()
            .click('right')
        cy.wait(e2e.pageLoadTimeSmall)
        // right click on the canvas
        cy.get(canvasPageElements.canvasBasePage).click(
            10, 10)
        // select Connect to Existing 
        cy.get('.createNodeMenu')
            .contains('Connect to Existing')
            .should('be.visible')
            .click()
        //search for end milestone
        cy.get('[auto-id="auto-combo-search-field"]').click().type('End Milestone')
        cy.get('li[tabindex="-1"]').last().realHover('mouse')
        cy.get('.ComboSearch_checkBoxSquare__2kW5E')
            .should('be.visible').click()
        // Click on Add button on Combo search box
        cy.get('.smallAddBtn')
            .click()

    }
    pinAndUnpinRelationship(node1, node1Type, node2, node2Type, relationshipType, clickSide) {

        // Pin Unpin
        if (node1Type === 'Group' || node2Type === 'Group') {
            canvasPageObject.clickOnLinkLineWithGroup(node1, node1Type, node2, node2Type, relationshipType, clickSide) // click on the node button 
        } else {
            canvasPageObject.clickOnLinkLine(node1, node1Type, node2, node2Type, relationshipType)
        }
        cy.get(canvasPageElements.pinEdgeContextualMenuOption).click()
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.canvasBasePage).click(10, 10)
        if (node1Type === 'Start Milestone' || node1Type === 'End Milestone' || node1Type === 'Interim Milestone') {
            cy.get('div').contains(node1).parent().parent().parent().parent().next('[class="nodrag"]').should('be.visible').find('button').click()
            canvasPageObject.verifyRelationshipLink(node1, node1Type, node2, node2Type, relationshipType)
            cy.wait(e2e.pageLoadTimeSmall)
            cy.get('div').contains(node1).parent().parent().parent().parent().next('[class="nodrag"]').should('be.visible').find('button').click()
        } else if (node1Type === 'Activity') {
            cy.get('div').contains(node1).parent().parent().next('[class="nodrag"]').should('be.visible').find('button').click()
            cy.wait(e2e.pageLoadTimeSmall)
            canvasPageObject.verifyRelationshipLink(node1, node1Type, node2, node2Type, relationshipType)
            cy.get('div').contains(node1).parent().parent().next('[class="nodrag"]').should('be.visible').find('button').click()
        } else if (node1Type === 'Group') {
            cy.get('div').contains(node1).parent().parent().parent().parent().parent().parent().next('[class="nodrag"]').should('be.visible').find('button').click()
            cy.wait(e2e.pageLoadTimeSmall)
            canvasPageObject.verifyRelationshipLink(node1, node1Type, node2, node2Type, relationshipType)
            cy.get('div').contains(node1).parent().parent().parent().parent().parent().parent().next('[class="nodrag"]').should('be.visible').find('button').click()
        }

        if (node2Type === 'Start Milestone' || node2Type === 'End Milestone' || node2Type === 'Interim Milestone') {
            cy.get('div').contains(node2).parent().parent().parent().parent().next('[class="nodrag"]').should('be.visible').find('button').click()
            canvasPageObject.verifyRelationshipLink(node1, node1Type, node2, node2Type, relationshipType)
            cy.wait(e2e.pageLoadTimeSmall)
            cy.get('div').contains(node2).parent().parent().parent().parent().next('[class="nodrag"]').should('be.visible').find('button').click()
        } else if (node2Type === 'Activity') {
            cy.get('div').contains(node2).parent().parent().next('[class="nodrag"]').should('be.visible').find('button').click()
            cy.wait(e2e.pageLoadTimeSmall)
            canvasPageObject.verifyRelationshipLink(node1, node1Type, node2, node2Type, relationshipType)
            cy.get('div').contains(node2).parent().parent().next('[class="nodrag"]').should('be.visible').find('button').click()
        } else if (node1Type === 'Group') {
            cy.get('div').contains(node2).parent().parent().parent().next('[class="nodrag"]').should('be.visible').find('button').click()
            cy.wait(e2e.pageLoadTimeSmall)
            canvasPageObject.verifyRelationshipLink(node1, node1Type, node2, node2Type, relationshipType)
            cy.get('div').contains(node2).parent().parent().parent().next('[class="nodrag"]').should('be.visible').find('button').click()
        }
    }

    logTestExecution(env, filename, testCaseName, message, executionTime) {
        const logMessage = {
            environment: env,
            filename: filename,
            testCase: testCaseName,
            testCaseMessage: message,
            executionTimeMs: executionTime,
        };
        return logMessage; // Return the log message as a JSON object
    }

    logFailedTestCase(env, fileName, testCaseName, userName, status, errorMessage, url, executionPlatform) {
        const logMessage = {
            environment: env,
            fileName: fileName,
            testCase: testCaseName,
            userName: userName,
            testCaseStatus: status,
            errorMessage: errorMessage,
            pageUrl: url,
            executionPlatform: executionPlatform
        };
        return logMessage; // Return the log message as a JSON object
    }

    logPassedTestCases(env, fileName, testCaseName, status) {
        const logMessage = {
            environment: env,
            fileName: fileName,
            testCase: testCaseName,
            testCaseStatus: status,
        };
        return logMessage; // Return the log message as a JSON object
    }

    logTestExecutionStart(env, fileName, testCaseName, status) {
        const logMessage = {
            environment: env,
            fileName: fileName,
            testCase: testCaseName,
            testCaseStatus: status
        }
        return logMessage;
    }

    verifyNodesColorCanvasFilterActions(colorNodeG0A1, colorNodeABC, colorNodeXYZ, colorNodeGrpConverted, colorNodeGroup1) {
        cy.log('Matching results on the Canvas')
        cy.get('div').contains('G0A1').parent().parent()
            .should('have.css', 'background-color', colorNodeG0A1)

        cy.get('div').contains('ABC').parent().parent()
            .should('have.css', 'background-color', colorNodeABC)

        cy.get('div').contains('XYZ').parent().parent()
            .should('have.css', 'background-color', colorNodeXYZ)

        cy.get('div').contains('GrpConverted').parent().parent().parent()
            .should('have.css', 'background-color', colorNodeGrpConverted)

        cy.get('div').contains('Group1').parent().parent().parent()
            .should('have.css', 'background-color', colorNodeGroup1)
    }

    saveTheFilter(filterTitle) {
        cy.log('Saving the filter')
        cy.get(canvasPageElements.filterSaveButtonOnFilterPopupHeader).should('be.visible').click()
        cy.get(canvasPageElements.filterNameTextFiledOnPopup).should('be.visible').click().clear().type(filterTitle)
        cy.get(canvasPageElements.filterSaveButtonOnPopup).should('be.visible').click()
        cy.get(canvasPageElements.filterLable).should('be.visible').should('have.text', filterTitle)
        cy.wait(e2e.pageLoadTimeSmall)
        cy.log('Filter saved successfully')
    }

    renameSavedFilter(existingFilterTitle, updatedTitle) {
        cy.log('Renaming the saved filter')
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.savedFilterNameInList).contains(existingFilterTitle).parent().should('be.visible').realHover('mouse')   //.realHover('mouse', { force: true }) //.invoke('mouseover', { force: true })    //.realHover('mouse')
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.contextMenuIconOnSavedFilter).first().should('be.visible').click()
        cy.get(canvasPageElements.menuTextLabelOnSavedFilter).contains('Rename').should('be.visible').click()
        cy.get(canvasPageElements.filterNameTextFiledOnPopup).should('be.visible').click().clear().type(updatedTitle)
        cy.get(canvasPageElements.filterSaveButtonOnPopup).should('be.visible').click()
        cy.get(canvasPageElements.savedFilterNameInList).contains(updatedTitle).should('be.visible')
        cy.get(canvasPageElements.savedFilterNameInList).first().type('{esc}')
        cy.get(canvasPageElements.filterBtn).should('be.visible').click()
        cy.get(canvasPageElements.filterLable).should('be.visible').should('have.text', updatedTitle)
        cy.wait(e2e.pageLoadTimeSmall)
        cy.log('Saved filter rename successfully.')
    }

    duplicateTheFilter(filterTitle) {
        let dulicateFilterTitle = filterTitle + ' (copy)'
        cy.log('Duplicating the already saved filter')
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.savedFilterNameInList).contains(filterTitle).parent().should('be.visible').realHover('mouse')
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.contextMenuIconOnSavedFilter).should('be.visible').click()
        cy.get(canvasPageElements.menuTextLabelOnSavedFilter).contains('Duplicate').should('be.visible').click()
        // Assertion
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.savedFilterNameInList).contains(dulicateFilterTitle).should('be.visible')
        // cy.get(canvasPageElements.savedFilterNameInList).first().type('{esc}')
        cy.log('Saved filter duplicated successfully')
    }

    deleteFilter(filterTitle) {
        cy.log('Deleting the saved filter')
        cy.get(canvasPageElements.savedFilterNameInList).contains(filterTitle).parent().should('be.visible').realHover('mouse')
        cy.wait(1000)
        cy.get(canvasPageElements.contextMenuIconOnSavedFilter).last().should('be.visible').click()
        cy.wait(e2e.pageLoadTimeSmall)
        cy.get(canvasPageElements.menuTextLabelOnSavedFilter).contains('Delete').should('be.visible').wait(1000).click()
        cy.log('Verifying YES button ACK functioning')
        cy.get(canvasPageElements.confirmationButtonOnDeleteFilter).contains('Yes').should('be.visible').wait(1000).click()
        cy.log('Verifying saved filter removed and new filter option get appeared')
        cy.wait(e2e.pageLoadTimeSmall)
        cy.log('Filter deleted successfully')
    }

    giveAccessToPaste() {
        cy.wait(e2e.pageLoadTimeSmall)
        if (Cypress.browser.name !== 'electron') {

            cy.wrap(Cypress.automation('remote:debugger:protocol', {
                command: 'Browser.grantPermissions',
                params: {
                    permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'],
                    origin: window.location.origin,
                }
            }))
            cy.window().its('navigator.permissions')
                .invoke('query', { name: 'clipboard-read' })
                .its('state').then(cy.log)
            cy.wait(e2e.pageLoadTimeSmall)
        }
    }

    verifyRowsInTableByFilterActions(nodeStartMilestone, nodeG0A1, nodeGrpConverted, nodeTestAct, nodeABC, nodeXYZ, nodeGroup1, nodeG1B2, nodeEndMilestone) {
        cy.log('Matching results on the table')
        cy.get('[col-id="name"]').contains('Start Milestone').should(nodeStartMilestone)
        cy.get('[col-id="name"]').contains('G0A1').should(nodeG0A1)
        cy.get('[col-id="name"]').contains('GrpConverted').should(nodeGrpConverted)
        cy.get('[col-id="name"]').contains('TestAct').should(nodeTestAct)
        cy.get('[col-id="name"]').contains('ABC').should(nodeABC)
        cy.get('[col-id="name"]').contains('XYZ').should(nodeXYZ)
        cy.get('[col-id="name"]').contains('Group1').should(nodeGroup1)
        cy.get('[col-id="name"]').contains('G1B2').should(nodeG1B2)
        cy.get('[col-id="name"]').contains('End Milestone').should(nodeEndMilestone)
    }

    verifyNodesOnGanttFilterActions(startMilestoneVisibility, activityG0A1Visibility, activityG1B2Visibility, group1Visibility, groupConvertedVisibility, activityABCVisibility, activityXYZVisibility, testActivityVisibility, endMilestoneVisibility) {
        cy.wait(e2e.pageLoadTimeSmall)
        if (startMilestoneVisibility === 'be.visible') {
            cy.get('.milestoneName.elementNameWrapper').contains('Start Milestone').should(startMilestoneVisibility)
        }
        if (activityG0A1Visibility === 'be.visible') {
            cy.get('.taskName.elementNameWrapper').contains('G0A1').should(activityG0A1Visibility)
        }
        if (activityG1B2Visibility === 'be.visible') {
            cy.get('.taskName.elementNameWrapper').contains('G1B2').should(activityG1B2Visibility)
        }
        if (group1Visibility === 'be.visible') {
            cy.get('.groupName.elementNameWrapper').contains('Group1').should(group1Visibility)
        }
        if (groupConvertedVisibility === 'be.visible') {
            cy.get('.groupName.elementNameWrapper').contains('GrpConverted').should(groupConvertedVisibility)
        }
        if (activityABCVisibility === 'be.visible') {
            cy.get('.taskName.elementNameWrapper').contains('ABC').should(activityABCVisibility)
        }
        if (activityXYZVisibility === 'be.visible') {
            cy.get('.taskName.elementNameWrapper').contains('XYZ').should(activityXYZVisibility)
        }
        if (testActivityVisibility === 'be.visible') {
            cy.get('.taskName.elementNameWrapper').contains('TestAct').should(testActivityVisibility)
        }
        if (endMilestoneVisibility === 'be.visible') {
            cy.get('.milestoneName.elementNameWrapper').contains('End Milestone').should(endMilestoneVisibility)
        }
    }
}
export const canvasPageObject = new CreateCanvas();

