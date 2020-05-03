# Given an array of single socks of different colors, write a method that matches up your socks in pairs. 

# Socks Array = [red, green, blue, red, green, green, blue, green, blue, red]

# Return a hash giving us how many pairs we have of each color.

# If the last two socks don't match, save them as a mismatched pair in the hash.

socks = [red, green, blue, red, green, green, blue, green, blue, red]

socks_pairs = {}

socks.each do |sock|
    if socks_pairs[:sock] 
        socks_pairs[:sock] += 1
    else 
        socks_pairs[:sock] = 1
    end
end


socks_pairs.each do |k, v|
    if v % 2 == 0
        socks_pairs[:k] = v/2
    else
        socks_pairs[:k] = v/2
        if!(socks_pairs[:miss])
            socks_pairs[:miss] = [:k]
        else
            socks_pairs[:miss] << k
        end
    end
end