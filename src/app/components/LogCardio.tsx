import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-mh0mxnztiy";

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
      
      <div onClick={() => navigate('/weights')} className="cursor-pointer -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[113.86px] p-[12px] top-1/2">
        <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[24px] w-[24.103px]">
          <p className="leading-[24px]">fitness_center</p>
        </div>
      </div>

      <div className="-translate-y-1/2 absolute flex items-center justify-center left-[186.71px] size-[46.2px] top-1/2">
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

export default function LogCardio() {
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
        <div className="content-stretch flex flex-col items-center relative shrink-0">
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[1px] uppercase w-[44.89px]">
              <p className="leading-[15px]">Cardio</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[8px] items-start pt-[4px] relative shrink-0 w-[4px]">
            <div className="bg-white rounded-[12px] shrink-0 size-[4px]" />
          </div>
        </div>
        <div onClick={() => navigate('/calories')} className="cursor-pointer content-stretch flex flex-col items-start relative shrink-0">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[10px] tracking-[1px] uppercase w-[56.58px]">
            <p className="leading-[15px]">Calories</p>
          </div>
        </div>
      </div>

      {/* Page Editorial Header */}
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] right-[16px] top-[167px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-1.6px] w-full">
            <p className="leading-[32px]">LOG PERFORMANCE</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[12px] tracking-[2.4px] uppercase w-full">
            <p className="leading-[18px]">Cardio • Session 042</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full pt-[273px] px-[16px] space-y-[16px]">
        {/* Distance Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[12px] tracking-[3.6px] uppercase w-full">
              <p className="leading-[18px]">Distance</p>
            </div>
          </div>
          <div className="flex items-end gap-[16px] w-full">
            <div className="flex flex-col font-['Inter:Black',sans-serif] font-black text-[72px] text-white tracking-[-3.6px]">
              12.45
            </div>
            <div className="flex flex-col font-['Inter:Black',sans-serif] font-black text-[24px] text-[#c6c6c6] tracking-[-1.2px] pb-[16px]">
              KM
            </div>
          </div>
          <div className="bg-[rgba(71,71,71,0.2)] h-px w-full" />
        </div>

        {/* Duration Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start py-[16px] w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[12px] tracking-[3.6px] uppercase w-full">
              <p className="leading-[18px]">Duration</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-start relative w-full">
            <div className="flex items-end gap-[8px]">
              <div className="flex flex-col font-['Inter:Black',sans-serif] font-black text-[56px] text-white tracking-[-2.8px]">
                58
              </div>
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold text-[12px] text-[#c6c6c6] tracking-[1.2px] uppercase pb-[12px]">
                MIN
              </div>
            </div>
            <div className="flex items-end gap-[8px]">
              <div className="flex flex-col font-['Inter:Black',sans-serif] font-black text-[56px] text-white tracking-[-2.8px]">
                12
              </div>
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold text-[12px] text-[#c6c6c6] tracking-[1.2px] uppercase pb-[12px]">
                SEC
              </div>
            </div>
          </div>
          <div className="bg-[rgba(71,71,71,0.2)] h-px w-full" />
        </div>

        {/* Secondary Metrics Grid */}
        <div className="bg-[rgba(255,255,255,0.1)] gap-x-px gap-y-px grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_111px] overflow-clip rounded-[8px] w-full">
          <div className="bg-[#121212]">
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] w-full">
              <div className="font-['Inter:Bold',sans-serif] font-bold text-[10px] text-[#c6c6c6] tracking-[1px] uppercase">
                Avg Pace
              </div>
              <div className="flex gap-[8px] items-baseline">
                <div className="font-['Inter:Black',sans-serif] font-black text-[24px] text-white">
                  4'42"
                </div>
                <div className="font-['Inter:Bold',sans-serif] font-bold text-[10px] text-[#c6c6c6] uppercase">
                  /km
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#121212]">
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] w-full">
              <div className="font-['Inter:Bold',sans-serif] font-bold text-[10px] text-[#c6c6c6] tracking-[1px] uppercase">
                Intensity
              </div>
              <div className="font-['Inter:Black',sans-serif] font-black text-[24px] text-white">
                ZONE 4
              </div>
            </div>
          </div>
        </div>

        {/* Heart Rate Telemetry */}
        <div className="bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-[8px] p-[33px] relative">
          <div className="absolute inset-[17px_1px_1px_1px] opacity-5" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 356 273\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(44.863 0 0 44.863 356 0)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
          
          <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full">
            <div className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-white tracking-[1.2px] uppercase">
              Heart Rate Telemetry
            </div>
            
            <div className="content-stretch flex gap-[4px] h-[112px] items-end relative w-full">
              {[51.19, 70.39, 89.59, 108.8, 121.59, 115.19, 102.39, 83.19, 64, 57.59, 51.19, 44.8, 76.8, 108.8, 112].map((height, i) => (
                <div 
                  key={i}
                  className={`rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px] ${
                    height > 100 ? 'bg-white' : height > 80 ? 'bg-[rgba(255,255,255,0.6)]' : height > 60 ? 'bg-[rgba(255,255,255,0.4)]' : height > 50 ? 'bg-[rgba(255,255,255,0.2)]' : 'bg-[rgba(255,255,255,0.1)]'
                  }`}
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>

            <div className="content-stretch flex items-start justify-between relative w-full">
              <div className="font-['Inter:Bold',sans-serif] font-bold text-[10px] text-[#c6c6c6] tracking-[1px] uppercase">
                00:00
              </div>
              <div className="font-['Inter:Bold',sans-serif] font-bold text-[10px] text-[#c6c6c6] tracking-[1px] uppercase">
                164 BPM AVG
              </div>
              <div className="font-['Inter:Bold',sans-serif] font-bold text-[10px] text-[#c6c6c6] tracking-[1px] uppercase">
                58:12
              </div>
            </div>
          </div>
        </div>

        {/* Commit Button */}
        <button className="bg-white w-full py-[20px] rounded-[12px] shadow-[0px_12px_32px_0px_rgba(0,0,0,0.4)] font-['Inter:Black',sans-serif] font-black text-[12px] text-black tracking-[4.8px] uppercase">
          Commit Session
        </button>
      </div>

      <Header />
      <BottomNavBar />
    </div>
  );
}