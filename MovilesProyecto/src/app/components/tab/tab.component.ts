import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {

  data: Array<Object> = [];

  constructor() { }

  ngOnInit() {

    if(window.location.pathname == "/admin/tabs/formulario") {
      this.data.push(
        {
          tab: "formulario",
          icon: "copy-outline",
          label: "Formularios"
        },
        {
          tab: "estadisticas",
          icon: "stats-chart",
          label: "Estadisticas"
        },
        {
          tab: "crear",
          icon: "create-outline",
          label: "Crear"
        }
      )
    }else {
      this.data.push(
      {
        tab: "perfil",
        icon: "person-outline",
        label: "Perfil"
      },
      {
        tab: "estadisticas",
        icon: "apps-outline",
        label: "Formularios"
      }
      )
    }

   

}
}
