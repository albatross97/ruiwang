import { Button } from '../lib/Button';

export const Puzzle = () => {
  return (
    <div className="bg-white h-full">
      <div className="flex flex-col py-12 gap-4">
        <h1 className="font-medium px-[14%] text-3xl text-pink">
          CITY ON DIVISION
        </h1>

        <div className="bg-pink h-[2px] w-full"></div>

        <div className="px-[14%] flex flex-col gap-32">
          <div className="flex flex-col gap-4">
            <div className="flex gap-8">
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex gap-3 w-fit">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-pink border-pink hover:bg-pink cursor-default">
                    AV/VR
                  </Button>
                </div>
                <p>
                  Puzzle is an Augmented Reality smartphone application, as an
                  interactive design-aid tool customized to the designers’
                  interest to reassemble the decomposed 3D model components into
                  a new composition.
                </p>
              </div>

              <div className="grid grid-cols-2 text-pink w-42 text-xs mt-auto h-fit">
                <span>DATE:</span> <span className="text-right">07/2018</span>
                <span>TPYE:</span>
                <span className="text-right">Collaboration</span>
                <span>ROLE:</span>
                <span className="text-right">Team leader</span>
                <span>CONTRIBUTOR:</span>
                <span className="text-right">Zhang Qiao, Tao Lizi</span>
                <span>SUPERVISOR: </span>
                <span className="text-right">Prof. Takehiko Nagakura</span>
              </div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/6081f873d36ae1e5acaca8f5_ar1.png"
              loading="lazy"
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
              />
              <div className="flex items-end gap-4">
                <img
                  className="w-[50%]"
                  src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/60820c7f0986d8adb067c4ba_Screen%20Shot%202021-04-22%20at%207.52.37%20PM.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 21vw, (max-width: 991px) 23vw, (max-width: 1919px) 24vw, 25vw"
                />
                <img
                  className="w-[50%]"
                  src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/60820c828d9aab04116831ad_Screen%20Shot%202021-04-22%20at%207.52.46%20PM.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 21vw, (max-width: 991px) 23vw, (max-width: 1919px) 24vw, 25vw"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              DEMO
            </div>
            <div className="flex gap-8">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/IxsbcX3faro?si=RFbuQevIK9oLwN2W"
                title="YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <div className="w-[40%]">
                Arrange physical markers as identifiers for virtual pieces into
                right positions, then select AR puzzle pieces from menu at the
                lower left corner. Transform the puzzle pieces on the phone
                screen by finger touching.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
