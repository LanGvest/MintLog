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
	try {
		if(!response) response = await (await fetch("https://course-work-delta.vercel.app/api/getInfo")).json();
	} catch {}
	return {
		...appProps,
		pageProps: {response}
	}
}