import { Component, EventEmitter, Event, h, Method, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'traim-toggle',
  styleUrl: 'traim-toggle.scss',
  shadow: true
})
export class TraimToggle {
  @Prop()
  toggled: boolean = false;

  @State()
  _toggled: boolean = false;

  @Event({ eventName: 'changed' })
  onChange: EventEmitter;

  componentDidLoad() {
    this._toggled = this.toggled;
  }

  @Method()
  async isToggled() {
    return this._toggled;
  }

  @Watch('toggled')
  toggle() {
    this._toggled = !this._toggled;
  }

  handleToggle(e) {
    e.preventDefault();
    this.toggle();
    this.onChange.emit(this._toggled);
  }

  render() {
    return (
      <label class="toggle" onClick={(e) => this.handleToggle(e)}>
        <input type="checkbox" aria-checked={this._toggled.toString()} checked={this._toggled} />
        <div class="toggle__track">
          <div class="toggle__handle" />
        </div>
        <slot />
      </label>
    );
  }
}
