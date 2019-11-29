import { Component, h, Element, Event, State, EventEmitter, Method, Listen } from '@stencil/core';

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

  @Listen('changeTabHeader')
  changeTabHandler() {
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
          <nav class="tabs__nav">
            <ul class="tabs__headings">
              {this.tabs.map((tab, i: number) => {
                const openClass = tab.open ? 'is-active' : '';

                return (
                  <li class="tabs__tab">
                    <button
                      role="tab"
                      disabled={tab.disabled}
                      class={`tabs__heading ${openClass}`}
                      onClick={() => this.openTab(i)}>
                      {tab.header}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <slot />
        </div>
      </div>
    );
  }
}
