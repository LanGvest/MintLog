import SideBar from "../layout/sideBar/sideBar";
import CommonReducer from "../modules/common";
import ViewJSON from "../components/viewJSON/viewJSON";

export default () => {
	let title = "Мышь";
	return (
		<SideBar title={title} keyPath="mouse">
			<ViewJSON object={CommonReducer.getData().data.mouse} title={title}/>
		</SideBar>
	)
}