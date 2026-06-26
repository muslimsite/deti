/* @ds-bundle: {"format":3,"namespace":"SolihaIslamicParentingDesignSystem_1e5f6d","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"LabelPill","sourcePath":"components/core/LabelPill.jsx"},{"name":"NumberBadge","sourcePath":"components/core/NumberBadge.jsx"},{"name":"Ornament","sourcePath":"components/core/Ornament.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"4873223e245a","components/core/Button.jsx":"9f82023712ec","components/core/Card.jsx":"1c183d5e60cd","components/core/LabelPill.jsx":"8afdd0b66a9d","components/core/NumberBadge.jsx":"40e8a2293e4e","components/core/Ornament.jsx":"0e6893527ec9","components/core/Stat.jsx":"804cb2deb9fb","ui_kits/landing/About.jsx":"0429641b24cc","ui_kits/landing/App.jsx":"0c004c512ef2","ui_kits/landing/Closing.jsx":"d2e14b1d6636","ui_kits/landing/Hero.jsx":"f3bf56716bcf","ui_kits/landing/Method.jsx":"5da357db5ff7","ui_kits/landing/Quiz.jsx":"f10307e88397","ui_kits/landing/Stats.jsx":"4921452eab30","ui_kits/landing/shared.jsx":"0daa2da67d4e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SolihaIslamicParentingDesignSystem_1e5f6d = window.SolihaIslamicParentingDesignSystem_1e5f6d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — photo in a gold circular frame (or rounded rectangle).
 * Brand rule: the author avatar appears ONLY in the About section.
 */
function Avatar({
  src,
  alt = '',
  size = 120,
  shape = 'circle',
  frame = true,
  style = {},
  ...rest
}) {
  const radius = shape === 'circle' ? '50%' : 'var(--radius-lg)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: radius,
      padding: frame ? 4 : 0,
      background: frame ? 'var(--gold-gradient)' : 'transparent',
      boxShadow: frame ? 'var(--shadow-gold)' : 'none',
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: shape === 'circle' ? '50%' : 'calc(var(--radius-lg) - 4px)',
      background: 'var(--cream-50)',
      display: 'block'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — rounded gold CTA and its quieter variants.
 * Variants: primary (gold gradient), secondary (gold outline on light),
 * ghost (text + underline), dark (for use on dark sections).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  href = null,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0.6rem 1.25rem',
      font: '0.82rem'
    },
    md: {
      padding: '0.95rem 1.9rem',
      font: '0.92rem'
    },
    lg: {
      padding: '1.15rem 2.5rem',
      font: '1rem'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: s.font,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    padding: s.padding,
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    textDecoration: 'none',
    transition: 'transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), background var(--dur-base) var(--ease-soft)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--gold-gradient)',
      color: '#26180A',
      boxShadow: 'var(--shadow-gold)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-on-light)',
      border: '1.5px solid var(--gold-500)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--gold-600)',
      padding: `${s.padding.split(' ')[0]} 0.25rem`,
      borderRadius: 0
    },
    dark: {
      background: 'transparent',
      color: 'var(--text-on-dark)',
      border: '1.5px solid var(--line-gold-strong)'
    }
  };
  const styleObj = {
    ...base,
    ...(variants[variant] || variants.primary),
    ...style
  };
  const handleEnter = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    if (variant === 'primary') e.currentTarget.style.boxShadow = '0 18px 42px rgba(167,126,63,0.42)';
    if (variant === 'secondary' || variant === 'dark') e.currentTarget.style.background = 'rgba(199,168,107,0.12)';
  };
  const handleLeave = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(0)';
    if (variant === 'primary') e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
    if (variant === 'secondary' || variant === 'dark') e.currentTarget.style.background = 'transparent';
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type: 'button',
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    style: styleObj,
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — rounded, soft-shadowed container with light and dark themes.
 * Used for feature cards, step cards, testimonial cards.
 */
function Card({
  children,
  theme = 'light',
  padding = 'lg',
  hover = true,
  style = {},
  ...rest
}) {
  const pads = {
    sm: '1.5rem',
    md: '2rem',
    lg: '2.5rem'
  };
  const themes = {
    light: {
      background: 'var(--surface-card)',
      color: 'var(--text-on-light)',
      border: 'var(--border-card-light)',
      boxShadow: 'var(--shadow-md)'
    },
    dark: {
      background: 'var(--surface-card-dark)',
      color: 'var(--text-on-dark)',
      border: 'var(--border-card-dark)',
      boxShadow: 'var(--shadow-dark)'
    },
    plain: {
      background: 'var(--white)',
      color: 'var(--text-on-light)',
      border: '1px solid var(--line-on-light)',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  const onEnter = e => {
    if (!hover) return;
    e.currentTarget.style.transform = 'translateY(-6px)';
    e.currentTarget.style.boxShadow = theme === 'dark' ? '0 32px 70px rgba(0,0,0,0.55)' : 'var(--shadow-lg)';
    e.currentTarget.style.borderColor = 'rgba(199,168,107,0.55)';
  };
  const onLeave = e => {
    if (!hover) return;
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = (themes[theme] || themes.light).boxShadow;
    e.currentTarget.style.borderColor = '';
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding] || pads.lg,
      transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), border-color var(--dur-base) var(--ease-soft)',
      ...(themes[theme] || themes.light),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/LabelPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LabelPill — small gold-gradient (or outline) label/eyebrow pill used
 * above section titles. Uppercase, tracked.
 */
function LabelPill({
  children,
  tone = 'gradient',
  icon = null,
  style = {},
  ...rest
}) {
  const tones = {
    gradient: {
      background: 'var(--gold-gradient)',
      color: '#26180A',
      border: 'none'
    },
    outline: {
      background: 'transparent',
      color: 'var(--gold-600)',
      border: '1px solid var(--gold-500)'
    },
    soft: {
      background: 'rgba(199,168,107,0.16)',
      color: 'var(--gold-600)',
      border: 'none'
    },
    onDark: {
      background: 'rgba(199,168,107,0.14)',
      color: 'var(--gold-400)',
      border: '1px solid rgba(199,168,107,0.4)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      padding: '0.5rem 1.05rem',
      borderRadius: 'var(--radius-pill)',
      ...(tones[tone] || tones.gradient),
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { LabelPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LabelPill.jsx", error: String((e && e.message) || e) }); }

// components/core/NumberBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NumberBadge — circular gold numbered badge (01, 02 …) for ordered
 * lists, steps, and feature cards. Auto pads single digits to two.
 */
function NumberBadge({
  value,
  size = 'md',
  filled = true,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 44,
    md: 60,
    lg: 76
  };
  const dim = sizes[size] || sizes.md;
  const label = String(value).padStart(2, '0');
  const filledStyle = {
    background: 'var(--gold-gradient)',
    color: '#26180A',
    boxShadow: 'var(--shadow-gold)',
    border: 'none'
  };
  const outlineStyle = {
    background: 'transparent',
    color: 'var(--gold-500)',
    border: '1.5px solid var(--gold-500)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: '50%',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: dim * 0.36,
      letterSpacing: '0.01em',
      flexShrink: 0,
      ...(filled ? filledStyle : outlineStyle),
      ...style
    }
  }, rest), label);
}
Object.assign(__ds_scope, { NumberBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NumberBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Ornament.jsx
try { (() => {
/**
 * Ornament — thin gold line ornament with an optional centered dot/diamond.
 * Use as a section divider or beneath an eyebrow.
 */
function Ornament({
  width = 120,
  variant = 'dot',
  align = 'center',
  onDark = false,
  style = {}
}) {
  const lineColor = onDark ? 'rgba(199,168,107,0.5)' : 'var(--line-gold)';
  const markColor = 'var(--gold-500)';
  const justify = align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center';
  const line = grow => /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      width: grow ? '100%' : width / 2,
      background: lineColor,
      display: 'block'
    }
  });
  const mark = variant === 'diamond' ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      background: markColor,
      transform: 'rotate(45deg)',
      flexShrink: 0
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: markColor,
      flexShrink: 0
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      justifyContent: justify,
      width: variant === 'rule' ? width : 'auto',
      ...style
    }
  }, variant === 'rule' ? line(true) : /*#__PURE__*/React.createElement(React.Fragment, null, line(false), mark, line(false)));
}
Object.assign(__ds_scope, { Ornament });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Ornament.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
/**
 * Stat — large gold display number with a caption. Animates a count-up
 * the first time it scrolls into view (respects reduced-motion).
 */
function Stat({
  value,
  suffix = '',
  prefix = '',
  label,
  onDark = false,
  duration = 1600,
  style = {}
}) {
  const target = typeof value === 'number' ? value : parseFloat(value) || 0;
  const decimals = (String(value).split('.')[1] || '').length;
  const [display, setDisplay] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(target);
      return;
    }
    let raf, start;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const tick = t => {
          if (!start) start = t;
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(target * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, {
      threshold: 0.4
    });
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);
  const shown = decimals ? display.toFixed(decimals) : Math.round(display).toLocaleString();
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2.6rem, 5vw, 4rem)',
      lineHeight: 1,
      color: 'var(--gold-500)',
      letterSpacing: '-0.01em'
    }
  }, prefix, shown, suffix), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.75rem',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/About.jsx
try { (() => {
/* About — the ONLY place the author avatar appears. */
function About() {
  const {
    Avatar,
    LabelPill,
    Ornament
  } = window.DS;
  const ref = window.useReveal();
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "section",
    style: {
      background: 'var(--cream-100)'
    },
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(220px, 320px) 1fr',
      gap: 'clamp(2rem, 5vw, 4.5rem)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: -14,
      borderRadius: '50%',
      border: '1px solid var(--line-gold)'
    }
  }), /*#__PURE__*/React.createElement(Avatar, {
    src: "../../assets/author-soliha-avatar.png",
    alt: "Soliha umm Musa",
    size: 260
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      marginBottom: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement(LabelPill, {
    tone: "outline"
  }, "About the author")), /*#__PURE__*/React.createElement("p", {
    className: "reveal ds-script",
    "data-delay": "60",
    style: {
      fontSize: 'clamp(3rem, 7vw, 4.5rem)',
      color: 'var(--gold-600)',
      lineHeight: 0.9,
      margin: '0 0 0.25rem'
    }
  }, "Soliha umm Musa"), /*#__PURE__*/React.createElement("h2", {
    className: "reveal",
    "data-delay": "100",
    style: {
      fontSize: 'var(--fs-display-3)',
      color: 'var(--text-on-light)',
      fontWeight: 500,
      fontStyle: 'italic',
      marginBottom: '1.5rem'
    }
  }, "Mother, teacher & founder of this home-tarbiyah path"), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    "data-delay": "140",
    style: {
      marginBottom: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement(Ornament, {
    variant: "rule",
    width: 80,
    align: "left"
  })), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    "data-delay": "160",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.1rem',
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 1.8,
      color: 'var(--text-on-light)'
    }
  }, "I began this journey at my own kitchen table, searching for a way to teach my children their deen that felt gentle, joyful and rooted in mercy \u2014 not pressure."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 1.8,
      color: 'var(--text-on-light-muted)'
    }
  }, "What grew from those small, sincere mornings is now a guided programme followed by thousands of mothers across the world. My promise is simple: practical, beautiful tarbiyah that honours your child\u2019s fitrah and your own peace as a mother, in sh\u0101\u2019 All\u0101h.")), /*#__PURE__*/React.createElement("p", {
    className: "reveal ds-script",
    "data-delay": "200",
    style: {
      fontSize: '2.6rem',
      color: 'var(--gold-600)',
      marginTop: '1.5rem',
      lineHeight: 1
    }
  }, "~ Soliha"))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/App.jsx
try { (() => {
/* App — composes the landing page sections. */
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.NavBar, null), /*#__PURE__*/React.createElement(window.Hero, null), /*#__PURE__*/React.createElement(window.Method, null), /*#__PURE__*/React.createElement(window.Stats, null), /*#__PURE__*/React.createElement(window.Quiz, null), /*#__PURE__*/React.createElement(window.About, null), /*#__PURE__*/React.createElement(window.Closing, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Closing.jsx
try { (() => {
/* Closing CTA + footer — dark, starry, gold CTA. */
function Closing() {
  const {
    Button,
    LabelPill,
    Ornament
  } = window.DS;
  const ref = window.useReveal();
  return /*#__PURE__*/React.createElement("footer", {
    id: "closing",
    ref: ref
  }, /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      background: 'radial-gradient(120% 120% at 50% 100%, #16223b 0%, var(--navy-900) 50%, var(--ink-900) 100%)',
      paddingTop: 'clamp(5rem,10vw,9rem)',
      paddingBottom: 'clamp(5rem,10vw,9rem)'
    }
  }, /*#__PURE__*/React.createElement(window.Starfield, {
    count: 55
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement(LabelPill, {
    tone: "onDark"
  }, "Bismillah, begin")), /*#__PURE__*/React.createElement("h2", {
    className: "reveal",
    "data-delay": "80",
    style: {
      fontSize: 'var(--fs-display-1)',
      color: 'var(--text-on-dark)',
      lineHeight: 1.06
    }
  }, "Plant the seed of", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--gold-400)'
    }
  }, "faith today")), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    "data-delay": "120",
    style: {
      display: 'flex',
      justifyContent: 'center',
      margin: '2rem 0'
    }
  }, /*#__PURE__*/React.createElement(Ornament, {
    variant: "diamond",
    onDark: true,
    width: 160
  })), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    "data-delay": "140",
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-on-dark-muted)',
      maxWidth: 560,
      margin: '0 auto 2.6rem',
      fontWeight: 300,
      lineHeight: 1.7
    }
  }, "Join thousands of mothers nurturing the next generation with mercy, beauty and unwavering faith. Your first lesson is waiting."), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    "data-delay": "160",
    style: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Enroll now"), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    href: "#quiz"
  }, "Take the quiz first")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-900)',
      padding: '2.5rem var(--gutter)',
      borderTop: '1px solid rgba(199,168,107,0.16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      background: 'var(--gold-gradient)',
      transform: 'rotate(45deg)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '1.2rem',
      color: 'var(--text-on-dark)'
    }
  }, "Soliha")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-on-dark-muted)'
    }
  }, "\xA9 2026 Soliha \xB7 Tarbiyah at Home. Crafted with i\u1E25s\u0101n."))));
}
window.Closing = Closing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Closing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
/* Hero — dark navy, starry, with gentle parallax and gold details. */
function Hero() {
  const {
    Button,
    LabelPill,
    Ornament
  } = window.DS;
  const [offset, setOffset] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  const py = reduce ? 0 : offset;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      background: 'radial-gradient(120% 90% at 50% 0%, #16223b 0%, var(--navy-900) 46%, var(--ink-900) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '7rem 1.5rem 5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: `translateY(${py * 0.25}px)`,
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(window.Starfield, {
    count: 70
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '8%',
      left: '50%',
      width: 540,
      height: 540,
      transform: `translate(-50%, ${py * 0.12}px)`,
      background: 'radial-gradient(circle, rgba(199,168,107,0.18) 0%, transparent 62%)',
      filter: 'blur(8px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "reveal in",
    style: {
      position: 'relative',
      maxWidth: 880,
      transform: `translateY(${py * -0.05}px)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.75rem'
    }
  }, /*#__PURE__*/React.createElement(LabelPill, {
    tone: "onDark"
  }, "Islamic Parenting & Education")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display-1)',
      lineHeight: 1.04,
      color: 'var(--text-on-dark)',
      letterSpacing: '-0.015em',
      fontWeight: 600
    }
  }, "Raise hearts that are", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontWeight: 500,
      color: 'var(--gold-400)'
    }
  }, "rooted in faith")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      margin: '2rem 0'
    }
  }, /*#__PURE__*/React.createElement(Ornament, {
    variant: "diamond",
    onDark: true,
    width: 160
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      lineHeight: 1.7,
      color: 'var(--text-on-dark-muted)',
      maxWidth: 600,
      margin: '0 auto 2.6rem',
      fontWeight: 300
    }
  }, "A premium, gentle home-tarbiyah programme for Muslim mothers \u2014 nurturing your child\u2019s deen, character and love of learning, one calm step at a time."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#closing"
  }, "Begin your journey"), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    href: "#quiz"
  }, "Take the quiz"))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: 30,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      color: 'var(--gold-400)',
      fontSize: 11,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      opacity: Math.max(0, 1 - py / 300)
    }
  }, /*#__PURE__*/React.createElement("span", null, "Scroll"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 38,
      background: 'linear-gradient(var(--gold-500), transparent)'
    }
  })));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Method.jsx
try { (() => {
/* Method — light cream section with numbered feature cards. */
function Method() {
  const {
    LabelPill,
    NumberBadge,
    Card,
    Ornament
  } = window.DS;
  const ref = window.useReveal();
  const items = [{
    t: 'Begin with niyyah',
    d: 'Every lesson opens by renewing a sincere intention, teaching children that worship begins in the heart.'
  }, {
    t: 'Gentle daily rhythm',
    d: 'Short, calm routines woven into your day — du\u02bfa before meals, a verse at bedtime, kindness in between.'
  }, {
    t: 'Character before content',
    d: 'We nurture adab, patience and gratitude first, so knowledge lands on soil that is ready to receive it.'
  }, {
    t: 'Mother as the first school',
    d: 'You are guided and supported, never lectured — confident tarbiyah that fits real family life.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "the-method",
    className: "section",
    style: {
      background: 'var(--cream-100)'
    },
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 680,
      margin: '0 auto 3.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement(LabelPill, null, "The Method")), /*#__PURE__*/React.createElement("h2", {
    className: "reveal",
    "data-delay": "80",
    style: {
      fontSize: 'var(--fs-display-2)',
      color: 'var(--text-on-light)',
      lineHeight: 1.12
    }
  }, "A calm, structured path to", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--gold-600)'
    }
  }, "tarbiyah at home")), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    "data-delay": "140",
    style: {
      display: 'flex',
      justifyContent: 'center',
      margin: '1.75rem 0 0'
    }
  }, /*#__PURE__*/React.createElement(Ornament, {
    variant: "dot"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--gap-cards)',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      alignItems: 'stretch'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal",
    "data-delay": i * 110,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    theme: "light",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.1rem',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(NumberBadge, {
    value: i + 1
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)',
      color: 'var(--text-on-light)',
      lineHeight: 1.2
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 1.65,
      color: 'var(--text-on-light-muted)'
    }
  }, it.d)))))));
}
window.Method = Method;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Method.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Quiz.jsx
try { (() => {
/* Quiz — "What is your tarbiyah style?" interactive self-check. */
function Quiz() {
  const {
    LabelPill,
    Button,
    NumberBadge,
    Ornament
  } = window.DS;
  const ref = window.useReveal();
  const QUESTIONS = [{
    q: 'Your child refuses to pray with you one morning. You\u2026',
    a: [{
      t: 'Sit beside them and pray beautifully, hoping they join in their own time',
      k: 'nurturer'
    }, {
      t: 'Gently explain why salah matters and what Allah loves',
      k: 'guide'
    }, {
      t: 'Turn it into a game \u2014 a race to the prayer mat',
      k: 'companion'
    }, {
      t: 'Keep the same calm routine; tomorrow we try again',
      k: 'anchor'
    }]
  }, {
    q: 'Bedtime in your home usually sounds like\u2026',
    a: [{
      t: 'Cuddles, du\u02bfa, and whispered reassurance',
      k: 'nurturer'
    }, {
      t: 'A short story of the Prophets with a lesson',
      k: 'guide'
    }, {
      t: 'Laughter, then a verse we sing together',
      k: 'companion'
    }, {
      t: 'The same loved steps, every single night',
      k: 'anchor'
    }]
  }, {
    q: 'When your child makes a mistake, you most want them to feel\u2026',
    a: [{
      t: 'Safe, loved, and never alone',
      k: 'nurturer'
    }, {
      t: 'That they understand the why behind what\u2019s right',
      k: 'guide'
    }, {
      t: 'That you\u2019re on their team figuring it out',
      k: 'companion'
    }, {
      t: 'That there is a steady, fair way forward',
      k: 'anchor'
    }]
  }, {
    q: 'The part of tarbiyah you treasure most is\u2026',
    a: [{
      t: 'The tenderness \u2014 hearts soften with mercy',
      k: 'nurturer'
    }, {
      t: 'The teaching \u2014 watching understanding bloom',
      k: 'guide'
    }, {
      t: 'The closeness \u2014 being their trusted friend',
      k: 'companion'
    }, {
      t: 'The rhythm \u2014 calm, consistent days',
      k: 'anchor'
    }]
  }];
  const RESULTS = {
    nurturer: {
      name: 'The Nurturer',
      ar: 'Ar-Ra\u02bfūf \u00b7 The Tender',
      d: 'You lead with mercy. Your child learns that Allah is loving because they first felt love from you. Keep pairing that warmth with gentle, clear boundaries \u2014 tenderness and structure together raise secure, faithful hearts.'
    },
    guide: {
      name: 'The Guide',
      ar: 'Al-Mu\u02bfallim \u00b7 The Teacher',
      d: 'You lead with understanding. You love to explain the why, and your child grows thoughtful and curious about the deen. Remember to let some lessons be simply felt, not taught \u2014 wonder is its own teacher.'
    },
    companion: {
      name: 'The Companion',
      ar: 'Al-Anīs \u00b7 The Friend',
      d: 'You lead with connection. Faith feels joyful and close in your home, and your child runs to you first. Anchor that warmth with a little steady routine, so joy is matched by calm consistency.'
    },
    anchor: {
      name: 'The Anchor',
      ar: 'Ath-Thābit \u00b7 The Steadfast',
      d: 'You lead with consistency. Your calm, predictable rhythm gives your child deep security and self-discipline. Sprinkle in spontaneous warmth and play \u2014 steadiness shines brightest beside tenderness.'
    }
  };
  const [step, setStep] = React.useState(0); // 0..QUESTIONS.length-1, then -1 for result
  const [scores, setScores] = React.useState({
    nurturer: 0,
    guide: 0,
    companion: 0,
    anchor: 0
  });
  const [chosen, setChosen] = React.useState(null);
  const done = step >= QUESTIONS.length;
  const pick = (k, idx) => {
    setChosen(idx);
    setTimeout(() => {
      setScores(s => ({
        ...s,
        [k]: s[k] + 1
      }));
      setChosen(null);
      setStep(st => st + 1);
    }, 240);
  };
  const reset = () => {
    setScores({
      nurturer: 0,
      guide: 0,
      companion: 0,
      anchor: 0
    });
    setStep(0);
  };
  const topKey = Object.keys(scores).reduce((a, b) => scores[b] > scores[a] ? b : a, 'nurturer');
  const result = RESULTS[topKey];
  const progress = Math.min(step, QUESTIONS.length) / QUESTIONS.length;
  return /*#__PURE__*/React.createElement("section", {
    id: "quiz",
    className: "section",
    style: {
      background: 'var(--cream-50)'
    },
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement(LabelPill, {
    tone: "soft"
  }, "Interactive \xB7 2 minutes")), /*#__PURE__*/React.createElement("h2", {
    className: "reveal",
    "data-delay": "80",
    style: {
      fontSize: 'var(--fs-display-2)',
      color: 'var(--text-on-light)',
      lineHeight: 1.12
    }
  }, "What is your ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--gold-600)'
    }
  }, "tarbiyah style?")), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    "data-delay": "120",
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-on-light-muted)',
      marginTop: '1rem'
    }
  }, "Four gentle questions. No right answers \u2014 only your beautiful way.")), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    "data-delay": "120",
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      border: 'var(--border-card-light)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'clamp(1.75rem, 4vw, 3rem)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, !done && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: 'var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${progress * 100}%`,
      background: 'var(--gold-gradient)',
      transition: 'width .4s var(--ease-soft)'
    }
  })), !done ? /*#__PURE__*/React.createElement("div", {
    key: step
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.6rem'
    }
  }, /*#__PURE__*/React.createElement(NumberBadge, {
    value: step + 1,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-on-light-muted)'
    }
  }, "Question ", step + 1, " of ", QUESTIONS.length)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-display-3)',
      color: 'var(--text-on-light)',
      lineHeight: 1.25,
      marginBottom: '1.8rem'
    }
  }, QUESTIONS[step].q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.85rem'
    }
  }, QUESTIONS[step].a.map((opt, idx) => {
    const active = chosen === idx;
    return /*#__PURE__*/React.createElement("button", {
      key: idx,
      onClick: () => pick(opt.k, idx),
      style: {
        textAlign: 'left',
        cursor: 'pointer',
        font: 'inherit',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.1rem 1.35rem',
        borderRadius: 'var(--radius-md)',
        border: active ? '1.5px solid var(--gold-500)' : '1.5px solid var(--cream-200)',
        background: active ? 'rgba(199,168,107,0.12)' : 'var(--cream-50)',
        color: 'var(--text-on-light)',
        fontSize: 'var(--fs-body)',
        lineHeight: 1.45,
        transition: 'all .2s var(--ease-soft)'
      },
      onMouseEnter: e => {
        if (!active) {
          e.currentTarget.style.borderColor = 'var(--gold-400)';
          e.currentTarget.style.background = 'var(--white)';
        }
      },
      onMouseLeave: e => {
        if (!active) {
          e.currentTarget.style.borderColor = 'var(--cream-200)';
          e.currentTarget.style.background = 'var(--cream-50)';
        }
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        flexShrink: 0,
        border: '1.5px solid var(--gold-500)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: active ? 'var(--gold-500)' : 'transparent',
        transition: 'background .2s'
      }
    })), opt.t);
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '0.5rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78rem',
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--gold-600)'
    }
  }, "Your tarbiyah style")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'clamp(2.2rem,5vw,3.2rem)',
      color: 'var(--text-on-light)',
      lineHeight: 1.1
    }
  }, result.name), /*#__PURE__*/React.createElement("p", {
    className: "ds-script",
    style: {
      fontSize: '2.4rem',
      color: 'var(--gold-600)',
      lineHeight: 1,
      margin: '0.5rem 0 0'
    }
  }, result.ar), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      margin: '1.5rem 0'
    }
  }, /*#__PURE__*/React.createElement(Ornament, {
    variant: "dot"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      lineHeight: 1.7,
      color: 'var(--text-on-light-muted)',
      maxWidth: 540,
      margin: '0 auto 2rem'
    }
  }, result.d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.9rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#closing"
  }, "Start the programme"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: reset
  }, "Retake quiz"))))));
}
window.Quiz = Quiz;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Quiz.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Stats.jsx
try { (() => {
/* Stats + Curriculum — dark navy band with animated counters. */
function Stats() {
  const {
    Stat,
    LabelPill,
    Ornament
  } = window.DS;
  const ref = window.useReveal();
  const modules = ['Aqeedah for little hearts', 'The 99 Names, gently', 'Salah, step by step', 'Stories of the Prophets', 'Manners of the home', 'Qur\u02bcan with love'];
  return /*#__PURE__*/React.createElement("section", {
    id: "curriculum",
    className: "section",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(120% 120% at 50% 0%, #16223b 0%, var(--navy-900) 55%, var(--ink-900) 100%)'
    },
    ref: ref
  }, /*#__PURE__*/React.createElement(window.Starfield, {
    count: 40
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 3rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement(LabelPill, {
    tone: "onDark"
  }, "In numbers")), /*#__PURE__*/React.createElement("h2", {
    className: "reveal",
    "data-delay": "80",
    style: {
      fontSize: 'var(--fs-display-3)',
      color: 'var(--text-on-dark)',
      lineHeight: 1.2
    }
  }, "A community of mothers, growing together")), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    "data-delay": "120",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
      gap: '2rem',
      maxWidth: 880,
      margin: '0 auto 4rem'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: 12000,
    suffix: "+",
    label: "Mothers enrolled",
    onDark: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: 48,
    label: "Guided lessons",
    onDark: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: 4.9,
    suffix: "/5",
    label: "Average rating",
    onDark: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: 30,
    suffix: "+",
    label: "Countries",
    onDark: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    "data-delay": "160",
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Ornament, {
    variant: "diamond",
    onDark: true,
    width: 180
  })), /*#__PURE__*/React.createElement("p", {
    className: "reveal eyebrow",
    style: {
      textAlign: 'center',
      color: 'var(--gold-400)',
      marginBottom: '1.5rem'
    }
  }, "Inside the curriculum"), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    "data-delay": "60",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.85rem',
      justifyContent: 'center'
    }
  }, modules.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      padding: '0.7rem 1.25rem',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(199,168,107,0.32)',
      color: 'var(--text-on-dark)',
      fontSize: '0.92rem',
      background: 'rgba(199,168,107,0.06)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'var(--gold-400)'
    }
  }), m)))));
}
window.Stats = Stats;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Stats.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/shared.jsx
try { (() => {
/* Shared helpers for the landing UI kit — scroll reveal, starfield, nav. */
const DS = window.SolihaIslamicParentingDesignSystem_1e5f6d;
function useReveal() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const els = ref.current ? ref.current.querySelectorAll('.reveal') : [];
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    if (reduce) {
      els.forEach(e => e.classList.add('in'));
      return;
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          const delay = e.target.dataset.delay ? parseInt(e.target.dataset.delay) : 0;
          setTimeout(() => e.target.classList.add('in'), delay);
          obs.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -8% 0px'
    });
    els.forEach(e => obs.observe(e));
    return () => obs.disconnect();
  }, []);
  return ref;
}
function Starfield({
  count = 60
}) {
  const stars = React.useMemo(() => Array.from({
    length: count
  }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 0.6,
    delay: Math.random() * 4,
    bright: Math.random() > 0.8
  })), [count]);
  return /*#__PURE__*/React.createElement("div", {
    className: "stars",
    "aria-hidden": "true"
  }, stars.map((s, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      top: s.top + '%',
      left: s.left + '%',
      width: s.size,
      height: s.size,
      animationDelay: s.delay + 's',
      background: s.bright ? 'var(--gold-400)' : '#fff',
      boxShadow: s.bright ? '0 0 6px var(--gold-400)' : 'none'
    }
  })));
}

/* Top navigation bar — appears over the hero, condenses on scroll. */
function NavBar() {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['The Method', 'Curriculum', 'Quiz', 'About'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: solid ? '0.9rem clamp(1.25rem,5vw,4rem)' : '1.5rem clamp(1.25rem,5vw,4rem)',
      background: solid ? 'rgba(13,13,13,0.82)' : 'transparent',
      backdropFilter: solid ? 'blur(14px)' : 'none',
      borderBottom: solid ? '1px solid rgba(199,168,107,0.18)' : '1px solid transparent',
      transition: 'all .4s var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      background: 'var(--gold-gradient)',
      transform: 'rotate(45deg)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '1.3rem',
      color: 'var(--text-on-dark)',
      letterSpacing: '0.02em'
    }
  }, "Soliha")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '2.2rem'
    },
    className: "nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase().replace(/\s/g, '-'),
    style: {
      fontSize: '0.82rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'color .25s'
    },
    onMouseEnter: e => e.target.style.color = 'var(--gold-400)',
    onMouseLeave: e => e.target.style.color = 'var(--text-on-dark-muted)'
  }, l))), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "dark",
    size: "sm",
    href: "#closing"
  }, "Enroll"));
}
Object.assign(window, {
  DS,
  useReveal,
  Starfield,
  NavBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.LabelPill = __ds_scope.LabelPill;

__ds_ns.NumberBadge = __ds_scope.NumberBadge;

__ds_ns.Ornament = __ds_scope.Ornament;

__ds_ns.Stat = __ds_scope.Stat;

})();
