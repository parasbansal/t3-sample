import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "@/server/db/schema";

const sql = postgres();

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql, { schema });
