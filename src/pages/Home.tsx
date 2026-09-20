import rotatingEarth from '../assets/images/rotating_earth.gif';
import stockholm_pict from '../assets/images/stockholm.jpg';
import baseball_book from '../assets/images/baseball_book.jpg';
import victim_book from '../assets/images/victim_book.jpg';
// import umbrella_pict from '../assets/images/umbrella.jpg';


interface Book {
  year: string;
  link: string;
  title: string;
  note: string;
  cover: string;
}

const BOOKS: Book[] = [
  {
    year: '2001',
    link: 'https://www.amazon.com/Victim-Hero-Ideologies-National-Identity/dp/0824823559/ref=sr_1_1?crid=CPX9V04948CQ&dib=eyJ2IjoiMSJ9.aaFtL2WYSZ7v3YLCi_o9S32mfNGiUk6Ekj5PDJ08ua7l_P9vlG8oWebo0qzZbYLokI2mzQhpn_iGPklk7RqTdfZQDhbGOUKO1Eo9mQEmczo1X5vyM1y-3CXCo1HKwnBQsOO_6VW9hjkzzm5DeuuIKsVreyWiXRsBx_wXqsSHjbxtZDZ5QFDS_O0FNfnobOR4O4_AajTOw_EHwlRcJABXtAEPilkxEowv7VoJpk2Tv_M.N0sX0pW_gx_1tiI6aHa0QvTGYrEqY8FfpGPHDnjW8r0&dib_tag=se&keywords=victim+as+hero&qid=1789589648&sprefix=victim+as+hero%2Caps%2C177&sr=8-1',
    title: 'The Victim as Hero: Ideologies of Peace and National Identity in Postwar Japan',
    note: 'This is the first systematic, historical inquiry into the emergence of "victim consciousness" (higaisha ishiki) as an essential component of Japanese pacifist national identity after World War II',
    cover: victim_book
  },
  {
    year: '2026',
    link: 'https://www.amazon.com/Rounding-Bases-Little-League-Baseball-ebook/dp/B0FB3N6X1R/ref=sr_1_1?crid=SXWAJR6JK7H8&dib=eyJ2IjoiMSJ9.Wa02tZQ5nTY9ikFafNrmsqbVhgWGTWzZ-kFWdXla4g1Hpxw5HQXBKdaRL_HByQVPzAGSnZySt9URIGc83OIt7mePOhoL_zAR8HU67nneFfpIIO4AEHKqP-76hdvZmZ8SlZiELpMIpC7kP3KSat_E5s70NQ9tQsvUaZXXYY5xAeLvJJakMET5NNsprGPzDhZVq24mHBcluutXHNS5axiUPp26VXu9dNHnTvBvMyI13QE.nwlBzjcP_XqNxOzzHdg2GGMo1H69Gi6X3lTCYromDTY&dib_tag=se&keywords=rounding+the+bases&qid=1789589705&s=digital-text&sprefix=rounding+the+bases%2Cdigital-text%2C148&sr=1-1',
    title: 'Rounding the Bases: The Story of Little League Baseball in Japan',
    note: 'Rounding the Bases offers the first comprehensive history of Japanese Little League, tracing its origins near U.S. military bases in the 1950s to its rise as one of the world’s most successful youth sports programs',
    cover: baseball_book
  },
];

// function Monogram() {
//   return (
//     <div className="flex h-40 w-40 items-center justify-center rounded-full border border-ochre/40 bg-white/60">
//       <span className="font-serif text-4xl text-ink">M·H</span>
//     </div>
//   );
// }

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="gap-10 py-6">
        <div className="flex gap-6 items-start">
          {/* <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Novels about memory, migration, and the weather of small towns.
          </h1> */}
          <img src={stockholm_pict} className="w-[30%]"/>
          <p className="max-w-md text-ink-soft">
            Jim Orr is an historian of modern Japan and the author of two heavily researched books and multiple
            essays and articles related to the Japanese peace movement. 
            First traveling to Japan in 1980 as an ESL teacher and most recently spending the 2022/23 
            academic year as the resident director of the Associated Kyoto Program, he has spent over 10 
            years in Japan including Hiroshima (4 years), Kyoto (4 years), Osaka (2 years) and multiple stints 
            in Tokyo. For over thirty years, he taught ancient, pre-modern and modern Japanese history at Bucknell University.
            He currently lives in the Germantown section of Philadelphia
          </p>
          <div className="mt-7 flex gap-6">
            <a>
              <img 
                src={rotatingEarth}
                alt="Rotating Globe" 
                style={{ width: '300px', height: 'auto', mixBlendMode: 'multiply' }} 
              />
              World Travels
            </a>
            <a
              href="#contact"
              className="self-center text-sm text-ochre transition-colors hover:text-ink"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Books */}

      <section id="books" className="border-t border-line py-12">
        <h2 className="font-serif text-2xl text-ink">Books</h2>
        <ul className="mt-8 flex flex-col">
          {BOOKS.map((book, i) => (
            <li
              key={book.title}
              className={`grid grid-cols-[4rem_1fr] gap-6 py-6 ${
                i !== 0 ? 'border-t border-line' : ''
              }`}
            >
              <span className="pt-1 font-serif text-ink-soft">{book.year}</span>

              <div className="flex gap-4">
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="shrink-0">
                  <img
                    src={book.cover}
                    alt={`Cover of ${book.title}`}
                    className="h-20 w-14 rounded-sm object-cover shadow-sm ring-1 ring-black/5"
                  />
                </a>
                <div>
                  <a href={book.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="font-serif text-lg text-ink transition-colors hover:text-ochre">
                      {book.title}
                    </h3>
                  </a>
                  <p className="mt-1 text-sm text-ink-soft">{book.note}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* About */}
      <section id="about" className="border-t border-line py-12">
        <h2 className="font-serif text-2xl text-ink">About</h2>
        <div className="mt-6 max-w-2xl space-y-4 text-ink-soft">
          <p>
            Originally from Conneticutt, Jim graduated from Yale University in 1979 having
            studied Economics and Japanese language. 
            He left for Japan in 1980 and taught for two years at <a href="https://www.hiroshimagakuin.ed.jp" className="text-sm text-ink-soft hover:text-ink text-blue-700">Hiroshima Gakuin School</a> and then 
            two more years at the local YMCA in Hiroshima. He went on to pursue graduate 
            studies in Japanese History and received his MA at University of Washington in 
            Seattle. While enrolled in the PhD program at Stanford he returned to Japan, 
            living in Kyoto and Osaka and started teaching at the Associated Kyoto Program 
            at Doshisha University. His investigations revealed to him some of the realities of post War Japan and how 
            the Japanese people remembered the war years. Out of these studies he published his first 
            full length book. 
          </p>
          <p>
            In 1994, he started a long and distinguished teaching career at Bucknell University, serving
            as the chair of the East Asian Studies department, publishing multiple articles on developments in  
            post-war Japan, returning to the Far East for months and years at a time to continue his research.
            For an extensive investigation into the early years of Japanese Little League he spoke with and 
            interviewed many former and current players, coaches and administrators leading him to a deeper 
            understanding of the role of baseball in the culture and a
            intriguing narrative of how Japan came to be a dominant force in Little League.
            Retired from teaching he continues to write and travel while living in the Germantown section of 
            Philadelphia.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-line py-12">
        <h2 className="font-serif text-2xl text-ink">Get in touch</h2>
        <p className="mt-4 max-w-md text-ink-soft">
          For events, press, or foreign rights, reach out directly.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <a
            href="mailto:jamesorr@bucknell.edu"
            className="rounded-full border border-ink px-5 py-2.5 text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
          >
           jamesorr@bucknell.edu
          </a>
          <a href="https://www.linkedin.com/in/james-orr-29038428/" className="text-sm text-ink-soft hover:text-ink">
            LinkedIn
          </a>
          <a href="#" className="text-sm text-ink-soft hover:text-ink">
            Substack
          </a>
        </div>
      </section>
    </>
  );
}
