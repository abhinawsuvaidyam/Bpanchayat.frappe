import frappe

"""API endpoints for Bihar Panchayat app."""
"""for the doctype Villagers Profile"""
@frappe.whitelist()
def get_villagers_profile():

    villagers_profile = frappe.get_value(
        "Villagers Profile",
        {"user": frappe.session.user},
        "*",
        as_dict=True
    )

    return villagers_profile


@frappe.whitelist()
def update_villagers_profile(data):

    form_dict = frappe.parse_json(data)

    villagers_profile_name = frappe.db.get_value(
        "Villagers Profile",
        {"user": frappe.session.user}
    )

    if villagers_profile_name:
        # Update existing record
        villagers_profile = frappe.get_doc(
            "Villagers Profile",
            villagers_profile_name
        )
    else:
        # Create new record
        villagers_profile = frappe.new_doc("Villagers Profile")
        villagers_profile.user = frappe.session.user

    for key, value in form_dict.items():
        villagers_profile.set(key, value)

    villagers_profile.save()

    return villagers_profile.as_dict()

"""end of doctype Villagers Profile"""

"""for the doctype Complaint"""
@frappe.whitelist()
def create_complaint(data):
    from_dict = frappe.parse_json(data)
    complaint = frappe.new_doc("Public Complaint")
    for key, value in from_dict.items():
        complaint.set(key, value)
    complaint.save()
    return complaint.as_dict()

@frappe.whitelist()
def get_complaints():
    complaints = frappe.get_all(
        "Public Complaint",
        fields=["*"],
        order_by="creation desc"
    )
    return complaints

@frappe.whitelist()
def own_complaints():
    complaints = frappe.get_all(
        "Public Complaint",
        filters={"user": frappe.session.user},
        fields=[
        "village",
        "gram_panchayat",
        "category",
        "priority",
        "description",
        "full_name",
        "phone",
        "image_proof",
        "is_anonymous",
        ],
        order_by="creation desc"
    )
    return complaints
@frappe.whitelist()
def get_complaint(name):
    complaint = frappe.get_doc("Public Complaint", name)
    return complaint.as_dict()

"""common API for all doctype"""
@frappe.whitelist()
def get_link_fields_data(doctype, fieldname="name", search_text="", filters=None):
    if not doctype:
        frappe.throw("Missing required parameter: doctype")

    filters = frappe.parse_json(filters) if filters else {}
    search_text = search_text or ""

    if search_text:
        filters[fieldname] = ["like", f"%{search_text}%"]

    return frappe.get_all(
        doctype,
        filters=filters,
        fields=["name", fieldname] if fieldname != "name" else ["name"],
        order_by="name asc",
        ignore_permissions=True
    )
