import CurrentUser from "@/components/CurrentUser";
import { use } from "react";
export default function UserPage({ params }: { params: { username: string } }) {
  const { username }: any = use(params as any);
  return (
    <header className="w-screen h-[400px] bg-blue-500 flex items-center justify-center">
      <CurrentUser username={username} />
    </header>
  );
}
