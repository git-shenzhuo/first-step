<?php
    $con = mysql_connect("localhost","root","");
    if (!$con)
      {
        die('Could not connect: ' . mysql_error());
      }

    if (mysql_query("CREATE DATABASE my_db",$con))
    {
        echo "Database created";
    }
    else
    {
         echo "Error creating database: " . mysql_error();
    }

    $sql = "CREATE TABLE User 
        (
        personID int NOT NULL AUTO_INCREMENT, 
        PRIMARY KEY(personID),
        name varchar(15),
        className varchar(15),
        aeg int
        )";

    mysql_query($sql,$con); 
?>