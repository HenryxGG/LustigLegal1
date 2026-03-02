import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { useDarkMode } from '../hooks/useDarkMode';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const { isDark, toggleDarkMode } = useDarkMode();

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);
    const toggleMobileSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);

    return (
        <div className={`flex h-screen overflow-hidden font-sans ${isDark ? 'dark bg-[#101922]' : 'bg-[#f6f7f8]'}`}>
            {/* Sidebar Overlay (Mobile) */}
            {isMobileSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
                    onClick={() => setIsMobileSidebarOpen(false)}
                />
            )}

            {/* Sidebar - Collapsible on Desktop */}
            <Sidebar
                isCollapsed={isCollapsed}
                isMobileSidebarOpen={isMobileSidebarOpen}
                setIsMobileSidebarOpen={setIsMobileSidebarOpen}
            />

            {/* Main Content Area - Dynamic displacement based on Sidebar state */}
            <div
                className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${isCollapsed ? 'md:pl-[72px]' : 'md:pl-[260px]'
                    }`}
            >
                {/* Header */}
                <header className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 bg-white/80 dark:bg-[#101922]/80 backdrop-blur-md z-[90] sticky top-0 transition-all">
                    <div className="flex items-center gap-4 w-1/2 max-w-lg">
                        <button
                            onClick={toggleMobileSidebar}
                            className="p-2 md:hidden text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg shrink-0"
                        >
                            <span className="material-symbols-outlined text-[20px]">menu</span>
                        </button>
                        <div className="relative w-full group">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                            <input
                                className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800/50 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 transition-all outline-none"
                                placeholder="Buscar procesos, clientes o expedientes..."
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-all group"
                        >
                            <span className={`material-symbols-outlined text-[22px] ${isDark ? 'text-yellow-500' : 'text-primary'}`}>
                                {isDark ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                        <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 relative transition-all group">
                            <span className="material-symbols-outlined text-[22px] group-hover:scale-110">notifications</span>
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-600 rounded-full border-2 border-white dark:border-[#101922]"></span>
                        </button>
                        <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2 hidden sm:block"></div>
                        <div className="hidden sm:flex items-center gap-2 text-slate-600 dark:text-slate-300">
                            <span className="text-xs font-bold whitespace-nowrap uppercase tracking-wider opacity-60">Quito, {new Date().toLocaleDateString()}</span>
                            <span className="material-symbols-outlined text-slate-400 text-[18px]">schedule</span>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto hide-scrollbar bg-transparent">
                    {children}
                </main>
            </div>

            {/* Floating Collapse Toggle (Desktop) */}
            <button
                onClick={toggleSidebar}
                className="hidden md:flex fixed bottom-24 z-[120] transition-all duration-300 transform"
                style={{ left: isCollapsed ? '56px' : '244px' }}
            >
                <div className="bg-primary text-white p-1 rounded-full shadow-xl hover:scale-110 transition-transform cursor-pointer border-4 border-white dark:border-[#101922]">
                    <span className="material-symbols-outlined text-[16px] font-bold">
                        {isCollapsed ? 'chevron_right' : 'chevron_left'}
                    </span>
                </div>
            </button>
        </div>
    );
};

export default Layout;
