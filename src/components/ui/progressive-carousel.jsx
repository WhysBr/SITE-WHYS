"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Context ────────────────────────────────────────────────────────────────
const ProgressSliderContext = createContext(undefined);

export const useProgressSliderContext = () => {
  const context = useContext(ProgressSliderContext);
  if (!context) throw new Error("Must be used within a ProgressSlider");
  return context;
};

// ─── ProgressSlider (root) ──────────────────────────────────────────────────
export const ProgressSlider = ({
  children,
  duration = 5000,
  fastDuration = 400,
  vertical = false,
  activeSlider,
  className = "",
}) => {
  const [active, setActive] = useState(activeSlider);
  const [progress, setProgress] = useState(0);
  const [isFastForward, setIsFastForward] = useState(false);
  const frame = useRef(0);
  const firstFrameTime = useRef(performance.now());
  const targetValue = useRef(null);
  const progressRef = useRef(0);
  const [sliderValues, setSliderValues] = useState([]);

  useEffect(() => {
    const getChildren = React.Children.toArray(children).find(
      (child) => child.type === SliderContent
    );
    if (getChildren) {
      const values = React.Children.toArray(getChildren.props.children).map(
        (child) => child.props.value
      );
      setSliderValues(values);
    }
  }, [children]);

  useEffect(() => {
    if (sliderValues.length === 0) return;
    firstFrameTime.current = performance.now();
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderValues, active, isFastForward]);

  const animate = (now) => {
    const currentDuration = isFastForward ? fastDuration : duration;
    const elapsedTime = now - firstFrameTime.current;
    const timeFraction = elapsedTime / currentDuration;

    if (timeFraction <= 1) {
      const newProgress = isFastForward
        ? progressRef.current + (100 - progressRef.current) * timeFraction
        : timeFraction * 100;
      progressRef.current = newProgress;
      setProgress(newProgress);
      frame.current = requestAnimationFrame(animate);
    } else {
      if (isFastForward) {
        setIsFastForward(false);
        if (targetValue.current !== null) {
          setActive(targetValue.current);
          targetValue.current = null;
        }
      } else {
        const currentIndex = sliderValues.indexOf(active);
        const nextIndex = (currentIndex + 1) % sliderValues.length;
        setActive(sliderValues[nextIndex]);
      }
      progressRef.current = 0;
      setProgress(0);
      firstFrameTime.current = performance.now();
    }
  };

  const handleButtonClick = (value) => {
    if (value !== active) {
      const elapsedTime = performance.now() - firstFrameTime.current;
      progressRef.current = (elapsedTime / duration) * 100;
      targetValue.current = value;
      setIsFastForward(true);
      firstFrameTime.current = performance.now();
    }
  };

  return (
    <ProgressSliderContext.Provider value={{ active, progress, handleButtonClick, vertical }}>
      <div className={`relative ${className}`}>{children}</div>
    </ProgressSliderContext.Provider>
  );
};

// ─── SliderContent ──────────────────────────────────────────────────────────
export const SliderContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

// ─── SliderWrapper ──────────────────────────────────────────────────────────
export const SliderWrapper = ({ children, value, className = "" }) => {
  const { active } = useProgressSliderContext();
  return (
    <AnimatePresence mode="popLayout">
      {active === value && (
        <motion.div
          key={value}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── SliderBtnGroup ─────────────────────────────────────────────────────────
export const SliderBtnGroup = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

// ─── SliderBtn ──────────────────────────────────────────────────────────────
/**
 * Progress bar uses mix-blend-mode: difference with a white fill so that
 * as it sweeps across the button, all text/colors underneath are inverted.
 * progressStyle prop allows passing extra inline styles to the fill span.
 */
export const SliderBtn = ({
  children,
  value,
  className = "",
  progressBarClass = "",
  progressStyle = {},
}) => {
  const { active, progress, handleButtonClick, vertical } = useProgressSliderContext();
  return (
    <button
      className={`relative ${active === value ? "opacity-100" : "opacity-50 hover:opacity-75"} transition-opacity ${className}`}
      style={{ isolation: "isolate" }}
      onClick={() => handleButtonClick(value)}
    >
      {/* Children sit on top */}
      <div className="relative z-10">{children}</div>

      {/* Progress fill — z-20 so it's above children; mix-blend-mode:difference inverts colors */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        role="progressbar"
        aria-valuenow={active === value ? progress : 0}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span
          className={`absolute left-0 top-0 ${progressBarClass}`}
          style={{
            [vertical ? "height" : "width"]: active === value ? `${progress}%` : "0%",
            mixBlendMode: "difference",
            ...progressStyle,
          }}
        />
      </div>
    </button>
  );
};
