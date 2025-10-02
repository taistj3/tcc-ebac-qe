import { expect, $$ } from '@wdio/globals'
import CatalogoPage from '../pageObjects/catalogo.page.js'

describe('Funcionalidade catálogo de produtos', () => {

    it('Deve buscar produto por nome', async () => {
        await CatalogoPage.abrirCatalogo()
        await CatalogoPage.buscarProduto('bag pandora')
        const produto = await CatalogoPage.produtoPorNome('bag pandora')
        expect(await (await produto).isDisplayed()).toBe(true)
        // const browse = await $('android=new UiSelector().text("Browse")');
        // await browse.click();
        // const searchInput = await $('id=searchInput');
        // await searchInput.setValue('bag pandora');
        // const produto = await $('android=new UiSelector().text("bag pandora")');
        // expect(await (await produto)).toBeDisplayed();
    })

    it('Deve exibir detalhes do produto ao clicar', async () => {
        await CatalogoPage.abrirCatalogo()
        await CatalogoPage.produtoPorIndexClick(0)
        const produtoDetalhe = await $('android=new UiSelector().text("Additional Details")').scrollIntoView();
        expect(await (await produtoDetalhe)).toBeDisplayed();

        // await produto.waitForDisplayed({timeout:10000});
        // await produto.click();
        // expect(await ProdutoPage.validarDetalheVisivel()).toBe(true)

        // const browse = await $('android=new UiSelector().text("Browse")');
        // await browse.click();
        // const produto = await $('android=new UiSelector().className("android.widget.ImageView").instance(0)');
        // await produto.waitForDisplayed({timeout:10000});
        // await produto.click();
        // const produtoDetalhe = await $('android=new UiSelector().text("Additional Details")');
        // expect(await (await produtoDetalhe)).toBeDisplayed();

         // const produto = await CatalogoPage.produtoPorIndex(0)
        // await produto.click()
    })
})