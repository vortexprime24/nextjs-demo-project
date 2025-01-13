import CurrentUser from "@/components/CurrentUser";
export default async function UserPage({
  params,
}: {
  params: { username: string };
}) {
  return (
    <header className="w-screen h-[400px] bg-blue-500 flex items-center justify-center">
      <CurrentUser username={params.username} />
    </header>
  );
}
