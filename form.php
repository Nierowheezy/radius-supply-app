

<?php

$email = $_POST['email'];

if (!empty($email)) {

    // /*in Development connection
     $host = "localhost";
     $dbUsername = "root";
     $dbPassword = "";
     $dbName = "emailcapture";
    

    //remote database connection
    // $host = "e11wl4mksauxgu1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
    // $dbUsername = "wqm7659rcpesfhim";
    // $dbPassword = "cdpcz61aox5hhu5u";
    // $dbName = "bj1tzzyeokb4rebj";
    

    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);


    $SELECT = "SELECT email From email_capture Where email = ? Limit 1";
    $INSERT = "INSERT Into email_capture (email) value (?)";

    //Prepare statement
    $stmt = $conn->prepare($SELECT);
    $stmt->bind_param("s",$email);
    $stmt->execute();
    $stmt->bind_result($email);
    $stmt->store_result();
    $rnum = $stmt->num_rows;

    if ($rnum==0) {
        $stmt->close();

        $stmt = $conn->prepare($INSERT);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        echo "<h1  style='color:red;'>You'll definitely hear from us!</h1>";
       
    } else {
        echo "<h1> Oops! Someone already submitted this email </h1>";
    }
    $stmt->close();
    $conn->close();
} else {
    echo "Please enter your email address...";
    die();
}
?>

