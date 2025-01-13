import { UserData } from "@/types/types";

export async function fetchAllUsers(): Promise<UserData[] | undefined> {
  try {
    const response = await fetch("/api/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return undefined;
  }
}
