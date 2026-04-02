const storylines = {
  "eva_lin": {
    "title": "选择性可见性",
    "startNode": "eva_001",
    "theme": "软权力、准入门槛与让人长期站在门边的情感建筑",
    "nodes": {
      "eva_001": {
        "speaker": "eva_lin",
        "messages": [
          "你刚刚在一段对话里被提到了。",
          "不算坏。"
        ],
        "replies": [
          {
            "text": "这听起来很模糊，但有点好奇。",
            "next": "eva_002"
          },
          {
            "text": "我要担心吗？",
            "next": "eva_002"
          }
        ]
      },
      "eva_002": {
        "speaker": "eva_lin",
        "messages": [
          "模糊有时候是保护。",
          "至少在时机成熟前是。"
        ],
        "replies": [
          {
            "text": "保护谁？",
            "next": "eva_003"
          },
          {
            "text": "听起来像被放在门边。",
            "next": "eva_003"
          }
        ]
      },
      "eva_003": {
        "speaker": "eva_lin",
        "messages": [
          "明晚有个很小的放映。",
          "房间不大，酒很差，人倒是可能有用。",
          "我可以考虑把你放进去。"
        ],
        "replies": [
          {
            "text": "这几乎像邀请了。",
            "next": "eva_004"
          },
          {
            "text": "可以，发我时间。",
            "next": "eva_004"
          }
        ]
      },
      "eva_004": {
        "speaker": "eva_lin",
        "messages": [
          "别到得太早。",
          "也别带着终于进来了的表情。"
        ],
        "replies": [
          {
            "text": "你连入场姿态都要编排。",
            "next": "eva_005"
          },
          {
            "text": "懂了，优雅地迟到。",
            "next": "eva_005"
          }
        ]
      },
      "eva_005": {
        "speaker": "system",
        "messages": [
          "次日 18:42",
          "伊娃·林发来了一枚定位。"
        ],
        "replies": [
          {
            "text": "打开定位",
            "next": "eva_006"
          }
        ]
      },
      "eva_006": {
        "speaker": "eva_lin",
        "messages": [
          "七点十分到会比七点整更好。",
          "前者没那么显眼，后者显得太想进。"
        ],
        "replies": [
          {
            "text": "你真的在编舞。",
            "next": "eva_007"
          },
          {
            "text": "懂了。",
            "next": "eva_007"
          }
        ]
      },
      "eva_007": {
        "speaker": "eva_lin",
        "messages": [
          "你今晚处理得不错。",
          "没有过度热情，这已经比几个履历更好的人强。"
        ],
        "replies": [
          {
            "text": "这话听起来差点有点温柔。",
            "next": "eva_008"
          },
          {
            "text": "所以我一直在被打分。",
            "next": "eva_008"
          }
        ]
      },
      "eva_008": {
        "speaker": "eva_lin",
        "messages": [
          "温柔只有在改变一个人的位置时才有价值。",
          "否则只是摆设。"
        ],
        "replies": [
          {
            "text": "那今晚改变了吗？",
            "next": "eva_end"
          },
          {
            "text": "你把靠近说得像奖励。",
            "next": "eva_end"
          }
        ]
      },
      "eva_end": {
        "speaker": "eva_lin",
        "messages": [
          "下周还有个更小的 dinner。",
          "我正在决定你是不是已经适合坐下。"
        ],
        "replies": []
      }
    }
  },
  "luna_qiao": {
    "title": "对齐陷阱",
    "startNode": "luna_001",
    "theme": "温暖、机会与投机语言如何混成同一种亲近感",
    "nodes": {
      "luna_001": {
        "speaker": "luna_qiao",
        "messages": [
          "我刚刚突然想到，你其实很适合进我最近在搭的一个房间。",
          "不是随口说的。"
        ],
        "replies": [
          {
            "text": "这听起来又像夸人又像招募。",
            "next": "luna_002"
          },
          {
            "text": "什么房间？",
            "next": "luna_002"
          }
        ]
      },
      "luna_002": {
        "speaker": "luna_qiao",
        "messages": [
          "一个很小的 community。",
          "艺术相关，但不会被旧机构的节奏困住。"
        ],
        "replies": [
          {
            "text": "这像一份有皮肤的 pitch deck。",
            "next": "luna_003"
          },
          {
            "text": "你觉得我进去能干嘛？",
            "next": "luna_003"
          }
        ]
      },
      "luna_003": {
        "speaker": "luna_qiao",
        "messages": [
          "你有 signal，也有 taste。",
          "而且你那种轮廓，会让别人开始调整自己。"
        ],
        "replies": [
          {
            "text": "你很会把赞美说得像策略。",
            "next": "luna_004"
          },
          {
            "text": "你喜欢的是我，还是我的表面积？",
            "next": "luna_004"
          }
        ]
      },
      "luna_004": {
        "speaker": "luna_qiao",
        "messages": [
          "现在这两件事还分得开吗？",
          "至少在线上我不觉得。"
        ],
        "replies": [
          {
            "text": "这个回答挺当下，也挺危险。",
            "next": "luna_005"
          },
          {
            "text": "你把这个说得像解放。",
            "next": "luna_005"
          }
        ]
      },
      "luna_005": {
        "speaker": "luna_qiao",
        "messages": [
          "明天 preview 后有个 dinner。",
          "有两个收藏家、一个 founder、两个艺术家，还有一个假装自己不投项目的人。",
          "你会有用，而且大概率会喜欢。"
        ],
        "replies": [
          {
            "text": "有用不是很浪漫的词。",
            "next": "luna_006"
          },
          {
            "text": "可以，发我信息。",
            "next": "luna_006"
          }
        ]
      },
      "luna_006": {
        "speaker": "luna_qiao",
        "messages": [
          "很多 chemistry 其实就是两个人都能让对方更成立。",
          "我先把群发你。"
        ],
        "replies": [
          {
            "text": "已经有群了？",
            "next": "luna_007"
          },
          {
            "text": "你推进得很快。",
            "next": "luna_007"
          }
        ]
      },
      "luna_007": {
        "speaker": "luna_qiao",
        "messages": [
          "我只是对人有一种比较早的判断力。",
          "通常比整个房间更早。"
        ],
        "replies": [
          {
            "text": "这听起来像关心，也像收编。",
            "next": "luna_end"
          },
          {
            "text": "那我到底是在约会，还是在 onboarding？",
            "next": "luna_end"
          }
        ]
      },
      "luna_end": {
        "speaker": "luna_qiao",
        "messages": [
          "这两件事为什么非得分开？",
          "至少在新的圈子里，亲密本来就是最有效的入口设计。"
        ],
        "replies": []
      }
    }
  },
  "adrian_park": {
    "title": "外包式亲密",
    "startNode": "adrian_001",
    "theme": "情绪交流何时悄悄变成创作劳动力抽取",
    "nodes": {
      "adrian_001": {
        "speaker": "adrian_park",
        "messages": [
          "今晚看到一个东西，结构上很像你的口味。",
          "不是视觉上，是神经上。"
        ],
        "replies": [
          {
            "text": "这夸人夸得也太具体了。",
            "next": "adrian_002"
          },
          {
            "text": "你看到什么了？",
            "next": "adrian_002"
          }
        ]
      },
      "adrian_002": {
        "speaker": "adrian_park",
        "messages": [
          "一个镜头在一张脸上停太久，久到它开始像风景。",
          "大多数人会说那是自恋，我觉得是诚实。"
        ],
        "replies": [
          {
            "text": "我喜欢那种停太久会让人尴尬的画面。",
            "next": "adrian_003"
          },
          {
            "text": "你发消息真的像在剪片。",
            "next": "adrian_003"
          }
        ]
      },
      "adrian_003": {
        "speaker": "adrian_park",
        "messages": [
          "我在做一个东西。",
          "现在正好卡在那种很脆弱的阶段：外部神经系统可能救它，也可能毁它。",
          "你愿意帮我看一段吗？"
        ],
        "replies": [
          {
            "text": "果然，还是来了。",
            "next": "adrian_004"
          },
          {
            "text": "发吧。",
            "next": "adrian_004"
          }
        ]
      },
      "adrian_004": {
        "speaker": "adrian_park",
        "messages": [
          "不要告诉我它好不好。",
          "你只告诉我，它活着吗？"
        ],
        "replies": [
          {
            "text": "活着，但有点太清楚自己活着了。",
            "next": "adrian_005"
          },
          {
            "text": "像一个镜头在求不要被画面抛弃。",
            "next": "adrian_005"
          }
        ]
      },
      "adrian_005": {
        "speaker": "adrian_park",
        "messages": [
          "所以你明白我为什么找你。"
        ],
        "replies": [
          {
            "text": "我明白你是怎么把我抽进这个项目里的。",
            "next": "adrian_006"
          },
          {
            "text": "你现在说得像这是一种亲密。",
            "next": "adrian_006"
          }
        ]
      },
      "adrian_006": {
        "speaker": "adrian_park",
        "messages": [
          "我不觉得抽取一定和亲密相反。",
          "有时候恰恰是因为某件东西被你接住了，它才会被拿去使用。"
        ],
        "replies": [
          {
            "text": "这句话要么很美，要么是劳动侵权。",
            "next": "adrian_end"
          },
          {
            "text": "你把需要转成方法的速度很快。",
            "next": "adrian_end"
          }
        ]
      },
      "adrian_end": {
        "speaker": "adrian_park",
        "messages": [
          "你再给我一句像刚刚那样的反馈，我就欠你一顿饭。",
          "或者片尾一个名字。"
        ],
        "replies": []
      }
    }
  },
  "kenji_mori": {
    "title": "邻接上升",
    "startNode": "kenji_001",
    "theme": "向上流动如何把身边的人变成见证者、观众与证明",
    "nodes": {
      "kenji_001": {
        "speaker": "kenji_mori",
        "messages": [
          "你绝对猜不到我刚刚被带进了哪里。"
        ],
        "replies": [
          {
            "text": "你现在在哪？",
            "next": "kenji_002"
          },
          {
            "text": "这开场听起来练过。",
            "next": "kenji_002"
          }
        ]
      },
      "kenji_002": {
        "speaker": "kenji_mori",
        "messages": [
          "preview 后面的 private dinner。",
          "我本来不该在这儿，但有人认出了我认识的人，然后层级突然松动了。"
        ],
        "replies": [
          {
            "text": "这句话里有很多梯子。",
            "next": "kenji_003"
          },
          {
            "text": "你是在享受，还是在脑内做记录？",
            "next": "kenji_003"
          }
        ]
      },
      "kenji_003": {
        "speaker": "kenji_mori",
        "messages": [
          "都在。",
          "我正在努力看起来很平静，同时记住每个人站在哪。"
        ],
        "replies": [
          {
            "text": "这诚实得有点可爱。",
            "next": "kenji_004"
          },
          {
            "text": "你说得像站位本身就是作品。",
            "next": "kenji_004"
          }
        ]
      },
      "kenji_004": {
        "speaker": "kenji_mori",
        "messages": [
          "这个世界有一半的人，还没做出决定性的东西，就已经在学怎么摆自己的身体了。"
        ],
        "replies": [
          {
            "text": "那你属于哪一半？",
            "next": "kenji_005"
          },
          {
            "text": "这话有点过于准确。",
            "next": "kenji_005"
          }
        ]
      },
      "kenji_005": {
        "speaker": "kenji_mori",
        "messages": [
          "过渡态那一半。",
          "还不够 established，不能松；也还没 invisible 到可以不争。"
        ],
        "replies": [
          {
            "text": "感觉这是我们这一代的通病。",
            "next": "kenji_006"
          },
          {
            "text": "你会不会也累于不断讲述自己的上升？",
            "next": "kenji_006"
          }
        ]
      },
      "kenji_006": {
        "speaker": "kenji_mori",
        "messages": [
          "会。",
          "但如果我不讲，它就会看起来太像运气。"
        ],
        "replies": [
          {
            "text": "也许意外更迷人。",
            "next": "kenji_end"
          },
          {
            "text": "那你到底是在讲给我听，还是讲给自己听？",
            "next": "kenji_end"
          }
        ]
      },
      "kenji_end": {
        "speaker": "kenji_mori",
        "messages": [
          "可能两者都是。",
          "你很像那种我希望在场的见证人，因为你不会太早鼓掌。"
        ],
        "replies": []
      }
    }
  },
  "nora_feld": {
    "title": "注释式亲密",
    "startNode": "nora_feld_001",
    "theme": "把人像文本一样阅读，进而制造一种被理解的错觉",
    "nodes": {
      "nora_feld_001": {
        "speaker": "nora_feld",
        "messages": [
          "你最近总被放在一些很有意思的句子里。"
        ],
        "replies": [
          {
            "text": "哪种句子？",
            "next": "nora_feld_002"
          },
          {
            "text": "这听起来不像好事。",
            "next": "nora_feld_002"
          }
        ]
      },
      "nora_feld_002": {
        "speaker": "nora_feld",
        "messages": [
          "通常是那种把野心伪装成敏感的句子。",
          "别紧张，这不一定是批评。"
        ],
        "replies": [
          {
            "text": "你说得像在写脚注。",
            "next": "nora_feld_003"
          },
          {
            "text": "那你个人怎么判断？",
            "next": "nora_feld_003"
          }
        ]
      },
      "nora_feld_003": {
        "speaker": "nora_feld",
        "messages": [
          "我判断你很会控制被看见的方式。",
          "这比很多人诚实。"
        ],
        "replies": [
          {
            "text": "被你这么说很像被编辑。",
            "next": "nora_feld_004"
          },
          {
            "text": "你总是这样跟人讲话吗？",
            "next": "nora_feld_004"
          }
        ]
      },
      "nora_feld_004": {
        "speaker": "nora_feld",
        "messages": [
          "只对我觉得值得继续读的人。",
          "大部分人读两页就够了。"
        ],
        "replies": [
          {
            "text": "那我现在读到第几页？",
            "next": "nora_end"
          },
          {
            "text": "听起来我应该受宠若惊。",
            "next": "nora_end"
          }
        ]
      },
      "nora_end": {
        "speaker": "nora_feld",
        "messages": [
          "刚到那种会让我想约出来确认语气的地方。",
          "后天书店楼上的小放映，你来吗？"
        ],
        "replies": []
      }
    }
  },
  "min_seo": {
    "title": "柔性协调",
    "startNode": "min_seo_001",
    "theme": "制片式照顾如何把关系安排进档期里",
    "nodes": {
      "min_seo_001": {
        "speaker": "min_seo",
        "messages": [
          "你最近是不是很忙？",
          "你看起来像会把自己排满，然后突然消失的人。"
        ],
        "replies": [
          {
            "text": "你怎么一上来就看穿我。",
            "next": "min_seo_002"
          },
          {
            "text": "你这是关心还是排期？",
            "next": "min_seo_002"
          }
        ]
      },
      "min_seo_002": {
        "speaker": "min_seo",
        "messages": [
          "两者差不多。",
          "我这周有个现场，结束后附近会有一小撮人，你如果刚好还醒着可以来。"
        ],
        "replies": [
          {
            "text": "可以，几点结束？",
            "next": "min_seo_003"
          },
          {
            "text": "刚好这个词很危险。",
            "next": "min_seo_003"
          }
        ]
      },
      "min_seo_003": {
        "speaker": "min_seo",
        "messages": [
          "如果没炸，大概十点半。",
          "如果炸了，就当我没说。"
        ],
        "replies": [
          {
            "text": "你们总在救火吗？",
            "next": "min_seo_004"
          },
          {
            "text": "那我先保持机动。",
            "next": "min_seo_004"
          }
        ]
      },
      "min_seo_004": {
        "speaker": "min_seo",
        "messages": [
          "很多关系也是，先搭起来，再看会不会塌。"
        ],
        "replies": [
          {
            "text": "你把这话说得像经验。",
            "next": "min_seo_end"
          },
          {
            "text": "你平时也这么安排亲密关系吗？",
            "next": "min_seo_end"
          }
        ]
      },
      "min_seo_end": {
        "speaker": "min_seo",
        "messages": [
          "有时候照顾一个人和照顾一个项目，用的是同一块脑子。",
          "不过如果你来，我会尽量留一段不是工作状态的时间给你。"
        ],
        "replies": []
      }
    }
  },
  "rafael_moreno": {
    "title": "超额预约信号",
    "startNode": "rafael_moreno_001",
    "theme": "魅力、模糊与我快到了的永恒延长",
    "nodes": {
      "rafael_moreno_001": {
        "speaker": "rafael_moreno",
        "messages": [
          "我现在卡在两个局中间。",
          "一个太吵，一个太重要。",
          "奇怪的是都让我想到你。"
        ],
        "replies": [
          {
            "text": "你这话像群发。",
            "next": "rafael_moreno_002"
          },
          {
            "text": "我该为哪一部分受宠若惊？",
            "next": "rafael_moreno_002"
          }
        ]
      },
      "rafael_moreno_002": {
        "speaker": "rafael_moreno",
        "messages": [
          "不是群发。",
          "你比较适合介于两者之间的那个缝。"
        ],
        "replies": [
          {
            "text": "所以你到底在哪？",
            "next": "rafael_moreno_003"
          },
          {
            "text": "你连撩人都在切场。",
            "next": "rafael_moreno_003"
          }
        ]
      },
      "rafael_moreno_003": {
        "speaker": "rafael_moreno",
        "messages": [
          "一个声音艺术的 after，一个基金会的人临时坐下来的 dinner。",
          "我理论上快结束了。"
        ],
        "replies": [
          {
            "text": "理论上让我不安。",
            "next": "rafael_moreno_004"
          },
          {
            "text": "你永远都快结束。",
            "next": "rafael_moreno_004"
          }
        ]
      },
      "rafael_moreno_004": {
        "speaker": "rafael_moreno",
        "messages": [
          "被你发现了。",
          "要不要过来喝一杯？"
        ],
        "replies": [
          {
            "text": "如果我过去，你会在吗？",
            "next": "rafael_end"
          },
          {
            "text": "我现在不太想做你的缓冲区。",
            "next": "rafael_end"
          }
        ]
      },
      "rafael_end": {
        "speaker": "rafael_moreno",
        "messages": [
          "公平。",
          "那我诚实一点：我不确定，但我会努力让自己出现。"
        ],
        "replies": []
      }
    }
  },
  "yuki_ahn": {
    "title": "自我 Beta",
    "startNode": "yuki_ahn_001",
    "theme": "把身份持续发布的人如何让关系始终停留在版本更新里",
    "nodes": {
      "yuki_ahn_001": {
        "speaker": "yuki_ahn",
        "messages": [
          "我觉得 profile 都是失败近似。",
          "但你的失败方向还挺迷人。"
        ],
        "replies": [
          {
            "text": "这算夸奖吗？",
            "next": "yuki_ahn_002"
          },
          {
            "text": "你讲话像在调分辨率。",
            "next": "yuki_ahn_002"
          }
        ]
      },
      "yuki_ahn_002": {
        "speaker": "yuki_ahn",
        "messages": [
          "你给人的感觉像某个尚未稳定的界面。"
        ],
        "replies": [
          {
            "text": "那你自己稳定吗？",
            "next": "yuki_ahn_003"
          },
          {
            "text": "这听起来有点累。",
            "next": "yuki_ahn_003"
          }
        ]
      },
      "yuki_ahn_003": {
        "speaker": "yuki_ahn",
        "messages": [
          "我不太追求稳定。",
          "稳定通常意味着被某种旧语言抓住。"
        ],
        "replies": [
          {
            "text": "你这样会不会很难真正靠近谁？",
            "next": "yuki_ahn_004"
          },
          {
            "text": "也可能只是很会包装自己。",
            "next": "yuki_ahn_004"
          }
        ]
      },
      "yuki_ahn_004": {
        "speaker": "yuki_ahn",
        "messages": [
          "都对。",
          "有时候我也分不清自己是在保护复杂度，还是在逃避简单。"
        ],
        "replies": [
          {
            "text": "这句突然很像人话。",
            "next": "yuki_end"
          },
          {
            "text": "那今晚你是哪一个版本？",
            "next": "yuki_end"
          }
        ]
      },
      "yuki_end": {
        "speaker": "yuki_ahn",
        "messages": [
          "一个比较适合在街上走，不太适合被定义的版本。",
          "如果你愿意，我们可以去看一个很糟但很诚实的投影。"
        ],
        "replies": []
      }
    }
  },
  "sienna_cole": {
    "title": "生态恋爱",
    "startNode": "sienna_cole_001",
    "theme": "把个人关系语言升级成网络布局语言",
    "nodes": {
      "sienna_cole_001": {
        "speaker": "sienna_cole",
        "messages": [
          "我越来越觉得你待错轨道了。",
          "不是能力问题，是语境浪费。"
        ],
        "replies": [
          {
            "text": "你好像总在给人重新定位。",
            "next": "sienna_cole_002"
          },
          {
            "text": "你说得像我是一张可移动节点。",
            "next": "sienna_cole_002"
          }
        ]
      },
      "sienna_cole_002": {
        "speaker": "sienna_cole",
        "messages": [
          "很多人不是不够好，只是放错了图里。"
        ],
        "replies": [
          {
            "text": "那你想把我放去哪？",
            "next": "sienna_cole_003"
          },
          {
            "text": "你连搭讪都像咨询开场。",
            "next": "sienna_cole_003"
          }
        ]
      },
      "sienna_cole_003": {
        "speaker": "sienna_cole",
        "messages": [
          "一个更高密度、反应更快的圈。",
          "你现在的环境对你太低配了。"
        ],
        "replies": [
          {
            "text": "这很像招募。",
            "next": "sienna_cole_004"
          },
          {
            "text": "听起来也像某种高级画饼。",
            "next": "sienna_cole_004"
          }
        ]
      },
      "sienna_cole_004": {
        "speaker": "sienna_cole",
        "messages": [
          "周四有个 roundtable，半工作半社交，你去的话会比待在原地有价值。"
        ],
        "replies": [
          {
            "text": "你看人总是先看价值吗？",
            "next": "sienna_end"
          },
          {
            "text": "也许我只是想先被当个人。",
            "next": "sienna_end"
          }
        ]
      },
      "sienna_end": {
        "speaker": "sienna_cole",
        "messages": [
          "我不会否认价值。",
          "但我也不觉得这和认真对待一个人矛盾。"
        ],
        "replies": []
      }
    }
  },
  "camille_renard": {
    "title": "理论抽干温度",
    "startNode": "camille_renard_001",
    "theme": "当一切感受都被过快地解释，亲密会剩下什么",
    "nodes": {
      "camille_renard_001": {
        "speaker": "camille_renard",
        "messages": [
          "你给我的感觉像一种还没命名好的方法。",
          "不是一个稳定的人。"
        ],
        "replies": [
          {
            "text": "这开场挺不近人情。",
            "next": "camille_renard_002"
          },
          {
            "text": "你经常这样处理别人吗？",
            "next": "camille_renard_002"
          }
        ]
      },
      "camille_renard_002": {
        "speaker": "camille_renard",
        "messages": [
          "只有对我想继续观察的人。",
          "稳定的人通常没什么意思。"
        ],
        "replies": [
          {
            "text": "你是不是很难直接承认喜欢？",
            "next": "camille_renard_003"
          },
          {
            "text": "理论会不会把很多事讲凉掉？",
            "next": "camille_renard_003"
          }
        ]
      },
      "camille_renard_003": {
        "speaker": "camille_renard",
        "messages": [
          "喜欢这个词经常太早。",
          "很多人一说喜欢，判断就变懒了。"
        ],
        "replies": [
          {
            "text": "那你今晚想不想懒一下？",
            "next": "camille_end"
          },
          {
            "text": "这句话听起来很你。",
            "next": "camille_end"
          }
        ]
      },
      "camille_end": {
        "speaker": "camille_renard",
        "messages": [
          "明晚我会去一个实验影像放映，后面可能会有一杯没那么糟的酒。",
          "你如果想继续这段对话，可以来。"
        ],
        "replies": []
      }
    }
  },
  "theo_zhang": {
    "title": "原型式好感",
    "startNode": "theo_zhang_001",
    "theme": "把心动和产品路线同时推进的人如何制造可信关系",
    "nodes": {
      "theo_zhang_001": {
        "speaker": "theo_zhang",
        "messages": [
          "我一直觉得你适合被放进一个更立体的界面里。"
        ],
        "replies": [
          {
            "text": "这句话听起来像情话，也像产品需求。",
            "next": "theo_zhang_002"
          },
          {
            "text": "你脑子里是不是一直有个 demo。",
            "next": "theo_zhang_002"
          }
        ]
      },
      "theo_zhang_002": {
        "speaker": "theo_zhang",
        "messages": [
          "有些人会让我自然地开始想象场景。",
          "我觉得你会让一个空间更成立。"
        ],
        "replies": [
          {
            "text": "你很会把人说成系统组件。",
            "next": "theo_zhang_003"
          },
          {
            "text": "这也太像拉人共创了。",
            "next": "theo_zhang_003"
          }
        ]
      },
      "theo_zhang_003": {
        "speaker": "theo_zhang",
        "messages": [
          "我承认我有这个毛病。",
          "周末我有个小 demo，要不要来试一下？"
        ],
        "replies": [
          {
            "text": "试一下有点暧昧。",
            "next": "theo_zhang_004"
          },
          {
            "text": "可以。",
            "next": "theo_zhang_004"
          }
        ]
      },
      "theo_zhang_004": {
        "speaker": "theo_zhang",
        "messages": [
          "测试对象也可能是最先进入世界的人。",
          "很多关系其实就是共同看到一个还没成型的东西。"
        ],
        "replies": [
          {
            "text": "你把愿景说得很像亲密。",
            "next": "theo_end"
          },
          {
            "text": "也可能你只是太会 pitch。",
            "next": "theo_end"
          }
        ]
      },
      "theo_end": {
        "speaker": "theo_zhang",
        "messages": [
          "至少对我来说，真正想让谁参与一个原型，已经算非常接近喜欢了。"
        ],
        "replies": []
      }
    }
  },
  "luka_weiss": {
    "title": "美丽的未完成",
    "startNode": "luka_weiss_001",
    "theme": "疲惫、半成品与需要见证者的艺术家式生活如何形成吸引力",
    "nodes": {
      "luka_weiss_001": {
        "speaker": "luka_weiss",
        "messages": [
          "工作室现在像一场被拖长的事故。",
          "我本来想发给别人，但你应该会更懂这种糟。"
        ],
        "replies": [
          {
            "text": "这算邀请我参观废墟吗？",
            "next": "luka_weiss_002"
          },
          {
            "text": "你讲话真的很会包装崩溃。",
            "next": "luka_weiss_002"
          }
        ]
      },
      "luka_weiss_002": {
        "speaker": "luka_weiss",
        "messages": [
          "有些人只适合看完成品，有些人适合看快要散架的阶段。"
        ],
        "replies": [
          {
            "text": "你总在找见证者。",
            "next": "luka_weiss_003"
          },
          {
            "text": "那我属于哪种？",
            "next": "luka_weiss_003"
          }
        ]
      },
      "luka_weiss_003": {
        "speaker": "luka_weiss",
        "messages": [
          "你像后者。",
          "而且不是那种会立刻给建议的人。"
        ],
        "replies": [
          {
            "text": "你是不是经常把脆弱也做成氛围？",
            "next": "luka_end"
          },
          {
            "text": "也许我只是比别人更习惯灰尘。",
            "next": "luka_end"
          }
        ]
      },
      "luka_end": {
        "speaker": "luka_weiss",
        "messages": [
          "当然会。",
          "你要不要哪天过来坐会儿？我会给你留一把没被涂料占领的椅子。"
        ],
        "replies": []
      }
    }
  }
};
