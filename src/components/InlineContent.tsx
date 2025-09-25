import React from "react";

type InlineContentProps = {
  children: React.ReactNode;
};

export default function InlineContent({ children }: InlineContentProps) {
  return <span className="text-style-md">{children}</span>;
}
