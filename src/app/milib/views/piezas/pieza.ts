import {View} from '../view';
import {Motor} from '../../engines/motor';
import {Text} from '../texts/text';
import {EventsAdmin} from '../../events/eventsadmin';
import {Imagen} from '../imagenes/imagen';

export class Pieza extends View {

private imgBack:Imagen=null;
private lblTexto:Text=null;

  constructor(vmotor:Motor,vX:number,vY:number,vW:number,vH:number,kappa:String){
    super(vmotor,vX,vY,vW,vH);
    this.imgBack=new Imagen(this.motor,0,0,this.w,this.h);
    this.motor.addViewToParentView(this,this.imgBack);
    if (kappa=="iz"){
      this.imgBack.setImg("./assets/fichaiz.png");
    } else {
      this.imgBack.setImg("./assets/fichadc.png");
    }
    this.lblTexto=new Text(this.motor,0,0,this.w,this.h);
    this.lblTexto.setTexto("Boton");
    this.motor.addViewToParentView(this,this.lblTexto);
  }

}
