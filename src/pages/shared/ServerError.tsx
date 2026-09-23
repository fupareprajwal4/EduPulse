import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { ServerCrash } from "lucide-react";

export function ServerError() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
      <ServerCrash className="h-12 w-12 text-danger-500" />
      <h1 className="text-6xl font-extrabold tracking-tight text-foreground">500</h1>
      <p className="max-w-sm text-muted-foreground">Something went wrong on our end. Our team has been notified — try refreshing in a moment.</p>
      <div className="mt-2 flex gap-3">
        <Button variant="secondary" onClick={() => window.location.reload()}>Refresh</Button>
        <Link to="/"><Button>Back to home</Button></Link>
      </div>
    </div>
  );
}
