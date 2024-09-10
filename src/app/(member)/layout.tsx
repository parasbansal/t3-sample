import TopNav from "@/components/TopNav";

type Props = {
  children: React.ReactNode;
};

export default async function MemberLayout({ children }: Props) {
  return <div className="px-4 py-2">{children}</div>;
}
