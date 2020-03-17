import { Component, OnInit,Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { dataForm } from '../../shared/dataForm.interface';
import { FormService } from './../../services/form.service';
import { UtilToolService } from '../../services/utiltool.service'

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.scss'],
})

@NgModule({
	
})

export class CardformComponent implements OnInit {


  @Input() data_card:dataForm;
  @Input() state_button: boolean;
  
  constructor(private userform: FormService,private utilTool:UtilToolService) { }

  ngOnInit() {
  }

  delete(){
  	this.userform.removeForm(this.data_card.id);
  }

}
