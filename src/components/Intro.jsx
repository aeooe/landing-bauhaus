import useReveal from '../hooks/useReveal'
import './Intro.css'

const IMG_SRC =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'

export default function Intro() {
  const [ref, visible] = useReveal()

  return (
    <section className={`intro ${visible ? 'intro--visible' : ''}`} ref={ref}>
      <div className="intro__text-col">
        <h2 className="intro__heading">Form follows function</h2>
        <p className="intro__text">
          Born at the Weimar school in 1919, the Bauhaus movement dissolved the
          boundary between fine art and practical design. Its architecture
          stripped buildings to pure geometric volumes — flat roofs, glass
          curtain walls, open floor plans — proving that beauty emerges from
          honest structure, not ornament.
        </p>
      </div>

      <div className="intro__img-col">
        <img
          className="intro__img"
          src={IMG_SRC}
          alt="Bauhaus Dessau facade"
          loading="lazy"
        />
      </div>
    </section>
  )
}
