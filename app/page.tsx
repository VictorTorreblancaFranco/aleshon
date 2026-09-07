'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  CalendarDays,
  ChevronDown,
  Clock3,
  Gift,
  Heart,
  MapPin,
  Music2,
  RotateCcw,
  Sparkles,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const memories = [
  {
    id: 'manos',
    image: '/media/manos.webp',
    alt: 'Las manos de Kleberson y Aleshna entrelazadas',
    label: 'Ese lugar seguro',
    note: 'Tu mano se ha convertido en ese lugar donde todo se siente un poco más tranquilo.',
  },
  {
    id: 'noche',
    image: '/media/noche-juntos.webp',
    alt: 'Kleberson y Aleshna juntos durante una salida nocturna',
    label: 'Una noche nuestra',
    note: 'Hay noches que pasan rápido, pero contigo siempre dejan algo que quiero guardar.',
  },
  {
    id: 'dia',
    image: '/media/dia-juntos.webp',
    alt: 'Kleberson y Aleshna juntos durante un paseo',
    label: 'Donde sea, contigo',
    note: 'No importa tanto el lugar: si estamos juntos, el día ya tiene algo especial.',
  },
];

const songs = [
  {
    id: 'capaz',
    number: '01',
    title: 'capaz (merengueton)',
    artist: 'Alleh, Yorghaki',
    spotifyId: '2dd3G3ZqEcG2cNS1tp3oEk',
    note: 'La primera canción con la que conectamos cuando empezábamos a salir y a conocernos.',
    tab: 'La primera',
  },
  {
    id: 'stuck-with-u',
    number: '02',
    title: 'Stuck with U',
    artist: 'Ariana Grande, Justin Bieber',
    spotifyId: '4HBZA5flZLE435QTztThqH',
    note: 'Tu canción favorita; por eso tenía que tener un lugar especial aquí.',
    tab: 'Tu favorita',
  },
  {
    id: 'una-noche',
    number: '03',
    title: 'una noche',
    artist: 'Alleh, Yorghaki',
    spotifyId: '634CTghcuEDy2FXcTsLG5m',
    note: 'Una de esas canciones que nos gusta a los dos y que ya suena un poco a nosotros.',
    tab: 'La nuestra',
  },
];

type Memory = (typeof memories)[number];

function FlipCard({ memory, index }: { memory: Memory; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      className={`flip-card ${flipped ? 'is-flipped' : ''}`}
      type="button"
      onClick={() => setFlipped((value) => !value)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      aria-pressed={flipped}
      aria-label={
        flipped
          ? `Volver a ver: ${memory.label}`
          : `Leer la nota detrás de: ${memory.label}`
      }
    >
      <span className="flip-card__inner">
        <span className="flip-card__face flip-card__front">
          <Image
            src={memory.image}
            alt={memory.alt}
            fill
            sizes="(max-width: 740px) calc(100vw - 24px), (max-width: 980px) 48vw, 31vw"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <span className="photo-label">{memory.label}</span>
          <span className="flip-card__hint">
            <RotateCcw size={15} /> Toca para leer
          </span>
        </span>
        <span className="flip-card__face flip-card__back">
          <span className="note-mark">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="note-quote">“</span>
          <span className="note-copy">{memory.note}</span>
          <span className="note-signature">— Kleberson</span>
        </span>
      </span>
    </button>
  );
}

export default function Home() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <main>
      <section className="hero" aria-labelledby="album-title">
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />
        <div className="hero__content">
          <p className="eyebrow">
            <Sparkles size={15} /> Un detalle de cumpleaños
          </p>
          <p className="hero__date">17 · 09 · 2026</p>
          <h1 id="album-title">
            Kleberson <span>&amp;</span> Aleshna
          </h1>
          <p className="hero__copy">
            Hay recuerdos que merecen volver a sentirse… y sorpresas que merecen
            una noche especial.
          </p>
          <a className="hero__cta" href="#recuerdos">
            Abrir este recuerdo <ChevronDown size={18} />
          </a>
        </div>
        <div className="hero__signature" aria-label="Con cariño, Kleberson">
          <Heart size={14} fill="currentColor" /> De Kleberson, para Aleshna
        </div>
      </section>

      <section
        className="memories section-shell"
        id="recuerdos"
        aria-labelledby="memories-title"
      >
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">01 · Nosotros</p>
            <h2 id="memories-title">
              Pequeños momentos,
              <br />
              grandes recuerdos.
            </h2>
          </div>
          <p>Toca cada fotografía para descubrir la nota que guarda detrás.</p>
        </div>
        <div className="memories-grid">
          {memories.map((memory, index) => (
            <FlipCard key={memory.id} memory={memory} index={index} />
          ))}
        </div>
      </section>

      <section className="video-story" aria-labelledby="video-title">
        <div className="section-shell video-story__grid">
          <div className="video-copy">
            <p className="eyebrow">02 · En movimiento</p>
            <h2 id="video-title">
              Hay instantes que una foto no alcanza a contar.
            </h2>
            <p>
              Este es uno de ellos: un pedacito de ustedes que todavía se mueve,
              suena y vuelve a sentirse.
            </p>
            <span className="video-copy__note">
              <Heart size={16} fill="currentColor" /> Un recuerdo para volver a
              mirar
            </span>
          </div>
          <div className="video-frame">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/media/video-portada.webp"
            >
              <source src="/media/nuestro-recuerdo.mp4" type="video/mp4" />
              <track
                kind="captions"
                src="/media/video-es.vtt"
                srcLang="es"
                label="Español"
              />
              Tu navegador no puede reproducir este video.
            </video>
          </div>
        </div>
      </section>

      <section
        className="soundtrack section-shell"
        aria-labelledby="soundtrack-title"
      >
        <div className="section-heading soundtrack__heading">
          <p className="eyebrow">
            <Music2 size={15} /> 03 · Nuestra banda sonora
          </p>
          <h2 id="soundtrack-title">
            Tres canciones.
            <br />
            Tres formas de recordarnos.
          </h2>
        </div>

        <Tabs defaultValue="capaz" className="music-tabs">
          <TabsList
            className="music-tabs__list"
            variant="line"
            aria-label="Canciones del álbum"
          >
            {songs.map((song) => (
              <TabsTrigger key={song.id} value={song.id}>
                {song.tab}
              </TabsTrigger>
            ))}
          </TabsList>
          {songs.map((song) => (
            <TabsContent key={song.id} value={song.id} className="music-panel">
              <div className="music-panel__number">{song.number}</div>
              <div className="music-panel__copy">
                <p className="music-kicker">Un recuerdo hecho canción</p>
                <h3>{song.title}</h3>
                <p className="music-artist">{song.artist}</p>
                <p className="music-note">{song.note}</p>
              </div>
              <iframe
                title={`${song.title} de ${song.artist} en Spotify`}
                src={`https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section
        className="surprise"
        id="sorpresa"
        aria-labelledby="surprise-title"
      >
        <div className="surprise__stars" aria-hidden="true">
          ✦　·　✧　·　✦
        </div>
        <div className="surprise__intro">
          <p className="eyebrow">
            <Gift size={15} /> 04 · Una última sorpresa
          </p>
          <h2 id="surprise-title">
            Aleshna, hay una noche
            <br />
            reservada para ti.
          </h2>
          <p>Una celebración anticipada, un día antes de tu cumpleaños.</p>
          <Button
            type="button"
            size="lg"
            className="reveal-button"
            onClick={() => setReservationOpen((value) => !value)}
            aria-expanded={reservationOpen}
            aria-controls="reservation-details"
          >
            <Gift data-icon="inline-start" />
            {reservationOpen ? 'Ocultar sorpresa' : 'Descubrir la sorpresa'}
          </Button>
        </div>

        <div
          id="reservation-details"
          className={`reservation ${reservationOpen ? 'is-open' : ''}`}
          aria-hidden={!reservationOpen}
        >
          <div className="reservation__card">
            <div className="reservation__topline">
              <span className="reservation__monogram">K &amp; A</span>
              <span>Invitación especial · 2026</span>
            </div>

            <div className="reservation__heading">
              <span className="reservation__seal" aria-hidden="true">
                <Sparkles size={22} />
              </span>
              <p className="reservation__overline">
                Kleberson invita a Aleshna
              </p>
              <h3>
                Una noche para
                <br />
                <em>celebrarte</em>
              </h3>
              <p className="reservation__message">
                Quiero empezar a celebrar tu cumpleaños contigo, en una noche
                preparada especialmente para los dos.
              </p>
            </div>

            <div className="reservation__event">
              <div
                className="reservation__date"
                aria-label="Miércoles 16 de septiembre de 2026"
              >
                <span>Miércoles</span>
                <strong>16</strong>
                <span>Septiembre · 2026</span>
                <small>Tu cumpleaños es el jueves 17</small>
              </div>

              <dl className="reservation__facts">
                <div>
                  <dt>
                    <Clock3 size={18} /> Hora
                  </dt>
                  <dd>8:30 p. m.</dd>
                </div>
                <div>
                  <dt>
                    <Users size={18} /> Para
                  </dt>
                  <dd>Nosotros dos</dd>
                </div>
                <div>
                  <dt>
                    <MapPin size={18} /> Lugar
                  </dt>
                  <dd>Museo Larco Café · Restaurant</dd>
                </div>
                <div>
                  <dt>
                    <CalendarDays size={18} /> Reserva
                  </dt>
                  <dd>A nombre de Kleberson Paolo</dd>
                </div>
              </dl>
            </div>

            <div className="reservation__closing">
              <span aria-hidden="true">✦</span>
              <p>
                Guarda esta noche para nosotros.
                <strong>— Kleberson</strong>
              </p>
              <span aria-hidden="true">✦</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <Heart size={16} fill="currentColor" />
        <p>Feliz cumpleaños, Aleshna.</p>
        <span>Con cariño, Kleberson.</span>
      </footer>
    </main>
  );
}
