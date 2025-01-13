import CurrentUser from "@/components/CurrentUser";

type Params = Promise<{ username: string }>;

export default async function UserPage(props: { params: Params }) {
  const params = await props.params;
  const username = params.username;
  return (
    <header className="w-screen h-[400px] bg-blue-500 flex items-center justify-center">
      <CurrentUser username={username} />
    </header>
  );
}
