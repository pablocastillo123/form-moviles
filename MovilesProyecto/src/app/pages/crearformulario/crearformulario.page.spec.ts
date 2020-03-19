import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearformularioPage } from './crearformulario.page';

describe('CrearformularioPage', () => {
  let component: CrearformularioPage;
  let fixture: ComponentFixture<CrearformularioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearformularioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearformularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
