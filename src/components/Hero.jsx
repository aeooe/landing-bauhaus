import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <span className="hero__byline">A study in modernism</span>

      <div className="hero__content">
        <h1 className="hero__title">
          BAUHAUS
          <br />
          ARCHITECTURE
        </h1>
        <p className="hero__subtitle">
          A DESIGN MOVEMENT FOUNDED IN 1919.
          <br />
          WHERE ART MEETS FUNCTION.
          <br />
          FORM FOLLOWS PURPOSE.
        </p>
      </div>
    </section>
  )
}
