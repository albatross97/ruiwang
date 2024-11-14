import { Button } from './lib/Button';

export const About = () => {
  return (
    <div className="about-page flex flex-col gap-4 text-[#000] py-10">
      <div className="flex justify-between items-end px-[8%]">
        <div className="icons flex gap-3 opacity-50">
          <a href="mailto:ruiwang704@gmail.com" className="w-inline-block">
            <img
              src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/604d92a8fa4363762e1f2d93_social-25.svg"
              loading="lazy"
              width="25"
              alt=""
            />
          </a>
          <a
            href="http://www.linkedin.com/in/rui-wang-3844221b9"
            className="w-inline-block">
            <img
              src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/604d92a8fa436345721f2d13_social-09.svg"
              loading="lazy"
              width="25"
              alt=""
            />
          </a>
          <a href="https://github.com/albatross97" className="w-inline-block">
            <img
              src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/604d92a8fa4363d4681f2ced_social-33.svg"
              loading="lazy"
              width="25"
              alt=""
            />
          </a>
        </div>
        <img
          src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/607f7481b80fe8e6a016dc76_Rui.png"
          loading="lazy"
          width="190"
          sizes="(max-width: 479px) 84vw, (max-width: 1919px) 205px, 100vw"
          alt=""
        />
      </div>

      <div className="bg-primary h-[2px] w-full"></div>

      <div className="px-[8%] py-5 flex flex-col gap-10">
        <div className="education">
          <h3 className="text-primary text-lg font-bold mb-3">EDUCATION</h3>
          <div className="grid gap-x-[30px] gap-y-4 grid-cols-[.5fr_1fr_.5fr]">
            <p className="school">
              <strong>Massachusetts Institute of Technology</strong>
            </p>
            <p className="degree flex flex-col gap-1">
              <div>MS in Electrical Engineering and Computer Science</div>
              <div>MS in Architecture Studies in Computation</div>
              <em className="italic-text text-light">(GPA: 5.0/5.0)</em>
            </p>
            <p className="location text-right">Sep 2020 - Feb 2023</p>
            <p className="school">
              <strong>Harbin Institute of Technology</strong>
              <em className="italic-text"></em>
            </p>
            <p className="degree">
              Major: Bachelor of Architecture <br />
              ‍Minor: Computer Science <br />
              <em className="italic-text text-light">(rank: 4/69)</em>
            </p>
            <p className="location text-right">Sep 2015 - Jun 2020</p>
            <p className="school">
              <strong>University of California, Berkeley </strong>
            </p>
            <p className="degree">
              UCB Global Access Program Certificate: Architecture <br />‍
              <em className="italic-text text-light">(GPA: 3.6/4.0)</em>
            </p>
            <p className="location text-right">Aug 2017 - May 2018</p>
          </div>
        </div>

        <div className="experience">
          <h3 className="text-primary text-lg font-bold mb-3">EXPERIENCE</h3>
          <div className="grid gap-x-[30px] gap-y-4 grid-cols-[.5fr_1fr_.5fr]">
            <p className="company">
              <strong>Foursquare</strong> <br />
              <em>Software Engineer II</em>
            </p>
            <ol className="position flex flex-col gap-1 list-disc list-outside">
              <li className="position-detail">
                Led frontend development for a cloud based geospatial workspace
                using{' '}
                <strong>Typescript, React, Redux, Next.js and Node.js</strong>,
                empowering clients to process and unify geospatial data for
                advanced analysis and fluid visualization.
              </li>
              <li className="position-detail">
                Owned the implementation of SQL query parameters, enabling users
                to edit, bookmark, and perform <strong>SQL</strong> queries
                against cloud databases like{' '}
                <strong>Databricks, Postgres and GCP</strong>.
              </li>
              <li className="position-detail">
                Launched impactful UI/UX features, including customizable 3D
                maps and interactive charts, enhancing user engagement through
                close collaboration with engineers, designers, and product
                managers.
              </li>
            </ol>
            <p className="location text-right">
              San Francisco, CA
              <br />
              Apr 2023 - Present
            </p>
            <p className="company">
              <strong>Foursquare</strong> <br />{' '}
              <em>Software Engineer Intern</em>
            </p>
            <ol className="position flex flex-col gap-1 list-disc list-outside">
              <li className="position-detail">
                Prototyped a UI builder for customizing business insights
                dashboards using Typescript, React, Redux and Node.js
                progressing from UX wireframe to MVP stage.
              </li>
              <li className="position-detail">
                Achieved project milestones and delivered a functional prototype
                in under 2 months, establishing it as a pivotal project for the
                company.
              </li>
            </ol>
            <p className="location text-right">
              Seattle, WA
              <br />
              June 2022 - Aug 2022
            </p>
            <p className="company">
              <strong>MIT Senseable City Lab</strong> <br />
              <em>Research Assistant</em>
            </p>
            <ol className="position flex flex-col gap-1 list-disc list-outside">
              <li className="position-detail">
                Designed and developed an interactive data visualization website
                on pedestrian navigation using React and D3.js for a lab
                research paper published in Nature.
              </li>
              <li className="position-detail">
                Partnered with researchers to improve user engagement by
                creating a first-person perspective map.
              </li>
            </ol>
            <p className="location text-right">
              Cambridge, MA <br />
              Oct 2021 - July 2021
            </p>
            <p className="company">
              <strong>MIT Design Heritage Lab </strong> <br />
              <em>Research Assistant</em>
            </p>
            <ol className="position flex flex-col gap-1 list-disc list-outside">
              <li className="position-detail">
                Conducted a web page to promote the digital exhibition
                experience for over 1000 museum visitors.
              </li>
              <li className="position-detail">
                Built the feature of 3D file conversion via Three.js to
                accelerate website model loading by 50%.
              </li>
            </ol>
            <p className="location text-right">
              Cambridge, MA <br />
              Nov 2020 - Apr 2021
            </p>
          </div>
        </div>

        <div className="honor">
          <h3 className="text-primary text-lg font-bold mb-3">HONOR</h3>
          <div className="grid gap-y-[5px] grid-cols-[1.25fr_.5fr]">
            <p>
              <strong>Best UI Feature Award</strong>, MIT Weblab Competition
            </p>
            <p className="time text-right">2022</p>
            <p>
              <strong>MIT Fellowship</strong>
            </p>
            <p className="time text-right">2020</p>
            <p>
              <strong>2020 HIT Outstanding graduate </strong>
            </p>
            <p className="time text-right">2020</p>
            <p>
              <strong>HIT Merit Student</strong>, School of Architecture
            </p>
            <p className="time text-right">2015, 2016, 2019</p>
            <p>
              <strong>3rd Prize</strong>, the 3rd International Colleges and
              Universities Construction Competition
            </p>
            <p className="time text-right">2018</p>
            <p>
              <strong>1st Prize</strong>, the 10th Tongji International
              Construction Competition
            </p>
            <p className="time text-right">2016</p>
          </div>
        </div>

        <div className="skill">
          <h3 className="text-primary text-lg font-bold mb-3">SKILL</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" size="sm" className="w-fit text-sm">
              Javascript/Typescript
            </Button>
            <Button variant="secondary" size="sm" className="w-fit text-sm">
              Python
            </Button>
            <Button variant="secondary" size="sm" className="w-fit text-sm">
              React
            </Button>
            <Button variant="secondary" size="sm" className="w-fit text-sm">
              Redux
            </Button>
            <Button variant="secondary" size="sm" className="w-fit text-sm">
              Node.js
            </Button>
            <Button variant="secondary" size="sm" className="w-fit text-sm">
              SQL
            </Button>
            <Button variant="secondary" size="sm" className="w-fit text-sm">
              MongoDB
            </Button>
            <Button variant="secondary" size="sm" className="w-fit text-sm">
              D3.js
            </Button>
            <Button variant="secondary" size="sm" className="w-fit text-sm">
              HTML/CSS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
