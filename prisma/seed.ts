import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { createProject } from "~/models/project.server";

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await createProject({
    title: 'Hello World',
    slug: 'hello-world',
    body: 'Hello World. I am a project. Thanks for checking me out',
    image: "https://via.placeholder.com/150",
    link: "https://github.com/travissaylor",
    codeLink: "https://github.com/travissaylor"
  })

  await createProject({
    title: 'Foo Bar',
    slug: 'foo-bar',
    body: 'Foo Bar Foo Bar Foo Bar Foo Bar',
    image: "https://via.placeholder.com/150",
    link: "https://github.com/travissaylor",
    codeLink: "https://github.com/travissaylor"
  })

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
