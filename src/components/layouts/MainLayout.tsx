import { ReactNode } from "react";

const MainLayout = ({ children }: { children?: ReactNode }) => (
  <div className="bg-gray-100 min-h-screen w-full">
    {children}
  </div>
);

export default MainLayout;
