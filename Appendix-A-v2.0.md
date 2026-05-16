# Appendix A v2.0 – Complete Default Values & Specifications

**Version:** 2.0  
**Date:** May 13, 2026  
**Baseline Persona:** Balanced Professional (Age 55, $1.3M balance, $180k net pay)  
**Status:** Locked

## How to Read
- **Default** = First-load value  
- All values are locked for the next build.

## 📅 Your Timeline
| Input Field           | HTML ID       | Default | Unit   | Notes |
|-----------------------|---------------|---------|--------|-------|
| Current age           | ca            | 55      | years  | Starting point |
| Phase 1 start age     | p1s           | 66      | years  | Semi-retirement |
| Phase 2 start age     | p2s           | 76      | years  | Full retirement |
| Tax filing status     | filingStatus  | MFJ     | select | Pending |

## 💰 Your Money Today
| Input Field                        | HTML ID | Default      | Unit | Notes |
|------------------------------------|---------|--------------|------|-------|
| Current retirement balance         | bb      | 1300000      | $    | Combined |
| Total annual inflows — yr 1        | bc      | 56000        | $    | Combined |
| Inflow growth rate                 | cg      | 3            | %    | Annual |
| Today's annual net pay (Report Only) | cnp   | 180000       | $    | Report only |

## 🛡️ Social Security
| Input Field               | HTML ID | Default | Unit | Notes |
|---------------------------|---------|---------|------|-------|
| Include SS                | ssOn    | true    | toggle | On by default |
| SS start age              | ssAge   | 67      | years | — |
| Estimated monthly benefit | ssM     | 2800    | $/mo | — |
| SS confidence factor      | ssConf  | 80      | %    | Realistic default |

## ⚙️ Return & Inflation Assumptions
| Input Field                    | HTML ID     | Default | Unit | Notes |
|--------------------------------|-------------|---------|------|-------|
| Inflation rate                 | disc        | 2.5     | %    | — |
| Accum. start return            | agS         | 10      | %    | Glide |
| Accum. end return              | agE         | 8       | %    | Glide |
| Phase 1 start return           | gS          | 7       | %    | Glide |
| Phase 1 end return             | gE          | 4.5     | %    | Glide |
| Phase 2 flat return            | r2          | 4.5     | %    | — |
| Taxable account return         | taxR        | 3.0     | %    | Warning >7% |
| MC success target age          | mcTargetAge | 99      | years | — |

## 🏢 Phase 1 – Semi-Retirement
| Input Field            | HTML ID | Default   | Unit | Notes |
|------------------------|---------|-----------|------|-------|
| Target annual net pay  | p1t     | 180000    | $    | Anchored to cnp |
| Gross pay lesser role  | p1g     | 90000     | $    | — |
| Roth draw              | p1ro    | 0         | $    | — |

## 🌴 Phase 2 – Full Retirement
**Go-go:** t1t = 145000 (ends 83)  
**Slow-go:** t2t = 105000 (ends 92)  
**No-go:** t3t = 110000 (hcPct = 30%)

**Shared:** Tax bracket ref 22%, Roth draw $0

*(Full details available in original Google Doc)*
