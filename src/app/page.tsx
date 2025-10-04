import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Jorge Candreva</h1>
        <ul className="list-inside list-disc text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Scrap {" "}
            <a
              className="hover:underline hover:underline-offset-4"
              href="https://scrap.rocks"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Image
              className="inline-block mx-1"
              src="/discord.svg"
              alt="Discord logo"
              width={16}
              height={16}
              style={{ filter: "invert(1)" }}
            />
            </a>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            LiftChest {" "}
            <a
              className="hover:underline hover:underline-offset-4"
              href="https://modrinth.com/plugin/liftchest"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Image
              className="inline-block mx-1"
              src="/modrinth.svg"
              alt="Modrinth logo"
              width={16}
              height={16}
              style={{ filter: "invert(1)" }}
            />
            </a>
            <a
              className="hover:underline hover:underline-offset-4"
              href="https://github.com/JCandreva/LiftChest"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Image
              className="inline-block mx-1"
              src="/github.svg"
              alt="GitHub logo"
              width={16}
              height={16}
              style={{ filter: "invert(1)" }}
            />
            </a>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            StardewFishing {" "}
            <a
              className="hover:underline hover:underline-offset-4"
              href="https://github.com/JCandreva/StardewFishing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="inline-block mx-1"
                src="/github.svg"
                alt="GitHub logo"
                width={16}
                height={16}
                style={{ filter: "invert(1)" }}
              />
            </a>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            garde manger {" "}
            <a
              className="hover:underline hover:underline-offset-4"
              href="https://gardemanger.sxigames.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="inline-block mx-1"
                src="/external-link.svg"
                alt="Open icon"
                width={16}
                height={16}
                style={{ filter: "invert(1)" }}
              />
            </a>
            <a
              className="hover:underline hover:underline-offset-4"
              href="https://github.com/JCandreva/garde-manger"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="inline-block mx-1"
                src="/github.svg"
                alt="GitHub logo"
                width={16}
                height={16}
                style={{ filter: "invert(1)" }}
              />
            </a>
          </li>
        </ul>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/JCandreva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github logo"
            width={16}
            height={16}
            style={{ filter: "invert(1)" }}
          />
          Github
        </a>
        <a 
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/jorge-candreva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="LinkedIn logo"
            width={16}
            height={16}
            style={{ filter: "brightness(0) saturate(100%) invert(1)" }}
          />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
