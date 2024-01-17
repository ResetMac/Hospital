select operations.ills_id, patient.full_name, healthfacility.title
from operations
	join ills on ills.ills_id=operations.ills_id
    join patient on patient.patient_id=ills.patient_id
    join healthfacility on healthfacility.facility_id=operations.facility_id
where healthfacility.title='Панацея' and operations.date_event < current_date() and operations.date_event > date('2022-12-17')