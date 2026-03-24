import { useNavigate } from "react-router";
import { User, Trophy, Target, Activity, Calendar } from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen w-full text-white">
      {/* Header */}
      <div className="absolute bg-black content-stretch flex h-[64px] items-center justify-between left-0 pb-px px-[16px] top-0 w-full">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
        <button onClick={() => navigate('/')}>
          <div className="h-[12px] w-[18px]">
            <svg fill="none" viewBox="0 0 18 12">
              <path d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z" fill="white" />
            </svg>
          </div>
        </button>
        <div className="font-['Inter:Bold',sans-serif] font-bold text-[20px] tracking-[-0.5px] uppercase">
          Profile
        </div>
        <div className="w-[18px]" />
      </div>

      {/* Content */}
      <div className="pt-[96px] px-[24px] pb-[120px]">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-[48px]">
          <div className="bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-full w-[120px] h-[120px] flex items-center justify-center mb-[24px]">
            <User size={64} className="text-[rgba(255,255,255,0.4)]" />
          </div>
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[32px] tracking-[-1.6px] mb-[8px]">
            ATHLETE
          </h2>
          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[rgba(255,255,255,0.6)] tracking-[1.4px] uppercase">
            Member since 2024
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-[16px] mb-[32px]">
          <div className="bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-[8px] p-[24px]">
            <Trophy className="text-white mb-[16px]" size={24} />
            <div className="font-['Inter:Black',sans-serif] font-black text-[32px] leading-[32px] mb-[8px]">
              47
            </div>
            <div className="font-['Inter:Bold',sans-serif] font-bold text-[10px] text-[rgba(255,255,255,0.4)] tracking-[1px] uppercase">
              Workouts
            </div>
          </div>

          <div className="bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-[8px] p-[24px]">
            <Target className="text-white mb-[16px]" size={24} />
            <div className="font-['Inter:Black',sans-serif] font-black text-[32px] leading-[32px] mb-[8px]">
              92%
            </div>
            <div className="font-['Inter:Bold',sans-serif] font-bold text-[10px] text-[rgba(255,255,255,0.4)] tracking-[1px] uppercase">
              Goal Rate
            </div>
          </div>

          <div className="bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-[8px] p-[24px]">
            <Activity className="text-white mb-[16px]" size={24} />
            <div className="font-['Inter:Black',sans-serif] font-black text-[32px] leading-[32px] mb-[8px]">
              284
            </div>
            <div className="font-['Inter:Bold',sans-serif] font-bold text-[10px] text-[rgba(255,255,255,0.4)] tracking-[1px] uppercase">
              Total Hours
            </div>
          </div>

          <div className="bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-[8px] p-[24px]">
            <Calendar className="text-white mb-[16px]" size={24} />
            <div className="font-['Inter:Black',sans-serif] font-black text-[32px] leading-[32px] mb-[8px]">
              23
            </div>
            <div className="font-['Inter:Bold',sans-serif] font-bold text-[10px] text-[rgba(255,255,255,0.4)] tracking-[1px] uppercase">
              Day Streak
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="space-y-[16px]">
          <h3 className="font-['Inter:Black',sans-serif] font-black text-[18px] tracking-[-0.9px] uppercase mb-[16px]">
            Settings
          </h3>
          
          <div className="bg-[#121212] border border-[rgba(255,255,255,0.05)] rounded-[4px] p-[21px]">
            <div className="font-['Inter:Bold',sans-serif] font-bold text-[14px]">
              Personal Information
            </div>
          </div>

          <div className="bg-[#121212] border border-[rgba(255,255,255,0.05)] rounded-[4px] p-[21px]">
            <div className="font-['Inter:Bold',sans-serif] font-bold text-[14px]">
              Goals & Preferences
            </div>
          </div>

          <div className="bg-[#121212] border border-[rgba(255,255,255,0.05)] rounded-[4px] p-[21px]">
            <div className="font-['Inter:Bold',sans-serif] font-bold text-[14px]">
              Notifications
            </div>
          </div>

          <div className="bg-[#121212] border border-[rgba(255,255,255,0.05)] rounded-[4px] p-[21px]">
            <div className="font-['Inter:Bold',sans-serif] font-bold text-[14px]">
              Connected Devices
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.2)] border-solid bottom-[24px] h-[66px] left-[19.5px] rounded-[12px] shadow-[0px_12px_32px_0px_black] w-[351px]">
        <div onClick={() => navigate('/')} className="absolute cursor-pointer flex flex-col items-start left-[38.61px] top-1/2 -translate-y-1/2 p-[12px]">
          <div className="font-['Material_Symbols_Outlined:Thin',sans-serif] h-[24px] text-[24px] text-[rgba(255,255,255,0.6)]">
            <p>camping</p>
          </div>
        </div>
        
        <div onClick={() => navigate('/weights')} className="absolute cursor-pointer flex flex-col items-start left-[113.86px] top-1/2 -translate-y-1/2 p-[12px]">
          <div className="font-['Material_Symbols_Outlined:Thin',sans-serif] h-[24px] text-[24px] text-[rgba(255,255,255,0.6)]">
            <p>fitness_center</p>
          </div>
        </div>

        <div onClick={() => navigate('/cardio')} className="absolute flex items-center justify-center left-[186.71px] top-1/2 -translate-y-1/2 size-[46.2px]">
          <div className="bg-white rounded-[12px] size-[42px] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M13 8H8V13H6V8H1V6H6V1H8V6H13V8Z" fill="black"/>
            </svg>
          </div>
        </div>

        <div className="absolute flex flex-col items-start left-[264.36px] top-1/2 -translate-y-1/2 p-[12px]">
          <div className="font-['Material_Symbols_Outlined:Thin',sans-serif] h-[24px] text-[24px] text-white">
            <p>person</p>
          </div>
        </div>
      </div>
    </div>
  );
}
