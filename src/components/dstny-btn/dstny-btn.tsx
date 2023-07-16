import { Component, Element, ComponentInterface, Event, EventEmitter, h, Prop, Method } from '@stencil/core';
import classNames from 'classnames';
import { Color } from '../../interface';
import { ButtonInterface } from '../../utils/element-interface';

@Component({
  tag: 'dstny-button',
  styleUrl: 'dstny-btn.css',
  shadow: true,
})
export class DstnyButton  implements ComponentInterface, ButtonInterface{
  @Element() el!: HTMLElement;
  @Event() buttonClicked: EventEmitter;
  /**
  * The type of the button.
  */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';
  @Prop() label: string;
  @Prop() size?: 'small' | 'large' = 'large';
  @Prop() variant?: Color;
  @Prop() backgroundColor?: 'primary' | 'light' | 'dark' = 'light';
  @Prop() disabled?: boolean = false;
  /**
   * Emitted when the button has focus.
   */
  @Event() dstnyFocus!: EventEmitter<void>;

  /**
   * Emitted when the button loses focus.
   */
  @Event() dstnyBlur!: EventEmitter<void>;

  /**
   * Function to focus the Dstny Button.
   */
  @Method()
  async setFocus() {
    this.el.focus();
  }
  private get hasIconOnly() {
    return !!this.el.querySelector('dstny-icon[slot="icon-only"]');
  }

  private get hasIconStart() {
    return !!this.el.querySelector('dstny-icon[slot="start"]');
  }

  private get hasIconEnd() {
    return !!this.el.querySelector('dstny-icon[slot="end"]');
  }

  private onFocus = () => {
    this.dstnyFocus.emit();
  };

  private onBlur = () => {
    this.dstnyBlur.emit();
  };

  handleClick(event: UIEvent) {
    this.buttonClicked.emit(event);
  }

  render() {  
    return <button type={this.type} class={this.getCssClassMap()} onClick={this.handleClick.bind(this)} onFocus={this.onFocus} onBlur={this.onBlur}>
    <span class="button-inner">
        <slot name="icon-only"></slot>
        <slot name="start"></slot>
        {this.label}
        <slot name="end"></slot>
      </span>
    </button>;
  }

  getCssClassMap() {
    return classNames(
      'button',
      this.size && `button--size-${this.size}`,
      this.variant && `button--variant-${this.variant}`,
      this.disabled && `button--disabled`,
      this.hasIconOnly && `button-has-icon-only`,
      this.hasIconStart && `button-has-icon-start`,
      this.hasIconEnd && `button-has-icon-end`
    );
  }

}

