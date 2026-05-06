import { readFile } from "node:fs/promises";
import { test } from "node:test";
import assert from "node:assert/strict";

test("future self page is implemented with full identity sections", async () => {
  const [pageSource, dataSource, typeSource] = await Promise.all([
    readFile("app/future-self/page.tsx", "utf8"),
    readFile("data/mock/future-self.ts", "utf8"),
    readFile("types/phase-two.ts", "utf8"),
  ]);

  assert.equal(
    pageSource.includes("PlaceholderPage"),
    false,
    "Future Self should use a bespoke page instead of the generic placeholder.",
  );

  for (const section of [
    "overview",
    "oneYearSelf",
    "fiveYearSelf",
    "tenYearVision",
    "idealDay",
    "dreamLifestyle",
    "coreValues",
    "personalRules",
    "personToBecome",
    "letterToFutureMe",
    "letterFromPastMe",
    "legacyStatement",
  ]) {
    assert.ok(
      dataSource.includes(section),
      `Mock data should include ${section}.`,
    );
  }

  assert.equal(
    typeSource.includes("FutureSelfPageData = PhaseTwoPlaceholderData"),
    false,
    "FutureSelfPageData should describe the full page data shape.",
  );
});
