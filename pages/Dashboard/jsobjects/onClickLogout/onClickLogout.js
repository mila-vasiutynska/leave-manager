export default {
	onClickLogout () {
		storeValue("emp_id", null);
		navigateTo("Login");
		showAlert("Logged out", "success");
	}
}