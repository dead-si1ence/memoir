import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-5">
        <h1 className="text-4xl font-bold">Welcome to Memoir</h1>
        <Button className="mt-4">Get Started</Button>
        <ModeToggle />
      </div>
    </main>
  );
}
