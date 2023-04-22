a = '''Hola, ¿cómo estás? - Hello, how are you?
Me llamo Ana. - My name is Ana.
¿Dónde está el baño? - Where is the bathroom?
Quiero una cerveza, por favor. - I want a beer, please.
¿Qué hora es? - What time is it?
Yo vivo en Madrid. - I live in Madrid.
¿Cuánto cuesta esto? - How much does this cost?
¿Puedo ayudarte? - Can I help you?
La comida está deliciosa. - The food is delicious.
Me gusta mucho bailar. - I really like to dance.
Estoy cansado/cansada. - I am tired.
¿Cómo te llamas? - What is your name?
¿De dónde eres? - Where are you from?
Necesito ir al supermercado. - I need to go to the supermarket.
¿Qué planes tienes para hoy? - What plans do you have for today?
Soy estudiante. - I am a student.
¿Puedo tener la cuenta, por favor? - Can I have the check, please?
Me gusta leer libros. - I like to read books.
¿Tienes alguna pregunta? - Do you have any questions?
¿Qué tiempo hace hoy? - What is the weather like today?'''

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
