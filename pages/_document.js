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
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		)
	}
}