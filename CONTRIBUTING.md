# 贡献指南

欢迎你添加自己的 profile 到 CURATOR！

## 如何提交

### 方式一：Pull Request（推荐）

1. **Fork** 这个仓库
2. **Clone** 你 fork 后的仓库到本地
3. 添加你的信息和图片（见下文格式说明）
4. **Commit** 你的更改
5. 提交一个 **Pull Request**
6. 等待合并 ✨

### 方式二：Issue 提交

如果你不会用 Git 也没关系：

1. 开一个 [Issue](https://github.com/ewanqian/2604-datingapp/issues/new)
2. 在 Issue 里附上你的：
   - 姓名、年龄、性别
   - 身份标签（多个用 / 分隔）
   - 讽刺点一句话
   - 3-4 个标签
   - 你的 2:3 肖像图片（压缩好的 JPEG）
3. 我会帮你加进去 ✌️

## 格式说明

在 `curator_app_prank.html` 找到 `profiles` 数组，在末尾添加一个新对象：

```javascript
{
  name: '你的名字',
  age: XX,
  gender: '性别',
  fit: '机构适配度 XX%',
  boost: '可提升你 X.X 档',
  role: '身份1 / 身份2 / 身份3',
  satire: '你的讽刺点一句话',
  tags: ['标签1', '标签2', '标签3', '标签4'],
  image: 'pics/xx_your_name小.jpeg'
}
```

### fit 和 boost 怎么填？

- `fit`: `机构适配度 XX%` - 随便写一个 85-98 之间的数字
- `boost`: `可提升你 X.X 档` - 随便写一个 2.0-3.5 之间的数字

### 图片要求

- 比例：**2:3**（竖屏）
- 格式：**JPEG**
- 质量：压缩到 **10-20KB** 左右，文件名以 `小` 结尾，比如 `13_your_name小.jpeg`
- 放在 `pics/` 目录下

**为什么要压缩？** 这样 HTML 文件不会太大，别人打开也快。

## 讽刺点怎么写？

最好一句话精准概括你在艺术圈的"生态位"。比如：

- `标签越来越多，职业越来越糊，但名片越来越厚。`
- `水平一般，但非常会出现在正确的地方。`
- `真的会一些技术，但更会把 demo 讲成愿景。`

保持幽默，保持讽刺，保持准确。

## 示例

```javascript
{
  name: 'Rafael Moreno',
  age: 35,
  gender: '男',
  fit: '声音网络度 93%',
  boost: '可提升你 2.8 档',
  role: 'Sound Artist / Festival Consultant / Occasionally DAO Advisor',
  satire: '标签越来越多，职业越来越糊，但名片越来越厚。',
  tags: ['声音装置', '音乐节咨询', 'DAO Advisor', '跨场域连接'],
  image: 'pics/07_rafael_moreno小.jpeg'
}
```

## 代码风格

保持现有的缩进和格式就好，不用太讲究。

## 审核标准

- 只要好玩、够讽刺、够准确，都会被合并
- 不接受人身攻击或不友善的内容
- 保持幽默感 😄

## 问题？

有任何问题直接开 Issue 问我！
