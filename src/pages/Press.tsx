interface PressMention {
  url: string;
  outlet: string;
  quote: string;
  date: string;
}

interface EventItem {
  date: string;
  city: string;
  venue: string;
  detail: string;
}

const PRESS: PressMention[] = [
  {
    url: 'https://japansociety.org/events/reflections-on-citizen-movements-peace-and-politics-in-the-u-s-japan/',
    outlet: 'Japan Society of NY',
    quote: 'Citizens...utilized strategies of nonviolence to effect social change',
    date: 'May, 2008',
  }
];

const EVENTS: EventItem[] = [
  {
    date: 'Oct 14, 2026',
    city: 'Philadelphia, PA',
    venue: 'Germantown Books',
    detail: 'Reading and signing for Rounding the Bases.',
  }
];

export default function Press() {
  return (
    <>
      <section className="py-12">
        <h1 className="font-serif text-3xl text-ink sm:text-4xl">
          Press & Events
        </h1>
        <p className="mt-4 max-w-md text-ink-soft">
          Selected coverage and upcoming appearances. For interview
          requests, use the contact details on the books page.
        </p>
      </section>

      {/* Press */}
      <section className="border-t border-line py-12">
        <h2 className="font-serif text-2xl text-ink">In the press</h2>
        <ul className="mt-8 flex flex-col">
          {PRESS.map((item, i) => (
            <li
              key={item.outlet}
              className={`py-6 ${i !== 0 ? 'border-t border-line' : ''}`}
            >
              <p className="font-serif italic text-ink">"{item.quote}"</p>
              <a href={item.url}>
                <p className="mt-2 text-sm text-ink-soft">
                  {item.outlet} · {item.date}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Events */}
      <section className="border-t border-line py-12">
        <h2 className="font-serif text-2xl text-ink">Upcoming events</h2>
        <ul className="mt-8 flex flex-col">
          {EVENTS.map((event, i) => (
            <li
              key={`${event.city}-${event.date}`}
              className={`grid grid-cols-[7rem_1fr] gap-6 py-6 ${
                i !== 0 ? 'border-t border-line' : ''
              }`}
            >
              <span className="pt-1 text-sm text-ink-soft">{event.date}</span>
              <div>
                <h3 className="font-serif text-lg text-ink">
                  {event.venue}, {event.city}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{event.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
