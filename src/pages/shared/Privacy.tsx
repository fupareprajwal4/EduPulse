export function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 prose-headings:text-foreground">
      <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: July 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>EduPulse AI collects academic performance data, attendance records, and interaction logs strictly to power the analytics and AI tutoring features described in your institution's agreement with us.</p>
        <h2 className="text-lg font-semibold text-foreground">What we collect</h2>
        <p>Course enrollment data, assignment submissions, quiz responses, attendance records, and chat interactions with the AI tutor.</p>
        <h2 className="text-lg font-semibold text-foreground">How we use it</h2>
        <p>To generate performance forecasts, personalize learning paths, and provide educators with actionable, aggregated insights. We do not sell student data to third parties.</p>
        <h2 className="text-lg font-semibold text-foreground">Your rights</h2>
        <p>Students and guardians may request a copy of stored data or its deletion, subject to institutional record-keeping requirements, by contacting privacy@edupulse.ai.</p>
      </div>
    </div>
  );
}
