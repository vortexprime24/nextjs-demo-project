"use client";

import { useState, useEffect } from "react";
import { fetchAllUsers } from "@/actions/users";
import { UserData } from "@/types/types";

export function useUserData() {
  const [userData, setUserData] = useState<UserData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem("userData");
      if (cachedData) {
        setUserData(JSON.parse(cachedData));
      } else {
        const data = await fetchAllUsers();
        if (data) {
          setUserData(data);
          localStorage.setItem("userData", JSON.stringify(data));
        }
      }
    };

    fetchData();
  }, []);

  return userData;
}

export function useUser(username: string) {
  const userData = useUserData();
  return userData?.find((user) => user.username === username)
    ? userData?.find((user) => user.username === username)
    : undefined;
}
