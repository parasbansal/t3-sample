import "server-only";

import { db } from "@/server/db";

import { type User } from "@/lib/user";

import { users } from "./db/schema";

export const getUsers = async () => await db.query.users.findMany();

export const addUser = async (user: User) =>
  await db.insert(users).values({ name: user.name, email: user.email });
