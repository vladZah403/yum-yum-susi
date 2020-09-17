import ModelCart from "./ModelCart.js";
import ViewCart from "./ViewCart.js";

export default class ControllerCart{
    constructor({subscribe, publish}){

        this.model = new ModelCart()
        this.view = new ViewCart(this.listeners)

        this.subscribe = subscribe;
        this.publish = publish;
        this.subscribe('ADD_TO_CART', this.handleAddToCart);
        this.subscribe('SET_PRODUCTS_TO_CART', this.handleGetProducts);
    }

    handleAddToCart = (id) => {
        const count = this.model.addToCart(id);
        console.log(`add to cart id: ${id}`)
        this.view.renderCartCaunt(count)
    }

    handleOpenModal =()=>{
        const ids = this.model.getCartProdId();
        this.publish('GET_PRODUCTS_TO_CART', ids)
        
    }
    handleGetProducts = (products) =>{
        const prods = this.model.updeteProds(products)
        this.view.renderModal(prods);
    }

    handleCloseModal = () =>{
       this.view.closeModal()
    }
    handleClearCard = () =>{
        this.view.closeModal()
        this.model.clearCart()
        this.view.renderCartCaunt('')
    }
    handleBuyCart = () =>{
        this.publish('BUY', this.model.getCartProducts())

    }

    get listeners(){
        return{
            open: this.handleOpenModal,
            close: this.handleCloseModal,
            clear: this.handleClearCard,
            buy: this.handleBuyCart
        }
    }
}