import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfochamasComponent } from './infochamas.component';

describe('InfochamasComponent', () => {
  let component: InfochamasComponent;
  let fixture: ComponentFixture<InfochamasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfochamasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfochamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
