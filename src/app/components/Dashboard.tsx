import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-e6ezv5wirx";
import imgRouteMap from "figma:asset/73502f464d41edc96eb720f2387c56405acd25a8.png";

function Margin() {
  return (
    <div className="h-[22px] relative shrink-0 w-[48.42px]" data-name="Margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-[4px] not-italic text-[24px] text-[rgba(255,255,255,0.4)] top-[6px] tracking-[2.4px] uppercase w-[44.42px]">
        <p className="leading-[32px]">KM</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[80px] justify-center leading-[0] not-italic relative shrink-0 text-[80px] text-shadow-[0px_0px_30px_rgba(255,255,255,0.15)] text-white tracking-[-4px] w-[171.03px]">
        <p className="leading-[80px]">33,5</p>
      </div>
      <Margin />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[320px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light h-[50px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[274.86px]">
        <p className="mb-0">
          <span className="leading-[25px]">{`You burned `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[25px] not-italic">385 calories</span>
          <span className="leading-[25px]">{` and`}</span>
        </p>
        <p>
          <span className="leading-[25px]">{`moved for `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[25px] not-italic">1 h 17 minutes</span>
        </p>
      </div>
    </div>
  );
}

function VisceralMetricSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[24px] right-[24px] top-[96px]" data-name="Visceral Metric Section">
      <Container />
      <Container1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <div className="h-[18.35px] relative shrink-0 w-[20px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
            <path d={svgPaths.p2628ad80} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.4)] tracking-[1px] uppercase w-[72.52px]">
          <p className="leading-[15px]">Heart Rate</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[-0.6px] uppercase w-full">
        <p className="leading-[16px]">BPM AVG</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white w-[64.83px]">
          <p className="leading-[40px]">142</p>
        </div>
        <Container3 />
      </div>
    </div>
  );
}

function HeartRate() {
  return (
    <div className="bg-[#121212] col-1 justify-self-stretch relative rounded-[4px] row-1 self-start shrink-0" data-name="Heart Rate">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative w-full">
        <Paragraph />
        <Container2 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
            <path d={svgPaths.p33125000} fill="var(--fill-0, white)" fillOpacity="0.4" id="Icon" />
          </svg>
        </div>
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.4)] tracking-[1px] uppercase w-[64.88px]">
          <p className="leading-[15px]">Elevation</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[-0.6px] uppercase w-full">
        <p className="leading-[16px]">Meters Gained</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white w-[75.31px]">
          <p className="leading-[40px]">840</p>
        </div>
        <Container5 />
      </div>
    </div>
  );
}

function Elevation() {
  return (
    <div className="bg-[#121212] col-2 justify-self-stretch relative rounded-[4px] row-1 self-start shrink-0" data-name="Elevation">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative w-full">
        <Paragraph1 />
        <Container4 />
      </div>
    </div>
  );
}

function RouteMap() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px opacity-40 relative w-full" data-name="Route Map">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
          <img alt="" className="absolute h-[178.95%] left-0 max-w-none top-[-39.47%] w-full" src={imgRouteMap} />
        </div>
        <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[1px] uppercase w-[87.44px]">
        <p className="leading-[15px]">Active Route</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.45px] w-[150.05px]">
        <p className="leading-[28px]">Pacific Coast Trail</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bottom-[17px] left-[25px] w-[150.05px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container7 />
        <Heading />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white right-[25px] rounded-[12px] top-[17px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[4px] relative">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black tracking-[1px] uppercase w-[53.78px]">
          <p className="leading-[15px]">Verified</p>
        </div>
      </div>
    </div>
  );
}

function MapRouteVisualFullWidth() {
  return (
    <div className="bg-[#121212] col-[1/span_2] h-[192px] justify-self-stretch relative rounded-[4px] row-2 shrink-0" data-name="Map/Route Visual - Full Width">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <RouteMap />
        <div className="absolute bg-gradient-to-t from-black inset-px to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0)]" data-name="Gradient" />
        <Container6 />
        <Background />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SectionBentoPerformanceGrid() {
  return (
    <div className="absolute gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__163px_192px] left-[24px] right-[24px] top-[344px]" data-name="Section - Bento Performance Grid">
      <HeartRate />
      <Elevation />
      <MapRouteVisualFullWidth />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.668px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6676 9.33333">
        <g id="Container">
          <path d={svgPaths.p1cccc530} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.4)] tracking-[1px] uppercase w-[87.95px]">
        <p className="leading-[15px]">Average Pace</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[93.27px]">
        <p className="leading-[28px]">{`4'22" / km`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[93.27px]" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Overlay />
        <Container10 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, white)" fillOpacity="0.2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#121212] relative rounded-[4px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[21px] relative w-full">
          <Container8 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.pd490b00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.4)] tracking-[1px] uppercase w-[76.55px]">
        <p className="leading-[15px]">Peak Power</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[86.02px]">
        <p className="leading-[28px]">312 Watts</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[86.02px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Overlay1 />
        <Container16 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, white)" fillOpacity="0.2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#121212] relative rounded-[4px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[21px] relative w-full">
          <Container14 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function SectionSecondaryStats() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[24px] right-[24px] top-[763px]" data-name="Section - Secondary Stats">
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[1077px] max-w-[672px] relative shrink-0 w-full" data-name="Main">
      <VisceralMetricSection />
      <SectionBentoPerformanceGrid />
      <SectionSecondaryStats />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="Container">
          <path d={svgPaths.p2bce57c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <Container20 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.5px] uppercase w-[45.41px]">
          <p className="leading-[28px]">Kiné</p>
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-black content-stretch flex h-[64px] items-center justify-between left-0 pb-px px-[16px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Button />
      <Container21 />
    </div>
  );
}

function LinkBasecampHomeSummaryActive() {
  return (
    <div className="relative size-[44px]" data-name="Link - Basecamp (Home/Summary) Active">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Link - Basecamp (Home/Summary) Active">
          <rect fill="var(--fill-0, white)" height="44" rx="12" width="44" />
          <path d={svgPaths.pa3fee80} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkFitnessCenter({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[112.86px] p-[12px] top-1/2 cursor-pointer" data-name="Link - Fitness Center">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.6)] w-[24.103px]">
        <p className="leading-[24px]">fitness_center</p>
      </div>
    </div>
  );
}

function LinkHistory({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[188.11px] p-[12px] top-1/2 cursor-pointer" data-name="Link - History">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.6)] w-[24.103px]">
        <p className="leading-[24px]">history</p>
      </div>
    </div>
  );
}

function LinkPerson({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[263.36px] p-[12px] top-1/2 cursor-pointer" data-name="Link - Person">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.6)] w-[24.103px]">
        <p className="leading-[24px]">person</p>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  const navigate = useNavigate();

  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.2)] border-solid bottom-0 h-[66px] left-[19.5px] rounded-[12px] shadow-[0px_12px_32px_0px_black] w-[351px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="-translate-y-1/2 absolute flex items-center justify-center left-[35.21px] size-[48.4px] top-1/2" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none scale-x-[110.00000000000001%] scale-y-[110.00000000000001%]">
          <LinkBasecampHomeSummaryActive />
        </div>
      </div>
      <LinkFitnessCenter onClick={() => navigate('/weights')} />
      <LinkHistory onClick={() => navigate('/calories')} />
      <LinkPerson onClick={() => navigate('/profile')} />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bottom-[24px] h-[16px] left-0 right-0" data-name="BottomNavBar">
      <OverlayBorderShadowOverlayBlur />
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start relative size-full" data-name="Summary Dashboard (Refined)">
      <Main />
      <HeaderTopAppBar />
      <BottomNavBar />
    </div>
  );
}
