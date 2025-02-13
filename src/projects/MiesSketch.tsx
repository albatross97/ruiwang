import { ProjectIntro } from '../components/InfoGrid';
import { Button } from '../lib/Button';

const MIES_INTRO = {
  tags: ['Data Visualization'],
  abstract:
    'An interactive roaming project coded by C# in Unity that allows users to explore the unbuilt project of Mies’s between 2D sketches and 3D scenes by controlling a player.',
  info: {
    DATE: '11/2020',
    TYPE: 'Individual Work',
    SUPERVISOR: 'Prof. Takehiko Nagakura',
  },
};

export const MiesSketch = () => {
  return (
    <div className="bg-white h-full">
      <div className="flex flex-col py-12 gap-4">
        <h1 className="font-medium px-[14%] text-3xl text-primary">
          MIES'S SKETCH
        </h1>

        <div className="bg-primary h-[2px] w-full"></div>

        <div className="px-[14%] flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <ProjectIntro data={MIES_INTRO} color="primary" />

            <Button variant="outline" className="w-64">
              <a
                href="https://albatross97.github.io/Mies/"
                target="_blank"
                rel="noreferrer"
                className="primary-button cardbutton w-button">
                &gt;&gt; View
              </a>
            </Button>
          </div>

          <div className="w-full h-full aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/8dTp011k6Tg?si=x0eFWE9OpIYz-kRt"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
