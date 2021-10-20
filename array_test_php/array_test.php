<?
// bcart API test
$json = file_get_contents(__DIR__ . '/bcart.json');
if ($json === false) {
    throw new \RuntimeException('file not found.');
}
$data = json_decode($json, true);

// var_dump($data);
// $id = array_column($data['products'],'id')[0];
// $name = array_column($data['products'],'name');

$items = $data['products'];
// $bcart_items = array();

// foreach ($items as $item) {
//   $array_item = array('id'=>$item['id'], 'name'=>$item['name']);
//   array_push($bcart_items, $array_item);
// }

$array_items = array_map(function($item){
  return array('main_no'=>$item['main_no'], 'id'=>$item['id'], 'name'=>$item['name']);
}, $items);

// var_dump($array_items);


// nestsuite API test
$json = file_get_contents(__DIR__ . '/netsuite.json');
if ($json === false) {
    throw new \RuntimeException('file not found.');
}

$data = json_decode($json, true);
$netsuite_items = array_column($data, 'values');

function searchBcartID($netsuite_item)
{   
    // $result = array_search($netsuite_item['itemid'],$array_items);    
    return array('main_no'=>$netsuite_item['itemid'], 'flag_stop'=>$netsuite_item['custitem_daiwa_stop'], 'flag_stop2'=>$netsuite_item['custitem_mandd_stop']);
}

$matchedIdItems = array_map('searchBcartID', $netsuite_items);

// $result_intersect = array_intersect_assoc($matchedIdItems, $array_items);
$result_intersect = array_intersect($array_items, $matchedIdItems);

var_dump($result_intersect);
var_dump($matchedIdItems[2]);
var_dump($array_items[2]);

// $export_items = json_encode($bcart_items, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
// file_put_contents("test.json" , '{"products":'.$export_items.'}');
?>