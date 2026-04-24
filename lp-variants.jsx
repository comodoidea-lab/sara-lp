// LP variants — three takes on the Sara landing page
// All variants take a `theme` prop ('normal' | 'spiritual' | 'pop')

// ─────────────────────────────────────────────────────────────
// LP TOKENS — page-level theme
// ─────────────────────────────────────────────────────────────
const LP_THEMES = {
  normal: {
    pageBg: '#F5EFE3',
    bandBg: '#FFFFFF',
    ink: '#2A2724',
    inkSoft: '#6B6359',
    accent: '#7A1F2B',
    accentSoft: 'rgba(122,31,43,0.08)',
    footerBg: '#2A2320',
    footerInk: '#E8E0D2',
    footerHead: '#E8E0D2',
    footerMuted: 'rgba(232,224,210,0.45)',
    footerDivider: 'rgba(232,224,210,0.12)',
    serif: '"Noto Serif JP", "Hiragino Mincho ProN", serif',
    sans: '"Noto Sans JP", system-ui, sans-serif',
    btnBg: '#7A1F2B',
    btnInk: '#FFFFFF',
    bullet: '#7A1F2B',
    headlineWeight: 700,
    headlineKey: '管理しない、\nタスク管理。',
    subKey: '今日の3枚だけ。夜にぜんぶ消える。',
    section2Title: 'ストレスの少ない、\n小さな一歩を応援します。',
    moodLabel: 'NORMAL · 落ち着いた毎日に',
  },
  spiritual: {
    pageBg: '#0E1530',
    bandBg: '#13203F',
    ink: '#E8DFC9',
    inkSoft: '#8A8AA8',
    accent: '#C9A76A',
    accentSoft: 'rgba(201,167,106,0.10)',
    footerBg: '#070B1C',
    footerInk: '#E8DFC9',
    footerHead: '#C9A76A',
    footerMuted: 'rgba(232,223,201,0.40)',
    footerDivider: 'rgba(201,167,106,0.22)',
    serif: '"Noto Serif JP", "Cinzel", serif',
    sans: '"Noto Serif JP", serif',
    btnBg: '#C9A76A',
    btnInk: '#0E1530',
    bullet: '#C9A76A',
    headlineWeight: 700,
    headlineKey: '支配されぬ、\n運命の儀式。',
    subKey: '今日の3つの儀式。月が昇れば、無に還る。',
    section2Title: '汝の歩みは、\n星々が見守る。',
    moodLabel: '✦ SPIRITUAL · 内なる声に従え',
  },
  pop: {
    pageBg: '#F8E8B0',
    bandBg: '#FFFFFF',
    ink: '#111111',
    inkSoft: '#444',
    accent: '#FF5C8A',
    accentSoft: 'rgba(255,92,138,0.15)',
    footerBg: '#111111',
    footerInk: '#FFF6DC',
    footerHead: '#FF5C8A',
    footerMuted: 'rgba(255,246,220,0.45)',
    footerDivider: 'rgba(255,92,138,0.30)',
    serif: '"Zen Maru Gothic", "Noto Sans JP", system-ui, sans-serif',
    sans: '"Zen Maru Gothic", "Noto Sans JP", system-ui, sans-serif',
    btnBg: '#FF5C8A',
    btnInk: '#FFFFFF',
    bullet: '#FF5C8A',
    headlineWeight: 900,
    headlineKey: '管理しないで！\nタスク管理！！',
    subKey: '今日の3枚！夜には全部きえちゃう⚡',
    section2Title: 'もっと気楽に、\nもっと小さく一歩。',
    moodLabel: '★ POP · ノリで今日も完了！',
  },
};

// ─────────────────────────────────────────────────────────────
// Shared atoms
// ─────────────────────────────────────────────────────────────
function ThemePicker({ value, onChange, lp }) {
  const themes = ['normal', 'spiritual', 'pop'];
  return (
    <div style={{
      display: 'inline-flex', gap: 0,
      padding: 4, borderRadius: 999,
      background: lp.accentSoft,
      border: `1px solid ${lp.accent}33`,
    }}>
      {themes.map((th) => {
        const active = th === value;
        const label = th[0].toUpperCase() + th.slice(1);
        return (
          <button key={th} onClick={() => onChange(th)} style={{
            padding: '7px 18px', borderRadius: 999, border: 'none',
            background: active ? lp.accent : 'transparent',
            color: active ? (th === 'spiritual' ? '#0E1530' : '#fff') : lp.ink,
            fontFamily: lp.sans, fontSize: 13, fontWeight: 600,
            cursor: 'pointer', transition: 'all .25s',
            letterSpacing: 0.3,
          }}>{label}</button>
        );
      })}
    </div>
  );
}

function AppStoreButton({ lp, hoverable = true }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          padding: '16px 30px', borderRadius: 999,
          background: lp.btnBg, color: lp.btnInk,
          border: 'none', cursor: 'not-allowed',
          fontFamily: lp.sans, fontSize: 17, fontWeight: 700,
          opacity: 0.55, filter: 'saturate(0.85)',
          boxShadow: hover && hoverable
            ? `0 14px 28px ${lp.accent}55, 0 0 0 4px ${lp.accent}22`
            : `0 6px 16px ${lp.accent}33`,
          transform: hover && hoverable ? 'translateY(-2px)' : 'translateY(0)',
          transition: 'all .25s cubic-bezier(.2,.7,.3,1)',
        }}>
        <svg width="22" height="24" viewBox="0 0 22 24" fill="currentColor">
          <path d="M17.5 12.7c0-2.6 2.1-3.9 2.2-3.9-1.2-1.7-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.4 1-4.3 2.6-1.8 3.2-.5 7.9 1.3 10.5.9 1.3 1.9 2.7 3.3 2.6 1.3-.1 1.8-.9 3.4-.9 1.6 0 2.1.9 3.4.8 1.4 0 2.3-1.3 3.2-2.6 1-1.5 1.4-2.9 1.4-3-.1 0-2.7-1-2.9-4.1zM14.7 4.4c.7-.9 1.2-2.1 1.1-3.4-1 0-2.3.7-3.1 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.3-.6 3.1-1.4z"/>
        </svg>
        App Storeでダウンロード
      </button>
      {/* Coming Soon layer */}
      <div style={{
        position: 'absolute', top: -14, right: -18,
        padding: '8px 16px', borderRadius: 999,
        background: lp.ink, color: lp.pageBg,
        fontFamily: lp.sans, fontSize: 12, fontWeight: 800,
        letterSpacing: 2, transform: 'rotate(6deg)',
        boxShadow: `0 6px 16px rgba(0,0,0,0.25), 0 0 0 2px ${lp.pageBg}`,
        pointerEvents: 'none', whiteSpace: 'nowrap',
      }}>
        COMING SOON
      </div>
      {/* Subtle diagonal ribbon across the button */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 999,
        pointerEvents: 'none',
        background: `repeating-linear-gradient(135deg, transparent 0 10px, ${lp.pageBg}22 10px 12px)`,
      }}/>
    </div>
  );
}

function Bullet({ children, lp }) {
  return (
    <li style={{
      listStyle: 'none', display: 'flex', alignItems: 'center', gap: 10,
      padding: '4px 0',
    }}>
      <span style={{
        width: 18, height: 18, borderRadius: '50%',
        background: lp.bullet, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 11, fontWeight: 700, flexShrink: 0,
      }}>✓</span>
      <span style={{ fontFamily: lp.sans, fontSize: 14.5, color: lp.ink }}>
        {children}
      </span>
    </li>
  );
}

function FeatureIcon({ kind, lp }) {
  // simple geometric SVG icons matching the brand minimalism
  const stroke = lp.accent;
  if (kind === 'cal') return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <rect x="4" y="7" width="26" height="22" rx="3" stroke={stroke} strokeWidth="1.6"/>
      <path d="M4 13H30" stroke={stroke} strokeWidth="1.6"/>
      <path d="M11 4V10M23 4V10" stroke={stroke} strokeWidth="1.6" strokeLinecap="round"/>
      <text x="17" y="25" textAnchor="middle" fontSize="9" fill={stroke} fontFamily="serif" fontWeight="700">3</text>
    </svg>
  );
  if (kind === 'moon') return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path d="M22 4C13.7 4 7 10.7 7 19C7 27.3 13.7 34 22 34C18 30 15.5 24.5 15.5 19C15.5 13.5 18 8 22 4Z" fill={stroke}/>
    </svg>
  );
  if (kind === 'stack') return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path d="M17 4L4 11L17 18L30 11L17 4Z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M4 17L17 24L30 17" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M4 23L17 30L30 23" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}

function Logo({ lp, size = 1 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
      <span style={{
        fontFamily: lp.serif, fontWeight: 700,
        fontSize: 32 * size, color: lp.accent, letterSpacing: 0.5,
        lineHeight: 1,
      }}>Sara</span>
      <span style={{
        fontFamily: lp.serif, fontSize: 11 * size,
        color: lp.accent, opacity: 0.7,
      }}>さら</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// VARIANT A · CONSERVATIVE
// Faithful to the reference, theme switcher only on phone mock
// ─────────────────────────────────────────────────────────────
function LPConservative() {
  const [phoneTheme, setPhoneTheme] = React.useState('normal');
  const lp = LP_THEMES.normal; // page stays Normal
  return (
    <div style={{ width: 1200, background: lp.pageBg, fontFamily: lp.sans, color: lp.ink }}>
      {/* HERO */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr',
        padding: '46px 64px 56px', gap: 48, alignItems: 'center',
      }}>
        <div>
          <Logo lp={lp}/>
          <h1 style={{
            fontFamily: lp.serif, fontWeight: lp.headlineWeight,
            fontSize: 62, lineHeight: 1.15, color: lp.accent,
            margin: '36px 0 18px', letterSpacing: 1, whiteSpace: 'pre-line',
          }}>{lp.headlineKey}</h1>
          <p style={{
            fontFamily: lp.serif, fontSize: 19, color: lp.ink,
            margin: '0 0 28px',
          }}>{lp.subKey}</p>
          <p style={{
            fontFamily: lp.sans, fontSize: 14, lineHeight: 1.9, color: lp.inkSoft,
            margin: '0 0 36px', maxWidth: 480,
          }}>
            Sara（さら）は、ADHDや発達特性のある方のための<br/>
            シンプルなタスクアプリです。<br/>
            タスクは3つまで。夜になるとすべてリセットされます。
          </p>
          <AppStoreButton lp={lp}/>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            marginTop: 16, fontSize: 13, color: lp.inkSoft,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 6V12C4 17 7.5 21.5 12 22C16.5 21.5 20 17 20 12V6L12 2Z"
                stroke={lp.inkSoft} strokeWidth="1.5"/>
            </svg>
            個人情報の登録は不要です
          </div>
        </div>
        {/* phone with internal theme switcher */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <ThemePicker value={phoneTheme} onChange={setPhoneTheme} lp={lp}/>
          <PhoneFrame>
            <SaraScreen theme={phoneTheme}/>
          </PhoneFrame>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{
        background: lp.bandBg, padding: '40px 64px',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 36,
      }}>
        {[
          { icon: 'cal', title: '今日の3枚だけ', body: 'タスクは1日3つまで。シンプルだから続けられる。' },
          { icon: 'moon', title: '夜にぜんぶ消える', body: 'プレッシャーも不安もリセット。明日、また新しく。' },
          { icon: 'stack', title: '3日でストック消滅', body: 'ストックは3日で消えます。ためこまない仕組み。' },
        ].map((f, i) => (
          <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: lp.pageBg, display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <FeatureIcon kind={f.icon} lp={lp}/>
            </div>
            <div>
              <div style={{
                fontFamily: lp.sans, fontWeight: 700, fontSize: 16, marginBottom: 6,
              }}>{f.title}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.75, color: lp.inkSoft }}>{f.body}</div>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 2 — calm */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr',
        padding: '54px 64px', gap: 48, alignItems: 'center',
      }}>
        <div>
          <h2 style={{
            fontFamily: lp.serif, fontSize: 38, color: lp.accent,
            fontWeight: 700, lineHeight: 1.3, margin: '0 0 22px',
            whiteSpace: 'pre-line',
          }}>{lp.section2Title}</h2>
          <p style={{
            fontFamily: lp.sans, fontSize: 14, lineHeight: 1.95, color: lp.inkSoft,
            margin: '0 0 24px',
          }}>
            やることが多すぎると、動けなくなることがあります。<br/>
            Saraは「今日やること」だけに集中できるように<br/>
            設計された、やさしいタスクアプリです。
          </p>
          <ul style={{ padding: 0, margin: 0 }}>
            <Bullet lp={lp}>タスクは3つまで</Bullet>
            <Bullet lp={lp}>夜にリセットされて、気持ちが軽くなる</Bullet>
            <Bullet lp={lp}>必要なときだけ、ストックを使える</Bullet>
          </ul>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PhoneFrame>
            <SaraScreen theme="spiritual"/>
          </PhoneFrame>
        </div>
      </section>

      {/* THEMES strip — three small phones */}
      <section style={{
        background: lp.bandBg, padding: '50px 64px 60px', textAlign: 'center',
      }}>
        <div style={{
          fontFamily: lp.sans, fontSize: 12, color: lp.inkSoft,
          letterSpacing: 3, marginBottom: 8,
        }}>3 THEMES</div>
        <h3 style={{
          fontFamily: lp.serif, fontSize: 30, color: lp.ink,
          margin: '0 0 36px', fontWeight: 700,
        }}>気分でえらぶ、3つの世界。</h3>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        }}>
          {['normal', 'spiritual', 'pop'].map((th) => {
            const labels = {
              normal: { name: 'Normal', sub: '日常に寄り添う、静かな相棒。' },
              spiritual: { name: 'Spiritual', sub: '今日の儀式に、深い意味を。' },
              pop: { name: 'POP', sub: '元気よく、ノリで完了！' },
            };
            return (
              <div key={th} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                <PhoneFrame scale={0.78}>
                  <SaraScreen theme={th}/>
                </PhoneFrame>
                <div style={{
                  fontFamily: lp.serif, fontSize: 20, fontWeight: 700,
                  color: lp.accent,
                }}>{labels[th].name}</div>
                <div style={{ fontSize: 12.5, color: lp.inkSoft }}>{labels[th].sub}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '32px 64px', borderTop: `1px solid ${lp.accent}22`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <Logo lp={lp} size={0.75}/>
        <div style={{ fontSize: 12, color: lp.inkSoft }}>
          © 2026 Sara · 利用規約 · プライバシーポリシー · お問い合わせ
        </div>
      </footer>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// VARIANT B · BALANCED
// Whole-page theme switching, smooth transitions, larger phone hero
// ─────────────────────────────────────────────────────────────
function LPBalanced() {
  const [theme, setTheme] = React.useState('normal');
  const lp = LP_THEMES[theme];

  return (
    <div style={{
      width: 1200, background: lp.pageBg, fontFamily: lp.sans, color: lp.ink,
      transition: 'background .45s ease',
    }}>
      {/* Floating theme picker (sticky-feel) */}
      <div style={{
        padding: '24px 56px 0', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Logo lp={lp}/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{
            fontFamily: lp.sans, fontSize: 11, color: lp.inkSoft, letterSpacing: 2,
          }}>THEME</span>
          <ThemePicker value={theme} onChange={setTheme} lp={lp}/>
        </div>
      </div>

      {/* HERO */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1.15fr 1fr',
        padding: '40px 56px 60px', gap: 48, alignItems: 'center',
      }}>
        <div>
          <div style={{
            display: 'inline-block', padding: '6px 14px',
            border: `1px solid ${lp.accent}66`, borderRadius: 999,
            fontSize: 11, color: lp.accent, letterSpacing: 2,
            fontFamily: lp.sans, marginBottom: 28, fontWeight: 600,
          }}>{lp.moodLabel}</div>
          <h1 style={{
            fontFamily: lp.serif, fontWeight: lp.headlineWeight,
            fontSize: 66, lineHeight: 1.18, color: lp.accent,
            margin: '0 0 22px', letterSpacing: theme === 'pop' ? 0 : 1,
            whiteSpace: 'pre-line',
            transition: 'color .4s, font-family .3s',
          }}>{lp.headlineKey}</h1>
          <p style={{
            fontFamily: lp.serif, fontSize: 20, color: lp.ink,
            margin: '0 0 32px', lineHeight: 1.55,
          }}>{lp.subKey}</p>
          <p style={{
            fontFamily: lp.sans, fontSize: 14, lineHeight: 1.95, color: lp.inkSoft,
            margin: '0 0 40px', maxWidth: 460,
          }}>
            Sara（さら）は、ADHDや発達特性のある方のための<br/>
            シンプルなタスクアプリです。タスクは3つまで。<br/>
            夜になるとすべてリセットされます。
          </p>
          <AppStoreButton lp={lp}/>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            marginTop: 16, fontSize: 13, color: lp.inkSoft,
          }}>
            <span style={{ color: lp.accent }}>◆</span> 個人情報の登録は不要です
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PhoneFrame scale={1.05}>
            <SaraScreen theme={theme}/>
          </PhoneFrame>
        </div>
      </section>

      {/* FEATURES band */}
      <section style={{
        background: lp.bandBg, padding: '46px 56px',
        borderTop: `1px solid ${lp.accent}22`,
        borderBottom: `1px solid ${lp.accent}22`,
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 36,
        }}>
          {[
            { icon: 'cal', title: '今日の3枚だけ', body: 'タスクは1日3つまで。シンプルだから続けられる。' },
            { icon: 'moon', title: '夜にぜんぶ消える', body: 'プレッシャーも不安もリセット。明日、また新しく。' },
            { icon: 'stack', title: '3日でストック消滅', body: 'ストックは3日で消えます。ためこまない仕組み。' },
          ].map((f, i) => (
            <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <div style={{
                width: 60, height: 60, borderRadius: '50%',
                background: lp.accentSoft, display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <FeatureIcon kind={f.icon} lp={lp}/>
              </div>
              <div>
                <div style={{
                  fontFamily: lp.serif, fontWeight: 700, fontSize: 17, marginBottom: 6,
                }}>{f.title}</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.75, color: lp.inkSoft }}>{f.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2 */}
      <section style={{
        padding: '60px 56px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* contrasting theme phone */}
          <PhoneFrame>
            <SaraScreen theme={theme === 'normal' ? 'spiritual' : (theme === 'spiritual' ? 'pop' : 'normal')}/>
          </PhoneFrame>
        </div>
        <div>
          <h2 style={{
            fontFamily: lp.serif, fontSize: 42, color: lp.accent,
            fontWeight: 700, lineHeight: 1.3, margin: '0 0 22px',
            whiteSpace: 'pre-line',
          }}>{lp.section2Title}</h2>
          <p style={{
            fontFamily: lp.sans, fontSize: 14.5, lineHeight: 1.95, color: lp.inkSoft,
            margin: '0 0 26px',
          }}>
            やることが多すぎると、動けなくなることがあります。<br/>
            Saraは「今日やること」だけに集中できるように設計された、<br/>
            やさしいタスクアプリです。
          </p>
          <ul style={{ padding: 0, margin: 0 }}>
            <Bullet lp={lp}>タスクは3つまで</Bullet>
            <Bullet lp={lp}>夜にリセットされて、気持ちが軽くなる</Bullet>
            <Bullet lp={lp}>必要なときだけ、ストックを使える</Bullet>
          </ul>
        </div>
      </section>

      {/* THEME CALLOUT */}
      <section style={{
        background: lp.bandBg, padding: '54px 56px',
        textAlign: 'center', borderTop: `1px solid ${lp.accent}22`,
      }}>
        <div style={{
          fontFamily: lp.sans, fontSize: 12, color: lp.accent,
          letterSpacing: 4, marginBottom: 10, fontWeight: 600,
        }}>— 3 THEMES —</div>
        <h3 style={{
          fontFamily: lp.serif, fontSize: 34, color: lp.ink,
          margin: '0 0 14px', fontWeight: 700,
        }}>気分にあわせて、アプリの世界が変わる。</h3>
        <p style={{
          fontFamily: lp.sans, fontSize: 14, color: lp.inkSoft,
          margin: '0 auto 36px', maxWidth: 540, lineHeight: 1.85,
        }}>
          上の「Theme」スイッチで、ページ全体の雰囲気が切り替わります。<br/>
          自分の今日の気分に、いちばん合う1つを選んでください。
        </p>
        <div style={{
          display: 'inline-flex', gap: 10, padding: 6,
          background: lp.pageBg, borderRadius: 999,
        }}>
          {['normal', 'spiritual', 'pop'].map((th) => {
            const active = th === theme;
            const dot = { normal: '#7A1F2B', spiritual: '#C9A76A', pop: '#FF5C8A' }[th];
            return (
              <button key={th} onClick={() => setTheme(th)} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '12px 22px', borderRadius: 999, border: 'none',
                background: active ? lp.accent : 'transparent',
                color: active ? (th === 'spiritual' ? '#0E1530' : '#fff') : lp.ink,
                cursor: 'pointer', fontSize: 14, fontWeight: 600,
                fontFamily: lp.sans,
              }}>
                <span style={{
                  width: 10, height: 10, borderRadius: '50%', background: dot,
                  boxShadow: active ? `0 0 0 2px ${active ? lp.btnInk : '#fff'}33` : 'none',
                }}/>
                {th[0].toUpperCase() + th.slice(1)}
              </button>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '60px 56px 36px',
        background: lp.footerBg,
        color: lp.footerInk,
        borderTop: `1px solid ${lp.accent}22`,
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 48, paddingBottom: 48,
          borderBottom: `1px solid ${lp.footerDivider}`,
        }}>
          {[
            {
              head: 'PRODUCT',
              items: [
                { label: 'アプリを開く', arrow: true, href: 'https://sara.comodoidea.com/' },
                { label: '機能一覧' },
                { label: 'よくある困りごと(準備中)', muted: true },
              ],
            },
            {
              head: 'DEVELOPER',
              items: [
                { label: 'comodoidea', arrow: true, href: 'https://www.comodoidea.com/' },
                { label: '個人開発について' },
                { label: 'お問い合わせ:\ninfo@comodoidea.com', href: 'mailto:info@comodoidea.com', break: true },
              ],
            },
            {
              head: 'LEGAL',
              items: [
                { label: '利用規約(準備中)', muted: true },
                { label: 'プライバシーポリシー(準備中)', muted: true },
              ],
            },
          ].map((col, ci) => (
            <div key={ci}>
              <div style={{
                fontFamily: lp.sans, fontSize: 12, letterSpacing: 3,
                fontWeight: 700, color: lp.footerHead, marginBottom: 22,
              }}>{col.head}</div>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none',
                display: 'flex', flexDirection: 'column', gap: 14 }}>
                {col.items.map((it, i) => (
                  <li key={i}>
                    <a href={it.href || '#'}
                      target={it.href && it.href.startsWith('http') ? '_blank' : undefined}
                      rel={it.href && it.href.startsWith('http') ? 'noreferrer' : undefined}
                      style={{
                        fontFamily: lp.sans, fontSize: 14,
                        color: it.muted ? lp.footerMuted : lp.footerInk,
                        textDecoration: 'none', lineHeight: 1.5,
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        whiteSpace: it.break ? 'pre-line' : 'normal',
                      }}>
                      {it.label}
                      {it.arrow && (
                        <span style={{
                          fontSize: 13, color: lp.accent, marginLeft: 2,
                        }}>↗</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 24,
        }}>
          <Logo lp={lp} size={0.7}/>
          <div style={{ fontSize: 12, color: lp.footerMuted, fontFamily: lp.sans }}>
            © 2026 Sara · comodoidea
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// VARIANT C · ADVENTUROUS
// Bold layout with editorial split, theme dramatically restyles everything
// ─────────────────────────────────────────────────────────────
function LPAdventurous() {
  const [theme, setTheme] = React.useState('normal');
  const lp = LP_THEMES[theme];

  return (
    <div style={{
      width: 1200, background: lp.pageBg, fontFamily: lp.sans, color: lp.ink,
      transition: 'background .5s',
    }}>
      {/* TOP BAR */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 48px', borderBottom: `1px solid ${lp.accent}22`,
      }}>
        <Logo lp={lp} size={0.85}/>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a style={{ fontSize: 13, color: lp.inkSoft, fontFamily: lp.sans }}>特徴</a>
          <a style={{ fontSize: 13, color: lp.inkSoft, fontFamily: lp.sans }}>テーマ</a>
          <a style={{ fontSize: 13, color: lp.inkSoft, fontFamily: lp.sans }}>サポート</a>
          <ThemePicker value={theme} onChange={setTheme} lp={lp}/>
        </div>
      </div>

      {/* HERO — vertical split with phone bleeding into right edge */}
      <section style={{ position: 'relative', padding: '60px 0 80px', overflow: 'hidden' }}>
        {/* Big background number */}
        <div style={{
          position: 'absolute', right: -40, top: 30,
          fontFamily: lp.serif, fontSize: 540, lineHeight: 1, color: lp.accent,
          opacity: 0.06, fontWeight: 700, pointerEvents: 'none', userSelect: 'none',
        }}>3</div>

        <div style={{
          position: 'relative', display: 'grid', gridTemplateColumns: '1.3fr 1fr',
          padding: '0 60px', gap: 32, alignItems: 'center',
        }}>
          <div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28,
            }}>
              <div style={{ width: 44, height: 1, background: lp.accent }}/>
              <span style={{
                fontSize: 11, letterSpacing: 4, color: lp.accent,
                fontFamily: lp.sans, fontWeight: 600,
              }}>{lp.moodLabel}</span>
            </div>
            <h1 style={{
              fontFamily: lp.serif, fontWeight: lp.headlineWeight,
              fontSize: 92, lineHeight: 1.05, color: lp.accent,
              margin: '0 0 28px', letterSpacing: theme === 'pop' ? -1 : 1,
              whiteSpace: 'pre-line',
            }}>{lp.headlineKey}</h1>
            <p style={{
              fontFamily: lp.serif, fontSize: 22, color: lp.ink,
              margin: '0 0 36px', lineHeight: 1.5, maxWidth: 540,
            }}>{lp.subKey}</p>
            <div style={{
              padding: '20px 24px', borderLeft: `3px solid ${lp.accent}`,
              background: lp.accentSoft, marginBottom: 36, maxWidth: 520,
            }}>
              <p style={{
                fontFamily: lp.sans, fontSize: 13.5, lineHeight: 1.9, color: lp.ink,
                margin: 0,
              }}>
                Saraは、ADHDや発達特性のある方のためのシンプルなタスクアプリ。
                タスクは3つまで。夜になるとすべてリセットされます。
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <AppStoreButton lp={lp}/>
              <div style={{ fontSize: 13, color: lp.inkSoft }}>
                <span style={{ color: lp.accent, fontWeight: 700 }}>◇</span> 登録不要
              </div>
            </div>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'center', position: 'relative',
          }}>
            {/* Floating theme indicator */}
            <div style={{
              position: 'absolute', top: -20, right: 0, zIndex: 5,
              fontFamily: lp.serif, fontSize: 13,
              color: lp.accent, padding: '8px 16px',
              background: lp.bandBg, borderRadius: 999,
              border: `1px solid ${lp.accent}44`,
              boxShadow: `0 6px 20px ${lp.accent}22`,
            }}>← Theme: <b>{theme.toUpperCase()}</b></div>
            <PhoneFrame scale={1.1}>
              <SaraScreen theme={theme}/>
            </PhoneFrame>
          </div>
        </div>
      </section>

      {/* GIANT TEXT MARQUEE separator */}
      <div style={{
        background: lp.accent, color: theme === 'spiritual' ? '#0E1530' : '#fff',
        padding: '20px 0', overflow: 'hidden', whiteSpace: 'nowrap',
        fontFamily: lp.serif, fontSize: 28, fontWeight: 700,
        letterSpacing: 8,
      }}>
        <div style={{ display: 'flex', gap: 60, paddingLeft: 60 }}>
          {Array(6).fill(0).map((_, i) => (
            <span key={i}>3つだけ · 夜に消える · ためこまない · </span>
          ))}
        </div>
      </div>

      {/* FEATURES — vertical, large numbered */}
      <section style={{ padding: '60px 60px 30px' }}>
        {[
          { n: '01', icon: 'cal', title: '今日の3枚だけ',
            body: 'タスクは1日3つまで。これ以上は受け付けません。シンプルだから、続けられる。' },
          { n: '02', icon: 'moon', title: '夜にぜんぶ消える',
            body: '日付が変わると、今日のカードはすべて消えます。プレッシャーも不安も、明日に持ち越さない。' },
          { n: '03', icon: 'stack', title: '3日でストック消滅',
            body: 'やり残したタスクはストックに3日だけ。それを過ぎれば、本当にやらなくていいことだったと分かる。' },
        ].map((f, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '90px 60px 1fr', gap: 32,
            alignItems: 'center', padding: '28px 0',
            borderTop: i === 0 ? `1px solid ${lp.accent}22` : 'none',
            borderBottom: `1px solid ${lp.accent}22`,
          }}>
            <div style={{
              fontFamily: lp.serif, fontSize: 44, color: lp.accent,
              fontWeight: 700, opacity: 0.9,
            }}>{f.n}</div>
            <FeatureIcon kind={f.icon} lp={lp}/>
            <div style={{
              display: 'grid', gridTemplateColumns: '260px 1fr', gap: 32, alignItems: 'baseline',
            }}>
              <div style={{
                fontFamily: lp.serif, fontWeight: 700, fontSize: 22, color: lp.ink,
              }}>{f.title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.85, color: lp.inkSoft }}>{f.body}</div>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 2 — image left big quote right */}
      <section style={{
        padding: '70px 60px',
        display: 'grid', gridTemplateColumns: '1fr 1.2fr',
        gap: 56, alignItems: 'center',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PhoneFrame scale={0.95}>
            <SaraScreen theme={theme}/>
          </PhoneFrame>
        </div>
        <div>
          <div style={{
            fontFamily: lp.serif, fontSize: 80, lineHeight: 1, color: lp.accent,
            opacity: 0.3, marginBottom: -10,
          }}>“</div>
          <h2 style={{
            fontFamily: lp.serif, fontSize: 46, color: lp.ink,
            fontWeight: 700, lineHeight: 1.35, margin: '0 0 26px',
            whiteSpace: 'pre-line',
          }}>{lp.section2Title}</h2>
          <p style={{
            fontFamily: lp.sans, fontSize: 15, lineHeight: 2, color: lp.inkSoft,
            margin: '0 0 30px',
          }}>
            やることが多すぎると、動けなくなることがあります。
            Saraは「今日やること」だけに集中できるように設計された、やさしいタスクアプリです。
          </p>
          <ul style={{ padding: 0, margin: 0 }}>
            <Bullet lp={lp}>タスクは3つまで</Bullet>
            <Bullet lp={lp}>夜にリセットされて、気持ちが軽くなる</Bullet>
            <Bullet lp={lp}>必要なときだけ、ストックを使える</Bullet>
          </ul>
        </div>
      </section>

      {/* THEMES — full bleed three column with bg colors */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {['normal', 'spiritual', 'pop'].map((th) => {
          const t2 = LP_THEMES[th];
          const labels = {
            normal: { name: 'Normal', sub: '日常に寄り添う、静かな相棒。', tag: 'CALM' },
            spiritual: { name: 'Spiritual', sub: '今日の儀式に、深い意味を。', tag: 'MYSTIC' },
            pop: { name: 'POP', sub: '元気よく、ノリで完了！', tag: 'CHEER' },
          };
          const active = th === theme;
          return (
            <div key={th}
              onClick={() => setTheme(th)}
              style={{
                background: t2.pageBg, color: t2.ink,
                padding: '50px 30px 40px', cursor: 'pointer',
                borderTop: active ? `4px solid ${t2.accent}` : `4px solid transparent`,
                transition: 'all .25s',
                position: 'relative',
                minHeight: 540,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 18,
              }}>
              <div style={{
                fontSize: 10, letterSpacing: 4, color: t2.accent, fontWeight: 700,
                fontFamily: t2.sans,
              }}>{labels[th].tag}</div>
              <div style={{
                fontFamily: t2.serif, fontSize: 32, fontWeight: 700,
                color: t2.accent,
              }}>{labels[th].name}</div>
              <div style={{
                fontSize: 13, color: t2.ink, opacity: 0.7,
                fontFamily: t2.sans, textAlign: 'center',
              }}>{labels[th].sub}</div>
              <div style={{ marginTop: 8 }}>
                <PhoneFrame scale={0.7}>
                  <SaraScreen theme={th}/>
                </PhoneFrame>
              </div>
              {active && (
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  fontSize: 11, padding: '4px 10px', borderRadius: 999,
                  background: t2.accent, color: th === 'spiritual' ? '#0E1530' : '#fff',
                  fontWeight: 700, letterSpacing: 1,
                }}>NOW</div>
              )}
            </div>
          );
        })}
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '40px 60px', background: lp.pageBg,
        borderTop: `1px solid ${lp.accent}22`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div>
          <Logo lp={lp} size={0.75}/>
          <div style={{ fontSize: 12, color: lp.inkSoft, marginTop: 8 }}>
            © 2026 Sara — 静かに、自分のペースで。
          </div>
        </div>
        <div style={{ display: 'flex', gap: 20, fontSize: 12, color: lp.inkSoft }}>
          <span>利用規約</span>
          <span>プライバシー</span>
          <span>お問い合わせ</span>
        </div>
      </footer>
    </div>
  );
}

Object.assign(window, { LPConservative, LPBalanced, LPAdventurous, LP_THEMES });
