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
where healthfacility.title='Панацея'";

//$sql = sprintf($format, $_GET["param"]);


$result = $conn->query($sql);

//echo json_encode($result); 

$emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);

/*if ($result->num_rows > 0) {
    echo "<table><tr><th>id</th><th>full_name</th><th>Profile</th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["employee_id"]."</td><td>".$row["full_name"]."</td><td> ".$row["profile"]."</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}*/

$conn->close();

?>  

