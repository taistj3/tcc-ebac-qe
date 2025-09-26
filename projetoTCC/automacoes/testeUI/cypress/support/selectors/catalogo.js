export const catalogoSelectors = {
buscar: '.search',
btnBuscar: '.search > .tbay-search-form .form-ajax-search .button-group',
categoria: '.search > .tbay-search-form .form-ajax-search .select-category span',
escolher: (opcao) => `.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .select-category > .SumoSelect > .optWrapper > .options > :nth-child(${opcao})`,
}