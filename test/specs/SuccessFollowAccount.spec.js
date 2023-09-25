const { expect } = require('@wdio/globals')
const { delay } = require("../../helpers/delayHelper")
const HomePage = require('../pageobjects/home.page')
const SearchPage = require('../pageobjects/search.page')
const AccountPage = require('../pageobjects/account.page')
const DataTest = require('../../datatest/instagram.json')

describe('Success follow account', () => {
    it('Click menu search', async () => {
        await HomePage.clickTabSearch() //click menu search   
    })
    it('Input account username', async () => {
        await SearchPage.inputSearch(DataTest.username) // input textfield search
        await SearchPage.clickUsernameAccount() // click account
    })
    it('Click button follow account', async () => {
        await AccountPage.clickFollow() // click button follow   
    })
    it('Verify account and status follow', async () => {
        await expect(AccountPage.titleAccount).toHaveText(DataTest.username) //check nama account
        await expect(AccountPage.statusFollow).toHaveText('Mengikuti') //check status follow
    })
})
        
