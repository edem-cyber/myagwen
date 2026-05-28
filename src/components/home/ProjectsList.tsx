import { ArrowUpRight } from "@/components/icons/ArrowUpRight";
import {
  List,
  ListItem,
  ListItemLabel,
  ListItemSubLabel,
} from "@/components/shared/ListComponents";

const projects = [
  {
    name: "Ultimate Pixels",
    href: "https://photography-gh.vercel.app/",
    description: "A photography portfolio for high-resolution image display",
    external: true,
  },
  {
    name: "2K Construction",
    href: "https://2kconstruction.com.gh/",
    description: "A modern construction company website",
    external: true,
  },
  {
    name: "Frontend Arena",
    href: "https://thefrontendarena.vercel.app/",
    description: "An interactive quiz platform for frontend developers",
    external: true,
  },
  {
    name: "Be A Solution",
    href: "https://beasolution.vercel.app/",
    description: "Educational resources for community development",
    external: true,
  },
  {
    name: "HN",
    href: "/hn",
    description: "A minimal hacker news reader",
    external: false,
  },
  {
    name: "Stack",
    href: "/stack",
    description: "My favorite apps and tools",
    external: false,
  },
  {
    name: "Sites",
    href: "/sites",
    description: "A curated list of well-designed websites",
    external: false,
  },
  {
    name: "Listening",
    href: "/listening",
    description: "Music in rotation",
    external: false,
  },
];

interface ProjectsListProps {
  exclude?: string[];
}

export function ProjectsList({ exclude = [] }: ProjectsListProps) {
  const filteredProjects = projects.filter((project) => !exclude.includes(project.name));

  return (
    <List>
      {filteredProjects.map(({ name, href, description, external }) => (
        <ListItem
          key={name}
          href={href}
          className="flex-col items-start gap-0 sm:flex-row sm:items-center sm:gap-2"
        >
          <div className="flex items-center gap-2">
            <ListItemLabel className="sm:line-clamp-1">{name}</ListItemLabel>
            {external && (
              <ListItemSubLabel className="shrink-0 font-mono">
                <ArrowUpRight className="text-primary" />
              </ListItemSubLabel>
            )}
          </div>
          <ListItemSubLabel className="flex-1">{description}</ListItemSubLabel>
        </ListItem>
      ))}
    </List>
  );
}
