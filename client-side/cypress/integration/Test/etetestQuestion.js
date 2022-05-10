describe('qusetion', () => {
    beforeEach(() => {
        cy.visit('/family/qusetion')
    })
    it("เช็คtitle", () => {
        // test
        cy.contains('1. การลงทะเบียนรับวัคซีนโควิด-19 ผ่านเอไอเอส').should('exist')
        cy.contains('2. หลังลงทะเบียนเรียบร้อยแล้ว').should('exist')
        cy.contains('3. วันนัดหมายรับวัคซีน').should('exist')
        cy.contains('4. ข้อควรรู้ทางการแพทย์ เกี่ยวกับการฉีดวัคซีน').should('exist')

    })
    it("เช็คbutton", () => {
        // test
        cy.contains('คำถามที่ พบบ่อย').should('exist')
    })
    it("เช็ครูป", () => {
        // test
        cy.contains('https://vaccineforthais.ais.th/Images/MicrosoftTeams-image.png').should('exist')
        cy.contains('https://m.ais.co.th/template/pages/faq/image/map_full.jpg').should('exist')
    })
})