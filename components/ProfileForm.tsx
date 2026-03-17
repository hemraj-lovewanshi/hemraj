import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  User, 
  MapPin, 
  Wallet, 
  Users, 
  Briefcase 
} from 'lucide-react';
import { UserProfile } from '../types';

interface Props {
  onSubmit: (data: UserProfile) => void;
}

const ProfileForm: React.FC<Props> = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<UserProfile>({
    age: 25,
    location: 'Bihar',
    income: 'Under 2 Lakhs',
    caste: 'General',
    occupation: 'Student'
  });

  const next = () => setStep(s => Math.min(s + 1, 5));
  const back = () => setStep(s => Math.max(s - 1, 1));

  const update = (field: keyof UserProfile, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const indianLocations = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ].sort();

  const steps = [
    { 
      title: "How old are you?", 
      subtitle: "Many schemes have strict age requirements.",
      icon: <User className="w-6 h-6" />,
      element: (
        <div className="flex flex-col items-center">
          <input 
            type="number" 
            value={formData.age}
            min="1"
            max="120"
            onChange={(e) => update('age', parseInt(e.target.value) || 0)}
            className="w-full text-center text-6xl font-black border-b-4 border-blue-500 focus:outline-none p-4 bg-transparent text-slate-800"
          />
          <p className="mt-4 text-slate-400 font-bold uppercase tracking-widest text-sm">Years Old</p>
        </div>
      )
    },
    {
      title: "Where do you live?",
      subtitle: "Select your State for specific localized benefits.",
      icon: <MapPin className="w-6 h-6" />,
      element: (
        <div className="relative">
          <select 
            value={formData.location}
            onChange={(e) => update('location', e.target.value)}
            className="w-full p-6 border-2 border-slate-100 rounded-[2rem] text-xl bg-slate-50 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all appearance-none cursor-pointer font-semibold text-slate-700"
          >
            {indianLocations.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-blue-500">
            <ChevronRight className="rotate-90" />
          </div>
        </div>
      )
    },
    {
      title: "Annual Family Income?",
      subtitle: "Used to determine eligibility for financial assistance.",
      icon: <Wallet className="w-6 h-6" />,
      element: (
        <div className="grid grid-cols-1 gap-4">
          {['Under 2 Lakhs', '2 - 5 Lakhs', '5 - 8 Lakhs', 'Above 8 Lakhs'].map(opt => (
            <button
              key={opt}
              onClick={() => update('income', opt)}
              className={`p-6 rounded-2xl border-2 text-left transition-all ${formData.income === opt ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-white border-slate-100 hover:border-slate-300 text-slate-600'}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">{opt}</span>
                {formData.income === opt && <Check className="w-6 h-6" />}
              </div>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Caste / Category?",
      subtitle: "Required for specific reservation-based schemes.",
      icon: <Users className="w-6 h-6" />,
      element: (
        <div className="grid grid-cols-2 gap-4">
          {['General', 'OBC', 'SC', 'ST', 'EWS'].map(opt => (
            <button
              key={opt}
              onClick={() => update('caste', opt)}
              className={`p-6 rounded-[1.5rem] border-2 text-center transition-all ${formData.caste === opt ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-white border-slate-100 hover:border-slate-300 text-slate-700 font-bold'}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )
    },
    {
      title: "What is your occupation?",
      subtitle: "Schemes vary for farmers, students, and workers.",
      icon: <Briefcase className="w-6 h-6" />,
      element: (
        <div className="space-y-4">
          <select 
            value={formData.occupation}
            onChange={(e) => update('occupation', e.target.value)}
            className="w-full p-6 border-2 border-slate-100 rounded-[2rem] text-xl bg-slate-50 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all appearance-none cursor-pointer font-semibold text-slate-700"
          >
            {['Student', 'Farmer', 'Self-Employed', 'Salaried', 'Unemployed', 'Daily Wage Worker', 'Pensioner', 'Small Business Owner'].map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <p className="text-center text-sm font-medium text-slate-400 italic">This helps us find sector-specific grants.</p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden">
      {/* Step Indicator Top */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              {steps[step-1].icon}
            </div>
            <span className="text-sm font-black text-blue-500 uppercase tracking-[0.2em]">Step {step} / 5</span>
          </div>
          <div className="h-2 w-1/2 bg-slate-50 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(step / 5) * 100}%` }}
              className="h-full bg-blue-500" 
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
        <h2 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">{steps[step-1].title}</h2>
        <p className="text-slate-500 text-xl font-medium">{steps[step-1].subtitle}</p>
      </div>

      <div className="min-h-[300px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {steps[step-1].element}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-16 flex items-center justify-between">
        <button 
          onClick={back}
          disabled={step === 1}
          className="px-8 py-4 text-slate-400 font-black hover:text-slate-900 disabled:opacity-0 transition-colors uppercase tracking-widest text-sm flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </button>
        {step < 5 ? (
          <button 
            onClick={next}
            className="px-12 py-5 bg-blue-600 text-white rounded-[2rem] font-bold text-lg hover:bg-blue-700 shadow-2xl shadow-blue-200 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2"
          >
            Next Step <ChevronRight className="w-5 h-5" />
          </button>
        ) : (
          <button 
            onClick={() => onSubmit(formData)}
            className="px-12 py-5 bg-green-500 text-white rounded-[2rem] font-bold text-lg hover:bg-green-600 shadow-2xl shadow-green-200 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2"
          >
            Find My Schemes! 🚀
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;