import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/targets/")({
  component: Targets,
});

function Targets() {
  return (
    <div>
      <h1>Targets</h1>
      <p>Manage registered LLM endpoints — coming soon.</p>
    </div>
  );
}
