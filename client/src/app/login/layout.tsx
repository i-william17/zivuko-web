import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function SignInLayout({ children }: LayoutProps) {
    return(
        <div className="flex justify-center items-center h-screen">
            {children}
        </div>
    );
}