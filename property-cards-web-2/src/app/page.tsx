import s from "./page.module.css";
import { propertyCardsInfo } from "./propertyCardsInfo";
import { stationCardsInfo } from "./stationCardsInfo";

export default function Home() {
  return (
    <div className={s.mainWrapper}>
      {propertyCardsInfo.map(
        ({
          name,
          purchasePrice,
          mortageValue,
          rent,
          rentWithOneHouse,
          rentWithTwoHouse,
          rentWithThreeHouse,
          rentWithFourHouse,
          rentWithHotel,
          rentWithColourSet,
          housesCost,
          hotelsCosts,
          colourId,
        }) => (
          <div key={name} className={`${s.card} ${s["colour-" + colourId]}`}>
            <div className={s.cardInner}>
              <div className={s.title}>{name}</div>
              <div className={s.content}>
                <div className={s.mainPriceContainer}>
                  <div className={s.mainPriceLabel}>Purchase Price</div>
                  <div className={s.mainPriceNumber}>${purchasePrice}</div>
                </div>
                <div className={s.mainPriceContainer}>
                  <div className={s.mainPriceLabel}>Mortage Value</div>
                  <div className={s.mainPriceNumber}>${mortageValue}</div>
                </div>
                <hr />
                <div className={s.rentPriceContainer}>
                  <div className={s.rentPriceLabel}>Rent</div>
                  <div className={s.rentPriceNumber}>${rent}</div>
                </div>
                <div className={s.rentPriceContainer}>
                  <div className={s.rentPriceLabel}>Rent with colour set</div>
                  <div className={s.rentPriceNumber}>${rentWithColourSet}</div>
                </div>
                <div className={s.rentPriceContainer}>
                  <div className={s.rentPriceLabel}>Rent with one house</div>
                  <div className={s.rentPriceNumber}>${rentWithOneHouse}</div>
                </div>
                <div className={s.rentPriceContainer}>
                  <div className={s.rentPriceLabel}>Rent with two houses</div>
                  <div className={s.rentPriceNumber}>${rentWithTwoHouse}</div>
                </div>
                <div className={s.rentPriceContainer}>
                  <div className={s.rentPriceLabel}>Rent with three houses</div>
                  <div className={s.rentPriceNumber}>${rentWithThreeHouse}</div>
                </div>
                <div className={s.rentPriceContainer}>
                  <div className={s.rentPriceLabel}>Rent with four houses</div>
                  <div className={s.rentPriceNumber}>${rentWithFourHouse}</div>
                </div>
                <div className={s.rentPriceContainer}>
                  <div className={s.rentPriceLabel}>Rent with hotel</div>
                  <div className={s.rentPriceNumber}>${rentWithHotel}</div>
                </div>
                <hr />
                <div className={s.rentPriceContainer}>
                  <div className={s.rentPriceLabel}>Houses cost</div>
                  <div className={s.rentPriceNumber}>${housesCost}</div>
                </div>
                <div className={s.rentPriceContainer}>
                  <div className={s.rentPriceLabel}>Hotels cost</div>
                  <div className={s.rentPriceNumber}>${hotelsCosts}</div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
      {stationCardsInfo.map(
        ({
          name,
          mortageValue,
          purchasePrice,
          rentWithFourStation,
          rentWithOneStation,
          rentWithThreeStation,
          rentWithTwoStation,
        }) => (
          <div key={name} className={s.card}>
            <div className={s.cardInner}>
              <div className={s.title}>{name}</div>
              <div className={s.content}>
                <div className={s.mainPriceContainer}>
                  <div className={s.mainPriceLabel}>Purchase Price</div>
                  <div className={s.mainPriceNumber}>${purchasePrice}</div>
                </div>
                <div className={s.mainPriceContainer}>
                  <div className={s.mainPriceLabel}>Mortage Value</div>
                  <div className={s.mainPriceNumber}>${mortageValue}</div>
                </div>
                <hr />
                <div className={s.rentPriceContainer}>
                  <div className={s.rentPriceLabel}>Rent with one house</div>
                  <div className={s.rentPriceNumber}>${rentWithOneStation}</div>
                </div>
                <div className={s.rentPriceContainer}>
                  <div className={s.rentPriceLabel}>Rent with two houses</div>
                  <div className={s.rentPriceNumber}>${rentWithTwoStation}</div>
                </div>
                <div className={s.rentPriceContainer}>
                  <div className={s.rentPriceLabel}>Rent with three houses</div>
                  <div className={s.rentPriceNumber}>
                    ${rentWithThreeStation}
                  </div>
                </div>
                <div className={s.rentPriceContainer}>
                  <div className={s.rentPriceLabel}>Rent with four houses</div>
                  <div className={s.rentPriceNumber}>
                    ${rentWithFourStation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
