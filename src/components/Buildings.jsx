import useReveal from '../hooks/useReveal'
import './Buildings.css'

const buildings = [
  {
    name: 'Bauhaus Dessau',
    year: '1925',
    architect: 'Walter Gropius',
    detail: 'Glass curtain walls, pinwheel plan, workshop wing cantilevered over road.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=700&q=80',
    tall: true,
  },
  {
    name: 'Haus Am Horn',
    year: '1923',
    architect: 'Georg Muche',
    detail: 'The first Bauhaus building \u2014 a cubic prototype for modern living.',
    img: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=700&q=80',
    tall: false,
  },
  {
    name: 'Fagus Factory',
    year: '1911',
    architect: 'Walter Gropius & Adolf Meyer',
    detail: 'Corner glass walls with no visible support \u2014 a precursor to the movement.',
    img: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&w=700&q=80',
    tall: false,
  },
  {
    name: 'Masters\u2019 Houses',
    year: '1926',
    architect: 'Walter Gropius',
    detail: 'Interlocking cubes in Dessau \u2014 studios and homes fused into one.',
    img: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=700&q=80',
    tall: true,
  },
]

export default function Buildings() {
  const [ref, visible] = useReveal()

  return (
    <section className={`buildings ${visible ? 'buildings--visible' : ''}`} ref={ref}>
      <h2 className="buildings__heading">Notable Buildings</h2>

      <div className="buildings__grid">
        {buildings.map((b) => (
          <article
            key={b.name}
            className={`buildings__item ${b.tall ? 'buildings__item--tall' : ''}`}
          >
            <div className="buildings__img-wrap">
              <img
                className="buildings__img"
                src={b.img}
                alt={b.name}
                loading="lazy"
              />
            </div>
            <span className="buildings__year">{b.year}</span>
            <h3 className="buildings__name">{b.name}</h3>
            <p className="buildings__architect">{b.architect}</p>
            <p className="buildings__detail">{b.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
