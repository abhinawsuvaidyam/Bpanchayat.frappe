// Copyright (c) 2026, Abhinaw and contributors
// For license information, please see license.txt

frappe.ui.form.on("Public Complaint", {
    refresh(frm) {
        toggle_anonymous_fields(frm);
        getting_user_info(frm);
    },

    is_anonymous(frm) {
        toggle_anonymous_fields(frm);
    }
});

function toggle_anonymous_fields(frm) {
    if (frm.doc.is_anonymous) {

        frm.set_df_property("mobile_number", "reqd", 0);
        frm.set_df_property("submitted_by", "reqd", 0);

        frm.set_df_property("mobile_number", "hidden", 1);
        frm.set_df_property("submitted_by", "hidden", 1);

    } else {

        frm.set_df_property("mobile_number");
        frm.set_df_property("submitted_by");

        frm.set_df_property("mobile_number", "hidden", 0);
        frm.set_df_property("submitted_by", "hidden", 0);
    }

    frm.refresh_fields([
        "mobile_number",
        "submitted_by"
    ]);
}

async function getting_user_info(frm) {

    const r = await frappe.call({
        method: "bpanchayat.controllers.api.get_villagers_profile",
    });

    if (!r.message) return;

    Object.entries(r.message).forEach(([field, value]) => {

        if (frm.fields_dict[field]) {
            frm.set_value(field, value);
        }

    });
}