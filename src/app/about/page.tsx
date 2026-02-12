import Navbar from "@/components/layout/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-2xl px-8 py-24">
        <h1 className="text-display-lg font-serif text-fg-primary tracking-heading">About the Team</h1>
        <p className="mt-6 text-body-lg text-fg-secondary">
          LifeLedger is built by a team dedicated to helping you organize and
          track your personal documents and expenses.
        </p>
      </main>
    </div>
  );
}
