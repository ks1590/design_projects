# 各問の回答をGoogleフォームに入力してください。回答終了後、送信ボタンを押してください。
# 【注意事項】
# インターネットで回答を検索することは禁止です。
# paizaなどのコーディングサイトでコードを実行することは禁止です。

# 1. testIfStatement1()から返ってくる値は？
def testIfStatement1()
    returnVal = []

    condition1 = true
    condition2 = false
    condition3 = "eXamPle"
    condition4 = 45
    condition5 = ["object", "here"]

    if condition1 === true
        returnVal.push(1)
    end

    if condition2
        returnVal.push(2)
    end

    if condition3.downcase() === "example"
        returnVal.push(3)
    end

    if condition4 >= 55
        returnVal.push(4)
    end

    if condition5.include?("ere")
        returnVal.push(5)
    end

    return returnVal
end

# 2. testIfStatement2()から返ってくる値は？
def testIfStatement2()
    number = 10
    condition1 = true
    condition2 = false
    condition3 = "eXamPle"
    condition4 = 45
    condition5 = ["object", "here"]

    if condition3 != "eXamPle"
        if condition1 === true
            number += 20
        end
    else
        number += 10

        if condition2 === true || condition4 < 45
            number = 1
        elsif condition5.length === 2 && condition5.include?("test")
            number -= 10
        else
            if number > 30
                number += 10
            else
                number = 0
            end
        end
    end

    return number;
end

# 3. testIfStatement3() において、真偽値を返すためには var2 の値をどのようにすればよいでしょうか。
# 4. testIfStatement3()で、文字列値「false」を返すためには、var2の値をどうすればよいでしょうか？
# 5. testIfStatement3() において、var2 が [1, "1.0", 1.0, "1"] に等しい場合、boolean 値 false を返すためには、elsif 分岐にどのような文を挿入すればよいですか?
def testIfStatement3()
    var1 = 1
    var2 = [1, "1.0", 1.0, "1"]

    if var1 === var2
        return true
    else
        if var2.class === 'string'
            return 'false'
        elsif var2.class === 'array'
            return false
        end
        return null
    end
end

# 6. testTerneryOperatorStatement1()から返ってくる値は？
function testTerneryOperatorStatement1() {
    const condition1 = [1,2,3,4,5]

    return (condition1.length > 5) ? "Yes" : 15
}

# 7. testTerneryOperatorStatement2()について、array, int1, int2を使って、この関数が真偽値を返すようなステートメントを作成してください。
def testTerneryOperatorStatement2()
    array = {
        'name' => 'Alex',
        'age' => 27,
        'is_tired' => true
    };

    int1 = 5
    int2 = 3

    # ternery = /*三項演算子を記入してください*/
    ternery = array['is_tired'] ? int1 : int2

    return ternery + 5 === 10
end

# 8. testLoop1()から返ってくる$totals変数の、配列の要素の数は？
# 9. testLoop1()から返ってくるtotals変数の配列の中身はどれか？
def testLoop1()
    totals = [];

    array = [
        [4, 5],
        [2],
        [1, 6, 9]
    ];

    array.each do |item|
        temp = 0
        item.each do |number|
            temp = temp + number
        end
        totals.push(temp)
    end

    return totals;
end

# 10. testLoop2()の場合、"result"の戻り値は何ですか？
def testLoop2()
    array = [
        {"flag" => true, "item_name" => "plate", "cost" => 100},
        {"flag" => true, "item_name" => "tshirt-xxl", "cost" => 433},
        {"flag" => false, "item_name" => "ticket", "cost" => 500},
        {"flag" => true, "item_name" => "sticker", "cost" => 10}
    ]

    result = 0

    array.each do |item|
        if item['flag']
            result += item['cost']
        end
    end

    return result
end

# 11. testLoop3()から返ってくる値は？
def testLoop3()
    array = [3, 2, 5, 7, 9];

    return array.inject { |carry, item| carry + item }
end

# 12. testLoop4()から返ってくる値は？
def testLoop4()
    flag = true
    number = 0

    while flag do
        number += 1

        if number % 2 === 0
            continue
        end

        number += number

        if number > 10
            flag = false
        end
    end
    
    return number
end

# 13. testArrayIndexing1()が返す値を 554 にするにはどうしたら良いか。
# 14. testArrayIndexing1()が返す値を "Bursting Red" にするにはどうしたら良いか。
def testArrayIndexing1()
    order = {
        "id" => 1,
        "customer_id" => 554,
        "orderitems" => {
            "item1" => {
                "product_id" => 1,
                "variants" => {
                        "blue" => {
                            "name" => "Royale Blue",
                            "price" => 200
                        },
                        "green" => {
                            "name" => "Royale Green",
                            "price" => 250
                        }
                    },
                "variant" => "blue",
                "quantity" => 1
            },
            "item2" => {
                "product_id" => 2,
                "variants" => {
                    "red" => {
                        "name" => "Bursting Red",
                        "price" => 3000
                    },
                    "yellow" =>  {
                        "name" => "Sunflower",
                        "price" => 2700
                    }
                },
                "variant" => "yellow",
                "quantity" => 5
            }
        }
    }

    # value = /*__?__*/;
    # value = order['customer_id']
    value = order['orderitems']['item2']['variants']['red']['name']
    
    return value;
end