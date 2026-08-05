import type { Metadata } from "next";
import {
  CreditsHeader,
  WebTeam,
  TechStack,
  OpenSource,
} from "@/components/pages/Credits-Page-Components";

export const metadata: Metadata = {
  title: "Credits | Django Cameroon",
  description:
    "The people, tools, and open-source projects behind the Django Cameroon website.",
};

export default function CreditsPage() {
  return (
    <div className="w-full md:w-[85%] mx-auto max-md:px-4 pb-20">
      <CreditsHeader />
      <WebTeam />
      <TechStack />
      <OpenSource />
    </div>
  );
}
