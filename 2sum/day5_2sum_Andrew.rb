def two_sum (array, target)
    seen = {}
    array.each_with_index |x, i|
        if seen [target-x]
            return [i, seen[target-x]]
        else
            seen [x] = i
        end
    end
end

[15, 2, 11, 7]


def two_sum(nums, target)
    seen = {}  #set an empty hash to keep track of all the elements we have seen
    nums.each_with_index do |n, i|
      if seen[target - n]
        return [seen[target - n], i]
      end
      seen[n] = i
    end

    a + b = target, so a = target - b. So if we are on "b", we can look to see if we found "a" already. 
    Like looking for its compliment. We find "a" if our hash has it in there. 
    "if seen[a]" exists. the value of seen[a] is the index of the position of "a" in our nums array. 
    If we haven't seen "a" (the compliment of "b" that we are on) then we will add "b" to the array and then move on to the next element. 