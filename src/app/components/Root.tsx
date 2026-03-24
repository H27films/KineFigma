import { Outlet } from "react-router";

export default function Root() {
  return (
    <div className="bg-black min-h-screen w-full flex items-start justify-center">
      <div className="max-w-[390px] w-full min-h-screen relative">
        <Outlet />
      </div>
    </div>
  );
}
