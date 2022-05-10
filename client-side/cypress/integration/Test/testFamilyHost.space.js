describe('component test familypagehost', () => {
    beforeEach(() => {
        cy.visit('/family/detail')
    })
        it("เช็คชื่อเเฟมมิลี่", () => {
            // test
            cy.contains('Netflix').should('exist')
            cy.contains('Sia o cha').should('exist') 
    })
    it("เช็คtitle", () => {
        // test
        cy.contains('ราคา').should('exist')
        cy.contains('ราคา/คน').should('exist')
        cy.contains('จำนวนคนสูงสุด').should('exist') 
    })
    it("เช็คvalue", () => {
        // test
        cy.contains('419 บาท').should('exist')
        cy.contains('69.83 บาท').should('exist')
        cy.contains('6/6 คน').should('exist') 
    })
    it("เช็คbutton", () => {
        // test
        cy.contains('Edit').should('exist')
        cy.contains('History').should('exist')
    })
    it("เช็ค title_User", () => {
        // test
        cy.contains('MEMBER').should('exist')
        cy.contains('EMAIL').should('exist')
        cy.contains('PHONE').should('exist')
    })
    it("เช็ค title_User", () => {
        // test
        cy.contains('MEMBER').should('exist')
        cy.contains('EMAIL').should('exist')
        cy.contains('PHONE').should('exist')
    })
    it("เช็ค ชื่อ_User", () => {
        // test
        cy.contains('แพรไหม (HOST)').should('exist')
        cy.contains('อนุชา').should('exist')
        cy.contains('แพรไหม').should('exist')
        cy.contains('อนุชา').should('exist')
        cy.contains('แพรไหม').should('exist')
        cy.contains('อนุชา').should('exist')
    })
    it("เช็ค Email_User", () => {
        // test
        cy.contains('preamai@gmail.com').should('exist')
        cy.contains('anucha@gmail.com').should('exist')
        cy.contains('preamai@gmail.com').should('exist')
        cy.contains('anucha@gmail.com').should('exist')
        cy.contains('preamai@gmail.com').should('exist')
        cy.contains('anucha@gmail.com').should('exist')
    })
    it("เช็ค Email_User", () => {
        // test
        cy.contains('0123456789').should('exist')
        cy.contains('0896547321').should('exist')
        cy.contains('0123456789').should('exist')
        cy.contains('0896547321').should('exist')
        cy.contains('0123456789').should('exist')
        cy.contains('0896547321').should('exist')
    })


})