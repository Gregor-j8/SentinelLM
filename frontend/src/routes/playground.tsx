import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/playground")({
  component: Playground,
});

function Playground() {
  return (
    <div>
      <h1>Playground</h1>
      <p>Manual prompt testing with promote-to-attack flow — coming soon.</p>
    </div>
  );
}
