import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function ActivationLayout({ children }: LayoutProps) {
    return(
        <div>
            {children}
        </div>
    );
}