import SideBar from "../layout/sideBar/sideBar";
import CommonReducer from "../modules/common";
import ViewJSON from "../components/viewJSON/viewJSON";

export default () => {
	let title = "Внешние накопители";
	return (
		<SideBar title={title} keyPath="disks">
			<ViewJSON object={CommonReducer.getData().data.disks} title={title}/>
		</SideBar>
	)
}