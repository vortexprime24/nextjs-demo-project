"use client";

import { useUserData } from "@/hooks/useUserData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CurrentUser({
  isHome = false,
  username,
}: {
  isHome?: boolean;
  username?: string;
}) {
  const userData = useUserData();
  const currentUser = userData?.find((user) => user.username === username);

  if (!userData) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (!currentUser) {
    return <div className="text-center text-red-500">User not found</div>;
  }

  return (
    <Link href={isHome ? `/users/${currentUser.username}` : "#"}>
      <motion.div
        layoutId={`user-${currentUser.username}`}
        className="bg-white border-gray-200 rounded-lg shadow-md p-6 m-2 flex items-center space-x-4 cursor-pointer"
      >
        <Image
          src={currentUser.avatarUrl}
          alt={`${currentUser.username}'s avatar`}
          className={`rounded-full ${isHome ? "size-8" : "size-12"}`}
          width={32}
          height={32}
          priority
        />
        <div>
          <h2
            className={`font-semibold text-gray-800 ${
              isHome ? "text-lg" : "text-2xl"
            }`}
          >
            {currentUser.username}
          </h2>
        </div>
      </motion.div>
    </Link>
  );
}
