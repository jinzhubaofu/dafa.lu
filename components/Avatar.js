import React from 'react';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import config from '@/lib/config';

export default function Avatar({ by, publishedAt }) {
  return (
    <div className="flex items-center">
      <Image
        alt={config.author.name}
        height={24}
        width={24}
        src="/avatar.jpg"
        className="rounded-full"
      />
      <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
        {by}
        {`${config.author.name} / `}
        {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
      </p>
    </div>
  );
}
