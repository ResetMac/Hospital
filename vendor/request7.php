<?php
session_start();
$conn = mysqli_connect('localhost', 'root', '', 'medbd');

if (!$conn) {
    die('Error connect to DataBase');
}

$sql = "SELECT employee.employee_id, employee.full_name, servicepersonnel.profile
FROM employee JOIN servicepersonnel ON servicepersonnel.employee_id=employee.employee_id
join personnelfacility on personnelfacility.employee_id=employee.employee_id
join healthfacility on healthfacility.facility_id=personnelfacility.facility_id
WHERE servicepersonnel.profile="."'".$_GET["param"]."' and healthfacility.title='Поликлиника №2' and employee.work_exp > "."".$_GET["param2"]."";




$result = $conn->query($sql);

 

$emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);



$conn->close();

?>  

