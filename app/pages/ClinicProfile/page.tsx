// app/page.tsx

import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
        Meet Your Friendly Dentist!
      </h1>

      <Image
        src="/upload/Dentist.png"
        alt="Dentist illustration"
        width={300}
        height={300}
        className="rounded-2xl shadow-lg"
        priority
      />

      <p className="mt-4 text-gray-700 dark:text-gray-300 text-center max-w-md">
        Your smile is in good hands! This illustration represents a happy dentist ready to help you maintain a healthy smile.
      </p>
    </main>
  );
}
