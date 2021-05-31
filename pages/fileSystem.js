import SideBar from "../layout/sideBar/sideBar";
import CommonReducer from "../modules/common";
import ViewJSON from "../components/viewJSON/viewJSON";

export default () => {
	let title = "File system";
	return (
		<SideBar title={title} keyPath="fileSystem">
			<ViewJSON object={CommonReducer.getData().data.fileSystem} title={title}/>
		</SideBar>
	)
}