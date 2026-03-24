import svgPaths from "./svg-5pzbfb2wap";

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[16px] relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] text-center tracking-[2px] uppercase w-[61.41px]">
          <p className="leading-[15px]">Weights</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[16px] relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] text-center tracking-[2px] uppercase w-[50.89px]">
          <p className="leading-[15px]">Cardio</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-b-2 border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[18px] relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[2px] uppercase w-[65.67px]">
          <p className="leading-[15px]">Calories</p>
        </div>
      </div>
    </div>
  );
}

function TabNavigationPreservedStyle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab Navigation (Preserved Style)">
      <div className="content-stretch flex gap-[32px] items-end overflow-clip pb-px relative rounded-[inherit] w-full">
        <Button />
        <Button1 />
        <Button2 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Label">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] tracking-[2px] uppercase w-[112.69px]">
        <p className="leading-[15px]">Total Calories</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[72px] text-white tracking-[-3.6px] w-full">
        <p className="leading-[normal]">1420</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container2 />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip right-0 top-[31px]" data-name="Input">
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[126px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] tracking-[2px] uppercase w-[84.27px]">
        <p className="leading-[15px]">kcal today</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[141px] relative shrink-0 w-full" data-name="Container">
      <Label />
      <Input />
      <Container3 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] tracking-[2px] uppercase w-full">
        <p className="leading-[15px]">Food Rating</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#121212] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px px-px py-[17px] relative rounded-[4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] text-center tracking-[1px] uppercase w-[24.31px]">
        <p className="leading-[15px]">Bad</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#121212] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px px-px py-[17px] relative rounded-[4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[16.91px]">
        <p className="leading-[15px]">Ok</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#121212] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px px-px py-[17px] relative rounded-[4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] text-center tracking-[1px] uppercase w-[34.14px]">
        <p className="leading-[15px]">Good</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container5 />
    </div>
  );
}

function SectionDailyCalorieInputRating() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Section: Daily Calorie Input & Rating">
      <Container />
      <Container4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] tracking-[3px] uppercase w-full">
        <p className="leading-[15px]">Performance Trends</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Calories: This Week</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[120px] items-end justify-between relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#18181b] flex-[1_0_0] h-[76.8px] min-h-px min-w-px rounded-[2px]" data-name="Background" />
      <div className="bg-[#18181b] flex-[1_0_0] h-[57.59px] min-h-px min-w-px rounded-[2px]" data-name="Background" />
      <div className="bg-[#18181b] flex-[1_0_0] h-[102.39px] min-h-px min-w-px rounded-[2px]" data-name="Background" />
      <div className="bg-[#27272a] flex-[1_0_0] h-[121.59px] min-h-px min-w-px rounded-[2px]" data-name="Background" />
      <div className="bg-[#18181b] flex-[1_0_0] h-[89.59px] min-h-px min-w-px rounded-[2px]" data-name="Background" />
      <div className="bg-[#18181b] flex-[1_0_0] h-[70.39px] min-h-px min-w-px rounded-[2px]" data-name="Background" />
      <div className="bg-white flex-[1_0_0] h-[96px] min-h-px min-w-px rounded-[2px]" data-name="Background" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[8px] tracking-[-0.4px] uppercase w-[18.52px]">
        <p className="leading-[12px]">Mon</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[8px] tracking-[-0.4px] uppercase w-[14.86px]">
        <p className="leading-[12px]">Tue</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[8px] tracking-[-0.4px] uppercase w-[17.75px]">
        <p className="leading-[12px]">Wed</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[8px] tracking-[-0.4px] uppercase w-[15.98px]">
        <p className="leading-[12px]">Thu</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[8px] tracking-[-0.4px] uppercase w-[11px]">
        <p className="leading-[12px]">Fri</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[8px] tracking-[-0.4px] uppercase w-[14.53px]">
        <p className="leading-[12px]">Sat</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[8px] tracking-[-0.4px] uppercase w-[16px]">
        <p className="leading-[12px]">Sun</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pr-[0.02px] relative size-full">
        <Container10 />
        <Container11 />
        <Container12 />
        <Container13 />
        <Container14 />
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function WeeklyBarChart() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Weekly Bar Chart">
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Calories: This Month</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pr-[0.06px] relative size-full">
          <div className="bg-[rgba(24,24,27,0.5)] flex-[1_0_0] h-[19.19px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
          <div className="bg-[rgba(24,24,27,0.5)] flex-[1_0_0] h-[25.59px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
          <div className="bg-[rgba(24,24,27,0.5)] flex-[1_0_0] h-[22.39px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
          <div className="bg-[#27272a] flex-[1_0_0] h-[38.39px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Background" />
          <div className="bg-[rgba(24,24,27,0.5)] flex-[1_0_0] h-[35.19px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
          <div className="bg-[rgba(24,24,27,0.5)] flex-[1_0_0] h-[28.8px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
          <div className="bg-[#27272a] flex-[1_0_0] h-[44.8px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Background" />
          <div className="bg-[rgba(24,24,27,0.5)] flex-[1_0_0] h-[41.59px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
          <div className="bg-[rgba(24,24,27,0.5)] flex-[1_0_0] h-[32px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
          <div className="bg-[rgba(24,24,27,0.5)] flex-[1_0_0] h-[25.59px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
          <div className="bg-white flex-[1_0_0] h-[51.19px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Background" />
          <div className="bg-[#27272a] flex-[1_0_0] h-[48px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Background" />
          <div className="bg-[rgba(24,24,27,0.5)] flex-[1_0_0] h-[38.39px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
          <div className="bg-[rgba(24,24,27,0.5)] flex-[1_0_0] h-[32px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
          <div className="bg-[rgba(24,24,27,0.5)] flex-[1_0_0] h-[28.8px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
        </div>
      </div>
    </div>
  );
}

function MonthlyLineBarSummary() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Monthly Line/Bar Summary">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <WeeklyBarChart />
      <MonthlyLineBarSummary />
    </div>
  );
}

function SectionPerformanceTrends() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[16px] relative shrink-0 w-full" data-name="Section: Performance Trends">
      <Heading1 />
      <Container6 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] tracking-[3px] uppercase w-full">
        <p className="leading-[15px]">Body Measurements</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] tracking-[1px] uppercase w-[112.09px]">
          <p className="leading-[15px]">Body Weight (KG)</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-right text-white tracking-[-0.45px] w-[38.88px]">
        <p className="leading-[28px]">78.5</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container21 />
    </div>
  );
}

function Input1() {
  return (
    <div className="relative shrink-0 w-[96px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container20 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#121212] col-1 h-[70px] justify-self-stretch relative rounded-[4px] row-1 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[21px] relative size-full">
          <Label2 />
          <Input1 />
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] tracking-[1px] uppercase w-[81.08px]">
          <p className="leading-[15px]">Body Fat (%)</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-right text-white tracking-[-0.45px] w-[36.73px]">
        <p className="leading-[28px]">14.2</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container24 />
    </div>
  );
}

function Input2() {
  return (
    <div className="relative shrink-0 w-[96px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container23 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#121212] col-1 h-[70px] justify-self-stretch relative rounded-[4px] row-2 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[21px] relative size-full">
          <Label3 />
          <Input2 />
        </div>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] tracking-[1px] uppercase w-[114.8px]">
          <p className="leading-[15px]">Muscle Mass (KG)</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-right text-white tracking-[-0.45px] w-[35.55px]">
        <p className="leading-[28px]">64.1</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container28 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container27 />
    </div>
  );
}

function Input3() {
  return (
    <div className="relative shrink-0 w-[96px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container26 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#121212] col-1 h-[70px] justify-self-stretch relative rounded-[4px] row-3 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[21px] relative size-full">
          <Label4 />
          <Input3 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___70px_70px_70px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center py-[20px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black text-center tracking-[1px] uppercase w-[102.81px]">
        <p className="leading-[15px]">Update Metrics</p>
      </div>
    </div>
  );
}

function SectionBodyMeasurementsLog() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16px] relative shrink-0 w-full" data-name="Section: Body Measurements Log">
      <Heading2 />
      <Container19 />
      <Button6 />
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[672px] relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] pb-[160px] pt-[96px] px-[24px] relative w-full">
        <TabNavigationPreservedStyle />
        <SectionDailyCalorieInputRating />
        <SectionPerformanceTrends />
        <SectionBodyMeasurementsLog />
      </div>
    </div>
  );
}

function Container30() {
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

function Container29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[48px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-1px] uppercase w-[44.66px]">
        <p className="leading-[28px]">Kiné</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[48px]" data-name="Container">
      <Heading />
    </div>
  );
}

function HeaderUpdatedTopAppBarBasedOnComponents() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] content-stretch flex h-[64px] items-center justify-between left-0 px-[24px] top-0 w-[390px]" data-name="Header - Updated TopAppBar based on COMPONENTS_22">
      <Container29 />
      <Container31 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] left-[181.7px] not-italic text-[10px] text-white top-[32px] tracking-[2px] uppercase w-[26.59px]">
        <p className="leading-[15px]">Log</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[22px] relative shrink-0 w-[18px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Margin">
          <path d={svgPaths.p186f5ba0} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] tracking-[2px] uppercase w-[67.56px]">
        <p className="leading-[15px]">Summary</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[8px] relative shrink-0" data-name="Link">
      <Margin />
      <Container32 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[22px] relative shrink-0 w-[18px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Margin">
          <path d={svgPaths.p1424ff80} fill="var(--fill-0, #09090B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[10px] tracking-[2px] uppercase w-[26.59px]">
        <p className="leading-[15px]">Log</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[0.181px] items-center justify-center px-[24px] py-[8px] relative rounded-[12px]" data-name="Link">
      <Margin1 />
      <Container33 />
    </div>
  );
}

function LinkCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center pb-[5.02px] pt-[5.03px] relative shrink-0" data-name="Link:css-transform">
      <div className="flex h-[55.84px] items-center justify-center relative shrink-0 w-[78.32px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "40" } as React.CSSProperties}>
        <div className="flex-none scale-x-105 scale-y-105">
          <Link1 />
        </div>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Margin">
          <path d={svgPaths.p1b609e00} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] tracking-[2px] uppercase w-[76.17px]">
        <p className="leading-[15px]">Analytics</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[8px] relative shrink-0" data-name="Link">
      <Margin2 />
      <Container34 />
    </div>
  );
}

function BottomNavBarFromComponents() {
  return (
    <div className="absolute backdrop-blur-[20px] bg-[rgba(24,24,27,0.6)] bottom-0 content-stretch flex gap-[34px] h-[96px] items-center left-0 pb-[24px] pl-[49.94px] pr-[49.95px] rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_-12px_32px_0px_rgba(0,0,0,0.4)] w-[390px]" data-name="BottomNavBar from COMPONENTS_19">
      <Link />
      <LinkCssTransform />
      <Link2 />
    </div>
  );
}

export default function LogCaloriesNewHeader() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start relative size-full" data-name="Log: Calories (New Header)">
      <Main />
      <HeaderUpdatedTopAppBarBasedOnComponents />
      <BottomNavBarFromComponents />
    </div>
  );
}