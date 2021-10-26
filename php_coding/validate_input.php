<?php
  function validateInput($number): bool
  {
    $result = is_int($number) ? true : false;
    return $result;
  }

  $output = validateInput(123);

  var_export($output);
?>