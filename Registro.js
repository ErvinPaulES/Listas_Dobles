export default class Registro{
    constructor(){
        this._inicio=null;
    }
    get inicio(){
        return this._inicio;
      }
  
      _encontrarArticulo(nombre, codigo){
          let result = -1;
          let index=1;
          let articulo = this._inicio;
          while(articulo!==null){
            if(articulo.nombre === nombre||articulo.codigo === codigo){
              result=index;
            }
            index++;
            articulo=articulo.siguiente;
          }
          return result;
        }
  
      agregarArticulo(articulo){
          console.log(this);
          
          if(this._inicio===null){
            this._inicio=articulo;
          }else{
            if(this._encontrarArticulo(articulo.nombre, articulo.codigo) >= 0){
              console.log(this._encontrarArticulo(articulo.nombre, articulo.codigo));
              
              return false;
            }
                this._agregarnuevo(articulo, this._inicio);
          }
          return true;  
                
      }
      _agregarnuevo(nuevo, ultimo){
        if(nuevo.codigo>ultimo.codigo){
          if(ultimo.siguiente===null){
            ultimo.siguiente=nuevo;
            nuevo.anterior=ultimo;
          }else{
            this._agregarnuevo(nuevo, ultimo.siguiente)
          }
        }else{
          nuevo.siguiente=ultimo;
          ultimo.anterior.siguiente=nuevo;
        }
        
      }
  
      _borrarArticulo(row, articulo){
          let buscador = this._inicio;
          if(articulo.codigo===buscador.codigo){
            this._inicio=this._inicio.siguiente;
            this._inicio.anterior=null;
            console.log(buscador);
            console.log(articulo);
          }else{
          while(buscador !== null && buscador.siguiente!==null){
            console.log(buscador.siguiente);
            console.log(articulo);
            if(buscador.siguiente.codigo===articulo.codigo){
              
              buscador.siguiente=buscador.siguiente.siguiente;
              if(buscador.siguiente !== null)
                buscador.siguiente.anterior=buscador;
            }
            buscador = buscador.siguiente;
          }
        }
          row.remove();
      }
}