<?php
  function stringBuilder(string $name, string $age, string $jobtitle): string
  {
    $my_name = 'my name is '.$name;
    $my_age = 'I am '.$age;
    $my_job = 'my job is a '.$jobtitle;

    $result = 'Hi, '.$my_name.'. '.$my_age.' and '.$my_job.'.';

    return $result;
  }

  $name = 'Kensuke';
  $age = '32';
  $jobtitle = 'SE';

  $output = stringBuilder($name, $age, $jobtitle);

  echo $output;

?>