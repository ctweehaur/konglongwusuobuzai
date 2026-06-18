// ==================== 🛠️ 以后换课文，只改这里的数据 ====================
const lessonTitle = "恐龙无所不在";

const lessonData = [
    // 第 1 段
    ["作者", "zuò zhě", "author", "penulis"],
    ["：", "", "", ""],
    ["艾萨克·艾西莫夫", "Ài sà kè · Ài xī mò fū", "Isaac Asimov (famous science fiction writer and biochemist)", "Isaac Asimov"],
    ["\n", "", "", ""], // 分段标记
    
    ["不同", "bù tóng", "different / distinct", "berbeza"],
    ["科学", "kē xué", "science / scientific", "sains / saintifik"],
    ["领域", "lǐng yù", "field / domain", "bidang"],
    ["之间", "zhī jiān", "between", "antara"],
    ["是", "shì", "is / are", "adalah"],
    ["紧密相连", "jǐn mì xiāng lián", "closely linked / inseparable", "berkait rapat"],
    ["的", "de", "particle", "yang"],
    ["。", "", "", ""],
    ["在", "zài", "in / at", "di / dalam"],
    ["一个", "yí gè", "a / one", "sebuah / satu"],
    ["科学", "kē xué", "science", "sains"],
    ["领域", "lǐng yù", "field", "bidang"],
    ["的", "de", "of", "punya"],
    ["新", "xīn", "new", "baru"],
    ["发现", "fā xiàn", "discovery / finding", "penemuan"],
    ["，", "", "", ""],
    ["肯定", "kěn dìng", "definitely / surely", "pasti / tentu"],
    ["会", "huì", "will", "akan"],
    ["对", "duì", "to / towards", "terhadap / kepada"],
    ["其他", "qí tā", "other", "lain-lain"],
    ["领域", "lǐng yù", "field", "bidang"],
    ["产生", "chǎn shēng", "produce / generate / bring about", "menghasilkan / membawa"],
    ["影响", "yǐng xiǎng", "influence / impact", "kesan / pengaruh"],
    ["。", "", "", ""],

    ["\n", "", "", ""], // 第 2 段

    ["例如", "lì rú", "for example", "sebagai contoh / misalnya"],
    ["，", "", "", ""],
    ["在", "zài", "in", "pada"],
    ["1986年", "yī jiǔ bā liù nián", "year 1986", "tahun 1986"],
    ["1月", "yī yuè", "January", "Januari"],
    ["，", "", "", ""],
    ["阿根廷", "Ā gēn tíng", "Argentina", "Argentina"],
    ["南极", "Nán jí", "Antarctica / South Pole", "Antartika / Kutub Selatan"],
    ["研究所", "yán jiū suǒ", "research institute", "institut penyelidikan"],
    ["宣布", "xuān bù", "announce", "mengumumkan"],
    ["在", "zài", "at", "di"],
    ["詹姆斯罗斯岛", "Zhān mǔ sī Luó sī Dǎo", "James Ross Island", "Pulau James Ross"],
    ["发现", "fā xiàn", "found / discovered", "menemui"],
    ["了", "le", "particle", "sudah"],
    ["一些", "yì xiē", "some", "beberapa"],
    ["化石", "huà shí", "fossil", "fosil"],
    ["骨骼", "gǔ gé", "skeleton / bones", "tulang / rangka"],
    ["。", "", "", ""],
    ["该岛", "gāi dǎo", "the island", "pulau tersebut"],
    ["是", "shì", "is", "adalah"],
    ["稍微", "shāo wēi", "slightly", "sedikit / agak"],
    ["离开", "lí kāi", "away from / leave", "meninggalkan / jauh dari"],
    ["南极", "Nán jí", "Antarctica", "Antartika"],
    ["海岸", "hǎi àn", "coast / seashore", "pantai / pesisir pantai"],
    ["的", "de", "of", "yang"],
    ["一小片", "yì xiǎo piàn", "a small piece of", "sebahagian kecil / sepotong kecil"],
    ["冰冻", "bīng dòng", "frozen", "beku / membeku"],
    ["陆地", "lù dì", "land", "daratan"],
    ["，", "", "", ""],
    ["非常", "fēi cháng", "very / extremely", "sangat / amat"],
    ["靠近", "kào jìn", "close to", "hampir dengan / dekat"],
    ["南美", "Nán měi", "South America", "Amerika Selatan"],
    ["的", "de", "of", "punya"],
    ["南端", "nán duān", "southern tip", "hujung selatan"],
    ["。", "", "", ""],
    ["这些", "zhè xiē", "these", "semua ini"],
    ["骨头", "gǔ tou", "bones", "tulang"],
    ["毫无疑问", "háo wú yí wèn", "without a doubt", "tanpa sebarang ragu / tidak syak lagi"],
    ["属于", "shǔ yú", "belong to", "tergolong dalam / milik"],
    ["鸟臀目", "niǎo tún mù", "Ornithischia (bird-hipped dinosaurs)", "Ornithischia"],
    ["恐龙", "kǒng lóng", "dinosaur", "dinosaur"],
    ["。", "", "", ""],
    ["在", "zài", "on", "di"],
    ["地球", "dì qiú", "Earth", "Bumi"],
    ["的", "de", "of", "punya"],
    ["其他", "qí tā", "other", "lain-lain"],
    ["大陆", "dà lù", "continent", "benua"],
    ["上", "shàng", "on", "di atas"],
    ["也", "yě", "also", "juga"],
    ["都", "dōu", "all", "semua"],
    ["发现", "fā xiàn", "found / discovered", "menemui"],
    ["有", "yǒu", "have", "ada"],
    ["恐龙", "kǒng lóng", "dinosaur", "dinosaur"],
    ["化石", "huà shí", "fossil", "fosil"],
    ["。", "", "", ""],
    ["这些", "zhè xiē", "these", "semua ini"],
    ["古老", "gǔ lǎo", "ancient", "purba / kuno"],
    ["的", "de", "of", "yang"],
    ["爬行动物", "pá xíng dòng wù", "reptile", "haiwan reptilia"],
    ["在", "zài", "in", "di"],
    ["南极", "Nán jí", "Antarctica", "Antartika"],
    ["的", "de", "of", "punya"],
    ["出现", "chū xiàn", "appearance", "kemunculan"],
    ["，", "", "", ""],
    ["说明", "shuō míng", "show / illustrate / prove", "menunjukkan / membuktikan"],
    ["恐龙", "kǒng lóng", "dinosaur", "dinosaur"],
    ["确实", "què shí", "indeed / truly", "memang benar / hakikatnya"],
    ["遍布", "biàn bù", "all over / spread all over", "tersebar luas / meliputi"],
    ["于", "yú", "in / at", "di"],
    ["世界各地", "shì jiè gè dì", "all over the world", "seluruh dunia"],
    ["。", "", "", ""],

    ["\n", "", "", ""], // 第 3 段

    ["如果", "rú guǒ", "if", "jika / kalau"],
    ["把", "bǎ", "disposal particle", ""],
    ["这个", "zhè ge", "this", "ini"],
    ["发现", "fā xiàn", "discovery", "penemuan"],
    ["与", "yǔ", "with", "dengan"],
    ["南极", "Nán jí", "Antarctica", "Antartika"],
    ["大陆", "dà lù", "continent", "benua"],
    ["联系起来", "lián xì qǐ lái", "link together / connect", "menhubungkaitkan"],
    ["，", "", "", ""],
    ["这", "zhè", "this", "ini"],
    ["比", "bǐ", "compared to", "berbanding"],
    ["仅", "jǐn", "only", "hanya"],
    ["考虑", "kǎo lǜ", "consider / think about", "mempertimbangkan / memikirkan"],
    ["恐龙", "kǒng lóng", "dinosaur", "dinosaur"],
    ["来说", "lái shuō", "speaking of", "secara amnya"],
    ["要", "yào", "to be", "adalah"],
    ["重要", "zhòng yào", "important", "penting"],
    ["得多", "de duō", "much more", "jauh lebih"],
    ["。", "", "", ""],
    ["恐龙", "kǒng lóng", "dinosaur", "dinosaur"],
    ["如何", "rú hé", "how", "bagaimana / macam mana"],
    ["能", "néng", "can", "boleh"],
    ["在", "zài", "in", "di"],
    ["南极", "Nán jí", "Antarctica", "Antartika"],
    ["地区", "dì qū", "region / area", "kawasan / wilayah"],
    ["生存", "shēng cún", "survive", "hidup / terus hidup"],
    ["呢", "ne", "question particle", "kah"],
    ["？", "", "", ""],
    ["恐龙", "kǒng lóng", "dinosaur", "dinosaur"],
    ["实际上", "shí jì shang", "actually / in fact", "pada hakikatnya / sebenarnya"],
    ["并", "bìng", "emphatic particle", "sama sekali"],
    ["不", "bù", "not", "tidak"],
    ["适应", "shì yìng", "adapt to", "menyesuaikan diri"],
    ["寒冷", "hán lěng", "cold / freezing", "sejuk / dingin"],
    ["的", "de", "of", "yang"],
    ["气候", "qì hòu", "climate", "iklim"],
    ["，", "", "", ""],
    ["但", "dàn", "but", "tetapi"],
    ["1986年", "yī jiǔ bā liù nián", "year 1986", "tahun 1986"],
    ["在", "zài", "in", "di"],
    ["南极", "Nán jí", "Antarctica", "Antartika"],
    ["确实", "què shí", "indeed", "memang benar"],
    ["发现", "fā xiàn", "found / discovered", "menemui"],
    ["了", "le", "particle", "sudah"],
    ["这种", "zhè zhǒng", "this kind of", "jenis ini"],
    ["古老", "gǔ lǎo", "ancient", "purba"],
    ["的", "de", "of", "yang"],
    ["动物", "dòng wù", "animal", "haiwan"],
    ["的", "de", "of", "punya"],
    ["化石", "huà shí", "fossil", "fosil"],
    ["。", "", "", ""],
    ["恐龙", "kǒng lóng", "dinosaur", "dinosaur"],
    ["不", "bù", "not", "tidak"],
    ["可能", "kě néng", "possible / can", "mungkin / boleh"],
    ["在", "zài", "on", "di"],
    ["每一块", "měi yí kuài", "every piece of", "setiap"],
    ["大陆", "dà lù", "continent", "benua"],
    ["上", "shàng", "on", "di atas"],
    ["独立", "dú lì", "independently", "secara berasingan / bebas"],
    ["生存", "shēng cún", "survive", "hidup"],
    ["，", "", "", ""],
    ["那么", "nà me", "then", "jadi / jika begitu"],
    ["它们", "tā men", "they (animals)", "mereka (haiwan)"],
    ["是", "shì", "is", "adalah"],
    ["如何", "rú hé", "how", "bagaimana"],
    ["越过", "yuè guò", "cross over / pass", "merentasi / menyeberangi"],
    ["大洋", "dà yáng", "ocean", "lautan luas"],
    ["到", "dào", "to", "ke"],
    ["另一个", "lìng yí gè", "another", "satu lagi / benua lain"],
    ["大陆", "dà lù", "continent", "benua"],
    ["上去", "shàng qù", "go up to / get on", "pergi ke atas"],
    ["的", "de", "particle", ""],
    ["呢", "ne", "question particle", "kah"],
    ["？", "", "", ""],
    ["这一", "zhè yī", "this", "ini"],
    ["问题", "wèn tí", "question / problem", "soalan / masalah"],
    ["的", "de", "of", "punya"],
    ["答案", "dá àn", "answer", "jawapan"],
    ["是", "shì", "is", "adalah"],
    ["大陆", "dà lù", "continent", "benua"],
    ["在", "zài", "in process of / at", "sedang"],
    ["漂移", "piāo yí", "drift", "hanyut / beralih"],
    ["而不是", "ér bú shì", "instead of / rather than", "dan bukannya"],
    ["恐龙", "kǒng lóng", "dinosaur", "dinosaur"],
    ["自己", "zì jǐ", "themselves", "sendiri"],
    ["在", "zài", "in process of", "sedang"],
    ["迁移", "qiān yí", "migrate", "bermigrasi / berpindah"],
    ["。", "", "", ""],

    ["\n", "", "", ""], // 第 4 段

    ["几十", "jǐ shí", "decades / tens of", "beberapa dekad / puluhan"],
    ["年前", "nián qián", "years ago", "tahun lalu"],
    ["，", "", "", ""],
    ["人们", "rén men", "people", "orang ramai / manusia"],
    ["发现", "fā xiàn", "found / discovered", "mendapati / menemui"],
    ["地壳", "dì qiào", "Earth's crust", "kerak bumi"],
    ["是", "shì", "is / are", "adalah"],
    ["由", "yóu", "by / from", "oleh / daripada"],
    ["一些", "yì xiē", "some", "beberapa"],
    ["紧密", "jǐn mì", "closely", "rapat"],
    ["拼合", "pīn hé", "piece together / fit together", "bercantum / digabungkan"],
    ["在一起", "zài yì qǐ", "together", "bersama-sama"],
    ["但", "dàn", "but", "tetapi"],
    ["又", "yòu", "also / again", "juga / pula"],
    ["在", "zài", "in the process of", "sedang"],
    ["缓慢", "huǎn màn", "slow", "perlahan / lambat"],
    ["运动", "yùn dòng", "moving / movement", "bergerak / pergerakan"],
    ["的", "de", "of", "yang"],
    ["大板块", "dà bǎn kuài", "large plates", "plat tektonik besar"],
    ["构成", "gòu chéng", "constitute / form", "terbentuk / membentuk"],
    ["的", "de", "particle", ""],
    ["。", "", "", ""],
    ["一些", "yì xiē", "some", "beberapa"],
    ["板块", "bǎn kuài", "plates / tectonic plates", "plat tektonik"],
    ["被", "bèi", "by (passive voice)", "di- / oleh"],
    ["拉开", "lā kāi", "pull apart / separate", "ditarik lari / dipisahkan"],
    ["，", "", "", ""],
    ["\n", "", "", ""], // 小切分
    ["而", "ér", "while / but", "manakala"],
    ["另一些", "lìng yì xiē", "others", "yang lain pula"],
    ["则", "zé", "then / on the other hand", "maka / pula"],
    ["挤压", "jǐ yā", "squeeze / compress", "himpit / ditekan"],
    ["在一起", "zài yì qǐ", "together", "bersama-sama"],
    ["，", "", "", ""],
    ["一个", "yí gè", "one", "satu"],
    ["板块", "bǎn kuài", "plate", "plat"],
    ["也许", "yě xǔ", "perhaps / maybe", "mungkin / barangkali"],
    ["会", "huì", "will", "akan"],
    ["缓慢", "huǎn màn", "slowly", "dengan perlahan"],
    ["地", "de", "adverbial particle", "dengan"],
    ["向", "xiàng", "towards", "ke arah"],
    ["另一", "lìng yī", "another", "satu lagi / lain"],
    ["板块", "bǎn kuài", "plate", "plat"],
    ["下面", "xià miàn", "underneath", "bawah / di bawah"],
    ["俯冲", "fǔ chōng", "subduct / dive", "membenam / menjunam"],
    ["。", "", "", ""],
    ["“", "", "", ""],
    ["板块构造", "bǎn kuài gòu zào", "plate tectonics", "tektonik plat"],
    ["”", "", "", ""],
    ["理论", "lǐ lùn", "theory", "teori"],
    ["很快", "hěn kuài", "very quickly", "dengan cepat / segera"],
    ["为", "wèi", "for", "untuk / bagi"],
    ["地质界", "dì zhì jiè", "geological circles", "dunia geologi"],
    ["几乎", "jī hū", "almost", "hampir / nyaris"],
    ["所有", "suǒ yǒu", "all", "semua"],
    ["的", "de", "of", "yang / punya"],
    ["问题", "wèn tí", "questions / problems", "masalah / soalan"],
    ["提供", "tí gōng", "provide", "menyediakan / memberi"],
    ["了", "le", "particle", "sudah"],
    ["答案", "dá àn", "answers", "jawapan"],
    ["，", "", "", ""],
    ["如", "rú", "such as", "seperti"],
    ["火山", "huǒ shān", "volcano", "gunung berapi"],
    ["、", "", "", ""],
    ["地震", "dì zhèn", "earthquake", "gempa bumi"],
    ["、", "", "", ""],
    ["岛屿链", "dǎo yǔ liàn", "island chain", "rantaian pulau"],
    ["、", "", "", ""],
    ["海洋深渊", "hǎi yáng shēn yuān", "ocean trenches / abyss", "jurang lautan"],
    ["等等", "děng děng", "etc / and so on", "dan sebagainya"],
    ["，", "", "", ""],
    ["这些", "zhè xiē", "these", "semua ini"],
    ["在", "zài", "in", "pada masa"],
    ["以前", "yǐ qián", "before / past", "dahulu / sebelum ini"],
    ["一直", "yì zhí", "always / continuously", "sentiasa / berterusan"],
    ["是", "shì", "were / is", "adalah"],
    ["不解之谜", "bù jiě zhī mí", "unsolved mystery", "misteri yang tidak terjawab"],
    ["。", "", "", ""],

    ["\n", "", "", ""], // 第 5 段

    ["可以", "kě yǐ", "can / may", "boleh"],
    ["这样", "zhè yàng", "like this", "begini / sebegini"],
    ["比喻", "bǐ yù", "metaphor / compare", "umpamakan / kiasan"],
    ["，", "", "", ""],
    ["板块", "bǎn kuài", "plate", "plat"],
    ["背上", "bèi shàng", "on the back", "di atas belakang"],
    ["驮着", "tuó zhe", "carry on the back", "memikul / membawa"],
    ["许多", "xǔ duō", "many", "banyak"],
    ["大陆", "dà lù", "continents", "benua"],
    ["，", "", "", ""],
    ["当", "dāng", "when", "apabila"],
    ["板块", "bǎn kuài", "plate", "plat"],
    ["向", "xiàng", "towards", "ke arah"],
    ["一个", "yí gè", "one", "satu"],
    ["或", "huò", "or", "atau"],
    ["另一个", "lìng yí gè", "another", "satu lagi / arah lain"],
    ["方向", "fāng xiàng", "direction", "arah"],
    ["运动", "yùn dòng", "move", "bergerak"],
    ["时", "shí", "when", "ketika / masa"],
    ["，", "", "", ""],
    ["大陆", "dà lù", "continents", "benua"],
    ["也", "yě", "also", "juga"],
    ["随之", "suí zhī", "along with it", "berikutnya / bersamanya"],
    ["一起", "yì qǐ", "together", "bersama-sama"],
    ["运动", "yùn dòng", "move", "bergerak"],
    ["。", "", "", ""],
    ["每隔", "měi gé", "every other / at intervals of", "setiap selang / setiap"],
    ["一段", "yí duàn", "a period of", "suatu tempoh"],
    ["时期", "shí qī", "time / period", "zaman / tempoh masa"],
    ["，", "", "", ""],
    ["板块", "bǎn kuài", "plates", "plat"],
    ["会", "huì", "will", "akan"],
    ["把", "bǎ", "disposal particle", ""],
    ["所有", "suǒ yǒu", "all", "semua"],
    ["的", "de", "of", "yang"],
    ["大陆", "dà lù", "continents", "benua"],
    ["汇聚", "huì jù", "gather together / converge", "berkumpul / disatukan"],
    ["在一起", "zài yì qǐ", "together", "bersama-sama"],
    ["，", "", "", ""],
    ["地球", "dì qiú", "Earth", "Bumi"],
    ["此时", "cǐ shí", "at this time", "pada masa ini"],
    ["仅", "jǐn", "only", "hanya"],
    ["由", "yóu", "by / from", "daripada"],
    ["一个", "yí gè", "one", "satu"],
    ["主要", "zhǔ yào", "main / primary", "utama"],
    ["陆地", "lù dì", "land / landmass", "daratan"],
    ["构成", "gòu chéng", "formed", "terbentuk"],
    ["，", "", "", ""],
    ["称为", "chēng wéi", "called / known as", "dikenali sebagai / dipanggil"],
    ["“", "", "", ""],
    ["泛大陆", "fàn dà lù", "Pangaea / supercontinent", "Pangaea / superbenua"],
    ["”", "", "", ""],
    ["。", "", "", ""],
    ["当", "dāng", "when", "apabila"],
    ["板块", "bǎn kuài", "plate", "plat"],
    ["继续", "jì xù", "continue", "berterusan / meneruskan"],
    ["运动", "yùn dòng", "move", "pergerakan / bergerak"],
    ["时", "shí", "when", "ketika / masa"],
    ["，", "", "", ""],
    ["大陆", "dà lù", "continents", "benua"],
    ["又", "yòu", "again / also", "kembali / pula"],
    ["重新", "chóng xīn", "again / anew", "semula"],
    ["被", "bèi", "passive particle", "di-"],
    ["分离开", "fēn lí kāi", "separated", "dipisahkan"],
    ["。", "", "", ""],

    ["\n", "", "", ""], // 第 6 段

    ["在", "zài", "in / during", "dalam"],
    ["四十多亿", "sì shí duō yì", "more than four billion", "lebih empat bilion"],
    ["年", "nián", "years", "tahun"],
    ["的", "de", "of", "punya"],
    ["地球", "dì qiú", "Earth", "Bumi"],
    ["发展史", "fā zhǎn shǐ", "history of development", "sejarah perkembangan"],
    ["中", "zhōng", "in", "dalam"],
    ["，", "", "", ""],
    ["泛大陆", "fàn dà lù", "Pangaea", "Pangaea"],
    ["形成", "xíng chéng", "formed", "terbentuk"],
    ["和", "hé", "and", "dan"],
    ["分裂", "fēn liè", "split / divided", "berpecah / terbahagi"],
    ["过", "guo", "experienced particle", "pernah"],
    ["多次", "duō cì", "many times", "banyak kali"],
    ["，", "", "", ""],
    ["最后", "zuì hòu", "last / final", "terakhir / paling akhir"],
    ["一次", "yí cì", "one time", "sekali"],
    ["完整", "wán zhěng", "complete / intact", "lengkap / sempurna"],
    ["的", "de", "of", "yang"],
    ["泛大陆", "fàn dà lù", "Pangaea", "Pangaea"],
    ["大约", "dà yuē", "approximately", "kira-kira"],
    ["是", "shì", "is", "adalah"],
    ["在", "zài", "at / during", "pada"],
    ["2.25亿", "èr diǎn èr wǔ yì", "225 million", "225 juta"],
    ["年前", "nián qián", "years ago", "tahun lalu"],
    ["形成", "xíng chéng", "formed", "terbentuk"],
    ["的", "de", "particle", ""],
    ["。", "", "", ""],
    ["这个", "zhè ge", "this", "ini"],
    ["泛大陆", "fàn dà lù", "Pangaea", "Pangaea"],
    ["存在", "cún zài", "existed", "wujud"],
    ["了", "le", "particle", "sudah"],
    ["数百万", "shù bǎi wàn", "millions of", "beberapa juta"],
    ["年", "nián", "years", "tahun"],
    ["以后", "yǐ hòu", "after", "selepas"],
    ["，", "", "", ""],
    ["又", "yòu", "again", "mula ... pula"],
    ["开始", "kāi shǐ", "start / begin", "mula"],
    ["显示出", "xiǎn shì chū", "show / reveal", "menunjukkan"],
    ["破裂", "pò liè", "rupture / cracking", "perpecahan / retakan"],
    ["的", "de", "of", "yang"],
    ["迹象", "jì xiàng", "sign / indication", "tanda / petunjuk"],
    ["。", "", "", ""],
    ["早期", "zǎo qī", "early stage / period", "peringkat awal"],
    ["恐龙", "kǒng lóng", "dinosaurs", "dinosaur"],
    ["在", "zài", "at", "pada masa"],
    ["那时", "nà shí", "that time", "itu"],
    ["已经", "yǐ jīng", "already", "sudah"],
    ["开始", "kāi shǐ", "start", "mula"],
    ["出现", "chū xiàn", "appear / emerge", "muncul"],
    ["，", "", "", ""],
    ["并且", "bìng qiě", "and / moreover", "dan juga / serta"],
    ["有", "yǒu", "have", "mempunyai"],
    ["机会", "jī huì", "opportunity", "peluang"],
    ["分散", "fēn sàn", "disperse / scatter", "tersebar / berselerak"],
    ["到", "dào", "to", "ke"],
    ["泛大陆", "fàn dà lù", "Pangaea", "Pangaea"],
    ["的", "de", "of", "punya"],
    ["各个", "gè gè", "various / each", "setiap / pelbagai"],
    ["地方", "dì fang", "places", "tempat"],
    ["。", "", "", ""],
    ["所有", "suǒ yǒu", "all", "semua"],
    ["陆地", "lù dì", "land", "daratan"],
    ["似乎", "sì hū", "seem / as if", "kelihatan seolah-olah / nampaknya"],
    ["都", "dōu", "all", "semua"],
    ["处在", "chǔ zài", "be in / located in", "berada dalam"],
    ["热带", "rè dài", "tropics", "tropika"],
    ["和", "hé", "and", "dan"],
    ["温带", "wēn dài", "temperate zone", "zon sederhana sejuk"],
    ["环境", "huán jìng", "environment", "persekitaran"],
    ["内", "nèi", "inside", "dalam"],
    ["，", "", "", ""],
    ["所以", "suǒ yǐ", "so / therefore", "oleh itu / jadi"],
    ["恐龙", "kǒng lóng", "dinosaurs", "dinosaur"],
    ["可以", "kě yǐ", "can / could", "boleh"],
    ["在", "zài", "in", "di"],
    ["泛大陆", "fàn dà lù", "Pangaea", "Pangaea"],
    ["的", "de", "of", "punya"],
    ["不同", "bù tóng", "different", "berbeza"],
    ["地区", "dì qū", "regions", "kawasan"],
    ["舒适", "shū shì", "comfortable", "selesa / dengan selesa"],
    ["地", "de", "adverbial particle", "dengan"],
    ["生活", "shēng huó", "live", "hidup / tinggal"],
    ["。", "", "", ""],

    ["\n", "", "", ""], // 第 7 段

    ["大约", "dà yuē", "approximately", "kira-kira"],
    ["在", "zài", "at", "pada"],
    ["两亿", "liǎng yì", "two hundred million", "dua ratus juta"],
    ["年前", "nián qián", "years ago", "tahun lalu"],
    ["，", "", "", ""],
    ["泛大陆", "fàn dà lù", "Pangaea", "Pangaea"],
    ["分裂成", "fēn liè chéng", "split into", "terbahagi kepada"],
    ["四部分", "sì bù fen", "four parts", "empat bahagian"],
    ["。", "", "", ""],
    ["北部", "běi bù", "northern part", "bahagian utara"],
    ["就是", "jiù shì", "exactly is", "ialah"],
    ["现在", "xiàn zài", "now", "sekarang"],
    ["的", "de", "of", "yang"],
    ["北美", "Běi měi", "North America", "Amerika Utara"],
    ["、", "", "", ""],
    ["欧洲", "Ōu zhōu", "Europe", "Eropah"],
    ["和", "hé", "and", "dan"],
    ["亚洲", "Yà zhōu", "Asia", "Asia"],
    ["，", "", "", ""],
    ["南部", "nán bù", "southern part", "bahagian selatan"],
    ["是", "shì", "is", "adalah"],
    ["由", "yóu", "by / from", "daripada / oleh"],
    ["南美", "Nán měi", "South America", "Amerika Selatan"],
    ["和", "hé", "and", "dan"],
    ["非洲", "Fēi zhōu", "Africa", "Afrika"],
    ["构成", "gòu chéng", "constitute / form", "membentuk"],
    ["，", "", "", ""],
    ["最南部", "zuì nán bù", "the southernmost part", "bahagian paling selatan"],
    ["是", "shì", "is", "adalah"],
    ["南极洲", "Nán jí zhōu", "Antarctica", "Antartika"],
    ["和", "hé", "and", "dan"],
    ["澳大利亚", "Ào dà lì yà", "Australia", "Australia"],
    ["，", "", "", ""],
    ["印度", "Yìn dù", "India", "India"],
    ["是", "shì", "is", "adalah"],
    ["剩余", "shèng yú", "remaining / residual", "baki / sisa"],
    ["的", "de", "of", "yang"],
    ["一小部分", "yì xiǎo bù fen", "a small part", "sebahagian kecil"],
    ["。", "", "", ""],
    ["随着", "suí zhe", "along with / following", "seiring dengan"],
    ["时间", "shí jiān", "time", "masa"],
    ["的", "de", "of", "punya"],
    ["流逝", "liú shì", "elapse / pass", "berlalu"],
    ["，", "", "", ""],
    ["北美", "Běi měi", "North America", "Amerika Utara"],
    ["又", "yòu", "again / also", "pula / kembali"],
    ["与", "yǔ", "with / from", "dengan / daripada"],
    ["亚洲", "Yà zhōu", "Asia", "Asia"],
    ["和", "hé", "and", "dan"],
    ["欧洲", "Ōu zhōu", "Europe", "Eropah"],
    ["分开", "fēn kāi", "separate", "terpisah / berpisah"],
    ["，", "", "", ""],
    ["南美", "Nán měi", "South America", "Amerika Selatan"],
    ["也", "yě", "also", "juga"],
    ["与", "yǔ", "with", "daripada / dengan"],
    ["非洲", "Fēi zhōu", "Africa", "Afrika"],
    ["相离", "xiāng lí", "separated from each other", "terpisah antara satu sama lain"],
    ["。", "", "", ""],
    ["（", "", "", ""],
    ["如果", "rú guǒ", "if", "jika"],
    ["看", "kàn", "look at", "melihat"],
    ["一张", "yì zhāng", "a (measure word for map)", "sekeping"],
    ["地图", "dì tú", "map", "peta"],
    ["，", "", "", ""],
    ["并", "bìng", "and", "dan"],
    ["假定", "jiǎ dìng", "assume / suppose", "mengandaikan"],
    ["把", "bǎ", "disposal particle", ""],
    ["非洲", "Fēi zhōu", "Africa", "Afrika"],
    ["和", "hé", "and", "dan"],
    ["南美洲", "Nán měi zhōu", "South America", "Amerika Selatan"],
    ["拼合", "pīn hé", "piece together", "bercantum"],
    ["在一起", "zài yì qǐ", "together", "bersama-sama"],
    ["，", "", "", ""],
    ["你", "nǐ", "you", "anda / awak"],
    ["就会", "jiù huì", "will then", "akan"],
    ["看到", "kàn dào", "see", "melihat"],
    ["它们", "tā men", "them", "mereka"],
    ["拼合", "pīn hé", "fit together", "bercantum"],
    ["得", "de", "degree particle", "dengan"],
    ["多么", "duō me", "how / so", "betapa"],
    ["天衣无缝", "tiān yī wú fèng", "seamless / flawless", "sempurna / secocok sekali"],
    ["。", "", "", ""],
    ["）", "", "", ""],
    ["印度", "Yìn dù", "India", "India"],
    ["向北", "xiàng běi", "northward", "ke arah utara"],
    ["移动", "yí dòng", "move", "bergerak"],
    ["，", "", "", ""],
    ["并且", "bìng qiě", "and / moreover", "dan juga"],
    ["大约", "dà yuē", "approximately", "kira-kira"],
    ["在", "zài", "at", "pada"],
    ["5000万", "wǔ qiān wàn", "50 million", "50 juta"],
    ["年前", "nián qián", "years ago", "tahun lalu"],
    ["与", "yǔ", "with", "dengan"],
    ["亚洲", "Yà zhōu", "Asia", "Asia"],
    ["相碰撞", "xiāng pèng zhuàng", "collide with each other", "berlanggar / bertembung"],
    ["，", "", "", ""],
    ["形成", "xíng chéng", "form", "membentuk"],
    ["巨大", "jù dà", "huge / gigantic", "sangat besar / gergasi"],
    ["的", "de", "of", "yang"],
    ["喜马拉雅山脉", "Xǐ mǎ lā yǎ Shān mài", "Himalayas", "Banjaran Himalaya"],
    ["划分", "huà fēn", "divide", "membahagikan"],
    ["。", "", "", ""],
    ["南极洲", "Nán jí zhōu", "Antarctica", "Antartika"],
    ["也", "yě", "also", "juga"],
    ["向南", "xiàng nán", "southward", "ke arah selatan"],
    ["移动", "yí dòng", "move", "bergerak"],
    ["，", "", "", ""],
    ["完全", "wán quán", "completely", "sepenuhnya / sama sekali"],
    ["与", "yǔ", "from", "daripada"],
    ["北方", "běi fāng", "north / northern side", "utara / pihak utara"],
    ["分开", "fēn kāi", "separate", "terpisah"],
    ["，", "", "", ""],
    ["最后", "zuì hòu", "finally", "akhirnya"],
    ["成了", "chéng le", "became", "menjadi"],
    ["现在", "xiàn zài", "now", "sekarang"],
    ["这个", "zhè ge", "this", "ini punya"],
    ["样子", "yàng zi", "appearance / shape", "rupa / keadaan"],
    ["。", "", "", ""],

    ["\n", "", "", ""], // 第 8 段

    ["位于", "wèi yú", "located at", "terletak di"],
    ["南极", "Nán jí", "South Pole", "Kutub Selatan"],
    ["中心", "zhōng xīn", "center", "pusat"],
    ["部位", "bù wèi", "part / position", "bahagian / kedudukan"],
    ["的", "de", "of", "yang"],
    ["南极洲", "Nán jí zhōu", "Antarctica", "Antartika"],
    ["是", "shì", "is", "adalah"],
    ["全球", "quán qiú", "global / the whole world", "seluruh dunia"],
    ["的", "de", "of", "punya"],
    ["大冰箱", "dà bīng xiāng", "giant refrigerator", "peti sejuk gergasi"],
    ["，", "", "", ""],
    ["地球", "dì qiú", "Earth", "Bumi"],
    ["上", "shàng", "on", "di atas"],
    ["所有", "suǒ yǒu", "all", "semua"],
    ["冰", "bīng", "ice", "ais"],
    ["的", "de", "of", "punya"],
    ["十分之九", "shí fēn zhī jiǔ", "nine-tenths", "sembilan persepuluh"],
    ["都", "dōu", "all", "semua"],
    ["在", "zài", "at / in", "berada di"],
    ["南极", "Nán jí", "Antarctica", "Antartika"],
    ["冰盖", "bīng gài", "ice sheet / ice cap", "lapisan ais"],
    ["。", "", "", ""],
    ["那里", "nà lǐ", "there", "di sana"],
    ["的", "de", "of", "punya"],
    ["冰", "bīng", "ice", "ais"],
    ["有", "yǒu", "has", "mempunyai ketebalan"],
    ["数英里", "shù yīng lǐ", "several miles", "beberapa batu"],
    ["厚", "hòu", "thick", "tebal"],
    ["，", "", "", ""],
    ["在那之下", "zài nà zhī xià", "underneath that", "di bawahnya"],
    ["才", "cái", "only then", "baru / barulah"],
    ["是", "shì", "is", "adalah"],
    ["埋藏", "mái cáng", "buried", "tertanam / tersembunyi"],
    ["着", "zhe", "continuous particle", "sedang"],
    ["化石", "huà shí", "fossils", "fosil"],
    ["的", "de", "of", "yang"],
    ["地层", "dì céng", "strata / stratum", "lapisan bumi / strata地层"],
    ["。", "", "", ""],
    ["南极", "Nán jí", "Antarctica", "Antartika"],
    ["也", "yě", "also", "juga"],
    ["有", "yǒu", "has", "mempunyai"],
    ["自己", "zì jǐ", "its own", "sendiri punya"],
    ["的", "de", "of", "yang"],
    ["恐龙", "kǒng lóng", "dinosaur", "dinosaur"],
    ["化石", "huà shí", "fossils", "fosil"],
    ["！", "", "", ""],

    ["\n", "", "", ""], // 第 9 段

    ["由此可见", "yóu cǐ kě jiàn", "thus it can be seen", "oleh itu dapat dilihat"],
    ["，", "", "", ""],
    ["每个", "měi gè", "every", "setiap"],
    ["大陆", "dà lù", "continent", "benua"],
    ["都", "dōu", "all", "semua"],
    ["有", "yǒu", "has", "ada"],
    ["自己", "zì jǐ", "its own", "sendiri punya"],
    ["的", "de", "of", "yang"],
    ["恐龙", "kǒng lóng", "dinosaur", "dinosaur"],
    ["化石", "huà shí", "fossils", "fosil"],
    ["，", "", "", ""],
    ["这些", "zhè xiē", "these", "semua ini"],
    ["化石", "huà shí", "fossils", "fosil"],
    ["证实", "zhèng shí", "confirmed / proved", "mengesahkan / membuktikan"],
    ["了", "le", "particle", "sudah"],
    ["地壳", "dì qiào", "Earth's crust", "kerak bumi"],
    ["在", "zài", "in", "pada masa"],
    ["过去", "guò qù", "past", "lalu / zaman dahulu"],
    ["曾经", "céng jīng", "once / ever", "pernah"],
    ["发生", "fā shēng", "happen / occur", "berlaku"],
    ["过", "guo", "experienced particle", "pernah"],
    ["大规模", "dà guī mó", "large-scale", "skala besar-besaran"],
    ["的", "de", "of", "yang"],
    ["构造运动", "gòu zào yùn dòng", "tectonic movement", "pergerakan tektonik"],
    ["。", "", "", ""],
    ["这一", "zhè yī", "this", "ini punya"],
    ["运动", "yùn dòng", "movement", "pergerakan"],
    ["力量", "lì liàng", "force / power", "kuasa / kekuatan"],
    ["强", "qiáng", "strong", "kuat"],
    ["到", "dào", "up to / to the degree of", "sehingga / sampai tahap"],
    ["足以", "zú yǐ", "sufficient to", "cukup untuk"],
    ["把", "bǎ", "disposal particle", ""],
    ["完整", "wán zhěng", "complete / intact", "lengkap / utuh"],
    ["的", "de", "of", "yang"],
    ["大陆", "dà lù", "continent", "benua"],
    ["撕碎", "sī suì", "tear to pieces", "dikoyak-koyakkan / dihancurkan"],
    ["，", "", "", ""],
    ["并", "bìng", "and", "dan / serta"],
    ["把", "bǎ", "disposal particle", ""],
    ["它们", "tā men", "them", "mereka"],
    ["分散", "fēn sàn", "disperse / scatter", "disebarkan / berselerak"],
    ["到", "dào", "to", "ke"],
    ["地球", "dì qiú", "Earth", "Bumi"],
    ["上", "shàng", "on", "di atas"],
    ["的", "de", "of", "yang / punya"],
    ["各个", "gè gè", "various / each", "setiap / pelbagai"],
    ["偏僻", "piān pì", "remote / isolated", "terpencil / hulu"],
    ["角落", "jiǎo luò", "corners", "sudut / pelosok"],
    ["，", "", "", ""],
    ["从而", "cóng ér", "thus / thereby", "dengan itu / lantas"],
    ["使", "shǐ", "make / cause", "menyebabkan"],
    ["恐龙", "kǒng lóng", "dinosaur", "dinosaur"],
    ["化石", "huà shí", "fossils", "fosil"],
    ["无处不在", "wú chù bú zài", "ubiquitous / everywhere", "berada di mana-mana jua / wujud di mana-mana"],
    ["。", "", "", ""]
];
// =====================================================================

// ==================== ⚙️ 下面是运行逻辑代码 ============================
let currentIdx = -1; 
let saved = JSON.parse(localStorage.getItem('saved_104')) || [];
let quizData = [];
let currentQuizIdx = 0;
let isLocked = false;

window.onload = function() {
    // 动态渲染标题
    document.getElementById('articleTitle').innerText = lessonTitle;
    document.title = lessonTitle;

    if (typeof lessonData !== 'undefined') { 
        render(); 
        renderNB(); 
    }
    document.body.appendChild(document.getElementById('buddyPopover'));
    document.addEventListener('click', () => { 
        document.getElementById('buddyPopover').style.display = 'none'; 
        document.querySelectorAll('ruby').forEach(r => r.classList.remove('is-active'));
    });
};

function render() {
    const cnt = document.getElementById('content'); 
    cnt.innerHTML = "";
    let pNum = 1; 
    let p = createP(pNum);
    lessonData.forEach((d, i) => {
        if (d[0] === "\n") { 
            if(p.childNodes.length > 1) { 
                cnt.appendChild(p); 
                pNum++; 
            } 
            p = createP(pNum); 
        }
        else if (d[1] === "") { 
            let s = document.createElement("span"); 
            s.innerText = d[0]; 
            p.appendChild(s); 
        }
        else {
            let r = document.createElement("ruby"); 
            r.setAttribute("data-word-index", i);
            r.onclick = (e) => { 
                e.stopPropagation(); 
                document.querySelectorAll('ruby').forEach(x=>x.classList.remove('is-active')); 
                r.classList.add('is-active'); 
                openPop(e.currentTarget, i); 
            };
            r.innerHTML = `${d[0]}<rt>${d[1]}</rt>`; 
            p.appendChild(r);
        }
    });
    cnt.appendChild(p);
}

function createP(n) { 
    let p = document.createElement("p"); 
    let s = document.createElement("span"); 
    s.className = "p-index"; 
    s.innerText = "第" + n + "段"; 
    p.appendChild(s); 
    return p; 
}

function openPop(el, i) {
    currentIdx = i; 
    const d = lessonData[i];
    document.getElementById('popWord').innerText = d[0];
    document.getElementById('popPinyin').innerText = `[${d[1]}]`;
    document.getElementById('popEn').innerText = d[2];
    document.getElementById('popBm').innerText = d[3];
    
    const pop = document.getElementById('buddyPopover');
    const arrow = document.getElementById('popArrow');
    pop.style.display = 'block';
    
    const rect = el.getBoundingClientRect();
    const popRect = pop.getBoundingClientRect();
    let top = rect.top - popRect.height - 15;
    let left = rect.left + (rect.width / 2) - (popRect.width / 2);
    const margin = 15;
    
    if (left + popRect.width > window.innerWidth - margin) left = window.innerWidth - popRect.width - margin;
    if (left < margin) left = margin;
    
    arrow.style.left = `${(rect.left + rect.width / 2) - left}px`;
    pop.style.top = `${top}px`;
    pop.style.left = `${left}px`;
}

function saveToNotebook(e) {
    e.stopPropagation();
    if (!saved.includes(currentIdx)) { 
        saved.push(currentIdx); 
        localStorage.setItem('saved_104', JSON.stringify(saved)); 
        renderNB(); 
    }
    const btn = e.target; 
    btn.innerText = "✓ 已存";
    setTimeout(() => btn.innerText = "Copy 📋", 1000);
}

function renderNB() {
    const list = document.getElementById('notebookList');
    if (saved.length === 0) { 
        list.innerHTML = "<span style='color:#999; font-size:13px;'>点击词语 Copy 记录生词</span>"; 
    } 
    else {
        list.innerHTML = "";
        saved.forEach(idx => {
            const item = lessonData[idx]; 
            if(!item) return;
            const div = document.createElement("div"); 
            div.className = "notebook-item"; 
            div.innerText = item[0];
            div.onclick = (e) => {
                e.stopPropagation();
                const target = document.querySelector(`ruby[data-word-index="${idx}"]`);
                if(target) {
                    target.scrollIntoView({behavior: "smooth", block: "center"});
                    document.querySelectorAll('ruby').forEach(r => r.classList.remove('is-active'));
                    setTimeout(() => { 
                        target.classList.add('is-active'); 
                        openPop(target, idx); 
                    }, 500);
                }
            };
            list.appendChild(div);
        });
    }
}

function forceClearNotebook() { 
    localStorage.removeItem('saved_104'); 
    saved = []; 
    renderNB(); 
    document.getElementById('gameContainer').style.display = 'none'; 
    document.getElementById('gameToggleBtn').innerText = "🎯 生词测试"; 
}

function toggleGameMode() {
    const container = document.getElementById('gameContainer');
    const btn = document.getElementById('gameToggleBtn');
    if (container.style.display === 'block') { 
        container.style.display = 'none'; 
        btn.innerText = "🎯 生词测试"; 
    }
    else {
        if (saved.length < 1) { 
            alert("生词本是空的哦！"); 
            return; 
        }
        container.style.display = 'block'; 
        btn.innerText = "📖 返回课文";
        startQuizGame();
        container.scrollIntoView({behavior: "smooth"});
    }
}

function startQuizGame() {
    quizData = [...saved].sort(() => Math.random() - 0.5);
    currentQuizIdx = 0;
    loadQuestion();
}

function loadQuestion() {
    isLocked = false;
    const targetIdx = quizData[currentQuizIdx];
    const data = lessonData[targetIdx];
    
    document.getElementById('quizProgress').innerText = `第 ${currentQuizIdx + 1} / ${quizData.length} 题`;
    document.getElementById('quizQuestion').innerText = data[0];
    document.getElementById('quizPinyin').innerText = `[${data[1]}]`;
    
    const correctStr = (data[2].trim() + "；" + data[3].trim());
    let options = [correctStr];
    
    let others = lessonData
        .filter(d => d[1] !== "" && d[0] !== data[0])
        .map(d => (d[2].trim() + "；" + d[3].trim()));
    
    others = [...new Set(others)].filter(s => s !== correctStr).sort(() => Math.random() - 0.5);
    
    for(let i=0; i<3; i++) { 
        if(others[i]) options.push(others[i]); 
    }
    options.sort(() => Math.random() - 0.5);

    const optDiv = document.getElementById('quizOptions');
    optDiv.innerHTML = "";
    options.forEach(opt => {
        const b = document.createElement('button');
        b.className = 'quiz-opt-btn';
        b.innerText = opt;
        b.onclick = () => {
            if(isLocked || b.classList.contains('wrong')) return;
            if(opt.trim() === correctStr.trim()) {
                isLocked = true;
                b.classList.add('correct');
                setTimeout(() => {
                    currentQuizIdx++;
                    if(currentQuizIdx < quizData.length) loadQuestion();
                    else { 
                        alert("🎉 完成测试！你真棒！"); 
                        toggleGameMode(); 
                    }
                }, 800);
            } else {
                b.classList.add('wrong');
            }
        };
        optDiv.appendChild(b);
    });
}

function togglePinyin() { 
    document.getElementById('content').classList.toggle('hide-pinyin'); 
    document.getElementById('pyToggle').classList.toggle('active'); 
}

function toggleTheme() { 
    document.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme')==='dark'?'':'dark'); 
}
