<?php
/**
 * 各問の回答をGoogleフォームに入力してください。回答終了後、送信ボタンを押してください。
 * 【注意事項】
 * インターネットで回答を検索することは禁止です。
 * paizaなどのコーディングサイトでコードを実行することは禁止です。
 */

/**
 * 1. testIfStatement1()から返ってくる値は？
 */
function testIfStatement1()
{
    $return = [];

    $condition1 = true;
    $condition2 = false;
    $condition3 = "eXamPle";
    $condition4 = 45;
    $condition5 = ["object", "here"];

    if ($condition1 === true) {
        $return[] = 1;
    }

    if ($condition2) {
        $return[] = 2;
    }

    if (strtolower($condition3) === "example") {
        $return[] = 3;
    }

    if ($condition4 >= 55) {
        $return[] = 4;
    }

    if (in_array("ere", $condition5)) {
        $return[] = 5;
    }

    return $return;
}

/**
 * 2. testIfStatement2()から返ってくる値は？
 */
function testIfStatement2()
{
    $number = 10;

    $condition1 = true;
    $condition2 = false;
    $condition3 = "eXamPle";
    $condition4 = 45;
    $condition5 = ["object", "here"];

    if ($condition3 !== "eXamPle") {
        if ($condition1 === true) {
            $number += 20;
        }
    } else {
        $number += 10;

        if ($condition2 === true || $condition4 < 45) {
            $number = 1;
        } elseif (count($condition5) === 2 && in_array("test", $condition5)) {
            $number -= 10;
        } else {
            if ($number > 30) {
                $number += 10;
            } else {
                $number = 0;
            }
        }
    }

    return $number;
}

/**
 * 3. testIfStatement3() において、真偽値を返すためには $var2 の値をどのようにすればよいでしょうか。
 * 4. testIfStatement3()で、文字列値「false」を返すためには、$var2の値をどうすればよいでしょうか？
 * 5. testIfStatement3() において、$var2 が array(1, "1.0", 1.0, "1") に等しい場合、boolean 値 false を返すためには、elderif 分岐にどのような文を挿入すればよいですか?
 */
function testIfStatement3() {
    $var1 = 1;
    $var2;

    if ($var1 === $var2) {
        return true;
    } else {
        if (gettype($var2) == 'string') {
            return 'false';
        } elseif ( /*__?__*/ ) {
            return false;
        }

        return null;
    }
}

/**
 * 6. testTerneryOperatorStatement1()から返ってくる値は？
 */
function testTerneryOperatorStatement1() {
    $condition1 = [1,2,3,4,5];

    return (count($condition1) > 5) ? "Yes" : 15;
}

/**
 * 7. testTerneryOperatorStatement2()について、$array, $int1, $int2を使って、この関数が真偽値を返すようなステートメントを作成してください。
 */
function testTerneryOperatorStatement2() {
    $array = [
        'name' => 'Alex',
        'age' => 27,
        'is_tired' => true
    ];

    $int1 = 5;
    $int2 = 3;

    $ternery = /*三項演算子を記入してください*/;

    return $ternery + 5 === 10;
}

/**
 * 8. testLoop1()から返ってくる$totals変数の、配列の要素の数は？
 * 9. testLoop1()から返ってくる$totals変数の配列の中身はどれか？
 */
function testLoop1() {
    $totals = [];

    $array = [
        [4, 5],
        [2],
        [1, 6, 9]
    ];

    foreach ($array as $item) {
        $temp = 0;

        foreach ($item as $number) {
            $temp = $temp + $number;
        }

        $totals[] = $temp;
    }

    return $totals;
}

/**
 * 10. testLoop2()の場合、"$result "の戻り値は何ですか？
 */
function testLoop2() {
    $array = [
        ["flag" => true, "item_name" => "plate", "cost" => 100],
        ["flag" => true, "item_name" => "tshirt-xxl", "cost" => 433],
        ["flag" => false, "item_name" => "ticket", "cost" => 500],
        ["flag" => true, "item_name" => "sticker", "cost" => 10]
    ];

    $result = 0;

    foreach ($array as $item) {
        if ($item['flag'])$result += $item['cost'];
    }

    return $result;
}

/**
 * 11. testLoop3()から返ってくる値は？
 */
function testLoop3() {
    $array = array(3, 2, 5, 7, 9);

    return array_reduce($array, function ($carry, $item) {
        $carry += $item;
        return $carry;
    }, 0);
}

/**
 * 12. testLoop4()から返ってくる値は？
 */
function testLoop4() {
    $flag = true;
    $number = 0;

    while ($flag) {
        $number += 1;

        if ($number % 2 == 0) {
            continue;
        }

        $number += $number;

        if ($number > 10) {
            $flag = false;
        }
    }

    return $number;
}

/**
 * 13. testArrayIndexing1()が返す値を 554 にするにはどうしたら良いか。
 * 14. testArrayIndexing1()が返す値を "Bursting Red" にするにはどうしたら良いか。
 */
function testArrayIndexing1() {
    $order = [
        "id" => 1,
        "customer_id" => 554,
        "orderitems" => [
            "item1" => [
                "product_id" => 1,
                "variants" => [
                    "blue" => [
                        "name" => "Royale Blue",
                        "price" => 200
                    ],
                    "green" => [
                        "name" => "Royale Green",
                        "price" => 250
                    ]
                ],
                "variant" => "blue",
                "quantity" => 1
            ],
            "item2" => [
                "product_id" => 2,
                "variants" => [
                    "red" => [
                        "name" => "Bursting Red",
                        "price" => 3000
                    ],
                    "yellow" => [
                        "name" => "Sunflower",
                        "price" => 2700
                    ]
                ],
                "variant" => "yellow",
                "quantity" => 5
            ]
        ]
    ];

    $value = ;

    return $value;
}