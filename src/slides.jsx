import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCart, BookOpen, Users, Package, BarChart3, ChefHat, ShieldCheck, WifiOff, Printer, MessageCircle,
  Languages, Lock, HardDrive, Gift, PhoneCall, TrendingUp, Facebook, Instagram, Youtube, Music2, Check,
  Sparkles, Receipt, ScanBarcode, Wallet, NotebookPen, AlertTriangle, HandCoins, Megaphone, Handshake,
  Crown, Building2, UserCog, FileSpreadsheet, Store, Coffee, Pill, Hammer, Shirt, Smartphone, Carrot,
  Sun, Moon, Sunrise, CircleDollarSign, Cloud, Rocket, Target, CalendarCheck, Star, ArrowRight, QrCode,
  UtensilsCrossed, Truck, ClipboardList, Eye, Heart,
} from 'lucide-react';
import { Stagger, Rise, Phone, Counter, Glass, IconTile, Kicker, Title, ease } from './components/ui.jsx';

const shot = (name) => `screenshots/${name}.png`;

/* ───────────────────────── 01 HERO ───────────────────────── */
function Hero() {
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
          The shop&rsquo;s book,
          <br />
          <span className="grad-text">now in your pocket.</span>
        </Rise>
        <Rise className="hero-ta">கடையின் கணக்கு — இனி உங்கள் கையில்</Rise>
        <Rise className="hero-sub">
          Sales, credit (கடன்), stock and profit — one simple mobile app built for every small shop in Sri Lanka.
        </Rise>
        <Rise className="chip-row">
          <span className="chip"><Languages size={16} /> தமிழ் · සිංහල · English</span>
          <span className="chip"><WifiOff size={16} /> Works offline</span>
          <span className="chip"><MessageCircle size={16} /> WhatsApp reminders</span>
          <span className="chip"><Printer size={16} /> Bill printing</span>
        </Rise>
        <Rise className="hero-cta">
          <span className="btn-primary">First 100 shops · Free install + 1 month free <ArrowRight size={18} /></span>
        </Rise>
      </Stagger>
      <motion.div
        className="hero-badge b1"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease }}
      >
        <IconTile icon={TrendingUp} tone="green" size={40} />
        <div>
          <small>Today&rsquo;s sales</small>
          <b>Rs <Counter to={12450} /></b>
        </div>
      </motion.div>
      <motion.div
        className="hero-badge b2"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease }}
      >
        <IconTile icon={HandCoins} tone="orange" size={40} />
        <div>
          <small>Credit to collect</small>
          <b>Rs <Counter to={48300} /></b>
        </div>
      </motion.div>
    </div>
  );
}

/* ───────────────────────── 02 PROBLEM ───────────────────────── */
function Problem() {
  const pains = [
    { icon: HandCoins, tone: 'orange', t: 'Credit gets forgotten', ta: 'யார் எவ்வளவு கடன் — மறந்து போகும்', d: 'Names and amounts scattered across notebook pages. Money is lost quietly every month.' },
    { icon: CircleDollarSign, tone: 'blue', t: 'No idea of real profit', ta: 'இலாபம் எவ்வளவு — தெரியாது', d: 'Cash in the drawer is not profit. Without cost price, the owner is guessing.' },
    { icon: Package, tone: 'violet', t: 'Stock runs out unnoticed', ta: 'பொருள் முடிந்ததும் தெரியாது', d: 'Fast-moving items finish before anyone notices — sales are lost.' },
    { icon: Receipt, tone: 'red', t: 'No bills, no history', ta: 'Bill இல்லை, பதிவு இல்லை', d: 'No receipt for the customer, no record for the owner, no trust between them.' },
  ];
  return (
    <div className="slide split">
      <Stagger className="col-copy" delay={0.15}>
        <Kicker tone="red">The problem · பிரச்சனை</Kicker>
        <Title sub="Most small shops still run on a paper notebook and the owner's memory. It works — until it doesn't.">
          Every evening, <span className="grad-warm">the same notebook headache.</span>
        </Title>
        <div className="grid-2 mt-32">
          {pains.map((p) => (
            <Rise key={p.t}>
              <Glass className="pain">
                <IconTile icon={p.icon} tone={p.tone} size={46} />
                <h4>{p.t}</h4>
                <div className="ta-small">{p.ta}</div>
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
            <NotebookPen size={22} /> கடன் கொப்பி
          </div>
          {[
            ['செல்வி', '1,250'],
            ['Ravi anna', '3,400'],
            ['Kumar', '780'],
            ['?? (blue shirt)', '1,100'],
            ['Mala akka', '2,050'],
            ['Suresh', '???'],
          ].map(([n, a], i) => (
            <motion.div
              key={i}
              className="nb-line"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.15 }}
            >
              <span>{n}</span>
              <span>{a}</span>
              {(i === 1 || i === 3 || i === 5) && (
                <motion.i
                  className="strike"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.8 + i * 0.2, duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
          <motion.div
            className="nb-stamp"
            initial={{ opacity: 0, scale: 2.4, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: -14 }}
            transition={{ delay: 2.9, type: 'spring', stiffness: 220, damping: 14 }}
          >
            <AlertTriangle size={20} /> Lost money
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ───────────────────────── 03 SOLUTION ───────────────────────── */
function Solution() {
  const orbit = [
    { icon: ShoppingCart, tone: 'green', l: 'Sales' },
    { icon: BookOpen, tone: 'orange', l: 'Credit book' },
    { icon: Users, tone: 'blue', l: 'Customers' },
    { icon: Package, tone: 'violet', l: 'Stock' },
    { icon: BarChart3, tone: 'indigo', l: 'Reports' },
    { icon: ChefHat, tone: 'amber', l: 'Kitchen' },
    { icon: UserCog, tone: 'pink', l: 'Staff' },
    { icon: Printer, tone: 'cyan', l: 'Printing' },
  ];
  return (
    <div className="slide split reverse">
      <div className="col-visual orbit-stage">
        <motion.div className="orbit-ring" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}>
          {orbit.map((o, i) => {
            const a = (i / orbit.length) * Math.PI * 2;
            return (
              <motion.div
                key={o.l}
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
        <Kicker>The solution · தீர்வு</Kicker>
        <Title ta="ஒரே app — முழுக் கடையும்" sub="KadaBook replaces the notebook, the calculator and the guesswork with one app the shop owner already knows how to use: their phone.">
          One app. <span className="grad-text">The whole shop.</span>
        </Title>
        <div className="checks mt-24">
          {[
            'Record a sale in 3 taps — faster than writing it',
            'Every credit linked to a customer, with WhatsApp reminders',
            'Live profit, stock and day-close report every night',
            'Tamil, Sinhala & English · works without internet',
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
  const steps = [
    { icon: Sunrise, tone: 'amber', time: '7:00 AM', t: 'Open the shop', d: 'PIN unlock · opening cash balance' },
    { icon: ShoppingCart, tone: 'green', t: 'Sell', time: 'All day', d: 'Quick sale or item bill · print / WhatsApp the bill' },
    { icon: BookOpen, tone: 'orange', t: 'Give credit', time: 'Anytime', d: 'Tap கடன் → pick customer → saved to their account' },
    { icon: MessageCircle, tone: 'cyan', t: 'Collect', time: 'Weekly', d: 'One-tap WhatsApp reminder · partial payments' },
    { icon: Moon, tone: 'indigo', t: 'Close the day', time: '9:00 PM', d: 'Sales, cash, credit & profit report — share or print' },
  ];
  return (
    <div className="slide center">
      <Stagger className="head-center" delay={0.1}>
        <Kicker tone="green">How it works · எப்படி வேலை செய்யும்</Kicker>
        <Title ta="கடை திறப்பது முதல் மூடுவது வரை">A day with KadaBook</Title>
      </Stagger>
      <div className="timeline">
        <motion.div className="timeline-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2.2, delay: 0.5, ease }} />
        {steps.map((s, i) => (
          <motion.div
            key={s.t}
            className="tl-step"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.35, duration: 0.7, ease }}
          >
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
        <Sparkles size={16} /> Average new sale: <b>under 5 seconds</b> · no training manual needed
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
          {bullets.map((b) => (
            <Rise key={b.t}>
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

const Sales = () => (
  <FeatureSlide
    kicker="Feature 1 · விற்பனை"
    tone="green"
    title={<>Sell in <span className="grad-green">3 taps.</span></>}
    ta="Quick sale · Menu bill · Hold · Print"
    phones={['S1-main', 'S7-menu-sale', 'S9-payment']}
    bullets={[
      { icon: Wallet, t: 'Quick sale calculator', d: 'Type the amount, tap Cash or கடன் — done. Perfect for busy kadai counters.' },
      { icon: ClipboardList, t: 'Menu / item bill', d: 'Pick items, quantity & discount. Stock is deducted automatically.' },
      { icon: CircleDollarSign, t: 'Cash · Credit · Partial · eZ Cash', d: 'Split payments and hold bills for later, just like a real POS.' },
      { icon: Printer, t: 'Print or WhatsApp the bill', d: 'Bluetooth thermal printer or a clean digital receipt. Barcode scan supported.' },
    ]}
  />
);

const Credit = () => (
  <FeatureSlide
    kicker="Feature 2 · கடன் புத்தகம்"
    tone="orange"
    title={<>The credit book that <span className="grad-warm">collects for you.</span></>}
    ta="கடன் கொப்பி இனி phone-இல்"
    phones={['C1-credit-list', 'C2-reminder', 'C3-collect']}
    bullets={[
      { icon: Users, t: 'Every rupee linked to a customer', d: 'Balance, history and last payment — one search away.' },
      { icon: MessageCircle, t: 'One-tap WhatsApp reminder', d: 'A polite Tamil/Sinhala/English message with the exact balance.' },
      { icon: HandCoins, t: 'Partial payments', d: 'Collect any amount — the oldest dues are cleared first, automatically.' },
      { icon: AlertTriangle, t: 'Overdue alerts', d: 'See who has not paid for 30+ days before the money is lost.' },
    ]}
    extra={
      <Rise className="stat-strip">
        <div>
          <small>Sample shop · credit tracked</small>
          <b className="c-orange">Rs <Counter to={48300} /></b>
        </div>
        <div>
          <small>Collected this month</small>
          <b className="c-green">Rs <Counter to={31900} /></b>
        </div>
      </Rise>
    }
  />
);

const Stock = () => (
  <FeatureSlide
    kicker="Feature 3 · பொருட்கள் & Stock"
    tone="violet"
    title={<>Know your stock. <span className="grad-violet">Know your profit.</span></>}
    ta="எது முடியப் போகுது — முன்பே தெரியும்"
    phones={['P1-products', 'P2-product-detail', 'P5-restock']}
    bullets={[
      { icon: Package, t: 'Products with cost & selling price', d: 'Real profit per item, per day — not a guess.' },
      { icon: AlertTriangle, t: 'Low-stock alerts', d: 'Get warned before fast-moving items run out.' },
      { icon: ScanBarcode, t: 'Barcode scan', d: 'Scan to add products or to bill — the phone camera is the scanner.' },
      { icon: FileSpreadsheet, t: 'Excel import / export', d: 'Load 500 products in one go, or hand the data to the accountant.' },
    ]}
  />
);

/* ───────────────────────── 07 REPORTS ───────────────────────── */
function Reports() {
  const bars = [42, 58, 51, 70, 64, 88, 96];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <div className="slide split reverse">
      <div className="col-visual phones-fan">
        <Phone src={shot('H5-month-detail')} width={250} rotate={-5} delay={0.2} />
        <Phone src={shot('R1-sales-list')} width={250} rotate={5} delay={0.4} style={{ marginLeft: -50, marginTop: 60 }} />
      </div>
      <Stagger className="col-copy" delay={0.15}>
        <Kicker tone="indigo">Feature 4 · அறிக்கைகள்</Kicker>
        <Title ta="இன்று எவ்வளவு விற்றது? எவ்வளவு இலாபம்?" sub="Daily, weekly and monthly reports the owner actually reads — on the phone, in their own language.">
          &ldquo;How is my shop doing?&rdquo; <span className="grad-text">Answered daily.</span>
        </Title>
        <Rise>
          <Glass className="chart-card" hover={false}>
            <div className="chart-head">
              <div>
                <small>This week · sample</small>
                <b>Rs <Counter to={469000} /></b>
              </div>
              <span className="up-pill"><TrendingUp size={14} /> +18%</span>
            </div>
            <div className="bars">
              {bars.map((h, i) => (
                <div key={i} className="bar-col">
                  <motion.div
                    className="bar"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.9, ease }}
                  />
                  <span>{days[i]}</span>
                </div>
              ))}
            </div>
          </Glass>
        </Rise>
        <div className="mini-grid mt-16">
          {['Profit summary', 'Cash vs credit', 'Day-close report', 'Expenses', 'Best sellers', 'Share as PDF / WhatsApp'].map((x) => (
            <Rise key={x} className="mini">
              <Check size={14} strokeWidth={3} /> {x}
            </Rise>
          ))}
        </div>
      </Stagger>
    </div>
  );
}

const Pro = () => (
  <FeatureSlide
    kicker="Pro features · பெரிய கடைகளுக்கு"
    tone="amber"
    title={<>Ready for <span className="grad-amber">restaurants, kitchens & branches.</span></>}
    ta="Kitchen · Staff · Branch · Supplier"
    phones={['M10-kitchen', 'M7-staff', 'M8-audit-log']}
    bullets={[
      { icon: ChefHat, t: 'Kitchen & recipe stock', d: 'Raw materials → recipes → menu items. Wastage and stock counts tracked.' },
      { icon: Building2, t: 'Multiple branches', d: 'Each branch has its own stock and sales; the owner sees everything.' },
      { icon: UserCog, t: 'Staff logins & permissions', d: 'Cashier sees only what they need. Owner can switch a login off instantly.' },
      { icon: Eye, t: 'Audit log & suppliers', d: 'Who changed what, and when. Supplier dues tracked too.' },
    ]}
  />
);

/* ───────────────────────── 09 TRUST ───────────────────────── */
function Trust() {
  const items = [
    { icon: WifiOff, tone: 'blue', t: 'Works offline', d: 'No signal? Keep selling. Syncs to the cloud when internet returns.' },
    { icon: Cloud, tone: 'cyan', t: 'Cloud sync', d: 'Owner sees today’s sales from home, on another phone, in real time.' },
    { icon: HardDrive, tone: 'green', t: 'Google Drive backup', d: 'WhatsApp-style daily / weekly / monthly backup & restore.' },
    { icon: Lock, tone: 'pink', t: 'PIN lock & privacy', d: 'App PIN, each shop’s data fully separated, account delete option.' },
    { icon: Languages, tone: 'violet', t: '3 languages', d: 'தமிழ் · සිංහල · English — switch any time.' },
    { icon: Printer, tone: 'amber', t: 'Thermal printer', d: 'Bluetooth 58 / 80 mm receipt printers supported.' },
  ];
  return (
    <div className="slide center">
      <Stagger className="head-center" delay={0.1}>
        <Kicker tone="cyan">Trust & reliability · நம்பிக்கை</Kicker>
        <Title ta="கடையின் data — பாதுகாப்பாக">Built for real shops, real conditions.</Title>
      </Stagger>
      <Stagger className="grid-3 trust-grid" delay={0.4} gap={0.1}>
        {items.map((it) => (
          <Rise key={it.t}>
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

/* ───────────────────────── 10 WHO IT'S FOR ───────────────────────── */
function Audience() {
  const shops = [
    { icon: Store, t: 'Grocery / kadai', ta: 'பலசரக்கு கடை', tone: 'green' },
    { icon: Coffee, t: 'Bakery & tea shop', ta: 'பேக்கரி · தேநீர் கடை', tone: 'amber' },
    { icon: UtensilsCrossed, t: 'Fast food & hotel', ta: 'உணவகம்', tone: 'orange' },
    { icon: Pill, t: 'Pharmacy', ta: 'மருந்தகம்', tone: 'cyan' },
    { icon: Hammer, t: 'Hardware', ta: 'Hardware', tone: 'indigo' },
    { icon: Shirt, t: 'Textile & fancy', ta: 'புடவை · fancy', tone: 'pink' },
    { icon: Smartphone, t: 'Mobile & electronics', ta: 'Mobile shop', tone: 'blue' },
    { icon: Carrot, t: 'Vegetable & fish', ta: 'மரக்கறி · மீன்', tone: 'violet' },
  ];
  return (
    <div className="slide center">
      <Stagger className="head-center" delay={0.1}>
        <Kicker tone="green">Who it is for · யாருக்கு</Kicker>
        <Title sub="If a shop sells something and gives credit, KadaBook fits. The owner chooses a shop type at sign-up and the app adapts.">
          Every shop on the street.
        </Title>
      </Stagger>
      <div className="grid-4 shop-grid">
        {shops.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, rotateX: -70, y: 40 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.8, ease }}
            style={{ transformPerspective: 900 }}
          >
            <Glass className="shop-card">
              <IconTile icon={s.icon} tone={s.tone} size={60} />
              <h4>{s.t}</h4>
              <span>{s.ta}</span>
            </Glass>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── 11 PACKAGES ───────────────────────── */
function Packages() {
  const plans = [
    {
      name: 'Credit Book', ta: 'கடன் Book', price: 750, tone: 'orange', icon: BookOpen,
      for: 'Small kadai that mainly needs credit tracking',
      f: ['Quick sale', 'Sales history', 'Credit book + customers', 'WhatsApp reminders', 'Daily summary', 'Cash / credit / partial'],
    },
    {
      name: 'Shop', ta: 'Shop', price: 1500, tone: 'blue', icon: Store, popular: true,
      for: 'Retail shops with products & stock',
      f: ['Everything in Credit Book', 'Products & stock', 'Item bills + barcode', 'Receipt printing', 'Discounts & expenses', 'Full reports & profit', 'Excel export'],
    },
    {
      name: 'Pro', ta: 'Pro', price: 2500, tone: 'violet', icon: Crown,
      for: 'Restaurants, kitchens & multi-branch shops',
      f: ['Everything in Shop', 'Kitchen & recipe stock', 'Multiple branches', 'Staff logins & permissions', 'Suppliers & dues', 'Audit log'],
    },
  ];
  return (
    <div className="slide center">
      <Stagger className="head-center" delay={0.1}>
        <Kicker tone="blue">Packages · திட்டங்கள்</Kicker>
        <Title sub="Simple monthly plans. Pay yearly and get 12 months for the price of 10.">
          Less than <span className="grad-text">Rs 85 a day.</span>
        </Title>
      </Stagger>
      <div className="plans">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            className={`plan tone-${p.tone} ${p.popular ? 'popular' : ''}`}
            initial={{ opacity: 0, y: 80, rotateY: (i - 1) * -25 }}
            animate={{ opacity: 1, y: p.popular ? -18 : 0, rotateY: 0 }}
            transition={{ delay: 0.35 + i * 0.15, duration: 0.9, ease }}
            whileHover={{ y: p.popular ? -30 : -12, scale: 1.02 }}
            style={{ transformPerspective: 1200 }}
          >
            {p.popular && <div className="plan-flag"><Star size={14} fill="currentColor" /> Most shops choose this</div>}
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
              <em>/ month</em>
            </div>
            <div className="plan-year">Yearly: Rs {(p.price * 10).toLocaleString()} <s>Rs {(p.price * 12).toLocaleString()}</s></div>
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

/* ───────────────────────── 12 FIRST 100 OFFER ───────────────────────── */
function Offer() {
  const steps = [
    { icon: Truck, tone: 'blue', t: 'We come & install', d: 'Free installation and setup at the shop — products, prices, printer.' },
    { icon: Gift, tone: 'green', t: '1 month completely free', d: 'Full features. No card, no advance, no contract.' },
    { icon: Heart, tone: 'pink', t: 'Like it? Then pay.', d: 'Choose a plan only if it helps the shop. If not — no charge, no pressure.' },
  ];
  return (
    <div className="slide split">
      <div className="col-visual offer-visual">
        <motion.div
          className="big100"
          initial={{ opacity: 0, scale: 0.4, rotateX: 60 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
        >
          <Counter to={100} duration={2} />
          <span className="big100-label">shops · கடைகள்</span>
        </motion.div>
        <motion.div className="seats" initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.012, delayChildren: 0.8 } } }}>
          {Array.from({ length: 100 }, (_, i) => (
            <motion.i key={i} variants={{ h: { opacity: 0, scale: 0 }, s: { opacity: 1, scale: 1 } }} />
          ))}
        </motion.div>
        <div className="offer-ribbon">Launch offer · முதல் 100 கடைகளுக்கு</div>
      </div>
      <Stagger className="col-copy" delay={0.2}>
        <Kicker tone="green">Launch plan · அறிமுக சலுகை</Kicker>
        <Title ta="இலவச installation + 1 மாதம் இலவசம் — பிடித்தால் மட்டும் பணம்" sub="Zero risk for the shop owner. The app has to earn the payment by being useful every day.">
          First 100 shops: <span className="grad-green">try it free.</span>
        </Title>
        <div className="offer-steps mt-24">
          {steps.map((s, i) => (
            <Rise key={s.t}>
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

/* ───────────────────────── 13 DAILY CARE / MONITORING ───────────────────────── */
function Care() {
  const plan = [
    { d: 'Day 0', t: 'Install & train', s: 'Setup at the shop, 20-min training for owner & cashier' },
    { d: 'Day 1–7', t: 'Daily usage check', s: 'Are sales being recorded today? If not — we call the same day' },
    { d: 'Day 8–21', t: 'Habit building', s: 'Tips on credit reminders, reports, stock. WhatsApp support' },
    { d: 'Day 25', t: 'Value review', s: 'Show the owner their own numbers: sales, credit collected' },
    { d: 'Day 30', t: 'Owner decides', s: 'Choose a plan — or stop, with no charge' },
  ];
  const rows = [
    ['Selvi Stores', 'Active', '38 bills today', 'ok'],
    ['Ravi Bakery', 'Active', '61 bills today', 'ok'],
    ['Mala Pharmacy', 'Low use', '2 bills today', 'warn'],
    ['Kumar Hardware', 'No activity', 'since 2 days', 'bad'],
  ];
  return (
    <div className="slide split">
      <Stagger className="col-copy" delay={0.15}>
        <Kicker tone="pink">Customer success · தினசரி கண்காணிப்பு</Kicker>
        <Title ta="Install பண்ணிவிட்டு போகமாட்டோம் — தினமும் பார்ப்போம்">
          We don&rsquo;t install and disappear.
        </Title>
        <div className="care-list mt-24">
          {plan.map((p, i) => (
            <motion.div
              key={p.d}
              className="care-row"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.6, ease }}
            >
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
            KadaBook Admin · Trial shops today
            <span className="tag-sample">sample view</span>
          </div>
          <div className="dash-kpis">
            <div><small>On trial</small><b><Counter to={100} /></b></div>
            <div><small>Active today</small><b className="c-green"><Counter to={82} /></b></div>
            <div><small>Need a call</small><b className="c-orange"><Counter to={9} /></b></div>
          </div>
          <div className="dash-table">
            {rows.map((r, i) => (
              <motion.div key={r[0]} className="dash-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 + i * 0.15 }}>
                <span className={`st st-${r[3]}`} />
                <b>{r[0]}</b>
                <span>{r[1]}</span>
                <span className="muted">{r[2]}</span>
                {r[3] !== 'ok' && <span className="call"><PhoneCall size={13} /> Call</span>}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ───────────────────────── 14 REFERRAL ───────────────────────── */
function Referral() {
  return (
    <div className="slide center">
      <Stagger className="head-center" delay={0.1}>
        <Kicker tone="violet">Referral program · பரிந்துரை</Kicker>
        <Title ta="நண்பரை சேர்த்தால் — இருவருக்கும் 1 மாதம் இலவசம்" sub="Shop owners trust other shop owners. Every happy shop becomes our salesperson.">
          Bring a friend. <span className="grad-violet">Both get a month free.</span>
        </Title>
      </Stagger>
      <div className="ref-flow">
        <motion.div className="ref-node" initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8, ease }}>
          <IconTile icon={Store} tone="blue" size={72} />
          <h4>Shop A</h4>
          <p>shares their code</p>
          <div className="code-chip"><QrCode size={16} /> KB-7Q4M2X</div>
        </motion.div>
        <div className="ref-link">
          <motion.div className="ref-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 0.8 }} />
          <motion.span className="ref-dot" animate={{ left: ['0%', '100%'] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }} />
          <span className="ref-cap">WhatsApp share</span>
        </div>
        <motion.div className="ref-node" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8, ease }}>
          <IconTile icon={Store} tone="green" size={72} />
          <h4>Shop B</h4>
          <p>joins & pays the first month</p>
          <div className="code-chip green"><Check size={16} /> Plan activated</div>
        </motion.div>
        <div className="ref-link">
          <motion.div className="ref-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.6, duration: 0.8 }} />
          <motion.span className="ref-dot" animate={{ left: ['0%', '100%'] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }} />
          <span className="ref-cap">reward</span>
        </div>
        <motion.div
          className="ref-node reward"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: 'spring', stiffness: 180, damping: 14 }}
        >
          <IconTile icon={Gift} tone="pink" size={72} />
          <h4>+1 month free</h4>
          <p>for Shop A <b>and</b> Shop B</p>
        </motion.div>
      </div>
      <Stagger className="ref-facts" delay={2.3}>
        {[
          'Every shop gets its own code inside the app (KB-XXXXXX)',
          'Reward is given only after the friend pays — no free-rider abuse',
          'Up to 10 rewards a month per shop — 10 friends = 10 free months',
        ].map((x) => (
          <Rise key={x} className="mini">
            <Sparkles size={14} /> {x}
          </Rise>
        ))}
      </Stagger>
    </div>
  );
}

/* ───────────────────────── 15 MARKETING ───────────────────────── */
function Marketing() {
  const channels = [
    { icon: Facebook, t: 'Facebook', d: 'Local-area boosted demo videos & shop-owner groups', c: '#1877F2' },
    { icon: Instagram, t: 'Instagram', d: 'Reels: “notebook vs KadaBook” before / after', c: '#E1306C' },
    { icon: Music2, t: 'TikTok', d: 'Short, funny Tamil & Sinhala shop-life clips', c: '#111827' },
    { icon: Youtube, t: 'YouTube', d: 'How-to tutorials — also our support library', c: '#FF0000' },
    { icon: MessageCircle, t: 'WhatsApp', d: 'Status videos, referral shares, support line', c: '#25D366' },
    { icon: Handshake, t: 'Field visits', d: 'Door-to-door demos with a tablet, posters & QR', c: '#2563EB' },
  ];
  const funnel = [
    ['Video views', 100],
    ['Enquiries', 78],
    ['Free installs', 58],
    ['Daily users', 42],
    ['Paying shops', 30],
  ];
  return (
    <div className="slide split">
      <Stagger className="col-copy" delay={0.15}>
        <Kicker tone="pink">Marketing plan · விளம்பரம்</Kicker>
        <Title ta="Facebook · Instagram · TikTok — வாரம் தோறும் videos" sub="Short, local-language videos showing a real shop using the app. Weekly rhythm: 3 demo reels, 1 owner testimonial, 1 tip.">
          Show it, don&rsquo;t tell it.
        </Title>
        <div className="grid-2 channel-grid mt-24">
          {channels.map((c) => (
            <Rise key={c.t}>
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
          <div className="funnel-title"><Megaphone size={18} /> Growth funnel</div>
          {funnel.map(([l, w], i) => (
            <motion.div
              key={l}
              className="fn-row"
              initial={{ opacity: 0, scaleX: 0.2 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5 + i * 0.18, duration: 0.8, ease }}
              style={{ width: `${w}%` }}
            >
              <span>{l}</span>
            </motion.div>
          ))}
          <motion.div className="fn-loop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
            <Gift size={16} /> Paying shops refer friends → back to the top
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 16 GROWTH CALCULATOR (interactive) ───────────────────────── */
function Growth() {
  const [shops, setShops] = useState(100);
  const [conv, setConv] = useState(60);
  const [mix, setMix] = useState(1500);
  const paying = Math.round((shops * conv) / 100);
  const monthly = paying * mix;
  return (
    <div className="slide split">
      <Stagger className="col-copy" delay={0.15}>
        <Kicker tone="indigo">The numbers · வருமானம்</Kicker>
        <Title sub="Move the sliders live in the meeting. Recurring monthly revenue grows with every shop that stays.">
          Small fee. <span className="grad-text">Recurring every month.</span>
        </Title>
        <Rise>
          <Glass className="calc" hover={false}>
            <label>
              <span>Shops on free trial <b>{shops.toLocaleString()}</b></span>
              <input type="range" min={100} max={2000} step={50} value={shops} onChange={(e) => setShops(+e.target.value)} />
            </label>
            <label>
              <span>Trial → paying conversion <b>{conv}%</b></span>
              <input type="range" min={20} max={90} step={5} value={conv} onChange={(e) => setConv(+e.target.value)} />
            </label>
            <label>
              <span>Average plan <b>Rs {mix.toLocaleString()}</b></span>
              <input type="range" min={750} max={2500} step={250} value={mix} onChange={(e) => setMix(+e.target.value)} />
            </label>
          </Glass>
        </Rise>
        <Rise className="disclaimer">Illustrative scenario for discussion — not a forecast.</Rise>
      </Stagger>
      <div className="col-visual">
        <div className="calc-out">
          <Glass className="out-card" hover={false}>
            <small>Paying shops</small>
            <motion.b key={paying} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              {paying.toLocaleString()}
            </motion.b>
          </Glass>
          <Glass className="out-card big" hover={false}>
            <small>Monthly recurring revenue</small>
            <motion.b key={monthly} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              Rs {monthly.toLocaleString()}
            </motion.b>
          </Glass>
          <Glass className="out-card" hover={false}>
            <small>Per year</small>
            <motion.b key={monthly * 12} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              Rs {(monthly * 12).toLocaleString()}
            </motion.b>
          </Glass>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 17 ROADMAP ───────────────────────── */
function Roadmap() {
  const phases = [
    { icon: Rocket, tone: 'blue', m: 'Month 1', t: 'Launch', list: ['Install first 100 shops', 'Launch video series on FB / Insta / TikTok', 'Daily usage check for every trial shop'] },
    { icon: Target, tone: 'green', m: 'Month 2', t: 'Convert', list: ['Day-30 value reviews', 'Turn trials into paying plans', 'Referral program goes live for paying shops'] },
    { icon: TrendingUp, tone: 'violet', m: 'Month 3+', t: 'Grow', list: ['Expand to new towns & districts', 'Grow field team & support', 'Testimonials → stronger ads'] },
  ];
  return (
    <div className="slide center">
      <Stagger className="head-center" delay={0.1}>
        <Kicker tone="blue">Next 90 days · அடுத்த 3 மாதம்</Kicker>
        <Title>The plan from here.</Title>
      </Stagger>
      <div className="grid-3 road">
        {phases.map((p, i) => (
          <motion.div
            key={p.m}
            initial={{ opacity: 0, y: 60, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.4 + i * 0.25, duration: 0.9, ease }}
            style={{ transformPerspective: 1000 }}
          >
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

/* ───────────────────────── 18 THANK YOU ───────────────────────── */
function Thanks() {
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
          Thank you. <span className="grad-text">Questions?</span>
        </Rise>
        <Rise className="hero-ta">நன்றி — உங்கள் கேள்விகளை கேளுங்கள்</Rise>
        <Rise className="chip-row center">
          <span className="chip"><Gift size={16} /> First 100 shops · free install</span>
          <span className="chip"><CalendarCheck size={16} /> 1 month free</span>
          <span className="chip"><Handshake size={16} /> Referral: both get 1 month</span>
        </Rise>
        <Rise className="foot-note">KadaBook · SMART (PVT) LTD</Rise>
      </Stagger>
    </div>
  );
}

/* ═════════════════════════ SLIDE LIST + PRESENTER NOTES ═════════════════════════
 * notes.ta  — what to say (Tamil, spoken style)
 * notes.points — must-mention points (English, quick glance)
 * notes.time — suggested time
 */
export const SLIDES = [
  {
    id: 'intro', nav: 'Welcome', C: Hero, time: '1 min',
    ta: 'வணக்கம். இன்று நான் உங்களுக்கு KadaBook பற்றி சொல்லப் போகிறேன். KadaBook என்பது சின்னக் கடைகளுக்கான ஒரு mobile app — விற்பனை, கடன், stock, இலாபம் எல்லாவற்றையும் ஒரே phone-இல் பார்க்கலாம். தமிழ், சிங்களம், English மூன்று மொழியிலும் வேலை செய்யும், internet இல்லாவிட்டாலும் வேலை செய்யும். கடைசியில் எங்கள் launch plan — முதல் 100 கடைகளுக்கு இலவச installation, 1 மாதம் இலவசம் — அதையும் சொல்கிறேன்.',
    points: ['KadaBook = shop accounting app on the phone', 'Tamil · Sinhala · English, works offline', 'Agenda: problem → app → packages → launch & marketing plan'],
  },
  {
    id: 'problem', nav: 'The problem', C: Problem, time: '1.5 min',
    ta: 'நம்முடைய ஊரில் பெரும்பாலான கடைகள் இன்னும் கடன் கொப்பியிலும் கடைக்காரரின் ஞாபகத்திலும் தான் ஓடுகின்றன. யார் எவ்வளவு கடன் என்று மறந்து போகும், சில பெயர்களே தெரியாது. கையில் இருக்கும் காசு இலாபம் இல்லை — cost price தெரியாமல் உண்மையான இலாபம் தெரியாது. பொருள் முடிந்த பிறகு தான் தெரியும். Customer-க்கு bill இல்லை. இதனால் ஒவ்வொரு மாதமும் கடைக்காரர் அமைதியாக பணத்தை இழக்கிறார்.',
    points: ['Credit forgotten = money lost', 'Cash ≠ profit', 'Stock-outs lose sales', 'No bill = no trust, no record'],
  },
  {
    id: 'solution', nav: 'The solution', C: Solution, time: '1 min',
    ta: 'இதற்கு எங்கள் தீர்வு KadaBook. கொப்பி, calculator, ஊகம் — இந்த மூன்றையும் ஒரு app மாற்றுகிறது. கடைக்காரர் ஏற்கனவே பயன்படுத்தும் phone-இலேயே. மூன்று tap-இல் ஒரு sale, ஒவ்வொரு கடனும் customer-உடன் இணைக்கப்படும், WhatsApp-இல் நினைவூட்டல், இரவு கடை மூடும்போது முழு report. இது வெறும் billing app இல்லை — முழுக் கடையின் கணக்குப் புத்தகம்.',
    points: ['Replaces notebook + calculator + guesswork', 'Sales, credit, customers, stock, reports, kitchen, staff, printing', 'Show the home screen: today’s sales, credit due'],
  },
  {
    id: 'day', nav: 'How it works', C: DayFlow, time: '1.5 min',
    ta: 'ஒரு கடைக்காரரின் ஒரு நாளை எடுத்துப் பாருங்கள். காலை கடை திறக்கும்போது PIN போட்டு app-ஐ திறப்பார், opening cash போடுவார். நாள் முழுக்க விற்பனை — தொகையை type பண்ணி Cash அல்லது கடன் அழுத்தினால் முடிந்தது. கடன் கொடுத்தால் customer-ஐ தேர்வு செய்தால் அவரது கணக்கில் சேரும். வாரத்துக்கு ஒரு முறை ஒரே tap-இல் WhatsApp நினைவூட்டல். இரவு day close — அன்றைய விற்பனை, காசு, கடன், இலாபம் எல்லாம் ஒரு report-ஆக வரும். Training manual தேவையில்லை.',
    points: ['Open → Sell → Credit → Collect → Close', 'Sale in under 5 seconds', 'No training manual needed'],
  },
  {
    id: 'sales', nav: 'Sales & billing', C: Sales, time: '1.5 min',
    ta: 'விற்பனைக்கு இரண்டு வழி. Quick sale — calculator மாதிரி, தொகையை போட்டு save. பிஸியான கடைக்கு இது தான் முக்கியம். Menu sale — பொருட்களை தேர்வு செய்து quantity, discount போட்டு bill. Stock தானாக குறையும். Cash, கடன், பகுதி payment, eZ Cash எல்லாம் support. Bill-ஐ hold பண்ணி பிறகு தொடரலாம். Bluetooth printer-இல் print அல்லது WhatsApp-இல் bill அனுப்பலாம். Barcode scan-உம் phone camera-விலேயே.',
    points: ['Quick sale + item bill', 'Cash / credit / partial / eZ Cash, hold bills', 'Bluetooth print + WhatsApp receipt, barcode scan'],
  },
  {
    id: 'credit', nav: 'Credit book', C: Credit, time: '1.5 min',
    ta: 'இது தான் எங்கள் app-இன் மிக முக்கியமான பகுதி — கடன் புத்தகம். ஒவ்வொரு ரூபாயும் ஒரு customer-உடன் இணைக்கப்படும். யாருக்கு எவ்வளவு, கடைசியாக எப்போது கட்டினார் என்று ஒரு search-இல் தெரியும். ஒரே tap-இல் WhatsApp-இல் மரியாதையான நினைவூட்டல் — சரியான தொகையுடன். பகுதியாக கட்டினாலும் பழைய கடன் முதலில் தீர்க்கப்படும். 30 நாளுக்கு மேல் கட்டாதவர்களை app காட்டும். இதனால் இழந்து போகும் பணம் திரும்ப வரும் — இது தான் கடைக்காரர் பணம் கட்ட முக்கிய காரணம்.',
    points: ['Biggest pain = biggest value', 'One-tap WhatsApp reminders with exact balance', 'Partial payments settle oldest first', 'Overdue alerts → money comes back'],
  },
  {
    id: 'stock', nav: 'Products & stock', C: Stock, time: '1 min',
    ta: 'பொருட்களுக்கு வாங்கும் விலையும் விற்கும் விலையும் போட்டால், ஒவ்வொரு பொருளிலும் ஒவ்வொரு நாளும் உண்மையான இலாபம் தெரியும். Stock குறையும்போது முன்கூட்டியே alert வரும். Barcode scan பண்ணி பொருள் சேர்க்கலாம். நிறைய பொருள் இருந்தால் Excel மூலம் ஒரே தடவையில் load பண்ணலாம், accountant-க்கும் export பண்ணி கொடுக்கலாம்.',
    points: ['Cost + selling price → real profit', 'Low-stock alerts', 'Barcode + Excel import/export'],
  },
  {
    id: 'reports', nav: 'Reports', C: Reports, time: '1 min',
    ta: 'கடைக்காரர் கேட்கும் ஒரே கேள்வி — “என் கடை எப்படி போகுது?” அதற்கு பதில் இந்த reports. தினம், வாரம், மாதம் — விற்பனை, இலாபம், காசு எவ்வளவு, கடன் எவ்வளவு, செலவுகள், அதிகம் விற்கும் பொருட்கள். எல்லாம் அவர்களுடைய மொழியில், phone-இலேயே. PDF அல்லது WhatsApp-இல் share பண்ணலாம்.',
    points: ['Daily / weekly / monthly', 'Profit, cash vs credit, expenses, best sellers', 'Share as PDF / WhatsApp'],
  },
  {
    id: 'pro', nav: 'Pro features', C: Pro, time: '1 min',
    ta: 'பெரிய கடைகள், hotel, fast food கடைகளுக்கு Pro features இருக்கு. Kitchen பகுதியில் raw materials, recipe, தயாரிப்பு, wastage எல்லாம் track பண்ணலாம். பல branch இருந்தால் ஒவ்வொரு branch-க்கும் தனி stock, தனி விற்பனை — owner எல்லாவற்றையும் பார்க்கலாம். Staff-க்கு தனி login, cashier தேவையானதை மட்டும் பார்ப்பார். யார் என்ன மாற்றினார் என்று audit log-இல் தெரியும்.',
    points: ['Kitchen & recipe stock', 'Branches + staff logins & permissions', 'Audit log, suppliers'],
  },
  {
    id: 'trust', nav: 'Trust & reliability', C: Trust, time: '1 min',
    ta: 'நம்முடைய ஊரில் signal எப்போதும் இருக்காது — அதனால் app offline-இலும் வேலை செய்யும், internet வந்ததும் cloud-க்கு sync ஆகும். Owner வீட்டில் இருந்தே இன்றைய விற்பனையை பார்க்கலாம். WhatsApp மாதிரி Google Drive backup — தினம், வாரம், மாதம். PIN lock, ஒவ்வொரு கடையின் data-வும் முழுமையாக தனி. மூன்று மொழி, Bluetooth thermal printer support.',
    points: ['Offline-first + cloud sync', 'Google Drive backup & restore', 'PIN lock, data isolation, 3 languages, printer'],
  },
  {
    id: 'audience', nav: 'Who it is for', C: Audience, time: '45 sec',
    ta: 'யாருக்கு இந்த app? பொருள் விற்று கடன் கொடுக்கும் எந்தக் கடைக்கும். பலசரக்கு கடை, பேக்கரி, தேநீர் கடை, hotel, மருந்தகம், hardware, புடவை கடை, mobile shop, மரக்கறி கடை — எல்லோருக்கும். Sign-up செய்யும்போது கடை வகையை தேர்வு செய்தால் app அதற்கேற்ப மாறும்.',
    points: ['Any shop that sells & gives credit', 'Shop type chosen at sign-up → app adapts', 'Huge market: every street has 5–10 such shops'],
  },
  {
    id: 'packages', nav: 'Packages', C: Packages, time: '1.5 min',
    ta: 'மூன்று எளிய monthly package. Credit Book — மாதம் 750 ரூபாய், கடன் கணக்கு மட்டும் தேவைப்படும் சின்னக் கடைக்கு. Shop — 1,500 ரூபாய், பொருட்கள், stock, bill print, reports, இலாபம் — பெரும்பாலான கடைகள் இதைத் தான் எடுப்பார்கள். Pro — 2,500 ரூபாய், kitchen, branch, staff எல்லாம். வருடத்துக்கு ஒரே தடவையில் கட்டினால் 10 மாத விலையில் 12 மாதம். அதாவது நாளுக்கு 85 ரூபாய்க்கும் குறைவு — ஒரு தேநீர் விலை.',
    points: ['Credit Book Rs 750 · Shop Rs 1,500 · Pro Rs 2,500 / month', 'Yearly = 10 months price for 12', 'Under Rs 85/day'],
  },
  {
    id: 'offer', nav: 'First 100 offer', C: Offer, time: '1.5 min',
    ta: 'இப்போது எங்கள் launch plan. முதல் 100 கடைகளுக்கு நாங்களே கடைக்கு வந்து இலவசமாக install பண்ணி, பொருட்கள், விலைகள், printer எல்லாம் setup பண்ணிக் கொடுப்போம். ஒரு மாதம் முழுவதும் இலவசம் — எல்லா features-உம். Card இல்லை, முன்பணம் இல்லை, contract இல்லை. ஒரு மாதம் பாவித்துப் பார்த்து, பிடித்திருந்தால் மட்டும் ஒரு plan தேர்வு செய்து பணம் கட்டுவார்கள். பிடிக்காவிட்டால் ஒரு ரூபாயும் இல்லை. கடைக்காரருக்கு risk zero — app தன் பயனால் பணத்தை சம்பாதிக்க வேண்டும்.',
    points: ['Free installation + setup at the shop', '1 month free, all features, no advance', 'Pay only if they like it — zero risk for the owner'],
  },
  {
    id: 'care', nav: 'Daily monitoring', C: Care, time: '1.5 min',
    ta: 'நாங்கள் install பண்ணிவிட்டு போய்விட மாட்டோம். முதல் நாள் owner-க்கும் cashier-க்கும் 20 நிமிட training. முதல் வாரம் தினமும் admin panel-இல் பார்ப்போம் — இன்று sales பதிவு செய்கிறார்களா என்று. பதிவு இல்லாவிட்டால் அன்றைக்கே call பண்ணுவோம். 2, 3-வது வாரம் tips, WhatsApp support. 25-வது நாள் அவர்களுடைய சொந்த numbers-ஐ காட்டுவோம் — எவ்வளவு விற்றது, எவ்வளவு கடன் வசூலானது. 30-வது நாள் owner முடிவு செய்வார். இந்த daily follow-up தான் trial-ஐ paying customer-ஆக மாற்றும்.',
    points: ['Day 0 install & train', 'Day 1–7 daily usage check → call same day if inactive', 'Day 25 value review with their own numbers', 'Day 30 owner decides'],
  },
  {
    id: 'referral', nav: 'Referral program', C: Referral, time: '1 min',
    ta: 'கடைக்காரர்கள் மற்ற கடைக்காரர்களை நம்புவார்கள். அதனால் referral program. ஒவ்வொரு கடைக்கும் app-இல் சொந்த code இருக்கும் — KB என்று தொடங்கும். அதை WhatsApp-இல் நண்பருக்கு share பண்ணலாம். நண்பர் சேர்ந்து முதல் மாதம் பணம் கட்டியதும், refer பண்ணியவருக்கும் 1 மாதம் இலவசம், சேர்ந்தவருக்கும் 1 மாதம் இலவசம். பணம் கட்டிய பிறகு தான் reward — அதனால் abuse இல்லை. ஒரு கடை மாதத்துக்கு 10 பேர் வரை refer பண்ணலாம்.',
    points: ['Own code KB-XXXXXX in the app', 'Friend pays 1st month → both get +1 month free', 'Reward only after payment; max 10 / month'],
  },
  {
    id: 'marketing', nav: 'Marketing plan', C: Marketing, time: '1.5 min',
    ta: 'Marketing-இல் எங்கள் கொள்கை — சொல்வதை விட காட்டுவது. Facebook, Instagram, TikTok-இல் ஒவ்வொரு வாரமும் videos போடுவோம்: 3 demo reels, ஒரு கடைக்காரரின் testimonial, ஒரு tip. “கொப்பி vs KadaBook” before/after videos, தமிழ், சிங்கள shop-life clips. YouTube-இல் how-to videos — அது எங்கள் support library-யும் கூட. WhatsApp status, referral share. அதோடு நேரடியாக கடை கடையாக demo, posters, QR. Funnel: video பார்ப்பவர்கள் → விசாரிப்பவர்கள் → free install → தினமும் பாவிப்பவர்கள் → பணம் கட்டுபவர்கள் → அவர்கள் மீண்டும் refer பண்ணுவார்கள்.',
    points: ['Weekly: 3 demo reels + 1 testimonial + 1 tip', 'FB · Insta · TikTok · YouTube · WhatsApp · field visits', 'Funnel loops back through referrals'],
  },
  {
    id: 'growth', nav: 'The numbers', C: Growth, time: '1.5 min',
    ta: 'இந்த calculator-ஐ meeting-இலேயே நகர்த்திக் காட்டலாம். உதாரணமாக 100 trial கடைகள், 60% பணம் கட்டினால், சராசரி 1,500 ரூபாய் plan என்றால் — மாதம் 90,000 ரூபாய் recurring வருமானம். ஒவ்வொரு மாதமும் திரும்பத் திரும்ப வரும் வருமானம். கடைகள் அதிகரிக்க அதிகரிக்க இது பெருகும். இது ஒரு உதாரணம் மட்டும் — forecast இல்லை என்று தெளிவாகச் சொல்லுங்கள்.',
    points: ['Move sliders live (e.g. 500 shops, 60%, Rs 1,500)', 'Recurring monthly revenue', 'Say clearly: illustrative, not a forecast'],
  },
  {
    id: 'roadmap', nav: 'Next 90 days', C: Roadmap, time: '1 min',
    ta: 'அடுத்த 3 மாத plan. முதல் மாதம் — 100 கடைகளில் install, video series launch, தினசரி follow-up. இரண்டாம் மாதம் — 30-வது நாள் review, trial-ஐ paying-ஆக மாற்றுவது, referral program. மூன்றாம் மாதம் முதல் — புதிய ஊர்கள், மாவட்டங்கள், field team-ஐ பெரிதாக்குவது, testimonials மூலம் விளம்பரம்.',
    points: ['M1 launch 100 installs + videos', 'M2 convert + referrals', 'M3+ expand towns, team, ads'],
  },
  {
    id: 'thanks', nav: 'Thank you', C: Thanks, time: 'Q&A',
    ta: 'நன்றி. சுருக்கமாக — KadaBook கடைக்காரரின் கடன், விற்பனை, stock, இலாபம் எல்லாவற்றையும் ஒரு phone-இல் கொண்டுவருகிறது. முதல் 100 கடைகளுக்கு இலவச install, 1 மாதம் இலவசம், பிடித்தால் மட்டும் பணம், தினசரி follow-up, referral மூலம் வளர்ச்சி. உங்கள் கேள்விகளை கேளுங்கள்.',
    points: ['Recap in 3 lines', 'Invite questions', 'Offer a live demo on the phone'],
  },
];
