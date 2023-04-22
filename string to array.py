
a = '''Hola-Hello,
 ¿cómo estás?-how are you?
Gracias-Thank you.
Por favor-Please.
Lo siento-I'm sorry.
Buenos días-Good morning.
Buenas tardes-Good afternoon.
Buenas noches-Good evening/night.
Adiós-Goodbye.
¿Cómo te llamas?-What is your name?
Me llamo [nombre]-My name is [name].
¿Qué tal?-How's it going?
Mucho gusto-Nice to meet you.
De nada-You're welcome.
¿Hablas inglés?-Do you speak English?
No entiendo-I don't understand.
¿Dónde está el baño?-Where is the bathroom?
Estoy perdido-I'm lost.
¿Qué hora es?-What time is it?
Tengo hambre-I'm hungry.
¿Puedes ayudarme?-Can you help me?'''


z = []
y = []
z.extend(a.split("\n"))
for fg in z:
    y.extend(fg.split("-"))
# print(y)
french = []
english = []
count=1
for _ in y:
    if count % 2 == 0:
        english.append(_)
    else:
        french.append(_)
    count+=1

print(english)
print(french)

