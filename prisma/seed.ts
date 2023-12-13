import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.type.createMany({
    data: [
      {
        name: 'Glass',
      },
      {
        name: 'Medical',
      },
      {
        name: 'Metal',
      },
      {
        name: 'Paper',
      },
      {
        name: 'Plastic',
      },
      {
        name: 'Textile',
      },
      {
        name: 'e-Waste',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
