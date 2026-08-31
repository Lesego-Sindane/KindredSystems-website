export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-porcelain text-ink flex items-center justify-center">
      <div className="mx-auto max-w-2xl rounded-lg border border-ink/10 bg-white p-10 text-center shadow-soft">
        <h1 className="text-2xl font-semibold">Thanks — we received your enquiry</h1>
        <p className="mt-4 text-ink/70">We'll review your message and follow up soon. In the meantime you can email hello@kindredsystems.co.za or return to the homepage.</p>
        <div className="mt-6">
          <a href="/" className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-white font-semibold">Back to homepage</a>
        </div>
      </div>
    </main>
  );
}
