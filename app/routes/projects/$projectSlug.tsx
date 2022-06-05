import { useCatch, useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/server-runtime";
import { getProjectBySlug, Project } from "~/models/project.server";

type LoaderData = {
  project: Project;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const project = await getProjectBySlug({ slug: params.projectSlug ?? "" });
  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }
  return json<LoaderData>({ project });
};

export default function ProjectDetailsPage() {
  const { project } = useLoaderData() as LoaderData;

  return (
    <div>
      <img src={project.image} alt={project.title} />
      <h1>{project.title}</h1>
      <p>{project.body}</p>
      {project.link && <a href={project.link}>Check it out</a>}
      {project.codeLink && <a href={project.codeLink}>View the code</a>}
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div>Project not found</div>;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
