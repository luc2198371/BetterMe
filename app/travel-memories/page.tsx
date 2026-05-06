import {
  Archive,
  CalendarDays,
  Camera,
  Clapperboard,
  Compass,
  Home,
  Landmark,
  Mail,
  Map,
  MapPinned,
  Mic,
  Plane,
  Quote,
  Route,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card, SectionLabel } from "@/components/ui";
import { travelMemoriesPageData } from "@/data/mock/travel-memories";
import { cn } from "@/lib/utils";

type OverviewMetric = (typeof travelMemoriesPageData.overview)[number];
type Country = (typeof travelMemoriesPageData.countriesVisited)[number];
type City = (typeof travelMemoriesPageData.citiesLivedIn)[number];
type FavoritePlace = (typeof travelMemoriesPageData.favoritePlaces)[number];
type PlannedTrip = (typeof travelMemoriesPageData.plannedTrips)[number];
type BucketListDestination =
  (typeof travelMemoriesPageData.bucketListDestinations)[number];
type MemoryArchiveItem = (typeof travelMemoriesPageData.memoryArchive)[number];
type MediaPlaceholder =
  (typeof travelMemoriesPageData.photoPlaceholders)[number];
type VideoPlaceholder =
  (typeof travelMemoriesPageData.videoPlaceholders)[number];
type Letter = (typeof travelMemoriesPageData.letters)[number];
type VoiceNote = (typeof travelMemoriesPageData.voiceNotes)[number];
type FavoriteQuote = (typeof travelMemoriesPageData.favoriteQuotes)[number];
type ImportantMemory =
  (typeof travelMemoriesPageData.importantMemories)[number];

export default function TravelMemoriesPage() {
  return (
    <>
      <header className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md border border-border text-accent">
              <Map size={18} strokeWidth={1.8} />
            </span>
            <p className="font-mono text-xs uppercase tracking-normal text-muted">
              {travelMemoriesPageData.header.eyebrow}
            </p>
          </div>
          <h2 className="mt-4 font-mono text-[1.75rem] font-medium leading-tight text-foreground">
            {travelMemoriesPageData.header.title}
          </h2>
          <p className="mt-3 font-mono text-xs text-muted">
            {travelMemoriesPageData.header.dateLabel}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-[0.92rem]">
            {travelMemoriesPageData.header.description}
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-5 font-mono text-xs text-on-primary transition hover:opacity-90 sm:w-auto"
        >
          <Archive size={16} strokeWidth={2} />
          {travelMemoriesPageData.header.actionLabel}
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {travelMemoriesPageData.overview.map((metric) => (
          <OverviewCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <SectionHeader
            label="Travel map placeholder"
            title={travelMemoriesPageData.travelMap.title}
            icon={MapPinned}
            meta={`${travelMemoriesPageData.travelMap.markers.length} markers`}
          />
          <TravelMapPlaceholder />
          <p className="mt-5 border-t border-border pt-4 text-sm leading-6 text-muted">
            {travelMemoriesPageData.travelMap.description}
          </p>
        </Card>

        <Card>
          <SectionHeader
            label="On this day"
            title={travelMemoriesPageData.onThisDay.title}
            icon={CalendarDays}
            meta={travelMemoriesPageData.onThisDay.yearsAgo}
          />
          <div className="mt-6 rounded-md border border-border bg-background p-4">
            <p className="font-mono text-sm text-foreground">
              {travelMemoriesPageData.onThisDay.date} /{" "}
              {travelMemoriesPageData.onThisDay.place}
            </p>
            <p className="mt-4 text-sm leading-6 text-muted">
              {travelMemoriesPageData.onThisDay.memory}
            </p>
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        <ArchiveListCard
          label="Countries visited"
          title="Places that expanded the map."
          icon={Landmark}
          meta={`${travelMemoriesPageData.countriesVisited.length} countries`}
          items={travelMemoriesPageData.countriesVisited}
          renderItem={(country) => <CountryItem country={country} />}
        />
        <ArchiveListCard
          label="Cities lived in"
          title="Addresses that became chapters."
          icon={Home}
          meta={`${travelMemoriesPageData.citiesLivedIn.length} cities`}
          items={travelMemoriesPageData.citiesLivedIn}
          renderItem={(city) => <CityItem city={city} />}
        />
        <ArchiveListCard
          label="Favorite places"
          title="Small locations with disproportionate meaning."
          icon={Star}
          meta={`${travelMemoriesPageData.favoritePlaces.length} saved`}
          items={travelMemoriesPageData.favoritePlaces}
          renderItem={(place) => <FavoritePlaceItem place={place} />}
        />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <SectionHeader
            label="Trips planned"
            title="Future travel with a reason, not just an itinerary."
            icon={Plane}
            meta={`${travelMemoriesPageData.plannedTrips.length} drafts`}
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {travelMemoriesPageData.plannedTrips.map((trip) => (
              <PlannedTripCard key={trip.title} trip={trip} />
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeader
            label="Bucket-list destinations"
            title="Dream places translated into first steps."
            icon={Compass}
            meta={`${travelMemoriesPageData.bucketListDestinations.length} dreams`}
          />
          <div className="mt-6 space-y-4">
            {travelMemoriesPageData.bucketListDestinations.map(
              (destination) => (
                <BucketListItem
                  key={destination.destination}
                  destination={destination}
                />
              ),
            )}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <SectionHeader
            label="Memory archive"
            title="Moments filed by what they meant."
            icon={Archive}
            meta={`${travelMemoriesPageData.memoryArchive.length} entries`}
          />
          <div className="mt-6 space-y-4">
            {travelMemoriesPageData.memoryArchive.map((memory) => (
              <MemoryArchiveCard key={memory.title} memory={memory} />
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeader
            label="Photo placeholders"
            title="Image slots for the memories that need a frame."
            icon={Camera}
            meta={`${travelMemoriesPageData.photoPlaceholders.length} slots`}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {travelMemoriesPageData.photoPlaceholders.map((photo) => (
              <PhotoPlaceholderCard key={photo.title} photo={photo} />
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr]">
        <Card>
          <SectionHeader
            label="Video placeholders"
            title="Motion saved for texture, not performance."
            icon={Clapperboard}
            meta={`${travelMemoriesPageData.videoPlaceholders.length} slots`}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {travelMemoriesPageData.videoPlaceholders.map((video) => (
              <VideoPlaceholderCard key={video.title} video={video} />
            ))}
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
          <ArtifactCard
            label="Letters"
            title="Notes for past and future versions."
            icon={Mail}
            items={travelMemoriesPageData.letters}
            renderItem={(letter) => <LetterItem letter={letter} />}
          />
          <ArtifactCard
            label="Voice notes"
            title="Small recordings for the exact tone of a day."
            icon={Mic}
            items={travelMemoriesPageData.voiceNotes}
            renderItem={(voiceNote) => <VoiceNoteItem voiceNote={voiceNote} />}
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <SectionHeader
            label="Favorite quotes"
            title="Lines that belong in the travel notebook."
            icon={Quote}
            meta={`${travelMemoriesPageData.favoriteQuotes.length} saved`}
          />
          <div className="mt-6 space-y-4">
            {travelMemoriesPageData.favoriteQuotes.map((favoriteQuote) => (
              <FavoriteQuoteCard
                key={favoriteQuote.quote}
                favoriteQuote={favoriteQuote}
              />
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeader
            label="Important memories"
            title="The moments that still explain something."
            icon={Route}
            meta={`${travelMemoriesPageData.importantMemories.length} memories`}
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {travelMemoriesPageData.importantMemories.map((memory) => (
              <ImportantMemoryCard key={memory.title} memory={memory} />
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

function OverviewCard({ metric }: { metric: OverviewMetric }) {
  return (
    <Card>
      <SectionLabel>{metric.label}</SectionLabel>
      <p
        className={cn(
          "mt-4 font-mono text-2xl font-medium leading-tight",
          metric.tone === "accent"
            ? "text-accent"
            : metric.tone === "muted"
              ? "text-muted"
              : "text-foreground",
        )}
      >
        {metric.value}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{metric.detail}</p>
    </Card>
  );
}

function SectionHeader({
  label,
  title,
  icon: Icon,
  meta,
}: {
  label: string;
  title: string;
  icon: LucideIcon;
  meta: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <SectionLabel>{label}</SectionLabel>
        <h3 className="mt-3 font-mono text-xl font-medium leading-snug text-foreground">
          {title}
        </h3>
      </div>
      <div className="flex items-center gap-3 text-muted">
        <p className="font-mono text-xs">{meta}</p>
        <Icon size={18} strokeWidth={1.8} />
      </div>
    </div>
  );
}

function TravelMapPlaceholder() {
  return (
    <div className="relative mt-6 min-h-80 overflow-hidden rounded-md border border-border bg-background">
      <div className="absolute inset-x-0 top-1/4 border-t border-border" />
      <div className="absolute inset-x-0 top-1/2 border-t border-border" />
      <div className="absolute inset-x-0 top-3/4 border-t border-border" />
      <div className="absolute inset-y-0 left-1/4 border-l border-border" />
      <div className="absolute inset-y-0 left-1/2 border-l border-border" />
      <div className="absolute inset-y-0 left-3/4 border-l border-border" />

      <div className="absolute left-4 top-4 rounded-sm border border-border bg-surface px-3 py-2">
        <p className="font-mono text-xs text-muted">Static archive map</p>
      </div>

      {travelMemoriesPageData.travelMap.markers.map((marker) => (
        <div
          key={marker.label}
          className="absolute"
          style={{
            left: `${marker.x}%`,
            top: `${marker.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className={cn(
              "size-3 rounded-full border",
              marker.type === "lived"
                ? "border-accent bg-accent"
                : marker.type === "visited"
                  ? "border-foreground bg-foreground"
                  : marker.type === "planned"
                    ? "border-muted bg-muted"
                    : "border-accent bg-background",
            )}
          />
          <p className="mt-2 whitespace-nowrap rounded-sm border border-border bg-surface px-2 py-1 font-mono text-[0.68rem] text-muted">
            {marker.label}
          </p>
        </div>
      ))}

      <div className="absolute bottom-4 left-4 right-4 grid gap-2 rounded-md border border-border bg-surface p-3 sm:grid-cols-4">
        {["Visited", "Lived", "Planned", "Dream"].map((label) => (
          <div key={label} className="flex items-center gap-2">
            <span
              className={cn(
                "size-2 rounded-full",
                label === "Visited"
                  ? "bg-foreground"
                  : label === "Lived"
                    ? "bg-accent"
                    : label === "Planned"
                      ? "bg-muted"
                      : "border border-accent bg-background",
              )}
            />
            <p className="font-mono text-xs text-muted">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArchiveListCard<T>({
  label,
  title,
  icon,
  meta,
  items,
  renderItem,
}: {
  label: string;
  title: string;
  icon: LucideIcon;
  meta: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}) {
  return (
    <Card>
      <SectionHeader label={label} title={title} icon={icon} meta={meta} />
      <div className="mt-6 space-y-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-t border-border pt-5 first:border-t-0 first:pt-0"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </Card>
  );
}

function CountryItem({ country }: { country: Country }) {
  return (
    <div>
      <p className="font-mono text-sm text-foreground">{country.country}</p>
      <p className="mt-2 font-mono text-xs text-muted">
        {country.visits} / First visited {country.firstVisited}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{country.memory}</p>
    </div>
  );
}

function CityItem({ city }: { city: City }) {
  return (
    <div>
      <p className="font-mono text-sm text-foreground">{city.city}</p>
      <p className="mt-2 font-mono text-xs text-muted">
        {city.years} / {city.season}
      </p>
      <DetailBlock label="Lesson" text={city.lesson} />
    </div>
  );
}

function FavoritePlaceItem({ place }: { place: FavoritePlace }) {
  return (
    <div>
      <p className="font-mono text-sm text-foreground">{place.name}</p>
      <p className="mt-2 font-mono text-xs text-muted">
        {place.location} / {place.feeling}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{place.memory}</p>
    </div>
  );
}

function PlannedTripCard({ trip }: { trip: PlannedTrip }) {
  return (
    <article className="rounded-md border border-border bg-background p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-sm leading-5 text-foreground">
            {trip.title}
          </p>
          <p className="mt-2 font-mono text-xs text-muted">{trip.window}</p>
        </div>
        <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted">
          {trip.status}
        </span>
      </div>
      <DetailBlock label="Intention" text={trip.intention} />
    </article>
  );
}

function BucketListItem({
  destination,
}: {
  destination: BucketListDestination;
}) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <p className="font-mono text-sm text-foreground">
        {destination.destination}
      </p>
      <DetailBlock label="Reason" text={destination.reason} />
      <DetailBlock label="First step" text={destination.firstStep} />
    </div>
  );
}

function MemoryArchiveCard({ memory }: { memory: MemoryArchiveItem }) {
  return (
    <article className="rounded-md border border-border bg-background p-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-sm leading-5 text-foreground">
            {memory.title}
          </p>
          <p className="mt-2 font-mono text-xs text-muted">
            {memory.place} / {memory.date}
          </p>
        </div>
        <span className="w-fit rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted">
          {memory.type}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{memory.meaning}</p>
    </article>
  );
}

function PhotoPlaceholderCard({ photo }: { photo: MediaPlaceholder }) {
  return (
    <article className="rounded-md border border-border bg-background p-3">
      <div className="flex aspect-[4/3] items-center justify-center rounded-sm border border-border bg-surface">
        <div className="text-center">
          <Camera className="mx-auto text-muted" size={22} strokeWidth={1.8} />
          <p className="mt-3 font-mono text-xs text-muted">Photo slot</p>
        </div>
      </div>
      <p className="mt-4 font-mono text-sm leading-5 text-foreground">
        {photo.title}
      </p>
      <p className="mt-2 font-mono text-xs text-muted">{photo.date}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{photo.caption}</p>
    </article>
  );
}

function VideoPlaceholderCard({ video }: { video: VideoPlaceholder }) {
  return (
    <article className="rounded-md border border-border bg-background p-3">
      <div className="flex aspect-video items-center justify-center rounded-sm border border-border bg-surface">
        <div className="text-center">
          <Clapperboard
            className="mx-auto text-muted"
            size={24}
            strokeWidth={1.8}
          />
          <p className="mt-3 font-mono text-xs text-muted">
            Video slot / {video.duration}
          </p>
        </div>
      </div>
      <p className="mt-4 font-mono text-sm leading-5 text-foreground">
        {video.title}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{video.caption}</p>
    </article>
  );
}

function ArtifactCard<T>({
  label,
  title,
  icon,
  items,
  renderItem,
}: {
  label: string;
  title: string;
  icon: LucideIcon;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}) {
  return (
    <Card>
      <SectionHeader
        label={label}
        title={title}
        icon={icon}
        meta={`${items.length} saved`}
      />
      <div className="mt-6 space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-t border-border pt-4 first:border-t-0 first:pt-0"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </Card>
  );
}

function LetterItem({ letter }: { letter: Letter }) {
  return (
    <div>
      <p className="font-mono text-sm text-foreground">{letter.title}</p>
      <p className="mt-2 font-mono text-xs text-muted">
        {letter.date} / {letter.recipient}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{letter.note}</p>
    </div>
  );
}

function VoiceNoteItem({ voiceNote }: { voiceNote: VoiceNote }) {
  return (
    <div>
      <p className="font-mono text-sm text-foreground">{voiceNote.title}</p>
      <p className="mt-2 font-mono text-xs text-muted">
        {voiceNote.date} / {voiceNote.length}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{voiceNote.note}</p>
    </div>
  );
}

function FavoriteQuoteCard({
  favoriteQuote,
}: {
  favoriteQuote: FavoriteQuote;
}) {
  return (
    <article className="rounded-md border border-border bg-background p-4">
      <p className="font-mono text-base leading-7 text-foreground">
        &quot;{favoriteQuote.quote}&quot;
      </p>
      <p className="mt-3 font-mono text-xs text-muted">
        {favoriteQuote.source}
      </p>
      <DetailBlock label="Why it stays" text={favoriteQuote.why} />
    </article>
  );
}

function ImportantMemoryCard({ memory }: { memory: ImportantMemory }) {
  return (
    <article className="rounded-md border border-border bg-background p-4">
      <p className="font-mono text-sm leading-5 text-foreground">
        {memory.title}
      </p>
      <p className="mt-2 font-mono text-xs text-muted">
        {memory.place} / {memory.date}
      </p>
      <p className="mt-4 text-sm leading-6 text-muted">
        {memory.whyItMatters}
      </p>
    </article>
  );
}

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-4 border-t border-border pt-4">
      <SectionLabel>{label}</SectionLabel>
      <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
