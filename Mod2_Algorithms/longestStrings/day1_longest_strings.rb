array = ["aba", "ac", "ad", "vcd", "aba"]

def the_longest_string(array)
    new_array = []
    length = 0
    array.each do |i|
       if i.length == length
        new_array << i
       elsif i.length > length
        length == i.length
        new_arr = []
        new_arr << i
        end
       new_array
    end
    
end