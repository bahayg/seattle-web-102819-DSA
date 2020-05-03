def thing(wrd1, wrd2)
    first = wrd1.split('')
    second = wrd2.split('')
    
    x = first.map do |letter|
        letter.ord
    end.sum

    y = second.map do |letter|
        letter.ord
    end.sum

    diff = x - y
end