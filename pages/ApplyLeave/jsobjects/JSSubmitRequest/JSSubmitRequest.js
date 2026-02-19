export default {
	b_submit_leaveonClick () {
		{{
  const rows = q_create_request.data;

  if (!rows || rows.length === 0) {
    showAlert("This leave overlaps with an existing request (Pending or Approved). Please adjust the dates.", "warning");
    return;
  }

  showAlert("Leave request submitted.", "success");
  q_pending_leaves.run(); 
}}
	}
}