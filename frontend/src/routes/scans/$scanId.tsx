import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/scans/$scanId")({
  component: ScanResults,
});

function ScanResults() {
  const { scanId } = Route.useParams();
  return (
    <div>
      <h1>Scan {scanId}</h1>
      <p>Live results via WebSocket / full results when complete — coming soon.</p>
    </div>
  );
}
