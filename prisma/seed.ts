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
  await prisma.recommendation.createMany({
    data: [
      {
        typeId: 1,
        description:
          'Recycling Tip: Separate glass by color to enhance recycling efficiency, as different colors may have distinct chemical compositions.',
      },
      {
        typeId: 1,
        description:
          'DIY Decor: Embrace do-it-yourself (DIY) projects by upcycling glass containers into aesthetically pleasing decorative items for home or garden use.',
      },
      {
        typeId: 1,
        description:
          'Bottle Return Programs: Participate in bottle return programs where available, contributing to the circular economy by supporting glass recycling initiatives.',
      },
      {
        typeId: 1,
        description:
          'Glass Mulch: Investigate the use of crushed glass as mulch in gardening, providing an eco-friendly alternative to traditional mulching materials.',
      },
      {
        typeId: 1,
        description:
          'Reuse: Advocate for the reuse of glass jars for food storage, organizing small items, or crafting, minimizing single-use packaging.',
      },
      {
        typeId: 2,
        description:
          'Proper Disposal: Educate communities about the proper disposal of medical waste, emphasizing the use of designated collection sites and containers.',
      },
      {
        typeId: 2,
        description:
          'Education: Raise awareness about safe medical waste disposal practices, emphasizing the importance of community involvement in healthcare-related waste management.',
      },
      {
        typeId: 2,
        description:
          'Medication Take-Back: Actively participate in medication take-back programs to ensure the proper disposal of unused or expired medications, preventing environmental contamination.',
      },
      {
        typeId: 2,
        description:
          'Sharps Containers: Encourage the use of puncture-resistant containers for the disposal of sharp medical waste, prioritizing community safety.',
      },
      {
        typeId: 2,
        description:
          'Medical Waste Bins: Advocate for the placement of medical waste bins in public spaces to facilitate responsible disposal.',
      },
      {
        typeId: 3,
        description:
          'Recycling Tip: Separate ferrous and non-ferrous metals before recycling to optimize the efficiency of metal recycling processes.',
      },
      {
        typeId: 3,
        description:
          'Scrap Metal Art: Inspire creativity by exploring artistic projects that repurpose scrap metal into sculptures, installations, or functional art pieces.',
      },
      {
        typeId: 3,
        description:
          'Local Scrap Yards: Support local scrap yards that prioritize sustainable metal recycling practices, contributing to the local circular economy.',
      },
      {
        typeId: 3,
        description:
          'Metal Sculptures: Foster artistic expression by creating sculptures or art installations from scrap metal, showcasing the potential beauty in repurposed materials.',
      },
      {
        typeId: 3,
        description:
          'Magnet Test: Educate individuals about distinguishing between ferrous and non-ferrous metals using a magnet, promoting informed recycling practices.',
      },
      {
        typeId: 4,
        description:
          'Recycling Tip: Remove contaminants such as staples or plastic before recycling paper to maintain the quality of recycled paper products.',
      },
      {
        typeId: 4,
        description:
          'Paperless Options: Embrace digital documentation practices to reduce paper consumption, considering electronic alternatives for communication and record-keeping.',
      },
      {
        typeId: 4,
        description:
          'Paper Crafts: Engage in creative reuse by repurposing paper into DIY crafts, including handmade cards, origami, or papier-mâché projects.',
      },
      {
        typeId: 4,
        description:
          'Shredded Paper: Explore alternative uses for shredded paper, such as packaging material for delicate items during shipping or as a component in composting.',
      },
      {
        typeId: 4,
        description:
          'Creative Reuse: Encourage creative reuse by turning old newspapers into unique gift wrapping or origami projects, promoting resourcefulness.',
      },
      {
        typeId: 5,
        description:
          'Recycling Tip: Understand local recycling guidelines for plastic and ensure adherence to proper sorting and preparation practices for efficient recycling.',
      },
      {
        typeId: 5,
        description:
          'Reduce Single-Use: Minimize single-use plastic consumption by adopting reusable alternatives, such as water bottles, bags, and containers, contributing to plastic waste reduction.',
      },
      {
        typeId: 5,
        description:
          'DIY Planters: Upcycle plastic containers into planters for gardening projects, combining sustainability with a creative approach to repurposing.',
      },
      {
        typeId: 5,
        description:
          'Eco-Bricks: Engage in eco-brick initiatives by compacting plastic waste into bottles, contributing to sustainable construction practices and waste reduction.',
      },
      {
        typeId: 5,
        description:
          'Beach Cleanups: Participate in beach cleanup efforts to prevent plastic pollution, promoting environmental stewardship and community engagement.',
      },
      {
        typeId: 6,
        description:
          'Donate or Sell: Extend the life of gently-used textiles by donating or selling them to second-hand stores, reducing textile waste and providing affordable clothing options.',
      },
      {
        typeId: 6,
        description:
          'Clothing Swaps: Organize clothing swap events within communities, fostering a culture of sustainable fashion and encouraging the exchange of pre-loved garments.',
      },
      {
        typeId: 6,
        description:
          'Repurposing: Transform old textiles into practical items through repurposing projects, such as quilts, bags, or cleaning rags, promoting resourcefulness.',
      },
      {
        typeId: 6,
        description:
          'Textile Recycling Bins: Utilize designated textile recycling bins for worn-out items, ensuring proper disposal channels for textiles that cannot be repurposed.',
      },
      {
        typeId: 6,
        description:
          'Educational Workshops: Conduct educational workshops on textile upcycling and repurposing, empowering individuals with the skills to create sustainable and unique textile products.',
      },
      {
        typeId: 7,
        description:
          'Recycling Tip: Utilize certified e-waste recycling facilities that adhere to environmentally friendly practices and proper disposal techniques, ensuring the safe handling of electronic components.',
      },
      {
        typeId: 7,
        description:
          'Donation: Prioritize donating functional electronic devices to community organizations, schools, or individuals in need, extending the life of still-useful equipment.',
      },
      {
        typeId: 7,
        description:
          'Data Wiping: Before recycling, perform thorough data wiping or destruction on old devices to protect sensitive information from potential misuse.',
      },
      {
        typeId: 7,
        description:
          'Repair: Explore local repair services or DIY repair options for malfunctioning electronic equipment, promoting a culture of repair and reuse.',
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
