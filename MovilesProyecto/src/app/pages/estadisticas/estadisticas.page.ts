import { EstadisticaService } from './../../services/estadistica.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { FormService } from '../../services/form.service'
import  {Type} from "../../interface/form.interface"
import { CategoriaService } from '../../services/categoria.service'
import { SubcategoryService } from '../../services/subcategory.service'

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {

  public formulario : Type[]
  public categorias
  public subcategorias
  public doughnutChartLabels: Label[] = ['Formularios', 'Categorias', 'Subcategorias', 'Sexo'];
  public doughnutChartData: MultiDataSet = [
    [1, 1 , 1 , 1]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private form : FormService, private categoria : CategoriaService, 
    private subCategoria : SubcategoryService, private estadis: EstadisticaService) {

    this.form.getForms().subscribe(res => {
      this.formulario = res 
       let indexForm = this.formulario.length
        this.doughnutChartData[0][0] = this.formulario.length
     })

     this.categoria.getCategories().subscribe(res => {
       this.categorias = res
       let indexCategorias = this.categorias.length
       this.doughnutChartData[0][1] = indexCategorias
     })

     this.subCategoria.getSubCategories().subscribe(res => {
      this.subcategorias = res
      let indexSubCategorias = this.subcategorias.length
      this.doughnutChartData[0][2] = indexSubCategorias
     })
   }

  ngOnInit() {
   
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }



  

}
