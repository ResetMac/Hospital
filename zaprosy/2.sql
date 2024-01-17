select employee.employee_id, employee.full_name, servicepersonnel.profile
from employee join servicepersonnel on servicepersonnel.employee_id=employee.employee_id
where servicepersonnel.profile='Охранник'