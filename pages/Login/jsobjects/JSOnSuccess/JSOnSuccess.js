export default {
	btn_loginonClick () {
	if (q_login.data.length === 1) {
		storeValue("emp_id", q_login.data[0].emp_id);

		navigateTo("Dashboard");
		} else {
			showAlert("Invalid username or PIN", "error");
		}
	}
}