const HomePage = require('../pageobjects/home.page')
const SearchPage = require('../pageobjects/search.page')
const DataTest = require('../../datatest/instagram.json')
const AccountPage = require('../pageobjects/account.page')

describe('Failed send message account was locked', () => {
    it('Click menu search', async () => {
        await HomePage.clickTabSearch() //click menu search   
    })
    it('Input account username', async () => {
        await SearchPage.inputSearch(DataTest.locked_username) // input account username 
        await SearchPage.clickUsernameAccount() // click account
    })
    it('Verify account locked', async () => {
        await AccountPage.buttonSendMessage.waitForDisplayed({ reverse: true }) //cek ketika button kirim pesan tidak ditemukan
    })
})

