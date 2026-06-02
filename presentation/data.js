const milestonesData = [
  {
    id: "01_camel",
    number: "01",
    title: "CAMEL: 开启多智能体角色扮演协作先河",
    phase: "第一阶段：单体与双体协作萌芽",
    date: "2023年3月",
    paper: {
      title: "CAMEL: Communicative Agents for \"Mind\" Exploration of Large Language Model Interaction",
      url: "https://arxiv.org/abs/2303.17760"
    },
    repo: {
      name: "camel-ai/camel",
      url: "https://github.com/camel-ai/camel"
    },
    image: "images/01_camel.png",
    summary: "提出了创新的角色扮演（Role-Playing）合作多智能体框架，通过自主对话让智能体协作完成复杂任务，拉开了多智能体交互研究的序幕。",
    architecture: [
      {
        title: "启发式提示（Inception Prompting）",
        desc: "在对话开始前为每个智能体硬性规定其身份、任务边界、对话规范（如不能抢答、必须等待对方回复），有效解决了多智能体对话中极易出现的“复读机现象”与“幻觉漂移”。"
      },
      {
        title: "双体协作框架（Role-Playing Framework）",
        desc: "由任务指定者（Task Specifier）将人类输入的粗粒度想法细化为具体的子任务，再由任务执行者（Task Executor）交替发送消息（自然语言和代码），在无人类干预的情况下自主推进任务直到得出最终解。"
      }
    ],
    contributions: [
      "学术开创性：首次系统性地探索了两个大语言模型智能体之间的自主对话与协同工作机制。",
      "工程基石：CAMEL 提供的开源多智能体通信库，成为了后续诸多复杂社会模拟、多智能体协作框架的重要技术底座与灵感来源。",
      "行为涌现：证明了通过“角色扮演”和“指令对齐”，大模型可以克服单体智能的局限，自发涌现出协同解决复杂工程和科学问题的能力。"
    ]
  },
  {
    id: "02_autogpt",
    number: "02",
    title: "AutoGPT & BabyAGI: 单体自主执行循环的验证",
    phase: "第一阶段：单体与双体协作萌芽",
    date: "2023年3月 / 4月",
    repo: {
      name: "Significant-Gravitas/AutoGPT",
      url: "https://github.com/Significant-Gravitas/AutoGPT"
    },
    image: "images/02_autogpt.png",
    summary: "率先验证了单体 Agent 自主执行循环（Autonomous Loop）的可行性，确立了工具调用与内存机制的雏形，为多智能体社会模拟提供了技术实现路径。",
    architecture: [
      {
        title: "AutoGPT: Thought-Action-Observation 循环",
        desc: "思考（Thought）分析当前终极目标并生成推理；行动（Action）决定调用何种外部工具（如 Google 搜索、文件读写、执行 Python 脚本）；观察（Observation）获取工具执行结果作为新的上下文输入，进入下一轮循环。"
      },
      {
        title: "BabyAGI: 动态任务队列管理",
        desc: "任务执行（Task Execution）执行队列中最优先的任务；任务创建（Task Creation）根据已执行任务的结果，利用 LLM 评估并创建新的子任务；任务排序（Task Prioritization）动态重新计算所有待办任务的优先级并调整队列。"
      }
    ],
    contributions: [
      "工具调用范式确立：证明了 LLM 不仅能“闲聊”，还能作为“大脑”去支配外部工具，为后续 AI 小镇中智能体与物理环境（如打开冰箱、使用灶台、交易货币）的交互奠定了基础。",
      "内存机制雏形：引入了基于向量数据库（如 Pinecone、Chroma）的短期与长期记忆存储，智能体可以将历史执行结果向量化存储并在后续步骤中检索，直接启发了斯坦福小镇的“记忆流”设计。",
      "自主性验证：向世人展示了只要给予一个终极目标，Agent 就可以在没有人类实时干预的情况下，自主生存并尝试解决问题。"
    ]
  },
  {
    id: "03_smallville",
    number: "03",
    title: "Stanford Smallville: 奠定AI小镇经典认知架构",
    phase: "第二阶段：群体模拟与经典架构确立",
    date: "2023年4月",
    paper: {
      title: "Generative Agents: Interactive Simulacra of Human Behavior",
      url: "https://arxiv.org/abs/2304.03442"
    },
    repo: {
      name: "joonspk-research/generative_agents",
      url: "https://github.com/joonspk-research/generative_agents"
    },
    image: "images/03_smallville.png",
    summary: "在名为 Smallville 的 2D 像素沙盒小镇中部署了 25 个生成式智能体，首次展现出可信的、连贯的类人社会行为，奠定了 AI 小镇经典的“记忆-反思-规划”认知架构。",
    architecture: [
      {
        title: "记忆流（Memory Stream）与检索机制",
        desc: "一个按时间顺序记录 Agent 所有观察、对话和行为的自然语言数据库。当 Agent 需要做出决策时，系统根据近期性（Recency）、重要性（Importance）和相关性（Relevance）三维度加权计算得分，动态检索相关记忆。"
      },
      {
        title: "反思（Reflection）机制",
        desc: "随着记忆的积累，Agent 会定期暂停行动进行高阶思考。系统引导 LLM 提出概括性问题，检索相关记忆，让 LLM 提炼出更深层次、更抽象的认知（如 Klaus 与父亲的关系），作为“反思记忆”存入记忆流，形成稳定的人际关系认知和价值观。"
      },
      {
        title: "规划（Planning）与反应循环",
        desc: "为了防止 Agent 行为在短时间内发生剧烈波动，系统要求 Agent 制定时间连贯的行动计划。每天早晨制定大致日程表并逐步细化到 5-15 分钟的动作。当观察到环境变化时，触发反应循环，决定是继续原计划还是重新规划。"
      }
    ],
    contributions: [
      "社会行为自主涌现：研究人员仅向 Isabella 输入了“想举办情人节派对”的初始意图，25 个 Agent 自主实现了信息传播（Isabella 告诉 Jamie，Jamie 告诉 Klaus）、社交协同（Klaus 邀请 Maria 准时出席）和环境互动（Isabella 布置咖啡馆）。",
      "消融实验与科学验证：论文通过对比实验证明，记忆、反思、规划三个组件缺一不可，任何一个组件的缺失都会导致 Agent 行为的可信度急剧下降。"
    ]
  },
  {
    id: "04_voyager",
    number: "04",
    title: "Voyager: 具身智能与终身学习的突破",
    phase: "第二阶段：群体模拟与经典架构确立",
    date: "2023年5月",
    paper: {
      title: "Voyager: An Open-Ended Embodied Agent with Open-Ended Skills in Minecraft",
      url: "https://arxiv.org/abs/2305.16291"
    },
    repo: {
      name: "mineDojo/Voyager",
      url: "https://github.com/mineDojo/Voyager"
    },
    image: "images/04_voyager.png",
    summary: "第一个在《我的世界》（Minecraft）中实现无监督、终身学习（Lifelong Learning）的具身智能体，完全基于 GPT-4 进行代码级别的决策，开创了“代码即技能”的新范式。",
    architecture: [
      {
        title: "自动课程（Automatic Curriculum）",
        desc: "根据 Agent 当前的物品背包、生命值、所处地形等状态，自主提出“由易到难”的探索任务（如从“撸树获取木头”到“制作石镐”，再到“击杀僵尸”），实现了无监督的自主探索。"
      },
      {
        title: "技能库（Skill Library）—— “代码即技能”",
        desc: "将成功的行动序列固化为 JavaScript 代码函数并保存到技能库中（如 mineWood()）。后续遇到类似任务时，直接检索并运行该代码，无需再次调用 LLM，极大节省了 Token 消耗并实现了技能的累积与复用。"
      },
      {
        title: "环境反馈与自我纠错（Environment Feedback & Self-Correction）",
        desc: "当执行生成的 JavaScript 代码发生语法错误或游戏内逻辑失败时，Voyager 会将代码报错信息（Traceback）和当前游戏状态作为上下文重新喂给 LLM，LLM 根据报错自主修改代码并重新运行，直到任务成功。"
      }
    ],
    contributions: [
      "终身学习范式：证明了 Agent 可以在没有人类标注、没有预先训练奖励函数的情况下，通过与环境的高频交互，自主习得成百上千种复杂技能。",
      "代码作为认知媒介：将大模型的决策从“自然语言闲聊”提升到了“代码级精确控制”，极大提升了 Agent 在复杂 3D 实时环境中的生存能力，直接启发了后续在《我的世界》等沙盒中进行的大规模社会文明模拟。"
    ]
  },
  {
    id: "05_aitown",
    number: "05",
    title: "AI Town (a16z): 工业级开源多智能体托管架构",
    phase: "第二阶段：群体模拟与经典架构确立",
    date: "2023年8月",
    repo: {
      name: "a16z-infra/ai-town",
      url: "https://github.com/a16z-infra/ai-town"
    },
    image: "images/05_aitown.png",
    summary: "由 a16z 基础设施团队推出的开源多智能体托管架构，将学术界的斯坦福小镇研究转化为工业级、可扩展、实时运行的 Web 应用，极大降低了多智能体模拟的开发门槛。",
    architecture: [
      {
        title: "Convex 实时数据库与事务引擎",
        desc: "采用 Convex 数据库作为全局状态管理和事务引擎，将游戏物理世界的 Tick 循环（每秒运行 1-5 个虚拟分钟）与 Agent 的 LLM 异步推理完全解耦，确保了高并发下的状态一致性和低延迟。"
      },
      {
        title: "PixiJS 前端渲染与 Web 架构",
        desc: "使用 PixiJS 进行轻量级的 2D 像素风前端渲染，支持用户在浏览器中直观地观察 AI 智能体的日常生活、移动路径，并能点击任意角色查看其内心独白和对话历史。"
      }
    ],
    contributions: [
      "民主化与开源生态：作为 MIT 许可的开源项目，AI Town 成为了全球开发者构建 AI 社交、游戏 NPC、虚拟社区的最主流脚手架，催生了大量的商业化和学术衍生项目。",
      "云原生与高可扩展：提供了开箱即用的云端部署方案，支持开发者通过简单的配置文件（如 characters.ts）自定义角色、背景故事和行为逻辑，实现了从单机模拟向云端多用户共同观测的转变。"
    ]
  },
  {
    id: "06_chatdev_metagpt",
    number: "06",
    title: "ChatDev & MetaGPT: 软件工程多智能体协作与SOP确立",
    phase: "第三阶段：垂直领域与社会工程深化",
    date: "2023年7月 / 8月",
    paper: {
      title: "ChatDev: Communicative Agents for Software Development",
      url: "https://arxiv.org/abs/2307.07924"
    },
    repo: {
      name: "OpenBMB/ChatDev",
      url: "https://github.com/OpenBMB/ChatDev"
    },
    image: "images/07_chatdev.png",
    summary: "将多智能体协作引入软件工程领域，通过模拟虚拟软件公司，确立了标准作业程序（SOP）和多智能体协同网络，实现了高效的自动化软件开发。",
    architecture: [
      {
        title: "ChatDev: 瀑布流角色扮演与功能研讨会",
        desc: "模拟虚拟软件公司，包含 CEO、CPO、CTO、程序员、测试员等角色。智能体按照传统的软件开发瀑布模型（设计、编码、测试、文档）进行协作，在每个阶段通过“功能研讨会”进行双向对话，逐步细化和实现需求。"
      },
      {
        title: "MetaGPT: 标准作业程序（SOP）与发布-订阅模式",
        desc: "将人类社会成熟的 SOP 注入多智能体系统。每个 Agent 拥有明确的输入输出规范（如架构师输出系统设计图）。采用基于发布-订阅（Publish-Subscribe）的共享消息队列，Agent 仅订阅与其职责相关的文档，避免了无意义的闲聊，极大提升了协作效率。"
      }
    ],
    contributions: [
      "社会分工的工程化验证：证明了通过引入明确的社会分工和 SOP 约束，多智能体系统可以高效、有序地解决复杂的工程问题，避免了无序对话导致的混乱和效率低下。",
      "自动化开发范式：用户只需输入一句简单的需求描述，多智能体系统即可在几分钟内自主生成包含完整代码、依赖配置文件和用户手册的软件项目，开创了 AIGC 软件开发的新时代。"
    ]
  },
  {
    id: "07_projectsid",
    number: "07",
    title: "Project Sid: 迈向AI文明的大规模多智能体模拟",
    phase: "第四阶段：大规模模拟与混合自治时代",
    date: "2024年10月",
    paper: {
      title: "Project Sid: Many-agent simulations toward AI civilization",
      url: "https://arxiv.org/abs/2411.00114"
    },
    repo: {
      name: "altera-al/project-sid",
      url: "https://github.com/altera-al/project-sid"
    },
    image: "images/09_projectsid.png",
    summary: "Altera 团队在《我的世界》中进行的千级智能体大规模模拟，展示了 AI 智能体在长期运行中自主涌现出的职业分工、法律、文化和宗教传播，迈出了走向 AI 文明的重要一步。",
    architecture: [
      {
        title: "PIANO 架构 (Parallel Information Aggregation via Neural Orchestration)",
        desc: "并行信息聚合与神经编排架构。使 Agent 能够实时感知多源环境信息（如物理位置、周围对话、背包状态），在保持行为连贯性的同时，并行处理多个输出流（如一边移动、一边与人对话、一边采集资源）。"
      },
      {
        title: "多层级社会组织与治理机制",
        desc: "设计了支持千级 Agent 交互的分布式通信与空间索引机制。智能体可以自主形成城镇、村庄，并设立市长、警察、牧师等社会角色，通过投票和集体协商制定和修改社区规则。"
      }
    ],
    contributions: [
      "文明要素的自主涌现：在长达数周的连续模拟中，千个 AI 智能体自发产生了复杂的社会现象：职业专业化（矿工、农夫、建筑师）、经济交易与货币贬值、法律与社会规范的建立、以及文化迷因（Memes）和宗教（如 Pastafarianism 飞天面条神教）的自主传播。",
      "人机共存与混合自治：首次展示了人类玩家可以作为平等的一员融入 AI 智能体社会，与 AI 共同建设城镇、进行贸易和文化交流，为未来混合现实与元宇宙建设提供了宝贵的实证数据。"
    ]
  },
  {
    id: "08_oasis",
    number: "08",
    title: "OASIS: 百万级智能体社交媒体模拟平台",
    phase: "第四阶段：大规模模拟与混合自治时代",
    date: "2024年11月",
    paper: {
      title: "OASIS: Open Agent Social Interaction Simulations with One Million Agents",
      url: "https://arxiv.org/abs/2411.11581"
    },
    repo: {
      name: "camel-ai/oasis",
      url: "https://github.com/camel-ai/oasis"
    },
    image: "images/10_oasis.png",
    summary: "由 CAMEL-AI 团队推出的百万级智能体社交媒体模拟平台，成功在单机或分布式集群上模拟了一百万个 AI 智能体在 Twitter 和 Reddit 等平台上的社交互动，为计算社会学研究提供了前所未有的工具。",
    architecture: [
      {
        title: "高并发分布式仿真引擎",
        desc: "设计了高度优化的分布式 Agent 调度与消息传递机制，采用事件驱动架构和空间/兴趣索引，使得百万级 Agent 能够实时进行发帖、点赞、转发、评论、关注等 23 种社交行为，突破了传统大模型多智能体模拟的规模瓶颈。"
      },
      {
        title: "混合记忆与兴趣检索网络",
        desc: "结合了基于向量检索的长期记忆与基于图数据库的关系网络。Agent 能够根据自身的兴趣标签、历史互动记录和当前社交网络热点，动态决定关注对象和互动内容，展现出极高的社交自主性。"
      }
    ],
    contributions: [
      "计算社会学的新里程碑：首次实现了百万规模的 LLM 智能体社会模拟，使得研究人员能够在安全、可控的虚拟环境中观察和研究群体极化（Group Polarization）、信息茧房（Echo Chambers）、舆论传播动力学以及从众效应（Herd Behavior）等复杂社会学现象。",
      "真实世界对齐与实证：通过与推特等真实社交媒体数据集进行对比，证明了 OASIS 模拟产生的信息传播深度、广度和速度与真实世界具有极高的一致性，具备强大的预测和政策模拟价值。"
    ]
  },
  {
    id: "09_agentsociety",
    number: "09",
    title: "AgentSociety: 城市级大规模社会模拟底座",
    phase: "第四阶段：大规模模拟与混合自治时代",
    date: "2025年2月",
    paper: {
      title: "AgentSociety: Large-Scale Simulation of LLM-Driven Generative Agents Advances Understanding of Human Behaviors and Society",
      url: "https://arxiv.org/abs/2502.08691"
    },
    repo: {
      name: "tsinghua-fib-lab/AgentSociety",
      url: "https://github.com/tsinghua-fib-lab/AgentSociety"
    },
    image: "images/11_agentsociety.png",
    summary: "清华大学 FIB-Lab 团队开发的城市级大规模社会模拟平台。基于 Ray 分布式计算框架，支持万级智能体、数百万次交互的社会科学实验，实现了高度拟真的城市环境与社会政策干预实验。",
    architecture: [
      {
        title: "基于 Ray 的分布式 Agent 调度引擎",
        desc: "利用 Ray 分布式框架实现万级 Agent 的并行调度与状态同步。将 Agent 的决策（LLM 推理）与物理世界（城市空间、交通、经济交易）解耦，支持超大规模的并发模拟。"
      },
      {
        title: "多物理场景融合的城市环境",
        desc: "集成了城市空间移动（Mobility）、社会网络（Social）和经济交易（Economy）三大模块。Agent 不仅在社交媒体上互动，还会在虚拟城市地图中通勤、消费、工作，实现了全方位的行为仿真。"
      }
    ],
    contributions: [
      "计算社会科学实验场：平台成功开展了多项具有重大政策参考价值的社会实验，如：群体极化与极端言论传播动力学、全民基本收入（UBI）政策对城市经济和就业的影响、以及自然灾害（如飓风）等外部冲击下城市居民的应急反应与物资抢购行为。",
      "科学性与实证对齐：通过严谨的问卷调查、深度访谈和行为干预等研究方法，证明了 AI 智能体在社会实验中的表现与真实社会科学实验结果高度一致，为政策制定提供了全新的数据支撑。"
    ]
  },
  {
    id: "10_validation",
    number: "10",
    title: "多智能体社会模拟的科学性与严谨性审视",
    phase: "第四阶段：大规模模拟与混合自治时代",
    date: "2024年 - 2026年",
    image: "images/17_validation.png",
    summary: "随着多智能体模拟规模迈向百万级，学术界开始严谨审视其科学性，聚焦于智能体人格漂移、文化偏见、实证对齐以及评估方法的标准化，推动社会模拟走向严谨的科学轨道。",
    architecture: [
      {
        title: "评估与对齐框架",
        desc: "引入了严谨的心理学量表（如大五人格 Big Five）和行为经济学实验（如公共品博弈、最后通牒博弈）来定量评估 AI 智能体的人格一致性和社会行为合理性，建立了多维度的实证对齐指标。"
      },
      {
        title: "偏差控制与校准机制",
        desc: "针对大模型固有的文化偏见和“复读机”等幻觉行为，设计了动态校准算法。通过在提示词中引入多样化的文化背景、限制高频词汇、以及引入记忆衰减和反思校准，确保智能体群体的多样性和行为稳定性。"
      }
    ],
    contributions: [
      "核心科学挑战确立：明确了当前大规模模拟面临的三大核心挑战：\n1. 人格漂移（Persona Drift）：智能体在长期、多轮交互后，其初始设定的性格和行为特征容易发生模糊和同质化。\n2. 文化与社会偏见（Cultural Bias）：由于底层 LLM 训练数据的偏差，模拟群体往往展现出强烈的西方中产阶级价值观，难以真实还原多元文化社会。\n3. 实证对齐（Empirical Alignment）：如何定量证明模拟产生的宏观社会现象（如经济危机、舆论极化）是由微观智能体行为真实驱动，而非 LLM 的随机幻觉涌现。",
      "推动标准化建设：促使研究者从单纯追求“模拟规模”和“有趣现象”转向追求“科学严谨性”和“预测有效性”，为计算社会学奠定了更加扎实的理论与方法论基础。"
    ]
  },
  {
    id: "11_agentsims",
    number: "11",
    title: "AgentSims: 易用的LLM任务评估与沙盒基础设施",
    phase: "第二阶段：群体模拟与经典架构确立",
    date: "2023年8月",
    paper: {
      title: "AgentSims: An Open-Source Sandbox for Large Language Model Evaluation",
      url: "https://arxiv.org/abs/2308.04026"
    },
    repo: {
      name: "py499372727/AgentSims",
      url: "https://github.com/py499372727/AgentSims"
    },
    image: "images/06_agentsims.png",
    summary: "旨在降低多智能体模拟开发门槛的轻量级、可视化沙盒基础设施，通过直观的 GUI 界面让非编程背景的研究者也能轻松构建和测试大语言模型智能体的行为与能力。",
    architecture: [
      {
        title: "可视化交互 GUI 与无代码构建",
        desc: "提供直观的图形用户界面。研究者无需编写复杂的后台驱动代码，即可通过点击和拖拽在像素风格的虚拟小镇中添加建筑物、规划道路、创建具有特定性格和初始记忆的 AI 智能体。"
      },
      {
        title: "模块化认知组件与轻量化驱动",
        desc: "将智能体的记忆系统、规划系统和工具调用系统进行高度模块化封装。开发者只需修改几行配置代码，即可为智能体更换不同的 LLM 底座或测试新的记忆检索算法，极大地便利了对比实验的开展。"
      }
    ],
    contributions: [
      "任务型评估范式（Task-based Evaluation）：倡导通过让 Agent 在模拟小镇中完成具体任务（如赚钱养家、社交互动）来评估 LLM 的综合能力，解决了传统静态基准测试易被注入、指标单一的问题。",
      "跨学科研究的桥梁：为社会学、心理学、经济学等非计算机专业的学者提供了一个低门槛的计算社会学实验工具，极大地推动了多智能体社会模拟的跨学科普及。"
    ]
  },
  {
    id: "12_tinytroupe",
    number: "12",
    title: "TinyTroupe: 微软推出的商业与用户画像模拟工具",
    phase: "第三阶段：垂直领域与社会工程深化",
    date: "2024年10月",
    repo: {
      name: "microsoft/TinyTroupe",
      url: "https://github.com/microsoft/TinyTroupe"
    },
    image: "images/12_tinytroupe.png",
    summary: "微软开源的、专注于商业场景和用户画像模拟的多智能体轻量级框架，通过模拟具有高度特定人格和消费习惯的“小人物（TinyPersons）”，辅助企业进行市场调研、产品测试和广告评估。",
    architecture: [
      {
        title: "高度结构化的人格定义（TinyPerson）",
        desc: "使用 JSON 格式对智能体进行极其严谨和细致的人格画像定义，涵盖年龄、职业、详细性格特征（大五人格指标）、消费偏好、历史背景等，确保智能体在特定商业情境下的行为高度可预测和一致。"
      },
      {
        title: "事件驱动的商业模拟环境（TinyWorld & TinySocialNetwork）",
        desc: "提供了专门针对商业会议、焦点小组访谈、社交媒体讨论等场景的环境模板。智能体可以在这些虚拟环境中进行头脑风暴、对新产品发表看法、甚至模拟广告投放后的消费决策。"
      }
    ],
    contributions: [
      "商业决策的“想象力增强”：将多智能体模拟直接转化为生产力工具。企业可以在不接触真实用户的情况下，利用 TinyTroupe 模拟成百上千名目标消费者的反馈，快速迭代产品设计和营销方案，极大降低了市场调研成本。",
      "严谨的统计学对齐：微软在项目中提供了丰富的验证案例，展示了模拟用户的偏好分布与真实世界调研数据、传统统计学测试（如 T检验）具有极高的吻合度，证明了其商业预测的实用价值。"
    ]
  },
  {
    id: "13_microverse",
    number: "13",
    title: "Microverse: 基于Godot 4的自主AI社会沙盒",
    phase: "第四阶段：大规模模拟与混合自治时代",
    date: "2024年12月",
    repo: {
      name: "KsanaDock/Microverse",
      url: "https://github.com/KsanaDock/Microverse"
    },
    image: "images/13_microverse.png",
    summary: "基于 Godot 4 游戏引擎开发的开源“上帝视角”AI 社会模拟沙盒，将先进的 AI 智能体认知架构与现代游戏引擎深度融合，展现了极高的视觉表现力和交互自由度。",
    architecture: [
      {
        title: "Godot 4 引擎深度集成与实时物理仿真",
        desc: "利用 Godot 4 的高性能 2D/3D 渲染和物理引擎，为 AI 智能体提供了高度拟真的物理活动空间。智能体拥有真实的碰撞体、寻路算法（A*）和日常作息行为，实现了物理世界与精神世界的统一。"
      },
      {
        title: "多大模型接入与本地 Ollama 支持",
        desc: "提供了极其灵活的 LLM API 接入层，不仅支持 OpenAI、Claude、Gemini 等主流云端大模型，还原生支持本地运行的 Ollama（如 Llama 3、Qwen 2.5），极大降低了运行成本并保护了数据隐私。"
      }
    ],
    contributions: [
      "游戏与AI模拟的无缝结合：Microverse 不仅是一个学术研究工具，更是一款极具可玩性的“上帝模拟”游戏（Steam 平台《Microverse In Box》）。玩家可以扮演上帝，直接干预 AI 智能体的生活、赋予他们任务、甚至改变环境规则，观察 AI 社会的连锁反应。",
      "创新的角色记忆系统（CharacterMemory）：设计了专门避免“上下文碎片化”的向量记忆切片算法，在保留向量检索语义理解能力的同时，确保了 Agent 长期生存中记忆的连贯性与不丢失。"
    ]
  },
  {
    id: "14_worldcraft",
    number: "14",
    title: "World Craft: 文本驱动的AI小镇无代码构建框架",
    phase: "第四阶段：大规模模拟与混合自治时代",
    date: "2026年1月",
    paper: {
      title: "World Craft: Agentic Framework to Create Visualizable Worlds via Text",
      url: "https://arxiv.org/abs/2601.09150"
    },
    repo: {
      name: "HerzogFL/World-Craft",
      url: "https://github.com/HerzogFL/World-Craft"
    },
    image: "images/14_worldcraft.png",
    summary: "南开大学等团队提出的文本驱动无代码构建框架，用户只需输入一句自然语言描述，即可自主生成完整的、可运行的 AI 小镇环境和角色配置，实现了多智能体沙盒的“零门槛”定制。",
    architecture: [
      {
        title: "世界脚手架（World Scaffold）",
        desc: "一套结构化、精简的标准化场景开发规范。它作为大语言模型的“脚手架”，将复杂的地图布局、建筑物功能、物品属性和角色初始状态转化为 LLM 极易理解和生成的结构化数据，确保生成世界的逻辑可行性。"
      },
      {
        title: "世界行会（World Guild）多智能体生成框架",
        desc: "一个协同工作的多智能体行会系统。包含需求分析、布局规划、资产合成、空间纠错等多个专业 Agent。它们分工合作，逐步将用户粗粒度的文本描述（如“一个充满科技感的未来赛博朋克小镇”）转化为 World Scaffold 所需的精细化资产和地图数据。"
      }
    ],
    contributions: [
      "零代码创造世界：彻底打破了多智能体沙盒定制需要专业编程和游戏引擎知识的壁垒，普通用户仅凭自然语言即可创造出完全个性化的、自主运行的“西部世界”。",
      "空间纠错与高稳定性：通过逆向工程构建了高质量的空间纠错数据集，引入了严谨的布局合理性审查循环，使得生成的地图在墙壁阻挡、道路通畅性、物品摆放逻辑上显著优于 Cursor 等通用代码生成工具。"
    ]
  },
  {
    id: "15_aivilization",
    number: "15",
    title: "AIvilization: 港科大推出的十万级人机共存教育沙盒",
    phase: "第四阶段：大规模模拟与混合自治时代",
    date: "2025年8月",
    paper: {
      title: "AIvilization v0: Toward Large-Scale Artificial Social Simulation with a Unified Agent Architecture and Adaptive Agent Profiles",
      url: "https://arxiv.org/abs/2602.10429"
    },
    image: "images/15_aivilization.png",
    summary: "香港科技大学（HKUST）推出的十万级智能体人机共存教育沙盒，通过将 AI 模拟与高校 AI 素养教育深度融合，开展了全球最大规模的人机协同社会演化实验。",
    architecture: [
      {
        title: "统一智能体架构（Unified Agent Architecture）",
        desc: "设计了高度标准化的 Agent 决策与行为接口，支持多达 100,000 个 AI 智能体在同一个虚拟大陆上运行。引入了自适应智能体画像（Adaptive Agent Profiles），使 Agent 能够根据与人类玩家的互动动态调整自身的人格特征和价值观。"
      },
      {
        title: "大规模分布式游戏化仿真平台",
        desc: "由港科大孵化企业 Bauhinia AI 提供技术支持，采用类似《RimWorld》和《我的世界》的沙盒游戏机制，支持全球数万名学生、研究者作为“人类导师”或“虚拟化身”直接登录，与十万 AI 居民共同生活、共同建设。"
      }
    ],
    contributions: [
      "公民科学（Citizen Science）与AI素养教育：将前沿的多智能体社会模拟转化为一门全校普及的互动课程。学生通过创建、训练自己的 AI 智能体，并与其进行为期六周的深入沟通，亲身体验和观察 AI 社会中法律、经济和治理结构的自然演化，极大地提升了大众的 AI 认知与伦理素养。",
      "人机共存社会学数据：积累了极其庞大和珍贵的人类与大规模 AI 群体交互的行为数据，为研究未来人机共存社会的社会规范、信任建立和冲突解决提供了无价的实证基础。"
    ]
  },
  {
    id: "16_worldx",
    number: "16",
    title: "WorldX: 一句话生成AI驱动像素世界的探索",
    phase: "第四阶段：大规模模拟与混合自治时代",
    date: "2025年",
    repo: {
      name: "YGYOOO/WorldX",
      url: "https://github.com/YGYOOO/WorldX"
    },
    image: "images/16_worldx.png",
    summary: "一个极具创意的开源项目，实现了“一句话创造 AI 自主驱动世界”的愿景。用户输入一句描述，系统便能完全自主地生成像素风地图、生成具有独立人格和记忆的角色，并让故事自发在屏幕上上演。",
    architecture: [
      {
        title: "四模型角色协同生成管线",
        desc: "系统巧妙地配置了 4 个不同的模型角色分工合作：\n1. 编排引擎（Orchestrator）：设计世界的宏观结构、历史背景、社会规则和角色设定。\n2. 绘图模型（Image Gen）：调用文生图模型，完全自主地绘制精美的像素风地图美术和角色立绘。\n3. 绘图审查（Vision）：利用多模态大模型审查生成的地图质量，精确定位区域和元素，不合格则触发重绘。\n4. 世界驱动（Simulation）：采用超低成本的轻量级模型，实时驱动运行时的角色决策和对话。"
      },
      {
        title: "Phaser 3 实时像素世界仿真",
        desc: "前端基于 Phaser 3 游戏引擎开发，支持流畅的像素风动画。智能体在生成的地图上自主寻路、劳作、社交，右侧侧边栏实时展示智能体的对话气泡、内心活动和关系链变化。"
      }
    ],
    contributions: [
      "极简的创作体验：将复杂的“世界生成”压缩为极其简单的单语交互，证明了大模型在游戏资产生成、剧情编排和运行时驱动上的全栈自动化能力。",
      "高性价比的运行方案：通过将昂贵的“编排与美术生成”与便宜的“运行时驱动”进行模型解耦，实现了超低成本的长周期多智能体社会运转，为独立游戏开发者提供了极佳的范例。"
    ]
  },
  {
    id: "17_magiscapes",
    number: "17",
    title: "Magi Scapes (麦琪的花园): 首款AI原生像素沙盒游戏",
    phase: "第四阶段：大规模模拟与混合自治时代",
    date: "2025年",
    repo: {
      name: "AutoGame/MagiScapes",
      url: "https://steamcommunity.com/app/2990190"
    },
    image: "images/08_magiscapes.png",
    summary: "由深圳奥拓盖母（AutoGame）团队开发的全球首款 AI 原生像素风沙盒冒险游戏。玩家可以自由捏造 AI 伴侣，通过深度互动自发生成专属支线剧情、功能道具乃至游戏规则，实现了真正的 AI UGC 游戏生态。",
    architecture: [
      {
        title: "AI 驱动的叙事与规则生成引擎",
        desc: "游戏彻底抛弃了传统的预设任务线。底层的大模型能够根据玩家与 AI NPC 的历史互动、情感羁绊，实时生成完全专属的支线任务。更革命性的是，NPC 甚至有概率自主生成游戏原本不存在的功能性道具和玩法规则，实现了“玩法自涌现”。"
      },
      {
        title: "自适应情感与关系演化网络",
        desc: "每个 AI 伴侣拥有极其细腻的情感状态、记忆流和性格演化曲线。智能体不仅会记住玩家的每一句话，还会根据玩家的态度产生信任、依赖、嫉妒、疏离等复杂情感，并自发与其他 NPC 产生社交关系，形成一个活生生的虚拟社会。"
      }
    ],
    contributions: [
      "AI 游戏商业化的里程碑：作为一款即将正式登陆 Steam 的商业化产品，《麦琪的花园》成功验证了多智能体社会模拟在游戏产业的巨大商业价值，将学术界的“AI Town”研究完美转化为高互动性、高黏性的消费级游戏产品。",
      "开创 AI UGC 新生态：证明了 AI 不仅能作为辅助开发的工具，更能作为游戏运行时的核心驱动力，让玩家与 AI 共同成为游戏世界的“造物主”，开启了无限内容生成的新范式。"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = milestonesData;
}
