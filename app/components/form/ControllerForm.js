import ModelForm from "./ModelForm.js";
import ViewForm from "./ViewForm.js";

export default class ControllerForm{
    constructor({ subscribe, publish}){
        this.model= new ModelForm()
        this.view = new ViewForm(this.hendleOrder)

        this.subscribe = subscribe
        this.publish = publish;

        this.subscribe('BUY', this.hendleBay);
    }

    hendleBay = (products) => {
        console.log('buy products', products)
        this.model.setProductCart(products)
        this.view.renderForm();
    }
    hendleOrder = (ev) =>{
        const userData = this.view.getData(ev);
        this.model.sendOrder(userData)
    }
}