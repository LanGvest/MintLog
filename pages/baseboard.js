import SideBar from "../layout/sideBar/sideBar";
import CommonReducer from "../modules/common";
import ViewJSON from "../components/viewJSON/viewJSON";

export default () => {
	let title = "Baseboard";
	return (
		<SideBar title={title} keyPath="baseboard">
			<ViewJSON object={CommonReducer.getData().data.baseboard} title={title}/>
		</SideBar>
	)
}