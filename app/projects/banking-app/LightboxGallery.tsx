'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const galleryImages = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/VUB ${i + 1}.png`,
  alt: `VÚB redesign screen ${i + 1}`,
}));

export default function LightboxGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] cursor-pointer"
            onClick={() => {
              setPhotoIndex(index);
              setLightboxOpen(true);
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain rounded-xl shadow-sm hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={galleryImages}
        plugins={[Zoom, Thumbnails]}
        carousel={{ finite: true, preload: 2 }}
        thumbnails={{ position: 'bottom' }}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
      />
    </>
  );
}
