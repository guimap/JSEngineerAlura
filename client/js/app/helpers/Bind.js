class Bind {
    constructor(classe, args, view, ...props){
        let instance = ProxyFactory.create(classe,args,props, (model) => {
            view.update(model);
        });
        view.update(instance);
        return instance;
    }
}