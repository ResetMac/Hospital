<?php
session_start();
$conn = mysqli_connect('localhost', 'root', '', 'medbd');

if (!$conn) {
    die('Error connect to DataBase');
}

$sql = "SELECT operations.ills_id, patient.full_name, healthfacility.title
from operations
	join ills on ills.ills_id=operations.ills_id
    join patient on patient.patient_id=ills.patient_id
    join healthfacility on healthfacility.facility_id=operations.facility_id
where healthfacility.title="."'".$_GET["param"]."' and operations.date_event < current_date() and operations.date_event > date("."'".$_GET["param2"]."')";


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

