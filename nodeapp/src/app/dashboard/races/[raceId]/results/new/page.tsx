import Link from "next/link";
import Button from "@/presentation/components/ui/button";
import Card from "@/presentation/components/ui/card";
import Input from "@/presentation/components/ui/input";
import Select from "@/presentation/components/ui/select";
import EmptyState from "@/presentation/components/ui/empty-state";

type NewResultPageProps = {
  params: {
    raceId: string;
  };
};

export default function NewResultPage({ params }: NewResultPageProps) {
  const raceId = params.raceId;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-primary)]">
          Add Result
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
          Record a result
        </h1>
        <p className="max-w-2xl text-[color:var(--color-text-muted)]">
          Enter the race outcome manually for race {raceId}.
        </p>
      </section>

      <Card className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-6">
        <form className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="gamertag"
              className="text-sm font-medium text-[color:var(--color-text)]"
            >
              Gamer tag
            </label>
            <Input id="gamertag" placeholder="SailorOne" />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="position"
              className="text-sm font-medium text-[color:var(--color-text)]"
            >
              Finishing position
            </label>
            <Input id="position" type="number" placeholder="1" />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="time"
              className="text-sm font-medium text-[color:var(--color-text)]"
            >
              Race time
            </label>
            <Input id="time" placeholder="12:41" />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="penalties"
              className="text-sm font-medium text-[color:var(--color-text)]"
            >
              Penalties
            </label>
            <Input id="penalties" type="number" placeholder="0" />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="source"
              className="text-sm font-medium text-[color:var(--color-text)]"
            >
              Source
            </label>
            <Select id="source" defaultValue="manual">
              <option value="manual">Manual</option>
              <option value="imported">Imported</option>
            </Select>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button type="submit">Save result</Button>
            <Button variant="outline" asChild>
              <Link href={`/dashboard/races/${raceId}`}>Cancel</Link>
            </Button>
          </div>
        </form>
      </Card>

      <EmptyState
        title="Result entry shell is ready"
        description="This page is ready for the full manual entry workflow in Phase 2."
      />
    </main>
  );
}