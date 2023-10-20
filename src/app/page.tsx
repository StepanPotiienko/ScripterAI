import TypeWriterTitle from "@/components/TypeWriterTitle";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r title-page-gradient min-h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-7xl text-center text-white">
          <span className="title-gradient" style={{ userSelect: "none" }}>
            AI Script Writer
          </span>
          <span style={{ userSelect: "none" }}>🧠</span>
        </h1>
        <div className="mt-4"></div>
        <h2
          className="font-semibold text-3xl text-center"
          style={{ color: "#fff", textShadow: "2px 2px 2px #000" }}
        >
          Taking notes has never been so beautiful.
        </h2>
        <div className="mt-8"></div>
        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button className="bg-green-600 p-6 btn">
              Get started
              <ArrowRight className="ml-2 w-5 h-5" strokeWidth={5} />
            </Button>
          </Link>
        </div>
      </div>
      <footer className="absolute" style={{ bottom: "0" }}>
        <p className="text-center flex items-center text-white align-bottom ml-2">
          &copy; Was made with love by Stepan Potiienko.
          <Link
            href={"https://github.com/StepanPotiienko"}
            style={{
              textDecoration: "underline",
              fontWeight: "800",
              marginLeft: "0.25vw",
            }}
          >
            Github
          </Link>
        </p>
      </footer>
    </div>
  );
}
