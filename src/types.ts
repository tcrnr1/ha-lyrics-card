export interface LyricsCardConfig {
  type: string;
  entity?: string;
}

export interface HomeAssistant {
  states: Record<string, HomeAssistantState>;
  callService: (
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>
  ) => Promise<void>;
}

export interface HomeAssistantState {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
}
