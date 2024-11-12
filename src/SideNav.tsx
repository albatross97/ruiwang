import { NavLink } from 'react-router-dom';

import { Button } from './lib/Button';
import { cn } from './lib/utils';

export const SideNav = ({ className }: { className: string }) => (
  <div
    className={cn(
      'side-nav shadow-[2px_2px_13px_rgba(0,0,0,0.3)] flex flex-col items-center px-12 py-20 gap-7 bg-background',
      className
    )}>
    <h1 className="text-center font-ubuntu text-[30px] font-medium">
      RUI WANG
    </h1>

    <div className="flex flex-col gap-2 w-36 flex-grow">
      <NavLink to="/">
        {({ isActive }) => (
          <Button variant={isActive ? 'default' : 'outline'}>PROJECT</Button>
        )}
      </NavLink>

      <NavLink to="/publication">
        {({ isActive }) => (
          <Button variant={isActive ? 'default' : 'outline'}>
            PUBLICATION
          </Button>
        )}
      </NavLink>

      <NavLink to="/about">
        {({ isActive }) => (
          <Button variant={isActive ? 'default' : 'outline'}>ABOUT</Button>
        )}
      </NavLink>
    </div>

    <div className="nav-intro font-ubuntu font-light text-sm mt-auto flex flex-col items-center gap-4 w-[75%]">
      <img
        src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/607f1c89a4c5a2cee40fea56_glasses.png"
        loading="lazy"
        alt=""
      />
      <div>
        <span className="font-medium">Nice to meet you!</span>
        <br />
        I’m Rui Wang, a software engineer interested in interactive data
        visualization, a designer passionate about user experience.
      </div>
    </div>
  </div>
);
