import { readFile } from "node:fs/promises";
import { test } from "node:test";
import assert from "node:assert/strict";

test("travel memories page is implemented with full mock sections", async () => {
  const [pageSource, dataSource, typeSource] = await Promise.all([
    readFile("app/travel-memories/page.tsx", "utf8"),
    readFile("data/mock/travel-memories.ts", "utf8"),
    readFile("types/phase-two.ts", "utf8"),
  ]);

  assert.equal(
    pageSource.includes("PlaceholderPage"),
    false,
    "Travel & Memories should use a bespoke page instead of the generic placeholder.",
  );

  for (const section of [
    "overview",
    "countriesVisited",
    "citiesLivedIn",
    "favoritePlaces",
    "plannedTrips",
    "bucketListDestinations",
    "memoryArchive",
    "photoPlaceholders",
    "videoPlaceholders",
    "letters",
    "voiceNotes",
    "favoriteQuotes",
    "importantMemories",
    "onThisDay",
    "travelMap",
  ]) {
    assert.ok(
      dataSource.includes(section),
      `Mock data should include ${section}.`,
    );
  }

  assert.equal(
    typeSource.includes("TravelMemoriesPageData = PhaseTwoPlaceholderData"),
    false,
    "TravelMemoriesPageData should describe the full page data shape.",
  );
});
