import { Card, CardContent } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useAuth } from "@/context/AuthContext";
import { Camera } from "lucide-react";

export function Profile() {
  const { user } = useAuth();
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Profile</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage your personal information.</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar name={user?.name || "Aditi Sharma"} size="lg" color={user?.avatarColor} />
              <button className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-surface bg-primary-600 text-white">
                <Camera className="h-3 w-3" />
              </button>
            </div>
            <div>
              <p className="text-base font-semibold text-foreground">{user?.name || "Aditi Sharma"}</p>
              <p className="text-sm text-muted-foreground">{user?.program || "B.Tech Computer Science, 3rd Year"}</p>
              <Badge variant="default" className="mt-1 capitalize">{user?.role || "student"}</Badge>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Input label="Full name" defaultValue={user?.name || "Aditi Sharma"} />
            <Input label="Email" type="email" defaultValue={user?.email || "aditi.sharma@edupulse.ai"} />
            <Input label="Program" defaultValue={user?.program || "B.Tech Computer Science"} />
            <Input label="Phone" placeholder="+91 98765 43210" />
          </div>
          <Button className="mt-6">Save changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
