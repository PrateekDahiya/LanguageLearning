a = '''Hola - Hello
Adiós - Goodbye
Gracias - Thank you
Por favor - Please
Sí - Yes
No - No
Amigo/amiga - Friend
Casa - House
Perro - Dog
Gato - Cat
Agua - Water
Comida - Food
Feliz - Happy
Triste - Sad
Pequeño/pequeña - Small
Grande - Big
Caliente - Hot
Frío - Cold
Rojo - Red
Azul - Blue'''

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
