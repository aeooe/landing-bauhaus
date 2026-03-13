import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__shapes">
        <div className="shape shape--circle" />
        <div className="shape shape--rect-red" />
        <div className="shape shape--rect-blue" />
        <div className="shape shape--line" />
        <div className="shape shape--square-yellow" />
        <div className="shape shape--dot" />
      </div>

      <div className="hero__content">
        <h1 className="hero__title">BAUHAUS</h1>
        <p className="hero__tagline">
          Where art meets function.<br />
          1919 &ndash; forever.
        </p>
      </div>
    </section>
  )
}
