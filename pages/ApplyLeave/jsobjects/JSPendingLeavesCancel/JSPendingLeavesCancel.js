export default {
	tb_pending_leavesActionCancelonClick () {
  const rows = q_cancel_pending_leave.data;
  if (!rows || rows.length === 0) {
    showAlert("Nothing cancelled (maybe already approved/cancelled).", "warning");
    return;
  }
  showAlert("Leave request cancelled.", "success");
  q_pending_leaves.run();
	}
}