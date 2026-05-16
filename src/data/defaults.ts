// src/data/defaults.ts
export interface RetirementInputs {
  ca: number;
  p1s: number;
  p2s: number;
  filingStatus: 'MFJ' | 'Single';
  bb: number;
  bc: number;
  cg: number;
  cnp: number;
  ssOn: boolean;
  ssAge: number;
  ssM: number;
  ssConf: number;
  disc: number;
  agS: number;
  agE: number;
  gS: number;
  gE: number;
  r2: number;
  taxR: number;
  mcTargetAge: number;
  mcN: number;
  p1t: number;
  p1g: number;
  p1ro: number;
  t1t: number;
  t1e: number;
  t2t: number;
  t2e: number;
  t3t: number;
  hcPct: number;
  // Add more fields as needed
}

export const DEFAULT_INPUTS: RetirementInputs = {
  ca: 55,
  p1s: 66,
  p2s: 76,
  filingStatus: 'MFJ',
  bb: 1_300_000,
  bc: 56_000,
  cg: 3,
  cnp: 180_000,
  ssOn: true,
  ssAge: 67,
  ssM: 2800,
  ssConf: 80,
  disc: 2.5,
  agS: 10,
  agE: 8,
  gS: 7,
  gE: 4.5,
  r2: 4.5,
  taxR: 3.0,
  mcTargetAge: 99,
  mcN: 1000,
  p1t: 180_000,
  p1g: 90_000,
  p1ro: 0,
  t1t: 145_000,
  t1e: 83,
  t2t: 105_000,
  t2e: 92,
  t3t: 110_000,
  hcPct: 30,
};
