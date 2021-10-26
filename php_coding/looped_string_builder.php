<?php
  function loopedStringBuilder(array $items)
  {
    $shop_count = 'Shop Count: '.count($items);

    $horizon = '-------------';

    foreach ($items as $item) {
      $shopList = $shopList.$item['id'].' | '.$item['title'].PHP_EOL;
    }

    $result = $shop_count.PHP_EOL.$horizon.PHP_EOL.$shopList;

    return $result;
  }

  $a = [
    ["id" => 1, "title" => "Tangle Teezer"],
    ["id" => 2, "title" => "Bubo Japan"],
    ["id" => 3, "title" => "War Paint for Men"],
    ["id" => 4, "title" => "Invisibobble"]
  ];

  $output = loopedStringBuilder($a);

  echo $output;
?>