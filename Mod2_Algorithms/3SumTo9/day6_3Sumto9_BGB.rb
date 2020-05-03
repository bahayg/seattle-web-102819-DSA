def sum_nine(array)
    sum = 0 
    array.each do |i|
        if i == 9
            sum+=0
        end
        if sum == 12
            return false
        end
    end
    if sum == 9
        return true
    else
        return false
    end
end


# def check_array(nums)
#   sum = 0
#    i = 0
#    while i < nums.length
#        if(nums[i] == 3)
# 			sum += 3
#        end
#     i += 1
#    	end
#    return (sum == 9);
# end