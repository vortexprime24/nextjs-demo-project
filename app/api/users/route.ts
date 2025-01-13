import { NextResponse } from "next/server";

export async function GET() {
  // later data can be fetched from server db respectively
  const users = [
    {
      username: "_ItzJosh",
      avatarUrl: "https://mc-heads.net/avatar/_ItzJosh",
    },
    {
      username: "NotDewier",
      avatarUrl: "https://mc-heads.net/avatar/NotDewier",
    },
    {
      username: "Steve",
      avatarUrl: "https://mc-heads.net/avatar/Steve",
    },
    {
      username: "PiggyPlex",
      avatarUrl: "https://mc-heads.net/avatar/PiggyPlex",
    },
    {
      username: "iFunTime",
      avatarUrl: "https://mc-heads.net/avatar/iFunTime",
    },
    {
      username: "SkinnyGiraffe99",
      avatarUrl: "https://mc-heads.net/avatar/SkinnyGiraffe99",
    },
    {
      username: "OrangeFound",
      avatarUrl: "https://mc-heads.net/avatar/OrangeFound",
    },
    {
      username: "oBendy",
      avatarUrl: "https://mc-heads.net/avatar/oBendy",
    },
    {
      username: "ohpey",
      avatarUrl: "https://mc-heads.net/avatar/ohpey",
    },
    {
      username: "3sayt",
      avatarUrl: "https://mc-heads.net/avatar/3sayt",
    },
  ];

  return NextResponse.json(users);
}
