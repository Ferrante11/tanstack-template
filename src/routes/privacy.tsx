import { createFileRoute } from "@tanstack/react-router";
import SiteShell from "../components/SiteShell";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function H2({ children }: { children: string }) {
  return <h2 className="text-2xl font-black mt-8 mb-3">{children}</h2>;
}
function P({ children }: { children: any }) {
  return <p className="text-white/85 font-semibold leading-relaxed">{children}</p>;
}

function PrivacyPage() {
  return (
    <SiteShell title="Privacy Policy" subtitle="Last updated: February 11, 2026">
      <H2>1. Introduction</H2>
      <P>
        Park Rides Quest (“we,” “our,” or “the app”) is committed to protecting your privacy and
        explaining clearly what data we collect and why.
      </P>

      <H2>2. Information We Collect</H2>

      <h3 className="text-xl font-black mt-6 mb-2">2.1 Information You Provide</h3>
      <ul className="space-y-2 text-white/85 font-semibold list-disc pl-6">
        <li>Player/display names (entered by you)</li>
        <li>Ride ratings and metrics (e.g., Aesthetic, Thrill, Duration, Line Interest)</li>
        <li>Optional text you enter in the app (for example, comments) if enabled</li>
      </ul>

      <h3 className="text-xl font-black mt-6 mb-2">2.2 Information Collected Automatically (Core App Functionality)</h3>
      <ul className="space-y-2 text-white/85 font-semibold list-disc pl-6">
        <li>
          Anonymous identifier: The app automatically creates an anonymous account identifier (UID) using 
          Firebase Anonymous Authentication. No username, email, phone number, or password is required.
        </li>
        <li>
          Session and app activity data needed for core functionality, such as session codes,
          timestamps (created/updated times), and basic app state.
        </li>
      </ul>

      <h3 className="text-xl font-black mt-6 mb-2">2.3 Analytics Data (Firebase Analytics)</h3>
      <P>
        We use Firebase Analytics to better understand how the app is used and to improve stability
        and performance. Firebase Analytics may collect:
      </P>
      <ul className="mt-3 space-y-2 text-white/85 font-semibold list-disc pl-6">
        <li>Basic app usage events (e.g., which screens are opened, button taps, feature usage)</li>
        <li>Device and app information (such as device model, OS version, app version, language/region)</li>
        <li>Approximate location derived from IP address (coarse/approximate only, not precise GPS)</li>
        <li>Diagnostic and performance-related signals (e.g., crash or error context when enabled by the platform)</li>
      </ul>
      <P className="mt-4">
        We do NOT use analytics for targeted advertising, and we do not sell your information.
      </P>

      <H2>3. How We Use Your Information</H2>
      <ul className="space-y-2 text-white/85 font-semibold list-disc pl-6">
        <li>Create and manage group “adventures” (sessions)</li>
        <li>Save and display ratings within a session</li>
        <li>Generate entertainment-only personality results based on your ride ratings</li>
        <li>Improve app performance, reliability, and user experience (including via analytics)</li>
        <li>Maintain app security and prevent abuse</li>
        <li>Provide customer support if you contact us</li>
      </ul>

      <H2>4. Advertising / Tracking</H2>
      <P>We do not show third-party ads and we do not use data for cross-app tracking or targeted advertising.</P>

      <H2>5. Data Storage and Service Providers</H2>
      <P>
        We store and process session, rating, and analytics data using Google Firebase services
        (Firestore, Firebase Authentication, and Firebase Analytics). These providers act as service
        providers/processors to help us operate the app.
      </P>

      <H2>6. Data Sharing</H2>
      <P>We do not sell your personal information. We share data only:</P>
      <ul className="mt-3 space-y-2 text-white/85 font-semibold list-disc pl-6">
        <li>With other players in the same session, as needed to show group results</li>
        <li>With our service providers (Firebase/Google) to operate the app</li>
        <li>If required by law</li>
      </ul>

      <H2>7. Data Retention</H2>
      <P>
        We retain session and rating data as long as reasonably necessary to operate the app and
        provide aggregated insights. We may delete older sessions or data as part of normal maintenance.
        Analytics data is retained according to Firebase/Google’s retention settings configured for the project.
      </P>

      <H2>8. Your Choices and Rights</H2>
      <P>
        This app uses Firebase Anonymous Authentication and creates an anonymous identifier (UID) on your device. 
        You may request deletion of your anonymous account identifier and associated data we can reasonably locate 
        (for example: session participation records, ratings, summaries, event logs, and policy acceptance records).
        To request deletion, contact us at:
        <span className="block mt-2 text-white font-black">support@parkridesquest.com</span>
        Please include your session code(s) and approximate date/time of use so we can locate and remove the relevant data. 
        We typically process deletion requests within 30 days.
      </P>

      <H2>9. Children’s Privacy</H2>
      <P>This app is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13.</P>

      <H2>10. Changes to This Policy</H2>
      <P>We may update this Privacy Policy from time to time. Your continued use of the app means you accept the updated policy.</P>

      <H2>11. Contact</H2>
      <P>
        <span className="text-white font-black">support@parkridesquest.com</span>
      </P>
    </SiteShell>
  );
}
