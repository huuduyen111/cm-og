import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const home = searchParams.get('home') || 'Đội nhà';
  const away = searchParams.get('away') || 'Đội khách';
  const league = searchParams.get('league') || 'Giải đấu';
  const homeLogo = searchParams.get('hl');
  const awayLogo = searchParams.get('al');

  return new ImageResponse(
    (
      <div style={{
        display: 'flex', flexDirection: 'column', width: '100%', height: '100%',
        background: 'linear-gradient(to bottom, #0d2e13, #1e5c26)',
        alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif',
      }}>
        <div style={{ color: '#ffd749', fontSize: 40, fontWeight: 'bold', marginBottom: 60, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          {league.toUpperCase()}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
            {homeLogo ? <img src={homeLogo} width="220" height="220" style={{ objectFit: 'contain' }} /> : <div style={{ width: 220, height: 220, background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />}
            <div style={{ color: 'white', fontSize: 36, fontWeight: 'bold', marginTop: 30, textAlign: 'center' }}>{home}</div>
          </div>
          <div style={{ color: 'white', fontSize: 50, fontWeight: 'bold', opacity: 0.8 }}>VS</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
            {awayLogo ? <img src={awayLogo} width="220" height="220" style={{ objectFit: 'contain' }} /> : <div style={{ width: 220, height: 220, background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />}
            <div style={{ color: 'white', fontSize: 36, fontWeight: 'bold', marginTop: 30, textAlign: 'center' }}>{away}</div>
          </div>
        </div>
      </div>
    ),
    { width: 800, height: 800 }
  );
}
