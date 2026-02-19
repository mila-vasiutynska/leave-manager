export default {
  checkLogin() {
    if (appsmith.store.emp_id) {
      navigateTo("Dashboard");
    }
  }
}