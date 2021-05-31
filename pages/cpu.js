import SideBar from "../layout/sideBar/sideBar";
import CommonReducer from "../modules/common";
import ViewJSON from "../components/viewJSON/viewJSON";

export default () => {
	let title = "CPU";
	return (
		<SideBar title={title} keyPath="cpu">
			<ViewJSON object={CommonReducer.getData().data.cpu} title={title}/>
		</SideBar>
	)
}