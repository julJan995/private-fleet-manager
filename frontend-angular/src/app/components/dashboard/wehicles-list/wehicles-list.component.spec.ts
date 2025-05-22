import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WehiclesListComponent } from './wehicles-list.component';

describe('WehiclesListComponent', () => {
  let component: WehiclesListComponent;
  let fixture: ComponentFixture<WehiclesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WehiclesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WehiclesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
