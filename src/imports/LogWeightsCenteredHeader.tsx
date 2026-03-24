import svgPaths from "./svg-l9ngwq44lh";

function Button() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px pb-[14px] pt-[12px] relative" data-name="Button">
      <div aria-hidden="true" className="absolute border-b-2 border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[64.45px]">
        <p className="leading-[24px]">Weights</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px pb-[14px] pt-[12px] relative" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(198,198,198,0.4)] text-center w-[49.7px]">
        <p className="leading-[24px]">Cardio</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px pb-[14px] pt-[12px] relative" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(198,198,198,0.4)] text-center w-[61.97px]">
        <p className="leading-[24px]">Calories</p>
      </div>
    </div>
  );
}

function TabNavigation() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Tab Navigation">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[30px] tracking-[-1.5px] uppercase w-[114.33px]">
        <p className="leading-[36px]">Target</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[10px] tracking-[1px] uppercase w-[139.72px]">
        <p className="leading-[15px]">Select Muscle Group</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[29.7px] relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123 29.7">
        <g id="Container">
          <path d={svgPaths.p241fe240} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[20px] tracking-[-0.5px] uppercase w-full">
          <p className="leading-[28px]">Chest</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#2a2a2a] col-1 justify-self-stretch relative rounded-[4px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative w-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[12px] tracking-[1.2px] uppercase w-[38.7px]">
        <p className="leading-[16px]">Back</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #C6C6C6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#1b1b1b] col-1 h-[80.5px] justify-self-stretch relative rounded-[4px] row-1 shrink-0" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[12px] tracking-[1.2px] uppercase w-[35.75px]">
        <p className="leading-[16px]">Legs</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #C6C6C6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#1b1b1b] col-1 h-[80.5px] justify-self-stretch relative rounded-[4px] row-2 shrink-0" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container8 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-2 gap-x-[12px] gap-y-[12px] grid grid-cols-[_173px] grid-rows-[repeat(2,minmax(0,1fr))] justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Background />
      <Background1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[12px] tracking-[1.2px] uppercase w-[142.16px]">
        <p className="leading-[16px]">{`Shoulders & Arms`}</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #C6C6C6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#1b1b1b] col-[1/span_2] h-[56px] justify-self-stretch relative rounded-[4px] row-2 shrink-0" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__173px_56px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <Container5 />
      <Background2 />
    </div>
  );
}

function SectionMuscleGroupSelectionEditorialBento() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section - Muscle Group Selection (Editorial Bento)">
      <Container />
      <Container2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[12px] tracking-[3.6px] uppercase w-full">
        <p className="leading-[16px]">New Entry: Bench Press</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip right-[15px] top-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[72px] justify-center leading-[0] not-italic relative shrink-0 text-[#353535] text-[60px] tracking-[-3px] w-[79.31px]">
        <p className="leading-[normal]">00</p>
      </div>
    </div>
  );
}

function Container16() {
  return <div className="flex-[1_0_0] h-[72px] min-h-px min-w-px" data-name="Container" />;
}

function RectangleAlignStretch() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
      <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="Rectangle" />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex items-center left-0 right-0 top-0" data-name="Container">
      <Container16 />
      <div className="flex flex-row items-center self-stretch">
        <RectangleAlignStretch />
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute h-[72px] left-0 overflow-clip top-0 w-[128px]" data-name="Input">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] left-[136px] not-italic text-[#c6c6c6] text-[20px] top-[51px] tracking-[2px] uppercase w-[32.61px]">
        <p className="leading-[28px]">KG</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Heading1 />
        <Container13 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Repetitions</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[2px] relative shrink-0 w-[14px]" data-name="Button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
        <g id="Button">
          <path d="M0 2V0H14V2H0V2" fill="var(--fill-0, #C6C6C6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[20px] w-[21.98px]">
        <p className="leading-[28px]">12</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Button">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, #C6C6C6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#1b1b1b] relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[16.01px] py-[8px] relative w-full">
          <Button3 />
          <Container19 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Label />
      <Background3 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[32px] py-[16px] relative rounded-[12px] shadow-[0px_12px_32px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[12px] text-center tracking-[1.2px] uppercase w-[59.19px]">
        <p className="leading-[16px]">Log Set</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0" data-name="Button:margin">
      <Button5 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container18 />
        <ButtonMargin />
      </div>
    </div>
  );
}

function SectionTechnicalEntryPoint() {
  return (
    <div className="bg-[#0e0e0e] relative rounded-[8px] shrink-0 w-full" data-name="Section - Technical Entry Point">
      <div aria-hidden="true" className="absolute border border-[rgba(71,71,71,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[33px] pt-[41px] px-[33px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[8px_0_0_0] rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Section - Technical Entry Point:shadow" />
        <Container12 />
        <Container17 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[20px] tracking-[-0.5px] uppercase w-[135.09px]">
        <p className="leading-[28px]">Recent Logs</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p22876fc0} fill="var(--fill-0, #C6C6C6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[19.8px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8 19.8">
        <g id="Container">
          <path d={svgPaths.p2246b680} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#353535] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Container23 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[14px] tracking-[-0.35px] uppercase w-full">
        <p className="leading-[20px]">Dumbbell Flyes</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">3 Sets • 12 Reps</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading3 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[18px] text-right tracking-[-0.9px] w-[38.14px]">
        <p className="leading-[28px]">24.5</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[8px] text-right tracking-[0.8px] uppercase w-[27.7px]">
        <p className="leading-[12px]">Kilos</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[38.14px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function LogCard() {
  return (
    <div className="bg-[#1b1b1b] relative rounded-[4px] shrink-0 w-full" data-name="Log Card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <Background4 />
          <Container24 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[19.8px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8 19.8">
        <g id="Container">
          <path d={svgPaths.p2246b680} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#353535] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Container29 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[14px] tracking-[-0.35px] uppercase w-full">
        <p className="leading-[20px]">Incline Press</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">4 Sets • 10 Reps</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading4 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[18px] text-right tracking-[-0.9px] w-[39.77px]">
        <p className="leading-[28px]">80.0</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[8px] text-right tracking-[0.8px] uppercase w-[27.7px]">
        <p className="leading-[12px]">Kilos</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[39.77px]" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function LogCard1() {
  return (
    <div className="bg-[#1b1b1b] relative rounded-[4px] shrink-0 w-full" data-name="Log Card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <Background5 />
          <Container30 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 size-[19.8px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8 19.8">
        <g id="Container">
          <path d={svgPaths.p2246b680} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#353535] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Container35 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[14px] tracking-[-0.35px] uppercase w-full">
        <p className="leading-[20px]">Cable Crossover</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">3 Sets • 15 Reps</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading5 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e2] text-[18px] text-right tracking-[-0.9px] w-[34.77px]">
        <p className="leading-[28px]">15.0</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[8px] text-right tracking-[0.8px] uppercase w-[27.7px]">
        <p className="leading-[12px]">Kilos</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[34.77px]" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function LogCard2() {
  return (
    <div className="bg-[#1b1b1b] relative rounded-[4px] shrink-0 w-full" data-name="Log Card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <Background6 />
          <Container36 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <LogCard />
      <LogCard1 />
      <LogCard2 />
    </div>
  );
}

function SectionRecentLogsEditorialList() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[8px] relative shrink-0 w-full" data-name="Section - Recent Logs (Editorial List)">
      <Container20 />
      <Container22 />
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[512px] relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[inherit] pt-[96px] px-[16px] relative w-full">
        <TabNavigation />
        <SectionMuscleGroupSelectionEditorialBento />
        <SectionTechnicalEntryPoint />
        <SectionRecentLogsEditorialList />
      </div>
    </div>
  );
}

function Container41() {
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

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[4px] uppercase w-[64.66px]">
        <p className="leading-[28px]">Kiné</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex h-[28px] items-start justify-center relative shrink-0 w-[309.98px]" data-name="Container">
      <Container43 />
    </div>
  );
}

function HeaderTopNavigationAnchor() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(0,0,0,0.8)] content-stretch flex h-[64px] items-center left-0 px-[16px] top-0 w-[390px]" data-name="Header - Top Navigation Anchor">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3e7464c0} fill="var(--fill-0, #E2E2E2)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[37.86px] p-[12px] top-1/2" data-name="Button">
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 size-[19.8px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8 19.8">
        <g id="Container">
          <path d={svgPaths.p2246b680} fill="var(--fill-0, #1A1C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[12px]" data-name="Button">
      <Container45 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p22876fc0} fill="var(--fill-0, #E2E2E2)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[189.36px] p-[12px] top-1/2" data-name="Button">
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #E2E2E2)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[265.11px] p-[12px] top-1/2" data-name="Button">
      <Container47 />
    </div>
  );
}

function BottomNavigationShell() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(53,53,53,0.6)] bottom-[24px] h-[64px] left-[19.5px] rounded-[12px] shadow-[0px_12px_32px_0px_rgba(0,0,0,0.4)] w-[351px]" data-name="Bottom Navigation Shell">
      <Button6 />
      <div className="-translate-y-1/2 absolute flex items-center justify-center left-[111.21px] size-[48.18px] top-1/2" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none scale-x-[110.00000000000001%] scale-y-[110.00000000000001%]">
          <Button7 />
        </div>
      </div>
      <Button8 />
      <Button9 />
    </div>
  );
}

export default function LogWeightsCenteredHeader() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start pb-[128px] relative size-full" data-name="Log: Weights (Centered Header)">
      <Main />
      <HeaderTopNavigationAnchor />
      <BottomNavigationShell />
    </div>
  );
}