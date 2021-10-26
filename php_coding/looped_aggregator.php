<?php
  function loopedAggregator(array $items)
  {
    foreach ($items as $item) { 
      if ($item['flag'] == true) {
        $result += $item['cost'];
      }
    }

    return $result;
  }
  
  $a = [
    ["flag" => true, "item_name" => "plate", "cost" => 100],
    ["flag" => true, "item_name" => "tshirt-xxl", "cost" => 433],
    ["flag" => false, "item_name" => "ticket", "cost" => 500],
    ["flag" => true, "item_name" => "sticker", "cost" => 10]
  ];

  $result = loopedAggregator($a);
  print_r($result);
?>