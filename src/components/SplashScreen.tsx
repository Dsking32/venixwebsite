import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Sparkles, Zap } from "lucide-react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [showMessage, setShowMessage] = useState(false);
    const [progress, setProgress] = useState(0);

    // Generate random positions for decorative elements
    const [decorativeElements] = useState(() => ({
        stars: Array.from({ length: 24 }, () => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: 12 + Math.random() * 36,
            delay: Math.random() * 2,
            duration: 2 + Math.random() * 3,
            rotate: Math.random() * 360,
            opacity: 0.3 + Math.random() * 0.7,
        })),
        sparkles: Array.from({ length: 8 }, () => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: 16 + Math.random() * 20,
            delay: Math.random() * 2.5,
        })),
    }));

    useEffect(() => {
        // Progress bar animation
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        const timer1 = setTimeout(() => setShowMessage(true), 800);
        const timer2 = setTimeout(() => onFinish(), 2800);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearInterval(interval);
        };
    }, [onFinish]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-yellow-500 overflow-hidden"
        >
            {/* Animated background gradient */}
            <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 80%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)",
                    ],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Floating stars */}
            {decorativeElements.stars.map((pos, i) => (
                <motion.div
                    key={`star-${i}`}
                    className="absolute pointer-events-none"
                    style={{
                        left: `${pos.left}%`,
                        top: `${pos.top}%`,
                    }}
                    initial={{ scale: 0, rotate: 0, opacity: 0 }}
                    animate={{
                        scale: [0, 1, 1, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, pos.opacity, pos.opacity, 0],
                    }}
                    transition={{
                        duration: pos.duration,
                        delay: pos.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Star
                        size={pos.size}
                        className="text-yellow-400"
                        style={{
                            filter: "drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))",
                        }}
                    />
                </motion.div>
            ))}

            {/* Sparkles */}
            {decorativeElements.sparkles.map((pos, i) => (
                <motion.div
                    key={`sparkle-${i}`}
                    className="absolute pointer-events-none"
                    style={{
                        left: `${pos.left}%`,
                        top: `${pos.top}%`,
                    }}
                    animate={{
                        scale: [0, 1.2, 1, 0],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 2.5,
                        delay: pos.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Sparkles
                        size={pos.size}
                        className="text-yellow-300"
                    />
                </motion.div>
            ))}

            {/* Center content */}
            <div className="relative z-50 flex flex-col items-center">
                {/* Logo container with glow effect */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        duration: 1,
                    }}
                    className="relative"
                >
                    {/* Glow effect */}
                    <motion.div
                        className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    
                    {/* Logo */}
                    <motion.img
                        src="/images/logo.png"
                        alt="Venix Logo"
                        className="w-40 h-40 relative z-10 object-contain"
                        whileHover={{ scale: 1.05 }}
                    />
                </motion.div>

                {/* Animated rings around logo */}
                <motion.div
                    className="absolute rounded-full border-2 border-yellow-400/30"
                    style={{ width: 200, height: 200 }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                />
                <motion.div
                    className="absolute rounded-full border-2 border-yellow-400/20"
                    style={{ width: 240, height: 240 }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0, 0.2],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.5,
                    }}
                />

                {/* Brand name with animation */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-6 text-3xl font-bold text-white tracking-wider"
                >
                    VENIX
                </motion.h1>

                {/* Tagline */}
                <AnimatePresence>
                    {showMessage && (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-4 text-center"
                        >
                            <p className="text-xl text-yellow-400 font-medium">
                                Come make a difference
                            </p>
                            <div className="flex items-center justify-center mt-2 space-x-1">
                                <Zap size={16} className="text-yellow-400" />
                                <span className="text-white/60 text-sm">Innovating tomorrow</span>
                                <Zap size={16} className="text-yellow-400" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Progress bar */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-12 h-1 bg-white/20 rounded-full overflow-hidden"
                >
                    <motion.div
                        className="h-full bg-yellow-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </motion.div>

                {/* Loading text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-3 text-white/40 text-sm"
                >
                    Loading experience...
                </motion.p>
            </div>

            {/* Bottom decorative elements */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="w-1 h-1 bg-yellow-400 rounded-full"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
}