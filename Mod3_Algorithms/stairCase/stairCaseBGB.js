// Bahay
function stairCase(num) {
    let pound = "#";
    let whiteSpace = " ";

    for (let i = 1; i <= num; i ++) {
        console.log(whiteSpace.repeat(num-i), pound.repeat(i))
    };
}

const stairs = n => {
  for (i = 1; i <= n; i++) {
    console.log((" ").repeat(n-i), ("#"). repeat(i))
  }
}

// Ruby (Katrina)
def staircase(n)
    if n > 0 && n < 101
      (1..n).each do |i|
        puts " " * (n-i) + "#" * i
      end 
    end 
end 