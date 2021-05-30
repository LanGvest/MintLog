import SideBar from "../layout/sideBar/sideBar";
import CommonReducer from "../modules/common";
import ViewJSON from "../components/viewJSON/viewJSON";

export default () => {
	let title = "Видеоадаптеры";
	return (
		<SideBar title={title} keyPath="videoControllers">
			<ViewJSON object={CommonReducer.getData().data.videoControllers} title={title}/>
		</SideBar>
	)
}