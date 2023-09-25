const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')
const SearchPage = require('../pageobjects/search.page')
const AccountPage = require('../pageobjects/account.page')
const MessagePage = require('../pageobjects/message.page')
const DataTest = require('../../datatest/instagram.json')

describe('Success send message', () => {
    it('Click menu search', async () => {
        await HomePage.clickTabSearch() //click menu search   
    })
    it('Input account username', async () => {
        await SearchPage.inputSearch(DataTest.username) // input textfield search
        await SearchPage.clickUsernameAccount() // click account
    })
    it('Click button send message', async () => {
        await AccountPage.clickSendMessage() // click button send message  
    })
    it('Input message', async () => {
        await MessagePage.inputMessage(DataTest.message) // input message  
    })
    it('Click send', async () => {
        await MessagePage.clickSendMessage() // click send 
    })
    it('Verify success send message', async () => {
        // await expect(MessagePage.textMessage).toHaveValueContaining('Selamat Pagi kak, Mohon maaf mengganggu lagi coba mobile automation testing. Terima Kasih')
        await expect(MessagePage.textMessage).toBeDisplayed()
    })

})
        
