import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GranaPage } from './grana.page';

describe('GranaPage', () => {
  let component: GranaPage;
  let fixture: ComponentFixture<GranaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GranaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GranaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
