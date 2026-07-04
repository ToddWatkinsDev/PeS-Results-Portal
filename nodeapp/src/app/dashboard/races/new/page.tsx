import Link from "next/link";
import Button from "@/presentation/components/ui/button";
import Card from "@/presentation/components/ui/card";
import Input from "@/presentation/components/ui/input";
import Select from "@/presentation/components/ui/select";

export default function NewRacePage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-primary)]">
          Create Race
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
          Start a new race
        </h1>
        <p className="max-w-2xl text-[color:var(--color-text-muted)]">
          Set up the race details so results can be recorded manually later.
        </p>
      </section>

      <Card className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-6">
        <form className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-[color:var(--color-text)]"
            >
              Race name
            </label>
            <Input id="name" placeholder="Spring Series Round 2" />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="slug"
              className="text-sm font-medium text-[color:var(--color-text)]"
            >
              Slug
            </label>
            <Input id="slug" placeholder="spring-series-round-2" />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="visibility"
              className="text-sm font-medium text-[color:var(--color-text)]"
            >
              Visibility
            </label>
            <Select id="visibility" defaultValue="public">
              <option value="public">Public</option>
              <option value="private">Private</option>
            </Select>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button type="submit">Create race</Button>
            <Button variant="outline" asChild>
              <Link href="/dashboard/races">Cancel</Link>
            </Button>
          </div>
        </form>
      </Card>
    </main>
  );
}