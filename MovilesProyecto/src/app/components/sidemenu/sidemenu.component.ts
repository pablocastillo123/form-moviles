import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sidemenu",
  templateUrl: "./sidemenu.component.html",
  styleUrls: ["./sidemenu.component.scss"]
})
export class SidemenuComponent implements OnInit {

  data: Array<Object> = [];

  public disable: string = "false";

  constructor() {}

  ngOnInit() {
    console.log("side menu")
    if (window.location.pathname == "/admin" || window.location.pathname == "/categoria"
    || window.location.pathname == "/formulario" ) {
      this.data.push(
        {
          label: "Admin",
          icon: "person-circle-outline",
          router: "/admin"
        },
        {
          label: "Categoria",
          icon: "copy",
          router: "/categoria"
        },
        {
          label: "Formulario",
          icon: "clipboard",
          router: "/formulario"
        },
        {
          label: "Estadisticas",
          icon: "stats-chart",
          router: "/estadisticas"
        },
        {
          label: "Cerrar Sesion",
          icon: "log-out",
          router: "/login"
        }
      );
    }
    if (window.location.pathname == "/login") {
      this.disable = "true";
    }
    if (window.location.pathname == "/home") {
      this.data.push(
        {
          label: "Usuario",
          icon: "person",
          router: "/perfil"
        },
        {
          label: "Formulario",
          icon: "clipboard",
          router: "/home"
        },
        {
          label: "Cerrar Sesion",
          icon: "log-out",
          router: "/login"
        }
      );
    }
  }
}
