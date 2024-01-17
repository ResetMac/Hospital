<?php
session_start();
$conn = mysqli_connect('localhost', 'root', '', 'medbd');

if (!$conn) {
    die('Error connect to DataBase');
}

$sql = "SELECT patient.patient_id, patient.full_name as "."'".$_GET["param"]."', patient.temp, patient.condition, visitticket.time, employee.full_name as 'ФИО врача'
from patient join visitticket on visitticket.patient_id=patient.patient_id
	join doctors on doctors.employee_id=visitticket.employee_id
    join employee on employee.employee_id=doctors.employee_id
	join personnelfacility on personnelfacility.employee_id=employee.employee_id
    join healthfacility on healthfacility.facility_id=personnelfacility.facility_id
where healthfacility.title="."'".$_GET["param2"]."'";



$result = $conn->query($sql);


$emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);



$conn->close();

?>  

