# Retirement Planning Calculator v2

A premium, narrative-first retirement planning tool built for clarity, trust, and delight.

## Vision
Transform complex financial modeling into an intuitive “financial co-pilot” experience for Balanced Professionals (age 40–55).

## Core Specs
- **Appendix A v2.0** – Defaults, data model, and business rules  
- **Appendix B** – Maya’s high-fidelity designs & interactions  
- **Appendix C** – Developer specifications & tech stack

## Team
- **Alpha** – Senior Product Manager (Vision, Specs & Coordination)  
- **Maya** – Senior Product Designer & UX Strategist (High-Fidelity Designs)  
- **Jordan** – Senior Full-Stack Engineer (Calculation Engine & Architecture)  
- **Ash** – Senior Frontend & UI Polish Engineer (Design System & Interactions)
- **Brent** - Founder & Product Owner

## Tech Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui + Framer Motion
- Recharts / Tremor for visualizations
- Zustand for state management
- Pure TypeScript calculation engine

## Getting Started
```bash
git clone <your-repo-url>
cd retirement-calculator-v2
npm install
npm run dev

docs/                    # All Appendices
├── Appendix-A-v2.0.md
├── Appendix-B-Designs.md
└── Appendix-C-Dev-Specs.md

src/
├── app/
├── components/
│   ├── ui/              # Ash's design system
│   ├── charts/
│   └── wizard/
├── lib/
│   └── engine/          # Jordan's calculation core
├── store/
├── data/
│   └── defaults.ts
└── hooks/
