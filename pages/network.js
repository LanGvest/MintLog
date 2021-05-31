import SideBar from "../layout/sideBar/sideBar";
import CommonReducer from "../modules/common";
import ViewJSON from "../components/viewJSON/viewJSON";

export default () => {
	let title = "Network";
	return (
		<SideBar title={title} keyPath="network">
			<ViewJSON object={CommonReducer.getData().data.network} title={title}/>
		</SideBar>
	)
}