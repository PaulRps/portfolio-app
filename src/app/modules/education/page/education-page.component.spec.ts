import {ComponentFixture, TestBed} from '@angular/core/testing'

import {EducationPageComponent} from './education-page.component'

describe('PageComponent', () => {
  let component: EducationPageComponent
  let fixture: ComponentFixture<EducationPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationPageComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
