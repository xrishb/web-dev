<?php
    // create a variable
    $name = "rishabh";
    // echo/print the variable
    echo "$name";

    // variables start with $ and php is typed dynamically, means datatype is defined automatically.
    $num = 1;
    $isValid = true;
    $decimals = 1.342f;

    // arrays
    $arr = array(1,2,3,4,5);

    // foreach loop to print array elements
    foreach($arr as $val) {
        echo "$val ";
    }

    // conditionals
    if($isValid == true) {
        echo "entry granted\n";
    } elseif($isValid == false) {
        echo "get out\n";
    }else {
        $isValid = true;
    }

    // for loops
    for($i = 0; $i < 5; $i++) {
        echo " i ";
    }

    // some basic methods
    var_dum($arr);
    print_r($arr);

    // associative arrays
    $data = array(
        "peter" => 18,
        "john" => 21,
        "abdul" => 27,
        "devpal" => 35
    );

    print_r($data);
?>