// Copyright (c) 2026, Abhinaw and contributors
// For license information, please see license.txt

frappe.ui.form.on("Villagers Profile", {
	refresh(frm) {
		set_full_name(frm);
	},
	first_name(frm) {
		set_full_name(frm);
	},
	middle_name(frm) {
		set_full_name(frm);
	},
	last_name(frm) {
		set_full_name(frm);
	},
});

function set_full_name(frm) {
	const full_name = [frm.doc.first_name, frm.doc.middle_name, frm.doc.last_name]
		.filter(Boolean)
		.join(" ");

	if (frm.doc.full_name !== full_name) {
		frm.set_value("full_name", full_name);
	}
}
