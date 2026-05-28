import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ProjectsList } from "@/components/home/ProjectsList";
import { ChevronRight } from "@/components/icons/ChevronRight";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons/SocialIcons";
import {
  List,
  ListItem,
  ListItemLabel,
  Section,
  SectionHeading,
} from "@/components/shared/ListComponents";
import { createMetadata, createPersonJsonLd } from "@/lib/metadata";
import { buildSlug } from "@/lib/short-id";
import { getAllWritingPosts } from "@/lib/writing";

export const metadata: Metadata = createMetadata({
  title: "Wendy Edem Ahadome — Frontend Developer",
  description:
    "Frontend Developer from Accra, Ghana. Building beautiful, accessible and responsive interfaces.",
  path: "/",
});

export const dynamic = "force-dynamic";

export default async function Home() {
  const personJsonLd = createPersonJsonLd();
  const allPosts = await getAllWritingPosts();
  const recentPosts = allPosts.slice(0, 5);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="flex flex-1 flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="text-primary mx-auto flex max-w-2xl flex-1 flex-col gap-16 py-16 leading-[1.6] sm:py-32">
            <Section>
              <Image
                src="/img/avatar.jpg"
                alt="Wendy Edem Ahadome"
                width={60}
                height={60}
                draggable={false}
                className="mb-8 rounded-full select-none"
              />

              <h1 id="home-title" className="text-2xl font-semibold">
                Frontend Developer
              </h1>

              <p className="text-secondary text-2xl font-semibold text-pretty">
                I build beautiful, accessible and responsive interfaces.
              </p>
            </Section>

            <Section className="flex flex-row gap-2">
              <ListItem href="https://github.com/myagwen" className="group -ml-1 p-2">
                <GitHubIcon
                  size={28}
                  className="text-quaternary group-hover:text-primary select-none"
                />
              </ListItem>
              <ListItem href="https://x.com/mya_gwen" className="group p-2">
                <XIcon size={28} className="text-quaternary group-hover:text-primary select-none" />
              </ListItem>
              <ListItem href="https://linkedin.com/in/wendy-ahadome" className="group p-2">
                <LinkedInIcon
                  size={28}
                  className="text-quaternary select-none group-hover:text-[#0A66C2]"
                />
              </ListItem>
            </Section>

            <Section>
              <Link href="/writing" className="group flex items-center">
                <SectionHeading className="group-hover:text-primary transition-colors">
                  Writing
                </SectionHeading>
                <ChevronRight
                  size={32}
                  className="text-quaternary group-hover:text-primary transition-all duration-150 group-hover:translate-x-0.5"
                />
              </Link>
              <List>
                {recentPosts
                  .filter((post) => post.shortId)
                  .map((post) => {
                    return (
                      <ListItem
                        key={post.id}
                        href={`/writing/${buildSlug(post.title, post.shortId!)}`}
                      >
                        <ListItemLabel className="line-clamp-none">{post.title}</ListItemLabel>
                      </ListItem>
                    );
                  })}
              </List>
            </Section>

            <Section>
              <SectionHeading>Projects</SectionHeading>
              <ProjectsList />
            </Section>
          </div>
        </div>
      </div>
    </>
  );
}
