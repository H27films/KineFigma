import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-5pzbfb2wap";

function BottomNavBar() {
  const navigate = useNavigate();

  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] bottom-[24px] h-[66px] left-[19.5px] rounded-[12px] w-[351px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_32px_0px_black]" />
      
      <div onClick={() => navigate('/')} className="cursor-pointer -translate-y-1/2 absolute flex items-center justify-center left-[38.61px] size-[48px] top-1/2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 13H18V11H3V13ZM3 6V8H18V6H3ZM3 18H12V16H3V18Z" fill="rgba(255,255,255,0.6)" />
        </svg>
      </div>
      
      <div onClick={() => navigate('/cardio')} className="cursor-pointer -translate-y-1/2 absolute flex items-center justify-center left-[113.86px] size-[48px] top-1/2">
        <div className="font-['Material_Symbols_Outlined:Thin',sans-serif] text-[24px] text-[rgba(255,255,255,0.6)]">
          add
        </div>
      </div>

      <div className="-translate-y-1/2 absolute flex items-center justify-center left-[186.71px] size-[46.2px] top-1/2">
        <div className="flex-none scale-x-[110%] scale-y-[110%]">
          <div className="bg-white rounded-[12px] size-[42px] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M14.17 9H11V5.83C11 5.3 10.7 5 10 5C9.3 5 9 5.3 9 5.83V9H5.83C5.3 9 5 9.3 5 10C5 10.7 5.3 11 5.83 11H9V14.17C9 14.7 9.3 15 10 15C10.7 15 11 14.7 11 14.17V11H14.17C14.7 11 15 10.7 15 10C15 9.3 14.7 9 14.17 9Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div onClick={() => navigate('/profile')} className="cursor-pointer -translate-y-1/2 absolute flex items-center justify-center left-[264.36px] size-[48px] top-1/2">
        <div className="font-['Material_Symbols_Outlined:Thin',sans-serif] text-[24px] text-[rgba(255,255,255,0.6)]">
          person
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

export default function LogCalories() {
  const navigate = useNavigate();

  return (
    <div className="bg-black content-stretch flex flex-col items-start pb-[128px] relative size-full min-h-screen">
      {/* Tab Navigation */}
      <div className="absolute content-stretch flex gap-[32px] items-end left-[16px] right-[16px] top-[96px]">
        <div onClick={() => navigate('/weights')} className="cursor-pointer content-stretch flex flex-col items-start relative shrink-0">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[10px] tracking-[1px] uppercase w-[53.33px]">
            <p className="leading-[15px]">Weights</p>
          </div>
        </div>
        <div onClick={() => navigate('/cardio')} className="cursor-pointer content-stretch flex flex-col items-start relative shrink-0">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[10px] tracking-[1px] uppercase w-[44.89px]">
            <p className="leading-[15px]">Cardio</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0">
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[1px] uppercase w-[56.58px]">
              <p className="leading-[15px]">Calories</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[8px] items-start pt-[4px] relative shrink-0 w-[4px]">
            <div className="bg-white rounded-[12px] shrink-0 size-[4px]" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full pt-[167px] px-[16px] space-y-[32px]">
        {/* Total Calories */}
        <div>
          <div className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-[#c6c6c6] tracking-[1.2px] uppercase mb-[16px]">
            Total Calories
          </div>
          <div className="flex items-baseline gap-[8px]">
            <div className="font-['Inter:Black',sans-serif] font-black text-[80px] text-white tracking-[-4px]">
              1420
            </div>
          </div>
          <div className="font-['Inter:Regular',sans-serif] text-[12px] text-[#c6c6c6] tracking-[1.2px] uppercase">
            kcal Today
          </div>
        </div>

        {/* Food Rating */}
        <div>
          <div className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-[#c6c6c6] tracking-[1.2px] uppercase mb-[16px]">
            Food Rating
          </div>
          <div className="flex gap-[8px]">
            {['BAD', 'OK', 'GOOD'].map((rating, i) => (
              <button
                key={rating}
                className={`flex-1 py-[16px] rounded-[4px] font-['Inter:Bold',sans-serif] font-bold text-[12px] tracking-[1.2px] uppercase ${
                  i === 1 
                    ? 'bg-white text-black border-2 border-white' 
                    : 'bg-transparent text-[#c6c6c6] border-2 border-[rgba(255,255,255,0.1)]'
                }`}
              >
                {rating}
              </button>
            ))}
          </div>
        </div>

        {/* Performance Trends */}
        <div>
          <div className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-white tracking-[1.2px] uppercase mb-[16px]">
            Performance Trends
          </div>

          {/* Calories This Week */}
          <div className="mb-[24px]">
            <div className="font-['Inter:Regular',sans-serif] text-[10px] text-[#c6c6c6] tracking-[1px] uppercase mb-[16px]">
              Calories This Week
            </div>
            <div className="flex items-end gap-[8px] h-[120px]">
              {[40, 55, 45, 70, 50, 32, 95].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end">
                  <div 
                    className={`w-full rounded-t-[4px] ${i === 6 ? 'bg-white' : 'bg-[rgba(255,255,255,0.2)]'}`}
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-[8px]">
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                <div key={day} className="font-['Inter:Bold',sans-serif] font-bold text-[8px] text-[#c6c6c6] tracking-[0.8px] uppercase">
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Calories This Month */}
          <div>
            <div className="font-['Inter:Regular',sans-serif] text-[10px] text-[#c6c6c6] tracking-[1px] uppercase mb-[16px]">
              Calories This Month
            </div>
            <div className="flex items-end gap-[8px] h-[120px]">
              {[30, 40, 50, 95].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end">
                  <div 
                    className={`w-full rounded-t-[4px] ${i === 3 ? 'bg-white' : 'bg-[rgba(255,255,255,0.2)]'}`}
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-[8px]">
              {['WK1', 'WK2', 'WK3', 'WK4'].map((week) => (
                <div key={week} className="font-['Inter:Bold',sans-serif] font-bold text-[8px] text-[#c6c6c6] tracking-[0.8px] uppercase">
                  {week}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Body Measurements */}
        <div>
          <div className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-white tracking-[1.2px] uppercase mb-[16px]">
            Body Measurements
          </div>
          <div className="space-y-[8px]">
            {[
              { label: 'Body Weight (KG)', value: '78.5' },
              { label: 'Body Fat (%)', value: '14.2' },
              { label: 'Muscle Mass (KG)', value: '64.1' }
            ].map((metric) => (
              <div key={metric.label} className="bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-[4px] p-[21px] flex items-center justify-between">
                <div className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-[#c6c6c6] tracking-[1.2px] uppercase">
                  {metric.label}
                </div>
                <div className="font-['Inter:Black',sans-serif] font-black text-[24px] text-white">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Update Button */}
        <button className="bg-white w-full py-[20px] rounded-[12px] shadow-[0px_12px_32px_0px_rgba(0,0,0,0.4)] font-['Inter:Black',sans-serif] font-black text-[12px] text-black tracking-[4.8px] uppercase">
          Update Metrics
        </button>
      </div>

      <Header />
      <BottomNavBar />
    </div>
  );
}