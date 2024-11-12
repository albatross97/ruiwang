export const Publication = () => {
  return (
    <div className="publication-page flex flex-col gap-10 py-10">
      <h3 className="text-primary px-[8%] font-semibold text-[32px] mt-20">
        Publication
      </h3>

      <div className="bg-primary h-[2px] w-full"></div>

      <div className="flex flex-col gap-4 px-[8%]">
        <div>
          Rui Wang, Donghao Gu, Zhaojing Wen, Shaohui Liu, Feng Jiang, et.al.,
          <strong>
            {' '}
            Intra-class Classification of Architectural Styles Using
            Visualization of CNN.{' '}
          </strong>
          In 5th International Conference on Artificial Intelligence and
          Security, New York, USA, LNCS 11632, pp. 205-216, 2019.
        </div>
        <div>
          <strong>
            ABSTRACT: <br />
          </strong>
          The classification of architectural style is one of the most
          challenging problems in architectural history due to its temporal
          inter-class relationships between different styles and geographical
          variation within one style. Previous computer version approaches have
          primarily focused on general classification of multiple architectural
          styles based on historical age, but very few studies have attempted
          deep learning to address intra-class classification problems according
          to geographical location, which might reveal the significance of local
          evolution and adaption of ancient architectural style. Therefore, we
          exemplified gothic architecture as a certain genre and leased a new
          dataset containing gothic architecture in three different countries:
          France, England, and Italy. Besides, a trained model is susceptible to
          overfitting due to fecundity of regional parameters and shortcoming of
          dataset. In this paper, we propose a new approach to accurately
          classify intra-class variance in the sense of their geographical
          locations: visualization of Convolutional Neural Network.
          Experimentation on this dataset shows that the approach of intra-class
          classification based on local features achieves high classification
          rate. We also present interpretable explanations for the results, to
          illustrate architectural indication of intra-class classification.
        </div>
      </div>
    </div>
  );
};
