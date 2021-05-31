import SideBar from "../layout/sideBar/sideBar";
import CommonReducer from "../modules/common";
import ViewJSON from "../components/viewJSON/viewJSON";

export default () => {
	let title = "Summary";
	return (
		<SideBar title={title}>
			<ViewJSON object={CommonReducer.getData().data} title={title}/>
		</SideBar>
	)
}