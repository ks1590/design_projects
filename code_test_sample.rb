# def check_bracket(code)
#   count = 0
#   code.each do |s|
#     if s == '{'
#       count++
#     elsif s == '}'
#       count--
#     end
#   end
#   true
# end

# p check_bracket("{}") # true
# p check_bracket("{{{}}}") # true
# p check_bracket("{") # false
# p check_bracket("{{}") # false
# p check_bracket("}{}{") # false
# p check_bracket("function test() { console.log('asdf'); if (true) { return false }}}") # false

def check_bracket(code)
  count = 0

  code.each_char do |str|
    count += 1 if str == '{'
    count -= 1 if str == '}'
    return false if count < 0
  end

  count == 0
end

p check_bracket("function test() { console.log('asdf'); if (true) { return false }}}")