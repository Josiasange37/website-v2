"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa6";
import { socialLinks } from "@/utils/constants";
import { useWebsiteContributors } from "@/hooks/useWebsiteContributors";

const WebTeam = () => {
  const t = useTranslations("CreditsPage.webTeam");
  const { contributors, loading } = useWebsiteContributors();

  return (
    <section className="py-8 md:py-12 border-t border-gray-800/20">
      <h2 className="nohemi-font font-bold text-2xl md:text-3xl">
        {t("title")}
      </h2>
      <p className="urbanist-font text-text-color text-base mt-3 max-w-2xl">
        {t("body")}
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        {loading &&
          Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="size-14 rounded-full bg-secondary/10 animate-pulse"
            />
          ))}

        {!loading && (
          <>
            {contributors.map((contributor) => (
              <a
                key={contributor.login}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${contributor.login} · ${contributor.contributions} contributions`}
                aria-label={`${contributor.login} on GitHub`}
                className="group relative size-14 rounded-full overflow-hidden border-2 border-secondary/40 hover:border-secondary transition-all hover:scale-110"
              >
                <Image
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </a>
            ))}
            <a
              href="https://github.com/Joel-Fah"
              target="_blank"
              rel="noopener noreferrer"
              title="Joel-Fah · Designing contributions"
              aria-label="Joel-Fah on GitHub"
              className="group relative size-14 rounded-full overflow-hidden border-2 border-secondary/40 hover:border-secondary transition-all hover:scale-110"
            >
              <Image
                src="https://avatars.githubusercontent.com/u/69576717?v=4"
                alt="Joel-Fah"
                fill
                sizes="56px"
                className="object-cover"
              />
            </a>
          </>
        )}
      </div>

      <a
        href={`${socialLinks.github}/website-v2/graphs/contributors?all=1`}
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

export default WebTeam;
