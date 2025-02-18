import { ProjectIntro } from '../components/InfoGrid';

const TIME_TUNNEL_INTRO = {
  tags: ['Data Visualization'],
  abstract:
    'There is always a gap between preservation and development. We used media technology to build a time tunnel, in wish to bridge the gap in the process of urban development. Demolished heritages of city landmarks were designed with interactive visual effects triggered by the motion and sound, thereby bringing the nostalgic memories to local citizens and also marking the city for visitors.',
  info: {
    DATE: '07/2017',
    TYPE: 'Collaboration',
    ROLE: 'Team leader',
    CONTRIBUTOR: 'Changqing Ye, Yifan Shen, et al.',
    SUPERVISOR: 'Prof. Takehiko Nagakura',
  },
};

export const TimeTunnel = () => {
  return (
    <div className="bg-white h-full">
      <div className="flex flex-col py-12 gap-4">
        <h1 className="font-medium px-[14%] text-3xl text-pink">TIME TUNNEL</h1>

        <div className="bg-pink h-[2px] w-full"></div>

        <div className="px-[14%] flex flex-col gap-24">
          <div className="flex flex-col gap-4">
            <ProjectIntro data={TIME_TUNNEL_INTRO} />
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              OVERVIEW
            </div>
            <div className="flex flex-col">
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/6082e26a7edb1ccfcff1588c_bridge5.png"
                loading="lazy"
                alt=""
              />
              <img
                className="px-20"
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/6082dcb57602d0371e028ca5_bridge.jpg"
                loading="lazy"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              PRESERVATION AND DEMOLITION
            </div>
            <div className="flex flex-col px-20">
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/6082e1952000ab15927e2a83_bridge2.png"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/6082e19ce3d48dc89c6398d5_bridge3.png"
                loading="lazy"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              SCHEMA
            </div>
            <div className="flex flex-col gap-8">
              <div>
                Although the cultural heritage of architecture is vanishing in
                Harbin, the ice culture is still highly celebrated. To raise the
                awareness of architectural preservation, the strategy is to
                combine two together with the mediation of technology, which
                acts like a time tunnel linking the past to the future.
              </div>
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/6082e1fc2a20799c2f46b2d9_bridge4.png"
                loading="lazy"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              FURTHER REJUVENATION BY MEDIA TECHNOLOGY
            </div>
            <div className="flex gap-8 max-lg:flex-col">
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/6082e4364ccb2d01932e20d3_Screen%20Shot%202021-04-23%20at%2011.13.31%20AM.png"
                loading="lazy"
                alt=""
              />
              <p className="flex flex-col gap-8">
                <div>
                  Two functions are working together to create an interactive
                  experience for participators.
                </div>
                <div>
                  First, audio interaction. By receiving the voice and analyzing
                  its channel value, a distorted heritage profile is real-time
                  projected as a metaphor for its transformation in a new era.
                </div>
                <div>
                  Second, motion interaction. With the use of an infrared
                  detector, visitors will be detected five meters away from an
                  ice gate, and a visual effect will be generated
                  simultaneously. An animation of multiple offsets of the
                  profile will be projected on the ice wall, acting like going
                  through a tunnel.
                </div>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              VISUAL EFFECT
            </div>
            <div className="flex flex-col gap-8">
              <img
                src="https://cdn.prod.website-files.com/604d92a8fa436349d81f2cb5/6082e5f75d30dbf9d1e614d1_Screen%20Shot%202021-04-23%20at%2011.21.20%20AM.png"
                loading="lazy"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium text-xl text-pink border-t-2 border-pink">
              DEMO
            </div>
            <div className="flex gap-8 flex-col">
              <p>
                Audio interaction and motion interaction are two functions
                working together to create an interactive experience for
                participators.
              </p>
              <div className="w-full h-full aspect-w-16 aspect-h-9">
                <iframe
                  title="TimeTunnel"
                  src="https://www.youtube.com/embed/3__M7xT8P6k?si=sL_DM0BW53ZM8ZMk"
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
