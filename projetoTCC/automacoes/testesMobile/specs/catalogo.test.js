import { expect, $$ } from '@wdio/globals'
import CatalogoPage from '../pageObjects/catalogo.page.js'

describe('Funcionalidade catálogo de produtos do aplicativo ebacShop', () => {

    it('Deve buscar produto por nome', async () => {
        await CatalogoPage.abrirCatalogo()
        await CatalogoPage.buscarProduto('bag pandora')
        const produto = await CatalogoPage.produtoPorNome('bag pandora')
        expect(await (await produto).isDisplayed()).toBe(true)
    })

    it('Deve exibir detalhes do produto ao clicar', async () => {
        await CatalogoPage.abrirCatalogo()
        await CatalogoPage.produtoPorIndexClick(0)
        const produtoDetalhe = await $('android=new UiSelector().text("Additional Details")').scrollIntoView();
        expect(await (await produtoDetalhe)).toBeDisplayed();
    })
})