const urlParams = new URLSearchParams(window.location.search);
const langid = urlParams.get('langid');
const atword = parseInt(urlParams.get('atword'));
var div_num;
var language;
var wordsarr;
var i = 0;
i = atword;
var divtext = ['Beginner', 'Moderate', 'Advanced', 'Hard'];
var speak_lang;


// Loading Page
setInterval(hide_loading, 1000);
function hide_loading() {
    document.getElementById('loading-back').style.display = "none";
    document.getElementById('loading').style.display = "none";
}

// Words
let chinese_Beg = [[' Hello', 'nǐ hǎo', '你好 '], [' Thank you', 'xiè xiè', '谢谢 '], [' Sorry', 'duì bù qǐ', '对不起 '], [" It's okay", 'méi guān xi', '没关系 '], [' Yes', 'shì', '是 '], [' No', 'bù shì', '不是 '], [' Friend', 'péng yǒu', '朋友 '], [' Family or home', 'jiā', '家 '], [' Food', 'shí wù', '食物 '], [' Water', 'shuǐ', '水 '], [' Love', 'ài', '爱 '], [' Like', 'xǐ huān', '喜欢 '], [' Week', 'xīng qī', '星期 '], [' Morning', 'shàng wǔ', '上午 '], [' Afternoon', 'xià wǔ', '下午 '], [' Evening', 'wǎn shàng', '晚上 '], [' Time', 'shí jiān', '时间 '], [' Money', 'qián', '钱 '], [' Store', 'shāng diàn', '商店 '], [' School', 'xué xiào', '学校 '], [' Hospital', 'yī yuàn', '医院 '], [' Park', 'gōng yuán', '公园 '], [' Library', 'tú shū guǎn', '图书馆 '], [' Restaurant', 'fàn diàn', '饭店 '], [' Train station', 'huǒ chē zhàn', '火车站 '], [' Movie theater', 'diàn yǐng yuàn', '电影院 '], [' On the way', 'lù shàng', '路上 '], [' Sit', 'zuò', '坐 '], [' Stand', 'zhàn', '站 '], [' Run', 'pǎo', '跑 ']];
let chinese_Mod = [[' How are you?', 'Nǐ hǎo ma?', '你好吗？'], [' Thank you.', 'Xièxiè.', '谢谢。'], [' Sorry.', 'Duìbùqǐ.', '对不起。'], [" It's okay.", 'Méiguānxi.', '没关系。'], [' Goodbye.', 'Zàijiàn.', '再见。'], [' Good morning.', 'Zǎoshang hǎo.', '早上好。'], [' Good evening.', 'Wǎnshàng hǎo.', '晚上好。'], [' My name is...', 'Wǒ jiào…', '我叫…'], [" What's your name?", 'Nǐ jiào shénme míngzi?', '你叫什么名字？'], [' Nice to meet you.', 'Hěn gāoxìng rènshì nǐ.', '很高兴认识你。'], [" Sorry, I don't speak Chinese.", 'Duìbùqǐ, wǒ bù huì shuō zhōngwén.', '对不起，我不会说中文。'], [' Please speak slower.', 'Qǐng shuō màn yīdiǎn.', '请说慢一点。'], [" I don't know.", 'Wǒ bù zhīdào.', '我不知道。'], [' Okay.', 'Hǎo de.', '好的。'], [' Another cup of tea, please.', 'Zài lái yī bēi chá.', '再来一杯茶。'], [" I'm glad to meet you.", 'Wǒ hěn gāoxìng rènshí nǐ.', '我很高兴认识你。'], [' What would you like to drink?', 'Nǐ xiǎng yào hē shénme?', '你想要喝什么？'], [" Let's go eat.", 'Wǒmen qù chīfàn ba.', '我们去吃饭吧。'], [' You speak Chinese very well.', 'Nǐ de zhōngwén shuō dé hěn hǎo.', '你的中文说得很好。'], [' Excuse me, how do I get to the restroom?', 'Qǐngwèn qù xǐshǒujiān zěnme zǒu?', '请问去洗手间怎么走？']];
let chinese_Adv = [[' We must work hard to achieve success.', 'Wǒmen bìxū nǔlì gōngzuò cáinéng qǔdé chénggōng.', '我们必须努力工作才能取得成功。 '], [' His attitude disappoints me.', 'Tā de tàidù ràng wǒ gǎndào shīwàng.', '他的态度让我感到失望。 '], [' This problem requires more discussion.', 'Zhège wèntí xūyào gèng duō de tǎolùn.', '这个问题需要更多的讨论。 '], [' She is my teacher and I have a lot of respect for her.', 'Tā shì wǒ de lǎoshī, wǒ fēicháng zūnjìng tā.', '她是我的老师，我非常尊敬她。 '], [' We must protect the environment and think about the future.', 'Wǒmen bìxū bǎohù huánjìng, wèi wèilái zhuóxiǎng.', '我们必须保护环境，为未来着想。 '], [' We should give young people more opportunities to show their talents.', 'Wǒmen yīnggāi gěi niánqīng rén gèng duō jīhuì fāhuī zìjǐ de cáinéng.', '我们应该给年轻人更多机会发挥自己的才能。 '], [' Our goal is to make the world a better place.', 'Wǒmen de mùbiāo shì ràng shìjiè gèngjiā měihǎo.', '我们的目标是让世界更加美好。 '], [' We should try to avoid wasting resources.', 'Wǒmen yīnggāi jǐnliàng bìmiǎn làngfèi zīyuán.', '我们应该尽量避免浪费资源。 '], [' He is a very talented musician.', 'Tā shì yī wèi fēicháng yǒu cáihuá de yīnyuèjiā.', '他是一位非常有才华的音乐家。 '], [' We should respect different cultures and customs.', 'Wǒmen yīnggāi zūnzhòng bùtóng de wénhuà hé xísú.', '我们应该尊重不同的文化和习俗。 '], [' We need more time to solve this problem.', 'Wǒmen xūyào gèng duō de shíjiān lái jiějué zhège wèntí.', '我们需要更多的时间来解决这个问题。 '], [' We should believe in ourselves and never give up.', 'Wǒmen yào xiāngxìn zìjǐ, yǒngbù fàngqì.', '我们要相信自己，永不放弃。 '], [' This question is not easy to answer.', 'Zhège wèntí bù róngyì huídá.', '这个问题不容易回答。 '], [' We must take action immediately.', 'Wǒmen bìxū lìjí cǎiqǔ xíngdòng.', '我们必须立即采取行动。 '], [' Their views are somewhat biased.', 'Tāmen de guāndiǎn yǒuxiē piānjiàn.', '他们的观点有些偏见。 '], [" This is the best advice I've ever heard.", 'Zhè shì wǒ tīngguò de zuì hǎo de jiànyì.', '这是我听过的最好的建议。 '], [' We need more information to make a decision.', 'Wǒmen xūyào gèng duō de xìnxī cáinéng zuò chū juédìng.', '我们需要更多的信息才能做出决定。 '], [" We can't wait any longer, we must take action.", 'Wǒmen bùnéng zài děngle, bìxū cǎiqǔ xíngdòng.', '我们不能再等了，必须采取行动。 '], [' We must solve this problem as soon as possible.', 'Wǒmen bìxū jǐnkuài jiějué zhège wèntí.', '我们必须尽快解决这个问题。 ']];
let french_Beg = [[' Hello', 'Bonjour '], [' Thank you', 'Merci '], [' Yes', 'Oui '], [' No', 'Non '], [' Please', "S'il vous plaît "], [' Goodbye', 'Au revoir '], [' How are you?', 'Comment ça va? '], [' Good', 'Bien '], [' Bad', 'Mal '], [' Thank you very much', 'Merci beaucoup '], [" You're welcome", 'De rien '], [' Excuse me', 'Excusez moi '], [' Sorry', 'Pardon '], [' Good night', 'Bonne nuit '], [' See you soon', 'À bientôt '], [' Mr.', 'Monsieur '], [' Mrs.', 'Madame '], [' Miss', 'Mademoiselle '], [' Dog', 'Chien '], [' Cat', 'Chat '], [' House', 'Maison '], [' Car', 'Voiture '], [' Bread', 'Pain '], [' Water', 'Eau '], [' Apple', 'Pomme '], [' Banana', 'Banane '], [' Book', 'Livre '], [' School', 'École '], [' Work', 'Travail '], [' Hour', 'Heure ']];
let french_Mod = [[' Hello!', 'Bonjour! '], [' How are you?', 'Comment ça va? '], [' My name is Sophie.', "Je m'appelle Sophie. "], [' What is your name?', "Comment t'appelles tu? "], [' I am happy.', 'Je suis content(e). '], [' I am tired.', 'Je suis fatigué(e). '], [' Thank you very much.', 'Merci beaucoup. '], [" You're welcome.", 'De rien. '], [' Yes, I understand.', 'Oui, je comprends. '], [" No, I don't understand.", 'Non, je ne comprends pas. '], [' Excuse me.', 'Excusez moi. '], [' Goodbye!', 'Au revoir! '], [" I don't know.", 'Je ne sais pas. '], [' I like music.', "J'aime la musique. "], [" I don't like vegetables.", "Je n'aime pas les légumes. "], [' What time is it?', 'Quelle heure est il? '], [' How much does it cost?', 'Combien ça coûte? '], [' I am going to the cinema.', 'Je vais au cinéma. '], [" It's nice weather today.", "Il fait beau aujourd'hui. "], [' I am hungry.', "J'ai faim. "]];
let french_Adv = [["I'm thinking about what I'm going to do.", 'Je suis en train de réfléchir à ce que je vais faire. '], ['I was impressed by his speech.', "J'ai été impressionné par son discours. "], [' We talked for hours.', 'Nous avons discuté pendant des heures. '], [' She achieved her childhood dream.', "Elle a réalisé son rêve d'enfant. "], [" It's time to make a decision.", 'Il est temps de prendre une décision. '], [' We worked hard to achieve this goal.', 'Nous avons travaillé dur pour atteindre cet objectif. '], [" I'm passionate about classical music.", 'Je suis passionné par la musique classique. '], [' She took the initiative to solve the problem.', "Elle a pris l'initiative de résoudre le problème. "], [" I've had the opportunity to travel a lot.", "J'ai eu l'occasion de voyager beaucoup. "], [" It's important to take other people's opinions into account.", 'Il est important de prendre en compte les opinions des autres. '], [' We must consider all options before making a decision.', 'Nous devons envisager toutes les options avant de prendre une décision. '], [' She is extremely talented in mathematics.', 'Elle est extrêmement douée en mathématiques. '], [' The project requires a creative approach.', 'Le projet nécessite une approche créative. '], [" It's important to maintain a balance between work and personal life.", 'Il est important de maintenir un équilibre entre vie professionnelle et vie privée. '], [' We discussed the possibility of collaborating on a joint project.', 'Nous avons discuté de la possibilité de collaborer sur un projet commun. '], [' She was appointed CEO of the company.', "Elle a été nommée directrice générale de l'entreprise. "], [" I was moved by the artist's thankyou speech.", "J'ai été ému par le discours de remerciement de l'artiste. "], [' We need to find an innovative solution to this problem.', 'Nous devons trouver une solution innovante pour ce problème. '], [' She demonstrated great resilience in the face of adversity.', "Elle a fait preuve d'une grande résilience face à l'adversité. "], [' Trust is a key element for a healthy and productive relationship.', 'La confiance est un élément clé pour une relation saine et productive. ']];
let german_Beg = [[' Hello', 'Hallo '], [' Good morning', 'Guten Morgen '], [' Good day', 'Guten Tag '], [' Goodbye', 'Auf Wiedersehen '], [' Thank you', 'Danke '], [' Please', 'Bitte '], [' Yes', 'Ja '], [' No', 'Nein '], [' I', 'Ich '], [' You (singular)', 'Du '], [' He', 'Er '], [' She', 'Sie '], [' It', 'Es '], [' We', 'Wir '], [' You (plural)', 'Ihr '], [' They/You (formal)', 'Sie '], [' Food', 'Essen '], [' Drink', 'Trinken '], [' Water', 'Wasser '], [' Bread', 'Brot '], [' Milk', 'Milch '], [' Coffee', 'Kaffee '], [' Tea', 'Tee '], [' Apple', 'Apfel '], [' Banana', 'Banane '], [' Car', 'Auto '], [' House', 'Haus '], [' School', 'Schule '], [' Clock/watch', 'Uhr '], ['Time', 'Zeit']];
let german_Mod = [[' How are you?', 'Wie geht es dir? '], [" I'm fine, thank you.", 'Mir geht es gut, danke. '], [" I don't speak German.", 'Ich spreche kein Deutsch. '], [' Can you please repeat that?', 'Kannst du das bitte wiederholen? '], [" I don't understand.", 'Ich verstehe nicht. '], [' Where is the toilet?', 'Wo ist die Toilette? '], [' What is that?', 'Was ist das? '], [' My name is (Name).', 'Ich heiße (Name). '], [' What time is it?', 'Wie spät ist es? '], [" Excuse me/I'm sorry.", 'Entschuldigung '], [" I'm from Germany.", 'Ich komme aus Deutschland. '], [" I'm learning German.", 'Ich lerne Deutsch. '], [' What would you like to drink?', 'Was möchtest du trinken? '], [' Can you help me, please?', 'Kannst du mir helfen, bitte? '], [' I love you.', 'Ich liebe dich. '], [" That's fantastic!", 'Das ist fantastisch! '], [" I'm tired.", 'Ich bin müde. '], [' Where is the train station?', 'Wo ist der Bahnhof? '], [' I have a question.', 'Ich habe eine Frage. '], [' What is that called in German?', 'Wie heißt das auf Deutsch? ']];
let german_Adv = [[' Time heals all wounds.', 'Die Zeit heilt alle Wunden. '], [' I am excited because I have my exam tomorrow.', 'Ich bin aufgeregt, weil ich morgen meine Prüfung habe. '], [" I am sorry I couldn't come to the meeting yesterday.", 'Es tut mir leid, dass ich gestern nicht zum Treffen kommen konnte. '], [' I am looking forward to traveling to Germany soon.', 'Ich freue mich darauf, bald nach Deutschland zu reisen. '], [' The world is a book, and those who do not travel read only one page.', 'Die Welt ist ein Buch, und wer nicht reist, liest nur eine Seite. '], [" I haven't spoken to my sister for years.", 'Ich habe seit Jahren nicht mehr mit meiner Schwester gesprochen. '], [' It is important that we all work together to protect the environment.', 'Es ist wichtig, dass wir alle zusammenarbeiten, um die Umwelt zu schützen. '], [' I will help you improve your German.', 'Ich werde dir helfen, dein Deutsch zu verbessern. '], [' We missed the train because we arrived too late.', 'Wir haben den Zug verpasst, weil wir zu spät gekommen sind. '], [' The food in this restaurant is excellent.', 'Das Essen in diesem Restaurant ist ausgezeichnet.']];
let hindi_Beg = [[' Hello', 'Namaste '], [' Thank you', 'Shukriya '], [' Yes', 'Haan '], [' No', 'Nahin '], [' Food', 'Khana '], [' Water', 'Pani '], [' Book', 'Kitab '], [' Friend', 'Saathi '], [' Happiness', 'Khushi '], [' Home', 'Ghar '], [' Peace', 'Shanti '], [' Auspicious', 'Shubh '], [' Color', 'Rang '], [' Lover', 'Aashiq '], [' Self', 'Khud '], [' What', 'Kya '], [' Always', 'Hamesha '], [' Dream', 'Sapna '], [' World', 'Duniya '], [' Health', 'Sehat ']];
let hindi_Mod = [[' Yes, I came.', 'Haan, main aaya. '], [' No, I did not come.', 'Nahi, main nahi aaya. '], [' What happened?', 'Kya hua? '], [' Will you help me?', 'Kya tum mujhe madad karoge? '], [' I am hungry.', 'Mujhe bhook lagi hai. '], [' I need some water.', 'Mujhe thoda sa pani chahiye. '], [' I am tired.', 'Main thak gaya hoon. '], [' I like to stay here.', 'Mujhe yahaan rehna pasand hai. '], [' Where are you from?', 'Tum kahaan se aaye ho? '], [' I want to meet you.', 'Main aapse milna chahta hoon. '], [' I want to go here.', 'Mujhe yahan jaana hai. '], [' I want to talk to you.', 'Main tumse baat karna chahta hoon. '], [' Where are you going?', 'Tum kahan jaa rahe ho? '], [' Today the weather is good.', 'Aaj mausam achha hai. '], [' I like this.', 'Mujhe yeh pasand hai. ']];
let hindi_Adv = [[' I am not sure what to do.', 'Mujhe samajh mein nahi aa raha hai ki main kya karoon. '], [' If you work hard, you will definitely succeed.', 'Agar tum apne kaam mein mann lagaoge to safalta zaroor milegi. '], [' I had never been here before coming here.', 'Main yahan aane se pahle kabhi nahin aaya tha. '], [" I don't completely agree with everything you said.", 'Aapne jo bhi kaha hai, main uske saath poori tarah sehmat nahi hoon. '], [" I have worked so hard for you, please don't ruin it.", 'Mainne tumhare liye itni mehnat ki hai, kripaya ise barbaad na karo. '], [' Have you started to run away from your responsibilities?', 'Kya tumne apni zimmedari se bhagna shuru kar diya hai? '], [" I have completed my work, now it's your turn.", 'Mainne apna kaam poora kiya hai, ab aapki baari hai. '], [' He has a lot of courage and determination inside him.', 'Uske andar bahut sahas aur dridh sankalp hai. '], [' I am going out of the city for a few days.', 'Main kuch dinon ke liye shahar se bahar ja raha hoon. '], [' I am very happy with the way you are living your life.', 'Jis tarah se tum apni zindagi guzaar rahe ho, usse mujhe badi khushi milti hai. ']];
let japanese_Beg = [[' Hello', 'Konnichiwa', 'こんにちは '], [' Thank you', 'Arigatou', 'ありがとう '], ['I love you', 'Aishitemasu', '愛してます'], [' Sorry', 'Sumimasen', 'すみません '], [' Good morning', 'Ohayou gozaimasu', 'おはようございます '], [' Good evening', 'Konbanwa', 'こんばんは '], [' Yes', 'Hai', 'はい '], [' No', 'Iie', 'いいえ '], [' Please', 'Onegaishimasu', 'お願いします '], ['I\'m sorry', 'Gomen nasai', 'ごめんなさい '], [' Goodbye', 'Sayonara', 'さようなら '], [' Cat', 'Neko', '猫 '], [' Dog', 'Inu', '犬 '], [' Fish', 'Sakana', '魚 '], [' Flower', 'Hana', '花 '], [' Mountain', 'Yama', '山 '], [' River', 'Kawa', '川 '], [' Weather', 'Tenki', '天気 '], [' School', 'Gakkou', '学校 '], [' Book', 'Hon', '本 '], [' Train', 'Densha', '電車 '], [' Airplane', 'Hikouki', '飛行機 '], [' Travel', 'Ryokou', '旅行 '], [' Foreigner', 'Gaikokujin', '外国人 '], [' Food', 'Tabemono', '食べ物 '], [' Drink', 'Nomimono', '飲み物 '], [' Family', 'Kazoku', '家族 '], [' Friend', 'Tomodachi', '友達 '], [' Language', 'Gengo', '言語 '], [' History', 'Rekishi', '歴史 '], [' Culture', 'Bunka', '文化 ']];
let japanese_Mod = [[' Good morning.', 'Ohayou gozaimasu.', 'おはようございます。 '], [' Thank you.', 'Arigatou.', 'ありがとう。 '], [' Excuse me.', 'Sumimasen.', 'すみません。 '], [" I'm sorry.", 'Gomen nasai.', 'ごめんなさい。 '], [" Yes, that's correct.", 'Hai, sou desu.', 'はい、そうです。 '], [" No, that's incorrect.", 'Iie, chigaimasu.', 'いいえ、違います。 '], [' Please.', 'Onegaishimasu.', 'お願いします。 '], [' Goodbye.', 'Sayonara.', 'さようなら。 '], [" You're welcome.", 'Dou itashimashite.', 'どういたしまして。 '], [' What is your name?', 'Namae wa nan desu ka?', '名前は何ですか？ '], [" Let's eat (before a meal).", 'Itadakimasu.', 'いただきます。 '], [' Thank you for the meal (after a meal).', 'Gochisousama deshita.', 'ごちそうさまでした。 '], [' What time is it now?', 'Ima nanji desu ka?', '今何時ですか？ '], [' How are you?', 'Ogenki desu ka?', 'お元気ですか？ '], [" I'm fine.", 'Genki desu.', '元気です。 '], [' Goodnight.', 'Oyasuminasai.', 'お休みなさい。 '], [' Thank you for your hard work.', 'Otsukaresama desu.', 'お疲れ様です。 '], [' Please come in.', 'Douzo oagari kudasai.', 'どうぞお上がりください。 '], [' Are you okay?', 'Daijoubu desu ka?', '大丈夫ですか？ '], [' Where are you from?', 'Doko kara kimashita ka?', 'どこから来ましたか？ ']];
let japanese_Adv = [[' She can speak Japanese fluently.', 'Kanojo wa nihongo o jouzu ni hanasemasu.', '彼女は日本語を上手に話せます。 '], [' Japan is a country with four seasons.', 'Nihon wa shiki ga aru kuni desu.', '日本は四季がある国です。 '], [' I am planning to travel to Kyoto next week.', 'Watashi wa raishuu, Kyoto ni ryokou ni iku yotei desu.', '私は来週、京都に旅行に行く予定です。 '], [' He is studying abroad in Japan.', 'Kare wa Nihon ni ryuugaku shiteimasu.', '彼は日本に留学しています。 '], [' I am interested in Japanese culture.', 'Nihon no bunka ni kyoumi ga arimasu.', '日本の文化に興味があります。 '], [' Tokyo is one of the cities with a large population.', 'Tokyo wa jinkou ga ooi toshi no hitotsu desu.', '東京は人口が多い都市の一つです。 '], [' There are many beautiful shrines and temples in Japan.', 'Nihon ni wa takusan no utsukushii jinja ya jiin ga arimasu.', '日本にはたくさんの美しい神社や寺院があります。 '], [' The number of foreigners studying Japanese is increasing.', 'Nihongo o benkyou shiteiru gaikokujin ga fuete imasu.', '日本語を勉強している外国人が増えています。 '], [' Japanese anime and manga are famous worldwide.',
    'Nihon no anime ya manga wa sekaiteki ni yuumei desu.', '日本のアニメや漫画は世界的に有名です。 '], [' Japanese cuisine is delicious, especially sushi is recommended.', 'Nihon ryouri wa oishii desu. Tokuni sushi wa osusume desu.', '日本料理は美味しいです。特に寿司はおすすめです。 '], [" Japan's transportation system is highly developed.", 'Nihon no koutsuu kikan wa hijou ni hatten shiteimasu.', '日本の交通機関は非常に発展しています。 '], [' Japanese high school students are enthusiastic about studying.', 'Nihon no koukousei wa benkyou ni nesshin desu.', '日本の高校生は勉強に熱心です。 '], [' Japanese companies are famous worldwide.', 'Nihon no kigyou wa sekaiteki ni yuumei desu.', '日本の企業は世界的に有名です。 '], [' Japanese public facilities are clean and easy to use.', 'Nihon no koukyou shisetsu wa seiketsu de tsukaiyasui desu.', '日本の公共施設は清潔で使いやすいです。 '], [" Japan's nature is beautiful.", 'Nihon no shizen wa utsukushii desu.', '日本の自然は美しいです。 '], [' Japanese houses are built with strong structures that can withstand earthquakes.', 'Nihon no juutaku wa jishin ni tsuyoi kouzou ni natteimasu.', '日本の住宅は地震に強い構造になっています。 '], [" Japan's education system boasts a high level of excellence.", 'Nihon no kyouiku seido wa takai reberu o hokotteimasu.', '日本の教育制度は高いレベルを誇っています。 '], [" Japan's traditional culture is being carefully preserved.", 'Nihon no dentou bunka wa taisetsu ni mamorareteimasu.', '日本の伝統文化は大切に守られています。 '], [' Japan is a very safe country.', 'Nihon wa hijou ni anzen na kuni desu.', '日本は非常に安全な国です。 '], [" Japan's medical technology is among the world's top level.", 'Nihon no iryou gijutsu wa sekai toppu reberu desu.', '日本の医療技術は世界トップレベルです。 ']];
let korean_Beg = [[' Hello', 'annyeonghaseyo', '안녕하세요 '], [' Thank you', 'gamsahamnida', '감사합니다 '], [' Sorry', 'joesonghamnida', '죄송합니다 '], [' Yes', 'ye', '예 '], [' No', 'anio', '아니오 '], [' Friend', 'chingu', '친구 '], [' Family', 'gajok', '가족 '], [' Food', 'eumsik', '음식 '], [' Water', 'mul', '물 '], [' School', 'hakgyo', '학교 '], [' Love', 'sarang', '사랑 '], [' Joy', 'gippeum', '기쁨 '], [' Sadness', 'seulpeum', '슬픔 '], [' Health', 'geongang', '건강 '], [' Help', 'doum', '도움 '], [' Thank you', 'gomawoyo', '고마워요 '], [" I'm sorry", 'mianhaeyo', '미안해요 '], [' Day', 'il', '일 '], [' Night', 'bam', '밤 '], [' Read', 'ikda', '읽다 '], [' Write', 'sseuda', '쓰다 '], [' Listen', 'deutda', '듣다 '], [' Speak', 'malhada', '말하다 '], [' Understand', 'ihaehada', '이해하다 '], [' See', 'boda', '보다 '], [' Photo', 'sajin', '사진 '], [' Travel', 'yeohaeng', '여행 '], [' Music', 'eumak', '음악 '], [' Movie', 'yeonghwa', '영화 '], [' Dance', 'chum', '춤 ']];
let korean_Mod = [[' Hello?', 'annyeonghaseyo?', '안녕하세요? '], [' Yes, thank you.', 'ne, gamsahamnida.', '네, 감사합니다. '], [" I'm sorry, I made a mistake.", 'joesonghamnida, jalmoshaesseoyo.', '죄송합니다, 잘못했어요. '], [' I am learning Korean.', 'jeoneun hangugeo reul baeugo isseoyo.', '저는 한국어를 배우고 있어요. '], [" Today's weather is good.", 'oneul nalssiga johayo.', '오늘 날씨가 좋아요. '], [' Where are you going?', 'eodie gago isseoyo?', '어디에 가고 있어요? '], [' I ate food.', 'bapeul meogeosseoyo.', '밥을 먹었어요. '], [' I live in Korea.', 'jeoneun hanguke salgo isseoyo.', '저는 한국에 살고 있어요. '], [' Read this book.', 'i chaek eul ilgeo bwayo.', '이 책을 읽어 봐요. '], [' I take a walk in the park and relax.', 'gong won eseo sanchaekhamyeonseo hyusikhaeyo.', '공원에서 산책하면서 휴식해요. '], [' What day is it today?', 'oneul eun museun yoil ieyo?', '오늘은 무슨 요일이에요? '], [' Would you like to have dinner together?', 'jeonyeok siksa reul hamkke hasillae yo?', '저녁 식사를 함께 하실래요? '], [' How can we solve this problem?', 'i munje reul eotteohge haegyeolhal su iss eulkka yo?', '이 문제를 어떻게 해결할 수 있을까요? '], [' Cheer up! Everything will be fine.', 'himnaeseyo! da jal doel geoyeyo.', '힘내세요! 다 잘 될 거예요. '], [' Where is the nearest subway station from here?', 'yeogieseo gakkawoon jihacheol yeog i eodie issnayo?', '여기에서 가까운 지하철 역이 어디에 있나요? '], [' I enjoy listening to music.', 'jeoneun eumak eul deutneun geos eul johahaeyo.', '저는 음악을 듣는 것을 좋아해요. '], [' Have a good day today.', 'oneul eun joh eun haru bonaeseyo.', '오늘은 좋은 하루 보내세요. '], [' Learning a new language is fun.', 'saeroun eon eo reul baeuneun geos eun jaemiisseoyo.', '새로운 언어를 배우는 것은 재미있어요. '], [' I will take care of this matter.', 'i il eun jega mas eulgeyo.', '이 일은 제가 맡을게요. '], [' I am making travel plans.', 'yeohaeng gyehoeg eul seugo iss eoyo.', '여행 계획을 세우고 있어요. ']];
let korean_Adv = [[' I use an app that helps me learn Korean in Korea.', 'jeoneun hangugeseo hangugeo reul baeuneunde doum eul juneun eopeul eul sayonghamnida.', '저는 한국에서 한국어를 배우는데 도움을 주는 어플을 사용합니다. '], [' By cooking Korean food, you can learn about Korean culture.', 'hangug eumsig eul mandeul eo bomyeonseo hangug munhwa e daehae baeul su iss eoyo.', '한국 음식을 만들어 보면서 한국 문화에 대해 배울 수 있어요. '], [' Watching Korean dramas and movies can help improve your Korean language skills.', 'hangug deurama wa yeonghwa reul bomyeonseo hangug eo sill yeog eul hyangsang sikil su iss eoyo.', '한국 드라마와 영화를 보면서 한국어 실력을 향상시킬 수 있어요. '], [' I visited many tourist attractions while traveling in Korea.', 'hangug e yeohaenghamyeonseo manh eun gwangwangji reul bangmunhaess eoyo.', '한국에 여행하면서 많은 관광지를 방문했어요. '], [' I made friends with Koreans while living in Korea.', 'hangug eseo saneun dong an hangug indeul gwa chingu ga doeeoss eoyo.', '한국에서 사는 동안 한국인들과 친구가 되었어요. '], [' I took Korean conversation classes and was able to apply it in real life situations.', 'hangug eo hoe hwa sueob eul deutgo silsaenghwal eseo hwalyonghal su iss eoss eoyo.', '한국어 회화 수업을 듣고 실생활에서 활용할 수 있었어요. '], [' I wanted to deeply understand Korean culture, so I participated in traditional Korean events.', 'hangug munhwa e daehae gipi ihaehago sip eoseo hangug ui jeontong haengsa e chamyeohess eoyo.', '한국 문화에 대해 깊이 이해하고 싶어서 한국의 전통 행사에 참여했어요. '], [' I studied Korean economy and gained an understanding of the business environment in Korea.', 'hangug gyeongje e daehae yeonguhamyeo hangug ui bizeuniseu hwangen eul ihaehaess eoyo.', '한국 경제에 대해 연구하며 한국의 비즈니스 환경을 이해했어요. '], [' As a foreign student in Korea, I achieved academic success.', 'hangug eseo oegugin yuhagsaeng euloseo hakmunjeog in seong gwaleul ilu eoss eoyo.', '한국에서 외국인 유학생으로서 학문적인 성과를 이루었어요. '], [' Through discussions with Koreans, I gained diverse perspectives.', 'hangug in gwaeui toloneul tonghae dayanghan sigag eul eodeul su iss eoss eoyo.', '한국인과의 토론을 통해 다양한 시각을 얻을 수 있었어요. ']];
let russian_Beg = [[' Hello', 'privet', 'Привет '], [' Thank you', 'spasibo', 'Спасибо '], [' Yes', 'da', 'Да '], [' No', 'net', 'Нет '], [' Please', 'pozhaluysta', 'Пожалуйста '], [' Excuse me', 'izvinite', 'Извините '], [' Coffee', 'kofe', 'Кофе '], [' Tea', 'chay', 'Чай '], [' Water', 'voda', 'Вода '], [' Milk', 'moloko', 'Молоко '], [' Bread', 'hleb', 'Хлеб '], [' Salt', "sol'", 'Соль '], [' Sugar', 'sakhar', 'Сахар '], [' Meat', 'myaso', 'Мясо '], [' Fish', 'ryba', 'Рыба '], [' Egg', 'yaytso', 'Яйцо '], [' Soup', 'sup', 'Суп '], [' Fruits', 'frukty', 'Фрукты '], [' Vegetables', 'ovoschi', 'Овощи '], [' Flowers', 'cvety', 'Цветы '], [' Book', 'kniga', 'Книга '], [' Table', 'stol', 'Стол '], [' Chair', 'stul', 'Стул '], [' Window', 'okno', 'Окно '], [' Door', "dver'", 'Дверь '], [' Key', 'klyuch', 'Ключ '], [' Telephone', 'telefon', 'Телефон '], [' Computer', 'kompyuter', 'Компьютер '], [' Music', 'muzyka', 'Музыка '], [' Time', 'vremya', 'Время ']];
let russian_Mod = [[' Hello! How are you?', 'Privet! Kak dela?', 'Привет! Как дела?'], [' Thank you for your help.', 'Spasibo za pomoshch.', 'Спасибо за помощь. '], [" Excuse me, I don't understand.", 'Izvinite, ya ne ponimayu.', 'Извините, я не понимаю. '], [' Can I have some water, please?', "Možno poprosit' vodu?", 'Можно попросить воду? '], [' Where is the restroom?', 'Gde nakhoditsya tualet?', 'Где находится туалет? '], [' I want to order coffee.', "Ya hoču zakazat' kofe.", 'Я хочу заказать кофе. '], [' What is your name?', 'Kak vas zovut?', 'Как вас зовут? '], [' How much does this cost?', "Skol'ko stoit eto?", 'Сколько стоит это? '], [' I love you.', 'Ya lyublyu tebya.', 'Я люблю тебя. '], [' Today is good weather.', 'Segodnya khoroshaya pogoda.', 'Сегодня хорошая погода. '], [' What is your name?', 'Kak tebya zovut?', 'Как тебя зовут? '], [' I want to eat.', "Ya hochu poest'", 'Я хочу поесть. '], [' What is your favorite book?', 'Kakaya u tebya lyubimaya kniga?', 'Какая y тебя любимая книга? '], [' Where can I find an ATM?', 'Gde ya mogu nayti bankomat?', 'Где я могу найти банкомат? '], [' How long is the trip to the city?', 'Kak dolgo dlitsya poezdka do goroda?', 'Как долго длится поездка до города? '], [' Can I have the bill, please?', "Možno poprosit' schet?", 'Можно попросить счет? '], [' I am learning to speak Russian.', "YA uchus' govorit' po russki.", 'Я учусь говорить по русски.'], [' What is your favorite movie?', 'Kakoy u tebya lyubimyy film?', 'Какой y тебя любимый фильм? '], [' I am busy today.', 'Segodnya ya zanyat.', 'Сегодня я занят. '], [' How do I get to the airport?', "Kak dobrat'sya do aeroporta?", 'Как добраться до аэропорта? ']];
let russian_Adv = [[' I have been studying Russian for several years.', "Ya izuchayu russkiy yazyk uzhe neskol'ko let.", 'Я изучаю русский язык уже несколько лет. '], [' I have Russian speaking friends with whom I practice the language.', "U menya est' russkoyazychnye druz'ya, s kotorymi ya praktikuyu yazyk.", 'У меня есть русскоязычные друзья, с которыми я практикую язык. '], [' Reading classic Russian literature helps expand vocabulary.', "Chtenie klassicheskoy russkoy literatury pomogaet rasshiryt' slovarenyy zapas.", 'Чтение классической русской литературы помогает расширить словарный запас. '], [' I attend Russian language events to immerse myself in the language environment.', "Ya poseschayu russkoyazychnye meropriyatiya, chtoby okunut'sya v yazykovuyu sredu.", 'Я посещаю русскоязычные мероприятия, чтобы окунуться в языковую среду. '], [' Understanding complex grammatical structures is the key to mastering the Russian language.', 'Ponimanie slozhnykh grammaticheskikh konstruktsiy  klyuch k vladeniyu russkim yazykom.', 'Понимание сложных грамматических конструкций  ключ к владению русским языком. '], [' I watch Russian movies with subtitles to improve my listening practice.', "Ya smotryu russkie filmy s subtitrami, chtoby uluchshit' svoyu slukhovuyu praktiku.", 'Я смотрю русские фильмы с субтитрами, чтобы улучшить свою слуховую практику. '], [" Knowledge of the Russian language helps me expand my circle of communication and understand the country's culture.", "Znanie russkogo yazyka pomogaet mne rasshiryt' krug obshcheniya i ponimat' kulturu strany.", 'Знание русского языка помогает мне расширить круг общения и понимать культуру страны. '], [" I read a Russian book without a dictionary  it's a great achievement for me.", "Ya prochital russkuyu knigu bez slovarya  eto bol'shoy uspek h dlya menya.", 'Я прочитал русскую книгу без словаря  это большой успех для меня. '], [' I communicate with native speakers through online platforms to improve my speaking skills.', "Ya obshchayus' s nositelyami yazyka cherez onlayn platformy, chtoby sovershenstvovat' svoyu rech'.", 'Я общаюсь с носителями языка через онлайн платформы, чтобы совершенствовать свою речь. '], [' Russian language is a beautiful and melodic language worth studying.', "Russkiy yazyk  krasivyy i melodichnyy yazyk, kotoryy stoit izuchat'.", 'Русский язык  красивый и мелодичный язык, который стоит изучать. ']];
let spanish_Beg = [[' Hello', 'Hola '], [' Goodbye', 'Adiós '], [' Thank you', 'Gracias '], [' Please', 'Por favor '], [' Welcome', 'Bienvenido/a '], [' Friend', 'Amigo/a '], [' House', 'Casa '], [' Food', 'Comida '], [' Water', 'Agua '], [' Beach', ' Playa '], [' Mountain', ' Montaña '], [' Party', ' Fiesta '], [' Work', ' Trabajo '], [' School', ' Escuela '], [' Book', ' Libro '], [' Movie', ' Película '], [' Music', ' Música '], [' Trip', ' Viaje '], [' Money', ' Dinero '], [' Sports', ' Deportes ']];
let spanish_Mod = [[' I like to eat pizza.', 'Me gusta comer pizza '], [' How are you?', '¿Cómo estás? '], [' I am from Mexico.', 'Soy de México '], [' What time is it?', '¿Qué hora es? '], [' I am tired.', 'Estoy cansado/a '], [' I like to read books.', 'Me gusta leer libros '], [' Where is the bathroom?', '¿Dónde está el baño? '], [' I speak Spanish and English.', 'Hablo español e inglés '], [' What is your name?', '¿Cuál es tu nombre? '], [' I like to listen to music.', ' Me gusta escuchar música '], [' I am hungry.', ' Tengo hambre '], [' What is your name?', ' ¿Cómo te llamas? '], [' I like to watch movies.', ' Me gusta ver películas '], [' I am happy.', ' Estoy feliz '], [' Where are you from?', ' ¿De dónde eres? '], [' I like to dance.', ' Me gusta bailar '], [' I am sick.', ' Estoy enfermo/a '], [' What day is today?', ' ¿Qué día es hoy? '], [' I like to travel.', ' Me gusta viajar '], [' I am busy.', ' Estoy ocupado/a ']];
let spanish_Adv = [[' Hello, how are you?', ' Hola, ¿cómo estás? '], [' I like pop music.', 'e gusta la música pop. '], [' Where is the bathroom?', 'Dónde está el baño? '], [' My favorite food is pizza.', 'i comida favorita es la pizza. '], [' How much does this cost?', 'Cuánto cuesta esto? '], [' Today is very hot.', 'oy hace mucho calor. '], [' I am from Mexico.', 'oy de México. '], [' Can I help you with anything?', 'Puedo ayudarte en algo? '], [' I love reading adventure books.', 'e encanta leer libros de aventuras. '], [' What time does the movie start?', '¿A qué hora empieza la película? '], [' The beach is my favorite place to relax.', 'La playa es mi lugar favorito para relajarme. '], [' I want to learn to speak French.', 'Quiero aprender a hablar francés. '], [' What is your name?', '¿Cómo te llamas? '], [' Mexican food is very tasty.', 'La comida mexicana es muy sabrosa. '], [' Where do you live?', '¿Dónde vives? '], [' I like going to the movies on weekends.', 'Me gusta ir al cine los fines de semana. '], [' What plans do you have for today?', '¿Qué planes tienes para hoy? '], [' Winter is my favorite season of the year.', 'El invierno es mi estación favorita del año. '], [' Do you want to go for a walk with me?', '¿Quieres salir a pasear conmigo? '], [' I like spending time with my family and friends', 'Me gusta pasar tiempo con mi familia y amigos.']];
let tamil_Beg = [[' Hello', 'vaṇakkam', 'வணக்கம் '], [' Sorry', 'aṇmai yil', 'அண்மையில் '], [' Thank you', 'naṉṟi', 'நன்றி '], [" Let's go", 'pōkkuvōm', 'போக்குவோம் '], [" Let's enjoy", 'makiluvōm', 'மகிழுவோம் '], [' I agree', 'taṅgik koṇṭēn', 'தங்கிக் கொண்டேன் '], [' Avoid', 'vilakiyavai', 'விலகியவை '], [" Don't stop", 'aṭikkāthē', 'அடிக்காதே '], [' I know', 'teriyum', 'தெரியும் '], [' No', 'illai', 'இல்லை '], [' Okay', 'sari', 'சரி '], [" Let's welcome", 'vantukollōm', 'வந்துகொள்ளோம் '], [' Guests', 'kūṭiyavarkaḷ', 'கூடியவர்கள் '], [' Lunch', 'parutti', 'பருத்தி '], [' Cooking', 'samaiyal', 'சமையல் '], [' Cleanliness', 'sutham', 'சுத்தம் '], [' Mealtime', 'kaḻikkum nēram', 'கழிக்கும் நேரம் '], [' Small', 'siṟumi', 'சிறுமி '], [' Big', 'periya', 'பெரிய '], [' Life growth', 'vāḻkai vaḷarpup', 'வாழ்க்கை வளர்ப்பு '], [' Tamil', 'tamiḻ', 'தமிழ் '], [' Happiness', 'makilcci', 'மகிழ்ச்சி '], [' Attention', 'kavanam', 'கவனம் '], [' Opinion', 'karuttu', 'கருத்து '], [' Hand washing time', 'kaikaḷai kaṭṭum nēram', 'கைகளை கட்டும் நேரம் '], [' Food', 'uṇavu', 'உணவு '], [' Mother tongue', 'tāy moḻi', 'தாய்மொழி '], [' Nickname', 'piriyātha peyar', 'பிரியாத பெயர் ']];
let tamil_Mod = [[' Hello', 'vaṇakkam', 'வணக்கம் '], [' Where are you going?', 'eṅku pōgirīrkal?', 'எங்கு போகிறீர்கள்? '], [' My name is a wonderful name', 'en pēru arumaiyāna pēr', 'என் பேரு அருமையான பேர் '], [' How old are you?', 'nīṅkal evvaḷavu vāḻkaiyil irukkiṟīrkaḷ?', 'நீங்கள் எவ்வளவு வாழ்க்கையில் இருக்கிறீர்கள்? '], [' I speak Tamil', 'nāṉ tamiḻ pēsugiṟēṉ', 'நான் தமிழ் பேசுகிறேன் '], [' I need help', 'enakku udhavi tayakkam pōṉṟadhu', 'எனக்கு உதவி தயக்கம் போன்றது '], [' I have lost weight', 'nāṉ uṭal eṭai kuṟaittēṉ', 'நான் உடல் எடை குறைத்தேன் '], [' Do you know how to speak Tamil?', 'nīṅkal tamiḻil pēsuvadhu teriyumā?', 'நீங்கள் தமிழில் பேசுவது தெரியுமா? '], [' I want you to have a good day', 'nāṉ nīṅkaḷukku nalla nāḷ kūṭṭāka irukka vēṇṭum', 'நான் நீங்களுக்கு நல்ல நாள் கூட்டாக இருக்க வேண்டும் '], [' Where should I go', 'eṅku pōka vēṇṭum?', 'எங்கு போக வேண்டும்? '], [' What food should I give my mom to eat?', 'En ammā sāppiṭa vēṇṭiya uṇavu enna?', 'என் அம்மா சாப்பிட வேண்டிய உணவு என்ன? '], [' Where are you going?', 'Nī eṅku pōkiṟāy?', 'நீ எங்கு போகிறாய்? '], [' He will come to see.', 'Avaṉ pārka cellum', 'அவன் பார்க்க செல்லும். '], [' I am here.', 'Nāṉ iṅkē irukkiṟēṉ', 'நான் இங்கே இருக்கிறேன். '], [' I need to give you a message.', 'Nāṉ uṉakku toṭarpu koṭukka vēṇṭum', 'நான் உனக்கு தொடர்பு கொடுக்க வேண்டும். '], [' What is your name?', 'Uṅkaḷ peyar enna?', 'உங்கள் பெயர் என்ன? '], [' I was not born in this country.', 'Nāṉ sontha nāṭṭil piṟanthadhu eṅkum illai', 'நான் சொந்த நாட்டில் பிறந்தது எங்கும் இல்லை. '], [' Can I speak to you?', 'Uṉṉiṭam solla muṭiyumā?', 'உன்னிடம் சொல்ல முடியுமா? '], [' Why did you come?', 'Nī edhukku vandhirukkiṟāy?', 'நீ எதுக்கு வந்திருக்கிறாய்? '], [' I already know that person.', 'Anth pērai nān aṟinthu koṇṭē irukkiṟēn', 'அந்த பேரை நான் அறிந்து கொண்டே இருக்கிறேன். ']];
let tamil_Adv = [[' I am coming to our town.', 'Engaḷ ūrukku varugireṉ', 'எங்கள் ஊருக்கு வருகிறேன் '], [' Your thoughts are in my heart.', 'En manathil uṅgaḷ ninaiṉkal uḷḷaṉa', 'என் மனதில் உங்கள் நினைவுகள் உள்ளன '], [' She is coming to my house.', 'Avaḷ eṉ vīṭṭil varugiṟāḷ', 'அவள் என் வீட்டில் வருகிறாள் '], [' Your love fills my life.', 'En uyiriṉattai uṉ kādal niṟaikkiraṯu', 'என் உயிரினத்தை உன் காதல் நிறைக்கிறது '], [' I am trying to tell you what I have known so far.', 'Nāṉ ituvarai aṟintadhai uṅkaḷukku solla muyaṟcikkiṟēṉ', 'நான் இதுவரை அறிந்ததை உங்களுக்கு சொல்ல முயற்சிக்கிறேன் '], [' Can you write in Tamil?', 'Tamilil urai ezhutha mudiyuma?', 'தமிழில் உரை எழுத முடியுமா? '], [' I am sure.', 'Nān kattāyam koவடிthukkoவடிṉṟukkiṟēṉ', 'நான் கட்டாயம் கொடுத்துக்கொண்டிருக்கிறேன். '], [' He loves me with anger.', 'Avar kōpamudan ennai nēchikkiṟār', 'அவர் கோபமுடன் என்னை நேசிக்கிறார். '], [' You cannot keep me from sleeping.', 'Nīṅkaḷ ennai uṟangat tavirkka muṭiyātu', 'நீங்கள் என்னை உறங்கத் தவிர்க்க முடியாது. '], [' His dehydration has continued until death.', 'Avar maraṇam tuṭikkum varai paricukaḷiṉ nīrttēkkam celuttirukkiṟadhu', 'அவர் மரணம் துடிக்கும் வரை பரிசுகளின் நீர்த்தேக்கம் செலுத்தியிருக்கிறது. '], [' We must not delay anywhere.', 'Eṅkum turattik kākka vēṇṭām', 'எங்கும் துரத்திக் காக்க வேண்டாம். '], [' I am thinking of ways to act.', 'Nān naṭantukolla veṇṭiya muṟaikaḷai niṉaikkirēṉ', 'நான் நடந்துகொள்ள வேண்டிய முறைகளை நினைக்கிறேன். '], [' You are calling many good people.', 'Nī palar nallavargalai aḻaikkiṟāy', 'நீ பலர் நல்லவர்களை அழைக்கிறாய். ']];


function identify_lang() {
    switch (langid) {
        case "11":
            div_num = 0;
            language = 'chinese';
            speak_lang = "zh";
            wordsarr = chinese_Beg;
            document.title = "LingoVerse-Chinese Beginner";
            break;
        case "12":
            div_num = 1;
            language = 'chinese';
            speak_lang = "zh";
            wordsarr = chinese_Mod;
            document.title = "LingoVerse-Chinese Moderate";
            break;
        case "13":
            div_num = 2;
            language = 'chinese';
            speak_lang = "zh";
            wordsarr = chinese_Adv;
            document.title = "LingoVerse-Chinese Advanced";
            break;
        case "21":
            div_num = 0;
            language = 'french';
            speak_lang = "fr";
            wordsarr = french_Beg;
            document.title = "LingoVerse-French Beginner";
            break;
        case "22":
            div_num = 1;
            language = 'french';
            speak_lang = "fr";
            wordsarr = french_Mod;
            document.title = "LingoVerse-French Moderate";
            break;
        case "23":
            div_num = 2;
            language = 'french';
            speak_lang = "fr";
            wordsarr = french_Adv;
            document.title = "LingoVerse-French Advanced";
            break;
        case "31":
            div_num = 0;
            language = 'german';
            speak_lang = "de";
            wordsarr = german_Beg;
            document.title = "LingoVerse-German Beginner";
            break;
        case "32":
            div_num = 1;
            language = 'german';
            speak_lang = "de";
            wordsarr = german_Mod;
            document.title = "LingoVerse-German Moderate";
            break;
        case "33":
            div_num = 2;
            language = 'german';
            speak_lang = "de";
            wordsarr = german_Adv;
            document.title = "LingoVerse-German Advanced";
            break;
        case "41":
            div_num = 0;
            language = 'hindi';
            speak_lang = "hi";
            wordsarr = hindi_Beg;
            document.title = "LingoVerse-Hindi Beginner";
            break;
        case "42":
            div_num = 1;
            language = 'hindi';
            speak_lang = "hi";
            wordsarr = hindi_Mod;
            document.title = "LingoVerse-Hindi Moderate";
            break;
        case "43":
            div_num = 2;
            language = 'hindi';
            speak_lang = "hi";
            wordsarr = hindi_Adv;
            document.title = "LingoVerse-Hindi Advanced";
            break;
        case "51":
            div_num = 0;
            language = 'japanese';
            speak_lang = "ja";
            wordsarr = japanese_Beg;
            document.title = "LingoVerse-Japanese Beginner";
            break;
        case "52":
            div_num = 1;
            language = 'japanese';
            speak_lang = "ja";
            wordsarr = japanese_Mod;
            document.title = "LingoVerse-Japanese Moderate";
            break;
        case "53":
            div_num = 2;
            language = 'japanese';
            speak_lang = "ja";
            wordsarr = japanese_Adv;
            document.title = "LingoVerse-Japanese Advanced";
            break;
        case "61":
            div_num = 0;
            language = 'korean';
            speak_lang = "ko";
            wordsarr = korean_Beg;
            document.title = "LingoVerse-Korean Beginner";
            break;
        case "62":
            div_num = 1;
            language = 'korean';
            speak_lang = "ko";
            wordsarr = korean_Mod;
            document.title = "LingoVerse-Korean Moderate";
            break;
        case "63":
            div_num = 2;
            language = 'korean';
            speak_lang = "ko";
            wordsarr = korean_Adv;
            document.title = "LingoVerse-Korean Advanced";
            break;
        case "71":
            div_num = 0;
            language = 'russian';
            speak_lang = "ru";
            wordsarr = russian_Beg;
            document.title = "LingoVerse-Russian Beginner";
            break;
        case "72":
            div_num = 1;
            language = 'russian';
            speak_lang = "ru";
            wordsarr = russian_Mod;
            document.title = "LingoVerse-Russian Moderate";
            break;
        case "73":
            div_num = 2;
            language = 'russian';
            speak_lang = "ru";
            wordsarr = russian_Adv;
            document.title = "LingoVerse-Russian Advanced";
            break;
        case "81":
            div_num = 0;
            language = 'spanish';
            speak_lang = "es";
            wordsarr = spanish_Beg;
            document.title = "LingoVerse-Spanish Beginner";
            break;
        case "82":
            div_num = 1;
            language = 'spanish';
            speak_lang = "es";
            wordsarr = spanish_Mod;
            document.title = "LingoVerse-Spanish Moderate";
            break;
        case "83":
            div_num = 2;
            language = 'spanish';
            speak_lang = "es";
            wordsarr = spanish_Adv;
            document.title = "LingoVerse-Spanish Advanced";
            break;
        case "91":
            div_num = 0;
            language = 'tamil';
            speak_lang = "ta";
            wordsarr = tamil_Beg;
            document.title = "LingoVerse-Tamil Beginner";
            break;
        case "92":
            div_num = 1;
            language = 'tamil';
            speak_lang = "ta";
            wordsarr = tamil_Mod;
            document.title = "LingoVerse-Tamil Moderate";
            break;
        case "93":
            div_num = 2;
            language = 'tamil';
            speak_lang = "ta";
            wordsarr = tamil_Adv;
            document.title = "LingoVerse-Tamil Advanced";
            break;
        case "100":
            let arrayis = JSON.parse(localStorage.getItem("difficult"));
            div_num = 3;
            language = 'Difficult Words';
            wordsarr = arrayis;
            document.title = "LingoVerse-Difficult Words";
            document.getElementById("change_division_menu").style.display = "none";
            break;

        default:
            break;
    }
    document.getElementById("Lang_name").innerHTML = String(language[0]).toUpperCase() + String(language).slice(1,) + " Learning" + " (" + String(divtext[div_num]) + ")";
    document.getElementsByClassName("lanname")[0].innerHTML = String(language[0]).toUpperCase() + String(language).slice(1,);
}

identify_lang();


// Language description in console
console.log("Its", language, "at", "division", divtext[div_num]);


function adjust_layout_words() {
    // setting is romanistion required
    if (wordsarr[i].length == 3 && language != "Difficult Words") {
        document.getElementById("romaji").style.display = "block";
        document.getElementById("romajititle").style.display = "block";
    } else if (wordsarr[i].length === 4 && language === "Difficult Words") {
        document.getElementById("romaji").style.display = "block";
        document.getElementById("romajititle").style.display = "block";
    } else if (language === "Difficult Words" && wordsarr[i].length === 3) {
        document.getElementById("romaji").style.display = "none";
        document.getElementById("romajititle").style.display = "none";
    } else if (wordsarr[i].length === 2 && language != "Difficult Words") {
        document.getElementById("romaji").style.display = "none";
        document.getElementById("romajititle").style.display = "none";
    }

    // setting words
    if (wordsarr[i].length == 3 && language != "Difficult Words") {
        document.getElementById("eng").innerHTML = wordsarr[i][0];
        document.getElementById("romaji").innerHTML = wordsarr[i][1];
        document.getElementById("lang").innerHTML = wordsarr[i][2];
    }
    else if (wordsarr[i].length === 4 && language === "Difficult Words") {
        document.getElementById("eng").innerHTML = wordsarr[i][0];
        document.getElementById("romaji").innerHTML = wordsarr[i][1];
        document.getElementById("lang").innerHTML = wordsarr[i][2];
    }
    else if (wordsarr[i].length === 3 && language === "Difficult Words") {
        document.getElementById("eng").innerHTML = wordsarr[i][0];
        document.getElementById("lang").innerHTML = wordsarr[i][1];
    }

    else if (wordsarr[i].length == 2 && language != "Difficult Words") {
        document.getElementById("eng").innerHTML = wordsarr[i][0];
        document.getElementById("lang").innerHTML = wordsarr[i][1];
    }

    // For Hiding back and next when required
    if (i == 0) {
        document.getElementById('backward').style.display = "none";
    }
    else (document.getElementById('backward').style.display = "block");
    if (i == wordsarr.length - 1) {
        document.getElementById('continue').style.display = "none";
    } else {
        document.getElementById('continue').style.display = "block";
    }


    // For Division Menu
    document.getElementById("Beg_div").innerHTML = divtext[0];
    document.getElementById("Mod_div").innerHTML = divtext[1];
    document.getElementById("Adv_div").innerHTML = divtext[2];

    // Adding border to current Div
    if (div_num == 0) {
        document.getElementById('Beg_div').style.border = "2px solid black";
    }
    else if (div_num == 1) {
        document.getElementById('Mod_div').style.border = "2px solid black";
    }
    else if (div_num == 2) {
        document.getElementById('Adv_div').style.border = "2px solid black";
    }
}

adjust_layout_words();

// Langauges Menu
let containerlist = document.getElementById("container_list");
let radioinputs = document.getElementsByClassName("radio-inputs")[0];
containerlist.addEventListener("mouseover", showList);
radioinputs.addEventListener("mouseover", showList);

var a, b;

containerlist.addEventListener("mouseout", function () {
    a = setTimeout(hideList, 1000);
});
radioinputs.addEventListener("mouseout", function () {
    b = setTimeout(hideList, 1000);
});

function showList() {
    clearTimeout(a);
    clearTimeout(b);
    radioinputs.style.display = "flex";
}

function hideList() {
    radioinputs.style.display = "none";
}


// Bypass Google Translate popup and disable automatic translation and runs now
function disable_googletrans() {
    document.cookie = 'googtrans=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}
disable_googletrans();



// Check for local storage variables exists or not
function checkLSV(variable) {
    if (localStorage.getItem(variable) !== null) {
        return true;
    } else {
        return false;
    }
}





// Javascript Speech SynthesisUtterance
function speak() {
    if (wordsarr[i].length === 3 && language != "Difficult Words") {
        var msg = new SpeechSynthesisUtterance(wordsarr[i][2]);
    }
    else if (wordsarr[i].length === 3 && language == "Difficult Words") {
        var msg = new SpeechSynthesisUtterance(wordsarr[i][1]);
    }
    else if (wordsarr[i].length === 4 && language == "Difficult Words") {
        var msg = new SpeechSynthesisUtterance(wordsarr[i][2]);
    }
    else if (wordsarr[i].length === 2 && language != "Difficult Words") {
        var msg = new SpeechSynthesisUtterance(wordsarr[i][1]);
    }

    if (language === "Difficult Words") {
        if (wordsarr[i].length === 3) {
            msg.lang = wordsarr[i][2];
        }
        else if (wordsarr[i].length === 4) {
            msg.lang = wordsarr[i][3];
        }
    }
    else {
        msg.lang = speak_lang;
    }

    window.speechSynthesis.speak(msg);
}
function speakeng() {
    var msg = new SpeechSynthesisUtterance(wordsarr[i][0]);
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
}


// For changing Word to next
function nextword() {
    if (i < wordsarr.length - 1) {
        i = i + 1;
        adjust_layout_words();
    }
}

// For going to previous word
function backword() {
    if (i > 0) {
        i = i - 1;
        adjust_layout_words();
    }
}


// For Changing Division
function chng_div(n) {
    let link = String("language.html?" + "langid=" + String(langid[0]) + String(n + 1) + "&atword=0");
    open(link, "_parent");
}


function goto(b, diviv = "1", atword = 0) {
    let a;
    switch (b) {
        case "chinese":
            a = "1" + String(diviv);
            break;
        case "french":
            a = "2" + String(diviv);
            break;
        case "german":
            a = "3" + String(diviv);
            break;
        case "hindi":
            a = "4" + String(diviv);
            break;
        case "japanese":
            a = "5" + String(diviv);
            break;
        case "korean":
            a = "6" + String(diviv);
            break;
        case "russian":
            a = "7" + String(diviv);
            break;
        case "spanish":
            a = "8" + String(diviv);
            break;
        case "tamil":
            a = "9" + String(diviv);
            break;

        default:
            break;
    }
    let link = "language.html?langid=" + String(a) + "&atword=" + String(atword);
    open(link, "_self");
}

// Difficult words array

function addtodiff() {
    if (!checkLSV('difficult')) {
        localStorage.setItem('difficult', JSON.stringify([]));
    }

    let diff_var = JSON.parse(localStorage.difficult);
    let diff_arr = diff_var;
    let z;
    if (wordsarr[i].length === 3 && language != "Difficult Words") {
        z = [wordsarr[i][0], wordsarr[i][1], wordsarr[i][2], speak_lang];
    }
    else if (wordsarr[i].length === 3 && language == "Difficult Words") {
        z = wordsarr[i];
    }
    else if (wordsarr[i].length === 4 && language == "Difficult Words") {
        z = wordsarr[i];
    }
    else if (wordsarr[i].length === 2) {
        z = [wordsarr[i][0], wordsarr[i][1], speak_lang];
    }


    if (document.getElementById("checkbox").checked) {
        if (diff_var != []) {
            if (!diff_var.some(arr => JSON.stringify(arr) === JSON.stringify(z))) {
                diff_arr.push(z);
                localStorage.setItem("difficult", JSON.stringify(diff_arr));
                console.log("Iteam added!");
            }
            else {
                console.log("item already exists!");
            }
        }
        else {
            diff_arr = [z];
            localStorage.setItem("difficult", JSON.stringify(diff_arr));
            console.log("First Item added!");
        }
    }
    else {
        let z_as_string = JSON.stringify(z);

        let foundIndex = -1;

        diff_arr.forEach((arr, index) => {
            if (JSON.stringify(arr) === z_as_string) {
                foundIndex = index;
            }
        });

        if (foundIndex !== -1) {
            diff_arr.splice(foundIndex, 1);
            localStorage.setItem("difficult", JSON.stringify(diff_arr));
            console.log("Item removed!");
        }


    }
}

function uncheck_diff() {
    if (localStorage.getItem('difficult') !== null) {
        var isdiff = false;
        let z;

        if (wordsarr[i].length === 3 && language != "Difficult Words") {
            z = [wordsarr[i][0], wordsarr[i][1], wordsarr[i][2], speak_lang];
        }
        else if (wordsarr[i].length === 3 && language == "Difficult Words") {
            z = wordsarr[i];
        }
        else if (wordsarr[i].length === 4 && language == "Difficult Words") {
            z = wordsarr[i];
        }
        else if (wordsarr[i].length === 2) {
            z = [wordsarr[i][0], wordsarr[i][1], speak_lang];
        }
        let diff_var = JSON.parse(localStorage.difficult);
        if (checkLSV('difficult')) {
            isdiff = diff_var.some(arr => JSON.stringify(arr) === JSON.stringify(z));
        }

        if (isdiff) {
            document.getElementById('checkbox').checked = true;
        }
        else {
            document.getElementById('checkbox').checked = false;
        }
    }


}


function langanddivandatword() {
    return [language, divtext[div_num], i];
}


function send_atwordloop() {
    let returnedatword;
    setInterval(function () {

        if (i != returnedatword) {
            returnedatword = send_atword(i);
            uncheck_diff();
        }

    }, 50);
}



