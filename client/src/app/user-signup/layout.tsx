import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function SignUpLayout({ children }: LayoutProps) {
    return(
        <div>
            {children}
        </div>
    );
}