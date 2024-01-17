select patient.patient_id, patient.full_name as 'ФИО Пациента', patient.temp, patient.condition, visitticket.time, employee.full_name as 'ФИО врача'
 from patient join visitticket on visitticket.patient_id=patient.patient_id
	join doctors on doctors.employee_id=visitticket.employee_id
    join employee on employee.employee_id=doctors.employee_id
    join servicepersonnel on servicepersonnel.employee_id=employee.employee_id
    join personnelfacility on personnelfacility.employee_id=employee.employee_id
    join healthfacility on healthfacility.facility_id=personnelfacility.facility_id
where healthfacility.title='Сова' and servicepersonnel.profile='Хирург'