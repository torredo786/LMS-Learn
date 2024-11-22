// const { cards } = require("../../../DummyData");

const getCardData = async (req, res) => {
  // const cardData = await Card.find();
  return res.status(200).json({
    success: true,
    message: "Card data fetched successfully",
    data: null,
  });
};

module.exports = { getCardData };
