class NegociacaoController{
    constructor(){
        let _ = document.querySelector.bind(document);
        this._data = _("#data");
        this._quantidade = _("#quantidade");
        this._valor = _("#valor"); 
        this._listaNegociacoes = new ListaNegociacoes();
    }
    adiciona (event){
        event.preventDefault();
        
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        console.log(this._listaNegociacoes.negociacoes);


        this._limpaFormulario();

    }

    _criaNegociacao(){
        return new Negociacao(
            DataHelper.textoParaData(this._data.value),
            parseInt(this._quantidade.value),
            parseFloat(this._valor.value)
        );
    }

    _limpaFormulario(){
        this._data.value = "";
        this._quantidade = 0;
        this._valor = 0.0;

        this._data.focus();
    
    }
}