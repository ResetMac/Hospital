select avg(cnt)
from (select count(*) as cnt
	  from visitticket
		join doctors on doctors.employee_id=visitticket.employee_id
        join employee on employee.employee_id=doctors.employee_id
		where employee.full_name='Кузнецова Антонина Максимовна'
        group by visitticket.time) as anf