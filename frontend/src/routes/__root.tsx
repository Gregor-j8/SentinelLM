import { QueryClient } from "@tanstack/react-query";
import { Link, Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #333", display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ fontWeight: "bold" }}>SentinelLM</Link>
        <Link to="/targets">Targets</Link>
        <Link to="/scans/new">New Scan</Link>
        <Link to="/playground">Playground</Link>
        <Link to="/attacks">Attacks</Link>
        <Link to="/settings/api-keys">API Keys</Link>
      </nav>
      <main style={{ padding: "1.5rem" }}>
        <Outlet />
      </main>
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  );
}
