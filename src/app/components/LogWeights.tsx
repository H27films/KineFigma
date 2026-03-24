import { useNavigate } from "react-router";
import { useState } from "react";
import svgPaths from "../../imports/svg-l9ngwq44lh";

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
    <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] content-stretch flex h-[64px] items-center justify-between left-0 pl-[24px] pr-[24.02px] top-0 w-[390px]">
      <button onClick={() => navigate('/')} className="content-stretch flex items-center relative shrink-0 w-[48px]">
        <div className="h-[12px] relative shrink-0 w-[18px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
            <g>
              <path d={svgPaths.p2bce57c0} fill="white" />
            </g>
          </svg>
        </div>
      </button>
      <div className="content-stretch flex flex-col items-start relative shrink-0">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.9px] uppercase w-[34.52px]">
          <p className="leading-[28px]">LOG</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-end relative shrink-0 w-[48px]">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-right text-white tracking-[1.4px] uppercase w-[39.67px]">
          <p className="leading-[20px]">Kiné</p>
        </div>
      </div>
    </div>
  );
}

export default function LogWeights() {
  const navigate = useNavigate();

  return (
    <div className="bg-black content-stretch flex flex-col items-start pb-[128px] relative size-full min-h-screen">
      {/* Tab Navigation */}
      <div className="absolute left-0 top-[64px] w-full px-[24px] pt-[16px]">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div onClick={() => navigate('/weights')} className="cursor-pointer content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px pb-[14px] pt-[12px] relative">
            <div aria-hidden="true" className="absolute border-b-2 border-solid border-white inset-0 pointer-events-none" />
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[64.45px]">
              <p className="leading-[24px]">Weights</p>
            </div>
          </div>
          <div onClick={() => navigate('/cardio')} className="cursor-pointer content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px pb-[14px] pt-[12px] relative">
            <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(198,198,198,0.4)] text-center w-[49.7px]">
              <p className="leading-[24px]">Cardio</p>
            </div>
          </div>
          <div onClick={() => navigate('/calories')} className="cursor-pointer content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px pb-[14px] pt-[12px] relative">
            <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(198,198,198,0.4)] text-center w-[61.97px]">
              <p className="leading-[24px]">Calories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full pt-[120px] px-[24px]">
        {/* Target Section */}
        <div className="mb-[32px]">
          <div className="content-stretch flex items-end justify-between relative shrink-0 w-full mb-[24px]">
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[30px] tracking-[-1.5px] uppercase w-[114.33px]">
                <p className="leading-[36px]">Target</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[10px] tracking-[1px] uppercase w-[139.72px]">
                <p className="leading-[15px]">Select Muscle Group</p>
              </div>
            </div>
          </div>

          {/* Muscle Groups Grid */}
          <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__100px_100px_auto] w-full mb-[32px]">
            <div className="bg-[#121212] border border-[rgba(255,255,255,0.1)] col-[1/span_2] rounded-[8px] p-[24px]">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-[16px]">
                  <div className="text-white text-[32px]">💪</div>
                  <div className="font-['Inter:Black',sans-serif] font-black text-[20px] text-[#e2e2e2] tracking-[-0.5px] uppercase">
                    Chest
                  </div>
                </div>
                <div className="h-[12px] w-[7.4px]">
                  <svg fill="none" viewBox="0 0 7.4 12">
                    <path d="M0.600006 10.59L5.17001 6L0.600006 1.41L2.00001 0L8.00001 6L2.00001 12L0.600006 10.59Z" fill="white" fillOpacity="0.2" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-[8px] p-[24px]">
              <div className="flex items-center justify-between w-full">
                <div className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-[#e2e2e2] tracking-[-0.4px] uppercase">
                  Back
                </div>
                <div className="h-[12px] w-[7.4px]">
                  <svg fill="none" viewBox="0 0 7.4 12">
                    <path d="M0.600006 10.59L5.17001 6L0.600006 1.41L2.00001 0L8.00001 6L2.00001 12L0.600006 10.59Z" fill="white" fillOpacity="0.2" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-[8px] p-[24px]">
              <div className="flex items-center justify-between w-full">
                <div className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-[#e2e2e2] tracking-[-0.4px] uppercase">
                  Legs
                </div>
                <div className="h-[12px] w-[7.4px]">
                  <svg fill="none" viewBox="0 0 7.4 12">
                    <path d="M0.600006 10.59L5.17001 6L0.600006 1.41L2.00001 0L8.00001 6L2.00001 12L0.600006 10.59Z" fill="white" fillOpacity="0.2" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-[#121212] border border-[rgba(255,255,255,0.1)] col-[1/span_2] rounded-[8px] p-[24px]">
              <div className="flex items-center justify-between w-full">
                <div className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-[#e2e2e2] tracking-[-0.4px] uppercase">
                  Shoulders & Arms
                </div>
                <div className="h-[12px] w-[7.4px]">
                  <svg fill="none" viewBox="0 0 7.4 12">
                    <path d="M0.600006 10.59L5.17001 6L0.600006 1.41L2.00001 0L8.00001 6L2.00001 12L0.600006 10.59Z" fill="white" fillOpacity="0.2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Entry Section */}
        <div className="bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-[8px] p-[24px] mb-[32px]">
          <div className="mb-[24px]">
            <div className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-[#c6c6c6] tracking-[1.2px] uppercase mb-[8px]">
              New Entry: Bench Press
            </div>
          </div>
          
          <div className="flex items-end gap-[16px] mb-[24px]">
            <div className="flex flex-col font-['Inter:Black',sans-serif] font-black text-[56px] text-white tracking-[-2.8px]">
              00
            </div>
            <div className="flex flex-col font-['Inter:Black',sans-serif] font-black text-[36px] text-white tracking-[-1.8px] pb-[8px]">
              KG
            </div>
          </div>

          <div className="flex items-center justify-between mb-[24px]">
            <div className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-[#c6c6c6] tracking-[1.2px] uppercase">
              Repetitions
            </div>
            <div className="flex items-center gap-[24px]">
              <button className="text-white text-[24px]">−</button>
              <div className="font-['Inter:Black',sans-serif] font-black text-[24px] text-white">
                12
              </div>
              <button className="text-white text-[24px]">+</button>
            </div>
          </div>

          <button className="bg-white w-full py-[12px] rounded-[8px] font-['Inter:Black',sans-serif] font-black text-[12px] text-black tracking-[2.4px] uppercase">
            Log Set
          </button>
        </div>

        {/* Recent Logs */}
        <div>
          <div className="flex items-center justify-between mb-[16px]">
            <div className="font-['Inter:Black',sans-serif] font-black text-[18px] text-white tracking-[-0.9px] uppercase">
              Recent Logs
            </div>
            <div className="text-white">⏱️</div>
          </div>

          <div className="space-y-[16px]">
            {[
              { name: "Dumbbell Flyes", sets: "3 sets", reps: "12 reps", weight: "24.5 kg/db" },
              { name: "Incline Press", sets: "4 sets", reps: "10 reps", weight: "80.0 kg/db" },
              { name: "Cable Crossover", sets: "3 sets", reps: "15 reps", weight: "15.0 kg/db" }
            ].map((exercise, i) => (
              <div key={i} className="bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-[8px] p-[21px] flex items-center justify-between">
                <div className="flex items-center gap-[16px]">
                  <div className="text-white text-[24px]">🔁</div>
                  <div>
                    <div className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-white mb-[4px]">
                      {exercise.name}
                    </div>
                    <div className="font-['Inter:Regular',sans-serif] text-[10px] text-[rgba(255,255,255,0.6)] tracking-[1px] uppercase">
                      {exercise.sets} • {exercise.reps}
                    </div>
                  </div>
                </div>
                <div className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-white">
                  {exercise.weight}
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