import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Overview of scans and scores — coming soon.</p>
    </div>
  );
}
