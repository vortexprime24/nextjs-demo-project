import CurrentUser from "@/components/CurrentUser";

export default function Home() {
  return (
    <header className="w-screen h-[400px] bg-blue-500 flex items-center justify-center">
      <CurrentUser isHome username="_ItzJosh" />
    </header>
  );
}
