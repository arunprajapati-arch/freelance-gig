import { PrismaClient } from "./generated/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Clear existing data
  await prisma.savedProduct.deleteMany();
  await prisma.follow.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  console.log("🧹 Cleared existing data");

  // Create manufacturers
  const manufacturers = await Promise.all([
    prisma.user.create({
      data: {
        email: "arun@textilepro.com",
        name: "Arun Prajapati",
        username: "arunprajapati",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        type: "MANUFACTURER",
        createdAt: new Date("2024-01-15"),
        updatedAt: new Date("2024-01-15"),
      },
    }),
    prisma.user.create({
      data: {
        email: "priya@fashioncraft.com",
        name: "Priya Sharma",
        username: "priyasharma",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b637?w=150&h=150&fit=crop&crop=face",
        type: "MANUFACTURER",
        createdAt: new Date("2024-01-20"),
        updatedAt: new Date("2024-01-20"),
      },
    }),
    prisma.user.create({
      data: {
        email: "rajesh@urbanstyle.com",
        name: "Rajesh Kumar",
        username: "rajeshkumar",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        type: "MANUFACTURER",
        createdAt: new Date("2024-02-01"),
        updatedAt: new Date("2024-02-01"),
      },
    }),
    prisma.user.create({
      data: {
        email: "meera@silkweave.com",
        name: "Meera Patel",
        username: "meerapatel",
        emailVerified: false,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        type: "MANUFACTURER",
        createdAt: new Date("2024-02-10"),
        updatedAt: new Date("2024-02-10"),
      },
    }),
    prisma.user.create({
      data: {
        email: "vikram@cottoncraft.com",
        name: "Vikram Singh",
        username: "vikramsingh",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        type: "MANUFACTURER",
        createdAt: new Date("2024-02-15"),
        updatedAt: new Date("2024-02-15"),
      },
    }),
  ]);

  console.log(`👥 Created ${manufacturers.length} manufacturers`);

  // Create clients
  const clients = await Promise.all([
    prisma.user.create({
      data: {
        email: "john@example.com",
        name: "John Doe",
        username: "johndoe",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face",
        type: "CLIENT",
        createdAt: new Date("2024-03-01"),
        updatedAt: new Date("2024-03-01"),
      },
    }),
    prisma.user.create({
      data: {
        email: "sarah@example.com",
        name: "Sarah Johnson",
        username: "sarahjohnson",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        type: "CLIENT",
        createdAt: new Date("2024-03-05"),
        updatedAt: new Date("2024-03-05"),
      },
    }),
  ]);

  console.log(`👤 Created ${clients.length} clients`);

  // Create products for each manufacturer
  const products = [];

  // Arun's products (Textile Pro)
  const arunProducts = await Promise.all([
    prisma.product.create({
      data: {
        name: "Premium Cotton T-Shirt",
        description: "100% organic cotton, comfortable fit, perfect for daily wear",
        price: 899,
        color: "BLUE",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        type: "TSHIRT",
        userId: manufacturers[0].id,
        createdAt: new Date("2024-03-10"),
        updatedAt: new Date("2024-03-10"),
      },
    }),
    prisma.product.create({
      data: {
        name: "Classic White Shirt",
        description: "Formal cotton shirt, wrinkle-free, professional look",
        price: 1299,
        color: "BLUE",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
        type: "SHIRT",
        userId: manufacturers[0].id,
        createdAt: new Date("2024-03-12"),
        updatedAt: new Date("2024-03-12"),
      },
    }),
    prisma.product.create({
      data: {
        name: "Comfort Fit Jeans",
        description: "Stretchable denim, modern fit, durable quality",
        price: 1899,
        color: "BLUE",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
        type: "JEANS",
        userId: manufacturers[0].id,
        createdAt: new Date("2024-03-15"),
        updatedAt: new Date("2024-03-15"),
      },
    }),
    prisma.product.create({
      data: {
        name: "Sports T-Shirt",
        description: "Moisture-wicking fabric, athletic fit, breathable material",
        price: 699,
        color: "RED",
        image: "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=400&h=400&fit=crop",
        type: "TSHIRT",
        userId: manufacturers[0].id,
        createdAt: new Date("2024-03-18"),
        updatedAt: new Date("2024-03-18"),
      },
    }),
    prisma.product.create({
      data: {
        name: "Polo Shirt",
        description: "Classic polo design, cotton blend, collar design",
        price: 999,
        color: "GREEN",
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
        type: "SHIRT",
        userId: manufacturers[0].id,
        createdAt: new Date("2024-03-20"),
        updatedAt: new Date("2024-03-20"),
      },
    }),
  ]);

  // Priya's products (Fashion Craft)
  const priyaProducts = await Promise.all([
    prisma.product.create({
      data: {
        name: "Designer Kurti",
        description: "Elegant printed kurti, comfortable cotton fabric",
        price: 1499,
        color: "PINK",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
        type: "OTHER",
        userId: manufacturers[1].id,
        createdAt: new Date("2024-03-08"),
        updatedAt: new Date("2024-03-08"),
      },
    }),
    prisma.product.create({
      data: {
        name: "Floral Print Dress",
        description: "Beautiful floral print, summer collection, light fabric",
        price: 1799,
        color: "PINK",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop",
        type: "OTHER",
        userId: manufacturers[1].id,
        createdAt: new Date("2024-03-11"),
        updatedAt: new Date("2024-03-11"),
      },
    }),
    prisma.product.create({
      data: {
        name: "Skinny Fit Jeans",
        description: "Women's skinny fit jeans, stretch denim, trendy design",
        price: 1699,
        color: "BLUE",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop",
        type: "JEANS",
        userId: manufacturers[1].id,
        createdAt: new Date("2024-03-14"),
        updatedAt: new Date("2024-03-14"),
      },
    }),
  ]);

  // Rajesh's products (Urban Style)
  const rajeshProducts = await Promise.all([
    prisma.product.create({
      data: {
        name: "Urban Hoodie",
        description: "Comfortable hoodie, urban design, warm and cozy",
        price: 2299,
        color: "YELLOW",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
        type: "OTHER",
        userId: manufacturers[2].id,
        createdAt: new Date("2024-03-09"),
        updatedAt: new Date("2024-03-09"),
      },
    }),
    prisma.product.create({
      data: {
        name: "Cargo Pants",
        description: "Multi-pocket cargo pants, utility style, durable fabric",
        price: 1999,
        color: "BROWN",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
        type: "OTHER",
        userId: manufacturers[2].id,
        createdAt: new Date("2024-03-13"),
        updatedAt: new Date("2024-03-13"),
      },
    }),
  ]);

  // Meera's products (Silk Weave)
  const meeraProducts = await Promise.all([
    prisma.product.create({
      data: {
        name: "Silk Saree",
        description: "Pure silk saree, traditional design, wedding collection",
        price: 4999,
        color: "PURPLE",
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e3?w=400&h=400&fit=crop",
        type: "OTHER",
        userId: manufacturers[3].id,
        createdAt: new Date("2024-03-07"),
        updatedAt: new Date("2024-03-07"),
      },
    }),
  ]);

  // Vikram's products (Cotton Craft)
  const vikramProducts = await Promise.all([
    prisma.product.create({
      data: {
        name: "Casual T-Shirt",
        description: "Casual cotton t-shirt, everyday wear, soft fabric",
        price: 599,
        color: "ORANGE",
        image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
        type: "TSHIRT",
        userId: manufacturers[4].id,
        createdAt: new Date("2024-03-16"),
        updatedAt: new Date("2024-03-16"),
      },
    }),
    prisma.product.create({
      data: {
        name: "Linen Shirt",
        description: "Premium linen shirt, breathable, summer collection",
        price: 1599,
        color: "BLUE",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
        type: "SHIRT",
        userId: manufacturers[4].id,
        createdAt: new Date("2024-03-19"),
        updatedAt: new Date("2024-03-19"),
      },
    }),
  ]);

  const allProducts = [...arunProducts, ...priyaProducts, ...rajeshProducts, ...meeraProducts, ...vikramProducts];
  products.push(...allProducts);

  console.log(`📦 Created ${products.length} products`);

  // Create follow relationships (clients following manufacturers)
  const follows = await Promise.all([
    // John follows multiple manufacturers
    prisma.follow.create({
      data: {
        followerId: clients[0].id,
        followingId: manufacturers[0].id, // Arun
      },
    }),
    prisma.follow.create({
      data: {
        followerId: clients[0].id,
        followingId: manufacturers[1].id, // Priya
      },
    }),
    prisma.follow.create({
      data: {
        followerId: clients[0].id,
        followingId: manufacturers[2].id, // Rajesh
      },
    }),
    prisma.follow.create({
      data: {
        followerId: clients[0].id,
        followingId: manufacturers[4].id, // Vikram
      },
    }),
    // Sarah follows some manufacturers
    prisma.follow.create({
      data: {
        followerId: clients[1].id,
        followingId: manufacturers[1].id, // Priya
      },
    }),
    prisma.follow.create({
      data: {
        followerId: clients[1].id,
        followingId: manufacturers[3].id, // Meera
      },
    }),
  ]);

  console.log(`🔗 Created ${follows.length} follow relationships`);

  // Create saved products
  const savedProducts = await Promise.all([
    // John saves some products
    prisma.savedProduct.create({
      data: {
        userId: clients[0].id,
        productId: arunProducts[0].id, // Premium Cotton T-Shirt
      },
    }),
    prisma.savedProduct.create({
      data: {
        userId: clients[0].id,
        productId: priyaProducts[1].id, // Floral Print Dress
      },
    }),
    prisma.savedProduct.create({
      data: {
        userId: clients[0].id,
        productId: rajeshProducts[0].id, // Urban Hoodie
      },
    }),
    // Sarah saves some products
    prisma.savedProduct.create({
      data: {
        userId: clients[1].id,
        productId: priyaProducts[0].id, // Designer Kurti
      },
    }),
    prisma.savedProduct.create({
      data: {
        userId: clients[1].id,
        productId: meeraProducts[0].id, // Silk Saree
      },
    }),
  ]);

  console.log(`💾 Created ${savedProducts.length} saved products`);

  console.log("✅ Database seeding completed successfully!");
  console.log(`
📊 Summary:
- ${manufacturers.length} manufacturers created
- ${clients.length} clients created  
- ${products.length} products created
- ${follows.length} follow relationships created
- ${savedProducts.length} saved products created

🔑 Test accounts:
Manufacturers:
- arun@textilepro.com (Arun Prajapati) - 5 products
- priya@fashioncraft.com (Priya Sharma) - 3 products  
- rajesh@urbanstyle.com (Rajesh Kumar) - 2 products
- meera@silkweave.com (Meera Patel) - 1 product
- vikram@cottoncraft.com (Vikram Singh) - 2 products

Clients:
- john@example.com (John Doe) - follows 4 manufacturers
- sarah@example.com (Sarah Johnson) - follows 2 manufacturers
  `);
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 