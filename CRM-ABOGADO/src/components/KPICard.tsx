import React from 'react';
import type { KPIData } from '../types/dashboard';

const KPICard: React.FC<{ data: KPIData }> = ({ data }) => {
    return (
        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-primary/50 transition-colors shadow-sm">
            <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{data.label}</p>
                <span className={`material-symbols-outlined ${data.colorClass}`}>{data.icon}</span>
            </div>
            <p className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">{data.value}</p>

            {data.change && (
                <div className={`flex items-center gap-1 mt-2 text-xs font-semibold ${data.changeType === 'up' ? 'text-emerald-500' : 'text-rose-500'
                    }`}>
                    <span className="material-symbols-outlined text-xs">
                        {data.changeType === 'up' ? 'trending_up' : 'trending_down'}
                    </span>
                    <span>{data.change}</span>
                </div>
            )}

            {data.info && (
                <p className="text-slate-400 text-xs mt-2">{data.info}</p>
            )}
        </div>
    );
};

export default KPICard;
