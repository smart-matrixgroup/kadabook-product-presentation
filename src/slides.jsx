import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCart, BookOpen, Users, Package, BarChart3, ChefHat, WifiOff, Printer, MessageCircle,
  Languages, Lock, HardDrive, Gift, PhoneCall, TrendingUp, Facebook, Instagram, Youtube, Music2, Check,
  Sparkles, Receipt, ScanBarcode, Wallet, NotebookPen, AlertTriangle, HandCoins, Megaphone, Handshake,
  Crown, Building2, UserCog, FileSpreadsheet, Store, Coffee, Pill, Hammer, Shirt, Smartphone, Carrot,
  Moon, Sunrise, CircleDollarSign, Cloud, Rocket, Target, CalendarCheck, Star, ArrowRight, QrCode,
  UtensilsCrossed, Truck, ClipboardList, Eye, Heart,
} from 'lucide-react';
import { Stagger, Rise, Phone, Counter, Glass, IconTile, Kicker, Title, ease, useL, useLang } from './components/ui.jsx';

/*
 * Every visible string is written as l(English, Sinhala, Tamil).
 * Presenter notes (bottom of file) stay in Tamil — they are for the speaker, not the screen.
 */

// square-cornered copies (scripts/square-corners.py) — the originals have a mock phone's rounded corners baked in
const shot = (name) => `app/${name}.png`;

/* ───────────────────────── 01 HERO ───────────────────────── */
function Hero() {
  const l = useL();
  return (
    <div className="slide hero">
      <Stagger className="hero-copy" delay={0.25} gap={0.12}>
        <Rise className="brand-row">
          <img src="assets/kadabook-logo.png" alt="" className="brand-logo" />
          <span className="brand-word">
            Kada<b>Book</b>
          </span>
          <span className="pill">SMART (PVT) LTD</span>
        </Rise>
        <Rise as="h1" className="hero-title">
          {l('The shop’s book,', 'කඩේ ගිණුම් පොත,', 'கடையின் கணக்கு,')}
          <br />
          <span className="grad-text">{l('now in your pocket.', 'දැන් ඔබේ සාක්කුවේ.', 'இனி உங்கள் கையில்.')}</span>
        </Rise>
        <Rise className="hero-ta">
          {l('Sales · Credit · Stock · Profit — one app', 'විකුණුම් · ණය · තොග · ලාභය — එකම ඇප් එකක', 'விற்பனை · கடன் · Stock · இலாபம் — ஒரே app-இல்')}
        </Rise>
        <Rise className="hero-sub">
          {l(
            'Sales, credit, stock and profit — one simple mobile app built for every small shop in Sri Lanka.',
            'ශ්‍රී ලංකාවේ සෑම කුඩා කඩයක් සඳහාම නිර්මාණය කළ සරල ජංගම ඇප් එකක් — විකුණුම්, ණය, තොග සහ ලාභය එකම තැනක.',
            'இலங்கையின் ஒவ்வொரு சிறு கடைக்குமான எளிய mobile app — விற்பனை, கடன், stock, இலாபம் எல்லாம் ஒரே இடத்தில்.',
          )}
        </Rise>
        <Rise className="chip-row">
          <span className="chip"><Languages size={16} /> தமிழ் · සිංහල · English</span>
          <span className="chip"><WifiOff size={16} /> {l('Works offline', 'අන්තර්ජාලය නැතිවත් වැඩ', 'Internet இல்லாமலும் வேலை')}</span>
          <span className="chip"><MessageCircle size={16} /> {l('WhatsApp reminders', 'WhatsApp මතක් කිරීම්', 'WhatsApp நினைவூட்டல்')}</span>
          <span className="chip"><Printer size={16} /> {l('Bill printing', 'බිල් මුද්‍රණය', 'Bill print')}</span>
        </Rise>
        <Rise className="hero-cta">
          <span className="btn-primary">
            {l('First 100 shops · Free install + 1 month free', 'පළමු කඩ 100ට · නොමිලේ ස්ථාපනය + මාසයක් නොමිලේ', 'முதல் 100 கடைகளுக்கு · இலவச install + 1 மாதம் இலவசம்')}{' '}
            <ArrowRight size={18} />
          </span>
        </Rise>
      </Stagger>
      <motion.div className="hero-badge b1" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.8, ease }}>
        <IconTile icon={TrendingUp} tone="green" size={40} />
        <div>
          <small>{l('Today’s sales', 'අද විකුණුම්', 'இன்றைய விற்பனை')}</small>
          <b>Rs <Counter to={12450} /></b>
        </div>
      </motion.div>
      <motion.div className="hero-badge b2" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, duration: 0.8, ease }}>
        <IconTile icon={HandCoins} tone="orange" size={40} />
        <div>
          <small>{l('Credit to collect', 'අය කරගත යුතු ණය', 'வசூலிக்க வேண்டிய கடன்')}</small>
          <b>Rs <Counter to={48300} /></b>
        </div>
      </motion.div>
    </div>
  );
}

/* ───────────────────────── 02 PROBLEM ───────────────────────── */
function Problem() {
  const l = useL();
  const pains = [
    {
      icon: HandCoins, tone: 'orange',
      t: l('Credit gets forgotten', 'ණය අමතක වෙනවා', 'கடன் மறந்து போகும்'),
      d: l('Names and amounts scattered across notebook pages. Money is lost quietly every month.', 'නම් සහ මුදල් පොතේ පිටු පුරා විසිරී. හැම මාසෙම මුදල් නිහඬව නැති වෙනවා.', 'பெயர்களும் தொகைகளும் கொப்பி பக்கங்களில் சிதறிக் கிடக்கும். ஒவ்வொரு மாதமும் பணம் அமைதியாக இழக்கப்படும்.'),
    },
    {
      icon: CircleDollarSign, tone: 'blue',
      t: l('No idea of real profit', 'සැබෑ ලාභය නොදනී', 'உண்மையான இலாபம் தெரியாது'),
      d: l('Cash in the drawer is not profit. Without cost price, the owner is guessing.', 'ලාච්චුවේ මුදල් ලාභය නොවේ. ගැනුම් මිල නොදැන හිමිකරු අනුමාන කරනවා.', 'கல்லாப்பெட்டி காசு இலாபம் அல்ல. வாங்கிய விலை தெரியாமல் கடைக்காரர் ஊகிக்கிறார்.'),
    },
    {
      icon: Package, tone: 'violet',
      t: l('Stock runs out unnoticed', 'තොග අවසන් වීම නොදැනේ', 'Stock முடிந்ததும் தெரியாது'),
      d: l('Fast-moving items finish before anyone notices — sales are lost.', 'ඉක්මනින් විකිණෙන භාණ්ඩ කවුරුත් නොදැනම ඉවර වෙනවා — විකුණුම් අහිමි වෙනවා.', 'வேகமாக விற்கும் பொருட்கள் யாரும் கவனிக்கும் முன் முடிந்துவிடும் — விற்பனை இழப்பு.'),
    },
    {
      icon: Receipt, tone: 'red',
      t: l('No bills, no history', 'බිල් නැත, වාර්තා නැත', 'Bill இல்லை, பதிவு இல்லை'),
      d: l('No receipt for the customer, no record for the owner, no trust between them.', 'පාරිභෝගිකයාට රිසිට්පතක් නැහැ, හිමිකරුට වාර්තාවක් නැහැ, විශ්වාසයක් නැහැ.', 'Customer-க்கு bill இல்லை, கடைக்காரருக்கு பதிவு இல்லை, நம்பிக்கையும் இல்லை.'),
    },
  ];
  return (
    <div className="slide split">
      <Stagger className="col-copy" delay={0.15}>
        <Kicker tone="red">{l('The problem', 'ගැටලුව', 'பிரச்சனை')}</Kicker>
        <Title
          sub={l(
            'Most small shops still run on a paper notebook and the owner’s memory. It works — until it doesn’t.',
            'බොහෝ කුඩා කඩ තවමත් ක්‍රියා කරන්නේ කඩදාසි පොතකින් සහ හිමිකරුගේ මතකයෙන්. එය වැඩ කරයි — වැඩ නොකරන දවස එනතුරු.',
            'பெரும்பாலான சிறு கடைகள் இன்னும் காகித கொப்பியிலும் கடைக்காரரின் ஞாபகத்திலும் தான் ஓடுகின்றன.',
          )}
        >
          {l('Every evening, ', 'හැම හවසකම, ', 'ஒவ்வொரு மாலையும், ')}
          <span className="grad-warm">{l('the same notebook headache.', 'එකම පොතේ කරදරය.', 'அதே கொப்பி தலைவலி.')}</span>
        </Title>
        <div className="grid-2 mt-32">
          {pains.map((p) => (
            <Rise key={p.t}>
              <Glass className="pain">
                <IconTile icon={p.icon} tone={p.tone} size={46} />
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </Glass>
            </Rise>
          ))}
        </div>
      </Stagger>
      <div className="col-visual">
        <motion.div
          className="notebook"
          initial={{ opacity: 0, rotateY: -40, rotateZ: -8, y: 40 }}
          animate={{ opacity: 1, rotateY: -18, rotateZ: -5, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
        >
          <div className="nb-head">
            <NotebookPen size={22} /> {l('Credit notebook', 'ණය පොත', 'கடன் கொப்பி')}
          </div>
          {[
            ['செல்வி', '1,250'],
            ['Ravi anna', '3,400'],
            ['Kumar', '780'],
            ['?? (blue shirt)', '1,100'],
            ['Mala akka', '2,050'],
            ['Suresh', '???'],
          ].map(([n, a], i) => (
            <motion.div key={i} className="nb-line" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.15 }}>
              <span>{n}</span>
              <span>{a}</span>
              {(i === 1 || i === 3 || i === 5) && (
                <motion.i className="strike" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.8 + i * 0.2, duration: 0.5 }} />
              )}
            </motion.div>
          ))}
          <motion.div
            className="nb-stamp"
            initial={{ opacity: 0, scale: 2.4, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: -14 }}
            transition={{ delay: 2.9, type: 'spring', stiffness: 220, damping: 14 }}
          >
            <AlertTriangle size={20} /> {l('Lost money', 'අහිමි වූ මුදල්', 'இழந்த பணம்')}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ───────────────────────── 03 SOLUTION ───────────────────────── */
function Solution() {
  const l = useL();
  const orbit = [
    { icon: ShoppingCart, tone: 'green', l: l('Sales', 'විකුණුම්', 'விற்பனை') },
    { icon: BookOpen, tone: 'orange', l: l('Credit book', 'ණය පොත', 'கடன் புத்தகம்') },
    { icon: Users, tone: 'blue', l: l('Customers', 'පාරිභෝගිකයින්', 'Customers') },
    { icon: Package, tone: 'violet', l: l('Stock', 'තොග', 'Stock') },
    { icon: BarChart3, tone: 'indigo', l: l('Reports', 'වාර්තා', 'அறிக்கை') },
    { icon: ChefHat, tone: 'amber', l: l('Kitchen', 'කුස්සිය', 'Kitchen') },
    { icon: UserCog, tone: 'pink', l: l('Staff', 'කාර්ය මණ්ඩලය', 'Staff') },
    { icon: Printer, tone: 'cyan', l: l('Printing', 'මුද්‍රණය', 'Print') },
  ];
  return (
    <div className="slide split reverse">
      <div className="col-visual orbit-stage">
        <motion.div className="orbit-ring" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}>
          {orbit.map((o, i) => {
            const a = (i / orbit.length) * Math.PI * 2;
            return (
              <motion.div
                key={i}
                className="orbit-item"
                style={{ left: `${50 + Math.cos(a) * 46}%`, top: `${50 + Math.sin(a) * 46}%` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { delay: 0.6 + i * 0.1 },
                  scale: { delay: 0.6 + i * 0.1, type: 'spring' },
                  rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
                }}
              >
                <IconTile icon={o.icon} tone={o.tone} size={58} />
                <span>{o.l}</span>
              </motion.div>
            );
          })}
        </motion.div>
        <Phone src={shot('H1-home-ta-v2')} width={250} delay={0.2} />
      </div>
      <Stagger className="col-copy" delay={0.2}>
        <Kicker>{l('The solution', 'විසඳුම', 'தீர்வு')}</Kicker>
        <Title
          ta={l('Built for the shop owner’s own phone', 'කඩ හිමිකරුගේම දුරකථනයට', 'கடைக்காரரின் சொந்த phone-இலேயே')}
          sub={l(
            'KadaBook replaces the notebook, the calculator and the guesswork with one app the shop owner already knows how to use: their phone.',
            'KadaBook පොත, කැල්කියුලේටරය සහ අනුමාන කිරීම වෙනුවට හිමිකරු දැනටමත් භාවිතා කරන දුරකථනයේම එක් ඇප් එකක් ලබා දෙයි.',
            'கொப்பி, calculator, ஊகம் — இவற்றை KadaBook ஒரே app-ஆக மாற்றுகிறது, கடைக்காரர் ஏற்கனவே பயன்படுத்தும் phone-இலேயே.',
          )}
        >
          {l('One app. ', 'එකම ඇප් එකක්. ', 'ஒரே app. ')}
          <span className="grad-text">{l('The whole shop.', 'මුළු කඩයම.', 'முழுக் கடையும்.')}</span>
        </Title>
        <div className="checks mt-24">
          {[
            l('Record a sale in 3 taps — faster than writing it', 'තට්ටු 3කින් විකුණුමක් — ලියනවාට වඩා ඉක්මනින්', '3 tap-இல் ஒரு sale — எழுதுவதை விட வேகமாக'),
            l('Every credit linked to a customer, with WhatsApp reminders', 'සෑම ණයක්ම පාරිභෝගිකයාට සම්බන්ධයි, WhatsApp මතක් කිරීම් සමඟ', 'ஒவ்வொரு கடனும் customer-உடன் இணைப்பு, WhatsApp நினைவூட்டலுடன்'),
            l('Live profit, stock and day-close report every night', 'සෑම රාත්‍රියකම ලාභය, තොග සහ දවසේ අවසන් වාර්තාව', 'ஒவ்வொரு இரவும் இலாபம், stock, day-close report'),
            l('Tamil, Sinhala & English · works without internet', 'සිංහල, දෙමළ සහ ඉංග්‍රීසි · අන්තර්ජාලය නැතිවත්', 'தமிழ், சிங்களம், English · internet இல்லாமலும்'),
          ].map((c) => (
            <Rise key={c} className="check">
              <span className="check-dot"><Check size={16} strokeWidth={3} /></span>
              {c}
            </Rise>
          ))}
        </div>
      </Stagger>
    </div>
  );
}

/* ───────────────────────── 04 A DAY WITH KADABOOK ───────────────────────── */
function DayFlow() {
  const l = useL();
  const steps = [
    { icon: Sunrise, tone: 'amber', time: '7:00 AM', t: l('Open the shop', 'කඩය අරින්න', 'கடை திறப்பு'), d: l('PIN unlock · opening cash balance', 'PIN අගුල · ආරම්භක මුදල් ශේෂය', 'PIN unlock · ஆரம்ப காசு') },
    { icon: ShoppingCart, tone: 'green', time: l('All day', 'දවස පුරා', 'நாள் முழுவதும்'), t: l('Sell', 'විකුණන්න', 'விற்பனை'), d: l('Quick sale or item bill · print / WhatsApp the bill', 'ඉක්මන් විකුණුම හෝ භාණ්ඩ බිල · මුද්‍රණය / WhatsApp', 'Quick sale அல்லது item bill · print / WhatsApp') },
    { icon: BookOpen, tone: 'orange', time: l('Anytime', 'ඕනෑම වෙලාවක', 'எப்போதும்'), t: l('Give credit', 'ණයට දෙන්න', 'கடன் கொடுத்தல்'), d: l('Tap credit → pick customer → saved to their account', 'ණය ඔබන්න → පාරිභෝගිකයා තෝරන්න → ගිණුමට සුරැකේ', 'கடன் அழுத்து → customer தேர்வு → அவர் கணக்கில் சேரும்') },
    { icon: MessageCircle, tone: 'cyan', time: l('Weekly', 'සතිපතා', 'வாரந்தோறும்'), t: l('Collect', 'අය කරගන්න', 'வசூல்'), d: l('One-tap WhatsApp reminder · partial payments', 'එක් තට්ටුවෙන් WhatsApp මතක් කිරීම · කොටස් ගෙවීම්', 'ஒரே tap WhatsApp நினைவூட்டல் · பகுதி payment') },
    { icon: Moon, tone: 'indigo', time: '9:00 PM', t: l('Close the day', 'දවස වසන්න', 'நாள் முடிவு'), d: l('Sales, cash, credit & profit report — share or print', 'විකුණුම්, මුදල්, ණය සහ ලාභ වාර්තාව — බෙදාගන්න හෝ මුද්‍රණය', 'விற்பனை, காசு, கடன், இலாபம் report — share அல்லது print') },
  ];
  return (
    <div className="slide center">
      <Stagger className="head-center" delay={0.1}>
        <Kicker tone="green">{l('How it works', 'එය ක්‍රියා කරන ආකාරය', 'எப்படி வேலை செய்யும்')}</Kicker>
        <Title ta={l('From opening the shop to closing it', 'කඩය අරින වෙලාවේ සිට වහන තුරු', 'கடை திறப்பது முதல் மூடுவது வரை')}>
          {l('A day with KadaBook', 'KadaBook සමඟ දවසක්', 'KadaBook உடன் ஒரு நாள்')}
        </Title>
      </Stagger>
      <div className="timeline">
        <motion.div className="timeline-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2.2, delay: 0.5, ease }} />
        {steps.map((s, i) => (
          <motion.div key={i} className="tl-step" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.35, duration: 0.7, ease }}>
            <div className="tl-node">
              <IconTile icon={s.icon} tone={s.tone} size={64} />
              <span className="tl-num">{i + 1}</span>
            </div>
            <div className="tl-time">{s.time}</div>
            <Glass className="tl-card">
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </Glass>
          </motion.div>
        ))}
      </div>
      <Rise className="foot-note">
        <Sparkles size={16} />{' '}
        {l('A new sale takes under 5 seconds · no training manual needed', 'නව විකුණුමකට තත්පර 5කට අඩුයි · පුහුණු අත්පොතක් අවශ්‍ය නැහැ', 'ஒரு sale பதிய 5 விநாடிக்குள் · training manual தேவையில்லை')}
      </Rise>
    </div>
  );
}

/* ─────────── reusable "feature" layout: phones + bullet cards ─────────── */
function FeatureSlide({ kicker, tone, title, ta, sub, phones, bullets, extra }) {
  return (
    <div className="slide split">
      <Stagger className="col-copy" delay={0.15}>
        <Kicker tone={tone}>{kicker}</Kicker>
        <Title ta={ta} sub={sub}>
          {title}
        </Title>
        <div className="bullets mt-24">
          {bullets.map((b, i) => (
            <Rise key={i}>
              <Glass className="bullet">
                <IconTile icon={b.icon} tone={b.tone || tone} size={44} />
                <div>
                  <h5>{b.t}</h5>
                  <p>{b.d}</p>
                </div>
              </Glass>
            </Rise>
          ))}
        </div>
        {extra}
      </Stagger>
      <div className="col-visual phones-fan">
        {phones.map((p, i) => (
          <Phone
            key={p}
            src={shot(p)}
            width={phones.length > 2 ? 230 : 255}
            rotate={(i - (phones.length - 1) / 2) * 6}
            delay={0.25 + i * 0.18}
            style={{
              zIndex: i === Math.floor(phones.length / 2) ? 3 : 1,
              marginTop: i === Math.floor(phones.length / 2) ? -30 : 40,
              marginLeft: i ? -60 : 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Sales() {
  const l = useL();
  return (
    <FeatureSlide
      kicker={l('Feature 1 · Sales', 'විශේෂාංගය 1 · විකුණුම්', 'அம்சம் 1 · விற்பனை')}
      tone="green"
      title={l(
        <>Sell in <span className="grad-green">3 taps.</span></>,
        <><span className="grad-green">තට්ටු 3කින්</span> විකුණන්න.</>,
        <><span className="grad-green">3 tap-இல்</span> விற்பனை.</>,
      )}
      ta={l('Quick sale · Menu bill · Hold · Print', 'ඉක්මන් විකුණුම · මෙනු බිල · Hold · මුද්‍රණය', 'Quick sale · Menu bill · Hold · Print')}
      phones={['S1-main', 'S7-menu-sale', 'S9-payment']}
      bullets={[
        { icon: Wallet, t: l('Quick sale calculator', 'ඉක්මන් විකුණුම් කැල්කියුලේටරය', 'Quick sale calculator'), d: l('Type the amount, tap Cash or Credit — done. Perfect for busy counters.', 'මුදල ටයිප් කර, මුදල් හෝ ණය ඔබන්න — අවසන්. කාර්යබහුල කවුන්ටර සඳහා.', 'தொகையை type பண்ணி Cash அல்லது கடன் அழுத்தினால் முடிந்தது. பிஸியான கடைக்கு ஏற்றது.') },
        { icon: ClipboardList, t: l('Menu / item bill', 'මෙනු / භාණ්ඩ බිල', 'Menu / item bill'), d: l('Pick items, quantity & discount. Stock is deducted automatically.', 'භාණ්ඩ, ප්‍රමාණය සහ වට්ටම් තෝරන්න. තොග ස්වයංක්‍රීයව අඩු වේ.', 'பொருள், அளவு, discount தேர்வு. Stock தானாக குறையும்.') },
        { icon: CircleDollarSign, t: l('Cash · Credit · Partial · eZ Cash', 'මුදල් · ණය · කොටස් · eZ Cash', 'Cash · கடன் · பகுதி · eZ Cash'), d: l('Split payments and hold bills for later, just like a real POS.', 'ගෙවීම් බෙදන්න, බිල් පසුවට තබාගන්න — සැබෑ POS එකක් වගේ.', 'Payment-ஐ பிரிக்கலாம், bill-ஐ hold பண்ணலாம் — உண்மையான POS போல.') },
        { icon: Printer, t: l('Print or WhatsApp the bill', 'බිල මුද්‍රණය හෝ WhatsApp', 'Bill print அல்லது WhatsApp'), d: l('Bluetooth thermal printer or a clean digital receipt. Barcode scan supported.', 'Bluetooth තාප මුද්‍රකය හෝ ඩිජිටල් රිසිට්පත. බාර්කෝඩ් ස්කෑන් සහාය.', 'Bluetooth thermal printer அல்லது digital receipt. Barcode scan உண்டு.') },
      ]}
    />
  );
}

function Credit() {
  const l = useL();
  return (
    <FeatureSlide
      kicker={l('Feature 2 · Credit book', 'විශේෂාංගය 2 · ණය පොත', 'அம்சம் 2 · கடன் புத்தகம்')}
      tone="orange"
      title={l(
        <>The credit book that <span className="grad-warm">collects for you.</span></>,
        <>ඔබ වෙනුවෙන් <span className="grad-warm">ණය අය කරන පොත.</span></>,
        <>உங்களுக்காக <span className="grad-warm">வசூலிக்கும் கடன் புத்தகம்.</span></>,
      )}
      ta={l('Your credit notebook, now on the phone', 'ඔබේ ණය පොත, දැන් දුරකථනයේ', 'கடன் கொப்பி இனி phone-இல்')}
      phones={['C1-credit-list', 'C2-reminder', 'C3-collect']}
      bullets={[
        { icon: Users, t: l('Every rupee linked to a customer', 'සෑම රුපියලක්ම පාරිභෝගිකයෙකුට', 'ஒவ்வொரு ரூபாயும் ஒரு customer-உடன்'), d: l('Balance, history and last payment — one search away.', 'ශේෂය, ඉතිහාසය සහ අවසන් ගෙවීම — එක් සෙවීමකින්.', 'நிலுவை, வரலாறு, கடைசி payment — ஒரு search-இல்.') },
        { icon: MessageCircle, t: l('One-tap WhatsApp reminder', 'එක් තට්ටුවෙන් WhatsApp මතක් කිරීම', 'ஒரே tap WhatsApp நினைவூட்டல்'), d: l('A polite Tamil/Sinhala/English message with the exact balance.', 'නිවැරදි ශේෂය සමඟ සිංහල/දෙමළ/ඉංග්‍රීසි ආචාරශීලී පණිවිඩයක්.', 'சரியான தொகையுடன் தமிழ்/சிங்களம்/English மரியாதையான செய்தி.') },
        { icon: HandCoins, t: l('Partial payments', 'කොටස් ගෙවීම්', 'பகுதி payment'), d: l('Collect any amount — the oldest dues are cleared first, automatically.', 'ඕනෑම මුදලක් ගන්න — පැරණිම ණය ස්වයංක්‍රීයව මුලින්ම බේරේ.', 'எந்தத் தொகையும் வசூலிக்கலாம் — பழைய கடன் தானாக முதலில் தீரும்.') },
        { icon: AlertTriangle, t: l('Overdue alerts', 'කල් ඉකුත් ණය ඇඟවීම්', 'தாமதக் கடன் alert'), d: l('See who has not paid for 30+ days before the money is lost.', 'දින 30කට වඩා නොගෙවූ අය, මුදල් නැති වීමට පෙර දකින්න.', '30+ நாள் கட்டாதவர்களை பணம் இழக்கும் முன் பார்க்கலாம்.') },
      ]}
      extra={
        <Rise className="stat-strip">
          <div>
            <small>{l('Sample shop · credit tracked', 'නියැදි කඩය · සටහන් කළ ණය', 'மாதிரி கடை · பதிவான கடன்')}</small>
            <b className="c-orange">Rs <Counter to={48300} /></b>
          </div>
          <div>
            <small>{l('Collected this month', 'මේ මාසයේ අය කළ', 'இந்த மாதம் வசூல்')}</small>
            <b className="c-green">Rs <Counter to={31900} /></b>
          </div>
        </Rise>
      }
    />
  );
}

function Stock() {
  const l = useL();
  return (
    <FeatureSlide
      kicker={l('Feature 3 · Products & stock', 'විශේෂාංගය 3 · භාණ්ඩ සහ තොග', 'அம்சம் 3 · பொருட்கள் & Stock')}
      tone="violet"
      title={l(
        <>Know your stock. <span className="grad-violet">Know your profit.</span></>,
        <>ඔබේ තොග දැනගන්න. <span className="grad-violet">ඔබේ ලාභය දැනගන්න.</span></>,
        <>Stock தெரியும். <span className="grad-violet">இலாபமும் தெரியும்.</span></>,
      )}
      ta={l('Know what’s running out — before it does', 'අවසන් වන දේ — කලින්ම දැනගන්න', 'எது முடியப் போகுது — முன்பே தெரியும்')}
      phones={['P1-products', 'P2-product-detail', 'P5-restock']}
      bullets={[
        { icon: Package, t: l('Products with cost & selling price', 'ගැනුම් සහ විකුණුම් මිල සමඟ භාණ්ඩ', 'வாங்கும் & விற்கும் விலையுடன் பொருட்கள்'), d: l('Real profit per item, per day — not a guess.', 'භාණ්ඩයකට, දවසකට සැබෑ ලාභය — අනුමානයක් නොවේ.', 'ஒவ்வொரு பொருளுக்கும் ஒவ்வொரு நாளும் உண்மையான இலாபம்.') },
        { icon: AlertTriangle, t: l('Low-stock alerts', 'අඩු තොග ඇඟවීම්', 'குறைந்த stock alert'), d: l('Get warned before fast-moving items run out.', 'ඉක්මනින් විකිණෙන භාණ්ඩ ඉවර වීමට පෙර අනතුරු ඇඟවීම.', 'வேகமாக விற்கும் பொருள் முடியும் முன் எச்சரிக்கை.') },
        { icon: ScanBarcode, t: l('Barcode scan', 'බාර්කෝඩ් ස්කෑන්', 'Barcode scan'), d: l('Scan to add products or to bill — the phone camera is the scanner.', 'භාණ්ඩ එක් කිරීමට හෝ බිල් කිරීමට ස්කෑන් කරන්න — දුරකථන කැමරාවම ස්කෑනරයයි.', 'பொருள் சேர்க்க அல்லது bill போட scan — phone camera-வே scanner.') },
        { icon: FileSpreadsheet, t: l('Excel import / export', 'Excel ආයාත / අපනයන', 'Excel import / export'), d: l('Load 500 products in one go, or hand the data to the accountant.', 'භාණ්ඩ 500ක් එකවර ඇතුළත් කරන්න, හෝ ගණකාධිකාරීට දත්ත දෙන්න.', '500 பொருட்களை ஒரே தடவையில் load, accountant-க்கும் கொடுக்கலாம்.') },
      ]}
    />
  );
}

/* ───────────────────────── 08 REPORTS ───────────────────────── */
function Reports() {
  const l = useL();
  const bars = [42, 58, 51, 70, 64, 88, 96];
  const days = l(
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    ['සඳු', 'අඟ', 'බදා', 'බ්‍රහ', 'සිකු', 'සෙන', 'ඉරි'],
    ['திங்', 'செவ்', 'புத', 'வியா', 'வெள்', 'சனி', 'ஞாயி'],
  );
  const minis = l(
    ['Profit summary', 'Cash vs credit', 'Day-close report', 'Expenses', 'Best sellers', 'Share as PDF / WhatsApp'],
    ['ලාභ සාරාංශය', 'මුදල් සහ ණය', 'දවසේ අවසන් වාර්තාව', 'වියදම්', 'වැඩිපුරම විකිණෙන', 'PDF / WhatsApp බෙදාගැනීම'],
    ['இலாப சுருக்கம்', 'காசு vs கடன்', 'Day-close report', 'செலவுகள்', 'அதிகம் விற்பவை', 'PDF / WhatsApp share'],
  );
  return (
    <div className="slide split reverse">
      <div className="col-visual phones-fan">
        <Phone src={shot('H5-month-detail')} width={250} rotate={-5} delay={0.2} />
        <Phone src={shot('R1-sales-list')} width={250} rotate={5} delay={0.4} style={{ marginLeft: -50, marginTop: 60 }} />
      </div>
      <Stagger className="col-copy" delay={0.15}>
        <Kicker tone="indigo">{l('Feature 4 · Reports', 'විශේෂාංගය 4 · වාර්තා', 'அம்சம் 4 · அறிக்கைகள்')}</Kicker>
        <Title
          ta={l('How much sold today? How much profit?', 'අද කොච්චර විකුණුවාද? ලාභය කීයද?', 'இன்று எவ்வளவு விற்றது? எவ்வளவு இலாபம்?')}
          sub={l(
            'Daily, weekly and monthly reports the owner actually reads — on the phone, in their own language.',
            'හිමිකරු සැබවින්ම කියවන දෛනික, සතිපතා සහ මාසික වාර්තා — දුරකථනයේම, තමන්ගේම භාෂාවෙන්.',
            'கடைக்காரர் உண்மையில் படிக்கும் தினசரி, வாராந்திர, மாதாந்திர reports — phone-இலேயே, அவர் மொழியில்.',
          )}
        >
          {l(
            <>&ldquo;How is my shop doing?&rdquo; <span className="grad-text">Answered daily.</span></>,
            <>&ldquo;මගේ කඩේ කොහොමද?&rdquo; <span className="grad-text">හැමදාම පිළිතුර.</span></>,
            <>&ldquo;என் கடை எப்படி போகுது?&rdquo; <span className="grad-text">தினமும் பதில்.</span></>,
          )}
        </Title>
        <Rise>
          <Glass className="chart-card" hover={false}>
            <div className="chart-head">
              <div>
                <small>{l('This week · sample', 'මේ සතිය · නියැදිය', 'இந்த வாரம் · மாதிரி')}</small>
                <b>Rs <Counter to={469000} /></b>
              </div>
              <span className="up-pill"><TrendingUp size={14} /> +18%</span>
            </div>
            <div className="bars">
              {bars.map((h, i) => (
                <div key={i} className="bar-col">
                  <motion.div className="bar" initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.8 + i * 0.1, duration: 0.9, ease }} />
                  <span>{days[i]}</span>
                </div>
              ))}
            </div>
          </Glass>
        </Rise>
        <div className="mini-grid mt-16">
          {minis.map((x) => (
            <Rise key={x} className="mini">
              <Check size={14} strokeWidth={3} /> {x}
            </Rise>
          ))}
        </div>
      </Stagger>
    </div>
  );
}

function Pro() {
  const l = useL();
  return (
    <FeatureSlide
      kicker={l('Pro features', 'Pro විශේෂාංග', 'Pro அம்சங்கள்')}
      tone="amber"
      title={l(
        <>Ready for <span className="grad-amber">restaurants, kitchens & branches.</span></>,
        <><span className="grad-amber">අවන්හල්, කුස්සි සහ ශාඛා</span> සඳහා සූදානම්.</>,
        <><span className="grad-amber">Hotel, kitchen, branch</span> — எல்லாவற்றுக்கும் தயார்.</>,
      )}
      ta={l('Kitchen · Staff · Branch · Supplier', 'කුස්සිය · කාර්ය මණ්ඩලය · ශාඛා · සැපයුම්කරුවන්', 'Kitchen · Staff · Branch · Supplier')}
      phones={['M10-kitchen', 'M7-staff', 'M8-audit-log']}
      bullets={[
        { icon: ChefHat, t: l('Kitchen & recipe stock', 'කුස්සිය සහ වට්ටෝරු තොග', 'Kitchen & recipe stock'), d: l('Raw materials → recipes → menu items. Wastage and stock counts tracked.', 'අමුද්‍රව්‍ය → වට්ටෝරු → මෙනු. අපතේ යාම සහ තොග ගණන් සටහන් වේ.', 'மூலப்பொருள் → recipe → menu. Wastage, stock count பதிவு.') },
        { icon: Building2, t: l('Multiple branches', 'ශාඛා කිහිපයක්', 'பல branch-கள்'), d: l('Each branch has its own stock and sales; the owner sees everything.', 'සෑම ශාඛාවකටම වෙනම තොග සහ විකුණුම්; හිමිකරුට සියල්ල පෙනේ.', 'ஒவ்வொரு branch-க்கும் தனி stock, விற்பனை; owner எல்லாவற்றையும் பார்க்கலாம்.') },
        { icon: UserCog, t: l('Staff logins & permissions', 'කාර්ය මණ්ඩල ලොගින් සහ අවසර', 'Staff login & அனுமதிகள்'), d: l('Cashier sees only what they need. Owner can switch a login off instantly.', 'අයකැමිට අවශ්‍ය දේ පමණක් පෙනේ. හිමිකරුට ලොගින් එකක් ක්ෂණිකව නවත්විය හැක.', 'Cashier தேவையானதை மட்டும் பார்ப்பார். Owner உடனே login-ஐ நிறுத்தலாம்.') },
        { icon: Eye, t: l('Audit log & suppliers', 'විගණන ලොගය සහ සැපයුම්කරුවන්', 'Audit log & suppliers'), d: l('Who changed what, and when. Supplier dues tracked too.', 'කවුද, මොනවද, කවදද වෙනස් කළේ. සැපයුම්කරුවන්ට ගෙවිය යුතු දේත් සටහන් වේ.', 'யார், எதை, எப்போது மாற்றினார். Supplier நிலுவையும் பதிவு.') },
      ]}
    />
  );
}

/* ───────────────────────── 10 TRUST ───────────────────────── */
function Trust() {
  const l = useL();
  const items = [
    { icon: WifiOff, tone: 'blue', t: l('Works offline', 'අන්තර්ජාලය නැතිවත්', 'Offline-இலும் வேலை'), d: l('No signal? Keep selling. Syncs to the cloud when internet returns.', 'සිග්නල් නැද්ද? දිගටම විකුණන්න. අන්තර්ජාලය ආ විට cloud එකට sync වේ.', 'Signal இல்லையா? விற்பனை தொடரும். Internet வந்ததும் cloud-க்கு sync.') },
    { icon: Cloud, tone: 'cyan', t: l('Cloud sync', 'Cloud සමමුහුර්තය', 'Cloud sync'), d: l('Owner sees today’s sales from home, on another phone, in real time.', 'හිමිකරුට නිවසේ සිටම, වෙනත් දුරකථනයකින් අද විකුණුම් සජීවීව දැකිය හැක.', 'Owner வீட்டிலிருந்தே வேறு phone-இல் இன்றைய விற்பனையை உடனே பார்க்கலாம்.') },
    { icon: HardDrive, tone: 'green', t: 'Google Drive backup', d: l('WhatsApp-style daily / weekly / monthly backup & restore.', 'WhatsApp වගේ දෛනික / සතිපතා / මාසික backup සහ restore.', 'WhatsApp மாதிரி தினம் / வாரம் / மாதம் backup & restore.') },
    { icon: Lock, tone: 'pink', t: l('PIN lock & privacy', 'PIN අගුල සහ පෞද්ගලිකත්වය', 'PIN lock & தனியுரிமை'), d: l('App PIN, each shop’s data fully separated, account delete option.', 'ඇප් PIN, සෑම කඩයකම දත්ත සම්පූර්ණයෙන් වෙන්, ගිණුම මකා දැමීමේ හැකියාව.', 'App PIN, ஒவ்வொரு கடையின் data-வும் தனி, account delete வசதி.') },
    { icon: Languages, tone: 'violet', t: l('3 languages', 'භාෂා 3ක්', '3 மொழிகள்'), d: l('தமிழ் · සිංහල · English — switch any time.', 'සිංහල · தமிழ் · English — ඕනෑම වේලාවක මාරු කරන්න.', 'தமிழ் · සිංහල · English — எப்போதும் மாற்றலாம்.') },
    { icon: Printer, tone: 'amber', t: l('Thermal printer', 'තාප මුද්‍රකය', 'Thermal printer'), d: l('Bluetooth 58 / 80 mm receipt printers supported.', 'Bluetooth 58 / 80 mm රිසිට් මුද්‍රක සහාය.', 'Bluetooth 58 / 80 mm receipt printer support.') },
  ];
  return (
    <div className="slide center">
      <Stagger className="head-center" delay={0.1}>
        <Kicker tone="cyan">{l('Trust & reliability', 'විශ්වාසය සහ ස්ථාවරත්වය', 'நம்பிக்கை')}</Kicker>
        <Title ta={l('Your shop’s data — kept safe', 'ඔබේ කඩේ දත්ත — ආරක්ෂිතව', 'கடையின் data — பாதுகாப்பாக')}>
          {l('Built for real shops, real conditions.', 'සැබෑ කඩ, සැබෑ තත්ත්වයන් සඳහා.', 'உண்மையான கடைகளுக்காக, உண்மையான சூழலுக்காக.')}
        </Title>
      </Stagger>
      <Stagger className="grid-3 trust-grid" delay={0.4} gap={0.1}>
        {items.map((it, i) => (
          <Rise key={i}>
            <Glass className="trust-card">
              <IconTile icon={it.icon} tone={it.tone} size={56} />
              <h4>{it.t}</h4>
              <p>{it.d}</p>
            </Glass>
          </Rise>
        ))}
      </Stagger>
    </div>
  );
}

/* ───────────────────────── 11 WHO IT'S FOR ───────────────────────── */
function Audience() {
  const l = useL();
  const lang = useLang();
  const shops = [
    { icon: Store, en: 'Grocery / kadai', t: l('Grocery / kadai', 'සිල්ලර කඩ', 'பலசரக்கு கடை'), tone: 'green' },
    { icon: Coffee, en: 'Bakery & tea shop', t: l('Bakery & tea shop', 'බේකරි සහ තේ කඩ', 'பேக்கரி · தேநீர் கடை'), tone: 'amber' },
    { icon: UtensilsCrossed, en: 'Fast food & hotel', t: l('Fast food & hotel', 'ෆාස්ට් ෆුඩ් සහ හෝටල්', 'Fast food · உணவகம்'), tone: 'orange' },
    { icon: Pill, en: 'Pharmacy', t: l('Pharmacy', 'ෆාමසි', 'மருந்தகம்'), tone: 'cyan' },
    { icon: Hammer, en: 'Hardware', t: l('Hardware', 'හාඩ්වෙයාර්', 'Hardware கடை'), tone: 'indigo' },
    { icon: Shirt, en: 'Textile & fancy', t: l('Textile & fancy', 'රෙදි සහ ෆැන්සි', 'புடவை · fancy கடை'), tone: 'pink' },
    { icon: Smartphone, en: 'Mobile & electronics', t: l('Mobile & electronics', 'ජංගම සහ ඉලෙක්ට්‍රොනික', 'Mobile · electronics'), tone: 'blue' },
    { icon: Carrot, en: 'Vegetable & fish', t: l('Vegetable & fish', 'එළවළු සහ මාළු', 'மரக்கறி · மீன்'), tone: 'violet' },
  ];
  return (
    <div className="slide center">
      <Stagger className="head-center" delay={0.1}>
        <Kicker tone="green">{l('Who it is for', 'කා සඳහාද', 'யாருக்கு')}</Kicker>
        <Title
          sub={l(
            'If a shop sells something and gives credit, KadaBook fits. The owner chooses a shop type at sign-up and the app adapts.',
            'භාණ්ඩ විකුණන, ණය දෙන ඕනෑම කඩයකට KadaBook ගැලපේ. ලියාපදිංචියේදී කඩ වර්ගය තේරූ විට ඇප් එක ඊට ගැලපේ.',
            'பொருள் விற்று கடன் கொடுக்கும் எந்தக் கடைக்கும் KadaBook பொருந்தும். Sign-up-இல் கடை வகையை தேர்வு செய்தால் app அதற்கேற்ப மாறும்.',
          )}
        >
          {l('Every shop on the street.', 'පාරේ සෑම කඩයකටම.', 'தெருவின் ஒவ்வொரு கடைக்கும்.')}
        </Title>
      </Stagger>
      <div className="grid-4 shop-grid">
        {shops.map((s, i) => (
          <motion.div
            key={s.en}
            initial={{ opacity: 0, rotateX: -70, y: 40 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.8, ease }}
            style={{ transformPerspective: 900 }}
          >
            <Glass className="shop-card">
              <IconTile icon={s.icon} tone={s.tone} size={60} />
              <h4>{s.t}</h4>
              {lang !== 'en' && <span>{s.en}</span>}
            </Glass>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── 12 PACKAGES ───────────────────────── */
function Packages() {
  const l = useL();
  const plans = [
    {
      name: l('Credit Book', 'ණය පොත', 'கடன் Book'), price: 750, tone: 'orange', icon: BookOpen,
      for: l('Small kadai that mainly needs credit tracking', 'ප්‍රධාන වශයෙන් ණය සටහන් අවශ්‍ය කුඩා කඩ', 'கடன் கணக்கு மட்டும் தேவையான சிறு கடை'),
      f: l(
        ['Quick sale', 'Sales history', 'Credit book + customers', 'WhatsApp reminders', 'Daily summary', 'Cash / credit / partial'],
        ['ඉක්මන් විකුණුම', 'විකුණුම් ඉතිහාසය', 'ණය පොත + පාරිභෝගිකයින්', 'WhatsApp මතක් කිරීම්', 'දෛනික සාරාංශය', 'මුදල් / ණය / කොටස්'],
        ['Quick sale', 'விற்பனை வரலாறு', 'கடன் புத்தகம் + customers', 'WhatsApp நினைவூட்டல்', 'தினசரி சுருக்கம்', 'Cash / கடன் / பகுதி'],
      ),
    },
    {
      name: l('Shop', 'කඩ', 'Shop'), price: 1500, tone: 'blue', icon: Store, popular: true,
      for: l('Retail shops with products & stock', 'භාණ්ඩ සහ තොග සහිත සිල්ලර කඩ', 'பொருட்கள் & stock உள்ள கடைகள்'),
      f: l(
        ['Everything in Credit Book', 'Products & stock', 'Item bills + barcode', 'Receipt printing', 'Discounts & expenses', 'Full reports & profit', 'Excel export'],
        ['ණය පොතේ සියල්ල', 'භාණ්ඩ සහ තොග', 'භාණ්ඩ බිල් + බාර්කෝඩ්', 'රිසිට් මුද්‍රණය', 'වට්ටම් සහ වියදම්', 'සම්පූර්ණ වාර්තා සහ ලාභය', 'Excel අපනයනය'],
        ['கடன் Book-இல் உள்ள எல்லாம்', 'பொருட்கள் & stock', 'Item bill + barcode', 'Receipt print', 'Discount & செலவுகள்', 'முழு reports & இலாபம்', 'Excel export'],
      ),
    },
    {
      name: 'Pro', price: 2500, tone: 'violet', icon: Crown,
      for: l('Restaurants, kitchens & multi-branch shops', 'අවන්හල්, කුස්සි සහ ශාඛා කිහිපයක් ඇති කඩ', 'Hotel, kitchen, பல branch கடைகள்'),
      f: l(
        ['Everything in Shop', 'Kitchen & recipe stock', 'Multiple branches', 'Staff logins & permissions', 'Suppliers & dues', 'Audit log'],
        ['කඩ පැකේජයේ සියල්ල', 'කුස්සිය සහ වට්ටෝරු තොග', 'ශාඛා කිහිපයක්', 'කාර්ය මණ්ඩල ලොගින් සහ අවසර', 'සැපයුම්කරුවන් සහ ණය', 'විගණන ලොගය'],
        ['Shop-இல் உள்ள எல்லாம்', 'Kitchen & recipe stock', 'பல branch-கள்', 'Staff login & அனுமதி', 'Suppliers & நிலுவை', 'Audit log'],
      ),
    },
  ];
  return (
    <div className="slide center">
      <Stagger className="head-center" delay={0.1}>
        <Kicker tone="blue">{l('Packages', 'පැකේජ', 'திட்டங்கள்')}</Kicker>
        <Title
          sub={l(
            'Simple monthly plans. Pay yearly and get 12 months for the price of 10.',
            'සරල මාසික සැලසුම්. වාර්ෂිකව ගෙවුවොත් මාස 10ක මිලට මාස 12ක්.',
            'எளிய மாதாந்திர திட்டங்கள். வருடத்துக்கு கட்டினால் 10 மாத விலையில் 12 மாதம்.',
          )}
        >
          {l(
            <>Less than <span className="grad-text">Rs 85 a day.</span></>,
            <><span className="grad-text">දිනකට රු. 85කට</span> අඩුවෙන්.</>,
            <><span className="grad-text">நாளுக்கு Rs 85-க்கும்</span> குறைவு.</>,
          )}
        </Title>
      </Stagger>
      <div className="plans">
        {plans.map((p, i) => (
          <motion.div
            key={p.price}
            className={`plan tone-${p.tone} ${p.popular ? 'popular' : ''}`}
            initial={{ opacity: 0, y: 80, rotateY: (i - 1) * -25 }}
            animate={{ opacity: 1, y: p.popular ? -18 : 0, rotateY: 0 }}
            transition={{ delay: 0.35 + i * 0.15, duration: 0.9, ease }}
            whileHover={{ y: p.popular ? -30 : -12, scale: 1.02 }}
            style={{ transformPerspective: 1200 }}
          >
            {p.popular && (
              <div className="plan-flag">
                <Star size={14} fill="currentColor" /> {l('Most shops choose this', 'බොහෝ කඩ තෝරන්නේ මෙයයි', 'பெரும்பாலான கடைகளின் தேர்வு')}
              </div>
            )}
            <div className="plan-head">
              <IconTile icon={p.icon} tone={p.tone} size={50} />
              <div>
                <h4>{p.name}</h4>
                <small>{p.for}</small>
              </div>
            </div>
            <div className="plan-price">
              <span>Rs</span>
              <Counter to={p.price} duration={1.2} />
              <em>{l('/ month', '/ මසකට', '/ மாதம்')}</em>
            </div>
            <div className="plan-year">
              {l('Yearly:', 'වාර්ෂික:', 'வருடம்:')} Rs {(p.price * 10).toLocaleString()} <s>Rs {(p.price * 12).toLocaleString()}</s>
            </div>
            <ul>
              {p.f.map((x) => (
                <li key={x}>
                  <Check size={15} strokeWidth={3} /> {x}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── 13 FIRST 100 OFFER ───────────────────────── */
function Offer() {
  const l = useL();
  const steps = [
    { icon: Truck, tone: 'blue', t: l('We come & install', 'අපි පැමිණ ස්ථාපනය කරනවා', 'நாங்களே வந்து install'), d: l('Free installation and setup at the shop — products, prices, printer.', 'කඩයේදීම නොමිලේ ස්ථාපනය සහ සැකසීම — භාණ්ඩ, මිල, මුද්‍රකය.', 'கடையிலேயே இலவச install & setup — பொருட்கள், விலை, printer.') },
    { icon: Gift, tone: 'green', t: l('1 month completely free', 'මාසයක් සම්පූර්ණයෙන්ම නොමිලේ', '1 மாதம் முழுவதும் இலவசம்'), d: l('Full features. No card, no advance, no contract.', 'සියලු විශේෂාංග. කාඩ්පතක්, අත්තිකාරමක්, ගිවිසුමක් නැත.', 'எல்லா features. Card இல்லை, முன்பணம் இல்லை, contract இல்லை.') },
    { icon: Heart, tone: 'pink', t: l('Like it? Then pay.', 'කැමතිද? එවිට ගෙවන්න.', 'பிடித்ததா? அப்போது பணம்.'), d: l('Choose a plan only if it helps the shop. If not — no charge, no pressure.', 'කඩයට උපකාරී නම් පමණක් සැලැස්මක් තෝරන්න. නැත්නම් — ගාස්තුවක් නැත, බලපෑමක් නැත.', 'கடைக்கு உதவினால் மட்டும் plan தேர்வு. இல்லாவிட்டால் — கட்டணம் இல்லை, அழுத்தம் இல்லை.') },
  ];
  return (
    <div className="slide split">
      <div className="col-visual offer-visual">
        <motion.div className="big100" initial={{ opacity: 0, scale: 0.4, rotateX: 60 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }} transition={{ duration: 1.2, delay: 0.2, ease }}>
          <Counter to={100} duration={2} />
          <span className="big100-label">{l('shops', 'කඩ', 'கடைகள்')}</span>
        </motion.div>
        <motion.div className="seats" initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.012, delayChildren: 0.8 } } }}>
          {Array.from({ length: 100 }, (_, i) => (
            <motion.i key={i} variants={{ h: { opacity: 0, scale: 0 }, s: { opacity: 1, scale: 1 } }} />
          ))}
        </motion.div>
        <div className="offer-ribbon">{l('Launch offer · first 100 shops', 'දියත් කිරීමේ දීමනාව · පළමු කඩ 100ට', 'அறிமுக சலுகை · முதல் 100 கடைகளுக்கு')}</div>
      </div>
      <Stagger className="col-copy" delay={0.2}>
        <Kicker tone="green">{l('Launch plan', 'දියත් කිරීමේ සැලැස්ම', 'அறிமுக சலுகை')}</Kicker>
        <Title
          ta={l('Free installation + 1 month free — pay only if you like it', 'නොමිලේ ස්ථාපනය + මාසයක් නොමිලේ — කැමති නම් පමණක් ගෙවන්න', 'இலவச installation + 1 மாதம் இலவசம் — பிடித்தால் மட்டும் பணம்')}
          sub={l(
            'Zero risk for the shop owner. The app has to earn the payment by being useful every day.',
            'කඩ හිමිකරුට කිසිදු අවදානමක් නැත. ඇප් එක දිනපතා ප්‍රයෝජනවත් වී ගෙවීම උපයා ගත යුතුයි.',
            'கடைக்காரருக்கு risk இல்லை. App தினமும் பயனுள்ளதாக இருந்து தான் பணத்தை சம்பாதிக்க வேண்டும்.',
          )}
        >
          {l(
            <>First 100 shops: <span className="grad-green">try it free.</span></>,
            <>පළමු කඩ 100: <span className="grad-green">නොමිලේ උත්සාහ කරන්න.</span></>,
            <>முதல் 100 கடைகள்: <span className="grad-green">இலவசமாக முயற்சி.</span></>,
          )}
        </Title>
        <div className="offer-steps mt-24">
          {steps.map((s, i) => (
            <Rise key={i}>
              <Glass className="offer-step">
                <div className="os-num">{i + 1}</div>
                <IconTile icon={s.icon} tone={s.tone} size={50} />
                <div>
                  <h5>{s.t}</h5>
                  <p>{s.d}</p>
                </div>
              </Glass>
            </Rise>
          ))}
        </div>
      </Stagger>
    </div>
  );
}

/* ───────────────────────── 14 DAILY CARE / MONITORING ───────────────────────── */
function Care() {
  const l = useL();
  const day = l('Day', 'දින', 'நாள்');
  const plan = [
    { d: `${day} 0`, t: l('Install & train', 'ස්ථාපනය සහ පුහුණුව', 'Install & training'), s: l('Setup at the shop, 20-min training for owner & cashier', 'කඩයේදී සැකසීම, හිමිකරුට සහ අයකැමිට විනාඩි 20ක පුහුණුව', 'கடையில் setup, owner & cashier-க்கு 20 நிமிட training') },
    { d: `${day} 1–7`, t: l('Daily usage check', 'දෛනික භාවිත පරීක්ෂාව', 'தினசரி பயன்பாடு check'), s: l('Are sales being recorded today? If not — we call the same day', 'අද විකුණුම් සටහන් වෙනවාද? නැත්නම් — එදිනම අපි අමතනවා', 'இன்று sales பதிவாகிறதா? இல்லையெனில் — அன்றே call') },
    { d: `${day} 8–21`, t: l('Habit building', 'පුරුද්දක් බවට පත් කිරීම', 'பழக்கமாக்குதல்'), s: l('Tips on credit reminders, reports, stock. WhatsApp support', 'ණය මතක් කිරීම්, වාර්තා, තොග ගැන ඉඟි. WhatsApp සහාය', 'கடன் நினைவூட்டல், reports, stock tips. WhatsApp support') },
    { d: `${day} 25`, t: l('Value review', 'වටිනාකම් සමාලෝචනය', 'பயன் மதிப்பாய்வு'), s: l('Show the owner their own numbers: sales, credit collected', 'හිමිකරුට තමන්ගේම ඉලක්කම් පෙන්වීම: විකුණුම්, අය කළ ණය', 'Owner-க்கு அவர்களுடைய numbers: விற்பனை, வசூலான கடன்') },
    { d: `${day} 30`, t: l('Owner decides', 'හිමිකරු තීරණය කරයි', 'Owner முடிவு'), s: l('Choose a plan — or stop, with no charge', 'සැලැස්මක් තෝරන්න — නැත්නම් නවත්වන්න, ගාස්තුවක් නැත', 'Plan தேர்வு — அல்லது நிறுத்தலாம், கட்டணம் இல்லை') },
  ];
  const active = l('Active', 'සක්‍රිය', 'Active');
  const rows = [
    ['Selvi Stores', active, l('38 bills today', 'අද බිල් 38', 'இன்று 38 bills'), 'ok'],
    ['Ravi Bakery', active, l('61 bills today', 'අද බිල් 61', 'இன்று 61 bills'), 'ok'],
    ['Mala Pharmacy', l('Low use', 'අඩු භාවිතය', 'குறைந்த பயன்பாடு'), l('2 bills today', 'අද බිල් 2', 'இன்று 2 bills'), 'warn'],
    ['Kumar Hardware', l('No activity', 'ක්‍රියාකාරකම් නැත', 'செயல்பாடு இல்லை'), l('for 2 days', 'දින 2ක සිට', '2 நாளாக'), 'bad'],
  ];
  return (
    <div className="slide split">
      <Stagger className="col-copy" delay={0.15}>
        <Kicker tone="pink">{l('Customer success', 'පාරිභෝගික සාර්ථකත්වය', 'தினசரி கண்காணிப்பு')}</Kicker>
        <Title ta={l('We check every trial shop, every day', 'සෑම අත්හදා බැලීමේ කඩයක්ම, හැමදාම අපි පරීක්ෂා කරනවා', 'ஒவ்வொரு trial கடையையும் தினமும் பார்ப்போம்')}>
          {l('We don’t install and disappear.', 'අපි ස්ථාපනය කර අතුරුදහන් වෙන්නේ නැහැ.', 'Install பண்ணிவிட்டு போக மாட்டோம்.')}
        </Title>
        <div className="care-list mt-24">
          {plan.map((p, i) => (
            <motion.div key={i} className="care-row" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.15, duration: 0.6, ease }}>
              <span className="care-day">{p.d}</span>
              <div>
                <h5>{p.t}</h5>
                <p>{p.s}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Stagger>
      <div className="col-visual">
        <motion.div
          className="dash"
          initial={{ opacity: 0, rotateY: 30, rotateX: 10, y: 40 }}
          animate={{ opacity: 1, rotateY: -12, rotateX: 6, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
          whileHover={{ rotateY: 0, rotateX: 0 }}
        >
          <div className="dash-top">
            <span className="dots"><i /><i /><i /></span>
            KadaBook Admin · {l('Trial shops today', 'අද අත්හදා කඩ', 'இன்றைய trial கடைகள்')}
            <span className="tag-sample">{l('sample view', 'නියැදි දර්ශනය', 'மாதிரி')}</span>
          </div>
          <div className="dash-kpis">
            <div><small>{l('On trial', 'අත්හදා බලන', 'Trial-இல்')}</small><b><Counter to={100} /></b></div>
            <div><small>{l('Active today', 'අද සක්‍රිය', 'இன்று active')}</small><b className="c-green"><Counter to={82} /></b></div>
            <div><small>{l('Need a call', 'ඇමතිය යුතු', 'Call தேவை')}</small><b className="c-orange"><Counter to={9} /></b></div>
          </div>
          <div className="dash-table">
            {rows.map((r, i) => (
              <motion.div key={r[0]} className="dash-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 + i * 0.15 }}>
                <span className={`st st-${r[3]}`} />
                <b>{r[0]}</b>
                <span>{r[1]}</span>
                <span className="muted">{r[2]}</span>
                {r[3] !== 'ok' && <span className="call"><PhoneCall size={13} /> {l('Call', 'අමතන්න', 'Call')}</span>}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ───────────────────────── 15 REFERRAL ───────────────────────── */
function Referral() {
  const l = useL();
  const shopA = l('Shop A', 'කඩය A', 'கடை A');
  const shopB = l('Shop B', 'කඩය B', 'கடை B');
  return (
    <div className="slide center">
      <Stagger className="head-center" delay={0.1}>
        <Kicker tone="violet">{l('Referral program', 'යොමු කිරීමේ වැඩසටහන', 'பரிந்துரை திட்டம்')}</Kicker>
        <Title
          ta={l('Referrer + new shop = 1 free month each', 'යොමු කරන්නාට + නව කඩයට = එක් එක් අයට මාසයක් නොමිලේ', 'Refer செய்தவர் + புதிய கடை = தலா 1 மாதம் இலவசம்')}
          sub={l(
            'Shop owners trust other shop owners. Every happy shop becomes our salesperson.',
            'කඩ හිමියන් විශ්වාස කරන්නේ වෙනත් කඩ හිමියන්ව. සතුටු සෑම කඩයක්ම අපේ විකුණුම්කරුවෙක් වෙනවා.',
            'கடைக்காரர்கள் மற்ற கடைக்காரர்களை நம்புவார்கள். மகிழ்ச்சியான ஒவ்வொரு கடையும் எங்கள் விற்பனையாளர்.',
          )}
        >
          {l(
            <>Bring a friend. <span className="grad-violet">Both get a month free.</span></>,
            <>මිතුරෙකු රැගෙන එන්න. <span className="grad-violet">දෙදෙනාටම මාසයක් නොමිලේ.</span></>,
            <>நண்பரை சேருங்கள். <span className="grad-violet">இருவருக்கும் 1 மாதம் இலவசம்.</span></>,
          )}
        </Title>
      </Stagger>
      <div className="ref-flow">
        <motion.div className="ref-node" initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8, ease }}>
          <IconTile icon={Store} tone="blue" size={72} />
          <h4>{shopA}</h4>
          <p>{l('shares their code', 'තම කේතය බෙදාගනී', 'தன் code-ஐ share செய்கிறது')}</p>
          <div className="code-chip"><QrCode size={16} /> KB-7Q4M2X</div>
        </motion.div>
        <div className="ref-link">
          <motion.div className="ref-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 0.8 }} />
          <motion.span className="ref-dot" animate={{ left: ['0%', '100%'] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }} />
          <span className="ref-cap">WhatsApp share</span>
        </div>
        <motion.div className="ref-node" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8, ease }}>
          <IconTile icon={Store} tone="green" size={72} />
          <h4>{shopB}</h4>
          <p>{l('joins & pays the first month', 'එක්වී පළමු මාසය ගෙවයි', 'சேர்ந்து முதல் மாதம் பணம் கட்டுகிறது')}</p>
          <div className="code-chip green"><Check size={16} /> {l('Plan activated', 'සැලැස්ම සක්‍රියයි', 'Plan activated')}</div>
        </motion.div>
        <div className="ref-link">
          <motion.div className="ref-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.6, duration: 0.8 }} />
          <motion.span className="ref-dot" animate={{ left: ['0%', '100%'] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }} />
          <span className="ref-cap">{l('reward', 'ත්‍යාගය', 'பரிசு')}</span>
        </div>
        <motion.div className="ref-node reward" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2, type: 'spring', stiffness: 180, damping: 14 }}>
          <IconTile icon={Gift} tone="pink" size={72} />
          <h4>{l('+1 month free', '+ මාසයක් නොමිලේ', '+1 மாதம் இலவசம்')}</h4>
          <p>{l(<>for Shop A <b>and</b> Shop B</>, <>කඩය A <b>සහ</b> කඩය B දෙකටම</>, <>கடை A-க்கும் <b>கடை B-க்கும்</b></>)}</p>
        </motion.div>
      </div>
      <Stagger className="ref-facts" delay={2.3}>
        {[
          l('Every shop gets its own code inside the app (KB-XXXXXX)', 'සෑම කඩයකටම ඇප් එක තුළ තමන්ගේම කේතයක් (KB-XXXXXX)', 'ஒவ்வொரு கடைக்கும் app-இல் சொந்த code (KB-XXXXXX)'),
          l('Reward is given only after the friend pays — no free-rider abuse', 'මිතුරා ගෙවූ පසුව පමණක් ත්‍යාගය — අනිසි භාවිතයක් නැත', 'நண்பர் பணம் கட்டிய பிறகே பரிசு — abuse இல்லை'),
          l('Up to 10 rewards a month per shop — 10 friends = 10 free months', 'කඩයකට මසකට ත්‍යාග 10ක් දක්වා — මිතුරන් 10 = නොමිලේ මාස 10', 'ஒரு கடைக்கு மாதம் 10 பரிசு வரை — 10 நண்பர்கள் = 10 இலவச மாதம்'),
        ].map((x) => (
          <Rise key={x} className="mini">
            <Sparkles size={14} /> {x}
          </Rise>
        ))}
      </Stagger>
    </div>
  );
}

/* ───────────────────────── 16 MARKETING ───────────────────────── */
function Marketing() {
  const l = useL();
  const channels = [
    { icon: Facebook, t: 'Facebook', d: l('Local-area boosted demo videos & shop-owner groups', 'ප්‍රදේශයට ඉලක්ක කළ demo වීඩියෝ සහ කඩ හිමියන්ගේ කණ්ඩායම්', 'பிரதேசத்துக்கு boost செய்த demo videos, கடைக்காரர் groups'), c: '#1877F2' },
    { icon: Instagram, t: 'Instagram', d: l('Reels: “notebook vs KadaBook” before / after', 'Reels: “පොත vs KadaBook” පෙර / පසු', 'Reels: “கொப்பி vs KadaBook” முன் / பின்'), c: '#E1306C' },
    { icon: Music2, t: 'TikTok', d: l('Short, funny Tamil & Sinhala shop-life clips', 'කෙටි, විනෝදජනක සිංහල සහ දෙමළ කඩ ජීවිත clips', 'சிறு, நகைச்சுவை தமிழ் & சிங்கள கடை வாழ்க்கை clips'), c: '#111827' },
    { icon: Youtube, t: 'YouTube', d: l('How-to tutorials — also our support library', 'භාවිත උපදෙස් වීඩියෝ — අපේ සහාය පුස්තකාලයත්', 'How-to videos — எங்கள் support library-யும்'), c: '#FF0000' },
    { icon: MessageCircle, t: 'WhatsApp', d: l('Status videos, referral shares, support line', 'Status වීඩියෝ, යොමු බෙදාගැනීම්, සහාය අංකය', 'Status videos, referral share, support line'), c: '#25D366' },
    { icon: Handshake, t: l('Field visits', 'ක්ෂේත්‍ර සංචාර', 'நேரடி visit'), d: l('Door-to-door demos with a tablet, posters & QR', 'ටැබ්ලට් එකකින් කඩෙන් කඩට demo, පෝස්ටර් සහ QR', 'Tablet-உடன் கடை கடையாக demo, posters & QR'), c: '#2563EB' },
  ];
  const funnel = [
    [l('Video views', 'වීඩියෝ නැරඹීම්', 'Video பார்வைகள்'), 100],
    [l('Enquiries', 'විමසීම්', 'விசாரணைகள்'), 88],
    [l('Free installs', 'නොමිලේ ස්ථාපන', 'இலவச install'), 76],
    [l('Daily users', 'දෛනික භාවිතා කරන්නන්', 'தினசரி பயனர்கள்'), 64],
    [l('Paying shops', 'ගෙවන කඩ', 'பணம் கட்டும் கடைகள்'), 54],
  ];
  return (
    <div className="slide split">
      <Stagger className="col-copy" delay={0.15}>
        <Kicker tone="pink">{l('Marketing plan', 'අලෙවි සැලැස්ම', 'விளம்பரத் திட்டம்')}</Kicker>
        <Title
          ta={l('Facebook · Instagram · TikTok — new videos every week', 'Facebook · Instagram · TikTok — සෑම සතියකම නව වීඩියෝ', 'Facebook · Instagram · TikTok — வாரம் தோறும் videos')}
          sub={l(
            'Short, local-language videos showing a real shop using the app. Weekly rhythm: 3 demo reels, 1 owner testimonial, 1 tip.',
            'සැබෑ කඩයක් ඇප් එක භාවිතා කරන කෙටි, දේශීය භාෂා වීඩියෝ. සතිපතා: demo reels 3ක්, හිමිකරුවෙකුගේ අදහස් 1ක්, ඉඟියක් 1ක්.',
            'உண்மையான கடையில் app பயன்படுத்தும் சிறு, உள்ளூர் மொழி videos. வாரம்: 3 demo reels, 1 கடைக்காரர் testimonial, 1 tip.',
          )}
        >
          {l('Show it, don’t tell it.', 'කියනවා නොව, පෙන්වන්න.', 'சொல்வதை விட, காட்டுவோம்.')}
        </Title>
        <div className="grid-2 channel-grid mt-24">
          {channels.map((c, i) => (
            <Rise key={i}>
              <Glass className="channel">
                <div className="ch-icon" style={{ background: c.c }}>
                  <c.icon size={20} color="#fff" />
                </div>
                <div>
                  <h5>{c.t}</h5>
                  <p>{c.d}</p>
                </div>
              </Glass>
            </Rise>
          ))}
        </div>
      </Stagger>
      <div className="col-visual">
        <div className="funnel">
          <div className="funnel-title"><Megaphone size={18} /> {l('Growth funnel', 'වර්ධන ෆනලය', 'வளர்ச்சி funnel')}</div>
          {funnel.map(([lab, w], i) => (
            <motion.div key={i} className="fn-row" initial={{ opacity: 0, scaleX: 0.2 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.5 + i * 0.18, duration: 0.8, ease }} style={{ width: `${w}%` }}>
              <span>{lab}</span>
            </motion.div>
          ))}
          <motion.div className="fn-loop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
            <Gift size={16} /> {l('Paying shops refer friends → back to the top', 'ගෙවන කඩ මිතුරන් යොමු කරයි → නැවත ඉහළට', 'பணம் கட்டும் கடைகள் நண்பர்களை refer → மீண்டும் மேலே')}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 17 GROWTH CALCULATOR (interactive) ───────────────────────── */
function Growth() {
  const l = useL();
  const [shops, setShops] = useState(100);
  const [conv, setConv] = useState(60);
  const [mix, setMix] = useState(1500);
  const paying = Math.round((shops * conv) / 100);
  const monthly = paying * mix;
  return (
    <div className="slide split">
      <Stagger className="col-copy" delay={0.15}>
        <Kicker tone="indigo">{l('The numbers', 'ඉලක්කම්', 'வருமானம்')}</Kicker>
        <Title
          sub={l(
            'Move the sliders live in the meeting. Recurring monthly revenue grows with every shop that stays.',
            'රැස්වීමේදීම slider චලනය කරන්න. රැඳී සිටින සෑම කඩයක් සමඟම මාසික ආදායම වැඩි වේ.',
            'Meeting-இலேயே slider-ஐ நகர்த்துங்கள். தொடரும் ஒவ்வொரு கடையுடனும் மாத வருமானம் வளரும்.',
          )}
        >
          {l(
            <>Small fee. <span className="grad-text">Recurring every month.</span></>,
            <>කුඩා ගාස්තුවක්. <span className="grad-text">සෑම මසකම නැවත.</span></>,
            <>சிறிய கட்டணம். <span className="grad-text">ஒவ்வொரு மாதமும் வருமானம்.</span></>,
          )}
        </Title>
        <Rise>
          <Glass className="calc" hover={false}>
            <label>
              <span>{l('Shops on free trial', 'නොමිලේ අත්හදා බලන කඩ', 'இலவச trial கடைகள்')} <b>{shops.toLocaleString()}</b></span>
              <input type="range" min={100} max={2000} step={50} value={shops} onChange={(e) => setShops(+e.target.value)} />
            </label>
            <label>
              <span>{l('Trial → paying conversion', 'අත්හදා බැලීම → ගෙවීම', 'Trial → பணம் கட்டுபவர்')} <b>{conv}%</b></span>
              <input type="range" min={20} max={90} step={5} value={conv} onChange={(e) => setConv(+e.target.value)} />
            </label>
            <label>
              <span>{l('Average plan', 'සාමාන්‍ය සැලැස්ම', 'சராசரி plan')} <b>Rs {mix.toLocaleString()}</b></span>
              <input type="range" min={750} max={2500} step={250} value={mix} onChange={(e) => setMix(+e.target.value)} />
            </label>
          </Glass>
        </Rise>
        <Rise className="disclaimer">{l('Illustrative scenario for discussion — not a forecast.', 'සාකච්ඡාව සඳහා උදාහරණයක් — අනාවැකියක් නොවේ.', 'கலந்துரையாடலுக்கான உதாரணம் — forecast அல்ல.')}</Rise>
      </Stagger>
      <div className="col-visual">
        <div className="calc-out">
          <Glass className="out-card" hover={false}>
            <small>{l('Paying shops', 'ගෙවන කඩ', 'பணம் கட்டும் கடைகள்')}</small>
            <motion.b key={paying} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              {paying.toLocaleString()}
            </motion.b>
          </Glass>
          <Glass className="out-card big" hover={false}>
            <small>{l('Monthly recurring revenue', 'මාසික පුනරාවර්තන ආදායම', 'மாதாந்திர தொடர் வருமானம்')}</small>
            <motion.b key={monthly} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              Rs {monthly.toLocaleString()}
            </motion.b>
          </Glass>
          <Glass className="out-card" hover={false}>
            <small>{l('Per year', 'වසරකට', 'வருடத்துக்கு')}</small>
            <motion.b key={monthly * 12} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              Rs {(monthly * 12).toLocaleString()}
            </motion.b>
          </Glass>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 18 ROADMAP ───────────────────────── */
function Roadmap() {
  const l = useL();
  const phases = [
    {
      icon: Rocket, tone: 'blue', m: l('Month 1', 'මාසය 1', 'மாதம் 1'), t: l('Launch', 'දියත් කිරීම', 'அறிமுகம்'),
      list: l(
        ['Install first 100 shops', 'Launch video series on FB / Insta / TikTok', 'Daily usage check for every trial shop'],
        ['පළමු කඩ 100 ස්ථාපනය', 'FB / Insta / TikTok වීඩියෝ මාලාව දියත් කිරීම', 'සෑම අත්හදා කඩයකටම දෛනික පරීක්ෂාව'],
        ['முதல் 100 கடைகளில் install', 'FB / Insta / TikTok video தொடர் ஆரம்பம்', 'ஒவ்வொரு trial கடைக்கும் தினசரி check'],
      ),
    },
    {
      icon: Target, tone: 'green', m: l('Month 2', 'මාසය 2', 'மாதம் 2'), t: l('Convert', 'පරිවර්තනය', 'மாற்றம்'),
      list: l(
        ['Day-30 value reviews', 'Turn trials into paying plans', 'Referral program goes live for paying shops'],
        ['දින 30 සමාලෝචන', 'අත්හදා බැලීම් ගෙවන සැලසුම් බවට', 'ගෙවන කඩ සඳහා යොමු වැඩසටහන ආරම්භ'],
        ['30-வது நாள் review', 'Trial-ஐ paying plan-ஆக மாற்றுதல்', 'பணம் கட்டும் கடைகளுக்கு referral ஆரம்பம்'],
      ),
    },
    {
      icon: TrendingUp, tone: 'violet', m: l('Month 3+', 'මාසය 3+', 'மாதம் 3+'), t: l('Grow', 'වර්ධනය', 'வளர்ச்சி'),
      list: l(
        ['Expand to new towns & districts', 'Grow field team & support', 'Testimonials → stronger ads'],
        ['නව නගර සහ දිස්ත්‍රික්කවලට ව්‍යාප්තිය', 'ක්ෂේත්‍ර කණ්ඩායම සහ සහාය වැඩි කිරීම', 'අදහස් → ශක්තිමත් දැන්වීම්'],
        ['புதிய ஊர்கள், மாவட்டங்கள்', 'Field team & support விரிவாக்கம்', 'Testimonials → வலுவான விளம்பரம்'],
      ),
    },
  ];
  return (
    <div className="slide center">
      <Stagger className="head-center" delay={0.1}>
        <Kicker tone="blue">{l('Next 90 days', 'ඊළඟ දින 90', 'அடுத்த 3 மாதம்')}</Kicker>
        <Title>{l('The plan from here.', 'මෙතැන් සිට සැලැස්ම.', 'இனிமேல் எங்கள் திட்டம்.')}</Title>
      </Stagger>
      <div className="grid-3 road">
        {phases.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 60, rotateX: -30 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.4 + i * 0.25, duration: 0.9, ease }} style={{ transformPerspective: 1000 }}>
            <Glass className="road-card">
              <div className="road-head">
                <IconTile icon={p.icon} tone={p.tone} size={56} />
                <div>
                  <small>{p.m}</small>
                  <h4>{p.t}</h4>
                </div>
              </div>
              <ul>
                {p.list.map((x) => (
                  <li key={x}><CalendarCheck size={15} /> {x}</li>
                ))}
              </ul>
            </Glass>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── 19 THANK YOU ───────────────────────── */
function Thanks() {
  const l = useL();
  return (
    <div className="slide center thanks">
      <Stagger className="head-center" delay={0.2} gap={0.15}>
        <Rise>
          <motion.img
            src="assets/kadabook-logo.png"
            alt="KadaBook"
            className="thanks-logo"
            animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </Rise>
        <Rise as="h1" className="hero-title">
          {l(
            <>Thank you. <span className="grad-text">Questions?</span></>,
            <>ස්තූතියි. <span className="grad-text">ප්‍රශ්න?</span></>,
            <>நன்றி. <span className="grad-text">கேள்விகள்?</span></>,
          )}
        </Rise>
        <Rise className="hero-ta">{l('Let’s grow every shop together', 'අපි එකට හැම කඩයක්ම දියුණු කරමු', 'ஒவ்வொரு கடையையும் ஒன்றாக வளர்ப்போம்')}</Rise>
        <Rise className="chip-row center">
          <span className="chip"><Gift size={16} /> {l('First 100 shops · free install', 'පළමු කඩ 100 · නොමිලේ ස්ථාපනය', 'முதல் 100 கடைகள் · இலவச install')}</span>
          <span className="chip"><CalendarCheck size={16} /> {l('1 month free', 'මාසයක් නොමිලේ', '1 மாதம் இலவசம்')}</span>
          <span className="chip"><Handshake size={16} /> {l('Referral: both get 1 month', 'යොමු කිරීම: දෙදෙනාටම මාසයක්', 'Referral: இருவருக்கும் 1 மாதம்')}</span>
        </Rise>
        <Rise className="foot-note">KadaBook · SMART (PVT) LTD</Rise>
      </Stagger>
    </div>
  );
}

/* ═════════════════════════ SLIDE LIST + PRESENTER NOTES ═════════════════════════
 * nav   — slide name per language (dock, notes, grid)
 * ta    — what to say (Tamil, spoken style) — speaker only
 * points — must-mention points (English, quick glance)
 * time  — suggested time
 */
export const SLIDES = [
  {
    id: 'intro', nav: { en: 'Welcome', si: 'සාදරයෙන් පිළිගනිමු', ta: 'வரவேற்பு' }, C: Hero, time: '1 min',
    ta: 'வணக்கம். இன்று நான் உங்களுக்கு KadaBook பற்றி சொல்லப் போகிறேன். KadaBook என்பது சின்னக் கடைகளுக்கான ஒரு mobile app — விற்பனை, கடன், stock, இலாபம் எல்லாவற்றையும் ஒரே phone-இல் பார்க்கலாம். தமிழ், சிங்களம், English மூன்று மொழியிலும் வேலை செய்யும், internet இல்லாவிட்டாலும் வேலை செய்யும். கடைசியில் எங்கள் launch plan — முதல் 100 கடைகளுக்கு இலவச installation, 1 மாதம் இலவசம் — அதையும் சொல்கிறேன்.',
    points: ['KadaBook = shop accounting app on the phone', 'Tamil · Sinhala · English, works offline', 'Agenda: problem → app → packages → launch & marketing plan'],
  },
  {
    id: 'problem', nav: { en: 'The problem', si: 'ගැටලුව', ta: 'பிரச்சனை' }, C: Problem, time: '1.5 min',
    ta: 'நம்முடைய ஊரில் பெரும்பாலான கடைகள் இன்னும் கடன் கொப்பியிலும் கடைக்காரரின் ஞாபகத்திலும் தான் ஓடுகின்றன. யார் எவ்வளவு கடன் என்று மறந்து போகும், சில பெயர்களே தெரியாது. கையில் இருக்கும் காசு இலாபம் இல்லை — cost price தெரியாமல் உண்மையான இலாபம் தெரியாது. பொருள் முடிந்த பிறகு தான் தெரியும். Customer-க்கு bill இல்லை. இதனால் ஒவ்வொரு மாதமும் கடைக்காரர் அமைதியாக பணத்தை இழக்கிறார்.',
    points: ['Credit forgotten = money lost', 'Cash ≠ profit', 'Stock-outs lose sales', 'No bill = no trust, no record'],
  },
  {
    id: 'solution', nav: { en: 'The solution', si: 'විසඳුම', ta: 'தீர்வு' }, C: Solution, time: '1 min',
    ta: 'இதற்கு எங்கள் தீர்வு KadaBook. கொப்பி, calculator, ஊகம் — இந்த மூன்றையும் ஒரு app மாற்றுகிறது. கடைக்காரர் ஏற்கனவே பயன்படுத்தும் phone-இலேயே. மூன்று tap-இல் ஒரு sale, ஒவ்வொரு கடனும் customer-உடன் இணைக்கப்படும், WhatsApp-இல் நினைவூட்டல், இரவு கடை மூடும்போது முழு report. இது வெறும் billing app இல்லை — முழுக் கடையின் கணக்குப் புத்தகம்.',
    points: ['Replaces notebook + calculator + guesswork', 'Sales, credit, customers, stock, reports, kitchen, staff, printing', 'Show the home screen: today’s sales, credit due'],
  },
  {
    id: 'day', nav: { en: 'How it works', si: 'ක්‍රියාකාරිත්වය', ta: 'எப்படி வேலை செய்யும்' }, C: DayFlow, time: '1.5 min',
    ta: 'ஒரு கடைக்காரரின் ஒரு நாளை எடுத்துப் பாருங்கள். காலை கடை திறக்கும்போது PIN போட்டு app-ஐ திறப்பார், opening cash போடுவார். நாள் முழுக்க விற்பனை — தொகையை type பண்ணி Cash அல்லது கடன் அழுத்தினால் முடிந்தது. கடன் கொடுத்தால் customer-ஐ தேர்வு செய்தால் அவரது கணக்கில் சேரும். வாரத்துக்கு ஒரு முறை ஒரே tap-இல் WhatsApp நினைவூட்டல். இரவு day close — அன்றைய விற்பனை, காசு, கடன், இலாபம் எல்லாம் ஒரு report-ஆக வரும். Training manual தேவையில்லை.',
    points: ['Open → Sell → Credit → Collect → Close', 'Sale in under 5 seconds', 'No training manual needed'],
  },
  {
    id: 'sales', nav: { en: 'Sales & billing', si: 'විකුණුම් සහ බිල්', ta: 'விற்பனை & bill' }, C: Sales, time: '1.5 min',
    ta: 'விற்பனைக்கு இரண்டு வழி. Quick sale — calculator மாதிரி, தொகையை போட்டு save. பிஸியான கடைக்கு இது தான் முக்கியம். Menu sale — பொருட்களை தேர்வு செய்து quantity, discount போட்டு bill. Stock தானாக குறையும். Cash, கடன், பகுதி payment, eZ Cash எல்லாம் support. Bill-ஐ hold பண்ணி பிறகு தொடரலாம். Bluetooth printer-இல் print அல்லது WhatsApp-இல் bill அனுப்பலாம். Barcode scan-உம் phone camera-விலேயே.',
    points: ['Quick sale + item bill', 'Cash / credit / partial / eZ Cash, hold bills', 'Bluetooth print + WhatsApp receipt, barcode scan'],
  },
  {
    id: 'credit', nav: { en: 'Credit book', si: 'ණය පොත', ta: 'கடன் புத்தகம்' }, C: Credit, time: '1.5 min',
    ta: 'இது தான் எங்கள் app-இன் மிக முக்கியமான பகுதி — கடன் புத்தகம். ஒவ்வொரு ரூபாயும் ஒரு customer-உடன் இணைக்கப்படும். யாருக்கு எவ்வளவு, கடைசியாக எப்போது கட்டினார் என்று ஒரு search-இல் தெரியும். ஒரே tap-இல் WhatsApp-இல் மரியாதையான நினைவூட்டல் — சரியான தொகையுடன். பகுதியாக கட்டினாலும் பழைய கடன் முதலில் தீர்க்கப்படும். 30 நாளுக்கு மேல் கட்டாதவர்களை app காட்டும். இதனால் இழந்து போகும் பணம் திரும்ப வரும் — இது தான் கடைக்காரர் பணம் கட்ட முக்கிய காரணம்.',
    points: ['Biggest pain = biggest value', 'One-tap WhatsApp reminders with exact balance', 'Partial payments settle oldest first', 'Overdue alerts → money comes back'],
  },
  {
    id: 'stock', nav: { en: 'Products & stock', si: 'භාණ්ඩ සහ තොග', ta: 'பொருட்கள் & stock' }, C: Stock, time: '1 min',
    ta: 'பொருட்களுக்கு வாங்கும் விலையும் விற்கும் விலையும் போட்டால், ஒவ்வொரு பொருளிலும் ஒவ்வொரு நாளும் உண்மையான இலாபம் தெரியும். Stock குறையும்போது முன்கூட்டியே alert வரும். Barcode scan பண்ணி பொருள் சேர்க்கலாம். நிறைய பொருள் இருந்தால் Excel மூலம் ஒரே தடவையில் load பண்ணலாம், accountant-க்கும் export பண்ணி கொடுக்கலாம்.',
    points: ['Cost + selling price → real profit', 'Low-stock alerts', 'Barcode + Excel import/export'],
  },
  {
    id: 'reports', nav: { en: 'Reports', si: 'වාර්තා', ta: 'அறிக்கைகள்' }, C: Reports, time: '1 min',
    ta: 'கடைக்காரர் கேட்கும் ஒரே கேள்வி — “என் கடை எப்படி போகுது?” அதற்கு பதில் இந்த reports. தினம், வாரம், மாதம் — விற்பனை, இலாபம், காசு எவ்வளவு, கடன் எவ்வளவு, செலவுகள், அதிகம் விற்கும் பொருட்கள். எல்லாம் அவர்களுடைய மொழியில், phone-இலேயே. PDF அல்லது WhatsApp-இல் share பண்ணலாம்.',
    points: ['Daily / weekly / monthly', 'Profit, cash vs credit, expenses, best sellers', 'Share as PDF / WhatsApp'],
  },
  {
    id: 'pro', nav: { en: 'Pro features', si: 'Pro විශේෂාංග', ta: 'Pro அம்சங்கள்' }, C: Pro, time: '1 min',
    ta: 'பெரிய கடைகள், hotel, fast food கடைகளுக்கு Pro features இருக்கு. Kitchen பகுதியில் raw materials, recipe, தயாரிப்பு, wastage எல்லாம் track பண்ணலாம். பல branch இருந்தால் ஒவ்வொரு branch-க்கும் தனி stock, தனி விற்பனை — owner எல்லாவற்றையும் பார்க்கலாம். Staff-க்கு தனி login, cashier தேவையானதை மட்டும் பார்ப்பார். யார் என்ன மாற்றினார் என்று audit log-இல் தெரியும்.',
    points: ['Kitchen & recipe stock', 'Branches + staff logins & permissions', 'Audit log, suppliers'],
  },
  {
    id: 'trust', nav: { en: 'Trust & reliability', si: 'විශ්වාසය', ta: 'நம்பிக்கை' }, C: Trust, time: '1 min',
    ta: 'நம்முடைய ஊரில் signal எப்போதும் இருக்காது — அதனால் app offline-இலும் வேலை செய்யும், internet வந்ததும் cloud-க்கு sync ஆகும். Owner வீட்டில் இருந்தே இன்றைய விற்பனையை பார்க்கலாம். WhatsApp மாதிரி Google Drive backup — தினம், வாரம், மாதம். PIN lock, ஒவ்வொரு கடையின் data-வும் முழுமையாக தனி. மூன்று மொழி, Bluetooth thermal printer support.',
    points: ['Offline-first + cloud sync', 'Google Drive backup & restore', 'PIN lock, data isolation, 3 languages, printer'],
  },
  {
    id: 'audience', nav: { en: 'Who it is for', si: 'කා සඳහාද', ta: 'யாருக்கு' }, C: Audience, time: '45 sec',
    ta: 'யாருக்கு இந்த app? பொருள் விற்று கடன் கொடுக்கும் எந்தக் கடைக்கும். பலசரக்கு கடை, பேக்கரி, தேநீர் கடை, hotel, மருந்தகம், hardware, புடவை கடை, mobile shop, மரக்கறி கடை — எல்லோருக்கும். Sign-up செய்யும்போது கடை வகையை தேர்வு செய்தால் app அதற்கேற்ப மாறும்.',
    points: ['Any shop that sells & gives credit', 'Shop type chosen at sign-up → app adapts', 'Huge market: every street has 5–10 such shops'],
  },
  {
    id: 'packages', nav: { en: 'Packages', si: 'පැකේජ', ta: 'திட்டங்கள்' }, C: Packages, time: '1.5 min',
    ta: 'மூன்று எளிய monthly package. Credit Book — மாதம் 750 ரூபாய், கடன் கணக்கு மட்டும் தேவைப்படும் சின்னக் கடைக்கு. Shop — 1,500 ரூபாய், பொருட்கள், stock, bill print, reports, இலாபம் — பெரும்பாலான கடைகள் இதைத் தான் எடுப்பார்கள். Pro — 2,500 ரூபாய், kitchen, branch, staff எல்லாம். வருடத்துக்கு ஒரே தடவையில் கட்டினால் 10 மாத விலையில் 12 மாதம். அதாவது நாளுக்கு 85 ரூபாய்க்கும் குறைவு — ஒரு தேநீர் விலை.',
    points: ['Credit Book Rs 750 · Shop Rs 1,500 · Pro Rs 2,500 / month', 'Yearly = 10 months price for 12', 'Under Rs 85/day'],
  },
  {
    id: 'offer', nav: { en: 'First 100 offer', si: 'පළමු කඩ 100 දීමනාව', ta: 'முதல் 100 சலுகை' }, C: Offer, time: '1.5 min',
    ta: 'இப்போது எங்கள் launch plan. முதல் 100 கடைகளுக்கு நாங்களே கடைக்கு வந்து இலவசமாக install பண்ணி, பொருட்கள், விலைகள், printer எல்லாம் setup பண்ணிக் கொடுப்போம். ஒரு மாதம் முழுவதும் இலவசம் — எல்லா features-உம். Card இல்லை, முன்பணம் இல்லை, contract இல்லை. ஒரு மாதம் பாவித்துப் பார்த்து, பிடித்திருந்தால் மட்டும் ஒரு plan தேர்வு செய்து பணம் கட்டுவார்கள். பிடிக்காவிட்டால் ஒரு ரூபாயும் இல்லை. கடைக்காரருக்கு risk zero — app தன் பயனால் பணத்தை சம்பாதிக்க வேண்டும்.',
    points: ['Free installation + setup at the shop', '1 month free, all features, no advance', 'Pay only if they like it — zero risk for the owner'],
  },
  {
    id: 'care', nav: { en: 'Daily monitoring', si: 'දෛනික අධීක්ෂණය', ta: 'தினசரி கண்காணிப்பு' }, C: Care, time: '1.5 min',
    ta: 'நாங்கள் install பண்ணிவிட்டு போய்விட மாட்டோம். முதல் நாள் owner-க்கும் cashier-க்கும் 20 நிமிட training. முதல் வாரம் தினமும் admin panel-இல் பார்ப்போம் — இன்று sales பதிவு செய்கிறார்களா என்று. பதிவு இல்லாவிட்டால் அன்றைக்கே call பண்ணுவோம். 2, 3-வது வாரம் tips, WhatsApp support. 25-வது நாள் அவர்களுடைய சொந்த numbers-ஐ காட்டுவோம் — எவ்வளவு விற்றது, எவ்வளவு கடன் வசூலானது. 30-வது நாள் owner முடிவு செய்வார். இந்த daily follow-up தான் trial-ஐ paying customer-ஆக மாற்றும்.',
    points: ['Day 0 install & train', 'Day 1–7 daily usage check → call same day if inactive', 'Day 25 value review with their own numbers', 'Day 30 owner decides'],
  },
  {
    id: 'referral', nav: { en: 'Referral program', si: 'යොමු වැඩසටහන', ta: 'பரிந்துரை திட்டம்' }, C: Referral, time: '1 min',
    ta: 'கடைக்காரர்கள் மற்ற கடைக்காரர்களை நம்புவார்கள். அதனால் referral program. ஒவ்வொரு கடைக்கும் app-இல் சொந்த code இருக்கும் — KB என்று தொடங்கும். அதை WhatsApp-இல் நண்பருக்கு share பண்ணலாம். நண்பர் சேர்ந்து முதல் மாதம் பணம் கட்டியதும், refer பண்ணியவருக்கும் 1 மாதம் இலவசம், சேர்ந்தவருக்கும் 1 மாதம் இலவசம். பணம் கட்டிய பிறகு தான் reward — அதனால் abuse இல்லை. ஒரு கடை மாதத்துக்கு 10 பேர் வரை refer பண்ணலாம்.',
    points: ['Own code KB-XXXXXX in the app', 'Friend pays 1st month → both get +1 month free', 'Reward only after payment; max 10 / month'],
  },
  {
    id: 'marketing', nav: { en: 'Marketing plan', si: 'අලෙවි සැලැස්ම', ta: 'விளம்பரத் திட்டம்' }, C: Marketing, time: '1.5 min',
    ta: 'Marketing-இல் எங்கள் கொள்கை — சொல்வதை விட காட்டுவது. Facebook, Instagram, TikTok-இல் ஒவ்வொரு வாரமும் videos போடுவோம்: 3 demo reels, ஒரு கடைக்காரரின் testimonial, ஒரு tip. “கொப்பி vs KadaBook” before/after videos, தமிழ், சிங்கள shop-life clips. YouTube-இல் how-to videos — அது எங்கள் support library-யும் கூட. WhatsApp status, referral share. அதோடு நேரடியாக கடை கடையாக demo, posters, QR. Funnel: video பார்ப்பவர்கள் → விசாரிப்பவர்கள் → free install → தினமும் பாவிப்பவர்கள் → பணம் கட்டுபவர்கள் → அவர்கள் மீண்டும் refer பண்ணுவார்கள்.',
    points: ['Weekly: 3 demo reels + 1 testimonial + 1 tip', 'FB · Insta · TikTok · YouTube · WhatsApp · field visits', 'Funnel loops back through referrals'],
  },
  {
    id: 'growth', nav: { en: 'The numbers', si: 'ඉලක්කම්', ta: 'வருமானம்' }, C: Growth, time: '1.5 min',
    ta: 'இந்த calculator-ஐ meeting-இலேயே நகர்த்திக் காட்டலாம். உதாரணமாக 100 trial கடைகள், 60% பணம் கட்டினால், சராசரி 1,500 ரூபாய் plan என்றால் — மாதம் 90,000 ரூபாய் recurring வருமானம். ஒவ்வொரு மாதமும் திரும்பத் திரும்ப வரும் வருமானம். கடைகள் அதிகரிக்க அதிகரிக்க இது பெருகும். இது ஒரு உதாரணம் மட்டும் — forecast இல்லை என்று தெளிவாகச் சொல்லுங்கள்.',
    points: ['Move sliders live (e.g. 500 shops, 60%, Rs 1,500)', 'Recurring monthly revenue', 'Say clearly: illustrative, not a forecast'],
  },
  {
    id: 'roadmap', nav: { en: 'Next 90 days', si: 'ඊළඟ දින 90', ta: 'அடுத்த 90 நாள்' }, C: Roadmap, time: '1 min',
    ta: 'அடுத்த 3 மாத plan. முதல் மாதம் — 100 கடைகளில் install, video series launch, தினசரி follow-up. இரண்டாம் மாதம் — 30-வது நாள் review, trial-ஐ paying-ஆக மாற்றுவது, referral program. மூன்றாம் மாதம் முதல் — புதிய ஊர்கள், மாவட்டங்கள், field team-ஐ பெரிதாக்குவது, testimonials மூலம் விளம்பரம்.',
    points: ['M1 launch 100 installs + videos', 'M2 convert + referrals', 'M3+ expand towns, team, ads'],
  },
  {
    id: 'thanks', nav: { en: 'Thank you', si: 'ස්තූතියි', ta: 'நன்றி' }, C: Thanks, time: 'Q&A',
    ta: 'நன்றி. சுருக்கமாக — KadaBook கடைக்காரரின் கடன், விற்பனை, stock, இலாபம் எல்லாவற்றையும் ஒரு phone-இல் கொண்டுவருகிறது. முதல் 100 கடைகளுக்கு இலவச install, 1 மாதம் இலவசம், பிடித்தால் மட்டும் பணம், தினசரி follow-up, referral மூலம் வளர்ச்சி. உங்கள் கேள்விகளை கேளுங்கள்.',
    points: ['Recap in 3 lines', 'Invite questions', 'Offer a live demo on the phone'],
  },
];
