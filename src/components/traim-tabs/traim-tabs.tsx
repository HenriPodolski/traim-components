import { Component, h, Element, Event, State, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'traim-tabs',
  styleUrl: 'traim-tabs.scss',
  shadow: true
})
export class TraimTabs {
  @Element()
  elem: HTMLElement;

  @State()
  tabs: any[];

  @Event({ eventName: 'changeTab' })
  onChange: EventEmitter;

  componentWillLoad() {
    this.tabs = Array.from(this.elem.querySelectorAll('traim-tab'));
  }

  @Method()
  async currentTab() {
    return this.tabs.findIndex((tab) => tab.open);
  }

  @Method()
  async openTab(tabIndex: number) {
    if (!this.tabs[tabIndex].disabled) {
      this.tabs = this.tabs.map((tab) => {
        tab.open = false;
        return tab;
      });
      this.tabs[tabIndex].open = true;
      this.onChange.emit({ idx: tabIndex });
    }
  }

  render() {
    return (
      <div class="tabs">
        <div role="tablist" class="tabs__tablist">
          <div class="tabs__nav">
            <div class="tabs__headings">
              {this.tabs.map((tab, i: number) => {
                const openClass = tab.open ? 'is-active' : '';

                return (
                  <button
                    role="tab"
                    disabled={tab.disabled}
                    class={`tabs__heading ${openClass}`}
                    onClick={() => this.openTab(i)}>
                    {tab.header}
                  </button>
                );
              })}
            </div>
          </div>
          <slot />
        </div>
      </div>
    );
  }
}
