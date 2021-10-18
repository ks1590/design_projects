<?
$json = file_get_contents(__DIR__ . '/bcart.json');
if ($json === false) {
    throw new \RuntimeException('file not found.');
}
$data = json_decode($json, true);

// var_dump($data);

$id = array_column($data['products'],'id')[0];
$name = array_column($data['products'],'name');

$items = $data['products'];
$bcart_items = array();

foreach ($items as $item) {
  $array_item = array('id'=>$item['id'], 'name'=>$item['name']);
  array_push($bcart_items, $array_item);
}

// $items = array('id'=>1, 'main_no'=>'COL-1008', 'name'=>'コルビジェ風クラシックソファー2人掛け');

// var_dump($bcart_items);
$export_items = json_encode($bcart_items, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
file_put_contents("test.json" , '{"products":'.$export_items.'}');
?>