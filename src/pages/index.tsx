import { Inter } from "next/font/google";
import { HomPage } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <HomPage />
    </main>
  );
}
