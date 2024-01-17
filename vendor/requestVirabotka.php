<?php
session_start();
$conn = mysqli_connect('localhost', 'root', '', 'medbd');

if (!$conn) {
    die('Error connect to DataBase');
}

$sql = "SELECT avg(cnt)
from (select count(*) as cnt
      from polyclinic
      join healthfacility on healthfacility.facility_id=polyclinic.facility_id
      where healthfacility.title="."'".$_GET["param"]."'
       group by polyclinic.count_surveys) as avf";



$result = $conn->query($sql);


$emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);



$conn->close();

?>  

