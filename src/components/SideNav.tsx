import { NavLink } from 'react-router-dom';

import { Button } from '../lib/Button';
import { cn } from '../lib/utils';

export const SideNav = ({ className }: { className: string }) => (
  <div
    className={cn(
      'side-nav sm:shadow-[2px_2px_13px_rgba(0,0,0,0.3)] flex sm:flex-col items-center sm:px-12 sm:py-20 gap-7 bg-background border-b-4 border-primary sm:border-none',
      className
    )}>
    <h1 className="text-center font-ubuntu text-3xl font-medium hidden sm:flex">
      RUI WANG
    </h1>

    <div className="w-full flex sm:flex-col sm:gap-2 sm:w-36 sm:flex-grow">
      <NavLink to="/" className="w-full">
        {({ isActive }) => (
          <Button
            className="max-sm:rounded-none max-sm:border-transparent"
            variant={isActive ? 'default' : 'outline'}>
            PROJECT
          </Button>
        )}
      </NavLink>

      <NavLink to="/publication" className="w-full">
        {({ isActive }) => (
          <Button
            className="max-sm:rounded-none max-sm:border-transparent"
            variant={isActive ? 'default' : 'outline'}>
            PUBLICATION
          </Button>
        )}
      </NavLink>

      <NavLink to="/about" className="w-full">
        {({ isActive }) => (
          <Button
            className="max-sm:rounded-none max-sm:border-transparent"
            variant={isActive ? 'default' : 'outline'}>
            ABOUT
          </Button>
        )}
      </NavLink>
    </div>

    <div className="nav-intro font-ubuntu font-light text-sm mt-auto flex flex-col items-center p-2 gap-4">
      <img
        src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/607f1c89a4c5a2cee40fea56_glasses.png"
        loading="lazy"
        alt=""
      />
      <div className="hidden lg:flex lg:flex-col gap-1">
        <span className="font-medium">Nice to meet you!</span>
        <p>
          I’m Rui Wang, a software engineer interested in interactive data
          visualization, a designer passionate about user experience.
        </p>
      </div>
    </div>
  </div>
);
