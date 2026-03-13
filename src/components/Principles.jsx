import useReveal from '../hooks/useReveal'
import './Principles.css'

const items = [
  {
    number: '01',
    title: 'Unity of Art & Technology',
    text: 'Craft and industry merge into a single creative discipline — no hierarchy between painter and carpenter.',
  },
  {
    number: '02',
    title: 'Geometric Purity',
    text: 'Circle, square, triangle. Every form is distilled to its essential geometry, free of ornament.',
  },
  {
    number: '03',
    title: 'Functional Honesty',
    text: 'Materials and structure are never disguised. A building reveals how it is made and what it is for.',
  },
]

export default function Principles() {
  const [ref, visible] = useReveal()

  return (
    <section className={`principles ${visible ? 'principles--visible' : ''}`} ref={ref}>
      <h2 className="principles__heading">Principles</h2>

      <div className="principles__list">
        {items.map((item) => (
          <article key={item.number} className="principles__card">
            <span className="principles__number">{item.number}</span>
            <h3 className="principles__title">{item.title}</h3>
            <p className="principles__text">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
