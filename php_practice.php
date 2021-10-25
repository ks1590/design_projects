<?php
// /**
// * @param int $seireki
// * @return string
// */
// function toEtoString(int $seireki): string
// {
//     try {
//         $etoList = array("申", "酉", "戌", "亥", "子", "丑", "寅", "卯", "辰", "巳", "午", "未");
//         $currentEtoNumber = $seireki > 0 ? $seireki % 12 : '';

//         if($currentEtoNumber === '')throw new Exception('');
        
//         return $etoList[$currentEtoNumber];

//     } catch (Exception $e) {
//         return $e->getMessage();
//     }
// }
// print_r(toEtoString(1924));
// print_r(toEtoString(2016));
// print_r(toEtoString(2017));
// print_r(toEtoString(2018));
// print_r(toEtoString(2019));
// print_r(toEtoString(2020));
// print_r(toEtoString(2021));
// print_r(toEtoString(0));
// print_r(toEtoString(-12));
// 

/**
* 人間クラス
* 自己紹介を動的に出力するクラス
*/
class Human
{
    public string $name;
    public ?DateTime $birthday = null;
    
    public function __construct(string $name,DateTime $date)
    {
	    $this->name = $name;
	    $this->birthday = $date;
	  }
	
	  public function echoJikoshoukai():void
    {
	    $age = $this->calcAge($this->birthday);
	    echo "私の名前は{$this->name}で、{$age}歳です。"."\n";
	  }
    
    private function calcAge():int
    {
      $birthday = $this->birthday->format('Ymd');
      $today = date('Ymd');
      return floor(($today - $birthday) / 10000);
    }    
}

$date = date_create('1912-06-25');
$tanaka = new Human("田中",$date);

$date = date_create('1990-06-25');
$saitou = new Human("斉藤",$date);

$tanaka->echoJikoshoukai();
$saitou->echoJikoshoukai();
?>


<!-- class Person 
{
  //プロパティの定義
  public $name;
  private $_gender;
  private $_birthday;
  
  //コンストラクタ
  function __construct($name, $gender, $birthday) {
    $this -> name = $name;
    $this -> _gender = $gender;
    $this -> _birthday = $birthday;
  }
  
  //メソッドの定義
  function get_age() {
    $age = floor((intval(date('Ymd')) - intval($this -> _birthday))/10000);
    return $age; 
  }
} -->