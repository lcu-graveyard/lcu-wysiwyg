import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuWysiwygGrapesjsElementState {}

export class LcuWysiwygGrapesjsContext extends LCUElementContext<LcuWysiwygGrapesjsElementState> {}

export const SELECTOR_LCU_WYSIWYG_GRAPESJS_ELEMENT = 'lcu-wysiwyg-grapesjs-element';

declare var grapesjs: any;

@Component({
  selector: SELECTOR_LCU_WYSIWYG_GRAPESJS_ELEMENT,
  templateUrl: './grapesjs.component.html',
  styleUrls: ['./grapesjs.component.scss']
})
export class LcuWysiwygGrapesjsElementComponent extends LcuElementComponent<LcuWysiwygGrapesjsContext> implements OnInit {
  //  Fields

  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();

    grapesjs.init({
      container : '#gjs',
      components: '<div class="txt-red">Hello world!</div>',
      style: '.txt-red{color: red}',
    });
  }

  //  API Methods

  //  Helpers
}
