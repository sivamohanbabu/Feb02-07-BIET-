# # # '''
# # # print("Hello, World!")
# # # print("Hello Siva!")

# # # '''
# # # # comments  : single,multi
# # # # understand the code,testing

# # # # variables:
# # # #  name : char ,_,ha1,


# # # # day = "tuesday"
# # # # print(day)
# # # # year = 2026

# # # # name,age,dept,yop

# # # # Data types in python:
# # # # 1.primitive and non prmintive
# # # # int,float,complex,boolean,str
# # # # type CASTING in python - int,str
# # # a = int(input("Value a "))
# # # b = int(input("Value b"))
# # # # print(type(b))
# # # if a == b and type(a) == type(b):
# # #     print(a+b)
# # # else:
# # #     print("error")
# # # # user should enter the values in the prompt to check 
# # # # and give the addition of two number if the values are same 

# # # b = "ten"
# # # c = True
# # # d = 4+6j
# # # e = 10.23

# # # # non - primitive:
# # # # list,tuple,dict and set

# # # operators:arth,memb,betwise,logic,identity,comparision

# # codingL = ["Html","Css","Javascript","python"]
# # print(f"length of an list ",len(codingL))
# # j = 0
# # for i in codingL:
# #     j+=1
    
# #     print(j,i)
# # mutable -- >address -->application 
# # immutable -->websites -- >flipkart,amazon(email?)
# # uber--mobile ???
# # email --lms??

# # ??can booking details -- >user name --book the ticket???
# # studentlist = ("shreya","pujasri","bhumika","harsha")

# # for i in studentlist:
# #     print(i)


# # # set into list 
# # # 1st
# # ages = {18,20,21,19,50,35}
# # agelist = list(ages)
# # print(agelist[0])
# # for age in agelist:
# #     print(age)
# #     # 2exp
# # ages = {18,20,21,19,50,35}
# # if 20 in ages:
# #     print("20 in the list")
# # else:
# #     print("20 is not found")

# # dectionary part and also set

# # empData = {
# #     "id" :1,
# #     "Empid":23,
# #     "EmpName":"Siva",
# #     "Dept":"Devops Eng"
# # }
# # empData["Dept"] = "IT dept"
# # print(empData)

# # coins = {5,10,20,50,100,10,20,50,100,2000} # purpose of unique value 
# # # subscribe --> netflix
# # coinscount = len(list(coins))
# # print(coinscount)


# # Problem:
# # You have a tuple of users, where each user is represented as a (username, password) pair:
# # Copy code
# # Python
 
# # users = (
# #     ("babu", "1234"),
# #     ("ravi", "abcd"),
# #     ("sita", "pass123")
# # )
 
# # Ask the user to input a username and password.
# # Check if the credentials match any user in the tuple.
# # Print "Login Successful" if a match is found, otherwise print 
# # "Invalid Username or Password".
# #  #3 attempts
# # users = (
# #     ("babu", "1234"),
# #     ("ravi", "abcd"),
# #     ("sita", "pass123")
# # )
# # #attempts 3
# # attempts = 3 
# # while attempts > 0:
# #     username = input("enter the username")
# #     password = input("enter the password")

# #     if(username,password) in users:
# #         print("login sucessfully","welcome ",username)
# #         break
# #     else:
# #         attempts -=1
# #         print("Invalid Username or Password",attempts)
# # if attempts == 0:
# #     print("ACCOUNT IS LOCKED")
# # expression

# # def hello():
# #     print("Hello world")

# # for _ in range(3):
# #   hello()

# # userotp = 123
# # for _ in range(3):

# #     otp = int(input("enter otp") )
# #     if userotp == otp:
# #         print(otp)
# #     else:
# #         print("enter otp is not matched with userotp")
# import math
# print(math.sqrt(36))
# print(math.factorial(10))


# # print(random.random())
# # print(random.randint(1,9))
# # # 5 or 6
# # otp5 = random.randint(100000,999999)
# # print(otp5)

# # import random
# # otp2 = random.randint(1000,9999)
# # print("the 2 digit otp is ",otp2)
# # attempt = 3
# # while attempt >0:
# #     userotp = int(input("enter the 2 digit otp"))
# #     if otp2 == userotp:
# #         print("otp verified sucessfully")
# #         break
# #     else:
# #         print("ivalid otp and try again")
# #         attempt -= 1
# # if attempt == 0:
# #     print("try after 24 hours")



import my_module
x = int(input("enter value x "))
y = int(input("enter value y "))
print(my_module.add(x,y))
print(my_module.sub(x,y))


import hello
print(hello.add(3,4))