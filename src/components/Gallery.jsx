import './Gallery.css'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=400&q=80',
    alt: 'Modernist concrete facade',
  },
  {
    src: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&w=600&h=400&q=80',
    alt: 'Glass curtain wall building',
  },
  {
    src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=600&h=400&q=80',
    alt: 'Geometric architectural detail',
  },
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&h=400&q=80',
    alt: 'Bauhaus-style building exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=600&h=400&q=80',
    alt: 'White modernist structure',
  },
  {
    src: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=600&h=400&q=80',
    alt: 'Architectural lines and volumes',
  },
]

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__track">
        {images.map((img, i) => (
          <img
            key={i}
            className="gallery__img"
            src={img.src}
            alt={img.alt}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  )
}
