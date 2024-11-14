import React, { useMemo, useState } from 'react';

import { Button } from './lib/Button';
import { Card, CardType, Tag } from './components/Card';

const CARDS: CardType[] = [
  {
    title: 'Drifting Bottle',
    subtitle: 'MIT WebLab Best UI Award',
    image:
      'https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/61e4fdb54eb09353cec334da_Screen%20Shot%202022-01-17%20at%2012.24.15%20AM.png',
    url: 'https://driftingbottle.onrender.com/',
    label: 'FULL-STACK',
    description:
      'A full stack website coded by React.js and Node/Express.js for people expressing without social anxiety. Users can share feelings and respond questions with random people.',
    tag: [Tag.FULL_STACK],
  },
  {
    title: 'Pointiest Path',
    image:
      'https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/618cb0a40b794827221a70de_Pointiest_thumb-small.jpeg',
    url: 'https://senseable.mit.edu/pointiest-path/',
    label: 'DATA VISUALIZATION',
    description:
      'An interactive website visualizing a general law of pedestrian navigation in large-scale urban environments across two major US cities using React.js and d3.js.',
    tag: [Tag.DATA_VIZ],
  },
  {
    title: 'How is Food Insecurity linked to Migration?',
    image:
      'https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/640816787968d412dc7fbb3e_food.png',
    url: 'https://albatross97.github.io/food-mig/',
    label: 'DATA VISUALIZATION',
    description:
      'A scrollytelling data visualization webpage coded by React.js and D3.js that analyzes the relationship between food insecurity and migration in the Northern Triangle.',
    tag: [Tag.DATA_VIZ],
  },
  {
    title: 'Police Fatal Shooting',
    image:
      'https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/608344031a960d63c0aa3740_police3.jpg',
    url: 'https://6859-sp21.github.io/final-project-fatal-shooting-by-us-police/',
    label: 'DATA VISUALIZATION',
    description:
      'Fatal shooting by US police is an interactive data visualization webpage coded by html/css and D3.js that analyzes the more than 5,000 deaths by police since 2015.',
    tag: [Tag.DATA_VIZ],
  },
  {
    title: 'City on Division',
    image:
      'https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/6080964f318d23746c05c66a_berlin.jpg',
    url: '/city-on-division',
    label: 'MACHINE LEARNING',
    description:
      'A visualization analysis of perceptive distinctions of urban environment between West and East Berlin during division and reunion using GIS, and machine learning.',
    tag: [Tag.MACHINE_LEARNING, Tag.DATA_VIZ],
  },
  {
    title: 'Puzzle',
    image:
      'https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/6080ec97a07f3d31d3faa499_ar.jpg',
    url: '/puzzle',
    label: 'AR/VR',
    description:
      'An AR smartphone application, as an interactive design-aid tool customized to the designers’ interest to reassemble the decomposed 3D building model components into a new composition.',
    tag: [Tag.AR_VR],
  },
  {
    title: 'Time Tunnel',
    image:
      'https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/6080f3e4791ff3080ebca351_media.jpg',
    url: '/time-tunnel',
    label: 'DATA VISUALIZATION',
    description:
      'An interactive light installation created interactive visual effects of city landmarks, which are triggered by motion and sound of the participants, thereby bringing the nostalgic memories to local citizens.',
    tag: [Tag.DATA_VIZ],
  },
];

export const Home = () => {
  const [activeTag, setActiveTag] = useState<Tag | null>(null);

  const handleTagClick = (tag: Tag) => {
    setActiveTag(tag === activeTag ? null : tag);
  };

  const filteredCards = activeTag
    ? CARDS.filter((card) => card.tag?.includes(activeTag))
    : CARDS;

  const chunkedCards = useMemo((): CardType[][] => {
    return filteredCards.reduce(
      (columns: CardType[][], card: CardType, index: number) => {
        columns[index % 3].push(card);
        return columns;
      },
      [[], [], []]
    );
  }, [filteredCards]);

  return (
    <div className="home-page flex flex-col py-12">
      <div className="top-bar px-[8%] flex flex-col gap-10 pb-4">
        <div className="motto text-right text-lg italic text-primary font-medium font-ubuntu">
          Bridging the past and the future, with the mediation of technology.
        </div>
        <div className="button-container flex flex-row flex-wrap gap-3">
          {Object.values(Tag).map((tag) => (
            <Button
              key={tag}
              variant="default"
              className={`flex-1 ${
                activeTag && activeTag !== tag && 'opacity-50'
              }`}
              onClick={() => handleTagClick(tag)}>
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <div className="bg-primary h-[2px] w-full"></div>

      <div className="card-list px-[8%] py-10 flex gap-4">
        {chunkedCards.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="card-col flex-1 flex flex-col gap-4">
            {column.map(
              ({ title, subtitle, label, image, url, description }) => (
                <Card
                  key={title}
                  title={title}
                  subtitle={subtitle}
                  label={label}
                  url={url}
                  image={image}
                  description={description}
                />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
