
import React, { useEffect, useMemo, useRef, useState, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, MeshTransmissionMaterial, Sparkles, OrbitControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Bell, Check, CheckCircle2,
  ChevronDown, ChevronLeft, ChevronRight, CircleDollarSign, ClipboardList, CreditCard,
  Crown, Download, FileText, Globe2, LayoutDashboard, Menu, Package, Printer, Receipt,
  ShieldCheck, ShoppingBag, Smartphone, Sparkles as SparkleIcon, Store, Users, Wallet,
  X, Zap, ChefHat, Boxes, TrendingUp, Clock3, Headphones, MonitorSmartphone
} from 'lucide-react';
import './style.css';

const shots = {
  home:'/screenshots/H1-home-ta-v2.png', empty:'/screenshots/H2-home-ta-empty.png',
  sale:'/screenshots/S1-main.png', menu:'/screenshots/S7-menu-sale.png',
  bill:'/screenshots/S8-bill.png', pay:'/screenshots/S9-payment.png',
  print:'/screenshots/S14-print-preview.png', credit:'/screenshots/C1-credit-list.png',
  reminder:'/screenshots/C2-reminder.png', collect:'/screenshots/C3-collect.png',
  customers:'/screenshots/C4-customers.png', sales:'/screenshots/R1-sales-list.png',
  products:'/screenshots/P1-products.png', product:'/screenshots/P2-product-detail.png',
  stock:'/screenshots/P5-restock.png', kitchen:'/screenshots/M10-kitchen.png',
  staff:'/screenshots/M7-staff.png', settings:'/screenshots/M0-settings.png',
  printer:'/screenshots/M13-printers.png', excel:'/screenshots/M11-excel-tools.png',
  trial:'/screenshots/H3-trial-sheet.png', report:'/screenshots/H5-month-detail.png'
};
const slides = [
  {id:'home',nav:'Welcome',eyebrow:'A smarter way to run your shop',title:'Your business.<br/>Beautifully <em>in control.</em>',sub:'Meet KadaBook — the everyday business companion for retail shops, grocery stores, food businesses and growing entrepreneurs.',kind:'hero'},
  {id:'challenge',nav:'The challenge',eyebrow:'The everyday shop-owner challenge',title:'Less time counting.<br/><em>More time growing.</em>',sub:'Scattered notebooks, forgotten expenses, unclear stock and customer dues make it harder to see how your business is really doing.',kind:'problem'},
  {id:'overview',nav:'One app. Whole shop.',eyebrow:'Introducing KadaBook',title:'Everything your shop needs.<br/><em>In one place.</em>',sub:'A mobile business management system that brings sales, products, expenses, customer credit and business records together.',kind:'overview'},
  {id:'sales',nav:'Sales & billing',eyebrow:'01 / Sell with confidence',title:'Every sale, captured.<br/><em>Every time.</em>',sub:'Record quick counter sales or create itemised product bills. Apply discounts, record cash or credit payments and keep a clear sales history.',kind:'feature',shot:shots.sale,alt:shots.menu},
  {id:'stock',nav:'Products & stock',eyebrow:'02 / Know what you have',title:'Your products.<br/><em>Always accounted for.</em>',sub:'Manage product details, buying and selling prices, stock quantities, barcode scanning and low-stock visibility.',kind:'feature',shot:shots.products,alt:shots.product},
  {id:'expenses',nav:'Expenses',eyebrow:'03 / Track the outflow',title:'Small expenses add up.<br/><em>Don’t lose track.</em>',sub:'Record shop rent, electricity, transport, salaries, purchases and other operating expenses with dates and notes.',kind:'expense'},
  {id:'credit',nav:'Credit book',eyebrow:'04 / Customer relationships',title:'Credit made clear.<br/><em>Balances made simple.</em>',sub:'Keep customer-wise dues, payment history and partial collections together. Send payment reminders through WhatsApp.',kind:'feature',shot:shots.credit,alt:shots.reminder},
  {id:'reports',nav:'Reports & insights',eyebrow:'05 / See the bigger picture',title:'Know how your shop<br/><em>is performing.</em>',sub:'Review daily, weekly and monthly sales, expenses, profit summaries and stock reports to make better business decisions.',kind:'feature',shot:shots.home,alt:shots.report},
  {id:'kitchen',nav:'Kitchen operations',eyebrow:'06 / For food businesses',title:'From raw materials<br/><em>to finished products.</em>',sub:'Manage ingredients, recipes, preparation, stock movement, wastage and suppliers for kitchen and food-service workflows.',kind:'feature',shot:shots.kitchen,alt:shots.stock},
  {id:'team',nav:'Staff & branches',eyebrow:'07 / Grow with control',title:'One business.<br/><em>Connected teams.</em>',sub:'Create staff logins, assign roles and permissions, and manage multiple branches with branch-scoped operations.',kind:'feature',shot:shots.staff,alt:shots.settings},
  {id:'workflow',nav:'How it works',eyebrow:'Simple to get started',title:'Set up once.<br/><em>Use it every day.</em>',sub:'We help you install, configure your shop, add products, guide your team and follow up during your first month.',kind:'workflow'},
  {id:'plans',nav:'Packages',eyebrow:'Simple monthly packages',title:'Start with what<br/><em>your shop needs.</em>',sub:'Choose a package based on the features you need. Upgrade as your business grows.',kind:'plans'},
  {id:'offer',nav:'First 100 offer',eyebrow:'Limited launch programme',title:'Your first month<br/><em>is on us.</em>',sub:'The first 100 shops receive free installation and setup with a 30-day trial. Try KadaBook in your real business before deciding.',kind:'offer'},
  {id:'support',nav:'Our commitment',eyebrow:'We stay with you',title:'Not just an app.<br/><em>A team beside you.</em>',sub:'Installation guidance, staff training, daily follow-up, feedback collection and technical support help you get real value from KadaBook.',kind:'support'},
  {id:'close',nav:'Let’s begin',eyebrow:'KadaBook · Your smart business partner',title:'Make every business day<br/><em>count.</em>',sub:'Join the first 100 shops and experience a simpler way to manage your business.',kind:'close'}
];

function Orb(){
  const ref=useRef();
  useFrame((s,dt)=>{if(ref.current){ref.current.rotation.y+=dt*.12;ref.current.rotation.x=Math.sin(s.clock.elapsedTime*.22)*.08;}});
  return <Float speed={1.1} rotationIntensity={.25} floatIntensity={.45}>
    <mesh ref={ref} scale={1.48}>
      <icosahedronGeometry args={[1,5]}/>
      <MeshTransmissionMaterial backside backsideThickness={.22} thickness={.8} roughness={.12} transmission={1} ior={1.22} chromaticAberration={.12} anisotropy={.35} distortion={.16} distortionScale={.25} temporalDistortion={.12} color="#a7c7ff"/>
    </mesh>
  </Float>
}
function ThreeHero(){return <div className="orb-wrap"><Canvas camera={{position:[0,0,4.3],fov:42}} dpr={[1,1.7]}><ambientLight intensity={1.2}/><directionalLight position={[4,5,4]} intensity={3}/><pointLight position={[-4,-2,-3]} intensity={5} color="#4c7cff"/><Suspense fallback={null}><Orb/><Sparkles count={95} scale={5.4} size={2.2} speed={.28} color="#a8c7ff"/><Environment preset="city"/></Suspense><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.32}/></Canvas><div className="orb-ring ring-a"/><div className="orb-ring ring-b"/></div>}
function Phone({src,secondary=false}){return <motion.div className={`phone ${secondary?'phone-secondary':''}`} initial={{opacity:0,y:35,rotate:secondary?8:-7}} whileInView={{opacity:1,y:0,rotate:secondary?7:-5}} transition={{duration:.8,ease:[.2,.8,.2,1]}} viewport={{once:true}}><div className="phone-frame"><div className="phone-notch"/><img src={src} onError={e=>e.currentTarget.style.display='none'}/></div></motion.div>}
function Logo(){return <div className="brand"><img src="/assets/kadabook-logo.png"/><span>KadaBook</span></div>}
function IconCard({icon:Icon,title,desc,accent='blue'}){return <motion.div className={`icon-card ${accent}`} whileHover={{y:-7,scale:1.015}}><div className="icon-box"><Icon size={21}/></div><h3>{title}</h3><p>{desc}</p></motion.div>}
function ProblemSlide(){const items=[['Paper-based records','Sales and expenses scattered across notebooks.'],['Unclear stock','Not always sure what is available or running low.'],['Customer dues','Remembering who owes what becomes difficult.'],['No clear overview','Hard to understand the day’s business performance.']];return <div className="problem-grid">{items.map((x,i)=><motion.div className="problem-card" key={x[0]} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} transition={{delay:i*.09}}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></motion.div>)}</div>}
function Overview(){const items=[[ShoppingBag,'Sales & billing','Quick sale and itemised bills.'],[Package,'Products & stock','Products, prices and stock levels.'],[Wallet,'Expenses','Record daily operating costs.'],[CreditCard,'Credit book','Customer dues and collections.'],[BarChart3,'Reports','Daily and monthly summaries.'],[Users,'People & branches','Staff roles and branch access.']];return <div className="overview-grid">{items.map(([I,t,d],i)=><IconCard key={t} icon={I} title={t} desc={d} accent={['blue','violet','green','orange','indigo','cyan'][i]}/>)}</div>}
function FeaturePoints({id}){const data={
 sales:[['Quick Sale','Enter a running total and save the transaction.'],['Product Bill','Add items, quantities and discounts.'],['Payment options','Record cash, card, credit or partial payment.'],['Receipt','Print or share a customer receipt.']],
 stock:[['Product catalogue','Keep names, categories and prices organised.'],['Stock tracking','See available quantities and stock movements.'],['Barcode scanning','Scan supported product barcodes.'],['Supplier purchases','Record stock purchases and supplier balances.']],
 credit:[['Customer ledger','See each customer’s outstanding balance.'],['Partial collection','Record full or part payments.'],['Payment history','Review customer-wise transactions.'],['WhatsApp reminders','Share payment reminders and receipts.']],
 reports:[['Daily summary','Review the day’s sales and expenses.'],['Period reports','View weekly and monthly totals.'],['Profit view','Review available sales and profit summaries.'],['Share & print','Share selected reports as PDF or print.']],
 kitchen:[['Ingredients','Track raw materials and suppliers.'],['Recipes','Connect raw materials to finished products.'],['Stock actions','Buy, send, make, count and record wastage.'],['Branch stock','Manage kitchen stock by branch.']],
 team:[['Staff logins','Create accounts for team members.'],['Roles & permissions','Control which features each person can access.'],['Multiple branches','Separate branch operations and stock.'],['Audit trail','Review recorded activity.']]
};return <div className="point-list">{(data[id]||[]).map(([t,d],i)=><motion.div className="point" key={t} initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{delay:i*.1}}><span><Check size={16}/></span><div><b>{t}</b><small>{d}</small></div></motion.div>)}</div>}
function Workflow(){const steps=[['01','Discover','Understand your shop and what you need.'],['02','Install','Install KadaBook and set up your shop profile.'],['03','Configure','Add products, prices and opening details.'],['04','Learn','We guide you and your staff through the app.'],['05','Use & review','Use it in daily operations and share feedback.']];return <div className="workflow">{steps.map(([n,t,d],i)=><motion.div className="workflow-step" key={n} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*.1}}><span>{n}</span><div><b>{t}</b><p>{d}</p></div>{i<4&&<div className="step-line"/>}</motion.div>)}</div>}
function Plans(){const plans=[{name:'Credit Book',price:'750',tag:'For counter sales',items:['Quick sale','Credit book & reminders','Customers','Sales list','Daily summary']},{name:'Shop',price:'1,500',tag:'For growing shops',popular:true,items:['Everything in Credit Book','Products & stock','Menu sale','Expenses & profit reports','Barcode & bill settings']},{name:'Pro',price:'2,500',tag:'For expanding teams',items:['Everything in Shop','Kitchen management','Multiple branches','Staff & permissions']}];return <div className="plans-grid">{plans.map((p,i)=><motion.div className={`plan-card ${p.popular?'popular':''}`} key={p.name} whileHover={{y:-8}}><div className="plan-top">{p.popular&&<span className="popular-tag">MOST POPULAR</span>}<h3>{p.name}</h3><p>{p.tag}</p></div><div className="price"><small>LKR</small> {p.price}<small>/ month</small></div><div className="plan-rule"/>{p.items.map(x=><div className="plan-item" key={x}><Check size={15}/>{x}</div>)}</motion.div>)}</div>}
function Offer(){return <div className="offer-layout"><div className="offer-main"><div className="offer-number">100</div><div className="offer-label">FIRST SHOPS</div><h2>Free installation.<br/><em>30 days to experience it.</em></h2><p>Get help setting up your shop and try KadaBook in your everyday business before choosing a paid package.</p></div><div className="offer-side">{[['01','Free app installation'],['02','Initial shop setup assistance'],['03','Product setup guidance'],['04','Staff orientation'],['05','30-day trial period'],['06','No obligation to subscribe']].map(x=><div className="offer-row" key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><CheckCircle2 size={17}/></div>)}</div></div>}
function Support(){const items=[[MonitorSmartphone,'Installation & setup','We help you get started on your device.'],[Users,'Staff guidance','Show your team the daily workflows.'],[Clock3,'Daily follow-up','Our team checks in and helps review adoption during the trial.'],[Headphones,'Technical support','Tell us when something is not working as expected.'],[SparkleIcon,'Feedback & improvement','Your experience helps us improve KadaBook.']];return <div className="support-grid">{items.map(([I,t,d],i)=><IconCard key={t} icon={I} title={t} desc={d} accent={['blue','green','violet','cyan','orange'][i]}/>)}</div>}
function Content({s}) {
 if(s.kind==='hero')return <div className="hero-layout"><div className="hero-copy"><div className="trust-pill"><span/> BUSINESS MANAGEMENT, REIMAGINED</div><h1 dangerouslySetInnerHTML={{__html:s.title}}/><p>{s.sub}</p><div className="hero-actions"><button className="primary-btn" onClick={()=>document.querySelector('[data-slide="overview"]')?.scrollIntoView({behavior:'smooth'})}>Explore KadaBook <ArrowUpRight size={17}/></button><span><ShieldCheck size={16}/> Built for everyday business</span></div><div className="hero-stats"><div><b>01</b><small>One simple app</small></div><div><b>Daily</b><small>Business visibility</small></div><div><b>30</b><small>Days to try free</small></div></div></div><ThreeHero/><div className="hero-float-card"><span className="live-dot"/> Your shop, at a glance <b>Sales · Stock · Credit</b></div></div>;
 if(s.kind==='problem')return <ProblemSlide/>;
 if(s.kind==='overview')return <><Overview/><div className="bottom-note"><SparkleIcon size={17}/> Designed for small shops, retail businesses and food-service operators.</div></>;
 if(s.kind==='feature')return <div className="feature-layout"><div className="feature-copy"><FeaturePoints id={s.id}/></div><div className="screens-showcase"><Phone src={s.shot}/><Phone src={s.alt} secondary/></div></div>;
 if(s.kind==='expense')return <div className="expense-layout"><div className="expense-card"><div className="expense-head"><span>MONTHLY EXPENSES</span><span className="mini-badge">TRACKED</span></div><div className="expense-total">LKR 84,250</div><div className="expense-bars">{[['Shop rent',75],['Stock purchase',58],['Electricity',28],['Transport',18]].map(([t,v])=><div className="bar-row" key={t}><span>{t}</span><div><i style={{width:v+'%'}}/></div></div>)}</div><small className="demo-caption">Illustrative example · not live customer data</small></div><div className="expense-points"><h2>Every rupee<br/><em>has a place.</em></h2><p>Capture day-to-day costs as they happen, then review expenses alongside your sales records.</p>{['Choose an expense category','Enter amount, date and note','Save and review expense history'].map(t=><div className="simple-check"><CheckCircle2 size={18}/>{t}</div>)}</div></div>;
 if(s.kind==='workflow')return <Workflow/>;
 if(s.kind==='plans')return <Plans/>;
 if(s.kind==='offer')return <Offer/>;
 if(s.kind==='support')return <Support/>;
 if(s.kind==='close')return <div className="close-card"><div className="close-glow"/><Logo/><h2>Let’s make your<br/><em>shop run smarter.</em></h2><p>Ask us for a free installation and 30-day trial under the first 100 shops launch offer.</p><div className="close-tags"><span>FREE INSTALLATION</span><span>30-DAY TRIAL</span><span>PERSONAL GUIDANCE</span></div><div className="contact-placeholder">Add your WhatsApp number · email · website here</div></div>;
}
function App(){
 const [active,setActive]=useState(0),[menu,setMenu]=useState(false),[overview,setOverview]=useState(false);
 const go=(i)=>{setActive(i);setMenu(false);document.querySelector(`[data-slide="${slides[i].id}"]`)?.scrollIntoView({behavior:'smooth',block:'start'});};
 useEffect(()=>{const els=document.querySelectorAll('[data-slide]');const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){const i=slides.findIndex(s=>s.id===e.target.dataset.slide);if(i>=0)setActive(i);}}),{threshold:.52});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
 useEffect(()=>{const fn=e=>{if(e.key==='ArrowRight')go(Math.min(active+1,slides.length-1));if(e.key==='ArrowLeft')go(Math.max(active-1,0));if(e.key==='Escape')setMenu(false);};window.addEventListener('keydown',fn);return()=>window.removeEventListener('keydown',fn);},[active]);
 return <div className="app-shell">
  <header className="topbar"><Logo/><div className="top-center"><span className="status-dot"/> INTERACTIVE PRODUCT PRESENTATION</div><div className="top-actions"><span className="slide-count">{String(active+1).padStart(2,'0')} <i>/ {slides.length}</i></span><button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header>
  <aside className={`sidebar ${menu?'show':''}`}><div className="side-label">PRESENTATION</div>{slides.map((s,i)=><button key={s.id} className={active===i?'active':''} onClick={()=>go(i)}><span>{String(i+1).padStart(2,'0')}</span>{s.nav}</button>)}<div className="side-foot">KADABOOK · 2026</div></aside>
  <main className="deck">{slides.map((s,i)=><section className={`slide slide-${s.kind}`} data-slide={s.id} key={s.id}>
    <div className="slide-inner"><div className="section-heading"><span>{s.eyebrow}</span>{s.kind!=='hero'&&<small>{String(i+1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}</small>}</div>{s.kind!=='hero'&&<><h2 className="slide-title" dangerouslySetInnerHTML={{__html:s.title}}/><p className="slide-sub">{s.sub}</p></>}<Content s={s}/></div>
   </section>)}
   <footer className="deck-footer"><Logo/><span>Business, beautifully managed.</span><span>© KadaBook</span></footer>
  </main>
  <div className="presentation-controls"><button onClick={()=>go(Math.max(0,active-1))} disabled={active===0}><ChevronLeft/></button><div className="progress-track"><i style={{width:((active+1)/slides.length*100)+'%'}}/></div><button onClick={()=>go(Math.min(slides.length-1,active+1))} disabled={active===slides.length-1}><ChevronRight/></button></div>
  <div className="keyboard-hint">Use <kbd>←</kbd> <kbd>→</kbd> keys or click the chapter list</div>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
