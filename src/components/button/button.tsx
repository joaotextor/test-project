import { st, classes } from './button.st.css';

export interface ButtonProps {
    className?: string;
}

export const Button = ({ className }: ButtonProps) => {
    return <div className={st(classes.root, className)}>Button</div>;
};
