import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({ className, variant = 'primary', ...props }) {
    const variants = {
        primary: 'bg-accent text-white hover:bg-yellow-600 border border-transparent',
        outline: 'bg-transparent text-white border border-accent hover:bg-accent/10',
        ghost: 'bg-transparent text-slate-300 hover:text-white',
    };

    return (
        <button
            className={twMerge(
                'px-8 py-3 rounded-none font-sans font-medium transition-all duration-300 tracking-wide uppercase text-sm',
                variants[variant],
                className
            )}
            {...props}
        />
    );
}
