/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@telepo/dstny-ds';

import { DstnyButton as IDstnyButton } from '@telepo/dstny-ds/dist/types/components/dstny-btn/dstny-btn';
export declare interface DstnyButton extends Components.DstnyButton {}
@ProxyCmp({
  inputs: ['backgroundColor', 'disabled', 'label', 'size', 'type', 'variant'],
  methods: ['setFocus']
})
@Component({
  selector: 'dstny-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['backgroundColor', 'disabled', 'label', 'size', 'type', 'variant'],
  outputs: ['buttonClicked', 'dstnyFocus', 'dstnyBlur']
})
export class DstnyButton {
  /**  */
  buttonClicked!: IDstnyButton['buttonClicked'];
  /** Emitted when the button has focus. */
  dstnyFocus!: IDstnyButton['dstnyFocus'];
  /** Emitted when the button loses focus. */
  dstnyBlur!: IDstnyButton['dstnyBlur'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['buttonClicked', 'dstnyFocus', 'dstnyBlur']);
  }
}
