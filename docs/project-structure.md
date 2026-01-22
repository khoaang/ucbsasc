# Project Structure and Key Files

Understanding the layout saves time when you need to add a feature or hunt down a bug.

## Directory Map
```
ucbsasc/
├── src/
│   ├── assets/                # Static assets (images, fonts, etc.)
│   ├── components/            # Reusable React components
│   │   ├── common/            # Generic UI pieces
│   │   ├── layout/            # Navbar, footer, layout helpers
│   │   └── features/          # Feature-specific components
│   ├── components/events/     # All event cards + shared EventCard
│   ├── components/home/       # Home page modals and hero pieces
│   ├── data/                  # Structured data and config objects
│   ├── firebase/              # Firebase utilities (if enabled)
│   ├── pages/                 # Page components mapped in the router
│   ├── theme/                 # MUI theme customization
│   ├── App.tsx                # Router + layout shell
│   └── main.tsx               # React entry point
├── public/                    # Public static files
├── docs/                      # Extended documentation (this folder)
├── package.json               # Dependencies and scripts
├── tsconfig*.json             # TypeScript configuration
└── vite.config.ts             # Vite build config
```

## Key Files Explained
- `src/App.tsx` – router definitions and layout wrapper.
- `src/components/events/EventCard.tsx` – shared layout for every event card.
- `src/components/home/LeadInviteModal.tsx` – leadership splash modal for the homepage.
- `src/data/leadership.ts` – single source of truth for director and officer metadata.
- `src/data/lead.ts` – configuration for the lead page (benefits, branch blurbs, application steps).
- `src/pages/QRGenerator.tsx` – the hidden `/qr` page that generates QR codes.
- `src/theme/theme.ts` – color palette and typography choices.

## Editing the Lead Page
1. Update copy and branch data in `src/data/lead.ts`.
2. Adjust leadership rosters or headshots in `src/data/leadership.ts`.
3. The lead page (`src/pages/Lead.tsx`) reads from those data files and handles presentation only.

## Editing Event Cards
1. Add or modify cards in `src/components/events/`.
2. Most changes are data tweaks inside each component; layout changes should happen in the shared `EventCard`.
3. The events page (`src/pages/Events.tsx`) consumes these components in chronological order.

## Updating Navigation
1. Add routes in `src/App.tsx`.
2. Add navigation entries in `src/components/Navbar.tsx`.

## Environment Flags and Modals
- Leadership modal: `LeadInviteModal` is triggered from the home page state stored in `Home.tsx` and persists using `lead_modal_dismissed_v1`.
- Firebase hooks live in `src/firebase/`; keep secrets out of the repo.

When in doubt, search within the `src` folder using your editor or `rg` to see how an existing component is wired. For day-to-day workflows and code style preferences, check the [development guide](./development-guide.md).
