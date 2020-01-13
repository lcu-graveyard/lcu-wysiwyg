import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuService } from './services/lcu.service';
import { LcuComponent } from './controls/lcu/lcu.component';
import { LcuDirective } from './directives/lcu.directive';
import { LcuWysiwygGrapesjsElementComponent } from './elements/grapesjs/grapesjs.component';

@NgModule({
  declarations: [LcuComponent, LcuDirective, LcuWysiwygGrapesjsElementComponent],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [LcuComponent, LcuDirective, LcuWysiwygGrapesjsElementComponent],
  entryComponents: [LcuWysiwygGrapesjsElementComponent]
})
export class LcuWysiwygModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LcuWysiwygModule,
      providers: [LcuService]
    };
  }
}
