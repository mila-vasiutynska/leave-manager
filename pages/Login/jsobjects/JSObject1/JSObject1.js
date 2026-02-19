export default {
  goToDashboard() {
    if (appsmith.store.emp_id) {
      navigateTo("Dashboard");
    }
  }
}