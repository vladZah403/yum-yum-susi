export default class ViewCart{
    domCartCount = document.querySelector('.cart_count');
    modalWindow =document.querySelector('.modal_r');
    btnCart = document.querySelector('.cart');
    closeClass = 'close_r'

    constructor(listeners){
        this.btnCart.addEventListener('click',listeners.open )
        this.listeners =listeners
        
    }
    renderCartCaunt(count){
        this.domCartCount.innerText = count;
    }

    renderModal({products,Prise}){
        this.modalWindow.classList.remove(this.closeClass);
        const trs = products.map(this.renderProduct).join('')

        this.modalWindow.innerHTML=` <div class="modal-dialog ">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Корзина</h5>
            <button type="button" class="btn_modal_close close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-striped">
              
              <tbody>
                ${trs }
              
              </tbody>
            </table>
          </div> 
           <span class="sum  text-center mr-4">Сумма: <span class="modal_cart_sum"> ${Prise} &#8372</span></span>
          <div class="modal-footer">
            
            <button type="button" class="btn btn-secondary btn_modal_clear" data-dismiss="modal">Очистеть</button>
            <button type="button" class="btn btn-primary btn_modal_buy">Оформить заказ</button>
          </div>
        </div>
      </div>`

      this.addModalListeners()
    }

    addModalListeners(){
        const {close, clear, buy}= this.listeners;
        this.modalWindow.querySelector('.btn_modal_close').addEventListener('click',close)
        this.modalWindow.querySelector('.btn_modal_clear').addEventListener('click',clear)
        this.modalWindow.querySelector('.btn_modal_buy').addEventListener('click', buy)
    }


    renderProduct(prod,pid){
        const{Title, Prise, Count }= prod
        return` <tr>
        <th scope="row">${pid +1 }</th>
        <td>${Title}</td>
        <td>${Prise} &#8372</td>
        <td><input type="number" min="0" class="inp_product_cart" value="${Count || 0}"></td>
      </tr>`
    }
    closeModal(){
        this.modalWindow.classList.add(this.closeClass);
    }
}