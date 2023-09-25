const HomePage = require('../pageobjects/home.page')
const SearchPage = require('../pageobjects/search.page')
const DataTest = require('../../datatest/instagram.json')

describe('Failed follow accounts because unregistered account', () => {
    it('Click menu search', async () => {
        await HomePage.clickTabSearch() //click menu search   
    })
    it('Input account username', async () => {
        await SearchPage.inputSearch(DataTest.unregistered_username) // input account username 
    })
    it('Verify search results', async () => {
        await SearchPage.avatarAccount.waitForDisplayed({ reverse: true }) //cek ketika nama akun tidak ditemukan
        await SearchPage.usernameAccount.waitForDisplayed({ reverse: true }) //cek ketika avatar akun tidak ditemukan
    })
})

