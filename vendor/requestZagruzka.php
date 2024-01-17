<?php
session_start();
$conn = mysqli_connect('localhost', 'root', '', 'medbd');

if (!$conn) {
    die('Error connect to DataBase');
}

$sql = "SELECT count(healing.ills_id) as cnt
from healing
	join doctors on doctors.employee_id=healing.employee_id
    join employee on employee.employee_id=doctors.employee_id
where employee.full_name="."'".$_GET["param"]."'";



$result = $conn->query($sql);


$emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);



$conn->close();

?>  

