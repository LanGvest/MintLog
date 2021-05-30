import SideBar from "../layout/sideBar/sideBar";
import CommonReducer from "../modules/common";
import ViewJSON from "../components/viewJSON/viewJSON";

export default () => {
	let title = "Процессы";
	return (
		<SideBar title={title} keyPath="processes">
			<ViewJSON object={CommonReducer.getData().data.processes} title={title}/>
		</SideBar>
	)
}