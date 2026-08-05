"use client";

import { useTranslations } from "next-intl";

const CreditsHeader = () => {
  const t = useTranslations("CreditsPage.header");

  return (
    <div className="pt-32 md:pt-40 pb-10 md:pb-16 text-center md:text-left">
      <span className="text-sm text-secondary urbanist-font mb-2 inline-block">
        {t("eyebrow")}
      </span>
      <h1 className="nohemi-font font-extrabold text-4xl md:text-6xl leading-tight">
        {t("title")}
      </h1>
      <p className="urbanist-font text-text-color text-base md:text-lg mt-4 max-w-2xl md:mx-0 mx-auto">
        {t("description")}
      </p>
    </div>
  );
};

export default CreditsHeader;
