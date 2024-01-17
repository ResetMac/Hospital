select avg(cnt)
from (select count(*) as cnt
      from polyclinic
      join healthfacility on healthfacility.facility_id=polyclinic.facility_id
      where healthfacility.title='Поликлиника №2'
       group by polyclinic.count_surveys) as avf