def make_list (number):
    names = [ ]
    for item in range(number):
        names.append(input ("Enter your name with a capital letter."))
    print (names)
    
number = int(input ("How many names need to be entered?"))
names = make_list (number)
for name in names:
    if name [0] == "A":
        print ("Name " ,name, " starts with A")