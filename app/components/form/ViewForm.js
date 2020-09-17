export default class ViewForm{
    modalWindow =document.querySelector('.modal_r');
    closeClass = 'close_r'
    constructor(handleOrder){
    this.handleOrder =handleOrder
    }
    renderForm(){
        this.modalWindow.innerHTML =`<div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
          </div>
          <form artion="#">
          <div class="modal-body">
             <label for="validationTooltip01">Emeil</label>
            <div class="input-group"> 
              <div class="input-group-prepend">
                <span class="input-group-text">@</span>
              </div>
              <input type="email" class="form-control rounded-right" required>
              <div class="invalid-feedback">
                Please choose a username.
              </div>
            </div>
            <label for="validationTooltip01">Имя и Фамилия</label>
        <input type="name" class="form-control" id="validationTooltip01"  required>
        <label for="validationTooltip01"> Номер телефона</label>
        <input type="tel" class="form-control" id="validationTooltip01" value="+380" required>
          </div>
          <div class="modal-footer">
            <button type="submi" class="btn btn-primary  ">Заказать</button>
          </form>
            </div>
        </div>
      </div>`

      this.modalWindow.classList.remove(this.closeClass);
    
        this.modalWindow.querySelector('form').addEventListener('submit', this.handleOrder)
    }
       
    getData(ev){
        ev.preventDefult();
        console.log(ev);
        const{email, name, tel}= ev.terget.elements
        return{
            email : email.value,
            name : name.value,
            tel : tel.value
        }
    }

    closeModal(){
        this.modalWindow.innerHTML = ''
        this.modalWindow.classList.add(this.closeClass);
    }
}