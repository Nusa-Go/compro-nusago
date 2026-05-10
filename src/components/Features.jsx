import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, MessageSquare, List, Zap, Car, Award } from 'lucide-react';

const RED = 'oklch(0.55 0.22 25.5)';
const REDHEX = '#C0392B';
const ICONS = [ShieldCheck, MessageSquare, List, Zap, Car, Award];

const W = 1100;
const H = 860;
const CX = W / 2;
const CY = 470;
const R1 = 135;
const R2 = 320;
const GAP = 2.8;

const TOTAL_SPAN = 170;
const SEG_SPAN = TOTAL_SPAN / 6;
const START_ANG = -175;

const CARD_W = 210;
const CARD_H = 145;
const CARD_X_L = 14;
const CARD_X_R = W - CARD_W - 14;

const SEGMENT_FILLS = [
  '#B83232', '#C03535', '#AA2E2E',
  '#C83838', '#B53030', '#BD3333',
];

function toRad(d) { return d * Math.PI / 180; }

function arcPath(cx, cy, r1, r2, a0, a1) {
  const p = (r, a) => ({ x: cx + r * Math.cos(toRad(a)), y: cy + r * Math.sin(toRad(a)) });
  const [s1, e1, s2, e2] = [p(r1, a0), p(r1, a1), p(r2, a0), p(r2, a1)];
  const lg = (a1 - a0) > 180 ? 1 : 0;
  return `M${s1.x} ${s1.y} A${r1} ${r1} 0 ${lg} 1 ${e1.x} ${e1.y} L${e2.x} ${e2.y} A${r2} ${r2} 0 ${lg} 0 ${s2.x} ${s2.y}Z`;
}

function segMid(i, r) {
  const a = toRad(START_ANG + i * SEG_SPAN + SEG_SPAN / 2);
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
}

const orbitArcPath = (() => {
  const p = (a) => ({ x: CX + (R2 + 55) * Math.cos(toRad(a)), y: CY + (R2 + 55) * Math.sin(toRad(a)) });
  const s = p(-175); const e = p(-5);
  return `M${s.x} ${s.y} A${R2 + 55} ${R2 + 55} 0 0 1 ${e.x} ${e.y}`;
})();

function wrapText(text, maxChars) {
  const words = text.split(' ');
  const lines = []; let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length <= maxChars) cur = (cur + ' ' + w).trim();
    else { if (cur) lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 3);
}

function FeatureCard({ segIdx, cardX, cardY, tipX, tipY, lineAnchorX, lineAnchorY, fill, title, desc }) {
  const descLines = wrapText(desc, 28);
  return (
    <>
      <line x1={tipX} y1={tipY} x2={lineAnchorX} y2={lineAnchorY}
        stroke="rgba(0,0,0,0.13)" strokeWidth="1.2" strokeDasharray="5 3" />
      <circle cx={tipX} cy={tipY} r={3.5} fill={fill} opacity="0.7" />
      <circle cx={lineAnchorX} cy={lineAnchorY} r={3.5} fill={fill} opacity="0.4" />
      <rect x={cardX} y={cardY} width={CARD_W} height={CARD_H}
        rx="16" fill="white" stroke="rgba(0,0,0,0.07)" strokeWidth="1" filter="url(#card-shadow)" />
      <rect x={cardX} y={cardY + 20} width={3} height={CARD_H - 40} rx="2" fill={fill} opacity="0.6" />
      <rect x={cardX + 14} y={cardY + 14} width={30} height={30} rx="9" fill={fill} />
      <foreignObject x={cardX + 14} y={cardY + 14} width={30} height={30}>
        <div xmlns="http://www.w3.org/1999/xhtml"
          style={{ width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {React.createElement(ICONS[segIdx], { size: 15, color: 'white', strokeWidth: 2.5 })}
        </div>
      </foreignObject>
      <text x={cardX + 52} y={cardY + 34} fontSize="12" fontWeight="800" fill="#0f172a"
        fontFamily="system-ui,sans-serif" letterSpacing="-0.2">{title}</text>
      <line x1={cardX + 14} y1={cardY + 54} x2={cardX + CARD_W - 14} y2={cardY + 54}
        stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
      {descLines.map((line, li) => (
        <text key={li} x={cardX + 14} y={cardY + 72 + li * 18}
          fontSize="10" fill="#64748b" fontFamily="system-ui,sans-serif" fontWeight="500">{line}</text>
      ))}
    </>
  );
}

export default function Features() {
  const { t, lang } = useLanguage();
  const isEn = lang === 'en';
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const cardRows = [CY - 200, CY - 30, CY + 140];

  return (
    <section
      id="features"
      className="pt-2 pb-16 md:pb-24 bg-white relative overflow-hidden font-sans scroll-mt-20"
    >

      <div className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: `radial-gradient(circle at 1px 1px,#1A1A1A 1px,transparent 0)`, backgroundSize: '36px 36px' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <div className="h-px w-8 rounded-full" style={{ background: RED }} />
            <span className="font-bold uppercase tracking-[0.22em] text-[10px]" style={{ color: RED }}>
              {isEn ? 'Why NusaGo' : 'Mengapa NusaGo'}
            </span>
            <div className="h-px w-8 rounded-full" style={{ background: RED }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.08 }}
            className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight"
          >
            {isEn ? 'Competitive ' : 'Keunggulan '}
            <span style={{ color: RED }}>{isEn ? 'Advantage.' : 'Kompetitif.'}</span>
          </motion.h2>
        </div>

        {/* ── DESKTOP SVG ── */}
        <div ref={ref} className="hidden lg:block w-full">
          <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block', margin: '0 auto' }}>
            <defs>
              <filter id="seg-shadow" x="-8%" y="-8%" width="116%" height="130%">
                <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="rgba(0,0,0,0.2)" />
              </filter>
              <filter id="card-shadow" x="-12%" y="-12%" width="130%" height="150%">
                <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="rgba(0,0,0,0.07)" />
              </filter>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={REDHEX} stopOpacity="0.12" />
                <stop offset="100%" stopColor={REDHEX} stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* ── Ambient glow behind center ── */}
            <motion.ellipse
              cx={CX} cy={CY} rx={180} ry={180}
              fill="url(#centerGlow)"
              animate={{ rx: [160, 195, 160], ry: [160, 195, 160] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* ── Outer orbit dashed arc ── */}
            <motion.path
              d={orbitArcPath}
              fill="none" stroke="rgba(192,57,43,0.1)" strokeWidth="1.5" strokeDasharray="6 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
            />

            {/* ── Pulse rings around center ── */}
            {[0, 1, 2].map(i => (
              <motion.circle key={i} cx={CX} cy={CY} r={125}
                fill="none" stroke={REDHEX} strokeWidth="1"
                initial={{ scale: 1, opacity: 0 }}
                animate={inView ? { scale: [1, 1.6, 1.6], opacity: [0, 0.18, 0] } : {}}
                transition={{ duration: 2.8, delay: i * 0.9 + 0.8, repeat: Infinity, ease: 'easeOut' }}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
              />
            ))}

            {/* ── Segments ── */}
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const sA = START_ANG + i * SEG_SPAN + GAP;
              const eA = START_ANG + (i + 1) * SEG_SPAN - GAP;
              const mid = segMid(i, (R1 + R2) / 2);
              const floatY = i % 2 === 0 ? [-2, 2, -2] : [2, -2, 2];
              return (
                <motion.g key={i}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.09 + 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ transformOrigin: `${CX}px ${CY}px` }}
                >
                  <motion.g
                    animate={inView ? { y: floatY } : {}}
                    transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  >
                    <path d={arcPath(CX, CY, R1, R2, sA, eA)} fill={SEGMENT_FILLS[i]} filter="url(#seg-shadow)" />
                    <foreignObject x={mid.x - 14} y={mid.y - 14} width={28} height={28}>
                      <div xmlns="http://www.w3.org/1999/xhtml"
                        style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {React.createElement(ICONS[i], { size: 18, color: 'rgba(255,255,255,0.92)', strokeWidth: 2 })}
                      </div>
                    </foreignObject>
                  </motion.g>
                </motion.g>
              );
            })}

            {/* ── Center circle ── */}
            <motion.circle cx={CX} cy={CY} r={122}
              fill="white" stroke="rgba(0,0,0,0.05)" strokeWidth="1.5" filter="url(#card-shadow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: `${CX}px ${CY}px` }}
            />
            <motion.circle cx={CX} cy={CY} r={108}
              fill="none" stroke="rgba(0,0,0,0.035)" strokeWidth="1"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
            />

            {[
              { txt: isEn ? 'Competitive' : 'Keunggulan', dy: -20, sz: 15, fw: '900', fill: '#0f172a' },
              { txt: isEn ? 'Advantage' : 'Kompetitif', dy: 0, sz: 15, fw: '900', fill: '#0f172a' },
              { txt: 'NusaGo', dy: 22, sz: 9, fw: '600', fill: '#94a3b8', ls: '2.5' },
            ].map(({ txt, dy, sz, fw, fill, ls }, i) => (
              <motion.text key={i} x={CX} y={CY + dy}
                textAnchor="middle" fill={fill} fontSize={sz} fontWeight={fw}
                fontFamily="system-ui,sans-serif" letterSpacing={ls || '-0.3'}
                initial={{ opacity: 0, y: 6 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
              >{txt}</motion.text>
            ))}

            <motion.circle cx={CX} cy={CY + 44} r={4} fill={REDHEX}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, type: 'spring', stiffness: 250, damping: 18 }}
              style={{ transformOrigin: `${CX}px ${CY + 44}px` }}
            />

            {/* ── LEFT CARDS ── */}
            {[0, 1, 2].map((segIdx, rank) => {
              const tip = segMid(segIdx, R2 + 10);
              const cy = cardRows[rank];
              return (
                <motion.g key={segIdx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.65, delay: segIdx * 0.12 + 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <FeatureCard
                    segIdx={segIdx}
                    cardX={CARD_X_L} cardY={cy}
                    tipX={tip.x} tipY={tip.y}
                    lineAnchorX={CARD_X_L + CARD_W} lineAnchorY={cy + CARD_H / 2}
                    fill={SEGMENT_FILLS[segIdx]}
                    title={t(`feature.${segIdx + 1}.title`)}
                    desc={t(`feature.${segIdx + 1}.desc`)}
                  />
                </motion.g>
              );
            })}

            {/* ── RIGHT CARDS ── */}
            {[3, 4, 5].map((segIdx, rank) => {
              const tip = segMid(segIdx, R2 + 10);
              const cy = cardRows[rank];
              return (
                <motion.g key={segIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.65, delay: segIdx * 0.12 + 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <FeatureCard
                    segIdx={segIdx}
                    cardX={CARD_X_R} cardY={cy}
                    tipX={tip.x} tipY={tip.y}
                    lineAnchorX={CARD_X_R} lineAnchorY={cy + CARD_H / 2}
                    fill={SEGMENT_FILLS[segIdx]}
                    title={t(`feature.${segIdx + 1}.title`)}
                    desc={t(`feature.${segIdx + 1}.desc`)}
                  />
                </motion.g>
              );
            })}

            <motion.text x={CX} y={CY + 90}
              textAnchor="middle" fontSize="9.5" fontWeight="600"
              fill="#cbd5e1" fontFamily="system-ui,sans-serif" letterSpacing="2"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
            >
              {isEn ? 'HOTEL · FLEET · STAYS · VOYAGE' : 'HOTEL · ARMADA · HUNIAN · WISATA'}
            </motion.text>
          </svg>
        </div>

        {/* ── MOBILE ── */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {[1, 2, 3, 4, 5, 6].map((num, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div key={num}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex gap-4 items-start rounded-2xl p-5 border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: REDHEX }}>
                  <Icon size={18} className="text-white" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-black text-slate-900 mb-1 leading-tight">{t(`feature.${num}.title`)}</h3>
                  <p className="text-[11px] text-slate-400 leading-[1.6] line-clamp-3">{t(`feature.${num}.desc`)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}