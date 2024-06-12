const { db } = require("@vercel/postgres");
const {
  subscribers,
  players,
  revenue,
  users,
} = require("../app/lib/db-data.js");
const bcrypt = require("bcrypt");

async function seedUsers(client) {
  try {
    await client.sql`DROP TABLE users`;
    console.log("drop user table");
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedPlayers(client) {
  try {
    await client.sql`DROP TABLE players`;
    console.log("drop  players");

    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS players (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "players" table`);

    const insertedPlayers = await Promise.all(
      players.map(
        (user) => client.sql`
        INSERT INTO players (id, name, email, image_url)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${user.image_url})
        ON CONFLICT (id) DO NOTHING
      `
      )
    );

    console.log(`Seeded ${insertedPlayers.length} players`);

    return {
      createTable,
      players: insertedPlayers,
    };
  } catch (error) {
    console.error("Error seeding players:", error);
    throw error;
  }
}

async function SeedSubscribers(client) {
  try {
    await client.sql`DROP TABLE subscribers`;
    console.log("drop subscribers");

    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS subscribers (
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL,        
    amount INT NOT NULL,
        status VARCHAR(255) NOT NULL,
        date DATE NOT NULL
      );
    `;

    console.log(`Created "subscribers" table`);

    const insertedSubscribers = await Promise.all(
      subscribers.map(
        (subscriber) => client.sql`
        INSERT INTO subscribers (user_id, amount,status, date)
        VALUES (${subscriber.user_id}, ${subscriber.amount}, ${subscriber.status}, ${subscriber.date})
        ON CONFLICT (id) DO NOTHING
      `
      )
    );

    console.log(`Seeded ${insertedSubscribers.length} users`);

    return {
      createTable,
      subscribers: insertedSubscribers,
    };
  } catch (error) {
    console.error("Error seeding customers:", error);
    throw error;
  }
}

async function seedRevenue(client) {
  try {
    await client.sql`DROP TABLE revenue`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS revenue (
        month VARCHAR(4) NOT NULL UNIQUE,
        revenue INT NOT NULL
      );
    `;

    console.log(`Created "revenue" table`);

    const insertedRevenue = await Promise.all(
      revenue.map(
        (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING
      `
      )
    );

    console.log(`Seeded ${insertedRevenue.length} revenue`);

    return {
      createTable,
      revenue: insertedRevenue,
    };
  } catch (error) {
    console.error("Error seeding revenue:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedUsers(client);
  await seedPlayers(client);
  await SeedSubscribers(client);
  await seedRevenue(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
