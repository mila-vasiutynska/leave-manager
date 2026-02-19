export default {
  goToLogin() {
    if (!appsmith.store.emp_id) {
      navigateTo("Login");
    }
  }
}