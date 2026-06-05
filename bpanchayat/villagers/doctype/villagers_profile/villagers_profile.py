# Copyright (c) 2026, Abhinaw and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class VillagersProfile(Document):
	def validate(self):
		if not self.user:
			self.user = frappe.session.user

		self.full_name = " ".join(
			filter(None, [self.first_name, self.middle_name, self.last_name])
		)
