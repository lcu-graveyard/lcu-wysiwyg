import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FathymSharedModule, LCUServiceSettings } from '@lcu/common';
import { environment } from '../environments/environment';
import { LcuWysiwygModule, LcuWysiwygGrapesjsElementComponent, SELECTOR_LCU_WYSIWYG_GRAPESJS_ELEMENT } from '@fathym-it/lcu-wysiwyg-common';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    LcuWysiwygModule.forRoot()
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  exports: [LcuWysiwygModule]
})
export class AppModule implements DoBootstrap {
	constructor(protected injector: Injector) {}

	public ngDoBootstrap() {
		const grapesjs = createCustomElement(LcuWysiwygGrapesjsElementComponent, { injector: this.injector });

		customElements.define(SELECTOR_LCU_WYSIWYG_GRAPESJS_ELEMENT, grapesjs);
	}
}
