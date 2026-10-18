import { Flower2 } from 'lucide-react'
import { useState } from 'react'

export default function RibbonPhoto({ src, alt, priority = false }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span className="photo-fallback" role="img" aria-label={alt}>
        <Flower2 size={35} strokeWidth={1} aria-hidden="true" />
        <span>ANAMIKA GODBOLE</span>
        <small>Handmade ribbon flowers</small>
      </span>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setFailed(true)}
    />
  )
}
