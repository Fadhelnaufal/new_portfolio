'use client';
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Preloader = () => {
    const controls = useAnimation();
    const pathControls = useAnimation();

    useEffect(() => {
        const animate = async () => {
            const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
            const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

            await controls.start({
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.3 },
            });

            await pathControls.start({
                d: curve,
                transition: { duration: 0.6, ease: "easeInOut" },
            });

            await pathControls.start({
                d: flat,
                transition: { duration: 0.6, ease: "easeInOut" },
            });

            await controls.start({
                scale: 0.95,
                opacity: 0,
                y: -100,
                transition: { duration: 0.5, ease: "easeInOut" },
            });

            await controls.start({
                display: "none",
                transition: { delay: 0.1 },
            });
        };

        animate();
    }, [controls, pathControls]);

    return (
        <motion.div
            className="preloader"
            animate={controls}
            initial={{ opacity: 1, y: 0, scale: 1 }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "#0a0a0a", // deep black
                zIndex: 9999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "#fff",
                overflow: "hidden",
            }}
        >
            <svg
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
                style={{
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                    opacity: 0.1,
                }}
            >
                <motion.path
                    d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
                    animate={pathControls}
                    fill="#ffffff22" // subtle light curve
                />
            </svg>

            <div className="preloader-heading" style={{ zIndex: 2 }}>
                {/* <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                        textAlign: "center",
                        color: "#ffffffcc", // semi-transparent white
                        letterSpacing: "2px",
                    }}
                >
                    Loading
                </motion.h1> */}

                <motion.div
                    className="load-text"
                    style={{ display: "flex", gap: "8px", justifyContent: "center" }}
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.span
                            key={i}
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatDelay: 0.1,
                                delay: i * 0.2,
                            }}
                            style={{
                                fontSize: "2rem",
                                fontWeight: "bold",
                                color: "#0077ff", // light blue accent
                            }}
                        >
                            •
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
