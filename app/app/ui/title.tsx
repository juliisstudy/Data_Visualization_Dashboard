import React from "react";

export function Title({ title }: { title: string }) {
  return (
    <h1 className="border border-blue-400 pt-0 text-4xl font-bold tracking-tight sm:px-6 py-4 sm:pt-4">
      {title}
    </h1>
  );
}
