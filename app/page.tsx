import { Github, Youtube, Twitter, Instagram, ExternalLink } from "lucide-react";

type LinkItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  desc?: string;
};

const LINKS: LinkItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/Willemilk?tab=overview&from=2025-09-01&to=2025-09-16",
    icon: <Github size={18} />,
    desc: "Random projects, mostly school stuff",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@willemilk1942/videos",
    icon: <Youtube size={18} />,
    desc: "Gaming videos (Geometry Dash), lots unlisted/private",
  },
  {
    label: "Twitter / X",
    href: "https://x.com/WillemdeWit040",
    icon: <Twitter size={18} />,
    desc: "Mostly scrolling and watching people argue 😭",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@willemdewit10?lang=en-GB",
    icon: <Youtube size={18} />,
    desc: "Use it less now, reels > TikTok",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/willemilk/",
    icon: <Instagram size={18} />,
    desc: "Life stuff and reels doomscrolling",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <main className="mx-auto max-w-xl px-5 py-10">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">@willemilk</h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Links and little bits about me
          </p>
        </header>

        <ul className="space-y-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white/70 px-4 py-3 shadow-sm backdrop-blur hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/60"
              >
                <div className="flex items-center gap-3">
                  <span className="opacity-80 group-hover:opacity-100 transition">{l.icon}</span>
                  <div>
                    <div className="font-medium tracking-tight">{l.label}</div>
                    {l.desc && (
                      <div className="text-xs text-neutral-600 dark:text-neutral-400">
                        {l.desc}
                      </div>
                    )}
                  </div>
                </div>
                <ExternalLink size={16} className="opacity-40 group-hover:opacity-100 transition" />
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-8 text-xs text-neutral-500">
        </footer>
      </main>
    </div>
  );
}
