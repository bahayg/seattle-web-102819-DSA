// Devin
def pangram_finder(string)
letter_array = ["a".."z"]
hash = {}
arr = string.split("")
arr.each do |char|
  if !hash[char]
    hash[char] = 0
  end
end
letter_array.each do |letter|
  if !hash[letter]
    return 'not pangram'
  else 
    hash[letter] += 1
  end
end
return 'pangram'
end

// Andrew:
line = gets.chomp.downcase
​
if line.scan(/[a-z]/).uniq.size == 26
    puts 'pangram'
else
    puts 'not pangram'
end

// Michael

str = "The quick brown fox jumps over the lazy dog"
​
​
def pan(str)
  # creates an array of each letter in the alphabet
  arr = ("a".."z").to_a
​
​
  # loops through the array of alphabet letters
  arr.each do |char|
​
​
    # using .include method to check if character in alphabet is in the sentence; returns as t or f
    if str.include?(char) == false
​
​
      # if a letter wasn't included, it's not a pangram, and the function finishes
      return "not pangram"
    end
  end
  
  # else, every letter in the alphabet was found in the sentence, thus making it a pangram
  return "pangram"
end


// Greg

# How can we see if an input has every letter of the alphabet? My way is the following
# I will create an array of an alphabet. Then, I will loop through an input string. 
# If the input_array is less than 26 letters long, then return false. 
# If a letter of ths string is in the alphabet array, I will delete that letter from the alphabet array. If, at the end, the alphabet array is length zero, then return true. Else false.
def is_panagram(string)
  alphabet_array = "abcdefghijklmnopqrstuvwxyz".split("")
  # .split creates an array of the alphabet, one letter in each index.
  input_array = string.split("")
  # create an array of the input string. Same as above.
  if input_array.size < 26
    puts "#{string} is too short to be a panagram"
    return false
    # return false for too short inputs
  end
  input_array.each do |letter|
    index = alphabet_array.index(letter.downcase)
    # loop through the input string. find the index in the alphabet array of a letter in the string. Make sure to downcase to take care of capital letters.
    if !index.nil?
      alphabet_array.delete_at(index)
      # if the index exists, delete what is there.
    end
  end
  print alphabet_array
  # show what is left at the end
  puts ""
  puts "VERDICT:"
  print string
  puts ""
  puts "is a panagram?"
  # is the array greater length zero? Then it is a panagram!
  alphabet_array.length == 0 ? true : false
end
puts is_panagram("The uick brown fox jumps over the lazy dog")
# missing 'q'
# false
puts is_panagram("The quick brown fox jumps over the lazy dog")
# true
puts is_panagram("hello world")
# false


// Greg - JS

// How can we see if an input has every letter of the alphabet? My way is the following
// I will create an array of an alphabet. Then, I will loop through an input string. If a letter of ths string is in the alphabet array, I will delete that letter from the alphabet array. If, at the end, the alphabet array is length zero, then return true. Else false.
// Exactly the same as the Ruby version., except the last line.
function isPanagram(string) {
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputStringArray = string.split("");
    if (inputStringArray.length < 26) {
      return false;
    }
    for (let i = 0; i < inputStringArray.length; i++) {
      const letter = inputStringArray[i].toLowerCase();
      const index = alphabetArray.indexOf(letter);
      if (index !== -1) {
        // rememver .indexOf will return -1 if no index is found.
        alphabetArray.splice(index, 1);
      }
    }
    console.log("");
    console.log("VERDICT:");
    console.log(string);
    console.log("is a panagram?");
    return alphabetArray.length ? true : false;
  }
  // why does my return statment look different in JS rather than Ruby?
  console.log(isPanagram("The uick brown fox jumps over the lazy dog"));
  // => false
  console.log(isPanagram("The quick brown fox jumps over the lazy dog"));
  // => true
  console.log(isPanagram("Hello World"));
  // => false