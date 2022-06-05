import { Prisma, PrismaPromise, Project } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Project } from "@prisma/client";

export function getProjects(
  skip: number = 0,
  take: number = 10
): PrismaPromise<Project[]> {
  return prisma.project.findMany({ skip, take });
}

export function getProject({
  id,
}: Pick<Project, "id">): PrismaPromise<Project | null> {
  return prisma.project.findUnique({
    where: {
      id,
    },
  });
}

export function getProjectBySlug({
  slug,
}: Pick<Project, "slug">): PrismaPromise<Project | null> {
  return prisma.project.findFirst({
    where: {
      slug,
    },
  });
}

export function createProject({
  title,
  slug,
  body,
  image,
  link,
  codeLink,
}: Pick<Project, "title" | "slug" | "body" | "image" | "link" | "codeLink">) {
  return prisma.project.create({
    data: {
      title,
      slug,
      body,
      image,
      link,
      codeLink,
    },
  });
}

export function deleteProject({
  id,
}: Pick<Project, "id">): PrismaPromise<Project> {
  return prisma.project.delete({ where: { id } });
}
