import { FormService } from './../../services/form.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NavController,LoadingController } from '@ionic/angular';
import { Type } from '../../interface/form.interface';
import { User } from  '../../shared/user.class';
import { UtilToolService } from '../../services/utiltool.service'
import { EstadisticaService } from 'src/app/services/estadistica.service';


@Component({
  selector: 'app-resform',
  templateUrl: './resform.page.html',
  styleUrls: ['./resform.page.scss'],
})
export class ResformPage implements OnInit {
  private user = new User();
  private input_res = [];
  private form_id = '';
  private data_estadis

  private form:Type = {
    id: '',
  	formulario: '',
  	nombre_categoria: '',
    nombre_input:[],
    tipo_input:[]
  }

  constructor(
  	private route: ActivatedRoute,private nav:NavController,
    private formService: FormService, private utilTool:UtilToolService,
    private loadingController:LoadingController,private router: Router,
    private estadis:EstadisticaService
  ) { }

  ngOnInit() {
  	this.initData()
  }

  async initData(){
    const loading = await this.loadingController.create({
      message : 'Loading.....'
    })
    await loading.present()

    this.form_id = this.route.snapshot.params['id'];
    if(this.form_id){
      this.formService.getForm(this.form_id).subscribe(res => {
        this.form = res;
        this.form.id = this.form_id;
      });
    }
    loading.dismiss();
  }

  sendForm(){
    let res_form_id = this.utilTool.generateId()
    let user_form_res = {
      id_form: this.form.id,
      id_res_form: res_form_id,
      formulario: this.form.formulario,
      nombre_categoria: this.form.nombre_categoria,
      nombre_input: this.form.nombre_input,
      input_value: this.input_res
    }

    const input_long = user_form_res.input_value.length;
    const nom_input_long = user_form_res.nombre_input.length;

    if(user_form_res.formulario === '' || user_form_res.nombre_categoria === '' ||
    nom_input_long == 0 || input_long == 0 || input_long < nom_input_long){
      
      this.utilTool.presentAlert('error','campos vacios','ok');
    }else{
      

      this.data_estadis =  this.estadis.getDataEstadisForm(this.form.id).subscribe( res =>{
        console.log(res)
        let data_estadis = {
          id_estadis: res.id_estadis,
          formulario: res.formulario,
          cont_form: res.cont_form
        }
        
        data_estadis.cont_form = data_estadis.cont_form + 1
        console.log(data_estadis)
        
        this.estadis.updateForm(data_estadis,this.form.id)



        return res;
      })


      this.formService.sendForm(user_form_res,res_form_id)
      this.utilTool.presentAlert('Mensage','Operacion Exitosa','ok');
      this.router.navigateByUrl('/user/tabs/home')
    }
  }

}
