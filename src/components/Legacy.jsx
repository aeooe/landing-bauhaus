import useReveal from '../hooks/useReveal'
import './Legacy.css'

export default function Legacy() {
  const [ref, visible] = useReveal()

  return (
    <section className={`legacy ${visible ? 'legacy--visible' : ''}`} ref={ref}>
      <div className="legacy__bar" aria-hidden="true" />

      <div className="legacy__content">
        <h2 className="legacy__heading">Legacy</h2>
        <p className="legacy__text">
          Closed by the Nazis in 1933, the Bauhaus lived on through its
          diaspora. Gropius, Mies van der Rohe, and Moholy-Nagy carried its
          ideas to the United States, seeding modernist architecture from
          Chicago to Cambridge. Today, every glass-and-steel tower, every
          open-plan office, every sans-serif typeface on your screen traces
          a line back to Dessau.
        </p>
      </div>

      <div className="legacy__shapes" aria-hidden="true">
        <div className="legacy__circle" />
        <div className="legacy__rect" />
      </div>
    </section>
  )
}
