import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export function TypingAnimation({
  text,
  speed = 100,
  delay = 0,
  className = '',
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block w-1 h-1 ml-1 bg-current"
        />
      )}
    </span>
  );
}
