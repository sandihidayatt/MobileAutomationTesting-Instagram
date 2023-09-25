class AccountPage {
    get buttonFollow(){ return $('id:profile_header_follow_button') } //selector button follow
    get buttonSendMessage(){ return $('id:button_container') } //selector kirim pesan
    get titleAccount(){ return $('id:action_bar_title') } //selector nama title acount
    get statusFollow(){ return $('id:profile_header_follow_button') } //status follow
    get buttonSendMessage(){ return $('id:button_container') } //selector button send message

    async clickFollow(){ //fungsi click button follow
        await this.buttonFollow.click()
    }
    async clickSendMessage(){ //fungsi click button send message
        await this.buttonSendMessage.click()
    }
    async clickSendMessage(){
        await this.buttonSendMessage.click()
    }
}
module.exports = new AccountPage()