<?php
/**
* @param int $seireki
* @return string
*/
function toEtoString(int $seireki): string
{
    try {
        $etoList = array("申", "酉", "戌", "亥", "子", "丑", "寅", "卯", "辰", "巳", "午", "未");
        $currentEtoNumber = $seireki > 0 ? $seireki % 12 : '';

        if($currentEtoNumber === '')throw new Exception('');
        
        return $etoList[$currentEtoNumber];

    } catch (Exception $e) {
        return $e->getMessage();
    }
}
print_r(toEtoString(1924));
print_r(toEtoString(2016));
print_r(toEtoString(2017));
print_r(toEtoString(2018));
print_r(toEtoString(2019));
print_r(toEtoString(2020));
print_r(toEtoString(2021));
print_r(toEtoString(0));
print_r(toEtoString(-12));
?>