import { createFileRoute } from "@tanstack/react-router";
import SiteShell from "../components/SiteShell";

export const Route = createFileRoute("/legal")({
  component: LegalPage,
});

function SectionTitle({ children }: { children: string }) {
  return <h2 className="text-2xl font-black mt-8 mb-3">{children}</h2>;
}

function Paragraph({ children }: { children: any }) {
  return <p className="text-white/85 font-semibold leading-relaxed">{children}</p>;
}

function LegalPage() {
  return (
    <SiteShell
      title="Legal Disclaimer"
      subtitle="Please read this notice carefully. Park Rides Quest is an independent, entertainment-only project."
    >
      <SectionTitle>Independent Project</SectionTitle>
      <Paragraph>
        Park Rides Quest is an independent application and is not affiliated with, endorsed by,
        authorized by, or in any way officially connected to any theme park, entertainment company,
        or their subsidiaries.
      </Paragraph>

      <SectionTitle>Trademark Disclaimer</SectionTitle>
      <Paragraph>
        All trademarks, service marks, attraction names, ride names, and park names referenced in
        this app are the property of their respective owners. Their use herein is for identification
        purposes only and does not imply endorsement, sponsorship, or affiliation.
      </Paragraph>

      <SectionTitle>Content Disclaimer</SectionTitle>
      <Paragraph>
        The content within this app (ratings, personality matches, descriptions) is provided for
        entertainment purposes only. All user-generated content and personality results are fictional
        interpretations and do not represent the views or official positions of any theme park or
        entertainment brand.
      </Paragraph>

      <SectionTitle>Safety Disclaimer</SectionTitle>
      <Paragraph>
        Ride descriptions, ratings, and comparisons in this app should not be taken as official or
        up-to-date guidance. Always refer to official park sources for accurate ride information,
        safety instructions, height restrictions, and operational status. Consult park staff or
        official resources if you have any concerns during a visit.
      </Paragraph>

      <SectionTitle>Personality Assessment Disclaimer</SectionTitle>
      <Paragraph>
        The personality outcomes presented in this app are fictional and created exclusively for
        entertainment. They do not reflect real psychological traits, assessments, diagnoses, or
        professional evaluations. The creators of Park Rides Quest are not licensed psychologists,
        therapists, or mental health professionals, and the app does not provide psychological,
        mental health, or professional advice. No offense or stereotyping is intended; users should
        not rely on these results for decisions related to health, well-being, behavior, or
        relationships. Use of this feature is entirely at your own discretion and risk.
      </Paragraph>

      <SectionTitle>Limitation of Liability</SectionTitle>
      <Paragraph>
        To the fullest extent permitted by applicable law, Park Rides Quest, its creators, and its
        affiliates disclaim all liability arising from:
      </Paragraph>
      <ul className="mt-3 space-y-2 text-white/85 font-semibold list-disc pl-6">
        <li>Your use or misuse of the app</li>
        <li>Any decisions you make based on the app&apos;s content</li>
        <li>
          Any injury, damage, loss, or other harm resulting from a visit to a theme park or
          interpretation of personality results
        </li>
      </ul>

      <SectionTitle>No Professional Advice</SectionTitle>
      <Paragraph>
        Nothing in this app constitutes professional, medical, psychological, or legal advice. If
        you require such advice, consult a qualified professional.
      </Paragraph>
    </SiteShell>
  );
}
