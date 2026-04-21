import RevealInit from "@/components/RevealInit";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RevealInit />
      {children}
    </>
  );
}
