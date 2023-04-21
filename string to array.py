a = '''
Mujhe samajh mein nahi aa raha hai ki main kya karoon. - I am not sure what to do.
Agar tum apne kaam mein lagaoge to safalta zaroor milegi. - If you work hard, you will definitely succeed.
Main yahan aane se pahle kabhi nahin aaya tha. - I had never been here before coming here.
Aapne jo bhi kaha hai, main uske saath poori tarah sehmat nahi hoon. - I don't completely agree with everything you said.
Mainne tumhare liye itni mehnat ki hai, kripaya ise barbaad na karo. - I have worked so hard for you, please don't ruin it.
Kya tumne apni zimmedari se bhagna shuru kar diya hai? - Have you started to run away from your responsibilities?
Mainne apna kaam poora kiya hai, ab aapki baari hai. - I have completed my work, now it's your turn.
Uske andar bahut sahas aur dridh sankalp hai. - He has a lot of courage and determination inside him.
Main kuch dinon ke liye shahar se bahar ja raha hoon. - I am going out of the city for a few days.
Jis tarah se tum apni zindagi guzaar rahe ho, usse mujhe badi khushi milti hai. - I am very happy with the way you are living your life.
'''

z = []
y = []
z.extend(a.split("\n"))
for fg in z:
    y.extend(fg.split("-"))
# print(y)
french = []
english = []
count = 1
for _ in y:
    if count % 2 == 0:
        english.append(_)
    else:
        french.append(_)
    count += 1

print(english)
print(french)
