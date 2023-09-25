class HomePage {
    get tabSearch(){ return $('id:search_tab') } //selector menu search

    async clickTabSearch(){
        await this.tabSearch.click() //fungsi click menu search
    }
}
module.exports = new HomePage()