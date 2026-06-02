# 03. Stanford Smallville: 奠定AI小镇经典认知架构

## 基础信息
* **时间**：2023年4月（后发表于 UIST 2023）
* **来源**：
  * **论文**：[Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) (arXiv:2304.03442)
  * **开源仓库**：[joonspk-research/generative_agents](https://github.com/joonspk-research/generative_agents)

---

## 核心架构：三大认知支柱

为了让 25 个由大语言模型驱动的智能体在名为 Smallville 的 2D 像素沙盒小镇中展现出可信的、连贯的类人行为，研究团队设计了经典的**生成式智能体认知架构（Generative Agent Architecture）**：

```
                    ┌──────────────┐
                    │  Environment │
                    └──────┬───────┘
                           │ (Observation)
                           ▼
                    ┌──────────────┐
             ┌─────►│ Memory Stream│◄─────┐
             │      └──────┬───────┘      │
             │             │ (Retrieve)   │
             │             ▼              │
             │      ┌──────────────┐      │
             │      │   Planning   │      │
             │      └──────┬───────┘      │
             │             │              │
             │             ▼              │
             │      ┌──────────────┐      │
             │      │  Reflection  │      │
             │      └──────┬───────┘      │
             │             │ (Action)     │
             └─────────────┴──────────────┘
```

### 1. 记忆流（Memory Stream）
一个按时间顺序记录 Agent 所有观察、对话和行为的自然语言数据库。当 Agent 需要做出决策时，系统会动态检索相关记忆。检索评分机制如下：
$$\text{Score} = w_r \cdot \text{Recency} + w_i \cdot \text{Importance} + w_s \cdot \text{Relevance}$$
* **近期性（Recency）**：使用指数衰减函数，距离当前时间越近的记忆，得分越高。
* **重要性（Importance）**：由 LLM 评估该记忆对 Agent 的显著程度（1-10分，例如“吃早饭”为2分，“向心仪对象表白”为9分）。
* **相关性（Relevance）**：计算记忆文本与当前情境/查询在向量空间中的余弦相似度。

### 2. 反思（Reflection）
随着记忆的积累，Agent 会定期（如当重要性分数累计达到一定阈值时）暂停行动，进行高阶思考：
* 系统引导 LLM 提出 1-2 个概括性问题（例如：“根据最近的经历，Klaus 与他父亲的关系如何？”）。
* 检索相关记忆，让 LLM 提炼出更深层次、更抽象的认知，并作为“反思记忆”重新存入记忆流。这使 Agent 能够形成稳定的人际关系认知和价值观。

### 3. 规划（Planning）
为了防止 Agent 行为在短时间内发生剧烈波动（如刚决定去上班，下一秒又去睡觉），系统要求 Agent 制定时间连贯的行动计划：
* 每天早晨，Agent 制定一份大致的一日日程表（如：8:00 起床，9:00 吃早饭，10:00 去图书馆）。
* 随着时间推移，计划被逐步细化（细化到5-15分钟的动作）。
* 当 Agent 观察到环境变化（如看到厨房着火，或者遇到朋友打招呼）时，会触发**反应循环（Reaction Loop）**，决定是继续原计划还是重新规划。

---

## 关键贡献与涌现现象

* **社会行为的自主涌现**：研究人员仅向 Isabella 输入了“想在 2 月 14 日下午 5 点举办情人节派对”的初始意图。在接下来的两天虚拟时间中，25 个 Agent 自主实现了：
  * **信息传播**：Isabella 告诉了 Jamie，Jamie 又告诉了 Klaus。
  * **社交协同**：Klaus 邀请了 Maria 一起参加派对，Maria 准时出席。
  * **环境互动**：Isabella 自主布置了咖啡馆，其他 Agent 准时到达并自发进行社交。
* **消融实验（Ablation Study）**：论文通过对比实验证明，**记忆、反思、规划**三个组件缺一不可，任何一个组件的缺失都会导致 Agent 行为的可信度（Believability）急剧下降。
