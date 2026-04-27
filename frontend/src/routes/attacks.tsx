import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/attacks")({
  component: Attacks,
});

function Attacks() {
  return (
    <div>
      <h1>Attack Library</h1>
      <p>Browsable, searchable attack prompt library — coming soon.</p>
    </div>
  );
}
