export const carrinhoSelectors = {
produto: '.product-block',
tamanho: (tamanho) => `.button-variable-item.button-variable-item-${tamanho}`,
cor: (cor) =>  `.button-variable-item-${cor}`,
quantidade: '.input-text',
btnAddCarrinho: '.single_add_to_cart_button',
resultado: '.woocommerce-message'
}