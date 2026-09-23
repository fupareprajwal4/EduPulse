import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Compass } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
      <Compass className="h-12 w-12 text-primary-500" />
      <h1 className="text-6xl font-extrabold tracking-tight text-foreground">404</h1>
      <p className="max-w-sm text-muted-foreground">This page took a wrong turn somewhere. Let's get you back to familiar ground.</p>
      <Link to="/"><Button className="mt-2">Back to home</Button></Link>
    </div>
  );
}
