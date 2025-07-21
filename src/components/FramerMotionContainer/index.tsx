import { Container } from "./styles";

interface FramerMotionContainerProps {
  children: React.ReactNode;
}

export const FramerMotionContainer = ({ children }: FramerMotionContainerProps) => {
  const variants = {
    hidden: { opacity: 0, y: 1000 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -1000 },
  };

  return (
    <Container initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.3 }}>
      {children}
    </Container>
  );
};
