const aeroOpsScreenshots = [
  {
    src: 'https://raw.githubusercontent.com/sumiya15/AeroOps-AI/refs/heads/main/docs/assets/operator-dashboard/01-disruption-overview.png',
    alt: 'AeroOps AI synthetic disruption overview and affected bookings',
    caption: 'Synthetic disruption overview',
  },
  {
    src: 'https://raw.githubusercontent.com/sumiya15/AeroOps-AI/refs/heads/main/docs/assets/operator-dashboard/02-explainable-options.png',
    alt: 'AeroOps AI recovery alternatives with constraint results and fictional policy citations',
    caption: 'Explainable recovery alternatives',
  },
  {
    src: 'https://raw.githubusercontent.com/sumiya15/AeroOps-AI/refs/heads/main/docs/assets/operator-dashboard/03-approved-preview-audit.png',
    alt: 'AeroOps AI synthetic approval, notification preview and audit trail',
    caption: 'Synthetic approval and audit trail',
  },
];

export const projects = [
  {
    id: 'aeroops-ai',
    title: 'AeroOps AI',
    category: 'AI · DECISION SUPPORT',
    summary:
      'A local decision-support demonstration using historical public flight data, derived demo schedules and synthetic operational data.',
    problem:
      'Compare recovery alternatives for affected synthetic booking groups and understand why each option meets or fails the demo constraints.',
    contribution:
      'The repository documents a full-stack workbench: a React and TypeScript operator dashboard, FastAPI backend, deterministic recovery evaluation and transactional synthetic workflow.',
    features: [
      'Ranks eligible recovery options under cabin, complete-party capacity, accessibility and route/time constraints.',
      'Shows ineligible options with reasons and citations to fictional demo policies.',
      'Supports explicit synthetic approval or rejection, a synthetic inventory hold, an unsent notification preview and append-only audit events.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Python', 'FastAPI', 'SQLAlchemy', 'SQLite'],
    screenshots: aeroOpsScreenshots,
    limitations: [
      'Local portfolio demonstration only; no real airline systems, bookings or communications are connected.',
      'Historical public records inform derived demo schedules. Bookings, passengers, seats, operational data and policies are synthetic.',
      'Recovery ranking is deterministic and illustrative, not a prediction or optimization guarantee. No machine-learning or LLM service is used.',
      'The policy documents are fictional demonstration policies, not airline rules.',
    ],
    repository: 'https://github.com/sumiya15/AeroOps-AI',
    liveDemo: null,
    cardDetail: 'A local, explainable disruption-recovery workbench.',
    tags: ['React', 'FastAPI', 'Python'],
  },
  {
    id: 'recoverai',
    title: 'RecoverAI',
    category: 'PAYMENT RECOVERY · TEST MODE',
    summary:
      'A Razorpay test-mode revenue-recovery MVP that validates failed-payment webhooks, applies explicit recovery rules and records approval-required suggestions.',
    problem:
      'Review eligible failed payments and suggested recovery actions without sending customer messages or charging customers.',
    contribution:
      'Built a Python/FastAPI service with a Streamlit operations dashboard, signature-validated Razorpay test-mode webhook flow, SQLite-backed recovery records and audit logging.',
    features: [
      'Validates Razorpay webhook signatures and ignores duplicate event IDs. Simulated demo events remain distinguished from validated webhook events.',
      'Applies rules to failed-payment status, error code, attempt count, amount threshold and a recovery stop switch.',
      'Requires approval before recording a demo reminder; successful-payment events cancel matching pending reminders.',
      'Shows payment records, separated demo and webhook metrics, suggested actions and audit logs in the dashboard.',
    ],
    stack: ['Python', 'FastAPI', 'SQLite', 'Streamlit', 'Razorpay Webhooks', 'pytest'],
    screenshots: [],
    limitations: [
      'Test-mode/local MVP only. It does not send real customer messages, create real charges or treat demo revenue as verified Razorpay revenue.',
      'Recovery suggestions are rules-first; the repository describes Gemini explanations as a possible future addition, not an active feature.',
      'No hosted live demo or verified project screenshots are provided.',
    ],
    repository: 'https://github.com/sumiya15/RecoveryAI',
    liveDemo: null,
    cardDetail: 'Rules-first, approval-required payment recovery in Razorpay test mode.',
    tags: ['Python', 'FastAPI', 'SQLite'],
  },
  {
    id: 'ipis',
    title: 'IPIS',
    category: 'PLACEMENT ANALYTICS',
    summary:
      'A React, FastAPI and PostgreSQL placement analytics project using clearly labeled synthetic demo data.',
    problem:
      'Placement summaries can be difficult to compare when cohort sizes, salary units and the origin of the underlying data are unclear.',
    contribution:
      'Built a full-stack academic placement analytics application with a React dashboard, FastAPI service and PostgreSQL data model.',
    features: [
      'Role-protected accounts, database-backed placement analytics and transparent historical branch guidance.',
      'College-admin CSV preview with row validation and duplicate review; committed imports update dashboard results.',
      'Downloadable CSV and PDF reports generated from the selected analytics.',
    ],
    stack: ['React', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic'],
    screenshots: [],
    limitations: [
      'Local academic project; no hosted demo is available.',
      'Demo records are clearly labeled synthetic data, not statistics about real colleges.',
      'CSV import is supported; PDF extraction, forecasting and evaluated predictive models are not implemented.',
    ],
    repository: 'https://github.com/sumiya15/IPIS',
    repositoryAction: 'View Code',
    liveDemo: null,
    cardDetail: 'React, FastAPI and PostgreSQL placement analytics with clearly labeled synthetic demo data.',
    tags: ['React', 'FastAPI', 'PostgreSQL'],
  },
  {
    id: 'new-mom-circle',
    title: 'NewMomCircle',
    category: 'COMMUNITY',
    summary:
      'A community platform that connects mothers during the postpartum phase for shared experiences and peer support.',
    problem:
      'Make it easier for mothers to find peer connection and share experiences during the postpartum phase.',
    contribution:
      'Built a web and mobile community app. Its web feed includes post creation, likes, comments and optional Supabase Realtime updates, with a mock-data path when offline.',
    features: [
      'Community feed supports creating posts, liking posts and adding comments.',
      'The web app subscribes to Supabase Realtime updates when configured; its offline path uses mock posts and local storage.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Expo', 'React Native', 'Supabase'],
    screenshots: [],
    limitations: [
      'The offline feed uses mock data; no hosted live demo is linked from this portfolio.',
      'No verified project screenshots have been supplied.',
    ],
    repository: 'https://github.com/sumiya15/newmomcircle',
    liveDemo: null,
    cardDetail: 'A web and mobile postpartum peer-support community.',
    tags: ['Next.js', 'Expo', 'TypeScript'],
  },
];
