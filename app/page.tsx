type Certificate = {
  title: string;
  titleAr: string;
  issuer: string;
  date: string;
  duration: string;
  level: string;
  image: string;
  document: string;
  accent: string;
};

const courses: Certificate[] = [
  {
    title: "Bootstrap",
    titleAr: "تطوير واجهات الويب باستخدام Bootstrap",
    issuer: "Satr Platform · Tuwaiq Academy",
    date: "04 Nov 2025",
    duration: "1 ساعة",
    level: "متوسط",
    image: "/certificates/thumbnails/bootstrap.png",
    document: "/certificates/satr/bootstrap.pdf",
    accent: "cyan",
  },
  {
    title: "JavaScript 103",
    titleAr: "جافاسكربت المتقدم",
    issuer: "Satr Platform · Tuwaiq Academy",
    date: "07 Oct 2025",
    duration: "ساعتان",
    level: "متقدم",
    image: "/certificates/thumbnails/javascript-103.png",
    document: "/certificates/satr/javascript-103.pdf",
    accent: "gold",
  },
  {
    title: "PHP Array 103",
    titleAr: "المصفوفات في PHP",
    issuer: "Satr Platform · Tuwaiq Academy",
    date: "28 Oct 2025",
    duration: "ساعتان",
    level: "متوسط",
    image: "/certificates/thumbnails/php-array-103.png",
    document: "/certificates/satr/php-array-103.pdf",
    accent: "cyan",
  },
  {
    title: "PHP Basics 101",
    titleAr: "أساسيات PHP",
    issuer: "Satr Platform · Tuwaiq Academy",
    date: "14 Oct 2025",
    duration: "3 ساعات",
    level: "مبتدئ",
    image: "/certificates/thumbnails/php-basics-101.png",
    document: "/certificates/satr/php-basics-101.pdf",
    accent: "gold",
  },
  {
    title: "PHP Functions 102",
    titleAr: "الدوال في PHP",
    issuer: "Satr Platform · Tuwaiq Academy",
    date: "21 Oct 2025",
    duration: "ساعتان",
    level: "مبتدئ",
    image: "/certificates/thumbnails/php-functions-102.png",
    document: "/certificates/satr/php-functions-102.pdf",
    accent: "cyan",
  },
  {
    title: "Introduction to Cybersecurity",
    titleAr: "مقدمة في الأمن السيبراني",
    issuer: "Satr Platform · Tuwaiq Academy",
    date: "25 Jul 2026",
    duration: "1 ساعة",
    level: "مبتدئ",
    image: "/certificates/thumbnails/intro-cybersecurity.png",
    document: "/certificates/satr/cybersecurity/intro-cybersecurity.pdf",
    accent: "gold",
  },
  {
    title: "Linux 101",
    titleAr: "أساسيات نظام Linux",
    issuer: "Satr Platform · Tuwaiq Academy",
    date: "26 Jul 2026",
    duration: "1 ساعة",
    level: "مبتدئ",
    image: "/certificates/thumbnails/linux-101.png",
    document: "/certificates/satr/cybersecurity/linux-101.pdf",
    accent: "cyan",
  },
  {
    title: "Command-line 101",
    titleAr: "أساسيات سطر الأوامر",
    issuer: "Satr Platform · Tuwaiq Academy",
    date: "05 Aug 2026",
    duration: "ساعتان",
    level: "مبتدئ",
    image: "/certificates/thumbnails/command-line-101.png",
    document: "/certificates/satr/cybersecurity/command-line-101.pdf",
    accent: "gold",
  },
  {
    title: "Linux: Files and Permissions",
    titleAr: "الملفات والصلاحيات في Linux",
    issuer: "Satr Platform · Tuwaiq Academy",
    date: "07 Aug 2026",
    duration: "1 ساعة",
    level: "مبتدئ",
    image: "/certificates/thumbnails/linux-files-permissions.png",
    document: "/certificates/satr/cybersecurity/linux-files-permissions.pdf",
    accent: "cyan",
  },
  {
    title: "Introduction to Kali Linux",
    titleAr: "مقدمة في Kali Linux",
    issuer: "Satr Platform · Tuwaiq Academy",
    date: "12 Aug 2026",
    duration: "1 ساعة",
    level: "مبتدئ",
    image: "/certificates/thumbnails/intro-kali-linux.png",
    document: "/certificates/satr/cybersecurity/intro-kali-linux.pdf",
    accent: "gold",
  },
];

function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <article className={`certificate-card ${certificate.accent}`}>
      <a
        className="certificate-preview"
        href={certificate.document}
        target="_blank"
        rel="noreferrer"
        aria-label={`عرض شهادة ${certificate.title}`}
      >
        <img src={certificate.image} alt="" />
        <span className="preview-overlay">عرض الشهادة</span>
      </a>
      <div className="certificate-content">
        <div className="certificate-topline">
          <span className="type-pill">شهادة إتمام دورة</span>
          <time dir="ltr">{certificate.date}</time>
        </div>
        <h3 dir="ltr">{certificate.title}</h3>
        <p className="arabic-title">{certificate.titleAr}</p>
        <p className="issuer" dir="ltr">
          {certificate.issuer}
        </p>
        <div className="certificate-meta">
          <span>{certificate.duration}</span>
          <span>{certificate.level}</span>
        </div>
        <a
          className="certificate-link"
          href={certificate.document}
          target="_blank"
          rel="noreferrer"
        >
          فتح الملف
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <nav className="topbar" aria-label="التنقل الرئيسي">
          <a className="identity" href="#top" aria-label="العودة إلى بداية الصفحة">
            <img src="/bassam-mark.png" alt="" />
            <span dir="ltr">BASSAM ALZAHRANI</span>
          </a>
          <a className="github-link" href="https://github.com/bassamalzahrani">
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <div className="hero-content" id="top">
          <div className="hero-copy">
            <p className="eyebrow" dir="ltr">
              CERTIFICATES &amp; TRAINING
            </p>
            <h1>
              سجلّ تعلّم تقني
              <span>موثّق ومنظّم.</span>
            </h1>
            <p className="hero-description">
              مجموعة منتقاة من الدورات التقنية والمعسكرات التدريبية التي أكملها
              بسام الزهراني في تطوير الويب والأمن السيبراني.
            </p>
            <p className="hero-description english" dir="ltr">
              A curated record of technical learning across web development and
              cybersecurity.
            </p>
          </div>

          <div className="hero-stats" aria-label="ملخص الشهادات">
            <div>
              <strong>11</strong>
              <span>شهادات</span>
            </div>
            <div>
              <strong>32</strong>
              <span>ساعة تدريبية</span>
            </div>
            <div>
              <strong>02</strong>
              <span>جهات تعليمية</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section courses-section">
        <header className="section-heading">
          <div>
            <p className="section-kicker" dir="ltr">
              COURSE COMPLETION
            </p>
            <h2>الدورات التقنية</h2>
          </div>
          <p>
            عشر دورات مكتملة عبر منصة سطر التابعة لأكاديمية طويق، تغطي تطوير
            الويب وأساسيات الأمن السيبراني وLinux وسطر الأوامر.
          </p>
        </header>

        <div className="certificate-grid">
          {courses.map((certificate) => (
            <CertificateCard key={certificate.title} certificate={certificate} />
          ))}
        </div>
      </section>

      <section className="section bootcamp-section">
        <header className="section-heading">
          <div>
            <p className="section-kicker" dir="ltr">
              BOOTCAMPS &amp; ATTENDANCE
            </p>
            <h2>المعسكرات والحضور</h2>
          </div>
          <p>
            برامج تدريبية مكثفة وحضورية تضيف ممارسة عملية إلى مسار التعلّم
            التقني.
          </p>
        </header>

        <article className="bootcamp-card">
          <a
            className="bootcamp-image"
            href="/certificates/umm-al-qura/penetration-testing-bootcamp.png"
            target="_blank"
            rel="noreferrer"
            aria-label="عرض شهادة حضور معسكر اختبار الاختراق"
          >
            <img
              src="/certificates/thumbnails/penetration-testing-bootcamp.png"
              alt=""
            />
          </a>
          <div className="bootcamp-content">
            <div className="certificate-topline">
              <span className="type-pill attendance">شهادة حضور</span>
              <time dir="ltr">08–18 Sep 2024</time>
            </div>
            <p className="bootcamp-label" dir="ltr">
              PENETRATION TESTING BOOTCAMP
            </p>
            <h3>معسكر اختبار الاختراق</h3>
            <p className="issuer">
              نادي الحاسبات، كلية الحاسبات - جامعة أم القرى
            </p>
            <p className="bootcamp-description">
              معسكر تدريبي حضوري امتد لعشرة أيام بإجمالي 16 ساعة تدريبية في
              أساسيات وممارسات اختبار الاختراق.
            </p>
            <div className="bootcamp-details">
              <div>
                <span>المدة</span>
                <strong>16 ساعة</strong>
              </div>
              <div>
                <span>النوع</span>
                <strong>معسكر حضوري</strong>
              </div>
            </div>
            <a
              className="primary-link"
              href="/certificates/umm-al-qura/penetration-testing-bootcamp.png"
              target="_blank"
              rel="noreferrer"
            >
              عرض شهادة الحضور
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </section>

      <section className="learning-note">
        <p className="section-kicker" dir="ltr">
          CONTINUOUS LEARNING
        </p>
        <blockquote>
          الشهادات توثّق التعلّم، والمشاريع تثبت القدرة على التطبيق.
        </blockquote>
        <p dir="ltr">
          Certificates document learning. Projects demonstrate applied skill.
        </p>
      </section>

      <footer>
        <div>
          <strong dir="ltr">BASSAM ALZAHRANI</strong>
          <p dir="ltr">Computer Science Student · Cybersecurity</p>
        </div>
        <p className="disclaimer">
          تُعرض هذه السجلات بصفتها شهادات إتمام دورات أو حضور، وليست تراخيص
          مهنية مستقلة.
        </p>
      </footer>
    </main>
  );
}
