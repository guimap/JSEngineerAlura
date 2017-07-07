class ProxyFactory {
    static create(classe,args,props,action){
        args = args ? args : [];

        let model = new classe(...args);

        return new Proxy(model, {
            get:(target, prop, receiver)=>{
                if (props.includes(prop) && ProxyFactory._isFunction(target[prop])) {
                    return function(){
                        Reflect.apply(target[prop],target, arguments)
                        action(model)
                    }
                }

                return Reflect.get(target,prop,receiver);
            },
            set:(target,prop,value,receiver) =>{
                if(props.includes(prop)){
                    target[prop] = value
                    action(model)
                }
                return Reflect.set(target,prop,value, receiver);
            }
        })

    }

    static _isFunction(fn){
        return typeof(fn) === typeof(Function);
    }
}