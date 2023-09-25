class SearchPage {
    get textfieldSearch(){ return $('id:action_bar_search_edit_text') } //selector textfield search
    get usernameAccount(){ return $('id:row_search_user_username') } //selector account hasil pencarian
    get avatarAccount(){ return $('id:row_search_avatar_in_ring') } //selector account hasil pencarian

    async inputSearch(username){ //fungsi input search
        await this.textfieldSearch.click()
        await this.textfieldSearch.setValue(username)
    }

    async clickUsernameAccount(){ //fungsi click account hasil pencarian
        await this.usernameAccount.click()
    }
}
module.exports = new SearchPage()