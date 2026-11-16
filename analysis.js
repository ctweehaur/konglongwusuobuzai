// ==========================================================================
// 📖 《恐龙无所不在》深度文本赏析数据库 (analysis.js) - 事理说明文逻辑精修版
// 无重复全局 const 声明，100% 安全挂载
// ==========================================================================

const lessonTeacherAnalysis = {
    overview: "<strong>【文体定位与核心逻辑】</strong><span style='font-weight:500;'>《恐龙无所不在》（又译《恐龙无处不有》）是美籍科普巨匠、“二十世纪科幻小说三巨头”之一<span class='proper-noun'>艾萨克·阿西莫夫</span>（Isaac Asimov，1920–1992）撰写的一篇经典<strong>事理说明文</strong>。文章并非为了单纯介绍恐龙的习性，而是以<strong>“南极发现鸟臀目恐龙化石”</strong>这一古生物学发现作为引子，通过严密的逻辑推理，有力证明了地质学上的<strong>“板块构造理论”与“大陆漂移学说”</strong>，从而深刻阐明了开篇提出的核心论点——<strong>“不同科学领域之间是紧密相连的。在一个科学领域的新发现，肯定会对其他领域产生影响。”</strong></span><br><strong>【全篇四步逻辑链条（由果溯因）】</strong><span style='font-weight:500;'>全文共9段，按<strong>逻辑顺序</strong>层层推进：<br>① <strong>亮出总论点（第1段）</strong>：不同科学领域紧密相连、相互影响；<br>② <strong>列举现象并设疑推论（第2–3段）</strong>：1986年南极发现恐龙化石 → 恐龙不耐寒且不能越洋，为何现身南极？ → 推导出核心答案：<strong>“是大陆在漂移而不是恐龙自己在迁移”</strong>；<br>③ <strong>阐释地质学原理与时间线（第4–7段）</strong>：引入“板块构造”与“泛大陆（Pangaea）”理论，按时间顺序还原 2.25 亿年前（泛大陆完整，恐龙分散）→ 2 亿年前（分裂四部分）→ 5000 万年前（印度撞亚洲成喜马拉雅山脉，南极洲移向极地）的漂移历程；<br>④ <strong>总结印证（第8–9段）</strong>：遍布全球（包括“全球大冰箱”南极）的恐龙化石，确凿证实了地壳大规模构造运动的存在。</span>",

    paragraphs: {
        1: "<strong>【第1段：开门见山——亮出跨学科关联的中心论点】</strong><br><span style='font-weight:500;'>• <strong>核心考点 3（总领全篇）：</strong>起笔两句不作任何寒暄铺垫，直接抛出全篇的哲理与科学总纲：“不同科学领域之间是紧密相连的。在一个科学领域的新发现，肯定会对其他领域产生影响。”既统摄全篇，又激发读者好奇：作者究竟要讲哪两个领域的联系？</span>",

        2: "<strong>【第2段：举例子——1986年南极詹姆斯罗斯岛发现恐龙化石】</strong><br><span style='font-weight:500;'>• <strong>核心考点 2（举例子说明方法）：</strong>以“例如”切入，精准交代时间（1986年1月）、研究机构（<span class='proper-noun'>阿根廷</span><span class='proper-noun'>南极</span>研究所）、地点（靠近<span class='proper-noun'>南美</span>南端的<span class='proper-noun'>詹姆斯罗斯岛</span>）与发现物（鸟臀目恐龙化石骨骼）。<br>• <strong>初步结论：</strong>结合其他大陆早已发现恐龙化石的事实，得出第一层推论——“说明恐龙确实遍布于世界各地”。</span>",

        3: "<strong>【第3段：设问与转折推论——“是大陆在漂移而不是恐龙自己在迁移”】</strong><br><span style='font-weight:500;'>• <strong>核心考点 1（制造认知冲突，承上启下）：</strong>作者并没有停留在古生物学表面，而是将“恐龙化石”与“南极大陆”联系起来，连发两个精妙的<strong>设问句</strong>：<br>&nbsp;&nbsp;① “恐龙如何能在南极地区生存呢？”（矛盾：恐龙是爬行动物，根本不适应严寒气候）；<br>&nbsp;&nbsp;② “那么它们是如何越过大洋到另一个大陆上去的呢？”（矛盾：陆生恐龙无法横渡大洋）。<br>• <strong>破题金句：</strong>排除一切不可能后，顺理成章推出震烁全文的核心答案——<strong>“这一问题的答案是大陆在漂移而不是恐龙自己在迁移。”</strong>由此实现从“古生物学”向“地质学”的华丽跨越！</span>",

        4: "<strong>【第4段：引入“板块构造”理论——解开地质界的不解之谜】</strong><br><span style='font-weight:500;'>• <strong>科学原理解释：</strong>指出地壳（读 <code>dì qiào</code>）是由一些紧密拼合但又缓慢运动的大板块构成的。用三个精准动词——<strong>“拉开”、“挤压”、“俯冲”</strong>，简明扼要地概括了板块运动的三种基本形态，并运用<strong>举例子</strong>说明该理论解答了火山、地震、岛屿链、海洋深渊等昔日的不解之谜。</span>",

        5: "<strong>【第5段：打比方与下定义——“板块背上驮着大陆”与“泛大陆”】</strong><br><span style='font-weight:500;'>• <strong>核心考点 2（打比方与作诠释/下定义）：</strong><br>&nbsp;&nbsp;① <strong>打比方</strong>：“可以这样比喻，板块背上驮着许多大陆，当板块向一个或另一个方向运动时，大陆也随之一起运动。”一个<strong>“驮”</strong>字化抽象为具象，把地壳板块比作负重前行的巨兽，瞬间让读者明白大陆为何会移动；<br>&nbsp;&nbsp;② <strong>下定义/作诠释</strong>：解释每隔一段时期所有大陆汇聚成的单一主要陆地称为<strong>“泛大陆（Pangaea）”</strong>。</span>",

        6: "<strong>【第6段：回溯 2.25 亿年前——完整泛大陆与早期恐龙的乐园】</strong><br><span style='font-weight:500;'>• <strong>列数字与时间线起点：</strong>在地球40多亿年历史中，最后一次完整的泛大陆形成于约 <strong>2.25 亿年前</strong>。当时早期恐龙已经出现，且所有陆地都处于温暖舒适的<strong>热带和温带环境</strong>内，因此恐龙得以无障碍地分散到泛大陆的各个角落（这便解释了为何南极陆块上会有恐龙）。</span>",

        7: "<strong>【第7段：回溯两亿年前至 5000 万年前——泛大陆的四分五裂与漂移定型】</strong><br><span style='font-weight:500;'>• <strong>清晰的时间与空间演变：</strong><br>&nbsp;&nbsp;• <strong>约两亿年前</strong>：泛大陆分裂成四部分——北部（北美、欧、亚）、南部（南美、非）、最南部（南极洲、澳大利亚）及剩余一小部分（印度）；<br>&nbsp;&nbsp;• <strong>括号补充论据</strong>：将地图上的<span class='proper-noun'>非洲</span>与<span class='proper-noun'>南美洲</span>拼合，依然<strong>“天衣无缝”</strong>，直观印证两者曾连为一体；<br>&nbsp;&nbsp;• <strong>约 5000 万年前</strong>：<span class='proper-noun'>印度</span>向北撞击<span class='proper-noun'>亚洲</span>隆起形成<span class='proper-noun'>喜马拉雅山脉</span>；而带着恐龙化石的<span class='proper-noun'>南极洲</span>则向南漂移至南极点，彻底沦为冰封大陆。</span>",

        8: "<strong>【第8段：打比方与列数字——“全球的大冰箱”南极洲】</strong><br><span style='font-weight:500;'>• <strong>核心考点 2（说明方法典范句）：</strong>“位于南极中心部位的南极洲是全球的大冰箱，地球上所有冰的十分之九都在南极冰盖。那里的冰有数英里厚，在那之下才是埋藏着化石的地层。”<br>• <strong>表达效果：</strong>以<strong>“全球的大冰箱”</strong>（打比方）配合<strong>“十分之九”、“数英里厚”</strong>（列数字），极写南极今日之酷寒，与第6段恐龙生活的温带环境形成强烈反差，末尾感叹句“南极也有自己的恐龙化石！”充满科学印证后的喜悦。</span>",

        9: "<strong>【第9段：总结全篇，首尾圆合——恐龙化石无处不在证实板块运动】</strong><br><span style='font-weight:500;'>• 以“由此可见”收束全篇逻辑链条：正是强大的地壳构造运动把完整的大陆“撕碎”并分散到全球各个偏僻角落，才使得恐龙化石“无处不在”（点题），再次有力呼应了第1段“不同科学领域紧密相连”的中心论点。</span>"
    }
};
