import React from "react";

export function Title({ title }: { title: string }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight sm:px-6 py-4">
      {title}
    </h1>
  );
}
