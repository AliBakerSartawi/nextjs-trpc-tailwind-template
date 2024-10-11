import Head from "next/head";
import type { ReactNode } from "react";
import { inter } from "src/styles/font";

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
	return (
		<>
			<Head>
				<title>Realife</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={inter.className}>{children}</main>
		</>
	);
};
