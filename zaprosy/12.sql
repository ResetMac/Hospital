select count(healing.ills_id) as cnt
from healing
	join doctors on doctors.employee_id=healing.employee_id
    join employee on employee.employee_id=doctors.employee_id
where employee.full_name='Иванов Иван Иванович'