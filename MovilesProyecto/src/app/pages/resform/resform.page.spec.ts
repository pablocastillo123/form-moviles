import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResformPage } from './resform.page';

describe('ResformPage', () => {
  let component: ResformPage;
  let fixture: ComponentFixture<ResformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
