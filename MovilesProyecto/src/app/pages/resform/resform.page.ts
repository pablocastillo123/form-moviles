import { Validators } from '@angular/forms';
import { FormService } from './../../services/form.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Type } from '../../interface/form.interface';
import { User } from  '../../shared/user.class';
import { UtilToolService } from '../../services/utiltool.service'

@Component({
  selector: 'app-resform',
  templateUrl: './resform.page.html',
  styleUrls: ['./resform.page.scss'],
})
export class ResformPage implements OnInit {
  user = new User()

  form:Type = {
    id: '',
  	formulario: '',
  	nombre_categoria: '',
    nombre_input:[],
    tipo_input:[]
  }

  
  input_res = [];
  form_id = '';

  constructor(
  	private route: ActivatedRoute,private nav:NavController,
  	private formService: FormService, private utilTool:UtilToolService
  ) { }

  ngOnInit() {
  	this.form_id = this.route.snapshot.params['id'];
    if(this.form_id){
      this.formService.getForm(this.form_id).subscribe(res => {
        this.form = res;
        this.form.id = this.form_id;
        console.log(res)
      });
    }

    
  }

  sendForm(){
    let res_form_id = this.utilTool.generateId()
    let user_form_res = {
      id_form: this.form.id,
      id_res_form:res_form_id,
      formulario: this.form.formulario,
      nombre_categoria: this.form.nombre_categoria,
      nombre_input: this.form.nombre_input,
      input_value: this.input_res
    }

    console.log(user_form_res)

    const input_long = user_form_res.input_value.length;
    const nom_input_long = user_form_res.nombre_input.length;

    if(user_form_res.formulario === '' || user_form_res.nombre_categoria === '' ||
    nom_input_long == 0 || input_long == 0 || input_long < nom_input_long){
      
      this.utilTool.presentAlert('error','campos vacios','ok');
    }else{
      this.utilTool.loading(this.formService.sendForm(user_form_res,res_form_id))
    }
  }

}
