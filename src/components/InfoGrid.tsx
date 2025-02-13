import React from 'react';
import { Button } from '../lib/Button';

type ProjectIntroData = {
  tags: string[];
  abstract: string;
  info: Record<string, string>;
};

interface ProjectIntroProps {
  data: ProjectIntroData;
  color?: string;
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({
  data,
  color = 'pink',
}) => {
  return (
    <div className="flex gap-8 max-lg:flex-col">
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex gap-3 w-fit">
          {data.tags.map((tag: string) => (
            <Button
              variant="secondary"
              size="sm"
              className={`bg-${color} border-${color} hover:bg-${color} cursor-default`}>
              {tag}
            </Button>
          ))}
        </div>
        <p>{data.abstract}</p>
      </div>

      <div
        className={`grid grid-cols-2 text-${color} w-fit text-xs mt-auto h-fit`}>
        {Object.entries(data.info).map(([key, value]) => (
          <React.Fragment key={key}>
            <span>{key}:</span>
            <span className="text-right">{value}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
