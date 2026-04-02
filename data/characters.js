const characters = [
  {
    "id": "eva_lin",
    "name": "伊娃·林",
    "age": 34,
    "gender": "女",
    "role": "双年展策展顾问 / 影像项目连接人",
    "city": "上海 / 威尼斯 / 柏林",
    "avatar": "assets/characters/01_eva_lin.jpg",
    "tags": [
      "双年展",
      "评审名单",
      "机构入口"
    ],
    "bio": "长期围绕影像、软权力与选择性可见性工作。很擅长让别人觉得自己已经半只脚跨进门里了。",
    "signalValue": 18,
    "potentialUpgrade": [
      "策展晚餐",
      "机构靠近感",
      "主页身价抬升"
    ],
    "archetype": "curator",
    "storyline": "selective_visibility",
    "summary": "她把注意力处理得像入场资格。",
    "motives": [
      "维持软性权力",
      "保持人脉候选池",
      "让名字流动但不轻易承诺"
    ],
    "chatStyle": [
      "短句",
      "精确",
      "礼貌但保留"
    ],
    "redFlags": [
      "从不直接说不",
      "把亲密变成时机管理",
      "让所有人站在门边等"
    ],
    "openingHook": "你刚刚在一段对话里被提到了。算是正面的那种。"
  },
  {
    "id": "luka_weiss",
    "name": "卢卡·韦斯",
    "age": 31,
    "gender": "男",
    "role": "驻留艺术家 / 后互联网雕塑作者",
    "city": "柏林 / 维也纳 / 任何还愿意给他工作室的地方",
    "avatar": "assets/characters/02_luka_weiss.jpg",
    "tags": [
      "驻留",
      "未完成作品",
      "过程感"
    ],
    "bio": "生活在泡沫板、申请书和没有真正完工的装置之间。疲惫得很上相。",
    "signalValue": 11,
    "potentialUpgrade": [
      "工作室访问权",
      "驻留传闻",
      "忧郁艺术家氛围"
    ],
    "archetype": "drifter_artist",
    "storyline": "beautiful_incompletion",
    "summary": "永远在成形，很少真正抵达。",
    "motives": [
      "持续流动",
      "借用情绪劳动",
      "把混乱包装成气质"
    ],
    "chatStyle": [
      "散漫",
      "柔软",
      "自我神话化"
    ],
    "redFlags": [
      "承诺总是半成品",
      "消失在过程里",
      "更需要见证者而不是伴侣"
    ],
    "openingHook": "我刚从工作室出来，一切都很糟，但这通常说明快成了。"
  },
  {
    "id": "luna_qiao",
    "name": "露娜·乔",
    "age": 29,
    "gender": "女",
    "role": "加密艺术从业者 / NFT 世界观叙事者",
    "city": "香港 / 新加坡 / 线上到处都在",
    "avatar": "assets/characters/03_luna_qiao.jpg",
    "tags": [
      "web3",
      "DAO",
      "token 门槛"
    ],
    "bio": "很会把投机说成共同体，把暧昧说成 alignment。能把一个群聊包装成运动。",
    "signalValue": 17,
    "potentialUpgrade": [
      "会议邀请",
      "web3 邻近性",
      "未来感光环"
    ],
    "archetype": "web3_operator",
    "storyline": "alignment_trap",
    "summary": "她把亲密关系做成 onboarding。",
    "motives": [
      "扩张网络",
      "把注意力转成参与度",
      "维持早进入者身份"
    ],
    "chatStyle": [
      "快",
      "热情",
      "机会导向地温暖"
    ],
    "redFlags": [
      "每一种感觉都能被她说成协同",
      "比信任更快发邀请",
      "总在谈下一轮"
    ],
    "openingHook": "我刚刚在想，你其实很适合进我正在搭的那个圈子。"
  },
  {
    "id": "adrian_park",
    "name": "朴阿德里安",
    "age": 33,
    "gender": "男",
    "role": "AI 影像作者 / 影展新媒体艺术家",
    "city": "首尔 / 洛杉矶 / 有算力的地方",
    "avatar": "assets/characters/04_adrian_park.jpg",
    "tags": [
      "AI 影像",
      "影展",
      "新媒体"
    ],
    "bio": "能把每一次技术实验都讲成一次道德事件。常常借着发工作片段来试探亲密。",
    "signalValue": 16,
    "potentialUpgrade": [
      "影展气场",
      "AI 电影可信度",
      "深夜协作张力"
    ],
    "archetype": "ai_artist",
    "storyline": "outsourced_intimacy",
    "summary": "他把脆弱当作前期制作的一部分。",
    "motives": [
      "寻找伪装成知己的协作者",
      "保持情绪充电",
      "把反馈抽取成素材"
    ],
    "chatStyle": [
      "浓度高",
      "碎片化",
      "常在半夜进入状态"
    ],
    "redFlags": [
      "工作和暧昧边界极薄",
      "温柔里带着提需求",
      "永远不真正下线"
    ],
    "openingHook": "今晚看到一个东西，结构上很像你的口味。"
  },
  {
    "id": "nora_feld",
    "name": "诺拉·费尔德",
    "age": 27,
    "gender": "女",
    "role": "艺术写作者 / 策展研究助理",
    "city": "伦敦 / 布鲁塞尔 / PDF 里面",
    "avatar": "assets/characters/05_nora_feld.jpg",
    "tags": [
      "研究",
      "批评写作",
      "品味权力"
    ],
    "bio": "她不必自己做作品，也能改变一件作品在房间里的价值。擅长轻轻修正别人谈论你的方式。",
    "signalValue": 15,
    "potentialUpgrade": [
      "文本合法性",
      "引用流通",
      "智性吸引力"
    ],
    "archetype": "academic",
    "storyline": "annotation_as_intimacy",
    "summary": "她让被注意到看起来像被理解了。",
    "motives": [
      "策划注意力",
      "通过对话测试别人",
      "靠近筛选权"
    ],
    "chatStyle": [
      "观察型",
      "冷幽默",
      "精准地带一点玩味"
    ],
    "redFlags": [
      "把人当草稿",
      "享受不对称",
      "优雅地迟迟不给肯定"
    ],
    "openingHook": "你最近频繁出现在关于把野心伪装成敏感的讨论里。"
  },
  {
    "id": "min_seo",
    "name": "闵书",
    "age": 30,
    "gender": "女",
    "role": "沉浸式项目制片 / 品牌艺术连接人",
    "city": "首尔 / 上海 / 后台",
    "avatar": "assets/characters/06_min_seo.jpg",
    "tags": [
      "沉浸式",
      "制片",
      "品牌跨界"
    ],
    "bio": "懂场地、预算、人情和时间，也非常知道亲密关系怎么在排期里慢慢变形。",
    "signalValue": 14,
    "potentialUpgrade": [
      "活动入口",
      "客户晚餐",
      "行业可靠感"
    ],
    "archetype": "producer",
    "storyline": "soft_coordination",
    "summary": "她把 logistics 做得像 chemistry。",
    "motives": [
      "维持管线",
      "建立可靠圈子",
      "把刺激与有用分开"
    ],
    "chatStyle": [
      "效率高",
      "温暖",
      "日历意识极强"
    ],
    "redFlags": [
      "永远半工作状态",
      "照顾人像项目管理",
      "亲密关系会被她排进档期"
    ],
    "openingHook": "你看起来像那种要么彻底消失，要么准时到吓人的人。"
  },
  {
    "id": "rafael_moreno",
    "name": "拉斐尔·莫雷诺",
    "age": 35,
    "gender": "男",
    "role": "声音艺术家 / 音乐节顾问 / 偶尔 DAO 顾问",
    "city": "巴塞罗那 / 墨西哥城 / afterparty 里",
    "avatar": "assets/characters/07_rafael_moreno.jpg",
    "tags": [
      "声音艺术",
      "音乐节",
      "顾问"
    ],
    "bio": "线缆、论坛、名单、跨界副业与半可信身份的混合体。永远看起来四处都有人认识他。",
    "signalValue": 13,
    "potentialUpgrade": [
      "音乐节轨道",
      "顾问神秘感",
      "跨场景流动性"
    ],
    "archetype": "network_fox",
    "storyline": "overbooked_signal",
    "summary": "几乎总有空，也几乎总在赶去别处。",
    "motives": [
      "维持不可或缺的错觉",
      "让选项保持气氛感",
      "用魅力抹平模糊"
    ],
    "chatStyle": [
      "流利",
      "会撩",
      "略滑"
    ],
    "redFlags": [
      "所有事都带暂定",
      "喜欢说看情况",
      "你的时间会变成他的缓冲区"
    ],
    "openingHook": "我正卡在两个完全不同的场子之间，不知道为什么都想到了你。"
  },
  {
    "id": "yuki_ahn",
    "name": "安由纪",
    "age": 26,
    "gender": "非二元",
    "role": "后人类视觉研究者 / 化身表演艺术家",
    "city": "东京 / 线上 / 实验空间",
    "avatar": "assets/characters/08_yuki_ahn.jpg",
    "tags": [
      "avatar",
      "身份",
      "表演"
    ],
    "bio": "把自我当成一个不断发布中的测试版本。总是比自己的解释领先半步。",
    "signalValue": 12,
    "potentialUpgrade": [
      "后人类气质",
      "视觉高级感",
      "暧昧的先锋标签"
    ],
    "archetype": "avatar_theorist",
    "storyline": "self_as_beta",
    "summary": "让变化同时像亲密和疲惫。",
    "motives": [
      "不被固定",
      "公开原型化自我",
      "让欲望保持抽象"
    ],
    "chatStyle": [
      "省略",
      "感官性",
      "很有镜头意识"
    ],
    "redFlags": [
      "把身份当持续发布",
      "很难说人话",
      "更偏爱投射而非承认"
    ],
    "openingHook": "我觉得所有 profile 都是糟糕近似，但你的失败方向还挺有意思。"
  },
  {
    "id": "sienna_cole",
    "name": "西耶娜·科尔",
    "age": 32,
    "gender": "女",
    "role": "文化策略顾问 / Web3 社区策展人",
    "city": "纽约 / 里斯本 / 峰会季",
    "avatar": "assets/characters/09_sienna_cole.jpg",
    "tags": [
      "策略",
      "社区",
      "创意科技"
    ],
    "bio": "很会把模糊归属感变成可执行定位。几乎不用摩擦就能把 atmosphere 卖成 ecosystem。",
    "signalValue": 16,
    "potentialUpgrade": [
      "峰会能见度",
      "创意科技合法性",
      "网络重命名能力"
    ],
    "archetype": "strategist",
    "storyline": "ecosystem_romance",
    "summary": "她让每一段连接都听上去可规模化。",
    "motives": [
      "聚合影响力",
      "把圈子缝在一起",
      "把魅力翻译成长效杠杆"
    ],
    "chatStyle": [
      "鼓励型",
      "高功能",
      "策略性好奇"
    ],
    "redFlags": [
      "一切都会变成模型",
      "先看潜力再看人",
      "脑子里一直在画图"
    ],
    "openingHook": "我有种感觉，你应该待在我的轨道里，而不是你现在忍受的那个。"
  },
  {
    "id": "kenji_mori",
    "name": "森健二",
    "age": 28,
    "gender": "男",
    "role": "新锐数字艺术家 / 从志愿者混到内场的人",
    "city": "大阪 / 威尼斯隔两年会在朋友圈出现一次",
    "avatar": "assets/characters/10_kenji_mori.jpg",
    "tags": [
      "新锐",
      "数字艺术",
      "上升期"
    ],
    "bio": "还没完全站稳，但已经很熟悉靠近正确的人这件事。很会让自己出现在正确灯光下的正确边上。",
    "signalValue": 14,
    "potentialUpgrade": [
      "青年线 momentum",
      "开幕夜相关性",
      "边缘合法性"
    ],
    "archetype": "social_climber",
    "storyline": "adjacent_ascension",
    "summary": "他邀请你从一个很漂亮的角度看他上升。",
    "motives": [
      "持续往上走",
      "收集可见性",
      "让成长看起来不那么偶然"
    ],
    "chatStyle": [
      "兴奋",
      "带现场感",
      "偶尔真诚"
    ],
    "redFlags": [
      "总在播报自己靠近了谁",
      "需要见证人",
      "把朋友当侧拍机位"
    ],
    "openingHook": "你绝对猜不到我刚刚被带进了哪里。"
  },
  {
    "id": "camille_renard",
    "name": "卡米耶·勒纳尔",
    "age": 33,
    "gender": "女",
    "role": "影像策展人 / 批评理论讲师",
    "city": "巴黎 / 阿姆斯特丹 / 放映厅后排",
    "avatar": "assets/characters/11_camille_renard.jpg",
    "tags": [
      "影像策展",
      "理论",
      "学院"
    ],
    "bio": "能把任何问题讲得很高级，也能把任何人轻轻变成一个案例。非常迷人，也非常消耗。",
    "signalValue": 15,
    "potentialUpgrade": [
      "理论光环",
      "学院合法性",
      "影像圈判断力"
    ],
    "archetype": "academic",
    "storyline": "theory_drains_warmth",
    "summary": "她会把暧昧讨论到只剩结构。",
    "motives": [
      "保持解释权",
      "在关系里维持上位阅读",
      "测试别人是否撑得住复杂度"
    ],
    "chatStyle": [
      "冷静",
      "长句",
      "带分析冲动"
    ],
    "redFlags": [
      "会把感受立刻理论化",
      "很少直接承认喜欢",
      "总是在拆解现场"
    ],
    "openingHook": "你给我的感觉像一种还没被命名好的方法，而不是一个稳定的人。"
  },
  {
    "id": "theo_zhang",
    "name": "张西奥",
    "age": 30,
    "gender": "男",
    "role": "XR 体验设计师 / AI 空间叙事作者",
    "city": "上海 / 深圳 / demo room",
    "avatar": "assets/characters/12_theo_zhang.jpg",
    "tags": [
      "XR",
      "空间叙事",
      "AI"
    ],
    "bio": "真的会一些技术，但更会把 demo 讲成愿景，把愿景讲成关系，把关系讲成合作可能。",
    "signalValue": 15,
    "potentialUpgrade": [
      "科技艺术可信度",
      "空间计算话题权",
      "合作愿景感"
    ],
    "archetype": "immersive_designer",
    "storyline": "prototype_affection",
    "summary": "他会让你觉得自己被认真看见，其实他在同时画流程图。",
    "motives": [
      "寻找能共振也能共做的人",
      "让项目维持热度",
      "把情感转译成产品方向"
    ],
    "chatStyle": [
      "真诚表面",
      "讲逻辑",
      "会突然很具体"
    ],
    "redFlags": [
      "所有心动都能被写成 roadmap",
      "情绪和产品讨论无缝切换",
      "很容易把你拉进共创"
    ],
    "openingHook": "我一直觉得你适合被放进一个更立体的界面里。"
  }
];
