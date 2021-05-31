import Head from "next/head";
import Icon from "@mdi/react";
import {mdiLeaf, mdiChevronRight, mdiCloudUpload, mdiFileDownload} from "@mdi/js";
import Link from "next/link";
import CommonReducer from "../../modules/common";

const routes = [
	{
		title: "Полная информация",
		href: "/"
	},
	{
		title: "BIOS",
		href: "/bios"
	},
	{
		title: "Системная плата",
		href: "/baseboard"
	},
	{
		title: "Центральный процессор",
		href: "/cpu"
	},
	{
		title: "Видеоадаптеры",
		href: "/videoControllers"
	},
	{
		title: "Внешние накопители",
		href: "/disks"
	},
	{
		title: "Разделы файловой системы",
		href: "/fileSystem"
	},
	{
		title: "Мониторы",
		href: "/displays"
	},
	{
		title: "Клавиатура",
		href: "/keyboard"
	},
	{
		title: "Мышь",
		href: "/mouse"
	},
	{
		title: "Сетевые адаптеры",
		href: "/network"
	},
	{
		title: "Длительность текущей сессии",
		href: "/session"
	},
	{
		title: "Время непрерывной работы",
		href: "/uptime"
	},
	{
		title: "Пользователи",
		href: "/users"
	},
	{
		title: "Процессы",
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
				<p className="hint">Данные были получены за {~~(CommonReducer.getData().time/1000)} сек.</p>
			</aside>
			<main>
				<div className="toolBar">
					<h1 style={{flex: 1}}>{title||"MintLog"}{location.hostname !== "localhost" && <span className="demo">DEMO</span>}</h1>
					<Icon title={`Скачать ${keyPath||"summary"}.json`} path={mdiFileDownload} color="inherit" onClick={() => {
						let blob = new Blob([JSON.stringify(keyPath ? CommonReducer.getData().data[keyPath] : CommonReducer.getData().data, null, 4)], {type: "text/plain"});
						let link = document.createElement("a");
						link.setAttribute("href", URL.createObjectURL(blob));
						link.setAttribute("download", `${keyPath||"summary"}.json`);
						link.click();
					}}/>
					<Icon title={`Отправить ${keyPath||"summary"}.json на сервер`} path={mdiCloudUpload} color="inherit" onClick={() => {
						if(location.hostname !== "localhost") {
							alert("[ERROR]: Эта возможность доступна только разработчикам!");
						} else {
							fetch(location.origin + "/api/saveFile", {
								method: "POST",
								body: JSON.stringify({
									fileName: `${keyPath||"summary"}.json`,
									content: JSON.stringify(keyPath ? CommonReducer.getData().data[keyPath] : CommonReducer.getData().data, null, 4)
								})
							}).then(res => {
								if(res.ok) {
									alert("[OK]: Файл успешно сохранён на сервере!");
								} else {
									alert("[ERROR]: Не удалось сохранить файл на сервере!");
								}
							})
						}
					}}/>
				</div>
				<hr/>
				{children}
				<p className="madeBy">MintLog: Логвинец Вячеслав & Мироненко Екатерина</p>
			</main>
		</>
	)
}