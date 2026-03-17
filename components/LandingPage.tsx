import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  UserRound, 
  Sprout, 
  Briefcase, 
  HeartPulse, 
  Home, 
  ShieldCheck, 
  Rocket,
  ExternalLink,
  BookOpen,
  RefreshCcw,
  Globe,
  IndianRupee
} from 'lucide-react';

interface Props {
  onStart: () => void;
}

const LandingPage: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="relative bg-white selection:bg-blue-100">
      {/* Hero Section */}
      <div className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1532375811408-1699aa372986?auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/95 via-white/40 to-blue-900/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-600/10 text-blue-700 border border-blue-200 text-xs font-black mb-10 backdrop-blur-sm animate-bounce-slow"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            GOVERNMENT OF INDIA & STATE WELFARE PORTAL
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-9xl font-black text-slate-900 mb-6 leading-none tracking-tighter"
          >
            Scheme<span className="text-blue-600">Snap</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-4xl font-bold text-slate-700 mb-8 max-w-4xl mx-auto leading-tight"
          >
            Your Digital Bridge to <span className="text-blue-600">Direct Benefit Transfers</span> and Welfare.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto text-xl text-slate-500 mb-12 leading-relaxed font-medium"
          >
            Empowering citizens through instant discovery of Central and State schemes. 
            Simplified for students, farmers, and workers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={onStart}
              className="group relative w-full sm:w-auto px-12 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 transition shadow-2xl shadow-blue-400/30 overflow-hidden active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Now <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a 
              href="#what-we-do"
              className="w-full sm:w-auto px-12 py-5 bg-white border-2 border-slate-100 text-slate-600 rounded-2xl font-bold text-xl hover:bg-slate-50 transition shadow-lg shadow-slate-100"
            >
              View All Categories
            </a>
          </motion.div>
        </div>
      </div>

      {/* Intro Section */}
      <section id="what-we-do" className="bg-white py-32 relative">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-5 bg-sky-50 rounded-[2rem] mb-8 border border-sky-100 shadow-sm"
          >
            <ShieldCheck className="w-12 h-12 text-blue-600" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Direct Welfare. Zero Middlemen.</h2>
          <p className="text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
            Our platform helps you discover thousands of policy documents, bringing the most relevant <span className="text-blue-600 font-bold">financial aid and social security</span> directly to your fingertips.
          </p>
        </div>
      </section>

      {/* Why Use Our Platform */}
      <section className="relative py-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90"></div>
          <div className="absolute inset-0 bg-sky-50/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">Why Choose SchemeSnap?</h2>
            <p className="text-xl text-slate-500 font-medium max-w-xl mx-auto">Designed to make government benefits accessible to everyone, everywhere.</p>
            <div className="w-32 h-2 bg-blue-600 mx-auto rounded-full mt-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <WhyCard text="Personalized Scheme Matching" icon={<RefreshCcw className="w-8 h-8" />} desc="Get schemes curated specifically for your profile." />
            <WhyCard text="Official Application Portal Links" icon={<ExternalLink className="w-8 h-8" />} desc="No more hunting for the right website." />
            <WhyCard text="Simplified Language" icon={<BookOpen className="w-8 h-8" />} desc="Complex policy jargon converted to simple steps." />
            <WhyCard text="Daily Policy Updates" icon={<RefreshCcw className="w-8 h-8" />} desc="Never miss a new grant or scholarship announcement." />
            <WhyCard text="Free & Unbiased" icon={<IndianRupee className="w-8 h-8" />} desc="A purely citizen-focused welfare discovery tool." />
            <WhyCard text="Cross-State Coverage" icon={<Globe className="w-8 h-8" />} desc="Unified access to all 28 States and 8 UTs." />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-32 bg-sky-50/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Eligibility Categories</h2>
          <p className="text-slate-500 text-lg mb-20 max-w-2xl mx-auto font-medium">From financial aid to educational grants, explore what you are entitled to.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CategoryItem icon={<GraduationCap className="w-12 h-12" />} label="Education & Grants" />
            <CategoryItem icon={<UserRound className="w-12 h-12" />} label="Women Empowerment" />
            <CategoryItem icon={<Sprout className="w-12 h-12" />} label="Farmer Welfare" />
            <CategoryItem icon={<Briefcase className="w-12 h-12" />} label="Employment & Skills" />
            <CategoryItem icon={<HeartPulse className="w-12 h-12" />} label="Health & Ayushman" />
            <CategoryItem icon={<Home className="w-12 h-12" />} label="Housing for All" />
            <CategoryItem icon={<ShieldCheck className="w-12 h-12" />} label="Social Security" />
            <CategoryItem icon={<Rocket className="w-12 h-12" />} label="Startup Support" />
          </div>
        </div>
      </section>

      {/* Citizen Acknowledgment Section */}
      <section className="bg-black py-40 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center mb-24">
            <span className="text-yellow-400 font-black tracking-[0.5em] text-xs mb-4">PUBLIC RECOGNITION</span>
            <h2 className="text-yellow-400 text-5xl md:text-7xl font-black tracking-tighter text-center uppercase">Voices of Empowered Citizens</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <TestimonialCard 
              text="NO MORE RUNNING TO TEHSIL OFFICE. I SAW MY FERTILIZER SUBSIDY STATUS RIGHT ON MY PHONE!" 
              author="RAJESH K., FARMER" 
            />
            <TestimonialCard 
              text="I NEVER KNEW MY STATE HAD A SPECIAL GRANT FOR WOMEN ENTREPRENEURS. SCHEMESNAP FOUND IT FOR ME IN SECONDS." 
              author="PRIYA S., SMALL BUSINESS OWNER" 
            />
            <TestimonialCard 
              text="FINALLY A WEBSITE THAT EXPLAINS ELIGIBILITY IN SIMPLE WORDS. GOT MY DAUGHTER'S SCHOLARSHIP LINKS WITHOUT ANY BROKER." 
              author="AMIT V., PARENT" 
            />
            <TestimonialCard 
              text="BEST TOOL FOR VILLAGE VOLUNTEERS TO HELP PEOPLE FIND THEIR CONSTITUTIONAL RIGHTS AND BENEFITS." 
              author="SARITA D., SOCIAL WORKER" 
            />
          </div>

          <div className="mt-24 text-center">
            <button 
              onClick={onStart}
              className="px-16 py-6 bg-yellow-400 text-black font-black text-xl rounded-full hover:bg-yellow-300 transition-all shadow-[0_0_50px_rgba(250,204,21,0.3)]"
            >
              JOIN THOUSANDS OF BENEFICIARIES →
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-[120px]"></div>
      </section>
    </div>
  );
};

const TestimonialCard = ({ text, author }: { text: string, author: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="border-l-4 border-yellow-400 pl-8 py-4 group"
  >
    <p className="text-yellow-400 text-3xl font-black leading-tight mb-6 group-hover:translate-x-2 transition-transform duration-300">
      "{text}"
    </p>
    <p className="text-yellow-400/60 font-black text-sm tracking-widest uppercase italic">— {author}</p>
  </motion.div>
);

const WhyCard = ({ text, icon, desc }: { text: string, icon: React.ReactNode, desc: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col items-start gap-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.1)] transition-all duration-500 group"
  >
    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
      {icon}
    </div>
    <div>
      <h3 className="text-slate-900 font-black text-xl leading-tight mb-2">{text}</h3>
      <p className="text-slate-500 text-sm font-medium leading-relaxed">{desc}</p>
    </div>
    <div className="flex items-center gap-2 text-blue-600 text-xs font-black mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
      LEARN MORE <ArrowRight className="w-4 h-4" />
    </div>
  </motion.div>
);

const CategoryItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <motion.div 
    whileHover={{ y: -16 }}
    className="group p-10 bg-white rounded-[3rem] hover:bg-blue-600 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(37,99,235,0.25)] transition-all duration-500 border border-slate-50 hover:border-blue-400 flex flex-col items-center cursor-pointer"
  >
    <div className="text-blue-600 group-hover:text-white mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
      {icon}
    </div>
    <span className="text-sm font-black text-slate-700 group-hover:text-white uppercase tracking-widest text-center transition-colors">{label}</span>
  </motion.div>
);

export default LandingPage;