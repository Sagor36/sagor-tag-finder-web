
export interface TagResult {
  tags: string[];
  recommended: string[];
  topic: string;
}

export interface AppState {
  loading: boolean;
  error: string | null;
  result: TagResult | null;
}
