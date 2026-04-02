const storylines = {
  eva_lin: {
    title: "选择性可见性",
    startNode: "eva_001",
    theme: "软实力、访问权限以及被保持在门附近的情感架构",
    nodes: {
      eva_001: {
        speaker: "eva_lin",
        messages: [
          "你之前被提到了。",
          "不是以不好的方式。"
        ],
        replies: [
          { text: "这听起来模糊得足以让人感兴趣。", next: "eva_002a" },
          { text: "我应该担心吗？", next: "eva_002b" },
          { text: "你说得好像我是个话题。", next: "eva_002c" }
        ]
      },
      eva_002a: {
        speaker: "eva_lin",
        messages: [
          "模糊在时机改善之前保护了每个人。",
          "我想你明白这一点。"
        ],
        replies: [
          { text: "我明白被保持在邻近位置。", next: "eva_003" },
          { text: "我更喜欢更清晰的邀请。", next: "eva_003" }
        ]
      }
    }
  }
};
