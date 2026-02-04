import { neon } from "@neondatabase/serverless";

let _sql: ReturnType<typeof neon> | null = null;

export const sql = ((...args: any[]) => {
  if (!_sql) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL environment variable is not set");
    }
    _sql = neon(url);
  }
  return (_sql as any)(...args);
}) as any;

export async function initDb() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      name VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS garden_profiles (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      location VARCHAR(255),
      garden_size VARCHAR(50),
      soil_type VARCHAR(50),
      sun_exposure VARCHAR(50),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS plants (
      id SERIAL PRIMARY KEY,
      garden_profile_id INTEGER REFERENCES garden_profiles(id) ON DELETE CASCADE,
      name VARCHAR(255) NOT NULL,
      plant_type VARCHAR(100),
      planted_date DATE,
      notes TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS conversations (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      title VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      conversation_id INTEGER REFERENCES conversations(id) ON DELETE CASCADE,
      role VARCHAR(20) NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
}
