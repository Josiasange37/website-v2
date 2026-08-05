"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/layout";

const TECHNOLOGIES = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "TanStack Query",
  "next-intl",
  "React Hook Form",
  "Zod",
  "React Icons",
] as const;

const TechStack = () => {
  const t = useTranslations("CreditsPage.techStack");

  return (
    <section className="py-8 md:py-12 border-t border-gray-800/20">
      <h2 className="nohemi-font font-bold text-2xl md:text-3xl">
        {t("title")}
      </h2>
      <p className="urbanist-font text-text-color text-base mt-3 max-w-2xl">
        {t("body")}
      </p>
      <div className="flex flex-wrap gap-3 mt-5">
        {TECHNOLOGIES.map((tech) => (
          <Badge key={tech} outline backgroundColor="bg-transparent">
            {tech}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
