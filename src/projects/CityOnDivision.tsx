import { Button } from '../lib/Button';

export const CityOnDivision = () => {
  return (
    <div className="bg-white h-full">
      <div className="flex flex-col py-12 gap-4">
        <h1 className="font-medium px-[14%] text-3xl text-pink">
          CITY ON DIVISION
        </h1>

        <div className="bg-pink h-[2px] w-full"></div>

        <div className="px-[14%] flex flex-col gap-16">
          <div className="flex gap-8">
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex gap-3 w-fit">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-pink border-pink hover:bg-pink cursor-default">
                  Data Visualization
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-pink border-pink">
                  Machine Learning
                </Button>
              </div>
              <p>
                This project focuses on the influence of ideology on the urban
                development of Berlin before and after reunification. By
                analyzing such factors as greenery, sky exposure, road, vehicle,
                color difference, and facade feature, we compared the evolution
                difference between West and East Berlin, which sheds dark on the
                future urban design of an integrated Berlin.
              </p>
            </div>
            <div className="grid grid-cols-2 text-pink w-40 text-xs mt-auto h-fit">
              <span>DATE:</span> <span className="text-right">09/2019</span>
              <span>TPYE:</span>
              <span className="text-right">Collaboration</span>
              <span>ROLE:</span>
              <span className="text-right">Collaborator</span>
              <span>CONTRIBUTOR:</span>
              <span className="text-right">Liu Haoyu</span>
              <span>SUPERVISOR: </span>
              <span className="text-right">Prof. Li Wenjing</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              IDEOLOGICAL IMPACT ON CITY EVOLUTION
            </div>
            <div>
              With the rise of the Berlin Wall in 1961, Berlin was divided into
              two parts - West and East. In order to fully demonstrate one’s
              strength to each other, East and West Berlin explored different
              urban designs, respectively, based on two distinct ideologies.
            </div>
            <div className="flex flex-col px-16">
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/608233c40a301068ae56b45b_Screen%20Shot%202021-04-22%20at%2010.40.50%20PM.png"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/608233c84491dc3d8bcd7631_Screen%20Shot%202021-04-22%20at%2010.40.31%20PM.png"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              TIME LINE
            </div>
            <div className="flex flex-col px-16">
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/608230c594a7a34e48b78596_Screen%20Shot%202021-04-22%20at%2010.27.25%20PM.png"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              METHOD
            </div>
            <p>
              The project visually analyzes the ideological influence on urban
              space through data scraping and machine learning and has meanings
              as follows:
            </p>
            <ol className="list-decimal list-outside flex flex-col pl-6">
              <li>
                Conduct quantitative analysis of the difference of urban space
                between East and West Berlin under different ideologies.
              </li>
              <li>
                From a human perspective to analyze the transformation of urban
                space in Berlin history.
              </li>
            </ol>
            <div className="flex flex-col px-16">
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/608236839967a1275524baec_berlin1.png"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/6082368ad257af1e06f60e35_berlin2.png"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/608234a28a6d2106019ccdec_Screen%20Shot%202021-04-22%20at%2010.44.17%20PM.png"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              HEATMAP
            </div>
            <div className="flex flex-col px-16">
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/60822ea7a9614147d2ecda17_heat1.png"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/60822e42a9614171cdecd4d1_heat2.png"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              ANALYSIS
            </div>
            <div className="flex flex-col px-16">
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/6082351dad7f06c307279cd4_Screen%20Shot%202021-04-22%20at%2010.46.15%20PM.png"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/608235259967a1001e24b5be_Screen%20Shot%202021-04-22%20at%2010.46.26%20PM.png"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              CONCLUSION
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col gap-3 w-[70%]">
                <p>
                  We show in this proof-of-concept demonstration that, by
                  comparing the evolution of urban space in West and East Berlin
                  through the technique of data scraping and machine learning,
                  we evaluate the
                  <span className="text-pink font-medium">
                    {' '}
                    impact of ideology on urban development
                  </span>
                  , from the point of green-view rate, sky-exposure rate, facade
                  delicacy.
                </p>
                <ol className="list-decimal list-outside flex flex-col gap-3 pl-6">
                  <li>
                    For the{' '}
                    <span className="text-pink font-medium">
                      green-view ratio
                    </span>
                    , it was concluded that West Berlin has a higher ratio
                    because it adopted the concept of "Urban Landscape" (fusing
                    green space with urban areas), while East Berlin conformed
                    to its ideology, building palace-like apartments uncovered
                    with trees as grand living space for workers.
                  </li>
                  <li>
                    From the point of the
                    <span className="text-pink font-medium">
                      {' '}
                      sky-exposure ratio
                    </span>
                    , East Berlin has a higher ratio because of the arrangement
                    of low-density urban space in the pursuit of grandness. At
                    the same time, West Berlin embraced the concept of "Urbanity
                    due to density" for practical needs.
                  </li>
                  <li>
                    According to the ratio of{' '}
                    <span className="text-pink font-medium">
                      facade delicacy
                    </span>
                    , West Berlin has a higher ratio due to the concept of a
                    diverse and international society, while East Berlin applied
                    a uniform facade to eradicate any social or economic
                    privilege.
                  </li>
                </ol>
              </div>
              <div className="relative w-[30%] h-fit">
                <div className="absolute flex flex-col h-full text-right mr-0 right-0 justify-around translate-y-[12%] text-xs">
                  <div>Green-view</div>
                  <div>Sky-exposure</div>
                  <div>Facade delicacy</div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/60822a1ba10d9fef88a0cbea_con4.jpg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
