import svgPaths from "./svg-mh0mxnztiy";

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[10px] tracking-[1px] uppercase w-[53.33px]">
        <p className="leading-[15px]">Weights</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[1px] uppercase w-[44.89px]">
        <p className="leading-[15px]">Cardio</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pt-[4px] relative shrink-0 w-[4px]" data-name="Margin">
      <div className="bg-white rounded-[12px] shrink-0 size-[4px]" data-name="Background" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Link1 />
      <Margin />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[10px] tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px]">Calories</p>
      </div>
    </div>
  );
}

function TabNavigation() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-end left-[16px] right-[16px] top-[96px]" data-name="Tab Navigation">
      <Link />
      <Container />
      <Link2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-1.6px] w-full">
        <p className="leading-[32px]">LOG PERFORMANCE</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[12px] tracking-[2.4px] uppercase w-full">
        <p className="leading-[18px]">Cardio • Session 042</p>
      </div>
    </div>
  );
}

function PageEditorialHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] right-[16px] top-[167px]" data-name="Page Editorial Header">
      <Heading />
      <Container1 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[12px] tracking-[3.6px] uppercase w-full">
        <p className="leading-[18px]">Distance</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip right-[54.78px] top-0" data-name="Input">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[87px] justify-center leading-[0] not-italic relative shrink-0 text-[72px] text-white tracking-[-3.6px] w-[185.08px]">
        <p className="leading-[normal]">12.45</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[87px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black',sans-serif] font-black h-[36px] justify-center leading-[0] left-[319.22px] not-italic text-[#c6c6c6] text-[24px] top-[62px] tracking-[-1.2px] w-[38.78px]">
        <p className="leading-[36px]">KM</p>
      </div>
    </div>
  );
}

function SectionMetricInputGroupDistance() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] pt-[16px] right-[16px] top-[273px]" data-name="Section - Metric Input Group: Distance">
      <Label />
      <Container2 />
      <div className="bg-[rgba(71,71,71,0.2)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[12px] tracking-[3.6px] uppercase w-full">
        <p className="leading-[18px]">Duration</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[68px] justify-center leading-[0] not-italic relative shrink-0 text-[56px] text-right text-white tracking-[-2.8px] w-[68.63px]">
        <p className="leading-[normal]">58</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0 w-[80px]" data-name="Input">
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[68px] relative shrink-0 w-[115.3px]" data-name="Container">
      <Input1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[88px] not-italic text-[#c6c6c6] text-[12px] top-[50px] tracking-[1.2px] uppercase w-[27.3px]">
        <p className="leading-[18px]">MIN</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[68px] justify-center leading-[0] not-italic relative shrink-0 text-[56px] text-right text-white tracking-[-2.8px] w-[55.94px]">
        <p className="leading-[normal]">12</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0 w-[80px]" data-name="Input">
      <Container7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[68px] relative shrink-0 w-[115.63px]" data-name="Container">
      <Input2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[88px] not-italic text-[#c6c6c6] text-[12px] top-[50px] tracking-[1.2px] uppercase w-[27.63px]">
        <p className="leading-[18px]">SEC</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function SectionMetricInputGroupTime() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] py-[16px] right-[16px] top-[459px]" data-name="Section - Metric Input Group: Time">
      <Label1 />
      <Container3 />
      <div className="bg-[rgba(71,71,71,0.2)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Avg Pace</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline leading-[0] not-italic relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[32px] justify-center relative shrink-0 text-[24px] text-white w-[71.64px]">
        <p className="leading-[32px]">{`4'42"`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center relative shrink-0 text-[#c6c6c6] text-[10px] uppercase w-[20.39px]">
        <p className="leading-[15px]">/km</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#121212] col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Label2 />
        <Paragraph />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Intensity</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-[89.29px]">
        <p className="leading-[32px]">ZONE 4</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#121212] col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Label3 />
        <Container8 />
      </div>
    </div>
  );
}

function GridOfSecondaryMetrics() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] gap-x-px gap-y-px grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_111px] left-[16px] overflow-clip right-[16px] rounded-[8px] top-[642px]" data-name="Grid of Secondary Metrics">
      <Background />
      <Background1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase w-full">
        <p className="leading-[18px]">HEART RATE TELEMETRY</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[4px] h-[112px] items-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[rgba(255,255,255,0.1)] h-[51.19px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px]" data-name="Overlay" />
      <div className="bg-[rgba(255,255,255,0.1)] h-[70.39px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px]" data-name="Overlay" />
      <div className="bg-[rgba(255,255,255,0.2)] h-[89.59px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px]" data-name="Overlay" />
      <div className="bg-white h-[108.8px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px]" data-name="Background" />
      <div className="bg-white h-[121.59px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px]" data-name="Background" />
      <div className="bg-white h-[115.19px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px]" data-name="Background" />
      <div className="bg-[rgba(255,255,255,0.6)] h-[102.39px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px]" data-name="Overlay" />
      <div className="bg-[rgba(255,255,255,0.4)] h-[83.19px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px]" data-name="Overlay" />
      <div className="bg-[rgba(255,255,255,0.2)] h-[64px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px]" data-name="Overlay" />
      <div className="bg-[rgba(255,255,255,0.1)] h-[57.59px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px]" data-name="Overlay" />
      <div className="bg-[rgba(255,255,255,0.1)] h-[51.19px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px]" data-name="Overlay" />
      <div className="bg-[rgba(255,255,255,0.1)] h-[44.8px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px]" data-name="Overlay" />
      <div className="bg-[rgba(255,255,255,0.4)] h-[76.8px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px]" data-name="Overlay" />
      <div className="bg-white h-[108.8px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px]" data-name="Background" />
      <div className="bg-white h-full rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[8px]" data-name="Background" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[10px] tracking-[1px] uppercase w-[35.31px]">
        <p className="leading-[15px]">00:00</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[10px] tracking-[1px] uppercase w-[76.97px]">
        <p className="leading-[15px]">164 BPM AVG</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[10px] tracking-[1px] uppercase w-[31.69px]">
        <p className="leading-[15px]">58:12</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[15px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative w-full">
        <Heading1 />
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function SectionPerformanceGraphIntegrationAsymmetric() {
  return (
    <div className="absolute bg-[#121212] left-[16px] right-[16px] rounded-[8px] top-[801px]" data-name="Section - Performance Graph Integration (Asymmetric)">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[33px] pt-[49px] px-[33px] relative rounded-[inherit] w-full">
        <div className="absolute inset-[17px_1px_1px_1px] opacity-5" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 356 273\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(44.863 0 0 44.863 356 0)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
        <Container9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ButtonFinalSubmission() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[16px] py-[20px] right-[16px] rounded-[12px] shadow-[0px_12px_32px_0px_rgba(0,0,0,0.4)] top-[1172px]" data-name="Button - Final Submission">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center tracking-[4.8px] uppercase w-[175.91px]">
        <p className="leading-[18px]">Commit Session</p>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="h-[1230px] max-w-[672px] relative shrink-0 w-full" data-name="Main">
      <TabNavigation />
      <PageEditorialHeader />
      <SectionMetricInputGroupDistance />
      <SectionMetricInputGroupTime />
      <GridOfSecondaryMetrics />
      <SectionPerformanceGraphIntegrationAsymmetric />
      <ButtonFinalSubmission />
    </div>
  );
}

function Container16() {
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

function Container15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[48px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.9px] uppercase w-[34.52px]">
        <p className="leading-[28px]">LOG</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[48px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-right text-white tracking-[1.4px] uppercase w-[39.67px]">
        <p className="leading-[20px]">Kiné</p>
      </div>
    </div>
  );
}

function HeaderTopAppBarShell() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] content-stretch flex h-[64px] items-center justify-between left-0 pl-[24px] pr-[24.02px] top-0 w-[390px]" data-name="Header - TopAppBar Shell">
      <Container15 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[38.61px] p-[12px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[24px] w-[24.103px]">
        <p className="leading-[24px]">camping</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[113.86px] p-[12px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[24px] w-[24.103px]">
        <p className="leading-[24px]">fitness_center</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="relative size-[42px]" data-name="Background">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Background">
          <rect fill="var(--fill-0, white)" height="42" rx="12" width="42" />
          <path d={svgPaths.p2981bf00} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[264.36px] p-[12px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[24px] w-[24.103px]">
        <p className="leading-[24px]">person</p>
      </div>
    </div>
  );
}

function BottomNavBarShell() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] bottom-[24px] h-[66px] left-[19.5px] rounded-[12px] w-[351px]" data-name="BottomNavBar Shell">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_32px_0px_black]" />
      <Container19 />
      <Container20 />
      <div className="-translate-y-1/2 absolute flex items-center justify-center left-[186.71px] size-[46.2px] top-1/2" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none scale-x-[110.00000000000001%] scale-y-[110.00000000000001%]">
          <Background2 />
        </div>
      </div>
      <Container21 />
    </div>
  );
}

export default function LogCardioNewHeader() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start pb-[128px] relative size-full" data-name="Log: Cardio (New Header)">
      <Main />
      <HeaderTopAppBarShell />
      <BottomNavBarShell />
    </div>
  );
}