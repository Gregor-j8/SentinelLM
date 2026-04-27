export type ScanStatus = "pending" | "running" | "complete" | "failed";
export type Severity = "critical" | "high" | "medium" | "low" | "info";
export type TriageStatus = "acknowledged" | "remediated" | "false_positive" | null;
export type Grade = "A" | "B" | "C" | "D" | "F";

export interface Target {
  id: string;
  name: string;
  provider: "azure" | "openai" | "custom";
  endpoint_url: string;
  deployment_name: string;
  created_at: string;
}

export interface Scan {
  id: string;
  target_id: string;
  status: ScanStatus;
  attacks_selected: string[];
  overall_score: number | null;
  grade: Grade | null;
  started_at: string | null;
  completed_at: string | null;
  created_at: string;
}

export interface Finding {
  id: string;
  scan_id: string;
  attack_result_id: string;
  prompt: string;
  response: string;
  severity: Severity;
  category: string;
  passed: boolean;
  triage_status: TriageStatus;
  false_positive: boolean;
  notes: string;
  created_at: string;
}

export interface AttackResult {
  id: string;
  scan_id: string;
  attack_id: string;
  attack_name: string;
  category: string;
  status: ScanStatus;
  score: number | null;
  total: number | null;
  failures: number | null;
}

// WebSocket event shapes
export type WsEvent =
  | { event: "attack_started"; attack_id: string }
  | { event: "finding"; severity: Severity; passed: boolean; prompt: string; response: string }
  | { event: "attack_complete"; attack_id: string; score: number }
  | { event: "scan_complete"; overall_score: number; grade: Grade }
  | { event: "scan_failed"; reason: string };
