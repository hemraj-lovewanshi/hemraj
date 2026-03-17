import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  AlertCircle, 
  LayoutDashboard,
  User,
  MapPin,
  Briefcase,
  RefreshCw
} from 'lucide-react';
import { UserProfile, Scheme } from '../types';
import { findSchemes } from '../services/schemeService';
import SchemeCard from './SchemeCard';

interface Props {
  profile: UserProfile;
  schemes: Scheme[];
  setSchemes: (s: Scheme[]) => void;
}

const Dashboard: React.FC<Props> = ({ profile, schemes, setSchemes }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await findSchemes(profile);
        setSchemes(result.schemes);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch schemes');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Analyzing your profile...</h2>
        <p className="text-slate-500">Checking our database of Central and {profile.location} State schemes.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-50 rounded-full">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-red-600 mb-2">Something went wrong</h2>
        <p className="text-slate-500 mb-6">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition mx-auto"
        >
          <RefreshCw className="w-5 h-5" /> Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <LayoutDashboard className="w-6 h-6 text-blue-600" />
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Your Eligibility Dashboard</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge icon={<User className="w-3 h-3" />} label={`${profile.age} Years`} />
            <Badge icon={<MapPin className="w-3 h-3" />} label={profile.location} />
            <Badge icon={<Briefcase className="w-3 h-3" />} label={profile.occupation} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl font-bold">
            {schemes.length}
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Matches Found</p>
            <p className="text-slate-700 font-semibold">Ready for application</p>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {schemes.map((scheme, idx) => (
          <SchemeCard key={idx} scheme={scheme} />
        ))}
      </motion.div>

      {schemes.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
          <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-400 text-lg font-medium">No exact matches found for current criteria.</p>
          <p className="text-slate-500 mt-2">Try adjusting your income or occupation details.</p>
        </div>
      )}
    </div>
  );
};

const Badge = ({ label, icon }: { label: string, icon: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full border border-slate-200 uppercase tracking-wide">
    {icon}
    {label}
  </span>
);

export default Dashboard;