<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Product
Travel Companion is a warm, minimal digital travel journal with AI-generated destination recommendations.

## Technology
- Next.js
- React
- TypeScript
- CSS modules
- Tabidoo as the application database
- Make for automation and AI workflows

## Coding rules
- Prefer small reusable components.
- Do not introduce a new package without explaining why.
- Keep API calls inside src/services.
- Never hardcode secrets or webhook URLs, use env variables instead.
- Add loading, empty and error states.
- Keep components accessible and responsive.
- Add tests for any business logic.
- Run npm run build after meaningful changes.
- Variables and HTML ids/classes should have meaningful names.
- Colors, fonts and spacings should be consistent throughout the application. Use CSS variables to define them.

## Design direction
- warm cream background;
- muted forest green;
- soft rounded cards;
- modern typography;
- subtle whimsical botanical details;
- avoid excessive animations and visual clutter.
<!-- END:nextjs-agent-rules -->
