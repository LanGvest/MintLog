import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MintLogDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href={"favicon.ico"}/>
					<title>MintLog</title>
					<meta httpEquiv="Content-type" content="text/html;charset=UTF-8"/>
					<meta charSet="UTF-8"/>
					<meta name="viewport" content="width=device-width"/>
					<meta name="format-detection" content="telephone=no"/>
					<meta name="description" content="Collecting characteristics about the operating system and hardware."/>
					<meta property="og:locale" content="ru_RU"/>
					<meta property="og:type" content="article"/>
					<meta property="og:title" content="MintLog"/>
					<meta property="og:description" content="Collecting characteristics about the operating system and hardware."/>
					<meta property="og:image" content="preview.png"/>
					<meta property="og:site_name" content="MintLog"/>
					<meta name="twitter:card" content="summary"/>
					<meta name="twitter:site" content="MintLog"/>
					<meta name="twitter:title" content="MintLog"/>
					<meta name="twitter:description" content="Collecting characteristics about the operating system and hardware."/>
					<meta name="twitter:image" content="preview.png"/>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		)
	}
}