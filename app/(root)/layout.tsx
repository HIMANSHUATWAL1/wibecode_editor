import { Metadata } from "next";


// for SEO purpose
export const metadata: Metadata = {
  title: {
    template: "VibeCode - Editor",
    default: "Code Editor For vibeCoders - VibeCode",
  },
};



export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/** Header */}

      {/** Background effect and grid */}
      {/** main */}
      {/**footer */}
    </>
  );
}
