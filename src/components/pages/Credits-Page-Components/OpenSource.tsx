"use client";

import { useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa6";
import { socialLinks } from "@/utils/constants";

const OpenSource = () => {
  const t = useTranslations("CreditsPage.openSource");

  return (
    <section className="py-8 md:py-12 border-t border-gray-800/20">
      <h2 className="nohemi-font font-bold text-2xl md:text-3xl">
        {t("title")}
      </h2>
      <p className="urbanist-font text-text-color text-base mt-3 max-w-2xl">
        {t("body")}
      </p>
      <a
        href={`${socialLinks.github}/website-v2`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-5 text-secondary urbanist-font font-semibold hover:underline"
      >
        <FaGithub size={20} />
        {t("cta")}
      </a>
    </section>
  );
};

export default OpenSource;
