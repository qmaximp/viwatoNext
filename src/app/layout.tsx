import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "@/style/global.scss";
import Header from '@/components/Header/Header';
import Wrapper from "@/components/Wrapper/Wrapper";



const montserratAlternates = Montserrat_Alternates({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "wivato",
	description:
		"wivato - лучшая интернет площадка!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={montserratAlternates.className}>
				<Wrapper>
					{children}
				</Wrapper>
			</body>
		</html>
	);
}