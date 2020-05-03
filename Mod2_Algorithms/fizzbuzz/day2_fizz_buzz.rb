def fizz_buzz
    # array = [1..100]??
    100.times do |i|
        if i%15 == 0
            print "fizzbuzz"
        elsif
            i%5 == 0
            print "buzz"
        elsif
            i%3 == 0
            print "fizz"
        else 
            print i
        end
    end
    
end