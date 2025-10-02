import {$} from '@wdio/globals'

class CatalogoPage {
    get browseButton() {
        return $('android=new UiSelector().text("Browse")')
    }

    get searchInput() {
        return $('id=searchInput')
    }

    produtoPorNome(nome) {
        return $(`android=new UiSelector().text("${nome}")`)
    }

    produtoPorIndex(index = 0) {
        return $(`android=new UiSelector().className("android.widget.ImageView").instance(${index})`)
    }

    async abrirCatalogo() {
        await this.browseButton.waitForDisplayed({ timeout: 10000 })
        await this.browseButton.click()
    }

    async buscarProduto(nome) {
        await this.searchInput.waitForDisplayed({ timeout: 10000 })
        await this.searchInput.setValue(nome)
    }

    async produtoPorIndexClick(index = 0) {
        const produto = await this.produtoPorIndex(index)
        await produto.waitForDisplayed({ timeout: 10000 })
        await produto.click()
    }
}
export default new CatalogoPage()