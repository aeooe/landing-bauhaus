import useReveal from '../hooks/useReveal'
import './Buildings.css'

const buildings = [
  {
    name: 'Bauhaus Dessau',
    year: '1925',
    architect: 'Walter Gropius',
    detail: 'Glass curtain walls, pinwheel plan, workshop wing cantilevered over road.',
  },
  {
    name: 'Haus Am Horn',
    year: '1923',
    architect: 'Georg Muche',
    detail: 'The first Bauhaus building — a cubic prototype for modern living.',
  },
  {
    name: 'Fagus Factory',
    year: '1911',
    architect: 'Walter Gropius & Adolf Meyer',
    detail: 'Corner glass walls with no visible support — a precursor to the movement.',
  },
  {
    name: 'Masters\u2019 Houses',
    year: '1926',
    architect: 'Walter Gropius',
    detail: 'Interlocking cubes in Dessau — studios and homes fused into one.',
  },
]

export default function Buildings() {
  const [ref, visible] = useReveal()

  return (
    <section className={`buildings ${visible ? 'buildings--visible' : ''}`} ref={ref}>
      <h2 className="buildings__heading">Notable Buildings</h2>

      <div className="buildings__grid">
        {buildings.map((b) => (
          <article key={b.name} className="buildings__item">
            <div className="buildings__meta">
              <span className="buildings__year">{b.year}</span>
              <span className="buildings__line" />
            </div>
            <h3 className="buildings__name">{b.name}</h3>
            <p className="buildings__architect">{b.architect}</p>
            <p className="buildings__detail">{b.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
