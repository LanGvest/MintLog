import SideBar from "../layout/sideBar/sideBar";
import CommonReducer from "../modules/common";
import ViewJSON from "../components/viewJSON/viewJSON";

export default () => {
	let title = "Пользователи";
	return (
		<SideBar title={title} keyPath="users">
			<ViewJSON object={CommonReducer.getData().data.users} title={title}/>
		</SideBar>
	)
}