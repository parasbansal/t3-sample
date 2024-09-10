import React from "react";
import { db } from "@/server/db";

export default async function page() {
  const users = await db.query.users.findMany();

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{new Date(user.createdAt).toISOString()}</td>
            <td>
              {user.updatedAt ? new Date(user.updatedAt).toISOString() : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
