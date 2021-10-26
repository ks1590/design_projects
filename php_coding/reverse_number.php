<?php
  function reverseNumber(int $number): int
  {
    $result = strrev((string) $number);
    $result =  (int) $result;
    return $result;
  }

  $number = -12348567.099;
  $output = reverseNumber($number);

  echo $output;
?>