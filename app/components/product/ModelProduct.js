export default class ModelProduct{
    cellHaders =[
        'id',
        'Title',
        'Description',
        'Prise',
        'Photo',
        'Weight',
        

        ];
        link = 'https://spreadsheets.google.com/feeds/cells/1lW3KL0zJgyQPNUWOT_FR3zL9VkT99tEDO1O2KzcmB3w/1/public/full?alt=json';
        data = [];
    constructor(){
        this.rowSize = this.cellHaders.length
    }

    loadArticles(){
        return fetch(this.link).then(r=>r.json()).then(d=>{
            const preperadData = d.feed.entry.map(cell => cell.content.$t).slice(this.rowSize)

                preperadData.forEach((element, i) => {
                const id = Math.floor(i / this.rowSize);
                const name = i % this.rowSize
                if(!this.data[id]){
                    this.data[id] = {};
                }
                this.data[id][this.cellHaders[name]] = element;
            });;
            return this.data
            
        });
        localStorege.setItem('products', JSON.stringify(this.data))
    }

   getProductsByIds(ids){
       console.log()
       return this.data.filter(product => ids.includes(product.id))
   }

    

    
 } 
 