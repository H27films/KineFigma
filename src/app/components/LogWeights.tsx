import { useNavigate } from "react-router";
import { useState } from "react";
import svgPaths from "../../imports/svg-l9ngwq44lh";
import { Menu } from "lucide-react";

function BottomNavBar() {
  const navigate = useNavigate();

  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] bottom-[24px] h-[66px] left-[19.5px] rounded-[12px] w-[351px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_32px_0px_black]" />
      
      <div onClick={() => navigate('/')} className="cursor-pointer -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[38.61px] p-[12px] top-1/2">
        <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[24px] w-[24.103px]">
          <p className="leading-[24px]">camping</p>
        </div>
      </div>
      
      <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[113.86px] p-[12px] top-1/2">
        <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-white text-[24px] w-[24.103px]">
          <p className="leading-[24px]">fitness_center</p>
        </div>
      </div>

      <div onClick={() => navigate('/cardio')} className="cursor-pointer -translate-y-1/2 absolute flex items-center justify-center left-[186.71px] size-[46.2px] top-1/2">
        <div className="flex-none scale-x-[110%] scale-y-[110%]">
          <div className="relative size-[42px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
              <g>
                <rect fill="white" height="42" rx="12" width="42" />
                <path d={svgPaths.p2981bf00} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      
      <div onClick={() => navigate('/profile')} className="cursor-pointer -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[264.36px] p-[12px] top-1/2">
        <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[24px] w-[24.103px]">
          <p className="leading-[24px]">person</p>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const navigate = useNavigate();

  return (
    <div className="absolute bg-black content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] top-0 w-full z-10">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <button className="relative z-10">
        <Menu size={24} color="white" />
      </button>
      <div className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-white tracking-[-0.5px] uppercase">
        KINÉ
      </div>
      <div className="w-[24px]" />
    </div>
  );
}

export default function LogWeights() {
  const navigate = useNavigate();
  const [reps, setReps] = useState(12);

  return (
    <div className="bg-black content-stretch flex flex-col items-start pb-[128px] relative size-full min-h-screen">
      {/* Tab Navigation */}
      <div className="absolute left-0 top-[64px] w-full px-[24px] pt-[16px]">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px pb-[14px] pt-[12px] relative">
            <div aria-hidden="true" className="absolute border-b-2 border-solid border-white inset-0 pointer-events-none" />
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white">
              <p className="leading-[24px]">Weights</p>
            </div>
          </div>
          <div onClick={() => navigate('/cardio')} className="cursor-pointer content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px pb-[14px] pt-[12px] relative">
            <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(198,198,198,0.4)] text-center">
              <p className="leading-[24px]">Cardio</p>
            </div>
          </div>
          <div onClick={() => navigate('/calories')} className="cursor-pointer content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px pb-[14px] pt-[12px] relative">
            <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(198,198,198,0.4)] text-center">
              <p className="leading-[24px]">Calories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full pt-[130px] px-[24px]">
        {/* Target Section */}
        <div className="mb-[24px]">
          <div className="flex items-end justify-between mb-[16px]">
            <div className="font-['Inter:Black',sans-serif] font-black text-[30px] text-white tracking-[-1.5px] uppercase italic">
              TARGET
            </div>
            <div className="font-['Inter:Regular',sans-serif] text-[10px] text-[#c6c6c6] tracking-[1px] uppercase">
              Select Muscle Group
            </div>
          </div>

          {/* Muscle Groups Grid */}
          <div className="grid grid-cols-2 gap-[16px] mb-[24px]">
            {/* Chest - Large Box */}
            <div className="bg-[#3a3a3a] rounded-[8px] p-[24px] row-span-2 flex flex-col justify-end">
              <div className="mb-[16px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 12L12 8L16 12L20 8L24 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 20L12 16L16 20L20 16L24 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="font-['Inter:Black',sans-serif] font-black text-[20px] text-white tracking-[-0.5px] uppercase">
                CHEST
              </div>
            </div>

            {/* Back */}
            <div className="bg-[#1a1a1a] rounded-[8px] p-[24px] flex items-center justify-between">
              <div className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white tracking-[-0.4px] uppercase">
                BACK
              </div>
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M0.600006 10.59L5.17001 6L0.600006 1.41L2.00001 0L8.00001 6L2.00001 12L0.600006 10.59Z" fill="white" fillOpacity="0.6" />
              </svg>
            </div>

            {/* Legs */}
            <div className="bg-[#1a1a1a] rounded-[8px] p-[24px] flex items-center justify-between">
              <div className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white tracking-[-0.4px] uppercase">
                LEGS
              </div>
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M0.600006 10.59L5.17001 6L0.600006 1.41L2.00001 0L8.00001 6L2.00001 12L0.600006 10.59Z" fill="white" fillOpacity="0.6" />
              </svg>
            </div>
          </div>

          {/* Shoulders & Arms - Full Width */}
          <div className="bg-[#1a1a1a] rounded-[8px] p-[24px] flex items-center justify-between mb-[32px]">
            <div className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white tracking-[-0.4px] uppercase">
              SHOULDERS & ARMS
            </div>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M0.600006 10.59L5.17001 6L0.600006 1.41L2.00001 0L8.00001 6L2.00001 12L0.600006 10.59Z" fill="white" fillOpacity="0.6" />
            </svg>
          </div>
        </div>

        {/* New Entry Section */}
        <div className="bg-[#121212] rounded-[8px] p-[24px] mb-[32px]">
          <div className="font-['Inter:Bold',sans-serif] font-bold text-[10px] text-[#c6c6c6] tracking-[1px] uppercase mb-[24px]">
            New Entry: Bench Press
          </div>
          
          <div className="flex items-end gap-[24px] mb-[32px]">
            <div className="font-['Inter:Black',sans-serif] font-black text-[80px] text-[#2a2a2a] leading-none tracking-[-4px]">
              00
            </div>
            <div className="font-['Inter:Black',sans-serif] font-black text-[32px] text-white leading-none tracking-[-1.6px] pb-[8px]">
              KG
            </div>
          </div>

          <div className="mb-[24px]">
            <div className="font-['Inter:Bold',sans-serif] font-bold text-[10px] text-[#c6c6c6] tracking-[1px] uppercase mb-[16px]">
              Repetitions
            </div>
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setReps(Math.max(1, reps - 1))}
                className="text-white text-[32px] w-[48px] h-[48px] flex items-center justify-center"
              >
                −
              </button>
              <div className="font-['Inter:Black',sans-serif] font-black text-[32px] text-white">
                {reps}
              </div>
              <button 
                onClick={() => setReps(reps + 1)}
                className="text-white text-[32px] w-[48px] h-[48px] flex items-center justify-center"
              >
                +
              </button>
              <button className="bg-white px-[32px] py-[12px] rounded-[8px] font-['Inter:Bold',sans-serif] font-bold text-[12px] text-black tracking-[1.2px] uppercase">
                Log Set
              </button>
            </div>
          </div>
        </div>

        {/* Recent Logs */}
        <div>
          <div className="flex items-center justify-between mb-[16px]">
            <div className="font-['Inter:Black',sans-serif] font-black text-[18px] text-white tracking-[-0.9px] uppercase">
              Recent Logs
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" fill="white"/>
            </svg>
          </div>

          <div className="space-y-[16px]">
            {[
              { name: "DUMBBELL FLYES", sets: "3 SETS", reps: "12 REPS", weight: "24.5", unit: "KG/DB" },
              { name: "INCLINE PRESS", sets: "4 SETS", reps: "10 REPS", weight: "80.0", unit: "KG/DB" },
              { name: "CABLE CROSSOVER", sets: "3 SETS", reps: "15 REPS", weight: "15.0", unit: "KG/DB" }
            ].map((exercise, i) => (
              <div key={i} className="bg-[#1a1a1a] rounded-[8px] p-[20px] flex items-center justify-between">
                <div className="flex items-center gap-[16px]">
                  <div className="w-[40px] h-[40px] bg-[#2a2a2a] rounded-[8px] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M6 8L8 6L10 8L12 6L14 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 12L8 10L10 12L12 10L14 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-white mb-[4px] tracking-[-0.35px]">
                      {exercise.name}
                    </div>
                    <div className="font-['Inter:Regular',sans-serif] text-[10px] text-[rgba(255,255,255,0.6)] tracking-[1px] uppercase">
                      {exercise.sets} • {exercise.reps}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-['Inter:Black',sans-serif] font-black text-[24px] text-white leading-none tracking-[-1.2px]">
                    {exercise.weight}
                  </div>
                  <div className="font-['Inter:Regular',sans-serif] text-[10px] text-[rgba(255,255,255,0.6)] tracking-[1px] uppercase">
                    {exercise.unit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Header />
      <BottomNavBar />
    </div>
  );
}