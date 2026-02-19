export default {
	b_submit_leaveonClick () {
		if (!sel_leave_type.selectedOptionValue) {
			showAlert("Please select leave type", "error");
			return;
		}
		if (!dp_start.selectedDate || !dp_end.selectedDate) {
			showAlert("Please select start and end dates", "error");
			return;
		}
		if (moment(dp_end.selectedDate).isBefore(moment(dp_start.selectedDate), "day")) {
			showAlert("End date must be after start date", "error");
			return;
		}
		const hours = Number(inp_hours.text);
		if (!Number.isFinite(hours) || hours <= 0) {
			showAlert("Hours per day must be a valid number", "error");
			return;
		}
	}
}