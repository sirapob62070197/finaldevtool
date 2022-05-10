describe('landing', () => {
    beforeEach(() => {
        cy.visit('/landing')
    })
    it("เช็คtitle", () => {
        // test
        cy.contains('เชื่อมต่อ ช่วยเหลือ เพื่อคนไทยสู้ภัยโควิด Connecting All Thais in the Fight Agianst COVID').should('exist')
    })
    it("เช็คbutton", () => {
        // test
        cy.contains('ลงทะเบียนจองคิว').should('exist')
    })
})