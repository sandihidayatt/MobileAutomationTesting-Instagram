class MessagePage {
    get textfieldMessage(){ return $('id:row_thread_composer_edittext') } //selector textfiend message
    get buttonSendMessage(){ return $('id:row_thread_composer_button_send') } //selector button send message
    get textMessage(){ return $('id:direct_command_picker_container') } //selector isi pesan
    
    async inputMessage(message){
        await this.textfieldMessage.click()
        await this.textfieldMessage.setValue(message)
        // await this.buttonSendMessage.click() 
    }
    async clickSendMessage(){
        await this.buttonSendMessage.click() //fungsi click send message
    }
}
module.exports = new MessagePage()