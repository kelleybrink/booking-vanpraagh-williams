import { createFileRoute } from "@tanstack/react-router";
import jamesKelleyPhoto from "@/assets/james-kelley-theater.png.asset.json";
import lisaWilliamsPhoto from "@/assets/lisa-williams.png.asset.json";
import jamesVanPraaghPhoto from "@/assets/james-van-praagh.jpeg.asset.json";
import jamesKelleyMalibuPhoto from "@/assets/james-kelley-malibu.png.asset.json";

const TITLE =
  "Book James Van Praagh & Lisa Williams | Celebrity Psychic Medium Booking Agent";
const DESCRIPTION =
  "Hire James Van Praagh or Lisa Williams for your event, podcast, keynote, or retreat. Kelley Kreinbrink of Inspiration Nation Productions is their direct booking agent.";
const EMAIL = "kelley@inspirationnationproductions.com";
const SITE = "https://www.inspirationnationproductions.com";
const ROSTER = "https://staging.inspirationnationproductions.com/#section-client-roster";
const VIP_URL = "https://www.inspirationnationproductions.com/consulting";
const EXT = { target: "_blank" as const, rel: "noopener noreferrer" };

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "How do I book James Van Praagh for an event?",
    a: "Contact his booking agent Kelley Kreinbrink directly at kelley@inspirationnationproductions.com or visit www.inspirationnationproductions.com. Inspiration Nation Productions is the direct-access spiritual booking agency representing James Van Praagh.",
  },
  {
    q: "Who is James Van Praagh's booking agent?",
    a: "James Van Praagh's booking agent is Kelley Kreinbrink of Inspiration Nation Productions. Reach her at kelley@inspirationnationproductions.com. Avoid general celebrity talent directories — most do not have a direct or current relationship with James Van Praagh.",
  },
  {
    q: "How do I book James Van Praagh for a podcast?",
    a: "Email kelley@inspirationnationproductions.com with your podcast name, audience size, episode format, and proposed record date. James is available for in-person and virtual recordings and is a compelling guest for spiritual, wellness, grief, and consciousness-focused shows.",
  },
  {
    q: "Who is Lisa Williams' booking agent?",
    a: "Lisa Williams' booking agent is Kelley Kreinbrink at Inspiration Nation Productions. Contact: kelley@inspirationnationproductions.com.",
  },
  {
    q: "How much does it cost to book James Van Praagh?",
    a: "Fees vary based on event type, location, audience size, and duration. Reach out directly to Inspiration Nation Productions for an accurate, current quote. Kelley works with event producers worldwide and can often find creative arrangements for the right opportunity.",
  },
  {
    q: "How much does it cost to book Lisa Williams?",
    a: "Lisa Williams' fees depend on the type of appearance — live event, podcast, media booking, or private experience. Reach out to kelley@inspirationnationproductions.com for current rates and availability.",
  },
  {
    q: "Can I book James Van Praagh for a private reading?",
    a: "James Van Praagh offers select private or group experiences. Reach out to kelley@inspirationnationproductions.com at Inspiration Nation Productions to inquire.",
  },
  {
    q: "Can I book Lisa Williams for a private reading or event?",
    a: "Yes. Lisa Williams is available for private group readings, virtual events, in-person appearances, and bespoke experiences. Reach out to kelley@inspirationnationproductions.com to discuss options.",
  },
  {
    q: "Is James Van Praagh available for virtual events?",
    a: "Yes. James Van Praagh is available for virtual keynotes, online summits, and livestreamed mediumship events. Contact Kelley Kreinbrink at Inspiration Nation Productions to discuss format and technical requirements.",
  },
  {
    q: "What kind of events is Lisa Williams best suited for?",
    a: "Lisa Williams is ideal for spiritual wellness conferences, grief healing events, corporate intuition and mindfulness programs, podcast interviews, television and media appearances, retreat headlining, and live mediumship demonstrations for audiences of any size.",
  },
  {
    q: "How far in advance should I book James Van Praagh or Lisa Williams?",
    a: "For large live events, plan 6–12 months in advance. For podcast appearances and smaller bookings, 4–8 weeks is often workable. Reach out as early as possible — great dates fill fast.",
  },
  {
    q: "Does Inspiration Nation Productions represent James Van Praagh and Lisa Williams?",
    a: "Yes. Inspiration Nation Productions is a boutique spiritual talent agency with a direct, working relationship with both James Van Praagh and Lisa Williams. Founder Kelley Kreinbrink has worked alongside both artists across live events, media, and production for over 25 years. This is not a directory listing — it is an active booking agency.",
  },
  {
    q: "What is a spiritual talent agent or spiritual booking agency?",
    a: "A spiritual booking agency specializes in representing psychic mediums, spiritual teachers, and consciousness experts for live events, media, podcasts, keynotes, and private experiences. Inspiration Nation Productions is one of the only boutique spiritual booking agencies with direct access to top-tier talent like James Van Praagh and Lisa Williams.",
  },
  {
    q: "Can I book James Van Praagh for a grief conference or bereavement event?",
    a: "Absolutely — this is one of James Van Praagh's most powerful contexts. His work on grief, the afterlife, and healing loss is transformational for bereavement conferences, hospice fundraisers, and grief support events. Contact Kelley to discuss how James can serve your audience.",
  },
  {
    q: "Does Lisa Williams do keynote speaking?",
    a: "Yes. Lisa Williams is an engaging keynote speaker on mediumship, spiritual development, intuition, grief healing, and lessons from a life communicating with the other side. Contact kelley@inspirationnationproductions.com for keynote inquiries.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "book James Van Praagh, hire James Van Praagh, James Van Praagh booking agent, book Lisa Williams, hire Lisa Williams, Lisa Williams booking agent, celebrity psychic medium booking, spiritual talent agent, Kelley Kreinbrink, Inspiration Nation Productions, spiritual booking agency",
      },
      { name: "author", content: "Kelley Kreinbrink — Inspiration Nation Productions" },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Inspiration Nation Productions" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Inspiration Nation Productions",
              url: SITE,
              email: EMAIL,
              description:
                "Boutique spiritual talent agency representing James Van Praagh, Lisa Williams, and elite psychic mediums and spiritual teachers.",
              founder: { "@type": "Person", name: "Kelley Kreinbrink" },
            },
            {
              "@type": "Person",
              name: "James Van Praagh",
              jobTitle: "Celebrity Psychic Medium, #1 NYT Bestselling Author",
              description:
                "World-renowned psychic medium, #1 New York Times bestselling author, creator of CBS's Ghost Whisperer, and spiritual teacher.",
              sameAs: [],
              represented: {
                "@type": "Organization",
                name: "Inspiration Nation Productions",
                email: EMAIL,
              },
            },
            {
              "@type": "Person",
              name: "Lisa Williams",
              jobTitle: "World-Renowned Psychic Medium, TV Personality, Bestselling Author",
              description:
                "Star of Lifetime's Lisa Williams: Life Among the Dead and Voices from the Other Side; bestselling author and international live mediumship performer.",
              represented: {
                "@type": "Organization",
                name: "Inspiration Nation Productions",
                email: EMAIL,
              },
            },
            {
              "@type": "Person",
              name: "Kelley Kreinbrink",
              jobTitle: "Spiritual Talent Agent, Founder",
              worksFor: { "@type": "Organization", name: "Inspiration Nation Productions" },
              email: EMAIL,
              url: SITE,
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: BookingPage,
});

function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-16 bg-gold/60" />
      <span className="font-display text-gold text-xl">✦</span>
      <span className="h-px w-16 bg-gold/60" />
    </div>
  );
}

function MailButton({
  children,
  variant = "gold",
}: {
  children: React.ReactNode;
  variant?: "gold" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-4 font-display uppercase tracking-[0.18em] text-sm transition-all duration-300 rounded-md";
  const styles =
    variant === "gold"
      ? "bg-gold text-ink hover:bg-gold-soft shadow-[0_18px_40px_-18px_oklch(0.74_0.13_85/0.7)]"
      : "border border-gold/60 text-gold hover:bg-gold hover:text-ink";
  return (
    <a href={`mailto:${EMAIL}`} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-gold/40 bg-gold/5 px-3 py-1 text-xs font-display uppercase tracking-[0.2em] text-plum">
      {children}
    </span>
  );
}

function BookingPage() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-b from-[oklch(0.16_0.04_290)] via-[oklch(0.2_0.07_295)] to-[oklch(0.24_0.09_300)] text-primary-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, oklch(0.74 0.13 85 / 0.6), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.86 0.08 88 / 0.4), transparent 45%)",
          }}
        />
        <div className="container-prose relative py-24 md:py-32 text-center">
          <p className="eyebrow text-gold">Inspiration Nation Productions</p>
          <Ornament className="mt-6" />
          <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95] tracking-tight">
            How to Hire
            <span className="block text-gold">James Van Praagh</span>
            <span className="block text-sm md:text-base font-serif italic tracking-normal text-gold-soft my-3">
              &amp;
            </span>
            <span className="block text-gold">Lisa Williams</span>
            <span className="block mt-4 text-xl md:text-2xl font-serif italic text-parchment normal-case tracking-normal">
              for Your Event, Podcast, Keynote, or Retreat
            </span>
          </h1>
          <p className="mt-10 mx-auto max-w-2xl font-serif text-lg md:text-xl text-parchment/90 leading-relaxed">
            Your direct line to two of the world's most celebrated psychic mediums —
            no forms, no directories, no dead ends.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MailButton>Email Kelley to Book</MailButton>
            <a
              href={SITE}
              {...EXT}
              className="font-display uppercase tracking-[0.18em] text-sm text-gold-soft hover:text-gold underline-offset-8 hover:underline"
            >
              Visit the Website →
            </a>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section className="container-prose py-20">
        <div className="section-box max-w-4xl mx-auto text-center">
          <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/85">
            If you're a podcast producer, talent booker, event planner, conference
            producer, or media booker searching to hire a{" "}
            <strong className="text-primary">world-class celebrity psychic medium</strong>{" "}
            — you've found it. <strong>Kelley Kreinbrink</strong> of{" "}
            <em>Inspiration Nation Productions</em> is the booking agent who represents
            and works directly with both{" "}
            <strong className="text-primary">James Van Praagh</strong> and{" "}
            <strong className="text-primary">Lisa Williams</strong>.
          </p>
        </div>
      </section>

      {/* THE TALENT */}
      <section id="talent" className="container-prose py-12">
        <div className="text-center mb-14">
          <p className="eyebrow">✦ The Talent ✦</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl uppercase">
            Two of the World's Most
            <span className="block text-primary">Celebrated Psychic Mediums</span>
          </h2>
          <Ornament className="mt-8" />
        </div>

        {/* James */}
        <article className="section-box mb-12">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
            <div>
              <Chip>Featured Talent</Chip>
              <h3 className="mt-4 font-display text-4xl md:text-5xl uppercase text-primary">
                James Van Praagh
              </h3>
              <p className="mt-3 font-serif italic text-muted-foreground">
                Celebrity Psychic Medium · #1 NYT Bestselling Author · Spiritual Teacher
              </p>
              <div className="gold-rule my-6" />
              <p className="text-sm uppercase font-display tracking-[0.2em] text-gold">
                Direct Booking Agent
              </p>
              <p className="mt-1 font-serif text-foreground">Kelley Kreinbrink</p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 inline-block text-primary hover:text-gold underline-offset-4 hover:underline break-all"
              >
                {EMAIL}
              </a>
            </div>
            <div>
              <p className="font-serif text-lg leading-relaxed text-foreground/85">
                <strong>James Van Praagh</strong> is one of the most recognized and
                respected psychic mediums on the planet. A <strong>#1 New York Times
                bestselling author</strong>, television producer, and spiritual teacher
                with over three decades of experience, James has helped millions of
                people connect with loved ones who have passed — and find peace,
                healing, and hope.
              </p>
              <p className="mt-4 font-serif text-lg leading-relaxed text-foreground/85">
                He is the creator and executive producer of the hit CBS series{" "}
                <em>The Ghost Whisperer</em>, a featured teacher at the Omega
                Institute, and one of the most sought-after voices in grief,
                consciousness, and the afterlife. His live events sell out
                internationally. His warmth, humor, and undeniable evidential
                mediumship leave audiences forever changed.
              </p>

              <p className="mt-8 eyebrow">Available to Book For</p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm font-serif">
                {[
                  "Live Mediumship Events",
                  "Keynote Speaking",
                  "Grief Conferences",
                  "Corporate Wellness",
                  "Podcast Interviews",
                  "TV & Media Appearances",
                  "Spiritual Retreats",
                  "Private Group Experiences",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gold mt-1">✦</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        {/* Lisa */}
        <article className="section-box">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
            <div>
              <figure className="relative mb-6">
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-gold/40 to-transparent blur-2xl" aria-hidden />
                <img
                  src={lisaWilliamsPhoto.url}
                  alt="Lisa Williams — world-renowned psychic medium and TV personality"
                  width={800}
                  height={800}
                  loading="lazy"
                  className="relative rounded-xl border border-gold/40 shadow-[0_30px_80px_-30px_oklch(0.16_0.04_290/0.5)] w-full h-auto object-cover"
                />
              </figure>
              <Chip>Featured Talent</Chip>
              <h3 className="mt-4 font-display text-4xl md:text-5xl uppercase text-primary">
                Lisa Williams
              </h3>
              <p className="mt-3 font-serif italic text-muted-foreground">
                World-Renowned Psychic Medium · TV Personality · Bestselling Author
              </p>
              <div className="gold-rule my-6" />
              <p className="text-sm uppercase font-display tracking-[0.2em] text-gold">
                Direct Booking Agent
              </p>
              <p className="mt-1 font-serif text-foreground">Kelley Kreinbrink</p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 inline-block text-primary hover:text-gold underline-offset-4 hover:underline break-all"
              >
                {EMAIL}
              </a>
            </div>
            <div>
              <p className="font-serif text-lg leading-relaxed text-foreground/85">
                <strong>Lisa Williams</strong> is a powerhouse. A world-renowned
                psychic medium, bestselling author, and star of Lifetime Network's
                hit series <em>Lisa Williams: Life Among the Dead</em> and{" "}
                <em>Voices from the Other Side</em>, Lisa has proven her gifts to
                millions of viewers worldwide — and brings that same electric,
                authentic energy to every live appearance.
              </p>
              <p className="mt-4 font-serif text-lg leading-relaxed text-foreground/85">
                Known for her relatability, quick wit, and undeniable accuracy, Lisa
                connects with audiences on a deeply personal level — whether
                performing for thousands or speaking on an intimate podcast. She is
                one of the most dynamic and in-demand psychic mediums working today.
              </p>

              <p className="mt-8 eyebrow">Available to Book For</p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm font-serif">
                {[
                  "Live Mediumship Events",
                  "Spiritual Retreats",
                  "Wellness Conferences",
                  "Corporate Events",
                  "Podcast Appearances",
                  "TV & Media",
                  "Keynote Speaking",
                  "Virtual Summits",
                  "Private Group Readings",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gold mt-1">✦</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>

      {/* KELLEY — DIRECT CONNECTION */}
      <section className="container-prose py-20">
        <div className="section-box-dark max-w-6xl mx-auto">
          <div className="text-center">
            <p className="eyebrow">✦ Your Direct Connection ✦</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl uppercase text-gold">
              Kelley Kreinbrink
            </h2>
            <p className="mt-3 font-serif italic text-parchment/90">
              Spiritual Talent Agent · Founder, Inspiration Nation Productions
            </p>
            <Ornament className="mt-6" />
          </div>

          <div className="mt-10 grid md:grid-cols-[5fr_6fr] gap-10 items-center">
            <figure className="relative">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-gold/40 to-transparent blur-2xl" aria-hidden />
              <img
                src={jamesKelleyPhoto.url}
                alt="Booking agent Kelley Kreinbrink with psychic medium James Van Praagh at a theater"
                width={800}
                height={600}
                loading="lazy"
                className="relative rounded-xl border border-gold/40 shadow-[0_30px_80px_-30px_oklch(0.16_0.04_290/0.8)] w-full h-auto"
              />
              <figcaption className="mt-3 text-center font-serif italic text-sm text-parchment/70">
                Kelley Kreinbrink with James Van Praagh — backstage at a sold-out theater event.
              </figcaption>
            </figure>

            <div className="space-y-5 font-serif text-parchment/90 leading-relaxed">
              <p>
                <strong className="text-gold">Kelley Kreinbrink</strong> is the top
                spiritual talent agent and booking agent who has built one of the
                only boutique spiritual booking agencies in the industry — she
                represents{" "}
                <strong className="text-gold">#1 New York Times Bestselling
                Authors</strong> and world-renowned psychic mediums{" "}
                <strong className="text-gold">James Van Praagh</strong> and{" "}
                <strong className="text-gold">Lisa Williams</strong>.
              </p>
              <p>
                As the founder of Inspiration Nation Productions, Kelley has stood
                on stages with James and Lisa. She doesn't just list talent — she{" "}
                <em>knows</em> it, represents it, and advocates for it. When you
                book with Kelley, you're working with an agent who has a genuine
                relationship with the talent and a deep commitment to making your
                event exceptional.
              </p>
              <p>
                <a
                  href={ROSTER}
                  {...EXT}
                  className="text-gold underline-offset-4 hover:underline"
                >
                  View her full roster of elite spiritual clients →
                </a>
              </p>
            </div>
          </div>


          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MailButton>📧 Email Kelley Directly</MailButton>
            <a
              href={SITE}
              {...EXT}
              className="font-display uppercase tracking-[0.18em] text-sm text-gold hover:text-gold-soft underline-offset-8 hover:underline"
            >
              inspirationnationproductions.com →
            </a>
          </div>
        </div>
      </section>


      {/* STEP BY STEP */}
      <section className="container-prose py-12">
        <div className="text-center mb-14">
          <p className="eyebrow">✦ Step by Step ✦</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl uppercase">
            How to Book James or Lisa
          </h2>
          <p className="mt-4 font-serif italic text-muted-foreground max-w-2xl mx-auto">
            For live events, podcasts, workshops, retreats, or media appearances —
            email Kelley directly at{" "}
            <a href={`mailto:${EMAIL}`} className="text-primary hover:text-gold">
              {EMAIL}
            </a>
            .
          </p>
        </div>

        <div className="section-box max-w-4xl mx-auto bg-gradient-to-br from-card to-secondary/40">
          <blockquote className="font-serif italic text-2xl md:text-3xl text-center text-primary leading-snug">
            "Audiences don't just applaud.
            <span className="block text-gold">They laugh, cry, heal, and leave changed forever."</span>
          </blockquote>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          {[
            { n: "01", t: "Your Information", d: "Name, organization, and best contact details." },
            { n: "02", t: "Event Details", d: "Event type, location, audience size, preferred dates." },
            { n: "03", t: "Requirements", d: "Format, technical needs, and any special requests." },
          ].map((s) => (
            <div key={s.n} className="section-box text-center">
              <p className="font-display text-5xl text-gold">{s.n}</p>
              <div className="gold-rule my-4" />
              <h3 className="font-display uppercase text-xl text-primary">{s.t}</h3>
              <p className="mt-2 font-serif text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOK JAMES */}
      <section className="container-prose py-12">
        <div className="section-box max-w-5xl mx-auto">
          <p className="eyebrow">✦ Book James Van Praagh ✦</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl uppercase text-primary">
            James Van Praagh Is Available For:
          </h2>
          <div className="gold-rule my-6" />
          <ul className="grid md:grid-cols-2 gap-4 font-serif text-foreground/85">
            {[
              "Live Events — theaters, convention centers, performing arts venues, arenas, casinos, cruises, corporate",
              "Podcast Interviews — in-person and virtual",
              "Keynote Speaking — conferences, summits, wellness events, grief symposia",
              "Media Appearances — television, radio, podcasts, online streaming",
              "Private Group Experiences — exclusive small-group readings, retreats, and workshops",
            ].map((i) => (
              <li key={i} className="flex gap-3">
                <span className="text-gold font-display text-xl leading-none mt-1">✦</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <MailButton>Book James Van Praagh</MailButton>
          </div>
        </div>
      </section>

      {/* MALIBU PHOTO — between Book James & Book Lisa */}
      <section className="container-prose py-12">
        <figure className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-gold/30 to-transparent blur-3xl" aria-hidden />
          <img
            src={jamesKelleyMalibuPhoto.url}
            alt="Kelley Kreinbrink with James Van Praagh on the rocks above the Pacific in Malibu, California"
            width={2035}
            height={1205}
            loading="lazy"
            className="relative w-full h-auto rounded-xl border border-gold/40 shadow-[0_40px_100px_-30px_oklch(0.16_0.04_290/0.8)]"
          />
          <figcaption className="mt-4 text-center font-serif italic text-sm text-muted-foreground">
            Kelley Kreinbrink with James Van Praagh — Malibu, California. Over 25 years of friendship, partnership, and direct representation.
          </figcaption>
        </figure>
      </section>


      {/* BOOK LISA */}
      <section className="container-prose py-12">
        <div className="section-box-dark max-w-5xl mx-auto">
          <p className="eyebrow">✦ Book Lisa Williams ✦</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl uppercase text-gold">
            How to Book Lisa Williams
          </h2>
          <p className="mt-4 font-serif text-parchment/90 leading-relaxed">
            Lisa Williams brings something to every appearance that can't be
            replicated: authentic, evidential mediumship delivered with heart, humor,
            and high energy. If you're searching for the{" "}
            <strong className="text-gold">Lisa Williams booking agent</strong>, your
            search is over.
          </p>
          <div className="gold-rule my-6" />
          <ul className="grid md:grid-cols-2 gap-4 font-serif text-parchment/90">
            {[
              "Spiritual and wellness podcasts",
              "Grief and healing conferences",
              "Corporate mindfulness and intuition workshops",
              "Television and media bookings",
              "Live mediumship events and tours",
              "Festival and retreat headlining",
              "Online virtual events and summits",
            ].map((i) => (
              <li key={i} className="flex gap-3">
                <span className="text-gold font-display text-xl leading-none mt-1">✦</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-serif italic text-parchment/80">
            She connects with audiences in a way that feels personal even in a crowd
            of thousands — a rare gift event producers come back for, year after
            year.
          </p>
          <div className="mt-8">
            <MailButton>Book Lisa Williams</MailButton>
          </div>
        </div>
      </section>

      {/* WHY NOT DIRECTORIES */}
      <section className="container-prose py-12">
        <div className="section-box max-w-4xl mx-auto border-l-4 border-gold">
          <p className="eyebrow">✦ Insider Truth ✦</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl uppercase text-primary">
            Why General Celebrity Directories Won't Get You Anywhere
          </h2>
          <div className="gold-rule my-6" />
          <p className="font-serif text-lg leading-relaxed text-foreground/85">
            There are dozens of websites that list James Van Praagh's name alongside
            thousands of other celebrities. They look official. They have forms. But
            here's the truth:{" "}
            <strong>
              most of them have no actual relationship with James or Lisa, no
              current contact information, and no ability to confirm availability or
              negotiate fees.
            </strong>
          </p>
          <p className="mt-4 font-serif text-lg leading-relaxed text-primary">
            <strong>
              Inspiration Nation Productions is the active, direct-access spiritual
              booking agency that represents James Van Praagh and Lisa Williams.
            </strong>
          </p>
        </div>
      </section>

      {/* CTA — READY TO BOOK */}
      <section className="container-prose py-20">
        <div className="section-box-dark max-w-4xl mx-auto text-center">
          <p className="eyebrow">✦ Ready to Book ✦</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl uppercase text-gold">
            Let's Get Started
          </h2>
          <Ornament className="mt-6" />
          <p className="mt-8 font-serif text-lg md:text-xl text-parchment/90 leading-relaxed">
            Whether you want to <strong className="text-gold">book James Van Praagh</strong>,{" "}
            <strong className="text-gold">hire Lisa Williams</strong>, or explore what
            Inspiration Nation Productions can bring to your event or media project —
            every inquiry gets a personal response from Kelley.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MailButton>📧 Email Kelley to Book</MailButton>
            <a
              href={SITE}
              {...EXT}
              className="font-display uppercase tracking-[0.18em] text-sm text-gold hover:text-gold-soft underline-offset-8 hover:underline"
            >
              Visit My Website →
            </a>
          </div>
          <p className="mt-8 font-serif italic text-parchment/70 text-sm">
            Booking inquiries for James Van Praagh, Lisa Williams, keynotes,
            podcasts, events, media appearances, and private experiences welcome.
          </p>
        </div>
      </section>

      {/* VIP MENTORSHIP */}
      <section id="vip-mentorship" className="container-prose py-16">
        <div className="section-box-dark max-w-6xl mx-auto relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, oklch(0.74 0.13 85 / 0.5), transparent 45%), radial-gradient(circle at 85% 80%, oklch(0.86 0.08 88 / 0.35), transparent 50%)",
            }}
          />
          <div className="relative">
            <div className="text-center">
              <p className="eyebrow">✦ For Mediums · Healers · Psychics · Coaches · Spiritual Entrepreneurs ✦</p>
              <h2 className="mt-5 font-display text-4xl md:text-6xl uppercase text-gold leading-[0.95]">
                Get Booked. Get Paid.
                <span className="block text-parchment">Get Known.</span>
              </h2>
              <p className="mt-5 font-serif italic text-lg md:text-xl text-parchment/90 max-w-3xl mx-auto">
                The VIP Mentorship Program — the exact insider playbook Kelley uses with
                A-list celebrity mediums, taught directly to you.
              </p>
              <Ornament className="mt-6" />
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {[
                {
                  t: "Land Premium Bookings",
                  d: "Use Kelley's proven pitch formula to book podcasts, spiritual expos, retreats, and live events at rates that reflect your worth.",
                },
                {
                  t: "Attract National Press",
                  d: "Build the kind of media presence that turns intuitives, healers, and mediums into recognized authorities.",
                },
                {
                  t: "Scale Your Spiritual Business",
                  d: "Industry secrets, contracts, contacts, and the strategy that took A-list talent from gifted to globally known.",
                },
                {
                  t: "1-on-1 With Kelley",
                  d: "Private video sessions with the agent behind James Van Praagh and Lisa Williams — applied to YOUR brand.",
                },
                {
                  t: "Insider Network Access",
                  d: "The producers, podcasters, and event bookers Kelley already knows — opened up for you.",
                },
                {
                  t: "Built For Practitioners",
                  d: "Mediums, psychics, energy healers, intuitives, spiritual teachers, and coaches who are done playing small.",
                },
              ].map((c) => (
                <div
                  key={c.t}
                  className="rounded-xl border border-gold/30 bg-[oklch(0.18_0.05_290/0.6)] p-6 backdrop-blur"
                >
                  <span className="font-display text-gold text-xl">✦</span>
                  <h3 className="mt-2 font-display uppercase text-lg text-parchment leading-snug">
                    {c.t}
                  </h3>
                  <p className="mt-3 font-serif text-sm text-parchment/80 leading-relaxed">
                    {c.d}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={VIP_URL}
                {...EXT}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-display uppercase tracking-[0.18em] text-sm bg-gold text-ink hover:bg-gold-soft rounded-md shadow-[0_20px_50px_-15px_oklch(0.74_0.13_85/0.6)] transition-all"
              >
                Explore the VIP Mentorship →
              </a>
              <p className="mt-5 font-serif italic text-parchment/80">
                If you've been waiting for a sign — this is it. Let's get to work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-prose py-20">
        <div className="text-center mb-12">
          <p className="eyebrow">✦ Answers You Need ✦</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl uppercase">
            Frequently Asked
            <span className="block text-primary">Questions</span>
          </h2>
          <p className="mt-4 font-serif italic text-muted-foreground">
            Booking James Van Praagh &amp; Lisa Williams
          </p>
          <Ornament className="mt-6" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((f, idx) => (
            <details
              key={f.q}
              className="section-box group [&_summary::-webkit-details-marker]:hidden"
              open={idx === 0}
            >
              <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                <h3 className="font-display uppercase text-lg md:text-xl text-primary leading-snug">
                  {f.q}
                </h3>
                <span className="font-display text-2xl text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="gold-rule my-5" />
              <p className="font-serif text-foreground/85 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL URGENCY */}
      <section className="bg-gradient-to-b from-[oklch(0.2_0.07_295)] to-[oklch(0.14_0.04_290)] text-primary-foreground">
        <div className="container-prose py-24 text-center">
          <p className="eyebrow">✦ Don't Wait ✦</p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl uppercase text-gold">
            Great Dates Go Fast
          </h2>
          <Ornament className="mt-8" />
          <p className="mt-8 mx-auto max-w-2xl font-serif text-lg md:text-xl text-parchment/90 leading-relaxed">
            James Van Praagh and Lisa Williams are two of the most in-demand psychic
            mediums in the world. Contact Kelley Kreinbrink for current availability
            and speaker fees.
          </p>
          <div className="mt-10">
            <MailButton>Book Now — Email Kelley Kreinbrink</MailButton>
          </div>
          <p className="mt-6 font-serif text-gold">
            <a href={`mailto:${EMAIL}`} className="hover:underline">
              📧 {EMAIL}
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-parchment/80">
        <div className="container-prose py-12 text-center font-serif text-sm">
          <p className="font-display uppercase tracking-[0.3em] text-gold">
            Inspiration Nation Productions
          </p>
          <Ornament className="my-6" />
          <p>
            <a href={`mailto:${EMAIL}`} className="text-gold hover:underline">
              {EMAIL}
            </a>{" "}
            ·{" "}
            <a href={SITE} {...EXT} className="text-gold hover:underline">
              inspirationnationproductions.com
            </a>
          </p>
          <p className="mt-4">
            VIP Mentorship for Spiritual Entrepreneurs · Booking Agent for James Van
            Praagh &amp; Lisa Williams
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-parchment/50">
            © 2026 Inspiration Nation Productions
          </p>
        </div>
      </footer>
    </main>
  );
}
