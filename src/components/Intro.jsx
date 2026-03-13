import useReveal from '../hooks/useReveal'
import './Intro.css'

export default function Intro() {
  const [ref, visible] = useReveal()

  return (
    <section className={`intro ${visible ? 'intro--visible' : ''}`} ref={ref}>
      <div className="intro__divider">
        <span className="intro__divider-line" />
        <span className="intro__divider-dot" />
        <span className="intro__divider-line" />
      </div>

      <div className="intro__body">
        <h2 className="intro__heading">Form follows function</h2>
        <p className="intro__text">
          Born at the Weimar school in 1919, the Bauhaus movement dissolved the
          boundary between fine art and practical design. Its architecture
          stripped buildings to pure geometric volumes — flat roofs, glass
          curtain walls, open floor plans — proving that beauty emerges from
          honest structure, not ornament.
        </p>
      </div>

      <div className="intro__accent" aria-hidden="true">
        <div className="intro__grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="intro__grid-cell" />
          ))}
        </div>
      </div>
    </section>
  )
}
