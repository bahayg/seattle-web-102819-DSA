# Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

# Example 1:

# Input: arr = [1,2,2,1,1,3]
# Output: true
# Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.


# Example 2:

# Input: arr = [1,2]
# Output: false


# Example 3:

# Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
# Output: true

# Constraints:

# 1 <= arr.length <= 1000
# -1000 <= arr[i] <= 1000

Find the number of occurrences of each element in the array using a hash map.
Iterate through the hash map and check if there is a repeated value.

# def unique_occurrences(arr)
#     num_count = Hash.new(0)
#     arr.each do |n| num_count[n]  += 1
#     end
#     count_array = num_count.values
#     count_array.count = count_array.uniq.count
    
# end

# def unique_occurrences(arr)
#     hash = {}
#     arr.each {|i| hash[i.to_s] ? (hash[i.to_s]+=1) : (hash[i.to_s]=1)}
#     return hash.values.count == hash.values.uniq.count ? true : false
# end

# def unique_occurrences(arr)
#     occurrences = {}
#     arr.each do |element|
#         occurrences[element] ||= 0
#         occurrences[element] += 1
#     end
#     occurrences.values.uniq.length == occurrences.values.length
# end

# Bahay
def unique_occurences(arr)
    occurences = {}
    arr.each do |i|
        occurences[i] ?  occurences[i] += 1 : hash[i] = 1
    end
    occurrences.values.uniq.length == occurrences.values.length
end

# Tiffany
def unique_nums(nums)
    hash = {} #create an empty hash
    nums.each do |num|
        if hash[num]        #if number already exists in hash (we have seen it before)
            hash[num] +=1   #increment by 1
        else                #otherwise, first time seeing number
            hash[num] = 1   #create new entry in hash and set value to 1
        end
    end
    unique_values = hash.values.uniq    #use .uniq to see the values that are unique
    #if the original hash length is the same as the unique value length, returns true (no overlapping values)
    hash.values.length == unique_values.length  
end