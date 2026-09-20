import React, { useEffect, useState } from 'react';
import { SlidingNumber } from './SlidingNumber';

export function Clock({ timeZone = 'Asia/Kolkata', className = '' }) {
  const [timeParts, setTimeParts] = useState(() => getCurrentTimeParts(timeZone));

  function getCurrentTimeParts(tz) {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });
    const parts = formatter.formatToParts(new Date());
    const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '12', 10);
    const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
    const second = parseInt(parts.find((p) => p.type === 'second')?.value || '0', 10);
    const dayPeriod = (parts.find((p) => p.type === 'dayPeriod')?.value || 'AM').toUpperCase();

    return { hour, minute, second, dayPeriod };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeParts(getCurrentTimeParts(timeZone));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className={`flex items-center gap-1 font-mono ${className}`}>
      <div className='flex items-center gap-0.5'>
        <SlidingNumber value={timeParts.hour} padStart={true} />
        <span className='text-zinc-500'>:</span>
        <SlidingNumber value={timeParts.minute} padStart={true} />
        <span className='text-zinc-500'>:</span>
        <SlidingNumber value={timeParts.second} padStart={true} />
      </div>
      <span className='text-fog-light/80 text-[10px] sm:text-xs font-semibold uppercase tracking-wider ml-0.5'>
        {timeParts.dayPeriod}
      </span>
    </div>
  );
}

export default Clock;
