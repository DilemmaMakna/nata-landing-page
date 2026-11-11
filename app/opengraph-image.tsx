import { ImageResponse } from 'next/og';

export const alt = 'Nataku | Bikin Tugas Kuliah Beneran Beres';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#F0441E',
          color: '#FFF4F2',
        }}
      >
        <div style={{ display: 'flex', fontSize: 52, fontWeight: 700, letterSpacing: -2 }}>Nataku</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 104, fontWeight: 600, lineHeight: 1, letterSpacing: -4 }}>
            Beres tugas tanpa pusing!
          </div>
          <div style={{ display: 'flex', fontSize: 34, marginTop: 28, opacity: 0.92 }}>
            Asisten tugas kuliah lewat WhatsApp, setiap pagi jam 7.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
