import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LyricsCardConfig } from "./types";


@customElement("ha-lyrics-card-editor")
export class HaLyricsCardEditor extends LitElement {

  @state()
  private config?: LyricsCardConfig;


  static styles = css`

    .container {
      padding: 16px;
    }

  `;


  public setConfig(config: LyricsCardConfig): void {

    this.config = config;

  }


  protected render() {

    return html`

      <div class="container">

        <div>
          HA Lyrics Card
        </div>

        <div>
          Configuration editor coming soon...
        </div>

      </div>

    `;

  }

}
