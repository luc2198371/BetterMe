"use client";

import { useMemo, useState } from "react";

import { Card, SectionLabel } from "@/components/ui";
import { journalDashboard } from "@/data/mock/life-os";
import { cn } from "@/lib/utils";

type JournalEntry = (typeof journalDashboard.entries)[number];

export default function JournalPage() {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedEntryId, setSelectedEntryId] = useState(
    journalDashboard.entries[0].id,
  );
  const [favoriteIds, setFavoriteIds] = useState<string[]>(
    journalDashboard.entries
      .filter((entry) => entry.favorite)
      .map((entry) => entry.id),
  );

  const filteredEntries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return journalDashboard.entries.filter((entry) => {
      const matchesTag =
        selectedTag === "All" || entry.tags.includes(selectedTag);
      const searchable = [
        entry.title,
        entry.date,
        entry.time,
        entry.mood,
        entry.prompt,
        entry.excerpt,
        entry.body,
        ...entry.tags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesTag && searchable.includes(normalizedQuery);
    });
  }, [query, selectedTag]);

  const selectedEntry =
    filteredEntries.find((entry) => entry.id === selectedEntryId) ??
    filteredEntries[0] ??
    journalDashboard.entries.find((entry) => entry.id === selectedEntryId) ??
    journalDashboard.entries[0];

  const latestMood = journalDashboard.entries[0].mood;

  return (
    <>
      <header className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-normal text-muted">
            {journalDashboard.header.eyebrow}
          </p>
          <h2 className="mt-3 font-mono text-[1.75rem] font-medium leading-tight text-foreground">
            {journalDashboard.header.title}
          </h2>
          <p className="mt-3 font-mono text-xs text-muted">
            {journalDashboard.header.dateLabel}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-[0.92rem]">
            {journalDashboard.header.description}
          </p>
        </div>

        <button
          type="button"
          className="h-11 w-full rounded-md bg-accent px-5 font-mono text-xs text-on-primary transition hover:opacity-90 sm:w-auto"
        >
          {journalDashboard.header.actionLabel}
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryMetric
          label="Total entries"
          value={`${journalDashboard.entries.length}`}
          detail="Private daily notes"
        />
        <SummaryMetric
          label="Favorites"
          value={`${favoriteIds.length}`}
          detail="Marked locally"
        />
        <SummaryMetric
          label="Active tags"
          value={`${journalDashboard.tags.length}`}
          detail="Searchable themes"
        />
        <SummaryMetric
          label="Latest mood"
          value={latestMood}
          detail={journalDashboard.entries[0].date}
        />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <Card>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <SectionLabel>Search</SectionLabel>
                <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                  Find an entry by words, mood, prompt, or tag.
                </h3>
              </div>
              <p className="font-mono text-xs text-muted">
                {filteredEntries.length} matches
              </p>
            </div>

            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search journal"
              className="mt-6 h-11 w-full rounded-md border border-border bg-background px-4 font-mono text-sm text-foreground outline-none transition placeholder:text-muted focus:border-foreground"
            />

            <div className="mt-5 flex flex-wrap gap-2">
              {["All", ...journalDashboard.tags].map((tag) => {
                const active = selectedTag === tag;

                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(tag)}
                    className={cn(
                      "rounded-sm border px-2.5 py-1.5 font-mono text-xs transition",
                      active
                        ? "border-foreground text-foreground"
                        : "border-border text-muted hover:text-foreground",
                    )}
                    aria-pressed={active}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </Card>

          <Card>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <SectionLabel>Daily journal entries</SectionLabel>
                <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                  Private notes for recall and pattern reading.
                </h3>
              </div>
              <p className="font-mono text-xs text-muted">Newest first</p>
            </div>

            {filteredEntries.length > 0 ? (
              <div className="mt-6 space-y-3">
                {filteredEntries.map((entry) => (
                  <EntryRow
                    key={entry.id}
                    entry={entry}
                    selected={entry.id === selectedEntry.id}
                    favorite={favoriteIds.includes(entry.id)}
                    onSelect={() => setSelectedEntryId(entry.id)}
                    onFavoriteToggle={() =>
                      setFavoriteIds(toggleFavorite(entry.id))
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-md border border-border bg-background p-5">
                <p className="font-mono text-sm text-foreground">
                  No entries match this search.
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Clear the search text or choose All tags to restore the full
                  journal list.
                </p>
              </div>
            )}
          </Card>
        </div>

        <div className="space-y-4">
          <PreviewPanel
            entry={selectedEntry}
            favorite={favoriteIds.includes(selectedEntry.id)}
            onFavoriteToggle={() => setFavoriteIds(toggleFavorite(selectedEntry.id))}
          />

          <Card>
            <div className="flex items-start justify-between gap-4">
              <div>
                <SectionLabel>Reflection prompts</SectionLabel>
                <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                  Questions for the next entry
                </h3>
              </div>
              <p className="font-mono text-xs text-muted">
                {journalDashboard.prompts.length} prompts
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {journalDashboard.prompts.map((prompt, index) => (
                <div
                  key={prompt}
                  className="border-t border-border pt-4 first:border-t-0 first:pt-0"
                >
                  <p className="font-mono text-sm text-foreground">
                    Prompt {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">{prompt}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

function SummaryMetric({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <Card>
      <SectionLabel>{label}</SectionLabel>
      <p className="mt-4 font-mono text-3xl font-medium text-foreground">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
    </Card>
  );
}

function EntryRow({
  entry,
  selected,
  favorite,
  onSelect,
  onFavoriteToggle,
}: {
  entry: JournalEntry;
  selected: boolean;
  favorite: boolean;
  onSelect: () => void;
  onFavoriteToggle: () => void;
}) {
  return (
    <article
      className={cn(
        "rounded-md border bg-background p-4 transition",
        selected ? "border-foreground" : "border-border",
      )}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <button
          type="button"
          onClick={onSelect}
          className="min-w-0 flex-1 text-left"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted">
              {entry.mood}
            </span>
            <span className="font-mono text-xs text-muted">
              {entry.date} / {entry.time}
            </span>
          </div>
          <h4 className="mt-3 font-mono text-lg font-medium leading-snug text-foreground">
            {entry.title}
          </h4>
          <p className="mt-2 font-mono text-xs text-muted">{entry.prompt}</p>
          <p className="mt-3 text-sm leading-6 text-muted">{entry.excerpt}</p>
        </button>

        <button
          type="button"
          onClick={onFavoriteToggle}
          className={cn(
            "h-10 shrink-0 rounded-md border px-3 font-mono text-xs transition",
            favorite
              ? "border-foreground text-foreground"
              : "border-border text-muted hover:text-foreground",
          )}
          aria-pressed={favorite}
        >
          {favorite ? "Favorite" : "Mark"}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function PreviewPanel({
  entry,
  favorite,
  onFavoriteToggle,
}: {
  entry: JournalEntry;
  favorite: boolean;
  onFavoriteToggle: () => void;
}) {
  return (
    <Card className="xl:sticky xl:top-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <SectionLabel>Entry preview</SectionLabel>
          <h3 className="mt-3 font-mono text-2xl font-medium leading-snug text-foreground">
            {entry.title}
          </h3>
          <p className="mt-3 font-mono text-xs text-muted">
            {entry.date} / {entry.time} / {entry.mood}
          </p>
        </div>

        <button
          type="button"
          onClick={onFavoriteToggle}
          className={cn(
            "h-11 rounded-md border px-4 font-mono text-xs transition",
            favorite
              ? "border-foreground text-foreground"
              : "border-border text-muted hover:text-foreground",
          )}
          aria-pressed={favorite}
        >
          {favorite ? "Favorite" : "Mark favorite"}
        </button>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <SectionLabel>Prompt</SectionLabel>
        <p className="mt-3 text-sm leading-6 text-foreground">{entry.prompt}</p>
      </div>

      <div className="mt-5 border-t border-border pt-5">
        <SectionLabel>Preview</SectionLabel>
        <p className="mt-3 text-sm leading-6 text-muted">{entry.body}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-border px-4 py-3">
          <p className="font-mono text-2xl font-medium text-foreground">
            {entry.wordCount}
          </p>
          <p className="mt-1 font-mono text-xs text-muted">words</p>
        </div>
        <div className="rounded-md border border-border px-4 py-3">
          <p className="font-mono text-2xl font-medium text-foreground">
            {favorite ? "Yes" : "No"}
          </p>
          <p className="mt-1 font-mono text-xs text-muted">favorite</p>
        </div>
      </div>
    </Card>
  );
}

function toggleFavorite(id: string) {
  return (values: string[]) =>
    values.includes(id)
      ? values.filter((value) => value !== id)
      : [...values, id];
}
