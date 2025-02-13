import { ProjectIntro } from '../components/InfoGrid';

const PUZZLE_INTRO = {
  tags: ['AV/VR'],
  abstract:
    'Puzzle is an Augmented Reality smartphone application, as an interactive design-aid tool customized to the designers’ interest to reassemble the decomposed 3D model components into a new composition.',
  info: {
    DATE: '07/2018',
    TYPE: 'Collaboration',
    ROLE: 'Team leader',
    CONTRIBUTOR: 'Zhang Qiao, Tao Lizi',
    SUPERVISOR: 'Prof. Takehiko Nagakura',
  },
};

export const Puzzle = () => {
  return (
    <div className="bg-white h-full">
      <div className="flex flex-col py-12 gap-4">
        <h1 className="font-medium px-[14%] text-3xl text-pink">PUZZLE</h1>

        <div className="bg-pink h-[2px] w-full"></div>

        <div className="px-[14%] flex flex-col gap-32">
          <div className="flex flex-col gap-4">
            <ProjectIntro data={PUZZLE_INTRO} />

            <img
              src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/6081f873d36ae1e5acaca8f5_ar1.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              BACKGROUND | GOVERNMENT-DOMINATED URBAN RENEWAL
            </div>
            <div className="flex flex-col">
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/608209e3c998e82429fb49dc_Screen%20Shot%202021-04-22%20at%207.42.16%20PM.png"
                loading="lazy"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              PROPOSAL | OUR CITY OUR PLAN
            </div>
            <div className="flex flex-col">
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/60820b17b21fc642151a354a_Screen%20Shot%202021-04-22%20at%207.44.00%20PM.png"
                loading="lazy"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              OVERVIEW
            </div>
            <div className="flex flex-col gap-8">
              <div>
                In this project, advanced technologies were applied, such as
                photogrammetry and visualization. Photogrammetry modeling
                technologies (Photoscan, Recap) are used to collect raw
                material, generating 3D models of historical heritages.
                Visualization technologies (Unity, Vuforia) help to decompose
                them into individual components attached to targets, and finally
                collecte them in a database. By moving and arranging targets in
                database, users would rearrange components from extant
                buildings.
              </div>
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/6082105e62022832ef92e51d_ar4.png"
                loading="lazy"
                alt=""
              />
              <div className="flex items-end gap-4">
                <img
                  className="w-[50%]"
                  src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/60820c7f0986d8adb067c4ba_Screen%20Shot%202021-04-22%20at%207.52.37%20PM.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 21vw, (max-width: 991px) 23vw, (max-width: 1919px) 24vw, 25vw"
                  alt=""
                />
                <img
                  className="w-[50%]"
                  src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/60820c828d9aab04116831ad_Screen%20Shot%202021-04-22%20at%207.52.46%20PM.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 21vw, (max-width: 991px) 23vw, (max-width: 1919px) 24vw, 25vw"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              DEMO
            </div>
            <div className="flex flex-col gap-8">
              <p>
                Arrange physical markers as identifiers for virtual pieces into
                right positions, then select AR puzzle pieces from menu at the
                lower left corner. Transform the puzzle pieces on the phone
                screen by finger touching.
              </p>
              <div className="w-full h-full aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/IxsbcX3faro?si=RFbuQevIK9oLwN2W"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
