type ButtonBodyProps = {
  children: React.ReactNode;
};

export default function ButtonBody({ children }: ButtonBodyProps) {
  return <span className="text-style-lg">{children}</span>;
}
