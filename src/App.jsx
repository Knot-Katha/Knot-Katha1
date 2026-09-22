import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Music,
  Camera,
  Clock,
  MessageCircle,
  Sparkles,
  Calendar,
  X,
  Menu,
  ArrowRight,
  Play,
  ChevronDown
} from "lucide-react";
import floralVideo from './assets/invitations/floral-wedding.mp4'
import royalVideo from './assets/invitations/royal-traditional.mp4'
import modernVideo from './assets/invitations/modern-wedding.mp4'
import engagementRedVideo from './assets/invitations/engagement-red.mp4'
import babyCreamVideo from './assets/invitations/baby-cream.mp4'
import babyPlayfulVideo from './assets/invitations/baby-playful.mp4'
import birthdayUnicornVideo from './assets/invitations/birthday-unicorn.mp4'
import engagementPinkVideo from './assets/invitations/engagement-pink.mp4'
import engagementFloralVideo from './assets/invitations/engagement-floral.mp4'
import floralPoster from './assets/invitations/floral-wedding.jpg'
import royalPoster from './assets/invitations/royal-traditional.jpg'
import modernPoster from './assets/invitations/modern-wedding.jpg'
import engagementRedPoster from './assets/invitations/engagement-red.jpg'
import babyCreamPoster from './assets/invitations/baby-cream.jpg'
import babyPlayfulPoster from './assets/invitations/baby-playful.jpg'
import birthdayUnicornPoster from './assets/invitations/birthday-unicorn.jpg'
import engagementPinkPoster from './assets/invitations/engagement-pink.jpg'
import engagementFloralPoster from './assets/invitations/engagement-floral.jpg'
import traditionalWedding1Video from './assets/invitations/traditional-wedding-1.mp4'
import safariBirthday1Video from './assets/invitations/safari-birthday-1.mp4'
import safariBirthday2Video from './assets/invitations/safari-birthday-2.mp4'
import traditionalEngagement1Video from './assets/invitations/traditional-engagement-1.mp4'
import punjabiWedding1Video from './assets/invitations/punjabi-wedding-1.mp4'
import watercolorBabyShower1Video from './assets/invitations/watercolor-baby-shower-1.mp4'
import traditionalWedding1Poster from './assets/invitations/traditional-wedding-1.jpg'
import safariBirthday1Poster from './assets/invitations/safari-birthday-1.jpg'
import safariBirthday2Poster from './assets/invitations/safari-birthday-2.jpg'
import traditionalEngagement1Poster from './assets/invitations/traditional-engagement-1.jpg'
import punjabiWedding1Poster from './assets/invitations/punjabi-wedding-1.jpg'
import watercolorBabyShower1Poster from './assets/invitations/watercolor-baby-shower-1.jpg'

const invitations = [
  { id:'01', title:'Floral Romance', occasion:'Wedding', package:'Classic', meta:'Classic · Wedding', video:floralVideo, poster:floralPoster, tag:'Warm & nostalgic' },
  { id:'02', title:'Royal Traditions', occasion:'Wedding', package:'Royal', meta:'Royal · Wedding', video:royalVideo, poster:royalPoster, tag:'Regal & ornate' },
  { id:'03', title:'Modern Celebration', occasion:'Wedding', package:'Premium', meta:'Premium · Wedding', video:modernVideo, poster:modernPoster, tag:'Bold & contemporary' },
  { id:'04', title:'Scarlet Promise', occasion:'Engagement', package:'Premium', meta:'Premium · Engagement', video:engagementRedVideo, poster:engagementRedPoster, tag:'Illustrated & bold' },
  { id:'05', title:'Little Bloom', occasion:'Baby Shower', package:'Classic', meta:'Classic · Baby Shower', video:babyCreamVideo, poster:babyCreamPoster, tag:'Soft & playful' },
  { id:'06', title:'Tiny Moments', occasion:'Baby Shower', package:'Classic', meta:'Classic · Baby Shower', video:babyPlayfulVideo, poster:babyPlayfulPoster, tag:'Cute & cheerful' },
  { id:'07', title:'Unicorn Wishes', occasion:'Birthday', package:'Classic', meta:'Classic · Birthday', video:birthdayUnicornVideo, poster:birthdayUnicornPoster, tag:'Fun & colourful' },
  { id:'08', title:'Garden Engagement', occasion:'Engagement', package:'Royal', meta:'Royal · Engagement', video:engagementPinkVideo, poster:engagementPinkPoster, tag:'Elegant & ornate' },
  { id:'09', title:'Floral Promise', occasion:'Engagement', package:'Premium', meta:'Premium · Engagement', video:engagementFloralVideo, poster:engagementFloralPoster, tag:'Romantic & floral' },
  { id:'10', title:'Aisha & Daniel', occasion:'Wedding', package:'Royal', meta:'Royal · Wedding', video:traditionalWedding1Video, poster:traditionalWedding1Poster, tag:'Traditional & elegant' },
  { id:'11', title:'Aaron Safari', occasion:'Birthday', package:'Classic', meta:'Classic · Birthday', video:safariBirthday1Video, poster:safariBirthday1Poster, tag:'Playful & adventurous' },
  { id:'12', title:'Little Safari', occasion:'Birthday', package:'Classic', meta:'Classic · Birthday', video:safariBirthday2Video, poster:safariBirthday2Poster, tag:'Cute & woodland' },
  { id:'13', title:'Neha & Rahil', occasion:'Engagement', package:'Premium', meta:'Premium · Engagement', video:traditionalEngagement1Video, poster:traditionalEngagement1Poster, tag:'Floral & traditional' },
  { id:'14', title:'Punjabi Celebration', occasion:'Wedding', package:'Royal', meta:'Royal · Wedding', video:punjabiWedding1Video, poster:punjabiWedding1Poster, tag:'Vibrant & festive' },
  { id:'15', title:'Pink Baby Shower', occasion:'Baby Shower', package:'Classic', meta:'Classic · Baby Shower', video:watercolorBabyShower1Video, poster:watercolorBabyShower1Poster, tag:'Soft & joyful' },
]

const features = [
  ['Music', 'Set the mood with a personal soundtrack.', Music],
  ['Photo story', 'Turn your memories into a beautiful gallery.', Sparkles],
  ['Animation', 'Bring every moment to life with elegant motion and transitions.', Sparkles],
  ['Event details', 'Show every function, time and venue clearly.', Calendar],
  ['Maps & RSVP', 'Help guests find you and respond in seconds.', MapPin],
]

function Nav(){
  const [open,setOpen]=useState(false)
  return <header className="fixed top-0 z-50 w-full px-4 py-4 md:px-8">
    <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#8f672f]/15 bg-[#fffaf3]/85 px-5 py-3 shadow-[0_10px_40px_rgba(53,16,21,.08)] backdrop-blur-xl">
      <a href="#home" className="serif text-xl tracking-wide text-[#4b171d]">Knot <span className="text-[#a57a34]">& Katha</span></a>
      <div className="hidden items-center gap-7 text-sm font-medium text-[#5f4541] md:flex">
        <a href="#invitations" className="hover:text-[#8d222d]">Invitations</a><a href="#categories" className="hover:text-[#8d222d]">Categories</a><a href="#features" className="hover:text-[#8d222d]">Features</a><a href="#packages" className="hover:text-[#8d222d]">Packages</a><a href="#process" className="hover:text-[#8d222d]">How it works</a>
      </div>
      <a href="#contact" className="hidden rounded-full bg-[#57151d] px-5 py-2.5 text-sm font-semibold text-white md:block">Create yours</a>
      <button onClick={()=>setOpen(!open)} className="md:hidden" aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
    </nav>
    {open && <div className="mx-2 mt-2 rounded-3xl bg-[#fffaf3] p-5 shadow-xl md:hidden"><div className="flex flex-col gap-4 text-[#5f4541]"><a href="#invitations" onClick={()=>setOpen(false)}>Invitations</a><a href="#categories" onClick={()=>setOpen(false)}>Categories</a><a href="#features" onClick={()=>setOpen(false)}>Features</a><a href="#packages" onClick={()=>setOpen(false)}>Packages</a><a href="#process" onClick={()=>setOpen(false)}>How it works</a><a href="#contact" onClick={()=>setOpen(false)} className="rounded-full bg-[#57151d] px-5 py-3 text-center font-semibold text-white">Create yours</a></div></div>}
  </header>
}

function Hero(){
  return <section id="home" className="noise relative min-h-[760px] overflow-hidden bg-[#f8f1e8] px-5 pb-20 pt-36 md:px-10 md:pt-44">
    <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#d9b66d]/20 blur-3xl"/><div className="absolute -right-24 top-48 h-96 w-96 rounded-full bg-[#6d1b26]/10 blur-3xl"/>
    <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_.85fr]">
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
        <div className="mb-5"><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.25em] text-[#a57a34]"><Sparkles size={15}/> Digital invitations by Knot & Katha</div><p className="mt-2 text-sm italic text-[#7d6964]">Stories worth inviting people to.</p></div>
        <h1 className="serif max-w-3xl text-6xl leading-[.94] tracking-[-.035em] text-[#4b171d] sm:text-7xl md:text-8xl">Your celebration.<br/><span className="gold-text italic">Your story.</span><br/>Your invitation.</h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-[#6d5955] md:text-lg">Interactive digital invitations designed for weddings, engagements, birthdays and every celebration worth remembering.</p>
        <div className="mt-9 flex flex-wrap gap-3"><a href="#invitations" className="group rounded-full bg-[#57151d] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#57151d]/15">Explore invitations <ArrowRight className="ml-2 inline transition group-hover:translate-x-1" size={17}/></a><a href="#contact" className="rounded-full border border-[#8f672f]/25 bg-white/40 px-6 py-3.5 text-sm font-semibold text-[#57151d]">Create yours</a></div>
        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-[#7d6964]"><span>Weddings</span><span>•</span><span>Engagements</span><span>•</span><span>Baby showers</span><span>•</span><span>Birthdays</span></div>
      </motion.div>
      <HeroPhone/>
    </div>
  </section>
}

function HeroPhone(){
  return <motion.div initial={{opacity:0,scale:.92,y:25}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.9,delay:.15}} className="relative mx-auto w-full max-w-[470px]">
    <div className="absolute -left-8 top-14 hidden rounded-2xl border border-[#8f672f]/15 bg-[#fffaf3]/85 px-4 py-3 shadow-xl backdrop-blur md:block float"><div className="text-[10px] uppercase tracking-[.2em] text-[#9b702c]">Made to share</div><div className="mt-1 text-sm font-semibold text-[#57151d]">Beautiful on every phone</div></div>
    <div className="mx-auto w-[260px] rotate-2 rounded-[38px] border-[7px] border-[#2f1818] bg-[#2f1818] p-1 shadow-[0_35px_90px_rgba(53,16,21,.25)] sm:w-[300px]"><div className="relative overflow-hidden rounded-[29px] bg-black"><video className="aspect-[9/18.5] w-full object-cover" src={royalVideo} poster={royalPoster} autoPlay muted loop playsInline/><a href="#invitations" className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur transition hover:bg-black/75"><Play size={11} fill="currentColor"/> Preview invitation</a></div></div>
    <div className="absolute -bottom-2 -right-2 rounded-2xl border border-[#8f672f]/15 bg-[#fffaf3]/90 px-4 py-3 shadow-xl backdrop-blur sm:right-0"><div className="text-[10px] uppercase tracking-[.2em] text-[#9b702c]">Interactive</div><div className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#57151d]"><Music size={14}/> Music · RSVP · Maps</div></div>
  </motion.div>
}

function InvitationCard({item,index,onOpen}){
  return <motion.article initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:index*.08}} whileHover={{y:-7}} className="group overflow-hidden rounded-[30px] border border-[#8f672f]/15 bg-[#fffaf3] card-shadow">
    <div className="relative aspect-[4/5] overflow-hidden bg-[#2b1215]"><video src={item.video} poster={item.poster} autoPlay muted loop playsInline className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"/><div className="absolute inset-0 bg-gradient-to-t from-[#1e0b0d]/70 via-transparent to-transparent"/><span className="absolute left-4 top-4 rounded-full bg-[#fffaf3]/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.15em] text-[#57151d] backdrop-blur">{item.id}</span><button onClick={()=>onOpen(item)} className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#fffaf3] px-4 py-2.5 text-xs font-bold text-[#57151d] shadow-lg">View invitation <ArrowRight size={14}/></button></div>
    <div className="p-5"><div className="flex flex-wrap gap-2"><span className="rounded-full bg-[#57151d]/8 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.15em] text-[#57151d]">{item.package}</span><span className="rounded-full bg-[#a57a34]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.15em] text-[#9b702c]">{item.occasion}</span></div><h3 className="serif mt-3 text-2xl text-[#4b171d]">{item.title}</h3><p className="mt-1 text-sm text-[#796662]">{item.tag}</p></div>
  </motion.article>
}

function Showcase(){
  const [active,setActive]=useState(null)
  const [packageFilter,setPackageFilter]=useState('All')
  const [occasionFilter,setOccasionFilter]=useState('All')

  const packageFilters=['All','Classic','Premium','Royal']
  const occasionFilters=['All','Wedding','Engagement','Baby Shower','Birthday']

  const filtered = invitations.filter(item =>
    (packageFilter === 'All' || item.package === packageFilter) &&
    (occasionFilter === 'All' || item.occasion === occasionFilter)
  )

  return <section id="invitations" className="bg-[#fffaf3] px-5 py-24 md:px-10 md:py-32">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.25em] text-[#a57a34]">Explore invitations</p>
          <h2 className="serif mt-3 text-5xl tracking-tight text-[#4b171d] md:text-6xl">Find your <span className="italic">style.</span></h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-[#796662]">Browse real invitation previews by package and celebration. See the design before you choose.</p>
      </div>

      <div className="mt-10 rounded-[28px] border border-[#8f672f]/15 bg-[#f8f1e8] p-4 md:p-5">
        <div className="flex flex-col gap-4">
          <div>
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#9b702c]">Package</div>
            <div className="flex flex-wrap gap-2">
              {packageFilters.map(filter =>
                <button key={filter} type="button" onClick={()=>setPackageFilter(filter)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${packageFilter===filter ? 'bg-[#57151d] text-white' : 'border border-[#8f672f]/15 bg-[#fffaf3] text-[#5f4541] hover:bg-white'}`}>
                  {filter}
                </button>
              )}
            </div>
          </div>
          <div>
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#9b702c]">Celebration</div>
            <div className="flex flex-wrap gap-2">
              {occasionFilters.map(filter =>
                <button key={filter} type="button" onClick={()=>setOccasionFilter(filter)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${occasionFilter===filter ? 'bg-[#a57a34] text-[#fffaf3]' : 'border border-[#8f672f]/15 bg-[#fffaf3] text-[#5f4541] hover:bg-white'}`}>
                  {filter}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((item,i)=>
          <InvitationCard key={item.id} item={item} index={i} onOpen={setActive}/>
        )}
      </div>

      {filtered.length === 0 && <div className="mt-8 rounded-[28px] border border-[#8f672f]/15 bg-[#f8f1e8] p-10 text-center text-sm text-[#796662]">No invitation matches those filters yet.</div>}
    </div>
    {active&&<PreviewModal item={active} onClose={()=>setActive(null)}/>}
  </section>
}

function PreviewModal({item,onClose}){return <div className="fixed inset-0 z-[100] grid place-items-center bg-[#1e0b0d]/75 p-4 backdrop-blur-sm" onClick={onClose}><div className="relative w-full max-w-4xl overflow-hidden rounded-[30px] bg-[#fffaf3] shadow-2xl" onClick={e=>e.stopPropagation()}><button onClick={onClose} className="absolute right-4 top-4 z-10 rounded-full bg-[#fffaf3]/90 p-2 text-[#57151d] shadow"><X size={20}/></button><div className="grid md:grid-cols-[.7fr_1fr]"><div className="bg-[#1f0c0f] p-5 md:p-8"><video src={item.video} poster={item.poster} controls autoPlay muted playsInline controlsList="nodownload" className="mx-auto max-h-[72vh] w-full max-w-[320px] rounded-[20px] object-contain"/></div><div className="flex flex-col justify-center p-7 md:p-12"><div className="text-xs font-bold uppercase tracking-[.2em] text-[#a57a34]">{item.package} · {item.occasion}</div><h3 className="serif mt-3 text-5xl text-[#4b171d]">{item.title}</h3><p className="mt-5 leading-7 text-[#796662]">A polished digital invitation that can include your story, functions, photos, music, venue map, countdown and RSVP.</p><a href="#contact" onClick={onClose} className="mt-7 inline-flex w-fit rounded-full bg-[#57151d] px-6 py-3 text-sm font-semibold text-white">Make one like this <ArrowRight className="ml-2" size={17}/></a></div></div></div></div>}

function Categories(){
  const cats = [
    {
      title: 'Weddings',
      desc: 'Timeless, romantic and completely yours.',
      video: royalVideo,
      poster: royalPoster,
      tone: 'Royal'
    },
    {
      title: 'Engagements',
      desc: 'A beautiful beginning deserves a beautiful invite.',
      video: engagementPinkVideo,
      poster: engagementPinkPoster,
      tone: 'Elegant'
    },
    {
      title: 'Birthdays',
      desc: 'Fun, expressive and made for sharing.',
      video: birthdayUnicornVideo,
      poster: birthdayUnicornPoster,
      tone: 'Playful'
    },
    {
      title: 'Baby Showers',
      desc: 'Soft, joyful and full of little details.',
      video: babyCreamVideo,
      poster: babyCreamPoster,
      tone: 'Sweet'
    },
    {
      title: 'Festive',
      desc: 'Traditional charm with a modern digital touch.',
      video: floralVideo,
      poster: floralPoster,
      tone: 'Traditional'
    }
  ]

  return <section id="categories" className="bg-[#f8f1e8] px-5 py-20 md:px-10 md:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-4xl">
          <p className="text-[11px] font-bold uppercase tracking-[.3em] text-[#a57a34]">Our collection</p>
          <h2 className="serif mt-4 text-4xl leading-[.98] tracking-[-.025em] text-[#4b171d] sm:text-5xl md:text-6xl lg:text-7xl">
            Invitations for every <span className="italic">celebration.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-[#796662] md:text-base">
            From grand weddings to tiny birthday moments, choose a style that feels like you.
          </p>
        </div>

        <a href="#invitations" className="group inline-flex w-fit shrink-0 items-center rounded-full border border-[#8f672f]/25 bg-[#fffaf3] px-5 py-3 text-sm font-semibold text-[#57151d] shadow-sm transition hover:-translate-y-0.5 hover:border-[#8f672f]/40">
          See all designs
          <ArrowRight className="ml-2 transition group-hover:translate-x-1" size={16}/>
        </a>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {cats.map((cat, index) =>
          <a
            key={cat.title}
            href="#invitations"
            className="group relative isolate min-h-[340px] overflow-hidden rounded-[28px] bg-[#2b1215] shadow-[0_18px_45px_rgba(55,22,19,.10)]"
          >
            <video
              src={cat.video}
              poster={cat.poster}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover transition duration-[900ms] group-hover:scale-[1.07]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1a080a]/90 via-[#1a080a]/20 to-transparent"/>
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#1a080a]/25 to-transparent"/>

            <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/15 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.18em] text-white/90 backdrop-blur">
              {String(index + 1).padStart(2,'0')} · {cat.tone}
            </div>

            <div className="absolute inset-x-5 bottom-5">
              <h3 className="serif text-3xl leading-none text-white">{cat.title}</h3>
              <p className="mt-2 max-w-[230px] text-xs leading-5 text-white/70">{cat.desc}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[.16em] text-[#d9b66d]">Explore designs</span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-white/5 text-white backdrop-blur transition group-hover:translate-x-1 group-hover:bg-white/10">
                  <ArrowRight size={16}/>
                </span>
              </div>
            </div>
          </a>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[.18em] text-[#9b702c]">
        <span>Wedding · Engagement · Birthday · Baby shower · Festive</span>
        <span className="hidden sm:block">Swipe / hover to explore</span>
      </div>
    </div>
  </section>
}

function Features(){return <section id="features" className="bg-[#f8f1e8] px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[.25em] text-[#a57a34]">More than a card</p><h2 className="serif mt-3 text-5xl text-[#4b171d] md:text-6xl">Everything your invitation needs.</h2></div><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">{features.map(([title,desc,Icon],i)=><a href="#contact" key={title} className="block"><motion.div whileHover={{y:-6}} className="rounded-[28px] border border-[#8f672f]/15 bg-[#fffaf3] p-7 shadow-[0_20px_60px_rgba(55,22,19,.06)]"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#57151d] text-[#d9b66d]"><Icon size={20}/></div><h3 className="serif mt-7 text-2xl text-[#4b171d]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#796662]">{desc}</p></motion.div></a>)}</div></div></section>}

function Process(){
  const reasons = [
    ['01','Personalized designs','Every invitation is shaped around your story, colours and celebration.'],
    ['02','Animation & motion','Elegant transitions, moving details and cinematic moments make every invite feel alive.'],
    ['03','Music & memories','Add a soundtrack, photos and videos that make guests feel part of the moment.'],
    ['04','One beautiful link','Share your invitation instantly on WhatsApp, Instagram or anywhere your guests are.'],
  ]

  return <section id="why" className="bg-[#f8f1e8] px-5 py-24 md:px-10 md:py-32">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.25em] text-[#a57a34]">Why Knot & Katha</p>
          <h2 className="serif mt-3 text-5xl leading-tight text-[#4b171d] md:text-6xl">
            More than an invite.<br/><span className="italic">It's your story.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#796662]">
            We turn your special moments into digital experiences your guests will actually want to open, explore and remember.
          </p>
          <a href="#contact" className="mt-8 inline-flex rounded-full bg-[#57151d] px-6 py-3.5 text-sm font-semibold text-white">
            Create your invitation <ArrowRight className="ml-2" size={17}/>
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {reasons.map(([n,t,d])=>
            <motion.div key={n} whileHover={{y:-5}} className="rounded-[28px] border border-[#8f672f]/15 bg-[#fffaf3] p-7 shadow-[0_20px_60px_rgba(55,22,19,.05)]">
              <div className="serif text-2xl text-[#a57a34]">{n}</div>
              <h3 className="serif mt-8 text-2xl text-[#4b171d]">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-[#796662]">{d}</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  </section>
}




function PackageShowcase(){
  const plans = [
    ['Classic','₹500','Elegant designs and essential details.'],
    ['Premium','₹800','More animation, music and memories.'],
    ['Royal','₹1,200+','Cinematic motion and a complete guest experience.'],
  ]

  return <section id="packages" className="bg-[#4b171d] px-5 py-24 text-[#fffaf3] md:px-10 md:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.25em] text-[#d4b36a]">Packages</p>
          <h2 className="serif mt-3 text-5xl md:text-6xl">Choose your invitation.</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-white/60">Your first invitation is free. After that, pick Classic, Premium or Royal based on the experience you want.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {plans.map(([name,price,desc]) =>
          <a key={name} href="#invitations" className="group rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">
            <div className="text-xs font-bold uppercase tracking-[.2em] text-[#d4b36a]">{name}</div>
            <div className="serif mt-3 text-4xl">{price}</div>
            <p className="mt-2 text-sm leading-6 text-white/60">{desc}</p>
            <div className="mt-5 inline-flex items-center text-sm font-semibold">View examples <ArrowRight className="ml-2 transition group-hover:translate-x-1" size={16}/></div>
          </a>
        )}
      </div>
    </div>
  </section>
}

function Testimonials(){
  const testimonials = [
    ['“It felt like our wedding story came alive on the screen.”','Aarav & Meera','Wedding invitation'],
    ['“Everyone kept asking us where we got the invitation from.”','Riya & Kunal','Engagement invitation'],
    ['“The animation and music made it feel completely different from a normal invite.”','The Sharma Family','Family celebration'],
  ]

  return <section className="bg-[#fffaf3] px-5 py-24 md:px-10 md:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[.25em] text-[#a57a34]">Loved by celebrations</p>
        <h2 className="serif mt-3 text-5xl text-[#4b171d] md:text-6xl">Stories worth sharing.</h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.map(([quote,name,type])=>
          <motion.article key={name} whileHover={{y:-5}} className="rounded-[28px] border border-[#8f672f]/15 bg-[#f8f1e8] p-7">
            <div className="text-3xl text-[#a57a34]">“</div>
            <p className="serif mt-2 text-2xl leading-tight text-[#4b171d]">{quote.replace(/^“|”$/g,'')}</p>
            <div className="mt-7 text-sm font-semibold text-[#57151d]">{name}</div>
            <div className="mt-1 text-xs uppercase tracking-[.16em] text-[#9b702c]">{type}</div>
          </motion.article>
        )}
      </div>
    </div>
  </section>
}

function Contact(){return <section id="contact" className="noise bg-[#57151d] px-5 py-24 text-white md:px-10 md:py-32"><div className="mx-auto max-w-5xl text-center"><p className="text-xs font-bold uppercase tracking-[.25em] text-[#d4b36a]">Start your invitation</p><h2 className="serif mt-4 text-6xl leading-none md:text-8xl">Your celebration<br/><span className="italic text-[#d4b36a]">deserves more.</span></h2><p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/65 md:text-base">Tell us what you're celebrating and we'll turn it into a beautiful digital invitation your guests will love opening.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><a href="https://wa.me/916396486200" className="rounded-full bg-[#fffaf3] px-7 py-3.5 text-sm font-bold text-[#57151d]"><MessageCircle className="mr-2 inline" size={17}/> WhatsApp us</a><a href="mailto:harsh6000harsh@gmail.com" className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white">Send enquiry</a></div></div></section>}

function Footer(){return <footer className="bg-[#3a1015] px-5 py-8 text-white/55 md:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between"><a href="#home" className="serif text-xl text-white">Knot <span className="text-[#d4b36a]">& Katha</span></a><div className="text-xs">Knot & Katha · Digital Invitations · India</div><div className="flex gap-4"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><span className="text-sm font-bold tracking-wide">IG</span></a><a href="#contact"><MessageCircle size={18}/></a></div></div></footer>}

export default function App(){return <><Nav/><main><Hero/><Showcase/><Categories/><Features/><Process/><PackageShowcase/><Testimonials/><Contact/></main><Footer/></>}
