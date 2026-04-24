// SaraAppMock.jsx - The 3 theme variants of the Sara app shown inside the iPhone frame
// Theme tokens
const SARA_THEMES = {
  normal: {
    bg: '#F5EFE3',
    surface: '#FFFFFF',
    accent: '#7A1F2B',         // wine
    accentSoft: 'rgba(122,31,43,0.08)',
    ink: '#2A2724',
    inkSoft: '#8A8378',
    selectedBg: '#1B2A4A',     // navy
    selectedBorder: '#C9A76A', // gold
    selectedInk: '#FFFFFF',
    pillBg: '#FFFFFF',
    pillBorder: 'rgba(40,30,20,0.14)',
    activePillBg: '#7A1F2B',
    activePillInk: '#FFFFFF',
    fab: '#7A1F2B',
    title: '今日のタスク',
    subtitle: '0/3クリア',
    cards: ['お風呂', 'アプリ開発', 'SNS投稿'],
    selectedIndex: 1,
    foot1: 'ストック0件（3日で消滅します）',
    foot2: '今日のタスクは今夜消えます',
    fontFamily: '"Noto Serif JP", "Hiragino Mincho ProN", serif',
    cardFont: '"Noto Sans JP", system-ui, sans-serif',
    cardWeight: 600,
    titleWeight: 700,
    statusDark: false,
  },
  spiritual: {
    bg: '#0E1530',
    surface: '#13203F',
    accent: '#C9A76A',
    accentSoft: 'rgba(201,167,106,0.12)',
    ink: '#E8DFC9',
    inkSoft: '#8A8AA8',
    selectedBg: '#1A2A55',
    selectedBorder: '#C9A76A',
    selectedInk: '#F1E5C0',
    pillBg: 'transparent',
    pillBorder: 'rgba(201,167,106,0.5)',
    activePillBg: '#C9A76A',
    activePillInk: '#0E1530',
    fab: '#7A1F2B',
    title: '今日の儀式',
    subtitle: '0/3 深淵に還る',
    cards: ['アプリ開発', '内なる声を聴く', '月へ祈りを'],
    selectedIndex: 0,
    foot1: 'ストック0件（3日後、無に帰す）',
    foot2: '今宵すべては闇に溶ける',
    fontFamily: '"Noto Serif JP", "Cinzel", serif',
    cardFont: '"Noto Serif JP", serif',
    cardWeight: 700,
    titleWeight: 700,
    statusDark: true,
  },
  pop: {
    bg: '#F8E8B0',
    surface: '#FFFFFF',
    accent: '#FF5C8A',
    accentSoft: 'rgba(255,92,138,0.15)',
    ink: '#111111',
    inkSoft: '#555',
    selectedBg: '#FF5C8A',
    selectedBorder: '#111111',
    selectedInk: '#FFFFFF',
    pillBg: '#FFFFFF',
    pillBorder: '#111111',
    activePillBg: '#FF5C8A',
    activePillInk: '#FFFFFF',
    fab: '#FF5C8A',
    title: '今日やること',
    subtitle: '0/3全消し！',
    cards: ['お風呂!!', 'アプリ開発', 'SNS投稿✌'],
    selectedIndex: 1,
    foot1: 'ストック0件（3日で消滅！）',
    foot2: '今日のタスクは今夜消えるよ〜',
    fontFamily: '"Zen Maru Gothic", "Noto Sans JP", system-ui, sans-serif',
    cardFont: '"Zen Maru Gothic", "Noto Sans JP", system-ui, sans-serif',
    cardWeight: 800,
    titleWeight: 900,
    statusDark: false,
  },
};

// The screen content rendered inside an iPhone frame
function SaraScreen({ theme = 'normal', scale = 1 }) {
  const t = SARA_THEMES[theme];
  const c = t.statusDark ? '#fff' : '#000';

  return (
    <div style={{
      width: '100%', height: '100%', background: t.bg,
      display: 'flex', flexDirection: 'column',
      fontFamily: t.cardFont, position: 'relative',
      color: t.ink,
    }}>
      {/* Status bar (compact) */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 28px 6px', fontSize: 14, fontWeight: 600,
        color: c, fontFamily: '-apple-system, "SF Pro", system-ui',
      }}>
        <span>21:47</span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <svg width="16" height="10" viewBox="0 0 19 12">
            <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={c}/>
            <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={c}/>
            <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={c}/>
            <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={c}/>
          </svg>
          <svg width="14" height="10" viewBox="0 0 17 12">
            <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={c}/>
            <circle cx="8.5" cy="10.5" r="1.5" fill={c}/>
          </svg>
          <svg width="22" height="11" viewBox="0 0 27 13">
            <rect x="0.5" y="0.5" width="23" height="12" rx="3" stroke={c} strokeOpacity="0.4" fill="none"/>
            <rect x="2" y="2" width="20" height="9" rx="1.5" fill={c}/>
          </svg>
        </div>
      </div>

      {/* Theme pills */}
      <div style={{
        display: 'flex', gap: 8, justifyContent: 'center', marginTop: 10,
      }}>
        {['Normal', 'Spiritual', 'POP'].map((label) => {
          const active = label.toLowerCase() === theme;
          return (
            <div key={label} style={{
              padding: '6px 14px', borderRadius: 999,
              fontSize: 12, fontWeight: 600,
              background: active ? t.activePillBg : t.pillBg,
              color: active ? t.activePillInk : t.ink,
              border: `1px solid ${active ? t.activePillBg : t.pillBorder}`,
              fontFamily: t.cardFont,
            }}>{label}</div>
          );
        })}
      </div>

      {/* Title */}
      <div style={{ textAlign: 'center', marginTop: 14, padding: '0 24px' }}>
        <div style={{
          fontFamily: t.fontFamily, fontWeight: t.titleWeight,
          fontSize: 28, color: t.ink, letterSpacing: theme === 'pop' ? 0 : 1,
        }}>{t.title}</div>
        <div style={{
          fontSize: 13, color: t.inkSoft, marginTop: 6,
          fontWeight: theme === 'pop' ? 700 : 400,
        }}>{t.subtitle}</div>
      </div>

      {/* Cards stack */}
      <div style={{
        flex: 1, padding: '22px 22px 0', display: 'flex',
        flexDirection: 'column', gap: 12, position: 'relative',
      }}>
        {t.cards.map((card, i) => {
          const selected = i === t.selectedIndex;
          return (
            <div key={i} style={{
              background: selected ? t.selectedBg : t.surface,
              color: selected ? t.selectedInk : t.ink,
              borderRadius: theme === 'pop' ? 18 : 14,
              padding: '20px 22px',
              fontSize: 17, fontWeight: t.cardWeight,
              fontFamily: t.cardFont,
              border: selected
                ? `1.5px solid ${t.selectedBorder}`
                : (theme === 'pop' ? '1.5px solid #111' : '1px solid rgba(0,0,0,0.04)'),
              boxShadow: theme === 'pop'
                ? (selected ? '4px 4px 0 #111' : '3px 3px 0 #111')
                : (selected ? '0 8px 22px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.05)'),
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span>{card}</span>
              <span style={{ opacity: 0.5, fontSize: 18, letterSpacing: 2 }}>···</span>
            </div>
          );
        })}
      </div>

      {/* Footer text */}
      <div style={{
        textAlign: 'center', padding: '14px 22px 18px',
        fontSize: 11, color: t.inkSoft, lineHeight: 1.7,
      }}>
        <div>{t.foot1}</div>
        <div>{t.foot2}</div>
      </div>

      {/* FAB */}
      <div style={{
        position: 'absolute', right: 18, bottom: 22,
        width: 46, height: 46, borderRadius: '50%',
        background: t.fab, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 22, fontWeight: 300,
        boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
      }}>{theme === 'pop' ? '⚡' : '＋'}</div>
    </div>
  );
}

// Compact phone frame (lighter than full IOSDevice — fits LP scale)
function PhoneFrame({ children, scale = 1 }) {
  return (
    <div style={{
      width: 290 * scale, height: 600 * scale,
      borderRadius: 44 * scale,
      background: '#0a0a0a',
      padding: 8 * scale,
      boxShadow: '0 20px 50px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05) inset',
      position: 'relative',
    }}>
      <div style={{
        width: '100%', height: '100%', borderRadius: 36 * scale,
        overflow: 'hidden', position: 'relative', background: '#fff',
      }}>
        {/* Notch */}
        <div style={{
          position: 'absolute', top: 8 * scale, left: '50%',
          transform: 'translateX(-50%)',
          width: 100 * scale, height: 28 * scale, borderRadius: 999,
          background: '#0a0a0a', zIndex: 30,
        }}/>
        {children}
      </div>
    </div>
  );
}

Object.assign(window, { SaraScreen, PhoneFrame, SARA_THEMES });
