<?php
// $url = "https://qiita.com/api/v2/items?page=1&per_page=50&query=PHP";
// $curl = curl_init($url);

// curl_setopt($curl, CURLOPT_URL, $url); 
// curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// $html =  curl_exec($curl);
// $tmp = json_decode($html);

// function sort_like($a, $b){
//     return $a->likes_count > $b->likes_count ? -1 : 1;
// }

// usort($tmp, "sort_like");

// foreach($tmp as $article) {
//     $item = [
//     $article->title,
//     $article->created_at,
//     $article->likes_count,
//     ];
//     $result = implode(',',$item);
//     var_dump($result);
// }
// curl_close($curl);

class HttpRequest
{
  // private $url
  
  function __construct()
  {
    // $this->url = $url
    // $curl = curl_init($url);
  }

  public function get($url)
  {
    $curl = curl_init($url);
    $html = curl_exec($curl);
    $tmp = json_decode($html);

    return $tmp;
  }
}

$url = "https://qiita.com/api/v2/items?page=1&per_page=50&query=PHP";

$http = new HttpRequest($url);

return $http->get($url);
?>