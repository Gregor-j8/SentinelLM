import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/scans/new")({
  component: NewScan,
});

function NewScan() {
  return (
    <div>
      <h1>New Scan</h1>
      <p>3-step wizard: pick target → select attacks → launch — coming soon.</p>
    </div>
  );
}
