import { db } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const users = await db.query.users.findMany();

  console.log(users);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
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
    </main>
  );
}
