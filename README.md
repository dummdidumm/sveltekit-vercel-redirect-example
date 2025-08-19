# Vercel edge config redirect demo

You have two options:

- A: Use server side route resolution and handle those resolution requests in middleware. Relevant files: `svelte.config.js` (activate the relevant option), `middleware.ts` (redirect logic)
- B: Do redirect in your root layout server load function. Relevant file: `src/routes/+layout.server.ts` (redirect logic) (you may want/need to duplicate the logic from in `middleware.ts` in case you have prerendered pages)
