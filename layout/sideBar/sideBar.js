import Head from "next/head";
import Icon from "@mdi/react";
import {mdiLeaf, mdiChevronRight, mdiCloudUpload, mdiFileDownload} from "@mdi/js";
import Link from "next/link";
import CommonReducer from "../../modules/common";

const routes = [
	{
		title: "Summary",
		href: "/"
	},
	{
		title: "BIOS",
		href: "/bios"
	},
	{
		title: "Baseboard",
		href: "/baseboard"
	},
	{
		title: "CPU",
		href: "/cpu"
	},
	{
		title: "Video controllers",
		href: "/videoControllers"
	},
	{
		title: "Disks",
		href: "/disks"
	},
	{
		title: "File system",
		href: "/fileSystem"
	},
	{
		title: "Displays",
		href: "/displays"
	},
	{
		title: "Keyboard",
		href: "/keyboard"
	},
	{
		title: "Mouse",
		href: "/mouse"
	},
	{
		title: "Network",
		href: "/network"
	},
	{
		title: "Logon session",
		href: "/session"
	},
	{
		title: "Uptime",
		href: "/uptime"
	},
	{
		title: "Users",
		href: "/users"
	},
	{
		title: "Processes",
		href: "/processes"
	}
]

export default function SideBar({title, children, keyPath = null}) {
	return (
		<>
			<Head>
				<title>{title ? `${title} | MintLog` : "MintLog"}</title>
			</Head>
			<aside>
				<div className="logo">
					<p><span>Mint</span>Log</p>
					<Icon path={mdiLeaf} color="var(--color-primary)"/>
				</div>
				{
					routes.map(route => (
						<Link href={route.href}>
							<a className="route">
								<p>{route.title}</p>
								<Icon path={mdiChevronRight} color="inherit"/>
							</a>
						</Link>
					))
				}
				<p className="hint">Data was collected in {!(~~(CommonReducer.getData().time/1000)) ? `${CommonReducer.getData().time}ms` : `${~~(CommonReducer.getData().time/1000)}s`}</p>
			</aside>
			<main>
				<div className="toolBar">
					<h1 style={{flex: 1}}>{title||"MintLog"}{location.hostname !== "localhost" && <span className="demo">DEMO</span>}</h1>
					<Icon title={`Download ${keyPath||"summary"}.json`} path={mdiFileDownload} color="inherit" onClick={() => {
						let blob = new Blob([JSON.stringify(keyPath ? CommonReducer.getData().data[keyPath] : CommonReducer.getData().data, null, 4)], {type: "text/plain"});
						let link = document.createElement("a");
						link.setAttribute("href", URL.createObjectURL(blob));
						link.setAttribute("download", `${keyPath||"summary"}.json`);
						link.click();
					}}/>
					<Icon title={`Send ${keyPath||"summary"}.json on the server`} path={mdiCloudUpload} color="inherit" onClick={() => {
						if(location.hostname !== "localhost") {
							alert("[ERROR]: This feature is only available to developers!");
						} else {
							fetch(location.origin + "/api/saveFile", {
								method: "POST",
								body: JSON.stringify({
									fileName: `${keyPath||"summary"}.json`,
									content: JSON.stringify(keyPath ? CommonReducer.getData().data[keyPath] : CommonReducer.getData().data, null, 4)
								})
							}).then(res => {
								if(res.ok) {
									alert("[OK]: The file was successfully saved on the server!");
								} else {
									alert("[ERROR]: Failed to save the file on the server!");
								}
							})
						}
					}}/>
				</div>
				<hr/>
				{children}
				<p className="madeBy">Made by Lahvinets Viachaslau & Mironenka Katsiaryna</p>
			</main>
		</>
	)
}