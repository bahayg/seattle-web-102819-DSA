
# Tiffany
def happy_birthday
	bday = Array(1..3)
	bday.each_with_index |spot, i| do
		if i == 0 
			bday[i].rand(1..12)
		elsif i ==1
			if bday[0] == 2
				bday [i].rand(1..28)
			else
				bday[i].rand(1..31)
			end
		elsif i == 2
			bday[i].rand(1900..2019)
		end
		bday.join("/")
	end




# Robin

# Write a method that can create a randomly generated birth date
# BD should be orginized month/day/year
# Remember February has 28 days
# (Optional) Concider months with 30 days
# (Optional) Concider leap years
def happy_birth_day
	days = []
	months = []
	years = []
	31.times do |d|
		days << d
		days.delete(0)
	end
	12.times do |m|
		months << m
		months.delete(0)
	end
	2019.times do |y|
		years << y
		years.delete(0)
	end
	if months.sample == 2
		days.delete(31)
		days.delete(30)
		days.delete(29)
		return "#{months.sample}/#{days.sample}/#{years.sample}"
	elsif months.sample == 2 && years.sample % 100 == 0 && years.sample % 400 == 0
		days.delete(31)
		days.delete(30)
		return "#{months.sample}/#{days.sample}/#{years.sample}"
	elsif months.sample == 2 && years.sample % 4 == 0 && years.sample % 100 != 0
		days.delete(31)
		days.delete(30)
		return "#{months.sample}/#{days.sample}/#{years.sample}"
	elsif months.sample == 4 || months.sample == 6 || months.sample == 9 || months.sample == 11
		days.delete(31)
		return "#{months.sample}/#{days.sample}/#{years.sample}"
	else
		return "#{months.sample}/#{days.sample}/#{years.sample}"
	end
end