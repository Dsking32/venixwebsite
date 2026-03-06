import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=85",
    eyebrow: "NCC Licensed · VAS Operator",
    title: ["Africa's Digital", "Infrastructure,", "Built to Scale."],
    description: "Venix Partners Limited powers enterprise telecom, fintech, and digital platform infrastructure across Nigeria's expanding transaction economy.",
    button: "Explore Our Services",
    buttonPath: "/services",
    tag: "Enterprise Infrastructure",
    stat: { value: "4", label: "Telecom Networks" },
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85",
    eyebrow: "Enterprise · Fintech · Telecom",
    title: ["Six Integrated", "Platform", "Verticals."],
    description: "From cloud e-top-up and bulk messaging to content streaming, gaming, and financial intelligence — built for enterprise scale.",
    button: "View Our Platforms",
    buttonPath: "/platforms",
    tag: "Platform Ecosystem",
    stat: { value: "6+", label: "Platform Verticals" },
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
    eyebrow: "Compliance-Driven · Regulated",
    title: ["Structured for", "Long-Term", "Partnerships."],
    description: "Disciplined engagement with telecom operators, financial institutions, and enterprise organizations — governed by NCC licensing standards.",
    button: "Partner With Us",
    buttonPath: "/contact",
    tag: "Governance & Trust",
    stat: { value: "B2B", label: "Enterprise-Grade" },
  },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');
  .hero-root { font-family: 'DM Sans', sans-serif; }
  .hero-serif { font-family: 'DM Serif Display', Georgia, serif; }
`;

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const DURATION = 6000;

  const startCycle = () => {
    if (intervalRef.current)  clearInterval(intervalRef.current);
    if (progressRef.current)  clearInterval(progressRef.current);

    setProgress(0);
    const step = 100 / (DURATION / 50);
    progressRef.current = setInterval(() => {
      setProgress(p => Math.min(p + step, 100));
    }, 50);

    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % slides.length);
      setProgress(0);
    }, DURATION);
  };

  useEffect(() => {
    startCycle();
    return () => {
      if (intervalRef.current)  clearInterval(intervalRef.current);
      if (progressRef.current)  clearInterval(progressRef.current);
    };
  }, []);

  const goTo = (i) => {
    setIndex(i);
    startCycle();
  };

  const slide = slides[index];

  return (
    <div className="hero-root relative w-full overflow-hidden bg-blue-950" style={{ height: '100svh', minHeight: 600 }}>
      <style>{CSS}</style>

      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1,  scale: 1    }}
          exit={{    opacity: 0,  scale: 0.97 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/75 to-blue-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-blue-950/20" />
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(251,191,36,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.04) 1px,transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'linear-gradient(to right, black 0%, transparent 60%)',
          WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 60%)',
        }}
      />

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-yellow-400/60 to-transparent" />

      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0   }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="block h-px w-8 bg-yellow-400" />
              <span className="text-[11px] font-bold uppercase tracking-[.16em] text-yellow-400">
                {slide.eyebrow}
              </span>
            </motion.div>

            <h1 className="hero-serif mb-8 leading-[1.04]">
              {slide.title.map((line, li) => (
                <motion.span
                  key={li}
                  className="block"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1,  y: 0  }}
                  transition={{ delay: 0.25 + li * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontSize: 'clamp(2.6rem, 6vw, 5rem)',
                    color: li === 0 ? '#fff' : li === 1 ? '#fde68a' : '#fff',
                    fontStyle: li === 1 ? 'italic' : 'normal',
                  }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0   }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="text-[15px] font-light leading-relaxed text-white/65 mb-10 max-w-xl"
            >
              {slide.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0   }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to={slide.buttonPath}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-yellow-400 px-7 py-3.5 text-[14px] font-bold text-blue-950 shadow-xl shadow-yellow-400/25 transition-all duration-200 hover:bg-yellow-300 hover:-translate-y-0.5"
              >
                {slide.button}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-[14px] font-semibold text-white/80 transition-all duration-200 hover:border-white/40 hover:text-white"
              >
                About Venix
                <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`stat-${index}`}
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0,  scale: 1    }}
          exit={{    opacity: 0, y: -8, scale: 0.95 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute right-8 bottom-32 z-10 hidden lg:block"
        >
          <div className="rounded-2xl border border-white/10 bg-blue-950/70 backdrop-blur-md px-6 py-4 text-right">
            <p className="text-3xl font-bold text-yellow-400 hero-serif">{slide.stat.value}</p>
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mt-0.5">{slide.stat.label}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`tag-${index}`}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0  }}
          exit={{    opacity: 0, x: 16 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="absolute right-8 top-28 z-10 hidden lg:flex items-center gap-2"
        >
          <span className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-yellow-400">
            {slide.tag}
          </span>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-10 left-6 lg:left-12 right-6 z-10 flex items-end justify-between">
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300"
              style={{ width: i === index ? 56 : 20, background: 'rgba(255,255,255,0.2)' }}
            >
              {i === index && (
                <motion.span
                  className="absolute inset-y-0 left-0 rounded-full bg-yellow-400"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-[12px] font-bold text-yellow-400">
            0{index + 1}
          </span>
          <span className="text-white/20 text-[12px]">/</span>
          <span className="font-mono text-[12px] text-white/30">
            0{slides.length}
          </span>
        </div>
      </div>
    </div>
  );
}