import SideBar from "../layout/sideBar/sideBar";
import CommonReducer from "../modules/common";
import ViewJSON from "../components/viewJSON/viewJSON";

export default () => {
	let title = "Клавиатура";
	return (
		<SideBar title={title} keyPath="keyboard">
			<ViewJSON object={CommonReducer.getData().data.keyboard} title={title}/>
		</SideBar>
	)
}