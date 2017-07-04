class DataHelper {
    constructor(){
        throw new Error("DataHelper cannot be instanced");  
    }
    static textoParaData(texto) {
        const regex = /\d{4}-\d{2}-\d{2}/;
        if (!regex.test(texto)) throw new Error('Data fora do padrão, deve esta no formato aaaa-mm-dd');
        
        
        return new Date(...texto.split('-').map((item,index) => item - index % 2));
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}