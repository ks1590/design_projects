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

# def check_bracket(code)
#   count = 0

#   code.each_char do |str|
#     count += 1 if str == '{'
#     count -= 1 if str == '}'
#     return false if count < 0
#   end

#   count == 0
# end

# p check_bracket("function test() { console.log('asdf'); if (true) { return false }}}")

a = [1, 2, 3, 5, 8]
b = [1, 3, 6, 7, 8]
c = (false || false ? ( true && false ? a | b : a & b ) : b );

# p c
# c = 1 || 2 ? 2 && 1 ? a | b : a & b : b ;
# c = 3 || 10
# p c.is_a?(Object)
# p c.self
# c = 3 || 5

# c = (false || true)
p c

# p a & b
# => [1, 3, 8]