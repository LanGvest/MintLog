import "../styles/globals.css";
import CommonReducer from "../modules/common";
import {useEffect, useState} from "react";
import Icon from "@mdi/react";
import {mdiLeaf} from "@mdi/js";
import {CircleSpinner} from "react-spinners-kit";

export default function MintLog({Component, pageProps}) {
	const [isData, setIsData] = useState(false);
	useEffect(() => {
		(async () => {
			Promise.all([
				new Promise(async resolve => {
					resolve(await (await fetch(location.origin + "/api/getInfo")).json());
				}),
				new Promise(resolve => {
					setTimeout(resolve, 2000);
				})
			]).then(set => {
				CommonReducer.setData(set[0]);
				setIsData(() => true);
			})
		})()
	}, [])
	return isData ? <Component {...pageProps}/> : (
		<div className="mainCenter">
			<div className="center">
				<div className="logo bigLogo">
					<p><span>Mint</span>Log</p>
					<Icon path={mdiLeaf} color="var(--color-primary)"/>
				</div>

			</div>
			<div className="bottom">
				<CircleSpinner size={15}/>
				<p style={{marginLeft: "12px", marginTop: "2px"}}>Сбор данных об устройстве...</p>
			</div>
		</div>
	)
}