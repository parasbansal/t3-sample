import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import NewUser from "@/components/NewUser";

import { getUsers } from "@/server/user-queries";

export default async function page() {
  const usersData = await getUsers();

  return (
    <div className="flex flex-col">
      <NewUser />
      <Table>
        <TableCaption>A list of users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usersData.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{new Date(user.createdAt).toISOString()}</TableCell>
              <TableCell>E D</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
