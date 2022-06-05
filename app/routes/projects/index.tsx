import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/server-runtime";
import { HeroCard } from "~/components/HeroCard";
import { getProjects, Project } from "~/models/project.server";

type LoaderData = {
  projects: Project[];
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const projects = await getProjects();

  return json<LoaderData>({ projects });
};

export default function ProjectsIndex() {
  const data = useLoaderData() as LoaderData;

  return (
    <div>
      {data.projects.map((project) => (
        <HeroCard
          title={project.title}
          exerpt={project.body.split(".")[0] + "..."}
          image={project.image}
          link={project.slug}
          key={project.id}
        />
      ))}
    </div>
  );
}
