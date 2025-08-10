import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Link as LinkIcon,
  Phone,
  Briefcase,
  GraduationCap,
  Cpu,
  Rocket,
  Building2,
  ExternalLink,
  ServerCog,
  Activity,
} from "lucide-react";

// ---- Simple UI primitives ----
const Section = ({ id, title, children, subtitle }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <motion.h2
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-2xl sm:text-3xl font-bold tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
    )}
    <div className="mt-6 grid gap-4">{children}</div>
  </section>
);

const Card = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
    className={`rounded-2xl border bg-card text-card-foreground shadow-sm p-5 ${className}`}
  >
    {children}
  </motion.div>
);

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium">
    {children}
  </span>
);

const Link = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
  >
    {children} <ExternalLink className="size-3" />
  </a>
);

// ---- Page ----
export default function Portfolio() {
  const profile = useMemo(
    () => ({
      name: "문다영",
      title: "Backend Engineer · AI Orchestration",
      phone: "010-4546-7582",
      email: "dalbeetm@gmail.com",
      github: "https://github.com/dayoungMM",
      blog: "https://velog.io/@mdy0102",
      lectureDecks:
        "https://drive.google.com/drive/folders/1iIaD9U95ERoE4qZWJhzhjxNAZshhBm50?usp=sharing",
      about: [
        {
          h: "기술 리더십 & 전파",
          p:
            "최신 AI 트렌드를 사내에 전파하며 최초 AI Application 개발 프로젝트에 참여. SKT×SK C&C 합동 AIX TF 선발, AI 오케스트레이션 플랫폼 기획·개발 주도. 'Generation AI Orchestration' 주제로 총 56시간 사내 강의 진행.",
        },
        {
          h: "AI Application 개발 역량",
          p:
            "A.X Platform, TokAI, Solur 등에서 백엔드 및 클라우드 전반 경험. LangGraph 기반 에이전트 생성·배포 서비스 설계·구현 주도. 프론트–백엔드–인프라 전 영역에서 문제 해결을 리드.",
        },
        {
          h: "주도적 협업",
          p:
            "명확한 기획 부재 상황에서 Agent Builder 아이디어를 제안·구체화하여 화면·백엔드 설계를 주도. 추상 클래스 기반 공통 구조와 정교한 스키마 문서화로 협업/유지보수 효율 향상. 신규 온보딩용 기술 문서 작성.",
        },
      ],
    }),
    []
  );

  const experiences = [
    {
      org: "SK AX(구 SK C&C)",
      role: "백엔드 개발자",
      period: "2021.01 – 현재",
      bullets: [
        "A.X Platform: No‑Code 기반 Agent Builder 기획·백엔드 개발·운영 주도",
        "MyChat, TokAI: 사내용/기업용 챗봇 Agent 설계, 백엔드 및 인프라 구축",
        "AidenVAS: 드론 영상 분석 AI 서비스의 클라우드 전환 및 운영 담당",
      ],
    },
    {
      org: "FA Solution",
      role: "데이터 엔지니어(인턴)",
      period: "2020.10 – 2020.12",
      bullets: [
        "NIA 암정보 데이터 구축 및 모델 개발",
        "담낭암 진단용 Segmentation 모델 개발 (MAE 0.019)",
      ],
    },
  ];

  const projects = [
    {
      name: "A.X Platform (AI Orchestration)",
      period: "2024.05 – 현재",
      role: "Agent Builder 백엔드/플랫폼 개발",
      summary:
        "No‑Code로 Agent를 구성·배포하는 Agent Builder 개발 주도. LangGraph 코드 기반 에이전트의 CLI 배포 기능 구현.",
      responsibilities: [
        "Agent 템플릿/노드 DSL 설계 및 스키마 확정",
        "에이전트 실행/배포(클러스터·서버리스) 파이프라인 구현",
        "LangGraph 기반 런타임 어댑터 및 실행 이력 트래킹(OTel/Phoenix) 연동",
        "RBAC/조직 단위 워크스페이스 및 데이터 암호화 설계",
      ],
      achievements: [
        "사내 사용자 50+ 팀 온보딩, 빌드→배포 리드타임 60% 단축",
        "CLI 배포 도입으로 PoC→운영 전환 기간 4주 → 1주",
        "운영 장애 지표 기반 알림으로 MTTR 40%↓",
      ],
      tech: [
        "Python","FastAPI","PostgreSQL","Redis","OpenSearch","LangChain","LangGraph","Kubernetes","Azure"],
      images: [],
      links: [{ label: "소개 슬라이드", href: "https://drive.google.com/" }],
    },
    {
      name: "Solur (문서 기반 에이전트 생성)",
      period: "2024.01 – 2024.04",
      role: "백엔드/플랫폼",
      summary:
        "RAG 기반 채팅 에이전트 생성 API·백엔드 개발. 금융권 및 계열사 PoC/시연 지원.",
      responsibilities: [
        "도큐먼트 인입 파이프라인 및 인덱싱 설계(Azure AI Search)",
        "문서 스키마 표준화와 멀티테넌시 격리",
        "비용/성능 모니터링 대시보드 구축",
      ],
      achievements: [
        "RAG 답변 정확도 외부 벤치에서 17%p↑",
        "PoC 3건 수주 지원, 사내용 파일봇 대체 도입",
      ],
      tech: ["Python","Django","PostgreSQL","LangChain","Azure AI Search"],
      images: [],
      links: [],
    },
    {
      name: "TokAI (기업분석 보고서 AI)",
      period: "2023.03 – 2023.12",
      role: "백엔드/인프라",
      summary:
        "문서 기반 채팅 및 기업/산업 보고서 자동작성 기능 개발. Vector DB·에이전트·클라우드 인프라 담당. 사내 오픈 및 Posco 사내 챗봇 납품.",
      responsibilities: [
        "Spring Gateway + FastAPI 하이브리드 백엔드 구축",
        "대규모 크롤링·임베딩 파이프라인 운영",
        "엔드투엔드 권한 모델 설계",
      ],
      achievements: [
        "사내 일일 활성 800+ 달성",
        "대규모 문서 인덱싱 시간 35%↓",
      ],
      tech: ["Python","FastAPI","LangChain","Java","Spring Cloud Gateway","MySQL","Azure"],
      images: [],
      links: [],
    },
    {
      name: "AidenVAS (실시간 드론 분석)",
      period: "2021.01 – 2022.12",
      role: "백엔드/클라우드 전환",
      summary:
        "실시간 드론 영상 분석 플랫폼 운영. CloudZ→AWS 마이그레이션, 계약/알람 서비스 개선.",
      responsibilities: [
        "데이터 모델·계약 시스템 리팩터링",
        "모놀리식 일부를 마이크로서비스로 분리",
        "IaC 기반 배포·모니터링 개선",
      ],
      achievements: [
        "클라우드 전환으로 인프라 비용 28% 절감",
        "알림 오탐 60%↓",
      ],
      tech: ["Kotlin","Spring Boot","PostgreSQL","AWS"],
      images: [],
      links: [],
    },
  ];

  const skills = [
    {
      cat: "Web/Backend",
      items: ["Java", "Kotlin", "Spring Boot", "Python", "Django", "FastAPI"],
      icon: <ServerCog className="size-4" />,
    },
    {
      cat: "AI Core",
      items: ["LangGraph", "LangChain", "LangServe", "Phoenix (OTel)"],
      icon: <Cpu className="size-4" />,
    },
    {
      cat: "Infra & DB",
      items: [
        "Kubernetes",
        "Azure",
        "AWS",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "OpenSearch",
        "Vector DBs",
      ],
      icon: <Activity className="size-4" />,
    },
  ];

  const education = [
    {
      where: "서울시립대학교",
      period: "2013.03 – 2020.02",
      detail: "도시행정학과 전공 · 경영학과 복수전공",
    },
    {
      where: "F‑Lab",
      period: "2022.04 – 2022.09",
      detail: "백엔드 개발 이론 및 프로젝트 1:2 멘토링",
    },
    {
      where: "멀티캠퍼스",
      period: "2020.01 – 2020.06",
      detail: "딥러닝 기반 AI 엔지니어링 (Python/Django)",
    },
    {
      where: "패스트캠퍼스",
      period: "2019.09 – 2020.02",
      detail: "데이터 사이언스 스쿨 (수학·ML/DL·Python·DB)",
    },
  ];

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">{profile.name}</a>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <a className="hover:underline" href="#about">About</a>
            <a className="hover:underline" href="#experience">Career</a>
            <a className="hover:underline" href="#projects">Projects</a>
            <a className="hover:underline" href="#skills">Skills</a>
            <a className="hover:underline" href="#education">Education</a>
            <a className="hover:underline" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-[1.2fr_.8fr] items-center gap-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
            >
              {profile.name}
            </motion.h1>
            <p className="mt-2 text-lg text-muted-foreground">{profile.title}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-2">
                <Phone className="size-4" /> {profile.phone}
              </a>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2">
                <Mail className="size-4" /> {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <Github className="size-4" /> GitHub
              </a>
              <a href={profile.blog} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <LinkIcon className="size-4" /> Blog
              </a>
            </div>
            <Card className="mt-6">
              <div className="flex items-start gap-3">
                <Rocket className="size-5 mt-0.5" />
                <div>
                  <p className="font-medium">강의/전파</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    'Generation AI Orchestration' 주제로 총 56시간의 사내 강의. {" "}
                    <Link href={profile.lectureDecks}>강의자료 보러가기</Link>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-muted-foreground">현재 역할</p>
                <p className="font-medium">백엔드 / AI 에이전트 플랫폼</p>
              </div>
              <div>
                <p className="text-muted-foreground">소속</p>
                <p className="font-medium">SK AX (前 SK C&C)</p>
              </div>
              <div>
                <p className="text-muted-foreground">관심사</p>
                <p className="font-medium">LangGraph, RAG, Serving</p>
              </div>
              <div>
                <p className="text-muted-foreground">위치</p>
                <p className="font-medium">Seoul, KR</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-3 gap-4">
          {profile.about.map((a) => (
            <Card key={a.h}>
              <p className="font-medium">{a.h}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.p}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Career */}
      <Section id="experience" title="Career">
        <div className="grid gap-4">
          {experiences.map((exp) => (
            <Card key={exp.org}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="size-4" />
                  <p className="font-semibold">{exp.org}</p>
                  <span className="text-muted-foreground">· {exp.role}</span>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="대표 프로젝트" subtitle="각 프로젝트마다 수행 업무 · 주요 성과 · 사용 기술을 정리했습니다.">
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <Card key={p.name}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{p.period}</p>
                </div>
              </div>

              {p.summary && (
                <p className="mt-3 text-sm leading-relaxed">{p.summary}</p>
              )}

              {/* 이미지(선택) */}
              {p.images && p.images.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {p.images.map((src, i) => (
                    <img key={i} src={src} alt={`${p.name} 이미지 ${i + 1}`} className="rounded-xl border aspect-video object-cover" />
                  ))}
                </div>
              )}

              {/* 수행 업무 */}
              {p.responsibilities?.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium flex items-center gap-2"><Briefcase className="size-4" /> 수행 업무</p>
                  <ul className="mt-2 list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    {p.responsibilities.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 주요 성과 */}
              {p.achievements?.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium flex items-center gap-2"><Rocket className="size-4" /> 주요 성과</p>
                  <ul className="mt-2 list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    {p.achievements.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 사용 기술 */}
              {p.tech?.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium flex items-center gap-2"><Cpu className="size-4" /> 사용 기술</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tech.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </div>
              )}

              {/* 링크 */}
              {p.links?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.links.map((l, i) => (
                    <Link key={i} href={l.href}>{l.label}</Link>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-3 gap-4">
          {skills.map((s) => (
            <Card key={s.cat}>
              <div className="flex items-center gap-2">
                {s.icon}
                <p className="font-medium">{s.cat}</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <Tag key={i}>{i}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-4">
          {education.map((e) => (
            <Card key={e.where}>
              <div className="flex items-center gap-2">
                <GraduationCap className="size-4" />
                <p className="font-semibold">{e.where}</p>
                <span className="text-muted-foreground">· {e.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{e.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Building2 className="size-4" />
            <span>Based in Seoul · Open to collaboration</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a className="inline-flex items-center gap-1" href={`mailto:${profile.email}`}>
              <Mail className="size-4" /> {profile.email}
            </a>
            <a className="inline-flex items-center gap-1" href={profile.github} target="_blank" rel="noreferrer">
              <Github className="size-4" /> GitHub
            </a>
            <a className="inline-flex items-center gap-1" href={profile.blog} target="_blank" rel="noreferrer">
              <LinkIcon className="size-4" /> Blog
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 