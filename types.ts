import { HTMLMotionProps } from 'framer-motion';

export interface WaitlistFormData {
  name: string;
  email: string;
  phone?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'glass';
  isLoading?: boolean;
}