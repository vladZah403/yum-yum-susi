export default class Publisher{
    events = {}
    
    subscribe = (eventName, cBack) =>{
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }

        this.events[eventName].push(cBack);
    }

    publish = (eventName, data) =>{
      
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }

        this.events[eventName].forEach(func => func(data));

        console.log(this, eventName, data)
    }

    get methods(){
        console.log(this);
        return{
            subscribe : this.subscribe,
            publish : this.publish
        }
    }
}