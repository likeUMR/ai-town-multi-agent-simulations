# AI小镇与多智能体社会模拟发展脉络

本目录整理了AI小镇与多智能体社会模拟（Generative Agents & Multi-Agent Social Simulation）自1970年起源以来的19个关键里程碑节点，旨在为您组会汇报提供详实、结构化的学术脉络和来源支撑。

## 目录索引

| 序号 | 节点名称 | 时间 | 核心特征与定位 | 对应文档 |
| :--- | :--- | :--- | :--- | :--- |
| 01 | **生命游戏 (Conway's Game of Life)** | 1970年10月 | 涌现与社会模拟的始祖（零玩家细胞自动机） | [01_Game_of_Life.md](./01_Game_of_Life.md) |
| 02 | **WorldBox (沙盒上帝模拟)** | 2012年 | 传统规则模拟与大模型智能体桥梁（MCP）的交汇 | [02_WorldBox.md](./02_WorldBox.md) |
| 03 | **CAMEL** | 2023年3月 | 开启多智能体角色扮演协作先河 | [03_CAMEL.md](./03_CAMEL.md) |
| 04 | **AutoGPT & BabyAGI** | 2023年3月/4月 | 验证单体自主目标执行循环 | [04_AutoGPT_BabyAGI.md](./04_AutoGPT_BabyAGI.md) |
| 05 | **Stanford Smallville** | 2023年4月 | 奠定AI小镇经典认知架构（记忆、反思、规划） | [05_Stanford_Smallville.md](./05_Stanford_Smallville.md) |
| 06 | **Voyager** | 2023年5月 | 具身智能与终身学习（代码即技能） | [06_Voyager.md](./06_Voyager.md) |
| 07 | **ChatDev & MetaGPT** | 2023年7月/8月 | SOP与多智能体组织协作（软件开发流） | [07_ChatDev_MetaGPT.md](./07_ChatDev_MetaGPT.md) |
| 08 | **AI Town (a16z)** | 2023年8月 | 推动AI小镇的工程普及与低成本部署 | [08_AI_Town.md](./08_AI_Town.md) |
| 09 | **AgentSims** | 2023年8月 | 面向LLM评测的交互式可视化沙盒（Unity拖拽） | [09_AgentSims.md](./09_AgentSims.md) |
| 10 | **TinyTroupe (微软)** | 2024年10月 | 商业画像与用户研究工具包（去游戏化实用主义） | [10_TinyTroupe.md](./10_TinyTroupe.md) |
| 11 | **Project Sid** | 2024年10月 | 千级Agent在Minecraft中的“AI文明”实验 | [11_Project_Sid.md](./11_Project_Sid.md) |
| 12 | **OASIS** | 2024年11月 | 百万级智能体社交媒体模拟（极化与从众效应） | [12_OASIS.md](./12_OASIS.md) |
| 13 | **Microverse** | 2024年12月 | 基于Godot 4的上帝视角高性能AI社会沙盒 | [13_Microverse.md](./13_Microverse.md) |
| 14 | **AgentSociety** | 2025年2月 | 大规模城市级与政策模拟平台（Ray分布式） | [14_AgentSociety.md](./14_AgentSociety.md) |
| 15 | **AIvilization** | 2025年8月 | 人机共生的大规模混合自治社会模拟（10万级） | [15_AIvilization.md](./15_AIvilization.md) |
| 16 | **WorldX** | 2025年 | 一句话生成AI自主驱动的像素世界（多模态闭环） | [16_WorldX.md](./16_WorldX.md) |
| 17 | **麦琪的花园 (Magi Scapes)** | 2025年 | AIGC全要素生成的AI伙伴沙盒冒险游戏 | [17_MagiScapes.md](./17_MagiScapes.md) |
| 18 | **遥远行星：建造师 (Astrobuilder)** | 2025年Q4/2026年 | 600+大模型智能体驱动的商业化动态宇宙 | [18_Astrobuilder.md](./18_Astrobuilder.md) |
| 19 | **World Craft** | 2026年1月 | 文本驱动的AI小镇无代码生成框架（空间纠错） | [19_WorldCraft.md](./19_WorldCraft.md) |

*(注：表格按技术演进与时间交错逻辑重新编排，使脉络更加连贯。)*

---

## 关键技术演进对比

| 维度 | Stanford Smallville (2023) | Project Sid (2024) | OASIS (2024) | AgentSociety (2025) | AIvilization (2025) | 遥远行星：建造师 (2026) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **代表场景** | 2D 角色扮演沙盒小镇 | 3D 实时沙盒（Minecraft） | 虚拟社交媒体（X/Reddit） | 城市级社会与政策模拟 | 放置挂机类人机共生沙盒 | AI原生太空跑商与文明经营 |
| **模拟规模** | 25 个 Agent | 500 - 1000+ 个 Agent | 10k - 1,000,000 个 Agent | 10,000+ 个 Agent | 100,000+ 个 Agent | 600+ 个 Agent |
| **认知架构** | 经典三支柱（记忆、规划、反思） | PIANO 架构（多线程并行、实时感知） | 记忆模块 + 社交动作空间 | 双层路由决策、LLM原生推理模式 | 统一强约束架构+自适应人格画像 | 语义理解与数值逻辑深度打通+编剧Agent |
| **运行底座** | 单机/串行推理，高延迟 | 实时游戏客户端，并发控制 | 推荐系统 + 数据库 + 扩展推理机 | Ray 分布式计算引擎 | 持久化数字经济体与Web平台 | WAStudio 游戏引擎 + 大模型推理层 |
| **核心关注点** | 个体可信度与自发社交涌现 | 社会分工、规则制定与文明演化 | 宏观舆论传播、极化与群体效应 | 计算社会科学、政策评估、灾害模拟 | 混合自治、人机共生、数字阶层分化 | 玩家与AI平权互动、经济供需动态演化 |

---

## 组会报告汇报建议与思考方向

1. **“自下而上”涌现的边界**：
   * 从1970年康威生命游戏展示的极简局部规则涌现，到2026年《遥远行星：建造师》中600多个大模型智能体共同塑造的星际经济体。自下而上的模拟范式已经从“纯规则状态机”演进为“大模型语义驱动”。
   * 汇报时可以重点对比：在没有大模型前，WorldBox 如何通过数值和状态机模拟地缘政治；而有了大模型后，Astrobuilder 如何将语义理解与数值逻辑打通，让 NPC 的“复仇”或“合作”不仅是口头闲聊，而是转化为真实的物理/数值决策。

2. **“可信度（Believability）”与“科学校验（Validation）”的博弈**：
   * 早期研究（如 Stanford 25人小镇）只要智能体表现得“像人”就算成功。
   * 现在的研究（如 AgentSociety）要求智能体在统计学意义上与真实人类群体对齐。我们如何确保大模型模拟出来的社会规律（如舆论极化、通货膨胀）不是大模型的“幻觉”或“语料库偏见”，而是客观的社会学规律？

3. **长程记忆与认知漂移（Cognitive Drift）**：
   * 随着模拟时间的拉长（如模拟数月或数年），Agent如何避免遗忘最初的设定（Persona）？如何设计更低成本、高检索效率的层次化/潜变量记忆系统（Latent Memory Systems）？

4. **算力成本与实时性的平衡**：
   * 1万个由 GPT-4 驱动的 Agent 进行一天模拟的 API 成本是天文数字。因此，**端侧轻量化模型（如 Llama-3-8B、Qwen-2.5-7B 的微调对齐）**以及**分布式推理架构（如 Ray）**是支持未来大规模 AI 小镇走向实用的必经之路。
