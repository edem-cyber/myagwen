import type { Metadata } from "next";
import Image from "next/image";

import { ProjectsList } from "@/components/home/ProjectsList";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons/SocialIcons";
import {
  InlineLink,
  List,
  ListItem,
  ListItemLabel,
  ListItemSubLabel,
  Section,
  SectionHeading,
} from "@/components/shared/ListComponents";
import { createMetadata, createPersonJsonLd } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Frontend Developer from Accra, Ghana. Building beautiful, accessible and responsive interfaces.",
  path: "/about",
});

export default function About() {
  const personJsonLd = createPersonJsonLd();

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

              <p className="text-secondary text-2xl font-medium text-pretty">
                Hi, I&apos;m Wendy Edem Ahadome, a Frontend Developer from Accra, Ghana. I love
                creating beautiful, user-focused digital experiences that merge design and
                functionality.
              </p>

              <p className="text-secondary text-2xl font-medium">
                With a passion for learning and a knack for problem-solving, I turn complex ideas
                into sleek, impactful web solutions. I aim to deliver seamless interfaces and
                optimized user experiences that make a difference.
              </p>

              <p className="text-secondary text-2xl font-medium">
                I&apos;m currently working as a Frontend Engineer at{" "}
                <InlineLink href="https://huvacliq.com">Huvacliq Technologies</InlineLink>,
                developing interactive web applications using Next.js, React, and WordPress. I
                optimize for performance, build custom APIs and authentication systems, and ensure
                seamless cross-browser and mobile experiences.
              </p>

              <p className="text-secondary text-2xl font-medium">
                Previously, I was a Frontend Engineer Intern at{" "}
                <InlineLink href="https://stutern.com">Stutern</InlineLink>, where I built UI
                components, implemented authentication systems, and integrated APIs. I also worked
                as a WordPress Designer at Huvacliq Technologies, designing and customizing
                WordPress websites with custom themes and plugins.
              </p>

              <p className="text-secondary text-2xl font-medium">
                I hold a Bachelor of Arts in Political Science and Information Studies from the
                University of Ghana, a Certificate in Frontend Engineering from Stutern, and I am a
                Certified AWS Cloud Practitioner.
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
              <SectionHeading>Experience</SectionHeading>
              <List className="gap-8">
                {experience.map(({ name, href, role, period }) => (
                  <ListItem
                    key={name}
                    href={href}
                    className="flex-col items-start gap-0.5 sm:flex-row sm:items-center sm:gap-3"
                  >
                    <div className="flex items-center gap-2 sm:contents">
                      <ListItemLabel>{name}</ListItemLabel>
                      <ListItemSubLabel>{role}</ListItemSubLabel>
                    </div>
                    <ListItemSubLabel className="font-mono text-[19px] opacity-80 sm:ml-auto">
                      {period}
                    </ListItemSubLabel>
                  </ListItem>
                ))}
              </List>
            </Section>

            <Section>
              <SectionHeading>Education & Certifications</SectionHeading>
              <List>
                {education.map(({ name, href, sublabel }) => (
                  <ListItem key={name} href={href}>
                    <ListItemLabel>{name}</ListItemLabel>
                    {sublabel && (
                      <ListItemSubLabel className="select-none">{sublabel}</ListItemSubLabel>
                    )}
                  </ListItem>
                ))}
              </List>
            </Section>

            <Section>
              <SectionHeading>Skills</SectionHeading>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-secondary rounded-full bg-black/5 px-3 py-1.5 text-sm font-medium dark:bg-white/[0.08]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
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

const experience = [
  {
    name: "Huvacliq Technologies",
    href: "https://huvacliq.com",
    role: "Frontend Engineer",
    period: "Jul 2023 – Present",
  },
  {
    name: "Stutern",
    href: "https://stutern.com",
    role: "Frontend Engineer Intern",
    period: "May 2023 – Sep 2023",
  },
  {
    name: "Huvacliq Technologies",
    href: "https://huvacliq.com",
    role: "WordPress Designer Intern",
    period: "Oct 2020 – Jan 2022",
  },
];

const education = [
  {
    name: "University of Ghana, Legon",
    href: "https://ug.edu.gh",
    sublabel: "BA Political Science & Information Studies (2016–2020)",
  },
  {
    name: "Stutern",
    href: "https://stutern.com",
    sublabel: "Certificate in Frontend Engineering (2022–2023)",
  },
  {
    name: "Amalitech Ghana",
    href: "https://amalitech.com",
    sublabel: "Certified AWS Cloud Practitioner (2024)",
  },
];

const skills = [
  "JavaScript (ES6+)",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "WordPress",
  "Supabase",
  "Firebase",
  "REST APIs",
  "AWS Services",
  "Git",
  "UI/UX Design",
  "Performance Optimization",
  "Responsive Web Design",
];
