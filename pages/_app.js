import App from "next/app";
import "../styles/globals.css";
import CommonReducer from "../modules/common";

export default function MintLog({Component, pageProps}) {
	CommonReducer.setData(pageProps.response);
	return <Component {...pageProps}/>
}

MintLog.getInitialProps = async appContext => {
	const appProps = await App.getInitialProps(appContext);
	let response = CommonReducer.getData();
	if(!response) response = await (await fetch("http://localhost:3000/api/getInfo")).json();
	return {
		...appProps,
		pageProps: {response}
	}
}