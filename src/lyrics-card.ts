import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { HomeAssistant, LyricsCardConfig } from "./types";


@customElement("ha-lyrics-card")
export class HaLyricsCard extends LitElement {

  @property({ attribute: false })
  public hass?: HomeAssistant;

  private config?: LyricsCardConfig;


  static styles = css`

    ha-card {
      padding: 16px;
      text-align: center;
    }

    .title {
      font-size: 24px;
      font-weight: bold;
    }

    .subtitle {
      margin-top: 8px;
      opacity: 0.7;
    }

  `;


  public setConfig(config: LyricsCardConfig): void {

    if (!config.type) {
      throw new Error("Card type is required");
    }

    this.config = config;
  }


  public getCardSize(): number {

    return 3;

  }


  protected render() {

    return html`

      <ha-card>

        <div class="title">
          HA Lyrics Card
        </div>

        <div class="subtitle">
          Waiting for media player configuration
        </div>

      </ha-card>

    `;

  }


  public static getStubConfig(): LyricsCardConfig {

    return {
      type: "custom:ha-lyrics-card"
    };

  }

}
