<?php
session_start();
$conn = mysqli_connect('localhost', 'root', '', 'medbd');

if (!$conn) {
    die('Error connect to DataBase');
}

$sql = "SELECT employee.employee_id, employee.full_name, servicepersonnel.profile
from employee join servicepersonnel on servicepersonnel.employee_id=employee.employee_id
	join doctors on doctors.employee_id=employee.employee_id
where servicepersonnel.profile="."'".$_GET["param"]."' and doctors.operations > "."".$_GET["param2"]." and employee.work_exp > "."".$_GET["param3"]." 
and doctors.degree="."'".$_GET["param4"]."' and doctors.grade="."'".$_GET["param5"]."'";

$result = $conn->query($sql);

$emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);

$conn->close();

?>  

