import SideBar from "../layout/sideBar/sideBar";
import CommonReducer from "../modules/common";
import ViewJSON from "../components/viewJSON/viewJSON";

export default () => {
	let title = "BIOS";
	return (
		<SideBar title={title} keyPath="bios">
			<ViewJSON object={CommonReducer.getData().data.bios} title={title}/>
		</SideBar>
	)
}