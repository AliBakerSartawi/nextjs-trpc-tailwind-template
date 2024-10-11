import type { AppProps } from "next/app";
import type { ReactNode } from "react";

interface ProvidersProps {
	pageProps: AppProps["pageProps"];
	children: ReactNode;
}

export default function Providers({ children, pageProps }: ProvidersProps) {
	return <>{children}</>;
}
