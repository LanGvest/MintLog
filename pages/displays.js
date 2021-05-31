import SideBar from "../layout/sideBar/sideBar";
import CommonReducer from "../modules/common";
import ViewJSON from "../components/viewJSON/viewJSON";

export default () => {
	let title = "Displays";
	return (
		<SideBar title={title} keyPath="displays">
			<ViewJSON object={CommonReducer.getData().data.displays} title={title}/>
		</SideBar>
	)
}