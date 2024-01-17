select patient.patient_id, patient.full_name as 'ФИО пациента', employee.full_name as 'ФИО врача'
from patient join ills on ills.patient_id=patient.patient_id
	join healing on healing.ills_id=ills.ills_id
    join doctors on doctors.employee_id=healing.employee_id
    join employee on employee.employee_id=doctors.employee_id
    join operations on operations.ills_id=ills.ills_id
    join healthfacility on healthfacility.facility_id=operations.facility_id
where healthfacility.title='Сова' and ills.date_receipt <= curdate() and ills.date_receipt > '2022-12-15'