import SideBar from "../layout/sideBar/sideBar";
import CommonReducer from "../modules/common";
import ViewJSON from "../components/viewJSON/viewJSON";

export default () => {
	let title = "Uptime";
	return (
		<SideBar title={title} keyPath="uptime">
			<ViewJSON object={CommonReducer.getData().data.uptime} title={title}/>
		</SideBar>
	)
}