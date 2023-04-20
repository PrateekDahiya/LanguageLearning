a = '''Wie geht es dir? - How are you?
Mir geht es gut, danke. - I'm fine, thank you.
Ich spreche kein Deutsch. - I don't speak German.
Kannst du das bitte wiederholen? - Can you please repeat that?
Ich verstehe nicht. - I don't understand.
Wo ist die Toilette? - Where is the toilet?
Was ist das? - What is that?
Ich heiße (Name). - My name is (Name).
Wie spät ist es? - What time is it?
Entschuldigung - Excuse me/I'm sorry.
Ich komme aus Deutschland. - I'm from Germany.
Ich lerne Deutsch. - I'm learning German.
Was möchtest du trinken? - What would you like to drink?
Kannst du mir helfen, bitte? - Can you help me, please?
Ich liebe dich. - I love you.
Das ist fantastisch! - That's fantastic!
Ich bin müde. - I'm tired.
Wo ist der Bahnhof? - Where is the train station?
Ich habe eine Frage. - I have a question.
Wie heißt das auf Deutsch? - What is that called in German?'''

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
