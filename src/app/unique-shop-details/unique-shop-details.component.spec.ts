import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueShopDetailsComponent } from './unique-shop-details.component';

describe('UniqueShopDetailsComponent', () => {
  let component: UniqueShopDetailsComponent;
  let fixture: ComponentFixture<UniqueShopDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueShopDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueShopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
