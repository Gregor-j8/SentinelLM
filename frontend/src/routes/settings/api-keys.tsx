import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/api-keys")({
  component: ApiKeys,
});

function ApiKeys() {
  return (
    <div>
      <h1>API Keys</h1>
      <p>Manage programmatic API keys for CI/CD — coming soon.</p>
    </div>
  );
}
