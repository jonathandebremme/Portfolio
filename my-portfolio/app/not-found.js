import Link from "next/link";

import Heading from "./components/Heading";

export default function NotFound() {
  return (
    <main className="min-h-screen p-24">
      <Heading
        title="Page not found"
        paragraph="The page you requested could not be found. Please go back to the homepage."
      />
    </main>
  );
}
